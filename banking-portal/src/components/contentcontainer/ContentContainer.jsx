import React from 'react'
import StatisticsBar from '../statisticsbar/StatisticsBar'
import Document from '../document/Document'
import image1 from '../../assets/images.jfif'
import image2 from '../../assets/images3.png'
import image3 from "../../assets/image5.png"

function ContentContainer() {
    
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
<div className="w-full lg:w-full xl:w-[75%] min-h-screen bg-zinc-300 p-6 flex flex-col gap-6">

  {/* Loans Section */}
  <div className="w-full bg-white p-6 rounded-lg shadow-sm">
    <p className="text-xl text-zinc-600 font-bold mb-6">Loans</p>

    <div className="flex flex-col lg:flex-row gap-5 lg:h-[240px]">
      
      <div className="w-full sm:w-full md:w-[45%] flex flex-col justify-between p-6 rounded-lg">
        <div>
          <p className="text-4xl md:text-[45px] font-bold text-zinc-800">$6,202</p>
          <p className="text-xs md:text-sm text-zinc-500 mt-2 leading-snug mb-3">
            I tried to reflect chat vision within dark spirit to
            outline the seriousness of intention that bank.
          </p>
        </div>
        <button className="bg-green-700 text-white px-4 py-2 md:px-5 md:py-2 rounded-md font-medium hover:bg-green-800 transition cursor-pointer outline-none">
          View details
        </button>
      </div>

      <div className="w-full flex flex-col sm:flex-row lg:flex-row gap-5">
        {details.map((val, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] md:w-[30%] bg-zinc-100 rounded-lg p-5 flex flex-col justify-between shadow-sm"
          >
            <div className="mb-4">
              <img src={val.image} className='h-15 w-15 mb-3' alt="" />
              <p className="text-sm font-medium text-zinc-700">{val.head}</p>
            </div>
            <div>
              <p className="text-xl font-bold text-zinc-800">-${val.amount}</p>
              <p className="text-xs text-zinc-500 mt-1">Balance owing</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>


  {/* Placeholder Section Below */}
  <div className="w-full min-h-[350px]  rounded-lg flex gap-4 flex-col md:flex-row">
    <Document/>
    <StatisticsBar/>
  </div>
</div>


    </>
  )
}

export default ContentContainer