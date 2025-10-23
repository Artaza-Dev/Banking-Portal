import React from 'react'
import { useNavigate } from 'react-router-dom';
function LogoutPopup({onclick}) {
    const navigate = useNavigate();
      function logoutHandler() {
        localStorage.removeItem("isAuthenticated");
        navigate("/");
      }
  return (
    <>
       <div className="absolute inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
  <div className="w-[85%] sm:w-[420px] bg-white rounded-2xl p-6 shadow-2xl text-center relative animate-scale-in">
    
    {/* Title */}
    <h2 className="text-xl font-semibold text-gray-800 mb-2">
      Are you sure?
    </h2>

    {/* Description */}
    <p className="text-gray-500 mb-6">
      Do you really want to logout? You will need to login again to access your account.
    </p>

    {/* Buttons */}
    <div className="flex justify-center gap-4">
      <button
        className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition cursor-pointer"
        onClick={onclick} 
      >
        Cancel
      </button>

      <button
        className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition cursor-pointer"
        onClick={logoutHandler} 
      >
        Logout
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default LogoutPopup