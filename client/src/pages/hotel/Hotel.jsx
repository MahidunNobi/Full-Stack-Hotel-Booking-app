import "./hotel.css"
import React, { useState } from 'react'
import Header from '../../componants/Header/Header'
import {BiCheck} from "react-icons/bi"
import {MdLocationOn} from "react-icons/md"
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose} from "react-icons/ai"
import {GrClose} from "react-icons/gr"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"


const Hotel = () => {
  const images = [    
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321487672.jpg?k=d28ce0589b3218971893af70562305cb7e13357190d75f5b65282b3997001e59&o=&hp=1"},
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319321797.jpg?k=912faca66b8865a4d83f6e343097533c000a0b653c3a7bdbbc20a644f8fe79cc&o=&hp=1"},
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747190.jpg?k=2340dcb141db67b90d60a0153142715c3c9352e3f3c9912f5e2572c910b59a83&o=&hp=1" },
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747190.jpg?k=2340dcb141db67b90d60a0153142715c3c9352e3f3c9912f5e2572c910b59a83&o=&hp=1" },
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319321797.jpg?k=912faca66b8865a4d83f6e343097533c000a0b653c3a7bdbbc20a644f8fe79cc&o=&hp=1"},
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747190.jpg?k=2340dcb141db67b90d60a0153142715c3c9352e3f3c9912f5e2572c910b59a83&o=&hp=1" },
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321487672.jpg?k=d28ce0589b3218971893af70562305cb7e13357190d75f5b65282b3997001e59&o=&hp=1"},
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319321797.jpg?k=912faca66b8865a4d83f6e343097533c000a0b653c3a7bdbbc20a644f8fe79cc&o=&hp=1"},
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747190.jpg?k=2340dcb141db67b90d60a0153142715c3c9352e3f3c9912f5e2572c910b59a83&o=&hp=1" },
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747190.jpg?k=2340dcb141db67b90d60a0153142715c3c9352e3f3c9912f5e2572c910b59a83&o=&hp=1" },
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319321797.jpg?k=912faca66b8865a4d83f6e343097533c000a0b653c3a7bdbbc20a644f8fe79cc&o=&hp=1"},
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747190.jpg?k=2340dcb141db67b90d60a0153142715c3c9352e3f3c9912f5e2572c910b59a83&o=&hp=1" },
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321487672.jpg?k=d28ce0589b3218971893af70562305cb7e13357190d75f5b65282b3997001e59&o=&hp=1"},
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319321797.jpg?k=912faca66b8865a4d83f6e343097533c000a0b653c3a7bdbbc20a644f8fe79cc&o=&hp=1"},
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747190.jpg?k=2340dcb141db67b90d60a0153142715c3c9352e3f3c9912f5e2572c910b59a83&o=&hp=1" },
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747190.jpg?k=2340dcb141db67b90d60a0153142715c3c9352e3f3c9912f5e2572c910b59a83&o=&hp=1" },
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319321797.jpg?k=912faca66b8865a4d83f6e343097533c000a0b653c3a7bdbbc20a644f8fe79cc&o=&hp=1"},
    {url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747190.jpg?k=2340dcb141db67b90d60a0153142715c3c9352e3f3c9912f5e2572c910b59a83&o=&hp=1" },
  ]
  const [imgNumber, setImgNumber] = useState(0)
  const [openImagePreview, setOpenImagePreview] = useState(false)

  const handleImgClick = (i)=>{
    setImgNumber(i);
    setOpenImagePreview(!openImagePreview)
  }

  const handleMoreThanSevenImg = ()=>{
    const first6ImgLink = images.slice(0,6) 
    const first6Img = first6ImgLink.map((img, i)=> <div onClick={()=> handleImgClick(i)} key={i} className="grid-item item cursor-pointer">
    <img src={img.url} alt="" />
  </div>)
    return first6Img.concat(
    <div onClick={()=> handleImgClick(7)} key={7} className="grid-item item cursor-pointer relative">
    <img src={images[7].url} alt="" />
    <div className="shadowD absolute top-0 bg-[#00000076] w-full h-full flex justify-center items-center">
      <span className="text-white text-4xl">{images.length -7}+</span>
    </div>
  </div>)
  
  }
  // Backend Functionality
  const {id} = useParams()
  const {data, loading, err} = useFetch(`/api/hotels/find/${id}`)

  const {
    name,
    address,
    CheapestPrice,
    city,
    desc,
    distance,
    photos,
    rating,
    title,
    type
  } = data

  return (
    <div>
      <Header page={"hotelsList"} />
      <div>
        { openImagePreview && <div className="imgPreviewer fixed top-0 w-full h-screen bg-[#1616165f] z-20 flex justify-center items-center">
          <AiOutlineClose className="absolute top-[20px] right-[20px] text-white text-xl hover:text-gray-300 cursor-pointer " onClick={()=> setOpenImagePreview(!openImagePreview)} />
          <AiOutlineArrowLeft onClick={()=> imgNumber > 0 && setImgNumber(imgNumber-1)} className=" text-white text-xl hover:text-gray-300 cursor-pointer mr-6"/>
          <div className="img w-[80%] overflow-hidden flex items-end">
            <img src={images[imgNumber].url} className="w-full" alt="" />
          </div>
          <AiOutlineArrowRight onClick={()=> imgNumber < images.length-1 && setImgNumber(imgNumber+1)} className="text-white text-xl hover:text-gray-300 cursor-pointer ml-6" />
        </div>}
        <div className="container mx-auto px-6 py-6">
          <div className="header mb-6 md:flex justify-between">
            <div className="title">
              <div className="Header flex justify-between w-full"> 
                      <h1 to={"4561"} className='text-4xl font-semibold '> {name}</h1>                     
                  </div>
                  <span className='flex  items-center'>
                    <MdLocationOn className=' mr-2 text-lg'/> 
                    <p className='text-gray-500 text-sm'> 
                      {address}
                    </p>
                  </span>
                  <span className='text-xl text-blue-600'> 
                    Exellent Location -{distance}m from center
                  </span>
                  <p className="text-green-800 flex items-center font-semibold">
                      <BiCheck className='text-xl ' />
                      Free Airport Taxi
                  </p>
                  <p className="text-green-800 flex items-center font-semibold">
                      <BiCheck className='text-xl ' />
                      Free cancelletion
                  </p>               
                  <p className='text-green-600 '> 
                    Book a stay over ${CheapestPrice} at this property and get a free spa 
                  </p>
            </div>
            <div className="btn">
              <button className='bg-orange-500 text-white px-4 py-2 rounded-lg text-lg'> Reserve or Book Now </button>
            </div>
          </div>
          <div className="Photo-gallery grid-container">  

              { images.length > 7 ? handleMoreThanSevenImg() : images.map((img, i)=> <div onClick={()=> handleImgClick(i)} key={i} className="grid-item item cursor-pointer">
                <img src={img.url} alt="" />
              </div>) }

          </div>
          <div className="desc my-6 md:flex items-center justify-between">
            <div className="mainDesc md:w-[65%] mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold"> {title} </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum labore at, non provident nemo voluptatem placeat tenetur odio cum molestiae, mollitia quis architecto recusandae quisquam eveniet! Aspernatur, laboriosam ad?              Distinctio rerum labore at, non provident nemo voluptatem placeat tenetur odio cum molestiae, mollitia quis architecto recusandae quisquam eveniet! Aspernatur, laboriosam ad?
              </p>
            </div>
            <div className="9night md:w-[30%] bg-orange-200 p-6 flex flex-col space-y-3 rounded-md">
              <h4 className="text-xl font-semibold text-gray-600 "> Perfect for a 9-night Stay</h4>
              <p className="text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla? Dicta possimus, ducimus eligendi error magni atque consequatur. </p>
              <h1 className="text-3xl"> <span className="font-bold">${CheapestPrice} </span>(9 nights)</h1>
              <button className='bg-orange-500 text-white px-4 py-2 rounded-lg text-lg'> Reserve or Book Now </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hotel