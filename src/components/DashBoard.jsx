import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { BarChart, ShoppingCart, FileText, MessageCircle, Settings, Server, User, Info, Bell, Search } from "lucide-react";

const DashBoard = () => {
  const [userName, setUserName] = useState("Vishal"); // Default name for now

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || "Vishal");
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully");
    window.location.href = "/";
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 p-5 shadow-md">
        <img src="src/assets/logo.webp" alt="Logo" className="mb-4" />
        <h3 className="text-gray-400 uppercase text-sm font-semibold">Menu</h3>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center p-2 bg-indigo-100 text-indigo-600 rounded-lg">
            <BarChart className="w-5 h-5 mr-3" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <ShoppingCart className="w-5 h-5 mr-3" />
            <span>Manage IPO</span>
          </li>
          <li className="flex items-center p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FileText className="w-5 h-5 mr-3" />
            <span>IPO Subscription</span>
          </li>
          <li className="flex items-center p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MessageCircle className="w-5 h-5 mr-3" />
            <span>IPO Allotment</span>
          </li>
        </ul>
        <div className="mt-6">
          <h3 className="text-gray-400 uppercase text-sm font-semibold">Others</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </li>
            <li className="flex items-center p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Server className="w-5 h-5 mr-3" />
              <span>API Manager</span>
            </li>
            <li className="flex items-center p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <User className="w-5 h-5 mr-3" />
              <span>Accounts</span>
            </li>
            <li className="flex items-center p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Info className="w-5 h-5 mr-3" />
              <span>Help</span>
            </li>
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="w-full mt-6 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent ml-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold bg-orange-300">
                {userName.charAt(0)}
              </div>
              <span className="text-gray-700  font-medium ">Hi, {userName}</span>
            </div>
            <Bell className="w-6 h-6 text-gray-500 cursor-pointer hover:text-indigo-600" />
          </div>
        </header>
        <div className="p-6"> {/* Placeholder for dashboard content */} </div>
      </main>
    </div>
  );
};

export default DashBoard;