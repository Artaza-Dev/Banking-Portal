import React, {useState} from "react";
import Navbar from "../navbar/Navbar";
import TransactionCard from "../../components/transactioncard/TransactionCard";
import PopupCard from "../../components/popupCard/PopupCard";

function Profile() {
  const [addpopup, setAddPopup] = useState(false)
  const [withdrawpopup, setWithDrawPopup] = useState(false)
  function addHandler (){
      setAddPopup(true)
  }
  function withDrawHandler (){
      setWithDrawPopup(true)
  }

  return (
    <>
      <div className="w-full min-h-screen  flex flex-col items-center relative">
        {addpopup && (
          <PopupCard onclick={() => setAddPopup(false)} text="Add Money"/>
        )}
        {withdrawpopup && (
          <PopupCard onclick={() => setWithDrawPopup(false)} text="WithDraw Money"/>
        )}

        <div className="w-full min-h-[300px] sm:min-h-[300px] bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-500 rounded-bl-4xl rounded-br-4xl">
          <Navbar />

          <div className="w-full min-h-[240px] flex flex-wrap justify-center gap-5 px-3 py-10">
            {/* Card 1 */}
            <div
              className="w-[90%] sm:w-[48%] lg:w-[30%] h-[240px] bg-white/20 backdrop-blur-md 
  border border-white/10 shadow-lg rounded-2xl p-5 flex flex-col justify-between text-white gap-2"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-lg md:text-xl font-semibold tracking-wide">
                  Nexus Bank
                </h1>
                <span className="text-[10px] md:text-xs bg-white/30 px-2 py-1 rounded-md">
                  Premium
                </span>
              </div>
              <div>
                <p className="text-[10px] md:text-xs opacity-80">
                  Account Number
                </p>
                <h2 className="text-lg md:text-xl font-bold tracking-widest">
                  1234 5678 90123
                </h2>
              </div>
              <div>
                <p className="text-[10px] md:text-xs opacity-80">
                  Account Holder
                </p>
                <p className="text-sm md:text-base font-medium">Hafiz Artaza</p>
              </div>
              <div className="text-[10px] md:text-xs opacity-70 text-right italic">
                Valid Thru: 12/2025
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="w-[90%] sm:w-[48%] lg:w-[30%] h-[240px] bg-white/20 backdrop-blur-md 
  border border-white/10 shadow-lg rounded-2xl p-6 flex flex-col justify-between text-white"
            >
              <div>
                <h2 className="text-xl font-semibold tracking-wide">
                  Current Balance
                </h2>
                <div className="h-[2px] w-16 bg-white/30 rounded-md mt-1"></div>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold tracking-wide">
                  PKR 120,5000
                </p>
              </div>
              <div className="text-xs opacity-70 text-right italic">
                Available for use
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[235px] rounded-3xl mt-3 bg-white border border-zinc-300 shadow-2xl p-3">
            <TransactionCard text="Add Money" onclick={ addHandler }/>
            <TransactionCard text="Transfer Money" />
            <TransactionCard text="WithDraw Money" onclick={withDrawHandler}/>
        </div>
      </div>
    </>
  );
}

export default Profile;
