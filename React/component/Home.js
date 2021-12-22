import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className="container">
                <p className="h2">User IsNt Registered</p>
                <button className='btn btn-primary bg-dark' > <a href="/login">Go back</a></button>
            </div>
        </div>
    )
}
