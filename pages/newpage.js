import React from 'react'
import CryptoJS from 'crypto-js'
import { data } from 'autoprefixer'

const newpage = (status) => 
{

//console.log(status);


  return (
    <div>
    <button onClick={function(event){ py(); seeMe()}} className="bg-cyan-600 ml-10 mt-10 p-5">
        Click Me!
    </button>
    <button onClick={seeMe} className="bg-cyan-600 ml-10 mt-10 p-5">
        Click Me Again!
    </button>
    </div>
  )
}

export default newpage

export async function py(context){

var time = (Math.round(Date.now()/1000));
let soup = `e82df103ad74310fdb6a704cf460189b02d949622b${time}`;
let b = CryptoJS.SHA256(soup);
let x_sig = b.toString(CryptoJS.enc.Hex);

//end x-sig gen

var myHeaders = new Headers();
myHeaders.append("Api-key", "e82df103ad74310fdb6a704cf460189b");
myHeaders.append("X-Signature", x_sig);
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("Accept", "application/json");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "stay": {
      "checkIn": "2023-10-10",
      "checkOut": "2023-10-30"
    },
    "occupancies": [
      {
        "rooms": 1,
        "adults": 1,
        "children": 2,
        "paxes": [
          {
            "type": "CH",
            "age": 5
          },
          {
            "type": "CH",
            "age": 6
          }
        ]
      }
    ],
    "hotels": {
      "hotel": [
        1533,
        1803,
        2587,
        3219,
        6930,
        69995,
        586091,
        586234
      ]
    }
  });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
  body: raw
};

    const res = await fetch('/hotel-api/1.0/hotels', requestOptions);
    const data = await res.json();
        // .then((response) => response.json())
        // .then(result => setData(result))
        // .catch(error => console.log('error', error));
  
    console.log(data);
    return{
        props:{
          status:data
        }
      }
}

function seeMe() {
    console.log(data.hotels)
}
