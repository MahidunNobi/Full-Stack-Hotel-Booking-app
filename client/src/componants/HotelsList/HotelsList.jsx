import React from 'react'
import SingleHotelList from '../SingleHotellist/SingleHotelList'
import { useSearch } from '../../Context/SearchContext'

const HotelsList = () => {
  const {data} = useSearch()
  console.log(data);
  return (
    <div className='md:w-[68%]'>
      {data.length>=1 ?         
      data.map((hotel, i) => <SingleHotelList key={i} allData={hotel} />)
      :
      <h2 className='text-4xl text-gray-700'> Nothing Found</h2> }
      
      
    </div>
  )
}

export default HotelsList