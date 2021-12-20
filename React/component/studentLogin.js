import React, {useState,useContext} from "react"
import "./login.css"
import axios from "axios"
import PassToggle from './passToggle'
import {LoginContext} from "./LoginContext"

import { useHistory } from 'react-router-dom';
const StudentLogin = () => {
    const {login,user,setUser} = useContext(LoginContext)
    const history = useHistory();
    // const[show,setShow]= PassToggle()

    // const [ user, setUser] = useState({
    //     email:"",
    //     password:""
    // })
    // const login=()=>{
    //     axios.post(`/login`,user)
    //     .then(res=>{alert(res.data.message)
    //         setUser(res.data.user)
    //         history.push(`/get`)
    //     })
       
    // }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value         
        })    
 }

//  const toggle=()=>{
        
//     setShow(!show)
    
// }


   
console.log(user)
    return (
        <div className="login">
            <h1 className="h1 text-muted">Login</h1>
            <input type="text" name='email'  value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            {/* <input type={show} name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <i className="fa fa-eye password-icon" onClick={()=>setShow()} style={{marginLeft:"18rem", color:"black",position:"absolute", top:"219px", left:"611px" ,cursor: "pointer"}}></i> */}
            <PassToggle password={user.password} name="password" onChange={handleChange} style={{marginLeft:"18rem", color:"black",position:"absolute", top:"219px", left:"611px" ,cursor: "pointer"}} styles={{marginLeft:"15px"}}/>
            <div className="button" onClick={()=>login()}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>history.push('/add')}>Register</div>
        </div>
    )
}

export default StudentLogin