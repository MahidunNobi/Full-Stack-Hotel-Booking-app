import "./featured.scss"
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai"
import {BsThreeDotsVertical} from "react-icons/bs"
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured md:w-[35%]'>
      <div className="header">
        <span> Total Revenue</span>
        <BsThreeDotsVertical />
      </div>
      <div className="percentageConteiner">
        <div className="percentageDiv">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />      
        </div>
        <p className="title">Total sales made today</p>
        <p className="price">$456</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="summery">
        <div className="singleSum target">
          <p> Target</p>
          <span className="rate">
            <AiOutlineArrowDown/>
            <span> $512.4k</span>
          </span>
        </div>
        <div className="singleSum lastWeek">
          <p> Last Week</p>
          <span className="rate">
            <AiOutlineArrowUp/>
            <span> $512.4k</span>
          </span>
        </div>
        <div className="singleSum lastMonth">
          <p> Last Month</p>
          <span className="rate">
            <AiOutlineArrowDown/>
            <span> $512.4k</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Featured