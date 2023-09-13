import "./single.scss"
import Chart from "../../componants/Single-Page-Componants/Chart/Chart"
import Table from "../../componants/Home-Page-Componants/Table/Table"
import { useParams } from "react-router-dom"
import useFetch from "../../Hooks/UseFetch"
import { useEffect } from "react"
import axios from "axios"

const Single = () => {

  const {id} = useParams()

  const {data, loading, error} = useFetch(`/api/users/${id}`)
 
  

  return (
    <div className="singlePage w-[80%]">
      <div className="topbar">
        <div className="profile">
          <h4> Information</h4>
          <button>Edit</button>
          <div className="details">
            
              <img 
              src={data.img ? 
                data.img : 
                "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} 
              alt="" />
          
            <div className="detailsItems">
              <h1> {data.username}</h1>
              <div className="detailsItem">
                <span className="key"> E-mail: </span>
                <span className="value"> {data.email} </span>
              </div>              
              <div className="detailsItem">
                <span className="key"> Phone: </span>
                <span className="value"> {data.mobile ? data.mobile : "+088 016-023568"} </span>
              </div>              
              <div className="detailsItem">
                <span className="key"> Address: </span>
                <span className="value"> Elton St. 12 Garden Yd. {data.city} </span>
              </div>              
              <div className="detailsItem">
                <span className="key"> Country: </span>
                <span className="value"> {data.country} </span>
              </div>          
            </div>
          </div>
        </div>
        <div className="chart">
          <Chart title="User Spending" />
        </div>
      </div>
      <div className="singlePageList">
        <Table />
      </div>
      
    </div>
  )
}

export default Single