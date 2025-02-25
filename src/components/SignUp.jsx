import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../assets/logo.webp";
import { RegisterApi } from "../services/Api";
import { storageUserData } from "../services/Storage";
import { isAuthenticated } from "../services/Auth";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // NEW: Loading state
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    RegisterApi(inputs)
      .then((response) => {
        if (response && response.idToken) {
          storageUserData(response.idToken); 
        } else {
          console.error("Invalid response structure:", response);
          alert("Sign-up failed. Please try again.");
        }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          const errorMessage = err.response.data.error.message;
          switch (errorMessage) {
            case "EMAIL_EXISTS":
              alert("This email is already in use. Please use a different email.");
              break;
            case "WEAK_PASSWORD":
              alert("Your password is too weak. Please use a stronger password.");
              break;
            case "INVALID_EMAIL":
              alert("The email address is invalid. Please check your email.");
              break;
            default:
              alert("Sign-up failed. Please try again.");
          }
        } else {
          alert("Sign-up failed. Please check your inputs and try again.");
        }
        console.error("API Error:", err);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };
 

  

  const handleInputs = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert("Google Sign-Up Successful");
      storageUserData(result.user.accessToken);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  if(isAuthenticated()){
    console.log("--------->")
    return <Navigate to="/login" />
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
      <img src={logo} alt="Logo" className="w-60 mb-6" />
      <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>

      <form onSubmit={handleSignUp} className="w-72">
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border rounded mb-4"
          name="name"
          onChange={handleInputs}
          required
        />

        <label className="block text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded mb-4"
          onChange={handleInputs}
          name="email"
          required
        />

        <label className="block text-sm font-medium mb-1">Password</label>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full p-2 border rounded mb-4 pr-10"
            onChange={handleInputs}
            name="password"
            required
          />
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </span>
        </div>

        <ReCAPTCHA sitekey="6LcuUt0qAAAAACowY0pGCDarj4eUhPj6q8IN7G9s" onChange={() => setIsVerified(true)} />

        <button
          type="submit"
          className={`w-full text-white p-2 rounded transition mt-4 ${isVerified ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          disabled={!isVerified || isLoading}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <p className="mt-4 text-sm font-medium text-gray-700">Or sign up with</p>

      <button
        onClick={handleGoogleSignUp}
        className="w-72 flex items-center justify-center gap-2 bg-white border border-gray-300 p-2 rounded mt-3 shadow-md hover:bg-gray-100 transition"
      >
        <FcGoogle size={20} /> Sign Up with Google
      </button>

      <p onClick={() => navigate("/login")} className="mt-2 text-sm text-blue-600 cursor-pointer hover:underline">
        Already have an account? Login
      </p>
    </div>
  );
}
