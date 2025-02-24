import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../assets/logo.webp";
import { isAuthenticated } from "../services/Auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify the reCAPTCHA");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In Successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  if(isAuthenticated()){
    return <Navigate to="/dashboard" />
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
      <img src={logo} alt="Logo" className="w-60 mb-6" />

      <form onSubmit={handleLogin} className="w-72">
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="flex justify-start">
          <p
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-blue-600 cursor-pointer hover:underline mb-1"
          >
            Forgot Password?
          </p>
        </div>

        <label className="block text-sm font-medium mb-1">Password</label>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full p-2 border rounded mb-4 pr-10"
            onChange={(e) => setPassword(e.target.value)}
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
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition mt-4"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm font-medium text-gray-700">Sign in with</p>

      <button
        onClick={handleGoogleLogin}
        className="w-72 flex items-center justify-center gap-2 bg-white border border-gray-300 p-2 rounded mt-3 shadow-md hover:bg-gray-100 transition"
      >
        <FcGoogle size={20} /> Sign in with Google
      </button>

      <p
        onClick={() => navigate("/signup")}
        className="mt-2 text-sm text-blue-600 cursor-pointer hover:underline"
      >
        Create an Account
      </p>
    </div>
  );
}
