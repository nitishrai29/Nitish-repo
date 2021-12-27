import {useContext, useState, React, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import ReactPlayer from 'react-player';

function Player (){

   
     const [video, setVideo] = useState("")
    
    
    return (
        <>
            <div className="container">
                <h1>Your one stop destination</h1>
                <p>Paste a video link here</p>
                <div  className='container-fluid' center>
                <input className='' type="Text" name='vUrl' value={video} placeholder='Enter Vedio Link/URL to play this' onChange={(e) => { setVideo(e.target.value) }}  />
                {/* <button className='btn btn-primary' >Go</button> */}
                <br/><br/><br/><br/>

                <ReactPlayer controls  url= {video}/><br/><br/>
                </div>

                </div>               
        </>
    );
};
export default Player
