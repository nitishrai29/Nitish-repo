import React,{ useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate= useNavigate()  
    useEffect(()=>{
        nav()
    },[])

    const nav =()=>{
        if(!localStorage.getItem("myData"))
        {
            navigate ("/login")
        }

    }
    return (
        <>
        <div>
            
            <h1>Opps! Page not Found..</h1>
            </div>
        </>
    );
};

export default ErrorPage