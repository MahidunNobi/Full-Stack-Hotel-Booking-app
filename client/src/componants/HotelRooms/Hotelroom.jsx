import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import {useSearch} from "../../Context/SearchContext"

const Hotelroom = ({setOpenRoom}) => {

    const [rooms, setRooms] = useState([])
    const [selectedRooms, setSelectedRooms] = useState([])
    const {DateRangeState} = useSearch()
    const {startDate, endDate} = DateRangeState[0]

    const getDateInRange = (start, end)=>{
        const date = new Date(start.getTime())

        const dates = []

        while (date <= end) {
            
            dates.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }     
        return dates

    }

    // console.log(getDateInRange(startDate, endDate));

    const allDates = getDateInRange(startDate, endDate)

    const isAvailable = (roomNumbers) =>{
        const isFound = roomNumbers.unavailableDates.some((date) => allDates.includes(new Date(date).getTime()))
        return isFound
    }

    const fetchData =async()=>{
        try {
            const res = await axios.get("/api/hotels/find/64e45197928fcdbde0ba0c63/rooms")            
            setRooms(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
     fetchData()
    }, [])

    

    
    const handleSelect = (e) => {
       const checked = e.target.checked
       const value = e.target.value

       setSelectedRooms(
        checked ?
        [...selectedRooms, value] :
        selectedRooms.filter(rmNum => rmNum !== value)
       )
    }

    const handleReserve = async() =>{
        setOpenRoom(false);
        try {
            await Promise.all(selectedRooms.map(roomId => {
                const res = axios.patch(`http://localhost:5000/api/rooms/availability/${roomId}`, {dates: allDates})
                console.log(" Unavailable Dates Updated");
                return res.data
            }))
        } catch (error) {
            console.log(error);
        }
    }
    

   

  return (
    <div className=' fixed top-0 bg-[#33333394] w-full h-screen'>
        <div className="clsBtn w-full flex justify-end p-6">
            <button onClick={()=> setOpenRoom(false)}> 
                <AiOutlineClose className='text-2xl text-white ' />
            </button> 
        </div>
        <div className="mainContainer h-[80vh] flex justify-center items-center">
            <div className='bg-white w-[350px] p-6 rounded-lg'>
                <span className='text-lg font-medium mb-3'> Select your rooms:</span>
            
                <div className="rooms">
                    { rooms.map((room, i) =>  {
                    return (<div key={room._id} className="room flex justify-between mb-5">
                        <div className="left w-[60%]"> 
                            <span className="text-lg"> {room.title}</span>
                            <br />
                            <span className="desc text-gray-500"> {room.desc}</span> <br />
                            <span className=" MaxPeople text-sm"> Max People: {room.maxPeople}</span> <br />
                            <span className="price"> <b>${room.price}</b> </span>
                        </div>
                        <div className="right w-[35%] ml-3 flex justify-between flex-wrap space-y-0">
                            { room.roomNumbers.map((num, i) => {
                                return (<div key={num._id} className="num text-gray-500 flex flex-col items-center mx-1">
                                <label htmlFor="101" className=' text-xs'> {num.number} </label>
                                <input type="checkbox" disabled={isAvailable(num)} value={num._id} onChange={handleSelect} />
                            </div>)
                            }) }                       
                        </div>
                    </div>)
                } )}                   
                    
                </div>
                <button onClick={handleReserve} className='w-full bg-orange-600 text-white py-2 text-lg'> Reserve </button>
            </div>
        </div>
    </div>
  )
}

export default Hotelroom