import React from 'react'
import Navbar from '../../componants/Navbar'
import Header from '../../componants/Header/Header'
import Tranding from '../../componants/Tranding/Tranding'
import PropertyType from '../../componants/PropertyType/PropertyType'
import GuestLove from '../../componants/GuestLove/GuestLove'
import Mail from '../../componants/HomeMail/Mail'
import Footer from '../../componants/Footer/Footer'

const Home = () => {
  return (
    <div className=''>
      
      <Header />
      <Tranding/>
      <PropertyType />
      <GuestLove />
      <Mail />      
    </div>
  )
}

export default Home