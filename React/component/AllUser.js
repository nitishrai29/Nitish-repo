import React from 'react'
import { useState,useEffect } from 'react/cjs/react.development'
import {useHistory, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function AllUser() {
    const[student,setStudent]= useState([])
    const history = useHistory()
    const {id} = useParams()
    
    useEffect(() => {

        getStudents()
        // fetch("/get").then(res=>{
        //     return res.json()
        // }).then(data=>setStudent(data))


                // console.log(student)
                // console.log(data)
           
    
    }, [])


    const getStudents=async()=>{

    //     // const{name,lastName,gender,standard,mobile} = student
        const res = await fetch('/get')

        const data = await res.json()
        console.log(data)
        setStudent(data)
    // //    const result=  data.map(item=>{
    // //         return{
    // //             ...item,
    // //             name,lastName,gender,standard,mobile
    // //         }
    // //     })
        
    }

    const addStudent=()=>{
        history.push('/add')
    }

    const deletes= async(id)=>{
         await fetch(`/delete/${id}`, {method:'delete'})
        // const data = await res.json().then((resp)=>{
        //     console.warn(resp)
            
            getStudents()
            window.alert(`deleted successfully`)
            
        // })
    }

    
    
    return (
        <div>
            <div>
            <h1 className='h1 text-center'>Students Data</h1>
            </div>
            <table className="table ">
                <thead>
                    <tr>
                        <th scope='col'>S.No</th>
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">gender</th>
                        <th scope="col">Standard</th>
                        <th scope="col">Mobile</th>
                        {/* <th scope="col">password</th>
                        <th scope="col">confirm Password</th>     */}
                        <th scope="col">Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((user,i)=>{
                            return(
                            <tr key={user._id}>
                                <td>{i}</td>
                                <td >{user._id}</td>
                                <td >{user.name}</td>
                                <td >{user.lastName}</td>
                                <td >{user.email}</td>
                                <td >{user.gender}</td>
                                <td >{user.standard}</td>
                                <td >{user.mobile}</td>
                                {/* <td >{user.password}</td>
                                <td >{user.cnfrmPassword}</td> */}

                                <td>
                                    <button className='btn btn-danger mx-2' onClick={()=>deletes(user._id)}> Delete</button>
                                   
                                    {/* <button className="btn btn-warning" >Edit </button> */}
                                    <Link to={`/edit/${user._id}`} className='btn btn-warning'>Edit </Link>
                                </td>
                                
                            </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            <button className='btn btn-primary' style={{marginLeft:"80rem", marginTop:"-1rem"}}  onClick={()=>addStudent()}>Add User</button>

        </div>
    )
}
