import React from "react";
import DocCard from "../docCard/DocCard";

function Document() {
  const docsData = [
    { name: "ID Card", status: "Verified", time: "19 Mar, at 2:51 PM" },
    { name: "Photo with ID Card", status: "Declined", time: "09 Mar, at 1:22 AM" },
    { name: "Bank information", status: "Waiting", time: "07 Mar, at 6:44 PM" },
    { name: "IBANK", status: "Declined", time: "08 Mar, at 4:50 PM" },
    { name: "Registration", status: "Verified", time: "07 Mar, at 10:01 AM" },
  ];

  return (
   <div className="w-full md:w-[60%] lg:w-[70%] 2xl:w-[68%] bg-white rounded-lg min-h-[330px] 2xl:h-[60vh] p-5 2xl:p-8 shadow-md">
  <p className="text-xl 2xl:text-2xl font-bold text-zinc-700 mb-3 2xl:mb-5">Docs</p>

  {/* Header Row */}
  <div className="hidden sm:flex w-full h-8 2xl:h-10 justify-evenly items-center px-3 2xl:px-5 border-b border-zinc-200 mb-1 2xl:mb-3">
    <p className="w-[37%] text-sm 2xl:text-base font-semibold text-zinc-600">Name</p>
    <p className="w-[30%] text-sm 2xl:text-base font-semibold text-zinc-600 text-center ml-10">Status</p>
    <p className="w-[30%] text-sm 2xl:text-base font-semibold text-zinc-600 text-right mr-15">Time</p>
  </div>

  {/* Cards List */}
  <div className="2xl:space-y-2 overflow-y-auto 2xl:max-h-[calc(50vh-80px)] hide-scrollbar">
    {docsData.map((doc, index) => (
      <DocCard
        key={index}
        name={doc.name}
        status={doc.status}
        time={doc.time}
      />
    ))}
  </div>
</div>

  );
}

export default Document;
