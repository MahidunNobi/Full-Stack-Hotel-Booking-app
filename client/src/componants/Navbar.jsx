import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useAuthContext} from "../Context/AuthContext"
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai"


const Navbar = () => {
    const {user, dispatch} = useAuthContext()    

    const [logout, setLogout] = useState(false)

    const handleLogout = ()=>{  
                   
            dispatch({type: "Logout"})      
            setLogout(false)
    }
    
  return (
    <div className='bg-orange-500'>
        <div className='bg-red-600 text-white text-xl flex gap-2 justify-center px-3'>
            <h2> NOTE:</h2>
            <marquee behavior="scroll" direction="left">
            When you first come to this app you will see Loading.... some places of this app. It's because the backend API of this app takes a little time to load for the first time. Once It loads it will not spin anymore. So, Please be patient for the first load of the API's. We are extreamly sorry for this behavior🙏🙏. It'll be fixed as soon as possible.
            </marquee>
        </div>
        <div className="container mx-auto flex justify-between px-4 text-white py-4">
            <div className="logo">
                <h4 className="text-xl">
                    <Link to={"/"}>  MBooking </Link>
                </h4>
            </div>
           {user ? 
           <div className="text-white relative">
                <button onClick={()=> setLogout(!logout)}> 
                    {user.username} { logout ?  
                    <AiFillCaretUp className='inline' /> : <AiFillCaretDown className='inline' />}
                </button> 
                { logout && <button onClick={handleLogout} className='bg-white text-orange-700 absolute left-0 top-[25px]  py-1 px-3 rounded-md'> Logout</button>}
            </div> 
           :
            <div className="btns text-orange-500">
                <Link to="register" className='bg-gray-200 px-3 py-1 mx-2 md:mx-4 rounded-sm'> Register </Link>
                <Link to="login" className='bg-gray-200 px-3 py-1 mx-2 md:mx-4 rounded-sm'> Login </Link>
            </div>}
        </div>
    </div>
  )
}

export default Navbar
