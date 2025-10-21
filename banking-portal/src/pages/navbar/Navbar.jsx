import React, { useState } from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

   const navigate = useNavigate();
  function logoutHandler() {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  }

  return (
    <>
      <div className="w-full h-16 backdrop-blur-md bg-white/10 border-b border-white/20 flex items-center justify-between px-3 sm:px-8">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <FontAwesomeIcon
            icon={faBuildingColumns}
            className="text-[24px] sm:text-[30px] text-white drop-shadow-md"
          />
          <p className="text-base xs:text-lg sm:text-xl font-semibold text-white tracking-wide whitespace-nowrap">
            Nexus Bank
          </p>
        </div>
        <div
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/30 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all cursor-pointer flex justify-center items-center"
          onClick={toggleMenu}
        ></div>
      </div>

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 w-[260px] h-[345px] z-10 bg-white/20 backdrop-blur-md border-l rounded-2xl border-white/20 shadow-xl text-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="self-end text-xl font-bold hover:text-purple-300"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <p className="text-lg font-medium cursor-pointer hover:text-purple-200">
          Wallet
        </p>
        <p className="text-lg font-medium cursor-pointer hover:text-purple-200">
          About Us
        </p>
        <p className="text-lg font-medium cursor-pointer hover:text-purple-200">
          Settings
        </p>
         <button className='bg-purple-500 px-18 py-3 cursor-pointer rounded-2xl text-white font-semibold text-xl' onClick={logoutHandler}>Logout</button>
      </div>
    </>
  );
}

export default Navbar;
