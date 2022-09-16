import React, { useState } from 'react'
import FetchingData from '../components/FetchingData'
import WithAxios from '../components/WithAxios'
import Integrate from '../components/Integrate'
import CryptoJS from 'crypto-js'
import ListingsContainer from '../components/listingscontainer'

import Head from "next/head"




export async function getStaticProps(){


  var time = (Math.round(Date.now()/1000));
let soup = `e82df103ad74310fdb6a704cf460189b02d949622b${time}`;
let b = CryptoJS.SHA256(soup);
let x_sig = b.toString(CryptoJS.enc.Hex);

//end x-sig gen

var myHeaders = new Headers();
myHeaders.append("Api-key", "e82df103ad74310fdb6a704cf460189b");
myHeaders.append("X-Signature", x_sig);
myHeaders.append("Accept", "application/json");
myHeaders.append("Accept-Encoding", "gzip");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: 'no-cors'
};





const res = await fetch("https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=false", requestOptions);
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
    </div>
  )
}

export default Nyama
