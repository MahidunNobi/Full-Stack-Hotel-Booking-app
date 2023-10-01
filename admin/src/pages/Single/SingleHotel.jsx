import "./single.scss"
import Chart from "../../componants/Single-Page-Componants/Chart/Chart"
import Table from "../../componants/Home-Page-Componants/Table/Table"
import { useParams } from "react-router-dom"
import useFetch from "../../Hooks/UseFetch"
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"


const Single = () => {
  const {id} = useParams()
  const {data, loading, error} = useFetch(`/api/hotels/find/${id}`)

  const {
    photos,
    name,
    CheapestPrice,
    address,
    city,
    desc,
    distance,
    rating,
    rooms,
    type
  } = data

  let starsArray = []

const Number = Math.floor(rating)
// Ratting Bottom Line Numbers Stars
for(let i =0; i<Number; i++){
  starsArray.push(<BsStarFill key={i} />)
}
// Ratting Decimals Star
const decimal = (rating - Number).toFixed(1)
decimal > 0.5 ? starsArray.push(<BsStarHalf key={9}/>) : starsArray.push(<BsStar key={10} />)

// Ratting Not rated Stars
const extraNum = Math.floor(5 - rating) 
if(extraNum >=1){
  for(let i=0; i<extraNum; i++){
    starsArray.push(<BsStar key={i+10} />)
  }
}
  return (
    <div className="singlePage  w-[80%]">
      <div className="topbar hotel">
        <div className="profile">
          <h4> Information</h4>
          <button>Edit</button>
          <div className="details">
            
          <img 
              src={photos ? 
                photos[0] : 
                "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} 
              alt="" />
          
            <div className="detailsItems">
              <h1> {name}</h1>
              <span className="text-gray-400 ">{type}</span>                           
              <div className="detailsItem">
                <span className="key"> Address: </span>
                <span className="value"> {address} {city} </span>
              </div>              
              <div className="detailsItem">
                <span className="key"> Country: </span>
                <span className="value"> {city} </span>
              </div>          
              <div className="detailsItem">
                <span className="key"> Price: </span>
                <span className="value text-xl"> ${CheapestPrice} </span>
              </div>              
              <div className="detailsItem">
                <span className="key"> Distance (from city): </span>
                <span className="value"> {distance} Meter </span>
              </div>              
              <div className="detailsItem flex space-x-1 items-center">
                <span className="key"> Rating: </span>
                <span style={{color: "#FF9529"}} className="value flex space-x-1 text-lg"> {starsArray}  </span>
                <span> ({rating}/5) </span>
              </div>              
            </div>
          </div>
        </div>
        <div className="description">
          <h2 className="text-xl"> Description:</h2>
          <hr />
          <p>{desc}</p>
        </div>
        <div className="chart">
          <Chart title="User interaction with this hotel" />
        </div>
      </div>
      <div className="singlePageList">
        <Table />
      </div>
      
    </div>
  )
}

export default Single