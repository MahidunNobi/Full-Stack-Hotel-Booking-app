import React from 'react'
import Navbar from "../componants/Common-Componants/Navbar/Navbar"
import Sidebar from "../componants/Common-Componants/Sidebar/Sidebar"
import { Outlet } from 'react-router-dom'

const MainLayout = ({dark, setDark}) => {

  return (
    <div className=''>
      <Navbar setDark={setDark} dark={dark} />
      <div className='md:flex'> 
      <Sidebar setDark={setDark} dark={dark} />
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout