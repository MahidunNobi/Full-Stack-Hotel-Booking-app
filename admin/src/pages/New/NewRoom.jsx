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
  
  const handleSelect =(e)=>{
    const hotels = Array.from(e.target.selectedOptions, option => option.value);
    console.log(hotels);
   }
  const handleSend = async(e)=>{
    e.preventDefault()
  
    try {      
        const list = await Promise.all(ImgesFile.map(async(img) => {
            const ImgData = new FormData()
            ImgData.append("file", img)
            ImgData.append("upload_preset", "PresetN")
            const imgUploadRes = await axios.post("https://api.cloudinary.com/v1_1/mahidunnobi/image/upload",ImgData)
            const {url}  = imgUploadRes.data    
            return url    
          }))      
        
        const newRooms = {
          ...newRoomsData,
          photos: list
        }      
      
    
      const res = await axios.post("/api/Roomss", newRooms)
    navigate("/Roomss")
    } catch (error) {
      console.log(error.response.data);
    }
    
  }

 const {data, loading, error} = useFetch("/api/hotels")

 console.log(data);
  return (
    <div className='new w-[80%]'>
      <h2> Add New Rooms</h2>
      <div className="form room">       
        <form className="formInputs">         
            
            {inputs.map((input, i)=> (
              <div key={i} className="singleInput">               
                <label htmlFor=""> {input.label}</label>
                <input onChange={handleChange} type={input.type} name={input.name} placeholder={input.placeholder} />
            </div>
              ))}              

              <div className="singleInput">
                <label htmlFor=""> Hotels:</label> <br />
                <select onChange={handleSelect} name="hotels" id="hotels" className="">
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