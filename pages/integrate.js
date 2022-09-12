import React, { Component } from 'react';
import CryptoJS from 'crypto-js'

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

let a = fetch("https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=1&to=100&useSecondaryLanguage=false", requestOptions)
  .then(response => {
    return response.json()})
  .then(result => {

      console.log(result.total);

  })
  .catch(error => console.log('error', error));


 

  class Integrate extends Component {
    render() {
        return (
            <div>
               
            </div>
        );
    };
};
export default Integrate;