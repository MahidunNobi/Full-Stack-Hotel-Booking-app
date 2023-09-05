import { useState } from "react"
import "./new.scss"
import {FaFileUpload} from "react-icons/fa"

const New = ({inputs, title}) => {

  const [img, setImg] = useState()

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
                <input type={input.type} placeholder={input.placeholder} />
            </div>
              ))}
            
            <div className="singleInput">
              <button>
                Send
              </button>
            </div>
          
        </form>
      </div>
    </div>
  )
}

export default New