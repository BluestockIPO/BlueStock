import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { BarChart, ShoppingCart, FileText, MessageCircle, Settings, Server, User, Info, Bell, Search } from "lucide-react";
import DashBoardsideBar from "./DashBoardsideBar";
import { ArrowUp } from "lucide-react";
import HeaderActions from "./HeaderActions";




const DashBoard = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || "User");
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
      <DashBoardsideBar onLogout={handleLogout} />

      <main className="flex-1 bg-white">
        <HeaderActions />
        <h1 className="text-2xl p-5 text-blue-800 font-bold">DashBoard</h1>
        <div className="relative flex">
          <div className="p-6 grid">
            {/* Dashboard content goes here */}
            <h2 className="text-xl font-semibold">IPO Dashboard India</h2>
            <div className="flex items-center gap-2 mt-2 text-green-600 font-medium">
              <ArrowUp size={16} /> <span className="text-green-600">20</span> <span className="text-gray-500">IPO in Gain</span>
            </div>
            <div className="relative flex items-center mt-20">
              {/* Total IPO */}
              <div className="w-44 h-44 bg-orange-400 text-white rounded-full flex flex-col items-center justify-center text-lg font-bold relative shadow-lg">
                <span className="text-4xl">30</span>
                <span className="text-sm font-normal">Total IPO</span>
                <div className="absolute w-48 h-48 border-2 border-orange-500 rounded-full -right-2 -bottom-2 shadow-lg" ></div>
              </div>
              {/* IPO in Gain */}
              <div className="absolute -left-16 bottom-20 w-36 h-36 bg-blue-400 text-white rounded-full flex flex-col items-center justify-center text-lg font-bold relative shadow-lg">
                <span className="text-3xl">20</span>
                <span className="text-sm font-normal">IPO in Gain</span>
                <div className="absolute w-40 h-40 border-2 border-blue-500 rounded-full -left-2 -bottom-2 shadow-lg"></div>
              </div>
              {/* IPO in Loss */}
              <div className="absolute -left-30 top-15 w-32 h-32 bg-purple-400 text-white rounded-full flex flex-col items-center justify-center text-lg font-bold relative shadow-lg">
                <span className="text-2xl">9</span>
                <span className="text-sm font-normal">IPO in Loss</span>
                <div className="absolute w-36 h-36 border-2 border-purple-500 rounded-full -right-2 -top-2 shadow-lg"></div>
              </div>
            </div>
          </div>
          <div className="relative right-15 mt-5">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <div className="flex items-center gap-2 mt-2 text-green-600 font-medium">
              <span className="text-gray-500">Adipiscing elit, sed do eiusmod tempor</span>
            </div>
            <ul className="mt-10 space-y-8">
              {["NSE India", "BSE India", "SEBI", "Money Control"].map((item, index) => (
                <li key={index} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black-200 rounded-full shadow-lg">
                      <img src="src/assets/react.svg" alt="" />
                    </div>
                    <span>{item}</span>
                  </div>
                  <span className="text-gray-500 cursor-pointer">Visit Now</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative chart mt-5">
            <div className="flex">
              <h2 className="text-xl font-semibold">Main Board IPO</h2>
              <button className="ml-20  border p-2 bg-blue-50 text-blue-600 rounded-xl shadow-lg cursor-pointer">View Report</button>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <span className="text-gray-500">From 01 Jan 2024</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;