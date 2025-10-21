import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router"
import Signup from "../pages/signup/Signup"
import Login from "../pages/login/Login"
import Profile from '../pages/profile/Profile'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../pages/dashboard/Dashboard'
function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PublicRoute><Login/></PublicRoute>}/>
                <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>}/>
                <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing