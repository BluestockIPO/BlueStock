import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import UpcomingIpo from "./components/ipos/UpcomingIpo";
import DashBoard from "./components/DashBoard"
import "./styles/App.css";
import IpoManage from "./components/IpoManage";

function Layout() {
  const location = useLocation();

  // Hide Navbar on Login & Signup pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/dashboard" || location.pathname === "/ipomanage";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<UpcomingIpo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/ipomanage" element={<IpoManage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
