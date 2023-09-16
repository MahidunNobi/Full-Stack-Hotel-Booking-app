import { useState } from "react"
import "./new.scss"
import {FaFileUpload} from "react-icons/fa"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const NewUser = ({inputs, title}) => {

  const [img, setImg] = useState()

  const [newUserData, setNewUserData] = useState({
    username: null,
    email: null,
    password: null,
    country: null,
    city: null,
    mobile: null,
    img: null
  })

  const handleChange = (e)=>{
    setNewUserData(prev => {
      return{
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const navigate = useNavigate()

  const handleSend = async(e)=>{
    e.preventDefault()
    const ImgData = new FormData()
    ImgData.append("file", img)
    ImgData.append("upload_preset", "PresetN")
    try {      
      const imgUploadRes = await axios.post("https://api.cloudinary.com/v1_1/mahidunnobi/image/upload",ImgData)
      const {url}= imgUploadRes.data 
      const newUser ={
        ...newUserData,
        img: url
      } 
            
      const res = await axios.post("/api/auth/register", newUser) 
      navigate("/users")
    } catch (error) {
      const err = error.response.data

      if(err.error){
        if (err.error.message === "Unsupported source URL: undefined") {
          alert("Please select a image of yourselft")
        }        
      }
      else if(err.message === "Illegal arguments: object, string"){
        alert("Please provide all the information")
      }

      else if(err.message){
        alert("Username or Email is already exists. Please try another one...")
      }

        console.log(err);      
      }

  }
 

  

  return (
    <div className='new w-[80%]'>
      <h2> {title}</h2>
      <div className="form">
        <div className="img">
          <img src={
            img ?
            URL.createObjectURL(img)
            :
            "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          } alt="" />
        </div>
        <form className="formInputs">
         
            <div className="singleInput file">
              <label htmlFor="file"> Image: <FaFileUpload htmlFor="file" className="icon"/> </label>
              
              <input type="file" name="img" onChange={(e)=> setImg(e.target.files[0])} id="file" style={{display: "none"}} />
            </div>
            {inputs.map((input, i)=> (
              <div key={i} className="singleInput">
                <label htmlFor=""> {input.label}</label>
                <input onChange={handleChange} type={input.type} name={input.name} placeholder={input.placeholder} />
            </div>
              ))}
            
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

export default NewUser