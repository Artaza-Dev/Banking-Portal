import React from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';
import ContentContainer from '../../components/contentcontainer/ContentContainer';

function Dashboard() {
   
  return (
    <>
    <div className='w-full min-h-screen flex bg-zinc-300'>
        <SideBar/>
        <ContentContainer/>
        
    </div>
    </>
  )
}

export default Dashboard