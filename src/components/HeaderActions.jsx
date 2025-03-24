import React, { useState, useEffect } from 'react';
import { Search, Bell } from 'lucide-react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase/firebaseConfig" // Ensure this path is correct

export default function HeaderActions() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || "User");
      } else {
        setUserName("User");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center justify-between w-full p-4 bg-white shadow-md">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent ml-2 focus:outline-none"
        />
      </div>

      {/* User Info & Bell Icon */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
            {userName.charAt(0)}
          </div>
          <span className="text-gray-700 font-medium">Hi, {userName}</span>
        </div>
        <Bell className="w-6 h-6 text-gray-500 cursor-pointer hover:text-indigo-600" />
      </div>
    </div>
  );
}
