import React, { Component, useState } from 'react';
import Head from 'next/head';
import Footer from './../components/footer';
import Header from './../components/header';
import Search from './../components/search';
import Listings from './../components/listings';
import { hotelContext } from '../Helper/Context';
import { searchContext } from '../Helper/Context';
import { cartNum } from '../Helper/Context';



const Index = () => {
  
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
  }

  const search = async (num)=>{

  const temp = num;
  const data = await fetch(`http://localhost:3000/api/search?name=${temp}`);
  const res = await data.json();
  console.log(res);
}

  const [working, setWorking] =useState([]);
  const [results, setResults] = useState([]);
  const [cartNumber, setCartNumber] = useState([]);
  return (

    <hotelContext.Provider value={{working, setWorking}}>
     <cartNum.Provider value={{cartNumber, setCartNumber}}>
    <Head>
          <title>GSTDM | Home</title>
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
          <script src="https://cdn.tailwindcss.com" async></script>
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
          
      </Head>
      
    <div className="sticky top-0">
            <Header/>   
    </div>
    <Search/>
<Listings/>

<div>
    <Footer/>
    </div>
    <script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js" async></script>
      </cartNum.Provider>
    </hotelContext.Provider>
  )
}

export default Index
