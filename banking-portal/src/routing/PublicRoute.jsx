import React from 'react'
import { Navigate } from 'react-router-dom';
function PublicRoute({children}) {
   const isAuthenticated = localStorage.getItem('isAuthenticated') === "true";
   return !isAuthenticated ? children : <Navigate to='/dashboard' />
    
}

export default PublicRoute