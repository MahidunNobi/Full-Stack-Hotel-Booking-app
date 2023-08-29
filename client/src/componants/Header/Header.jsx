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
        </div>}
        {page !=="hotelsList" && <HomeSearchBar page={page} />}
        
        {/* <div className="SearchBar flex justify-around items-center bg-white w-full text-gray-400 h-[60px] border-2 border-orange-400 absolute bottom-[-25px] rounded-md">

          <div className="searchInput flex items-center space-x-3 text-gray-800">
            <FaBed  className="text-2xl"/>
            <input type="text" placeholder="Where are you going?" name="searchInput" className="outline-none" />
          </div>
          <div className=" flex items-center space-x-3 cursor-pointer text-gray-800" onClick={()=> setOpenDate(!openDate)}>
            <SlCalender  className="text-2xl"/>
            <p> 
              {`${format(DateRangeState[0].startDate, "MM/dd/yyyy")} 
              to 
              ${format(DateRangeState[0].endDate, "MM/dd/yyyy")}`}
            </p>
            { openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDateRangeState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={DateRangeState}
              className="absolute top-[60px]"
            />}
          </div>
          <div className=" flex items-center space-x-3 cursor-pointer text-gray-800" >
            <BsPerson className="text-2xl" onClick={()=>setOpenOptions(!openOptions)}/>
            <span onClick={()=>setOpenOptions(!openOptions)}> {`${options.adult} Adult, ${options.child} Children . ${options.room} Room`}</span>

            {openOptions && <div className="options w-[300px] p-6 absolute top-[60px] border border-gray-200">

              <div className="optionsItem flex justify-between text-gray-600">
                <p>Adult</p>
                <div className="numberbtns border border-orange-200">
                  <button className="text-lg px-2 active:text-orange-500" 
                  disabled={options.adult <=1}                  
                  onClick={()=> handleOptions("adult", "d")}> - </button>
                  <span className="px-4"> {options.adult} </span>
                  <button className="text-lg px-2 active:text-orange-500"
                  onClick={()=> handleOptions("adult", "i")}> + </button>
                </div>
              </div>

              <div className="optionsItem flex justify-between text-gray-600 my-6">
                <p>Child</p>
                <div className="numberbtns border border-orange-200">
                  <button className="text-lg px-2 active:text-orange-500"
                  disabled={options.child <=1} 
                  onClick={()=> handleOptions("child", "d")}> - </button>
                  <span className="px-4"> {options.child} </span>
                  <button className="text-lg px-2 active:text-orange-500"
                  onClick={()=> handleOptions("child", "i")}> + </button>
                </div>
              </div>

              <div className="optionsItem flex justify-between text-gray-600 mb-6">
                <p>Room</p>
                <div className="numberbtns border border-orange-200">
                  <button className="text-lg px-2 active:text-orange-500"
                  disabled={options.room <=1} 
                  onClick={()=> handleOptions("room", "d")}> - </button>
                  <span className="px-4"> {options.room} </span>
                  <button className="text-lg px-2 active:text-orange-500"
                  onClick={()=> handleOptions("room", "i")}> + </button>
                </div>
              </div>
              <button className="w-full text-orange-500 border-2 py-2 rounded-full border-orange-500 hover:text-white hover:bg-orange-500 duration-300" 
              onClick={()=>setOpenOptions(!openOptions)}> Done</button>

            </div>}
          </div>
          <div className="Btn">
            <button className="text-orange-500 border-orange-500  border-2 hover:text-white hover:bg-orange-500 duration-300 px-6 rounded-lg py-1"> Search</button>
          </div>

        </div> */}

      </div>      
    </div>
  )
}

export default Header