import "./Header.css"
import React, {useState} from 'react'
import {FaBed, FaPlane} from "react-icons/fa"
import {AiFillCar} from "react-icons/ai"
import {BsTree, BsPerson} from "react-icons/bs"
import {BiTaxi} from "react-icons/bi"

import HomeSearchBar from "../HomeSearchBar"

const Header = ({page}) => {

  
  


  return (
    <div className='bg-orange-500 text-white pb-6'>
      <div style={{height: page === 'hotelsList' ? `100px` : "auto"}} className="container mx-auto px-4 md:mb-6 relative">
        <div className="BookingOptions flex space-x-6 overflow-x-scroll whitespace-nowrap pt-6">
          <div className="BookingOption active flex space-x-2 items-center cursor-pointer">
            <FaBed className='text-2xl' />
            <span className='text-lg'> Stays</span>
          </div>
          <div className="BookingOption flex space-x-2 items-center cursor-pointer">
            <FaPlane className='text-2xl' />
            <span className='text-lg'> Flights</span>
          </div>
          <div className="BookingOption flex space-x-2 items-center cursor-pointer">
            <AiFillCar className='text-2xl' />
            <span className='text-lg'> Car rentals</span>
          </div>
          <div className="BookingOption flex space-x-2 items-center cursor-pointer">
            <BsTree className='text-2xl' />
            <span className='text-lg'> Attractions</span>
          </div>
          <div className="BookingOption flex space-x-2 items-center cursor-pointer">
            <BiTaxi className='text-2xl' />
            <span className='text-lg'> Taxi</span>
          </div>
          
        </div>
        {page !== "hotelsList" && <div className="HeaderDesc h-[300px] flex justify-center flex-col pb-3">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
          Enjoy your next trip
          </h2>
          <p className="text-2xl">
            Search deals on hotels, homes, and much more...
          </p>
          <div className="demo text-gray-900 font-semibold">
            <h2 className="text-2xl"> Hotels Available In:</h2>
            <ul>              
              <li> London </li>
              <li> Madrid </li>
              <li> Tokyo </li>
            </ul>
          </div>
        </div>}
        {page !=="hotelsList" && <HomeSearchBar page={page} />}
        
       

      </div>      
    </div>
  )
}

export default Header
