import React from 'react'
import { createContext ,useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';


export const LoginContext= createContext();

function UserContext (props)  {
    const history=useHistory();
    const[user,setUser]=useState({email:'', password:""})
    // const [isAuth, setIsAuth] = useState(false)
    

    const {email, password}= user
    const login=()=>{
        axios.post(`/login`,user)
        .then(res=>{alert(res.data.message)
            setUser(res.data.user)
            // setIsAuth(true)
            history.push(`/added`)
        })
       
    }
    return (
        <div>
        <LoginContext.Provider value={{
            
            // isAuth,
            login,
            user,
            // setIsAuth,
            setUser
             }}>
            {props.children}
        </LoginContext.Provider>
        
    </div>
    )
    
}

export default UserContext
