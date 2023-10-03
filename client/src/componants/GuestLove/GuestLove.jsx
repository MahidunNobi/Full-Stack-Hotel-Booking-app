import React from 'react'
import useFetch from "../../hooks/useFetch"

const GuestLove = () => {
  const {data, loading, err} = useFetch("https://mbooking.onrender.com/api/hotels?featured=true&limit=4")

  return (
    <div className='my-6'>
        <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold mb-6">
                Homes guests love
            </h3>
            <div className="homesList flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between "> 

              { data.length>1 ?
              data.map( (hotel, i) => 
              <div className="home md:w-[24%]" key={i}>
                <div className="img rounded-lg overflow-hidden h-[220px] mb-3">
                  <img 
                  src={hotel.photos[0]} 
                  alt="" 
                  className='w-full object-cover -mt-4'
                  />
                </div>
                <div className="desc flex flex-col space-y-2">
                  <span className='text-lg font-bold'> {hotel.title}</span>
                  <p className='text-sm text-gray-800'> {hotel.city}</p>
                  <p className='text-gray-500'> 
                    Starting from &nbsp;
                    <span className='font-bold text-black'>                 
                     ${hotel.CheapestPrice} 
                    </span> 
                  </p>
                  { hotel.rating && <div className="reviewsSection">
                    <span className='bg-orange-700 text-white px-2 rounded-md py-1'> {hotel.rating}</span> 
                    <span className="text-sm text-gray-600"> Exellent- 4857 reviews</span>
                  </div>}
                </div>
              </div> )
              :
              <h1 className="text-4xl text-gray-700"> Loading...</h1>
              }
              
            </div>
        </div>
    </div>
  )
}

export default GuestLove