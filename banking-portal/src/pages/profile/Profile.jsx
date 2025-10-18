import React from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Profile() {
  const navigate = useNavigate();
  function logoutHandler() {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  }
  return (
    <>
      <div className="w-full min-h-screen bg-amber-100">
  <div className="w-full min-h-screen sm:min-h-[300px] bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-500 sm:rounded-bl-4xl sm:rounded-br-4xl">
    <Navbar />

    <div className="w-full min-h-[240px] flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-5 sm:gap-0 px-3 py-10">
      <div className="w-[90%] sm:w-[30%] h-[220px] bg-white/20 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl"></div>
      <div className="w-[90%] sm:w-[30%] h-[220px] bg-white/20 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl"></div>
      <div className="w-[90%] sm:w-[30%] h-[220px] bg-white/20 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl"></div>
    </div>
  </div>
<Button onclick={logoutHandler} text="Logout"/>
</div>
    </>
  );
}

export default Profile;


