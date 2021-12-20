import userEvent from '@testing-library/user-event';
import React from 'react'
import  { useState } from 'react';
import {Input} from "reactstrap";

export default function PassToggle(props) {
    
    const[show,setShow]= useState(false)
    
    
    const toggle=()=>{
       setShow(!show)
    }
   return(
    <>
    
    <Input type={(show)? "text": "password"} name={props.name} value={props.password} placeholder="enter password" onChange={props.onChange} id="password" style={props.styles}></Input>
    <i className="fa fa-eye password-icon" onClick={()=>toggle()} style={props.style}></i>
    
    </>
   
    )
}

// {marginLeft:"18rem", color:"black",position:"absolute", top:"219px", left:"611px" ,cursor: "pointer"}