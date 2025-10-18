import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router"
import Signup from "../pages/signup/Signup"
import Login from "../pages/login/Login"
import Profile from '../pages/profile/Profile'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PublicRoute><Login/></PublicRoute>}/>
                <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>}/>
                <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing