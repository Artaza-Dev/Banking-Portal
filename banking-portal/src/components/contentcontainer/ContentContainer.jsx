import React,{useState} from 'react'
import StatisticsBar from '../statisticsbar/StatisticsBar'
import Document from '../document/Document'
import image1 from '../../assets/images.jfif'
import image2 from '../../assets/images3.png'
import image3 from "../../assets/image5.png"
import PopupCard from '../popupCard/PopupCard'
import usersStore from '../../store/usersStore'
import TransactionPopup from '../transactionpopup/TransactionPopup'
function ContentContainer() {
    const {currentUser} = usersStore()
    const [popup, setPopup] = useState(false)
    const [transactionpopup, setTransactionpopup] = useState(false)
    function detailHandler(){
      setPopup(true)
    }
    function transactionHandler(){
      setTransactionpopup(true)
    }
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
   {popup && (
            <PopupCard onclick={() => setPopup(false)} text="Add Money"/>
          )}
   {transactionpopup && (
            <TransactionPopup onclick={() => setTransactionpopup(false)} text="Add Money"/>
          )}

  {/* Loans Section */}
  <div className="w-full 2xl:h-[50vh] bg-white p-6 rounded-lg shadow-sm">
    <div className='h-15 w-full flex items-center justify-between mb-4'>
      <p className="text-xl text-zinc-600 font-bold ml-3 ">Loans</p>
      <button className='px-12 md:mr-5 py-2 bg-lime-800 text-white font-medium cursor-pointer hover:bg-lime-900 rounded-md' onClick={transactionHandler}>Transaction</button>
    </div>

    <div className="flex flex-col lg:flex-row gap-5 lg:h-[240px]">
      
      <div className="w-full sm:w-full md:w-[45%] flex flex-col justify-between p-6 rounded-lg">
        <div>
          <p className="text-4xl md:text-[45px] font-bold text-zinc-800">${currentUser?.balance}</p>
          <p className="text-xs md:text-sm text-zinc-500 mt-2 leading-snug mb-3">
            I tried to reflect chat vision within dark spirit to
            outline the seriousness of intention that bank.
          </p>
        </div>
        <button className="bg-lime-800 text-white px-4 py-2 md:px-5 md:py-2 rounded-md font-medium hover:bg-lime-900 transition cursor-pointer outline-none" onClick={detailHandler}>
          View details
        </button>
      </div>

      <div className="w-full flex flex-col sm:flex-row lg:flex-row gap-5">
        {details.map((val, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] md:w-[30%] sm:ml-2.5 md:ml-1 bg-zinc-100 rounded-lg p-5 flex flex-col justify-between shadow-sm"
          >
            <div className="mb-4 mt-4 ">
              <img src={val.image} className='h-15 w-15 mb-3' alt="" />
              <p className="text-sm font-medium text-zinc-700">{val.head}</p>
            </div>
            <div className='h-auto w-full '>
              <p className="text-xl font-bold text-zinc-800">-${val.amount}</p>
              <p className="text-xs text-zinc-500 mt-1 mb-3">Balance owing</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>


  {/* Placeholder Section Below */}
  <div className="w-full 2xl:h-[50vh]  rounded-lg flex gap-4 flex-col md:flex-row">
    <Document/>
    <StatisticsBar/>
  </div>
</div>


    </>
  )
}

export default ContentContainer