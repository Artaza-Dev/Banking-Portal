import React, {useState} from 'react'
import SideBar from '../../components/sidebar/SideBar';
import ContentContainer from '../../components/contentcontainer/ContentContainer';
import PopupCard from '../../components/popupCard/PopupCard'
import TransactionPopup from '../../components/transactionpopup/TransactionPopup'

function Dashboard() {
  const [popup, setPopup] = useState(false);
  const [transactionpopup, setTransactionpopup] = useState(false);

  function detailHandler() {
    setPopup(true);
  }

  function transactionHandler() {
    setTransactionpopup(true);
  }
  return (
    <>
        <div className="w-full min-h-screen flex bg-zinc-300 lg:absolute lg:right-0 relative">

      {(popup || transactionpopup) && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40"></div>
      )}

      {popup && (
        <PopupCard onclick={() => setPopup(false)} text="Add Money" />
      )}
      {transactionpopup && (
        <TransactionPopup onclick={() => setTransactionpopup(false)} text="Add Money" />
      )}

      {/* ✅ Sidebar & Content - below overlay */}
      <SideBar  />
      <ContentContainer onclick={detailHandler} onclicks={transactionHandler} />
    </div>

    </>
  )
}

export default Dashboard