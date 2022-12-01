import React, { Component, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import {
  faCalendar,
  faCalendarDays,
  faCity,
  faHotel,
  faHouse,
  faLocation,
  faPeopleRoof,
  faPlane,
  faPlaneArrival,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import CartComp from "../components/CartComp";
import NextLink from "next/link";
import Passenger from "../components/Passenger";
import Head from "next/head";
import Payment from "../components/Payment";
import CryptoJS from "crypto-js";
import Tab from "../components/tab-3";
import { cartContext, cartNum, RateURL } from "../Helper/Context";
import { useContext } from "react";
import Link from "next/link"
import Stepper from "../components/Stepper";
import { NextOO, hotelContext } from "../Helper/Context";



const Cart = (status) => {

  const [current, setCurrent] = useState([]);
  const [nextCon, setNextCon] = useState(false);
  const [rateU, setRateU] = useState("sadza szadasdasldjl");
  const [hoteCode, setHoteCode] = useState(1533);
  const [cartNumber, setCartNumber] = useState([]);

  const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    const thisCartHotel =[]
    if (process.browser){
      thisCartHotel = JSON.parse(localStorage.getItem("cart"));
    }

    return (
      <hotelContext.Provider value={{hoteCode, setHoteCode}}>
          <cartContext.Provider value={{current, setCurrent}}>
          {<div className="m-2">
            <Head>
              <title>Cart</title>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
              />
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
              />
              <script async src="https://cdn.tailwindcss.com"></script>
              
            </Head>
              <cartNum.Provider value={{cartNumber, setCartNumber}}>
            <div className="sticky top-0 z-10">
            <Header/>
            </div>
              </cartNum.Provider>
            <div className="grid grid-cols-12 mt-5 ">
              <div className="xs:col-span-12 md:col-span-9 ">
                <header className="bg-gray-50">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 shadow-xl">
                    <div className="sm:justify-between sm:items-center sm:flex ">
                    <div className=" md:hidden lg:pb-40 border-y-2 border-dashed mt-10">
                    <CartComp thisCartHotel = {thisCartHotel}/>
                  </div>
                      <div className="text-center sm:text-left flex ">
                        {current.code !=hoteCode? setHoteCode(current.code):""}
                        {current.length!=0?<div className="pr-4">
                          <Image
                            src={`http://photos.hotelbeds.com/giata/${current.images[0].path}`}
                            alt="Picture of the author"
                            width="200px"
                            height="150px"
                            className="rounded"
                          />
                        </div>: <div></div>}
                        
                        {current.length!=0?<div>
                          <h1 >
                            <FontAwesomeIcon icon={faHotel} className="text-yellow-900 mr-5" />
                           <span className="text-2xl md:text-1xl font-bold text-yellow-900 light:text-green-200  pt-1 md:pt-3 nameStyle">{current.name[0].content}</span> 
                          </h1>
                          <div className="pb-1 md:pb-0 mb-6"></div>
                          <p className="pb-1 text-xs sm:text-sm font-bold">
                            <FontAwesomeIcon icon={faPlaneArrival} className="mr-2 text-yellow-700 mr-5 " />
                            <span className="font-bold text-yellow-700">{current.address[0].content}</span>
                          </p>
                          <p className="pb-1 text-xs sm:text-sm ">
                            <FontAwesomeIcon icon={faCity} className="mr-2 text-slate-700 mr-5" />
                            {current.city[0].content} <span className="font-bold text-yellow-700">(City)</span>, County Code <span className="font-bold text-yellow-700">({current.countryCode})</span>
                          </p>
                          <p className="pb-1 text-xs sm:text-sm">
                            <FontAwesomeIcon icon={faRankingStar} className="mr-2 text-yellow-700 mr-5 text-center font-bold" />
                           <span >Hotel Ranking <span className="font-bold text-yellow-700">({current.ranking})</span></span> 
                          </p>
                          <p className="pb-2 text-xs sm:text-sm">
                            <FontAwesomeIcon icon={faPeopleRoof} className="mr-2 text-gray-700 mr-5 text-center font-bold" />
                           <span >Rooms Available <span className="font-bold text-yellow-700">({current.rooms.length})</span></span> 
                          </p>
                        </div>:<div>Click hotel in cart to view</div>}
                      </div>

                      <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">
                    <Link
                      href={(`/hotel/${current.code}`)}>
                        <button
                          className="inline-flex items-center justify-center px-5 py-3 text-gray-500 transition bg-white border border-gray-200 rounded-lg hover:text-gray-700 focus:outline-none focus:ring"
                          type="button"
                        >
                          <span className="text-sm font-medium"> View Hotel </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 ml-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            //stroke-width="2"
                          >
                            <path
                              //stroke-linecap="round"
                              //stroke-linejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </button>
                    </Link>
                        <button
                          className="block px-5 py-3 text-sm font-medium text-white transition bg-red-600 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring"
                          type="button"
                        >
                          Delete Product
                        </button>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="border-b"></div>
                {current.length!=0?<div className="pt-6 pl-3">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-extrabold text-yellow-900 "
                  >
                    Remarks{" "}
                  </label>

                  {<p className="text-sm mr-5 nameStyle font-semibold text-yellow-900">
                  {current.description[0].content}
                  </p>}
                </div>:<div></div>}
                <br></br>
                  <div>

                  <br></br>



                  <br></br>
                  <div className="border-b"></div>
                  <br></br>
                  <NextOO.Provider value = {{nextCon, setNextCon}}>
                    <RateURL.Provider value={{rateU, setRateU}} >
                  {current.length!=0?<div id="stepper_div"><Stepper/></div>:<div></div>}
                  {current.length!=0?
                  <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <label
                      htmlFor="message"
                      className="block mb-2  font-medium text-gray-900 dark:text-gray-400 pb-2 italic"
                    > 
                      Cancellation Fees
                    </label>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-10 sm:gap-y-12 lg:divide-x">
                      <div className="flex flex-col items-left gap-4 md:gap-6 sm:px-4 lg:px-8">
                        <div className="text-gray-600 text-left italic">
                          “Different cancellation dates generate different fees. Please refer to the terms and conditions at the bottom of the page.”
                        </div>
                      </div>

                      <div className="flex flex-col items-left gap-4 md:gap-6 sm:px-4 lg:px-8">
                        <div className="text-gray-600 text-left italic">
                          Date and time are calculated based on local time in the
                          destination.In case of no-show, different fees will
                          apply.Please refer to our T&C.
                        </div>
                      </div>
                      <div />
                    </div>

                    <div className="border-b"></div>
                  

          


                  </div>:<div></div>}
                  </RateURL.Provider>
                  </NextOO.Provider>
                  <br></br>
                  
                </div>
              </div>

              <div className="md:col-span-3 xs:hidden md:block lg:pb-40">
                <CartComp />
              </div>

              <br></br>
              <br></br>
            </div> 
            
            <div></div>

            <Footer />
            <script
              async
              src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
            ></script>
            
                  

          </div>}
          </cartContext.Provider>
      </hotelContext.Provider>
      
    );
}
export default Cart;


// export async function getServerSideProps(context){
    
//   var time = (Math.round(Date.now()/1000));
//   let soup = `e82df103ad74310fdb6a704cf460189b02d949622b${time}`;
//   let b = CryptoJS.SHA256(soup);
//   let x_sig = b.toString(CryptoJS.enc.Hex);
  
//   //end x-sig gen
  
//   var myHeaders = new Headers();
//   myHeaders.append("Api-key", "e82df103ad74310fdb6a704cf460189b");
//   myHeaders.append("X-Signature", x_sig);
//   myHeaders.append("Accept", "application/json");
//   myHeaders.append("Accept-Encoding", "gzip");
  
//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow',
//     mode: 'no-cors'
//   };
  
//     const code = context.params.code;
//     const res = await fetch(`https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/${code}/details?language=ENG&useSecondaryLanguage=False`, requestOptions);
//     const data = await res.json();
//         // .then((response) => response.json())
//         // .then(result => setData(result))
//         // .catch(error => console.log('error', error));
  
//       return{
//         props:{
//           status:data
//         }
//       }
//   }
  
