import { useState } from "react"
import { useAuthContext } from "../../Context/AuthContext"
import {useNavigate } from "react-router-dom"
import "./login.css"
import axios from "axios"


const Login = () => {
    const {loading, err, dispatch, lastLink} = useAuthContext()    
   
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
            // const instance = axios.create({
            //     withCredentials: true
            // })
            const res = await axios.post("https://mbooking.onrender.com/api/auth/login", credentials)
            dispatch({type: "Login-Success", payload: res.data.details})
            if(lastLink) {
                navigate(lastLink) 
                dispatch({
                    type: "Clear-Last-Link"
                })
            }else{
                navigate("/")
            }
        } catch (error) {            
            dispatch({type: "Login-Failure", payload: error.response.data})
        }
    }

  return (
    <div>
        <div className="container mx-auto px-6 py-6 flex justify-center h-[60vh] items-center">
            <div className='formContainer'>
                <h2 className="text-2xl mb-6"> Login</h2>
                <div className="demo w-[300px] ">
                    <h3 className="font-semibold text-lg">Demo Login:</h3>
                    <p>Username: One</p>
                    <p>Password: 321654</p>
                </div>
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
