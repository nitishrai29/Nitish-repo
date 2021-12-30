import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Logout=()=>{
    // let navigate= useNavigate()
    return(
        localStorage.clear(),
        <Navigate to="/login"></Navigate>
    )
}

export default Logout