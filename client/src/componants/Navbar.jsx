import React from 'react'
import { Link } from 'react-router-dom'
import {useAuthContext} from "../Context/AuthContext"

const Navbar = () => {
    const {user} = useAuthContext()    
    
  return (
    <div className='bg-orange-500'>
        <div className="container mx-auto flex justify-between px-4 text-white py-4">
            <div className="logo">
                <h4 className="text-xl">
                    <Link to={"/"}>  MBooking </Link>
                </h4>
            </div>
           {user ? <p className="text-white"> {user.username} </p> :
            <div className="btns text-orange-500">
                <a href="#" className='bg-gray-200 px-3 py-1 mx-2 md:mx-4 rounded-sm'> Register </a>
                <Link to="login" className='bg-gray-200 px-3 py-1 mx-2 md:mx-4 rounded-sm'> Login </Link>
            </div>}
        </div>
    </div>
  )
}

export default Navbar