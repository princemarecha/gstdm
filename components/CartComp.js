import React, { Component, useContext } from "react";
import Image from "next/image";
import { useState ,useEffect} from "react";
import { cartContext, hotelContext } from "../Helper/Context";



const CartComp = () => {

  useEffect(()=>{
    if (cartHotel.length!=0){
      setPrep(cartHotel[0]);
      setCurrent(cartHotel[0]);
    }
  },[])
  
  
  const [prep, setPrep] = useState([]);
  const {current, setCurrent} = useContext(cartContext);
  const[live, setLive] = useState([]);
  const [someVar, setSomeVar] = useState(null); //force refresh component
  const cartHotel = [];

  const {hoteCode, setHoteCode} = useContext(hotelContext);

  if (process.browser){
    cartHotel = JSON.parse(localStorage.getItem("cart"));
  }
const removeAll =()=>{
  localStorage.setItem("cart", JSON.stringify([]));
   if (!someVar){
      setSomeVar(true)}
    else if(someVar){
      setSomeVar(false)}
}



const remove =(code) =>{

    for (let i=0; i<cartHotel.length;i++){
      if (cartHotel[i].code == code){
        const ke = cartHotel.indexOf(cartHotel[i]);
        cartHotel.splice(ke, 1);

        //update states for force refresh
        if (!someVar){
          setSomeVar(true)}
        else if(someVar){
          setSomeVar(false)}
      }
    }
    
    if (process.browser){
      localStorage.setItem("cart", JSON.stringify(cartHotel));
    }
}




const view =(code) =>{
 
  cartHotel.map((hmh)=>{
    if (hmh.code == code){
      setPrep(hmh);
      setCurrent(hmh);
      console.log(hmh);
    }
  })
}

  return (
    
    <div className="h-screen sticky top-3 " style={{ height: "500px" }}>
      
      <div className="bg-cyan-900 py-1">
        <h2 className="text-xl font-semibold ml-2 text-white ">Your cart</h2>
      </div>
     {!cartHotel.length==0?<p></p>:<p>There are no items in the cart</p>}
      <ul className="flex flex-col divide-y h-80 overflow-y-auto ">
      {(!cartHotel)? <h1>There are no items in the Cart</h1> : cartHotel.map((cart)=>
      
      

        <li  key={cart.code} 
              onClick={() =>{view(cart.code)}}
              className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <div>
            <Image
                  className="ml-3 flex-shrink-0  w-20 h-20 dark:border-transparent rounded outline-none  dark:bg-gray-500"
                  src={`http://photos.hotelbeds.com/giata/${cart.images[0].path}`}
                  alt={cart.name[0].content}
                  width="100px"
                  height="100px" />
            </div>
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-xs font-semibold leading-snug sm:pr-8">
                   {cart.name[0].content}
                  </h3>
                  <p className="text-xs dark:text-gray-400">
                    {cart.city[0].content}, <span className="italic">Country Code ({cart.countryCode})</span>
                  </p>
                  <p className="text-xs dark:text-gray-400">
                    <span>{cart.rooms.length} rooms</span> |  <span className="text-yellow-900">Ranking ({cart.ranking}) </span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold mr-2"></p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
                  onClick={event =>{remove(cart.code)}}
                  type="button"
                  className="flex items-center px-2 py-1 pl-0 space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <span>Remove</span>
                </button>
                <button
                  type="button"
                  className="flex items-center px-2 py-1 space-x-1 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                  </svg>
                  <span>Add to favorites</span>
                </button>
              </div>
            </div>
          </div>
        </li>


      )}


      </ul>
      <div className="space-y-1 text-right xs:bg-cyan-900 md:bg-gray-200">
        <p className="mr-2 text-slate-200 md:text-black">
          Cart total:
          <span className="font-semibold text-lg text-white md:text-black">
            {" "}
            {cartHotel.length}
          </span>
        </p>

      </div>
      <div className="bg-cyan-900 md:bg-gray-200">
        <div className="flex justify-end mr-2 pt-8 pb-2 space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md bg-yellow-600"
            onClick={event =>{removeAll()}}
          >
            <p className="text-white">Empty Cart</p>
          </button>
      
        </div>
      </div>
    </div>
  );
}

export default CartComp
