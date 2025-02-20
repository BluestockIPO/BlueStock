import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">
        <img src="src/assets/bluestock-logo.png" alt="Bluestock" />
      </div>

      {/* Middle: Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#">Products</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Media</a></li>
        <li><a href="#">Support</a></li>
      </ul>

      {/* Right: Sign In / Sign Up */}
      <div className="navbar-buttons">
        <button className="signin-button" onClick={() => navigate("/login")}>Sign In</button>
        <button className="signup-button" onClick={() => navigate("/signup")}>Sign Up Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
