import { useEffect, useState } from "react"
import "./new.scss"
import {FaFileUpload} from "react-icons/fa"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import useFetch from "../../Hooks/UseFetch"

const NewHotel = ({inputs}) => {
  const [newRoomsData, setNewRoomsData] = useState({ })
  const navigate = useNavigate()
  const handleChange = (e)=>{  
    setNewRoomsData(prev => {
      return{
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleRoomNumbers =(e)=>{
    let arr = []
    const val = e.target.value.split(",").map(el => el.trim())    
    const newRooms = val.map(el => {
      el !== "" && arr.push({"number": el})
    })
    setNewRoomsData(prev => {
      return{
        ...prev,
        [e.target.name]: arr
      }
    })  
  }
  
  const handleSelect =(e)=>{
    const id = e.target.value;
    setNewRoomsData(prev => {
      return{
        ...prev,
        [e.target.name]: e.target.value
      }
    })
   }
  const handleSend = async(e)=>{
    e.preventDefault()  
    try {              
      const res = await axios.post(`/api/rooms/${newRoomsData.hotels}`, newRoomsData)
      navigate("/rooms")
    } catch (error) {
      console.log(error.response.data);
    }
    
  }

  

 const {data, loading, error} = useFetch("/api/hotels")

  return (
    <div className='new w-[80%]'>
      <h2> Add New Rooms</h2>
      <div className="form room">       
        <form className="formInputs">         
            
            {inputs.map((input, i)=> (
              <div key={i} className="singleInput">               
                <label htmlFor=""> {input.label}</label>
                <input onChange={ input.name === "roomNumbers" ? handleRoomNumbers : handleChange} type={input.type} name={input.name} placeholder={input.placeholder} />
            </div>
              ))}              

              <div className="singleInput">
                <label htmlFor=""> Hotels:</label> <br />
                <select onChange={handleSelect} name="hotels" id="hotels" className="">
                  <option value="">None</option>
                  { data ? data.map(hotel => <option key={hotel._id} value={hotel._id}> {hotel.name}</option>) : "loading"}
                </select>
              </div>
            
            <div className="singleInput">
              <button onClick={handleSend}>
                Send
              </button>
            </div>
          
        </form>
      </div>
    </div>
  )
}

export default NewHotel