import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faCog,
  faFileAlt,
  faQuestionCircle,
  faBars,
  faTimes,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import usersStore from "../../store/usersStore";
import { NavLink } from "react-router-dom";

function SideBar({onclick}) {
  const { currentUser } = usersStore();
  const [isOpen, setIsOpen] = useState(false);
  

  const menuItems = [
    { text: "My loans", icon: faMoneyCheckAlt, move: `/dashboard` },
    { text: "Settings", icon: faCog, move: "/setting" },
    { text: "Transaction", icon: faFileAlt, move: "/transaction" },
    { text: "FAQ", icon: faQuestionCircle, move: "/faq" },
    { text: "Logout", icon: faArrowRightToBracket, clicked: onclick },
  ];
   
  // This code is to generate the 1st characters of first and last name
  let Name = currentUser?.username.toUpperCase().split(" ")
  let char = ""
  for (let i = 0; i <= Name.length-1; i++) {
    let element = Name[i].charAt(0);
    char += element
  }

  
  

  return (
    <>
      {/* Toggle Button for small and medium */}
      <button
        className="xl:hidden fixed top-4 left-4 z-50 bg-gray-100 shadow-md p-3 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`
      fixed top-0 left-0 
      w-80 xl:w-[25%] 2xl:w-[20%]
      min-h-screen xl:min-h-screen
      bg-white border-r border-gray-200 shadow-md 
      p-6 flex flex-col justify-between
      overflow-y-auto
      transition-transform duration-300 z-40 lg:fixed
      ${isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}
    `}
      >
        {/* Top Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-8 ml-16 xl:ml-0 2xl:text-4xl">
            Non-bank
          </h1>

          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 2xl:w-20 2xl:h-20 bg-lime-800 rounded-full flex items-center justify-center text-lg 2xl:text-2xl font-bold text-white">
              {char}
            </div>
            <div>
              <p className="text-lg 2xl:text-2xl font-semibold text-gray-800">
                {currentUser?.username}
              </p>
              <p className="text-sm 2xl:text-xl text-gray-500">
                +{currentUser?.phone}
              </p>
            </div>
          </div>

          {/* Menu List */}
          <div className="space-y-2 lg: lg:overflow-y-auto lg:h-64  xl:h-auto hide-scrollbar">
            {menuItems.map((item) =>
              item.move ? (
                <NavLink key={item.text} to={item.move}>
                  {({ isActive }) => (
                    <div
                      className={`flex items-center gap-4 2xl:gap-6 h-15 w-full rounded-xl cursor-pointer transition duration-200 
            ${isActive ? "bg-gray-50" : "hover:bg-gray-50"}`}
                    >
                      <div
                        className={`w-12 2xl:w-14 h-12 2xl:h-14 2xl:text-xl ml-2 flex items-center justify-center rounded-md transition duration-200 
              ${isActive ? "bg-lime-800" : "group-hover:bg-lime-800"}`}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className={`${
                            isActive
                              ? "text-white"
                              : "text-gray-600 group-hover:text-white"
                          }`}
                        />
                      </div>
                      <p className="text-gray-800 font-medium 2xl:text-xl">
                        {item.text}
                      </p>
                    </div>
                  )}
                </NavLink>
              ) : (
                // ✅ Logout Button (no NavLink)
                <div
                  key={item.text}
                  onClick={item.clicked}
                  className="flex items-center gap-4 2xl:gap-6 h-15 w-full rounded-xl cursor-pointer transition duration-200 hover:bg-gray-50"
                >
                  <div className="w-12 2xl:w-14 h-12 2xl:h-14 2xl:text-xl ml-2 flex items-center justify-center rounded-md transition duration-200 group-hover:bg-red-600 bg-red-500">
                    <FontAwesomeIcon icon={item.icon} className="text-white" />
                  </div>
                  <p className="text-red-600 font-medium 2xl:text-xl">
                    {item.text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom Card */}
        <div className="w-full h-auto 2xl:mb-5">
          <div className="relative w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl p-5 shadow-lg mt-4 2xl:mb-3">
            <div className="text-sm opacity-80 2xl:text-3xl">Balance</div>
            <div className="text-3xl font-bold mt-1 2xl:text-5xl">
              ${currentUser?.balance}
            </div>
            <div className="text-xs opacity-70 mt-2 2xl:text-2xl">
              **** 5008
            </div>
            <span className="absolute top-4 right-4 text-sm font-semibold">
              VISA
            </span>
          </div>

          {/* <div
            className="px-3 py-3 cursor-pointer rounded-2xl text-red-600 font-semibold text-xl 2xl:text-2xl mb-2 group  hover:text-red-700"
            onClick={logoutHandler}
          >
            <FontAwesomeIcon
              icon={faArrowRightToBracket}
              className="text-xl 2xl:text-4xl text-red-600 mr-2 group-hover:text-red-700"
            />
            Logout
          </div> */}
        </div>
      </div>

      {/* Overlay for mobiles when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 xl:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default SideBar;
