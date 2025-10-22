import React, { useState } from "react";
import Input from "../input/Input";
import usersStore from "../../store/usersStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function TransactionPopup({ onclick }) {
  const { currentUser, addAmount, withDrawAmount } = usersStore();
  const[amount, setAmount] = useState("")
  function addHandler(){
    addAmount(amount, currentUser.email)
  }
  function withdrawHandler(){
    withDrawAmount(amount, currentUser.email)
  }
  return (
    <>
      <div className="absolute inset-0 flex justify-center bg-black/50 backdrop-blur-sm z-50">
        <div className="w-[80%] h-[200px] sm:w-[400px] bg-white rounded-2xl p-6 shadow-xl text-center mt-40">
          <div className="h-8 w-full flex justify-between mb-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">User Data</h2>
            <button onClick={onclick}>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-xl hover:text-zinc-600"
              />
            </button>
          </div>

          <div className="space-y-4">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Enter amount"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
              onChange={(e)=> setAmount(e.target.value)}
            />

            {/* Buttons */}
            <div className="flex justify-between gap-3">
              <button className="w-1/2 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition" onClick={addHandler}>
                Add
              </button>
              <button className="w-1/2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition" onClick={withdrawHandler}>
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionPopup;
