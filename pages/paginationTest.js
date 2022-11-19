/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect, useState } from 'react'
import FetchingData from '../components/FetchingData'
import WithAxios from '../components/WithAxios'
import Integrate from '../components/Integrate'
import CryptoJS from 'crypto-js'
import ListingsContainer from '../components/listingscontainer'
import data from '../utils/data'

import Head from "next/head"
import Pagination from '../components/Pagination'
import { hotelData } from '../Helper/Context'



const PaginationTest = () => {

const [status, setStatus] = useState([]);

  useEffect(()=>{
    allData();
},[])

  const allData = async ()=>{
    let inDevEnvironment = "https://google.com";

  if (process && process.env.NODE_ENV === 'development') {
        inDevEnvironment = "http://localhost:3000";
        console.log(inDevEnvironment);
    }
  else {
    inDevEnvironment = "https://google.com";
  }

  const res = await fetch(`${inDevEnvironment}/api/hotels`);
  const data = await res.json();
  setStatus(data);
  }


  return (
    <div>
    <div>
        <Head>
          <link rel="stylesheet" href="http://fonts.cdnfonts.com/css/roboto" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
          {/*<link rel="stylesheet" href="../../styles/globals.css"/>*/}
          <script src="https://cdn.tailwindcss.com" async></script>
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
        </Head>
      
    </div>
    {status.length!=0?<div>
      {console.log(status)}

      <hotelData.Provider value={{status, setStatus}}>
        <Integrate />
        <ListingsContainer/> 
     </hotelData.Provider>
    </div>:<div></div>}
   
      <Pagination />
    </div>
    
  )
}

export default PaginationTest
