import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import { useState } from 'react';



//start x-sig gen

var time = (Math.round(Date.now()/1000));
let soup = `e82df103ad74310fdb6a704cf460189b02d949622b${time}`;
let b = CryptoJS.SHA256(soup);
let x_sig = b.toString(CryptoJS.enc.Hex);

//end x-sig gen

var myHeaders = new Headers();
myHeaders.append("Api-key", "e82df103ad74310fdb6a704cf460189b");
myHeaders.append("X-Signature", x_sig);
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Encoding", "gzip");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: 'no-cors'
};
/*
let a = fetch("https://mysafeinfo.com/api/data?list=englishmonarchs&format=json")
.then(response => response.text())
.then(result => console.log(result)})
.catch(error => console.log('error', error));*/


function Integrate() {
  
    const [data, setData] = useState([]);

    const fetchData = async () => {
    var response = await fetch("https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=false", requestOptions)
    var stuff1 = await response.json()
    var stuff = JSON.stringify(stuff1)
    setData(stuff)
    }

    return (
      <div>
      <button className='p-5 bg-slate-400 m-10 border-2 border-slate-900' onClick={fetchData}>Click me!</button>
     {/* <div>
        {data.map((dataPoint) => {
          return (
            <div key={dataPoint.hotels}>
              <p>Name: {dataPoint.code}</p>
              <br/>
            </div>
          )
        })}
      </div>*/}
      {typeOf(data)}
      </div>
    )
    
};
export default Integrate;