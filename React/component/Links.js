import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Links() {
    const navigate = useNavigate()
    return (
        <div>
            <button className='btn btn-warning m-2'  onClick={()=>navigate('/home')}>Home</button>
            <button className='btn btn-success m-2' onClick={()=>navigate('/get')}>User's List</button>
            <button className='btn btn-danger m-2' onClick={()=>navigate('/logout')}>logout</button>
            <button className='btn btn-danger m-2' onClick={()=>navigate('/video')}>Video Player</button>


            
        </div>
    )
}
