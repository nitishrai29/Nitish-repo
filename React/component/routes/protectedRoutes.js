import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import  { useContext } from 'react'
import { LoginContext } from '../../../context/loginContext'

const ProtectedRoute=({auth,component:Component,...rest})=>{
    return(
        <Route {...rest} render={(props)=>{
            if(auth) return <Component {...props}/>
            if(!auth) return <Redirect to={{path:'/', state:{from:props.location}}}/>
        }}
        />
    )

}


export default ProtectedRoute;



// const protectedRoutes=({component: Component,...rest})=> {
    //     const { isLogin} = useContext(LoginContext)
    //     return (
    //         <Route {...rest} render={props=>(
    //             isLogin() ?
    //             <component {...props}/> :
    //              <Redirect to="/add"/>
    //         )}/>
    //     )
    // }