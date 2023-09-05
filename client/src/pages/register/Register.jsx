import { useState } from "react"
import { useAuthContext } from "../../Context/AuthContext"
import {useNavigate } from "react-router-dom"
import "./register.css"
import axios from "axios"


const Register = () => {
    const {loading, err, dispatch} = useAuthContext()    
   
    const [credentials, setCredentials] = useState({
        username: null,
        email: null,
        password: null
    })

    const handleChange = (e)=>{
        setCredentials( prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const navigate = useNavigate()
    
    const handleRegister = async(e)=>{
        e.preventDefault()     
        dispatch({type: "Register-Start"})   
        try {
            const res = await axios.post("http://localhost:5000/api/auth/Register", credentials)
            dispatch({type: "Register-Success"})
            navigate("/login")
        } catch (error) {            
            dispatch({type: "Register-Failure", payload: error.response.data})
        }
    }
    console.log(credentials);
  return (
    <div>
        <div className="container mx-auto px-6 py-6 flex justify-center h-[60vh] items-center">
            <div className='formContainer'>
                <h2 className="text-2xl mb-6"> Register</h2>
                <input 
                type="text"
                placeholder='Username'
                name="username"
                id="username"
                onChange={handleChange}
                />
                <input 
                type="email"
                placeholder='E-mail'
                name="email"
                id="email"
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
                <button disabled={loading} onClick={handleRegister}> Register</button>

            </div>
        </div>
    </div>
  )
}

export default Register