import React from "react";
import logo from '../../assets/logos.png'
function DocCard({ name, status, time }) {
  const getColor = (status) => {
    if (status === "Verified") return "bg-green-100 text-green-700";
    if (status === "Declined") return "bg-red-100 text-red-700";
    if (status === "Waiting") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="w-full py-3 2xl:py-4 flex flex-col sm:flex-row items-start sm:items-center border-b last:border-b-0 border-zinc-200 px-3 2xl:px-5 gap-2 sm:gap-0">
  <div className="w-full sm:w-[37%] flex items-center">
    <img src={logo} className="h-12 w-15 2xl:h-14 2xl:w-16" alt="" />
    <p className="text-sm sm:text-base 2xl:text-lg text-zinc-600 ml-3">{name}</p>
  </div>

  <div className="w-full sm:w-[30%] flex justify-start sm:justify-center">
    <span className={`text-xs 2xl:text-sm font-semibold py-1 px-3 2xl:py-2 2xl:px-4 rounded-full ${getColor(status)}`}>
      {status}
    </span>
  </div>

  <div className="w-full sm:w-[30%] flex justify-start sm:justify-end">
    <p className="text-xs sm:text-sm 2xl:text-base text-zinc-600">{time}</p>
  </div>
</div>

  );
}

export default DocCard;
