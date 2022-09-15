import { useState, useEffect } from "react"
//import axios from 'axios'
import CryptoJS from 'crypto-js'


const WithAxios = () => {

//start x-sig gen
const [data, setData] = useState([]);


var time = (Math.round(Date.now()/1000));
let soup = `e82df103ad74310fdb6a704cf460189b02d949622b${time}`;
let b = CryptoJS.SHA256(soup);
let x_sig = b.toString(CryptoJS.enc.Hex);

//end x-sig gen

var myHeaders = new Headers();

myHeaders.append();
myHeaders.append();
myHeaders.append();
myHeaders.append();

var headers = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: 'no-cors',
  "Api-key": "e82df103ad74310fdb6a704cf460189b",
  "X-Signature": x_sig,
  Accept: "application/json",
  "Accept-Encoding": "gzip",
  "Access-Control-Allow-Origin": true,
};

useEffect(()=>{
    axios.get('https://api.test.hotelbeds.com/hotel-api/1.0/status', headers)
    .then(res => console.log(res.data)).catch(err => console.log(err))
},[])

  return (
    <div>
      
    </div>
  )
}

export default WithAxios
