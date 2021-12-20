import React from 'react'
import { useState,} from 'react';
import { useEffect } from 'react/cjs/react.development';
import {useParams,useHistory} from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
  } from "reactstrap";


export default function EditUser() {

    // const [user, setUser] = useState({ name:"", lastName:"", gender:"", standard:"", mobile:"" });
    // const [name,setName] = useState("")
    // const { name, lastName, gender, standard, mobile} = user;
    const [name, setName]=useState("")
    const[data, setData]= useState("")


    const history= useHistory()
    const {id} = useParams();

    useEffect(() => {
        load();
        console.log(name)
        console.log(id)
    }, []);
    
    // const onValueChange=(e)=>{
    //     console.log(e.target.value)
    //     setUser({...user, [e.target.name]: e.target.value})
        
    // }

    const load= async()=>{
        
        // const res = await fetch(`/get/${id}`)
        // const data = await res.json()
        // console.log(data)     
        // setUser(data)  
        fetch(`/get/${id}`)
        .then((response) => {response.json().then((resp)=>
          {
            //   setData(resp)
            setData(resp)
              setName(resp.name)
            //   setAge(resp.age)
            //   setHobby(resp.hobby)
      })
      })
    }
        
    

    const handleEdit=async()=>{
        
        // e.preventDefault()

        let data={name}
        
        fetch(`/get/update/${id}`,{
             method :'PATCH', 
             headers:{
                 'Accept':'application/json', 
                 'Content-Type':'application/json'},
        body:JSON.stringify(data)
         } ).then((result)=>{
        console.warn("result is :", result);

    })
        history.push('/get')  
        // const {name,lastName,gender,standard, mobile} = value

        // const res = await fetch(`/update/${id}`,{
        //     method:"put",
        //     headers:{
        //         "Accept":"application/json",
        //         "Content-Type" : "application/json"
        //     },

        //     body: JSON.stringify()
        // })
        // const data = await res.json()
        // console.log(data)
        // // setName(data)
        // window.alert('success')
        // history.push('/get')

    }    
    return (
        <div>
            <FormGroup className="container">
            <p className="h1 text-center m-2">Edit User</p>
            <Form>
                <Label htmlFor="my-input">first Name</Label>
                <Input onChange={(e)=>{setName(e.target.value)}} name='name' value={name} id="my-input" />
            </Form>

            {/* <Form>
                <Label htmlFor="my-input">Last Name</Label>
                <Input  name='lastName' value={user.lastName} id="my-input" />
            </Form>
            <Form>
                <Label htmlFor="my-input">Gender</Label>
                <Input  name='gender' value={user.gender} id="my-input" />
            </Form>
            <Form>
                <Label htmlFor="my-input">Standard</Label>
                <Input  name='standard' value={user.standard} id="my-input"/>
            </Form>
            <Form>
                <Label htmlFor="my-input">mobile</Label>
                <Input  name='mobile' value={user.mobile} id="my-input" />
            </Form> */}
            <Form>
                <Button className="btn btn-primary mt-2 bg-dark" onClick={(e)=>handleEdit(e)}>Edit User</Button>
            </Form>
        </FormGroup>
    
        </div>
    )
}
