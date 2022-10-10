import axios from "axios";
import React from "react";
import Image from "next/image";
import multiplyRooms from "../scripts/homeRooms";
import { hotelContext } from "../Helper/Context";
import { searchContext } from "../Helper/Context";
import { useState, useContext } from "react";
import Link from "next/link";


const SearchHotel = () => { 

  const [hot, setHot] = useState([]);
  const {working, setWorking} = useContext(hotelContext);

  if (process.browser){
    localStorage.setItem("mytime",JSON.stringify(hot));
  }

  const search = async (num,event)=>{

    event.preventDefault();
    const temp = num;
    const data = await fetch(`http://localhost:3000/api/search?name=${temp}`);
    const res = await data.json();
    await setHot(res);
    await setWorking(res);
    

  }
  
  return (
    <div>



      
      <form >
        <div className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white  p-10 rounded-xl">
        <div className="sm:col-span-4">
          <label
            htmlFor="first-name"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Destination, zone or hotel name
          </label>

          
    <div className="grid grid-cols-9">
      <div className="col-span-8">
          <input 
          type="text"
          placeholder="Search..."
            name="first-name"
            className="w-full bg-gray-50 text-gray-800 border border-gray-500  rounded outline-none transition duration-100 px-3 py-2"  
            onChange={event =>{search(event.target.value, event)}}             
          />
      </div>

      <div className="col-span-1  flex justify-between items-center">
      <Link href= "../../results">
            <button className="inline-block text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            // onClick={(e)=>search("Natural",e)}   
        > 
              <span className="fa fa-search text-slate-500"></span>
            </button>
      </Link>
            
      </div>
          </div> <p className="italic text-slate-500 text-xs">({hot.length} matches)</p>
          <div className="max-h-52 overflow-auto">
          <div>
            {hot.map((hotel) => (

           <div key={hotel.code}>
              
                
                <hr/>
                <Link
                 href={{pathname: `/hotel/${hotel.code}`,
                 
                }}
                 key={hotel.code}
                 
                 ><div key={hotel.name.content} className="grid grid-cols-8 my-1">
                  
                  <Image
                  className="col-span-1 p-4"
                  src={`http://photos.hotelbeds.com/giata/${hotel.images[0].path}`}
                  alt={hotel.name[0].content}
                  width={30}
                  height={50}
                  />
                  <p className="col-span-7 mx-3 mt-4 text-sm text-slate-700">{hotel.name[0].content}</p>
                  
                </div>
                </Link>
                
          </div>
        
              ))}
          </div>
          </div>
        </div>
         
</div>
      </form>
    </div>
  );
};

export default SearchHotel;
