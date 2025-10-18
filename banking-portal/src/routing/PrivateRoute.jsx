import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
function PrivateRoute({children}) {
    const isAuthentication = localStorage.getItem("isAuthenticated") === "true";
    return isAuthentication ? children : <Navigate to='/' />
}

export default PrivateRoute