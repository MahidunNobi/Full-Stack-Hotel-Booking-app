import React, { useState } from 'react'
import {MdOutlineSpaceDashboard} from "react-icons/md"
import {BsPerson, BsTruck} from "react-icons/bs"
import {AiFillShop, AiOutlineShoppingCart, AiOutlineBell, AiFillSetting} from "react-icons/ai"
import {ImStatsBars2, ImProfile} from "react-icons/im"
import {MdHealthAndSafety} from "react-icons/md"
import {SiLogstash} from "react-icons/si"
import  {BiLogOut, BiCheck} from "react-icons/bi"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../Context/AuthContext'


const Sidebar = ({dark, setDark}) => {
  const {dispatch} = useAuthContext()

  const handleLogout = ()=>{           
          dispatch({type: "Logout"})      
  }
  return (
    <div className='w-[20%]'>
      <div className=' sidebar h-full hidden md:block md:w-[100%] border border-gray-300'>


        <div className=' p-4 '>
          {/* ------------Main---------------- */}
          <ul className="main">
            <span className="text-xs text-gray-500">MAIN</span>
            <Link to="/" className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <MdOutlineSpaceDashboard className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Dashboard</span>
            </Link>
          </ul>
          {/* ------------Lists---------------- */}
          <ul className="Lists">
            <span className="text-xs text-gray-500">LISTS</span>
            {/* ---------------Users---------- */}
            <Link to="/users" className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <BsPerson className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Users</span>
            </Link>
            {/* ---------------Products---------- */}
            <Link to={"/hotels"} className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <AiFillShop className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Hotels</span>
            </Link>
            {/* ---------------Rooms---------- */}
            <Link to={"/rooms"} className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <AiOutlineShoppingCart className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Rooms</span>
            </Link>
            {/* ---------------Orders---------- */}
            <li className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <AiOutlineShoppingCart className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Order</span>
            </li>
            {/* ---------------Delivery---------- */}
            <li className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <BsTruck className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Delivery</span>
            </li>

          </ul>
          {/* ------------Useful---------------- */}
          <ul className="usefull">
            <span className="text-xs text-gray-500">USEFUL</span>
            {/* ----------Stats---------- */}
            <li className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <ImStatsBars2 className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Stats</span>
            </li>
            {/* ----------Notifications---------- */}
            <li className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <AiOutlineBell className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Notifications</span>
            </li>
          </ul>
          {/* ------------Services---------------- */}
          <ul className="Services">
            <span className="text-xs text-gray-500">SERVICE</span>
            {/* ----------System Health---------- */}
            <li className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <MdHealthAndSafety className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> System Health</span>
            </li>
            {/* ----------Logs---------- */}
            <li className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <SiLogstash className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Logs</span>
            </li>
            {/* ----------Settings---------- */}
            <li className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <AiFillSetting className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Setting</span>
            </li>
          </ul>
          {/* ------------User---------------- */}
          <ul className="user">
            <span className="text-xs text-gray-500">USER</span>
            {/* ------------Profile---------------- */}
            <li className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <ImProfile className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Profile</span>
            </li>
            {/* ------------LogOut---------------- */}
            <li className='pl-2  cursor-pointer hover:bg-gray-200 p-2'>
              <button onClick={handleLogout} className='flex items-center w-full'>
                <BiLogOut className='mr-2 text-2xl text-orange-500' />
                <span className='text-gray-500'> Logout</span>
              </button>
            </li>
          </ul>
        </div>

        <div className=' px-4 mb-2'>
          {/* ------------Theme---------------- */}
          <div className="user">
            <span className="text-xs text-gray-500">THEME</span>
            <div className='flex space-x-2 my-3'>
              <button onClick={()=> setDark(!dark)} className='w-[25px] h-[25px] border bg-white border-orange-500 rounded cursor-pointer' >
                { !dark && <BiCheck className='text-xl text-gray-800' />}
              </button>
              <button onClick={()=> setDark(!dark)} className='w-[25px] h-[25px] border border-orange-500 rounded cursor-pointer bg-gray-800 text-white' >
                {dark && <BiCheck className='text-xl' />}
              </button>
            </div>                       
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar