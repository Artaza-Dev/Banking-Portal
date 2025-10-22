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
      <div className="absolute inset-0 flex justify-center bg-black/50 backdrop-blur-sm z-50">
        <div className="w-[80%] h-[230px] sm:w-[400px] bg-white rounded-2xl p-6 shadow-xl text-center mt-40">
          <div className="h-8 w-full flex justify-between mb-3">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">User Data</h2>
                      <button onClick={onclick}><FontAwesomeIcon icon={faTimes} className="text-xl hover:text-zinc-600" /></button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">UserName:</p>
              <p className="text-gray-600">{currentUser.username}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Email:</p>
              <p className="text-gray-600">{currentUser.email}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Balance:</p>
              <p className="text-gray-600">${currentUser.balance}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Phone:</p>
              <p className="text-gray-600">+{currentUser.phone}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Password:</p>
              <p className="text-gray-600">{currentUser.password}</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default PopupCard;
