import React, { useState } from 'react'
import FetchingData from '../components/FetchingData'
import WithAxios from '../components/WithAxios'
import Integrate from './integrate'
import CryptoJS from 'crypto-js'

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





const res = await fetch("https://api.test.hotelbeds.com/hotel-api/1.0/status", requestOptions);
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
     <Integrate status = {status}/>
    </div>
  )
}

export default Nyama
