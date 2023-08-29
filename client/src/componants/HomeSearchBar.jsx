import React, { useContext, useState } from 'react'
import {FaBed, FaPlane} from "react-icons/fa"
import {SlCalender} from "react-icons/sl"
import {DateRange} from "react-date-range"
import { format } from "date-fns"
import {BsPerson} from "react-icons/bs"

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useSearch } from '../Context/SearchContext'
import { Link } from 'react-router-dom'

const HomeSearchBar = ({page}) => {
  const [openDate, setOpenDate] = useState(false)  
  const [openOptions, setOpenOptions] = useState(false)
  const {DateRangeState, setDateRangeState, options, handleOptions, setDestination} = useSearch()

  const searchContext = useSearch()

  return (
    <div className="SearchBar md:flex justify-around items-center bg-white md:w-full w-[90%]  text-gray-400 py-3 border-2 border-orange-400 md:absolute md:bottom-[-25px] rounded-md space-y-6 md:space-y-0 p-6">

      <div className="searchInput flex items-center space-x-3 text-gray-800 border-b border-gray-400 md:border-none pb-4 md:pb-0">
        <FaBed  className="text-2xl"/>
        <input 
        type="text" 
        placeholder="Where are you going?" 
        name="searchInput" 
        className="outline-none"       
        onChange={(e)=> setDestination(e)}/>
      </div>
      <div className=" flex items-center space-x-3 cursor-pointer text-gray-800 border-b border-gray-400 md:border-none pb-4 md:pb-0" >
        <SlCalender  className="text-2xl" onClick={()=> setOpenDate(!openDate)}/>
        <p onClick={()=> setOpenDate(!openDate)}> 
          {`${format(DateRangeState[0].startDate, "MM/dd/yyyy")} 
          to 
          ${format(DateRangeState[0].endDate, "MM/dd/yyyy")}`}
        </p>
        { openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDateRangeState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={DateRangeState}
          className="absolute md:top-[60px] top-[120px] z-10"
        />}
      </div>
      <div className=" flex items-center space-x-3 cursor-pointer text-gray-800 border-b border-gray-400 md:border-none pb-4 md:pb-0" >
        <BsPerson className="text-2xl" onClick={()=>setOpenOptions(!openOptions)}/>
        <span onClick={()=>setOpenOptions(!openOptions)}> {`${options.adult} Adult, ${options.child} Children . ${options.room} Room`}</span>

        {openOptions && <div className="options w-[300px] p-6 absolute md:top-[60px] top-[180px] z-10 bg-gray-200 md:bg-none border border-gray-200">

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
        <button className="text-orange-500 border-orange-500  border-2 hover:text-white hover:bg-orange-500 duration-300 px-6 rounded-lg py-1 w-full md:w-auto"> 
        <Link to={"hotels"}>Search</Link> 
        </button>
      </div>

    </div>
  )
}

export default HomeSearchBar