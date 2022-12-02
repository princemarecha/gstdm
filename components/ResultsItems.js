import React, { useContext } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { cartNum, notifiContext } from "../Helper/Context";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { faPlane, faPlaneArrival } from "@fortawesome/free-solid-svg-icons";


const ResultsItems = ({ hotel }) => {
  // const perks = hotel.perks;
  // const icons = hotel.icons;

  const {cartNumber, setCartNumber} = useContext(cartNum);
  const notify = () => toast.success("Hotel Successfully Added to Cart", {position: toast.POSITION.TOP_RIGHT});

  const [cart, setCart] = useState([]);

  const add = async (event) => {
    event.preventDefault();
    setCart(hotel);

    if (process.browser) {
      const temporary = [];
      const analyser = [];
      const checker = [];

      const fromC = JSON.parse(localStorage.getItem("cart"));

      if (!fromC) {
        fromC = [hotel];
        analyser = fromC;
        console.log("pushed");
        localStorage.setItem("cart", JSON.stringify(analyser));
      } 
      
      else if (fromC) {

        fromC.map((check)=>{
          checker.push(check.code);
        }
        )
        if ((checker.includes(hotel.code))){
             
              console.log("pushed regardless")
              console.log("hotel already added")
              
             
        }
        else if (!(checker.includes(hotel.code))){
           analyser = [...fromC, hotel];
           console.log(analyser);
           localStorage.setItem("cart", JSON.stringify(analyser));
           console.log(fromC.length);
          setCartNumber(  JSON.parse(localStorage.getItem("cart")).length);
        }
        
        
      }

    }
  };
  

  const rating = [];
  if (hotel.S2C)
  {for (let i = 0; i < parseInt(hotel.S2C[0]); i++) {
    rating.push(<svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="star"
      className="w-4 text-yellow-500 mr-1"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      ></path>
    </svg>);
  }}
  else{
    rating.push("(Rating (N/A) ) ")
  }

  var map = "/hotel/"+hotel.code+"/#map";
  var image = "/hotel/"+hotel.code+"/#image";
  var description = "/hotel/"+hotel.code+"/#description";

  return (
    <div>

      <a href={`/hotel/${hotel.code}`}>
        <div className="md:grid grid-flow-row-dense grid-cols-4 grid-row-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white">
          <div className="w-full mt-1 ml-1 flex">
            <Image
              src={`http://photos.hotelbeds.com/giata/${hotel.images[0].path}`}
              alt="Picture of the hotel stuff"
              width="200px"
              height="100px"
            />
          </div>

          <div className="text-sm p-6 col-span-2">
            <h3 className="font-bold text-base flex nameStyle text-lg">
              {hotel.name[0].content}
              &nbsp;
              ({hotel.code})
            </h3>

            <div className="flex items-center locationTag">
              <span className="font-semibold text-xs">{ hotel.city[0].content} (City) </span>
            </div>
            <div className="flex items-center">{rating}</div>

            <div className="flex mb-0 bottom-0">
              <div className="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
              <Link href={map}>
                Map
              </Link>
              </div>
              <div className="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
              <Link href={image}>
                Images
              </Link>
              </div>
              <div className="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
              <Link href={description}>
                Description
              </Link>
              </div>
              <div className="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1" onClick={console.log("clicked")}>
                View
              </div>
            </div>
          </div>

          <div className="bg-cyan-100">
            <p className="text-blue-700 font-semibold p-3 text-sm">
              {hotel.rooms.length} x Rooms (Category ({hotel.categoryCode}))
            </p>
            <p className="px-3 pb-3 text-sm">
              <i className="fa fa-info-circle" aria-hidden="true"></i> Non
              refundable
            </p>
            <div className="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
              {hotel.currency} {hotel.rate}
            </div>
            <div className="flex justify-between items-center">
              <button
                className="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2"
                onClick={(e) => {
                  add(e);
                  notify();
                  
                }}
              >
                Add to cart
              </button>
              {/* {console.log(cart)}; */}
            </div>
          </div>
        </div>
      </a>
      <ToastContainer
      autoClose={1000}
      />
    </div>
  );
};

export default ResultsItems;
