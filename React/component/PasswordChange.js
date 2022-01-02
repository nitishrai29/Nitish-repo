import react, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'


const PasswordChange = () => {
    // const [input, setInput] = useState({ code: "", password: "", cnfrmPassword: "" })
    const [cnfrmPassword, setcnfrmPassword] = useState("");
    const [password, setPass] = useState("");
    const [otp, setOtp] = useState("");


    const navigate = useNavigate()


    // let names, value
    // const onValueChange = (e) => {
    //     names = e.target.name
    //     value = e.target.value
    //     setInput({ ...input, [names]: value })
    // }

    // const changing = () => {
    //     axios.post(`/change-password`, input)
    //         .then(res => {
    //             alert(res.data.message)
    //             setInput(res.data.input)
    //             console.log("my loging data:", input)
    //             if (res.data.input) {
    //                 toast.success('password changed')
    //                 navigate('/login')
    //             } else {
    //                 toast.error('Something went wrong')
    //             }


    //         })
        
    // }
    // console.log(input)



    const resetPass=(e)=>{
        // e.preventDefault();
        let data={otp, password,cnfrmPassword}
        if(!data.password){
           toast.error("Password Can't be blank...",
           {
               position:"top-center"
           });
            
        }
   
   
       //  if(data.otp){
   
       //  }
        if(data.otp){
        fetch("/change-password",{ 
            method :'POST', 
            headers:{
                'Accept':'application/json', 
                'Content-Type':'application/json'},
                body:JSON.stringify(data)
            }).then((result)=>{
          console.log("result",data.otp)
   
           console.log(result.message)
       })}
       else{
           // toast.warning("OTP Not Found...",
           // {
           //     position:"top-center"
           // });
       }
   
   }
   



    return (
        <div className="login">
            <h1 className="h1 text-muted">Login</h1>
            <input type="text" name='OTP' value={otp} placeholder="Enter OTP" onChange={(e) => { setOtp(e.target.value) }}></input>
            {/* <input type={show} name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <i className="fa fa-eye password-icon" onClick={()=>setShow()} style={{marginLeft:"18rem", color:"black",position:"absolute", top:"219px", left:"611px" ,cursor: "pointer"}}></i> */}
            {/* <PassToggle password={user.password} name="password" onChange={handleChange} style={{marginLeft:"18rem", color:"black",position:"absolute", top:"219px", left:"611px" ,cursor: "pointer"}} styles={{marginLeft:"15px"}}/> */}
            <input type="text" name='password' value={password} placeholder="Enter Password Here" onChange={(e) => { setPass(e.target.value) }}></input>
            <input type="text" name='cnfrmPassword' value={cnfrmPassword} placeholder="Re-Enter Password Here" onChange={(e)=>{ setcnfrmPassword(e.target.value)} }></input>

            <div className="button" onClick={() => resetPass()}>Change Password</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/login')}>Back</div>
            {/* <div className="button" onClick={() => navigate('/OtpPage')}>Forgot Password</div> */}

        </div>
    )

}

export default PasswordChange