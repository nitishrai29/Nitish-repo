import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import  { useContext } from 'react'
import { LoginContext } from '../LoginContext'
import AllUser from '../AllUser';
import studentLogin from '../studentLogin'
import { Navigate,useNavigate } from 'react-router-dom';
import Home from '../Home'

const ProtectedRoute=({component:Component})=>{

    const{isAuth} = useContext(LoginContext)
    const navigate = useNavigate()
    const auth = isAuth
    // if(auth){
    //     if(navigate('/login')){
    //         <Navigate to={"/links"}/>
    //     }

    // }      
    return auth ? <Component/>  :<Navigate to="/login"/>  


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