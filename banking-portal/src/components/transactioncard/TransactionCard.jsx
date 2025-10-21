import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlusCircle,
  faExchangeAlt,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

function TransactionCard({text, onclick}) {
    const icons = {
  "Add Money": faPlusCircle,
  "Transfer Money": faExchangeAlt,
  "WithDraw Money": faMoneyBillWave,
};
  return (
    <>
    <div
      className="w-full h-16 bg-white/50 backdrop-blur-md border border-zinc-300 
      rounded-xl mb-2 flex items-center justify-between px-5 transition duration-500
      hover:scale-[1.02] hover:shadow-lg cursor-pointer" onClick={onclick}
    >
      <p className="text-lg font-semibold text-gray-800">{text}</p>
      <FontAwesomeIcon icon={icons[text]} className="text-indigo-600 text-2xl" />
    </div>
    </>
  )
}

export default TransactionCard