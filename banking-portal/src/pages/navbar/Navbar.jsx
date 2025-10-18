import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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

        
        <div className="flex items-center gap-3 sm:gap-8">
          <p className="text-xs xs:text-sm sm:text-md md:text-xl font-medium text-white hover:text-amber-200 transition-all cursor-pointer whitespace-nowrap">
            Wallet
          </p>
          <p className="text-xs xs:text-sm sm:text-md font-medium md:text-xl text-white hover:text-amber-200 transition-all cursor-pointer whitespace-nowrap">
            About Us
          </p>
          <div className="h-7 w-7 sm:h-10 sm:w-10 rounded-full bg-white/30 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all cursor-pointer"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
