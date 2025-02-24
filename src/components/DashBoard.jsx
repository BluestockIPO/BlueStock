import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { BarChart, ShoppingCart, FileText, MessageCircle, Settings, Server, User, Info } from "lucide-react";

const DashBoard = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
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
    <aside className="w-64 bg-gray-50 h-screen p-5 shadow-md">
      {/* User Greeting */}
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold text-gray-700">Welcome, {userName}!</h2>
      </div>

      {/* Menu Section */}
      <div>
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
      </div>

      {/* Others Section */}
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

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full mt-6 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default DashBoard;
