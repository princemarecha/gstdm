/* eslint-disable @next/next/no-page-custom-font */
import React, { useState } from 'react'
import FetchingData from '../components/FetchingData'
import WithAxios from '../components/WithAxios'
import Integrate from '../components/Integrate'
import CryptoJS from 'crypto-js'
import ListingsContainer from '../components/listingscontainer'
import data from '../utils/data'

import Head from "next/head"
import Pagination from '../components/Pagination'




export async function getStaticProps(){


  const res = await fetch("http://localhost:3000/api/hotels");
  const data = await res.json();
      // .then((response) => response.json())
      // .then(result => setData(result))
      // .catch(error => console.log('error', error));

    return{
      props:{
        status:data
      }
    }
}

const Nyama = ({status}) => {
  console.log(status);
  if (process.browser){
    //localStorage.setItem("hotData2", JSON.stringify(status));
    //console.log(JSON.parse(localStorage.getItem("hotData")));
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


     {/*<Integrate status = {status}/>*/}
     <ListingsContainer status={status} />

      <Pagination />
    </div>
    
  )
}

export default Nyama
