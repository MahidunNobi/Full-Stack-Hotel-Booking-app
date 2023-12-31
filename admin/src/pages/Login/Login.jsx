import { useState } from "react"
import { useAuthContext } from "../../Context/AuthContext"
import {useNavigate } from "react-router-dom"
import "./login.css"
import axios from "axios"


const Login = () => {
    const {user, dispatch, loading, err} = useAuthContext()        

    const [credentials, setCredentials] = useState({
        username: null,
        password: null
    })


    const handleChange = async (e) => {
        setCredentials(prev=> {
            return {...prev, [e.target.name] : e.target.value}
        })       
    }

    const navigate = useNavigate()
    
    const handleLogin = async(e)=>{
        e.preventDefault()     
        dispatch({type: "Login-Start"})   
        try {
            const instance = axios.create({
                withCredentials: true
            })
            const res = await instance.post("http://localhost:5000/api/auth/login", credentials)
            dispatch({type: "Login-Success", payload: res.data.details})            
            navigate("/")
        } catch (error) {            
            dispatch({type: "Login-Failure", payload: error.response.data})
            
        }
    }

  return (
    <div>
        <div className="container mx-auto px-6 py-6 flex justify-center min-h-screen items-center">
            <div className='formContainer'>
                <h2 className="text-2xl mb-6"> Login</h2>
                <input 
                type="text"
                placeholder='Username'
                name="username"
                id="username"
                onChange={handleChange}
                />
                <input 
                type="password"
                placeholder='Password'
                name="password"
                id="password"
                onChange={handleChange}
                />
                { err && <p className="text-red-700">
                    {err.message}
                </p>}
                <button disabled={loading} onClick={handleLogin}> Login</button>

            </div> 
         </div>
    </div>
  )
}

export default Login