import react, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PassToggle from './passToggle'

import { useHistory } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
  } from "reactstrap";


//   

const AddUser = () => {
    const [user, setUser] = useState({ name:"", lastName:"", email:"", gender:"", standard:"", mobile:"", password:"", cnfrmPassword:"" });
    // const[show,setShow]= useState(false)
    // const[cnfrmshow,setCnfrmShow]= useState(false)
    

    // const [eye,setEye]= useState(false)
    let history = useHistory();

    let names, value
    const onValueChange = (e) => {
        names= e.target.name
        value= e.target.value
        setUser({...user, [names]: value})
    }

    
    const handlePost=async(e)=>{
        e.preventDefault()
        
        
        const {name,lastName, email,gender,standard, mobile, password, cnfrmPassword} = user
        if (name && lastName && gender && email && standard && mobile && password && (password === cnfrmPassword))
    {

        const res = await fetch("/add",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },

            body: JSON.stringify({
                name,lastName, email, gender,standard, mobile, password, cnfrmPassword
            })
        })


        const data = await res.json();
        console.log(data)
        window.alert('success')
        history.push('/login')
    }
        else{
            // alert("invalid  student ")
            toast.error("please provide valid inputs", {position:'top-center',
             autoClose:5000,
             progress:false
            
            })
        }
    }

    // const toggle=()=>{
        
        
    //     setShow(!show)
    // }

    // const togglenew=()=>{
        
        
    //     setCnfrmShow(!cnfrmshow)
    // }

    
   
    return (
        <FormGroup className="container">
            <p className="h1 text-center m-2">Add User</p>
            <Form>
                <Label htmlFor="my-input">first Name</Label>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} id="my-input" />
            </Form>

            <Form>
                <Label htmlFor="my-input">Last Name</Label>
                <Input onChange={(e) => onValueChange(e)} name='lastName' value={user.lastName} id="my-input" />
            </Form>

            <Form>
                <Label htmlFor="my-input">Email</Label>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} id="my-input" />
            </Form>
            <Form>
                <Label htmlFor="my-input">Gender</Label>
                <Input onChange={(e) => onValueChange(e)} name='gender' value={user.gender} id="my-input" />
            </Form>
            <Form>
                <Label htmlFor="my-input">Standard</Label>
                <Input onChange={(e) => onValueChange(e)} name='standard' value={user.standard} id="my-input"/>
            </Form>
            <Form>
                <Label htmlFor="my-input">mobile</Label>
                <Input onChange={(e) => onValueChange(e)} name='mobile' value={user.mobile} id="my-input" />
            </Form>

            {/* <Form>
                <Label htmlFor="my-input">Password</Label>
                <Input type={(show) ? "text":"password"} onChange={(e) => onValueChange(e)} name='password' value={user.password} id="password" />
                <i className="fa fa-eye password-icon" onClick={()=>toggle()} style={{marginLeft:"79rem",position:"absolute", top:"585px" ,cursor: "pointer"}}></i>
              
            </Form> */}

            <Form>
                <Label htmlFor="my-input">Password</Label>
                <PassToggle password={user.password} name="password" onChange={(e) => onValueChange(e)} style={{marginLeft:"79rem",position:"absolute", top:"582px", left:"108px" ,cursor: "pointer"}}/>
            </Form>

            <Form>
                <Label htmlFor="my-input">confirm Password</Label>
                 <PassToggle password={user.cnfrmPassword} name="cnfrmPassword" onChange={(e) => onValueChange(e)} style={{marginLeft:"79rem",position:"absolute", top:"653px", left:"108px" ,cursor: "pointer"}}/>
                
            </Form>
            <Form>
                <Button className="btn btn-primary mt-2 bg-dark" onClick={handlePost}>Add User</Button>
            </Form>
            <ToastContainer/>
        </FormGroup>
    )
}

export default AddUser;

{/* <Input type={(cnfrmshow) ? "text":"password"} onChange={(e) => onValueChange(e)} name='cnfrmPassword' value={user.cnfrmPassword} id="password" /> */}
{/* <i className="fa fa-eye password-icon" onClick={()=>togglenew()} style={{marginLeft:"79rem",position:"absolute", top:"653px" ,cursor: "pointer"}}></i> */}
// 