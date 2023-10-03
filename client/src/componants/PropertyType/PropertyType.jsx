import React from 'react'
import useFetch from '../../hooks/useFetch'

const PropertyType = () => {

    const {data, loading, err} = useFetch("https://mbooking.onrender.com/api/hotels/countByType")
const images = [
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",

    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",

    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",

    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="

]
  return (
    <div className='my-6'>
        <div className="container mx-auto px-6">
        
        <h3 className="text-2xl font-bold md:mb-6">
            Browse by property type
        </h3>
        <div className="PropertyItems md:flex md:justify-between pb-6 md:py-0 md:h-[230px]  lg:h-[270px]">

            { data.length > 1 ?             
            images.map((img, i) => {
                return (<div key={i} className="pitem md:w-[23%] md:h-[200px] cursor-pointer mt-6 md:mt-0 ">
                <div className="img w-full md:h-full rounded-e-lg overflow-hidden mb-3">
                    <img src={img} alt="" 
                    className='w-full object-cover'
                    />
                </div>
                <div className="desc">
                    <h3 className="text-xl font-semibold capitalize">
                        {data[i].type}
                    </h3>
                    <p>{data[i].count} {data[i].type}</p>
                </div>
            </div>
            )}) 
            : 
            <h1 className='text-gray-700 text-4xl'> Loading... </h1> 
        }
            

        </div>
        
        </div>
    </div>
  )
}

export default PropertyType