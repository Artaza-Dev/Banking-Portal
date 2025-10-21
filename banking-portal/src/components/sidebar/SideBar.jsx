import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faCog,
  faFileAlt,
  faQuestionCircle,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function logoutHandler() {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  }

  const menuItems = [
    { text: "My loans", icon: faMoneyCheckAlt },
    { text: "Settings", icon: faCog },
    { text: "Forms", icon: faFileAlt },
    { text: "FAQ", icon: faQuestionCircle },
  ];

  return (
    <>
      {/* Toggle Button for small and medium */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-100 shadow-md p-3 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`
    fixed lg:static top-0 left-0 h-screen lg:h-[670px] w-64 xl:w-[25%] 
    bg-white border-r border-gray-200 shadow-md p-6 flex flex-col justify-between
    transition-transform duration-300 z-40
    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `}
      >
        {/* Top Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Non-bank</h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-indigo-300 rounded-full flex items-center justify-center text-lg font-bold text-white">
              HA
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">
                Hafiz Artaza
              </p>
              <p className="text-sm text-gray-500">+923427292191</p>
            </div>
          </div>

          {/* Menu List */}
          <div className="space-y-2">
            {menuItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 h-15 w-full group hover:bg-gray-50 rounded-xl cursor-pointer transition duration-200"
              >
                <div className="w-12 h-12 ml-2 flex items-center justify-center rounded-md transition duration-200 group-hover:bg-green-700 ">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-gray-600 group-hover:text-white"
                  />
                </div>
                <p className="text-gray-800 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        

        {/* Bottom Card */}
        <div className="relative w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl p-5 shadow-lg">
          <div className="text-sm opacity-80">Balance</div>
          <div className="text-3xl font-bold mt-1">$2302.00</div>
          <div className="text-xs opacity-70 mt-2">**** 5008</div>
          <span className="absolute top-4 right-4 text-sm font-semibold">
            VISA
          </span>
          
        </div>
        <button
          className="bg-green-700 px-18 py-3 cursor-pointer rounded-2xl text-white font-semibold text-xl mb-2"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>

      {/* Overlay for mobiles when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default SideBar;
