import React, { Component } from 'react';
import ListingsContainer from '../components/listingscontainer';
import CryptoJS from 'crypto-js';

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
myHeaders.append("Content-Type", "application/json");


var raw = JSON.stringify({
    "stay": {
      "checkIn": "2023-06-15",
      "checkOut": "2023-06-16"
    },
    "occupancies": [
      {
        "rooms": 1,
        "adults": 2,
        "children": 0
      }
    ],
    "hotels": {
      "hotel": [
        77,
        168,
        264,
        265,
        297,
        311
      ]
    }
  });
  
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  
  
  
  
  const res = await fetch("https://api.test.hotelbeds.com/hotel-api/1.0/hotels", requestOptions);
  const data = await res.json();
     
  
    return{
      props:{
        status:data
      }
    }
  }




  const Post = ({status}) => {
  
    return (
      <div>
       <ListingsContainer status={status} />
      </div>
    )
  }
  
  export default Post;