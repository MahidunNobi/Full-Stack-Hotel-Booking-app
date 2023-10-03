import React, { useState } from 'react'
import format from 'date-fns/format'
import { useSearch } from '../../Context/SearchContext'
import { SlCalender } from 'react-icons/sl'
import { DateRange } from 'react-date-range'
import { BsPerson } from 'react-icons/bs'

import useFetch from '../../hooks/useFetch'  

const HotelListSearch = () => {

const {
  DateRangeState, 
  setDateRangeState, 
  options, 
  handleOptions, 
  destination, 
  setDestination,
  dispatch,
  minimumPrice,
  maximumPrice,
data} = useSearch()

const [openDate, setOpenDate] = useState(false)
const [openOptions, setOpenOptions] = useState(false)

 const apiLink = `https://mbooking.onrender.com/api/hotels?${destination && `city=${destination}&`}min=${minimumPrice}&max=${maximumPrice}`

const { loading, err, reFetchData} = useFetch(apiLink)


function handleSearchSubmit (){
  reFetchData();
}

  return (
    <div className='bg-orange-300 md:w-[31%] p-6 flex flex-col space-y-6 rounded-md md:h-max md:sticky md:top-10 mb-6 md:mb-0'>
      <input 
      type="text" 
      name='search' 
      id='search' 
      value={destination}
      onChange={setDestination}
      placeholder='Where are you going..!'
      className='px-3 py-2 rounded-lg outline-none'
       />
       <div className="dateFilter text-gray-800 flex cursor-pointer px-3 py-2  bg-white relative hover:text-gray-600" onClick={()=> setOpenDate(!openDate)}>
       <SlCalender  className="text-2xl mr-2"/>

        <p className='text-center text-base'>
       {`${format(DateRangeState[0].startDate, "MM-dd-yyyy")} 
          to 
          ${format(DateRangeState[0].endDate, "MM-dd-yyyy")}`}
        </p>
       </div>        
        { openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDateRangeState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={DateRangeState}
          className="z-10"
        />}
        

       <div className="optionsFilter text-gray-800 flex cursor-pointer hover:text-white relative">
       {/* <BsPerson className="text-2xl mr-2" onClick={()=>setOpenOptions(!openOptions)}/>
        <span onClick={()=>setOpenOptions(!openOptions)}> {`${options.adult} Adult, ${options.child} Children . ${options.room} Room`}</span> */}
         <div className="options w-full bg-transperant">

         <div className="optionsItem mb-3 flex justify-between text-gray-600">
            <p>Minimum Price</p>
            <div className="numberbtns w-[101px] overflow-hidden bg-white">
              <input 
              type="number" 
              onChange={ (e)=> dispatch({type: "Set_Min_Price", payload: e.target.value})} 
              className='w-full px-2 text-center'
              value={minimumPrice}
              />              
            </div>
        </div>       
         <div className="optionsItem mb-3 flex justify-between text-gray-600">
            <p>Maximum Price</p>
            <div className="numberbtns w-[101px] overflow-hidden bg-white">
              <input 
              type="number" 
              onChange={ (e) => dispatch({type: "Set_Max_Price", payload: e.target.value})} 
              className='w-full px-2 text-center'
              value={maximumPrice}
              />              
            </div>
        </div>       

          <div className="optionsItem flex justify-between text-gray-600">
            <p>Adult</p>
            <div className="numberbtns bg-white">
              <button className="text-lg px-2 active:text-orange-500" 
              disabled={options.adult <=1}                  
              onClick={()=> handleOptions("adult", "d")}> - </button>
              <span className="px-4"> {options.adult} </span>
              <button className="text-lg px-2 active:text-orange-500"
              onClick={()=> handleOptions("adult", "i")}> + </button>
            </div>
          </div>

          <div className="optionsItem flex justify-between text-gray-600 my-3">
            <p>Child</p>
            <div className="numberbtns bg-white">
              <button className="text-lg px-2 active:text-orange-500"
              disabled={options.child <=0} 
              onClick={()=> handleOptions("child", "d")}> - </button>
              <span className="px-4"> {options.child} </span>
              <button className="text-lg px-2 active:text-orange-500"
              onClick={()=> handleOptions("child", "i")}> + </button>
            </div>
          </div>

          <div className="optionsItem flex justify-between text-gray-600 mb-6">
            <p>Room</p>
            <div className="numberbtns bg-white">
              <button className="text-lg px-2 active:text-orange-500"
              disabled={options.room <=1} 
              onClick={()=> handleOptions("room", "d")}> - </button>
              <span className="px-4"> {options.room} </span>
              <button className="text-lg px-2 active:text-orange-500"
              onClick={()=> handleOptions("room", "i")}> + </button>
            </div>
          </div>
          <button onClick={handleSearchSubmit} className="w-full text-orange-500 border-2 py-2 rounded-full border-orange-500 hover:text-white hover:bg-orange-500 duration-300" 
          > Search</button>

        </div>
       </div>
    </div>
  )
}

export default HotelListSearch