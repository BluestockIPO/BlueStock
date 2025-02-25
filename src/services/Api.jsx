import axios from "axios";
import { getUserData } from "./Storage";

const API_KEY = "AIzaSyADhAAUEYkrM7sKvG-3SI18XlNCqrLFY6Q"; // Replace with your actual Firebase API key
const REGISTER_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const USER_DETAILS = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;
const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

export const RegisterApi = async (input) => {
  const data = {
    displayName: input.name,
    email: input.email,
    password: input.password,
    returnSecureToken: true,
  };

  try {
    const response = await axios.post(REGISTER_URL, data);
    console.log("Registration Success:", response.data); // Log the full response
    return response.data; // Return the response data
  } catch (error) {
    if (error.response) {
      console.error("Firebase Registration Error:", error.response.data);
    } else {
      console.error("Network/Server Error:", error.message);
    }
    throw error;
  }
};


export const LoginApi = async (inputs) => {
  const data = { email: inputs.email, password: inputs.password };

  try {
    const response = await axios.post(LOGIN_URL, data);
    console.log("Login Success:", response.data); // Log the full response
    return response.data; // Return the response data
  } catch (error) {
    if (error.response) {
      console.error("Login Error:", error.response.data);
    } else {
      console.error("Network/Server Error:", error.message);
    }
    throw error;
  }
};



export const UserDetailsApi = async () => {
  const idToken = getUserData();

  if (!idToken) {
    console.error("No ID token found. User is not authenticated.");
    throw new Error("User is not authenticated.");
  }

  const data = {
    idToken: idToken,
  };

  try {
    const response = await axios.post(USER_DETAILS, data);
    console.log("User Details Success:", response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.error.message === "INVALID_ID_TOKEN") {
      console.error("Token expired or invalid. Redirecting to login...");
      // Clear the expired token and redirect to login
      localStorage.removeItem("idToken");
      window.location.href = "/login";
    } else {
      console.error("Firebase User Details Error:", error.response.data);
    }
    throw error;
  }
};