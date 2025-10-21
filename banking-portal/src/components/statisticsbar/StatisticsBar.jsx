import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
function StatisticsBar() {
  return (
    <div className="w-full sm:w-full md:w-[40%] lg:w-[30%] bg-white h-auto rounded-lg p-5 shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-zinc-700">Statistics</h2>
        <FontAwesomeIcon icon={faArrowRight} className="text-gray-500" />
      </div>

      {/* Income & Expense Section */}
      <div className="flex justify-between mb-6">
        <div>
          <p className="flex items-center gap-1 text-sm font-semibold text-green-600">
           <FontAwesomeIcon icon={faArrowUp} />
            $3 430
          </p>
          <p className="text-xs text-gray-500">Income</p>
        </div>
        <div>
          <p className="flex items-center gap-1 text-sm font-semibold text-red-500">
            <FontAwesomeIcon icon={faArrowDown} />
            $2 430
          </p>
          <p className="text-xs text-gray-500">Expense</p>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="flex justify-between items-end h-32 mb-4">
        <div className="w-[18%] bg-gray-200 rounded-md h-[60%]"></div>
        <div className="w-[18%] bg-gray-200 rounded-md h-[75%]"></div>
        <div className="w-[18%] bg-gray-200 rounded-md h-[50%]"></div>
        <div className="w-[18%] bg-green-700 rounded-md h-[100%]"></div>
        <div className="w-[18%] bg-gray-200 rounded-md h-[40%]"></div>
      </div>

      {/* Labels Section */}
      <div className="flex justify-between text-xs text-gray-500">
        <p>$98</p>
        <p>$108</p>
        <p>$93</p>
        <p>$123</p>
        <p>$61</p>
      </div>
    </div>
  );
}

export default StatisticsBar;
