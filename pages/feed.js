import axios from 'axios';
import React from 'react';
import Componentt from '../components/Componentt';
import bulkData from '../utils/bulkData';
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


  const res = await fetch("https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=2001&to=2010&useSecondaryLanguage=false", requestOptions);
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

const feed = ({status}) => {

function porri (){
for (let i=0; i < status.hotels.length; i++)
  {

        if (process.browser){

          
          //console.log(hichi.hotels);
          axios.post("http://localhost:3000/api/test/add",status.hotels[i]).then(response => {
          
            console.log(response);
          
              console.log("takaenda");
          } 
          ).catch(error =>{console.log(error)});
            }
       
  }
}
  return (
    <div>
        <button onClick={porri}>Ototot</button>
    </div>
  )
}

export default feed