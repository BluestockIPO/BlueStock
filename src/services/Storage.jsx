import { data } from "react-router-dom";

export const storageUserData = (data) => {
    if (!data) {
      console.error("Invalid token received:", data);
      return;
    }
    localStorage.setItem("idToken", data);
  };

  export const getUserData=()=>{
    return localStorage.getItem("idToken")
  }
  