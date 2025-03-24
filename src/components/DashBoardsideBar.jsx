import React from 'react';
import { BarChart, ShoppingCart, FileText, MessageCircle, Settings, Server, User, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashBoardsideBar = ({ onLogout }) => {
  const navigate = useNavigate();
  return (
    <aside className="w-64 h-screen bg-gray-70 p-5 shadow-md">
      <img src="src/assets/logo.webp" alt="Logo" className="mb-4" />
      <h3 className="text-gray-400 uppercase text-sm font-semibold">Menu</h3>
      <ul className="mt-3 space-y-2">
        <li className="flex items-center p-2 bg-indigo-100 text-indigo-600 rounded-lg">
          <BarChart className="w-5 h-5 mr-3" />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-lg cursor-pointer">
          <ShoppingCart className="w-5 h-5 mr-3" />
          <span onClick={() => navigate("/ipomanage")}>Manage IPO</span>
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
        onClick={onLogout}
        className="w-full mt-6 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default DashBoardsideBar;