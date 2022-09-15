import React, { Component } from 'react';
import CryptoJS from 'crypto-js'
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





const Componentt = () => {

  const [V, setV] = useState([]);

  return (
    <div><div>{ fetch("https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=1&to=2&useSecondaryLanguage=false", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => setV(error))}
    </div>
    <div>
      {console.log(V)};
    </div>
    </div>
  )
}

export default Componentt