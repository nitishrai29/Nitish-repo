import { useState, useEffect } from 'react';
import PassToggle from './passToggle'

import { useHistory, useParams,useNavigate } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
  } from "reactstrap";





const EditUser = () => {
    let navigate=useNavigate()
    const[name,setName] = useState([])
    const[lastName ,setLastName] = useState([])
    const[email,setEmail] = useState([])
    const[gender ,setGender] = useState([])
    const[standard ,setStandard] = useState([])
    const[mobile,setMobile] = useState([])
    const[password,setPassword] = useState([])
    const[cnfrmPassword,setCnfrmPassword] = useState([])
    // const[show,setShow]= useState(false)
    // const[cnfrmshow,setCnfrmShow]= useState(false)

    // const[password ,setPassword] = useState([])
    // const[cpassword ,setCpassword] = useState([])

    const[update ,setUpdate] = useState([])

  
    const { id } = useParams();
    
    // const history = useHistory();
    

    useEffect(() => {
        loadUserDetails();
         console.log(name)
        console.log(id)

    }, []);

    const loadUserDetails = async()=>{
        
        fetch(`/get/${id}`)
        .then((response) => {response.json().then((resp)=>
          {
            setUpdate(resp)
              setName(resp.name)
              setLastName(resp.lastName);
              setEmail(resp.email)
              setGender(resp.gender);
              setStandard(resp.standard);
              setMobile(resp.mobile);
              setPassword( resp.password);
              setCnfrmPassword( resp.cnfrmPassword);
      })
      })
    }
       

 
    const editUserDetails=async()=>{
        

        let data={name, lastName, email, gender, standard, mobile, password, cnfrmPassword}
        
        fetch(`/update/${id}`,{
             method :'PUT', 
             headers:{
                 'Accept':'application/json', 
                 'Content-Type':'application/json'},
        body:JSON.stringify(data)
         } ).then((result)=>{
        console.warn("result is :", result.data);

    })
        navigate("/get")
        // history.push('/get')  
    } 

    // const toggle=()=>{
       
    //     setShow(!show)
    // }

    // const togglenew=()=>{
        
    //     setCnfrmShow(!cnfrmshow)
    // }

    


    return (
        <FormGroup className='container'>
            {/* <Typography variant="h4">Edit Student</Typography> */}
            <p className="h1 text-center m-2">Edit User</p>
            <Form>
                <Label htmlFor="my-input">first Name</Label>
                <Input onChange={(e)=>{setName(e.target.value)}} name='name' value={name} />
            </Form>

            <Form>
                <Label htmlFor="my-input">Last Name</Label>
                <Input onChange={(e)=>{setLastName(e.target.value)}}  name='lastName' value={lastName} id="my-input" />
            </Form>

            <Form>
                <Label htmlFor="my-input">Email</Label>
                <Input onChange={(e)=>{setEmail(e.target.value)}} name='email' value={email} id="my-input" />
            </Form>
            <Form>
                <Label htmlFor="my-input">Gender</Label>
                <Input onChange={(e)=>{setGender(e.target.value)}} name='gender' value={gender} id="my-input" />
            </Form>
            <Form>
                <Label htmlFor="my-input">Standard</Label>
                <Input onChange={(e)=>{setStandard(e.target.value)}}  name='standard' value={standard} id="my-input"/>
            </Form>
            <Form>
                <Label htmlFor="my-input">mobile</Label>
                <Input onChange={(e)=>{setMobile(e.target.value)}} name='mobile' value={mobile} id="my-input" />
            </Form>
            <Form>
                <Label htmlFor="my-input">Password</Label>
                <PassToggle password={password} name="password" onChange={(e) => {setPassword(e.target.value)}} style={{marginLeft:"79rem",position:"absolute", top:"582px", left:"108px" ,cursor: "pointer"}}/>

                {/* <Input type={(show) ? "text":"password"} onChange={(e)=>{setPassword(e.target.value)}} name='password' value={password} id="my-input" />
                <i className="fa fa-eye password-icon" onClick={()=>toggle()} style={{marginLeft:"79rem",position:"absolute", top:"583px" ,cursor: "pointer"}}></i> */}

            </Form>

            <Form>
                <Label htmlFor="my-input">confirm Password</Label>
                <PassToggle password={cnfrmPassword} name="cnfrmPassword" onChange={(e) => {setCnfrmPassword(e.target.value)}} style={{marginLeft:"79rem",position:"absolute", top:"653px", left:"108px" ,cursor: "pointer"}}/>

                {/* <Input type={(cnfrmshow) ? "text":"password"} onChange={(e)=>{setCnfrmPassword(e.target.value)}} name='cnfrmPassword' value={cnfrmPassword} id="my-input" />
                <i className="fa fa-eye password-icon" onClick={()=>togglenew()} style={{marginLeft:"79rem",position:"absolute", top:"653px" ,cursor: "pointer"}}></i> */}

            </Form>
            
            <Form>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </Form>
        </FormGroup>
    )
}

export default EditUser;