import "./widget.scss"
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineArrowUp,
  AiFillAccountBook, 
  AiOutlineShoppingCart,
  AiTwotoneMoneyCollect
} from "react-icons/ai"

import {MdOutlineMonetizationOn} from "react-icons/md"
import {TbMoneybag} from "react-icons/tb"

const Widget = ({type}) => {
  let data

  const amount = 100
  const diff = 20

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: <BsFillPersonFill className="icon text-orange-500" />
      }
      
      break;
    case  "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all order",
        icon: <AiOutlineShoppingCart className="icon text-orange-600 bg-[#ffd9025c] rounded-full" />
      }
      break;
    case  "ernings":
      data = {
        title: "ERNINGS",
        isMoney: true,
        link: "View all ernings",
        icon: <MdOutlineMonetizationOn className="icon  text-green-600 bg-[#0fff172b] rounded-full" />
      }
      break;
    case  "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <TbMoneybag className="icon text-purple-600 bg-[#ce0aff54] rounded-full" />
      }
      break;
  
    default:
      break;
  }

  return (
    <div className="widget">
        <div className="left">
            <span className="title"> {data.title}</span>
            <span className="counter"> {data.isMoney && "$"}{amount} </span>
            <span className="all"> {data.link}</span>
        </div>
        <div className="right">
            <span className="percentage negative"> <AiOutlineArrowUp className="icon" /> 
            {diff}%</span>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget