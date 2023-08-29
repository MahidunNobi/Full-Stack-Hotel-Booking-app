import React from 'react'
import {BiCheck} from "react-icons/bi"
import { Link } from 'react-router-dom'

const SingleHotelList = ({allData}) => {
    console.log(allData);
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
    <div className='flex border border-orange-300 rounded-lg p-3 mb-6'>
        <div className="img w-[25%]  mr-3">
            <img 
            src={photos[0]}
            alt="" 
            />
        </div>
        <div className="Desc flex justify-between w-[75%] items-center">
            <div className="TitleAndDesc">
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
                <p>
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
        
    </div>
  )
}

export default SingleHotelList