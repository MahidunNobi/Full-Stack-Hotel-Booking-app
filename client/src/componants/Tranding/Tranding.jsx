import React from "react";
import "./Tranding.css";
import useFetch from "../../hooks/useFetch";

const Tranding = () => {
  const { data, loading, err } = useFetch(
    "https://full-stack-hotel-booking-app-eosin.vercel.app/api/hotels/countByCity?cities=Berlin,Madrid,London"
  );

  return (
    <div>
      <div className="container mx-auto py-10 px-6">
        <div className="headers">
          <h3 className="text-3xl font-semibold">Trending destinations</h3>
          <p>Most popular choices for travelers from Bangladesh</p>
        </div>
        <div className="firstRow2Column hidden lg:flex md:justify-between my-6 items-center">
          <div className="destination md:w-[48%] rounded-xl overflow-hidden h-[280px] relative">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/688201.jpg?k=586e76aa55aa92d886eaf5837e288d77e15c9b81534bd4c7121d0d020e99064d&o="
              alt=""
              className="w-full object-cover -mt-40"
            />
            <div className="descriptions">
              <h3 className="text-2xl font-medium"> Dhaka, Bangladesh </h3>
            </div>
          </div>
          <div className="destination md:w-[48%] rounded-xl overflow-hidden h-[280px] relative">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/685535.jpg?k=e2be6eed1575001863411089bf79fd4be8a1d6fc4fb68ee5c865083994a6fe96&o="
              alt=""
              className="w-full object-cover -mt-48"
            />
            <div className="descriptions">
              <h3 className="text-2xl font-medium"> Kualampur, Malaysia </h3>
            </div>
          </div>
        </div>

        <div className="feturedDestinations md:flex md:justify-between gap-[20px] mt-6 md:mt-0">
          <div className="featuredItem md:w-[32%] h-[250px] overflow-hidden rounded-lg relative">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/619676.jpg?k=d6fff74c6fd1f22c63e757d3e0ed79b22ac5986625f3a4abb7564543e8ea62b5&o="
              alt=""
              className="w-full object-cover -mt-10"
            />
            <h3 className="text-2xl font-medium absolute top-3 img-text-shadow left-3">
              Singapore
            </h3>
          </div>
          <div className="featuredItem md:w-[32%] h-[250px] overflow-hidden rounded-lg relative my-6 md:my-0">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/620029.jpg?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o="
              alt=""
              className="w-full object-cover -mt-10"
            />
            <h3 className="text-2xl font-medium absolute top-3 img-text-shadow left-3">
              Bangkok
            </h3>
          </div>
          <div className="featuredItem md:w-[32%] h-[250px] overflow-hidden rounded-lg relative">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o="
              alt=""
              className="w-full object-cover -mt-10"
            />
            <h3 className="text-2xl font-medium absolute top-3 img-text-shadow left-3">
              Kolkata
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tranding;
