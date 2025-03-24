import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search, Bell } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";
  const hideButton = location.pathname === "/dashboard"; 
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center text-lg font-bold text-black">
        <img src="src/assets/bluestock-logo.png" alt="Bluestock" className="h-8 mr-3" />
      </div>

      {/* Middle: Navigation Links */}
      <ul className="flex gap-6 text-gray-600 ml-10">
        <li>
          <a href="#" className="hover:text-blue-500">Products</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Pricing</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Community</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Media</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Support</a>
        </li>
      </ul>

     

      {/* Sign In / Sign Up (Hidden on Dashboard) */}
      {!hideButton && (
        <div className="ml-auto flex gap-4">
          <button 
            className="text-gray-600 hover:text-blue-500 transition-colors cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
