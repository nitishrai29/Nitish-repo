import React from 'react'
import { createContext ,useState} from 'react'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useHistory } from "react-router-dom";
// import {useNavigate} from "react-router-dom";



export const LoginContext= createContext();

const UserContext=(props)=>  {
    

    const[user,setUser]=useState({email:'', password:""})
    const [isAuth, setIsAuth] = useState(false)
    const history = useHistory()
    // const navigate = useNavigate()

    const {email, password}= user
    const login=()=>{
        axios.post(`/login`,user)
        .then(res=>{alert(res.data.message)
            setUser(res.data.user)
            localStorage.setItem('id',JSON.stringify(user._id));
            setIsAuth(true)
            history.push("/get")
            // navigate('/add')
        })
       
    }
    return (
        <div>
        <LoginContext.Provider value={{
            
            isAuth,
            login,
            user,
            setIsAuth,
            setUser
             }}>
            {props.children}
        </LoginContext.Provider>
        
    </div>
    )
    
}

export default UserContext
