import { useEffect, useState } from "react"
import "./new.scss"
import {FaFileUpload} from "react-icons/fa"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import useFetch from "../../Hooks/UseFetch"

const NewHotel = ({inputs}) => {

 
  const [ImgesFile, setImgesFile] = useState([])

  const [newHotelData, setNewHotelData] = useState({ })

  const handleChange = (e)=>{
    setNewHotelData(prev => {
      return{
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleFeature = (e)=>{
    setNewHotelData(prev => {
      return{
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSelect =(e)=>{
   const rooms = Array.from(e.target.selectedOptions, option => option.value);
   setNewHotelData(prev => {
    return{
      ...prev,
      [e.target.name]: rooms
    }
  })
  }

  const navigate = useNavigate()

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
        
        const newHotel = {
          ...newHotelData,
          photos: list
        }      
      
    
      const res = await axios.post("/api/hotels", newHotel)
    navigate("/hotels")
    } catch (error) {
      console.log(error.response.data);
    }
    
  }

 const {data, loading, error} = useFetch("/api/rooms")

  useEffect(()=> {
    alert("If your image size is more than 1MB, Try to load the image at the last step. Otherwise, the app will slow down.")},[] )

  return (
    <div className='new w-[80%]'>
      <h2> Add New Hotels</h2>
      <div className="form hotel">
        <div className="img hotelImg">   
          { 
            ImgesFile.length>1 ? 
            <>
             {ImgesFile.map((im, i)=> <img key={i+36} src={URL.createObjectURL(im)} alt="" /> )} 
            </> 
            
            :
          <img src={
            ImgesFile.length === 1 ?
            URL.createObjectURL(ImgesFile[0])
            :
            "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          } alt="" /> 
        }

       
               
          
          
          
        </div>
        <form className="formInputs">
         
            <div className="singleInput file">
              <label htmlFor="file"> Image: <FaFileUpload htmlFor="file" className="icon"/> </label>
              
              <input type="file" name="img" multiple onChange={(e)=> setImgesFile(Object.values(e.target.files)) } id="file" style={{display: "none"}} />
            </div>
            {inputs.map((input, i)=> (
              <div key={i} className="singleInput">
                {
                  input.name ==="featured" ?
                  <> 
                    <span> Featured: </span>
                    <select onChange={handleFeature} name="featured" id="featured">
                      <option value="true"> Yes</option>
                      <option value="false"> No</option>
                    </select>
                  </> 
                  :
                  <> 
                    <label htmlFor=""> {input.label}</label>
                    <input onChange={handleChange} type={input.type} name={input.name} placeholder={input.placeholder} />
                  </>
                }

            </div>
              ))}
              <div className="singleInput">
                <label htmlFor=""> Description:</label> <br />
                <textarea name="desc" onChange={handleChange} id="description" cols="30" rows="5"></textarea>
              </div>

              <div className="singleInput">
                <label htmlFor=""> Rooms:</label> <br />
                <select onChange={handleSelect} name="rooms" multiple id="rooms" className="">
                  { data ? data.map(room => <option key={room._id} value={room._id}> {room.title}</option>) : "loading"}
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