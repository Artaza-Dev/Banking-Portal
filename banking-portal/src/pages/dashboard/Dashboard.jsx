import React, {useState} from 'react'
import SideBar from '../../components/sidebar/SideBar';
import ContentContainer from '../../components/contentcontainer/ContentContainer';
import PopupCard from '../../components/popupCard/PopupCard'
import TransactionPopup from '../../components/transactionpopup/TransactionPopup'
import LogoutPopup from '../../components/logoutPopup/LogoutPopup';

function Dashboard() {
  const [popup, setPopup] = useState(false);
  const [transactionpopup, setTransactionpopup] = useState(false);
  const [logoutpopup, setLogoutPopup] = useState(false);

  function detailHandler() {
    setPopup(true);
  }

  function transactionHandler() {
    setTransactionpopup(true);
  }
  function logoutHandler() {
    setLogoutPopup(true);
  }
  return (
    <>
        <div className="w-full min-h-screen flex bg-zinc-300 lg:absolute lg:right-0 relative">

      {(popup || transactionpopup) && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40"></div>
      )}

      {popup && (
        <PopupCard onclick={() => setPopup(false)}  />
      )}
      {transactionpopup && (
        <TransactionPopup onclick={() => setTransactionpopup(false)}  />
      )}
      {logoutpopup && (
        <LogoutPopup onclick={() => setLogoutPopup(false)}  />
      )}

      {/*  Sidebar & Content - below overlay */}
      <SideBar onclick={logoutHandler} />
      <ContentContainer onclick={detailHandler} onclicks={transactionHandler} />
    </div>

    </>
  )
}

export default Dashboard