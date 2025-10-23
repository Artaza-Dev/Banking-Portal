import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router"
import Signup from "../pages/signup/Signup"
import Login from "../pages/login/Login"
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../pages/dashboard/Dashboard'
import SettingPage from '../pages/settingPage/SettingPage'
import Transactioin from '../pages/transaction/Transactioin'
import FaqPage from '../pages/faqPage/FaqPage'
function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PublicRoute><Login/></PublicRoute>}/>
                <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>}/>
                <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path='/setting' element={<PrivateRoute><SettingPage/></PrivateRoute>}/>
                <Route path='/transaction' element={<PrivateRoute><Transactioin/></PrivateRoute>}/>
                <Route path='/faq' element={<PrivateRoute><FaqPage/></PrivateRoute>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing