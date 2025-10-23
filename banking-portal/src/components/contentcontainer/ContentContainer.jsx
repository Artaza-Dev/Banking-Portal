import React,{useState} from 'react'
import StatisticsBar from '../statisticsbar/StatisticsBar'
import Document from '../document/Document'
import image1 from '../../assets/images.jfif'
import image2 from '../../assets/images3.png'
import image3 from "../../assets/image5.png"
import usersStore from '../../store/usersStore'
import TransactionPopup from '../transactionpopup/TransactionPopup'
function ContentContainer({onclick, onclicks}) {
    const {currentUser} = usersStore()
    
    let details = [
        {
            image: image1,
            head: "Family house loan",
            amount:"120,000",
            foot: "Balance owing"
        },
        {
            image: image2,
            head: "Eurotrip loan",
            amount:"21,489",
            foot: "Balance owing"
        },
        {
            image: image3,
            head: "Car loan",
            amount:"2,312",
            foot: "Balance owing"
        },
    ]
  return (
    <>
<div className="w-full lg:w-full xl:w-[75%] 2xl:w-[80%] min-h-screen bg-zinc-300 p-6 flex flex-col gap-6 lg:absolute lg:right-0 relative">
   

  {/* Loans Section */}
  <div className="w-full 2xl:h-[48vh] bg-white p-8 rounded-lg shadow-sm">
  <div className="h-15 2xl:h-20 w-full flex items-center justify-between mb-4">
    <p className="text-xl 2xl:text-3xl text-zinc-600 font-bold ml-3">Loans</p>
    <button
      className="px-12 2xl:px-20 md:mr-5 py-2 2xl:py-4 bg-lime-800 text-white font-medium cursor-pointer hover:bg-lime-900 rounded-md"
      onClick={onclicks}
    >
      Transaction
    </button>
  </div>

  <div className="flex flex-col lg:flex-row gap-5 2xl:h-[calc(100%-5rem)]">
    
    {/* Left Big Box */}
    <div className="w-full sm:w-full md:w-[45%] 2xl:w-[40%] flex flex-col justify-between 2xl:justify-center gap-5 p-6 rounded-lg 2xl:h-full">
      <div>
        <p className="text-4xl md:text-[45px] 2xl:text-[55px] font-bold text-zinc-800">
          ${currentUser?.balance}
        </p>
        <p className="text-xs md:text-sm 2xl:text-xl text-zinc-500 mt-2 leading-snug mb-3">
          I tried to reflect chat vision within dark spirit to outline the seriousness of intention that bank.
        </p>
      </div>
      <button
        className="bg-lime-800 text-white px-4 py-2 md:px-5 md:py-2 2xl:px-6 2xl:py-3 rounded-md font-medium hover:bg-lime-900 transition cursor-pointer outline-none"
        onClick={onclick}
      >
        View details
      </button>
    </div>

    {/* Right Cards */}
    <div className="w-full 2xl:w-[60%] flex flex-col sm:flex-row lg:flex-row gap-5 2xl:h-full">
      {details.map((val, index) => (
        <div
          key={index}
          className="w-full sm:w-[48%] md:w-[30%] bg-zinc-100 rounded-lg p-5 flex flex-col justify-between shadow-sm 2xl:h-full"
        >
          <div className="mb-4 mt-4">
            <img src={val.image} className="h-15 2xl:h-20 w-15 2xl:w-20 mb-3 object-cover" alt="" />
            <p className="text-sm 2xl:text-base font-medium text-zinc-700">
              {val.head}
            </p>
          </div>
          <div>
            <p className="text-xl 2xl:text-2xl font-bold text-zinc-800">
              -${val.amount}
            </p>
            <p className="text-xs 2xl:text-sm text-zinc-500 mt-1 mb-3">
              Balance owing
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  {/* Placeholder Section Below */}
  <div className="w-full 2xl:h-[60vh]  rounded-lg flex gap-6 flex-col md:flex-row">
    <Document/>
    <StatisticsBar/>
  </div>
</div>


    </>
  )
}

export default ContentContainer