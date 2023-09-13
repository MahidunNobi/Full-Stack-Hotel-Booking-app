import "./single.scss"
import Chart from "../../componants/Single-Page-Componants/Chart/Chart"
import Table from "../../componants/Home-Page-Componants/Table/Table"



const Single = () => {

  return (
    <div className="singlePage w-[80%]">
      <div className="topbar">
        <div className="profile">
          <h4> Information</h4>
          <button>Edit</button>
          <div className="details">
            
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHs-OcjJOoWkPZk3tEPzegLO34Jkt_hFkwe24hReoyURom3r69RHhSbA1k8aLxWg_38MA&usqp=CAU" alt="" />
          
            <div className="detailsItems">
              <h1> Jane Doe</h1>
              <div className="detailsItem">
                <span className="key"> E-mail: </span>
                <span className="value"> jaslie@gmail.com </span>
              </div>              
              <div className="detailsItem">
                <span className="key"> Phone: </span>
                <span className="value"> +088 016-023568 </span>
              </div>              
              <div className="detailsItem">
                <span className="key"> Address: </span>
                <span className="value"> Elton St. 12 Garden Yd. NewYork </span>
              </div>              
              <div className="detailsItem">
                <span className="key"> Country: </span>
                <span className="value"> Bangladesh </span>
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