import React, { useContext } from 'react'
import Header from '../../componants/Header/Header'
import HotelsList from '../../componants/HotelsList/HotelsList'
import HotelListSearch from '../../componants/HotelListSearch/HotelListSearch'
import { SearchContext } from '../../Context/SearchContext'

const List = () => {

  return (
    <div>
      <Header page="hotelsList"/>
      <div className="searchAndHotelsList container mx-auto px-6 py-6 md:flex md:justify-between relative">
        <HotelListSearch />
        <HotelsList />
      </div>
    </div>
  )
}

export default List