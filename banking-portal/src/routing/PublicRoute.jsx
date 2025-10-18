import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
function PublicRoute({children}) {
   const isAuthenticated = localStorage.getItem('isAuthenticated') === "true";
   return !isAuthenticated ? children : <Navigate to='/profile' />
    
}

export default PublicRoute