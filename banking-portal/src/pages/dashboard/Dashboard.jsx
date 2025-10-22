import React, {useEffect} from 'react'
import SideBar from '../../components/sidebar/SideBar';
import ContentContainer from '../../components/contentcontainer/ContentContainer';
import { useParams } from 'react-router-dom';
import usersStore from '../../store/usersStore';
function Dashboard() {
   const { useremail } = useParams()
   const { fetchUser } = usersStore()
   useEffect(()=>{
    function sendEmail(){
      fetchUser(useremail)
    }
    sendEmail()
   }, [])
  return (
    <>
    <div className='w-full min-h-screen flex bg-zinc-300'>
        <SideBar content={useremail}/>
        <ContentContainer/>
        
    </div>
    </>
  )
}

export default Dashboard