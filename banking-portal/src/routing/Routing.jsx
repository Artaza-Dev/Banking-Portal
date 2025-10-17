import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router"
import Signup from "../pages/signup/Signup"
import Login from "../pages/login/Login"
function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing