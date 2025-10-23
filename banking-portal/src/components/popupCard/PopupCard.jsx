import React from "react";
import usersStore from "../../store/usersStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faTimes
} from "@fortawesome/free-solid-svg-icons";
function PopupCard({ onclick }) {
  const { currentUser } = usersStore();
  return (
    <>
     <div className="absolute inset-0 flex justify-center items-center bg-black/40 backdrop-blur-md z-50">
  <div className="w-[85%] sm:w-[420px] bg-white rounded-2xl p-6 shadow-2xl border border-white/50 
                  backdrop-blur-xl transition-all duration-300 animate-fadeIn">
    
    {/* Header Section */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">User Details</h2>
      <button 
        onClick={onclick} 
        className="p-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
      >
        <FontAwesomeIcon icon={faTimes} className="text-lg text-gray-600 hover:text-gray-800" />
      </button>
    </div>
    
    {/* Info Section */}
    <div className="space-y-3">
      <div className="flex justify-between pb-1">
        <p className="text-gray-700 font-medium">UserName:</p>
        <p className="text-gray-600">{currentUser.username}</p>
      </div>

      <div className="flex justify-between pb-1">
        <p className="text-gray-700 font-medium">Email:</p>
        <p className="text-gray-600">{currentUser.email}</p>
      </div>

      <div className="flex justify-between pb-1">
        <p className="text-gray-700 font-medium">Balance:</p>
        <p className="text-gray-600">${currentUser.balance}</p>
      </div>

      <div className="flex justify-between  pb-1">
        <p className="text-gray-700 font-medium">Phone:</p>
        <p className="text-gray-600">+{currentUser.phone}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-700 font-medium">Password:</p>
        <p className="text-gray-600">{currentUser.password}</p>
      </div>
    </div>

  </div>
</div>

    </>
  );
}

export default PopupCard;
