import React from 'react'
import {BiCheck} from "react-icons/bi"
import { Link } from 'react-router-dom'

const SingleHotelList = ({allData}) => {
    // console.log(allData);
    const {
        _id,
        CheapestPrice,
        address,
        city,
        desc,
        distance,
        name,
        photos,
        rating,
        title,
        type
    } = allData
    
  return (
     <div className='md:flex md:items-center border border-orange-300 rounded-lg p-3 mb-6'>
        { allData.photos ? 
        <> 
        <div className="img md:w-[30%]  mr-3 rounded-lg overflow-hidden">
            <img             
            src={photos[0]}
            alt="" 
            />
        </div>
        <div className="Desc md:flex md:justify-between md:w-[70%] md:items-center">
            <div className="TitleAndDesc md:w-[70%]">
                <div className="Header flex justify-between w-full"> 
                    <Link to={_id} className='text-2xl hover:text-orange-500 cursor-pointer'> {name}</Link>
                    
                </div>
                <p> {distance}m from center</p>
                <p className="text-green-800 flex items-center font-semibold">
                    <BiCheck className='text-xl ' />
                    Free Airport Taxi
                </p>
                <p className="text-green-800 flex items-center font-semibold">
                    <BiCheck className='text-xl ' />
                    Free cancelletion
                </p>
                <p className="font-bold">
                    {title}
                </p>
                <p className='max-h-[75px] overflow-hidden'>
                    {desc}
                </p>
                <p className='text-green-600 text-sm'> 
                    You can cancell Leter, so look in the great price
                </p>
            </div>
            <div className="priceRating h-full flex flex-col justify-between">
                <div className="ratings flex justify-end">
                    <p className='text-lg mr-3'> Exellent </p>
                    <p className='bg-orange-500 text-white px-2 rounded-sm py-1'> {rating}</p>
                </div>
                <div className="priceBtn text-right">
                    <h1 className="text-3xl">
                        ${CheapestPrice}
                    </h1>
                    <p className="text-sm text-gray-400 py-2">
                        Includes taxes and fees
                    </p>
                    <Link to={_id} className='bg-orange-600 text-white px-6 py-2 rounded-md'>
                        See Availability
                    </Link>
                </div>
            </div>
        </div>
        </>
        :
        <h1 className="text-4xl text-gray-700"> Loading... </h1> 
        }
        
    </div>
  )
}

export default SingleHotelList