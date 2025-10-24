import React from 'react'
import SideBar from "../../components/sidebar/SideBar"

function SettingPage() {
  return (
    <>
    <div className='w-full min-h-screen flex bg-zinc-300'>
        <SideBar/>
        <div className='w-full lg:w-full xl:w-[75%] 2xl:w-[80%] min-h-screen bg-zinc-300 flex justify-center items-center gap-6 lg:absolute lg:right-0 relative'>
           <p className='text-center text-3xl font-bold'>Setting</p>
       </div>
        
    </div>
    </>
  )
}

export default SettingPage