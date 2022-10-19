import React from "react";
import CryptoJS from "crypto-js";
import { Axios } from "axios";

const CheckAvailability = () => {

  return (
    <div>
      <form id="form">
        <div className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white p-10 rounded-xl">

        <div className="sm:col-span-2">
          <label
            htmlFor="fromDate"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            From
          </label>
          <input
            name="fromDate"
            type="date"
            id="fromDate"
            className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="toDate"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            To
          </label>
          <input
            name="toDate"
            type="date"
            id="toDate"
            className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>
     <div className="grid grid-cols-3 gap-2 col-span-full" id="searchMult">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="rooms"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Rooms
            </label>
            
            <input
            type="number"
            id="rooms"
            name="rooms"
            max="10"
            min="1"></input>
          </div>
        </div>
   
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label
                htmlFor="adults"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Adults
              </label>
              <input
            type="number"
            id="adults"
            name="adults"
            max="10"
            min="1"></input>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label
                htmlFor="children"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Children
              </label>
              <input
            type="number"
            id="children"
            name="children"
            max="10"
            min="1"></input>
            </div>
          </div>

          </div>
          <div className="col-span-full flex justify-between items-center">
            <button className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3" type="submit">
              Check
            </button>
          </div>
</div>
      </form>
      
    </div>
  );
};

export default CheckAvailability;

if(process.browser) {
  const form = document.getElementById('form');



}

export async function getServerSideProps(context){
    
  var time = (Math.round(Date.now()/1000));
  let soup = `e82df103ad74310fdb6a704cf460189b02d949622b${time}`;
  let b = CryptoJS.SHA256(soup);
  let x_sig = b.toString(CryptoJS.enc.Hex);
  
  //end x-sig gen

  //postman code
  
  var myHeaders = new Headers();
  myHeaders.append("Api-key", "e82df103ad74310fdb6a704cf460189b");
  myHeaders.append("X-Signature", x_sig);
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Accept-Encoding", "gzip");
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "stay": {
      "checkIn": fromDate,
      "checkOut": toDate
    },
    "occupancies": [
      {
        "rooms": rooms,
        "adults": adults,
        "children": children
      }
    ],
    "hotels": {
      "hotel": [
        1
      ]
    }
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://api.test.hotelbeds.com/hotel-api/1.0/hotels", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


    //end of postman code

    //beginning of other page code
  
    //const code = context.params.code;
    //const res = await fetch(`https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/${code}/details?language=ENG&useSecondaryLanguage=False`, requestOptions);
    //const data = await res.json();
        // .then((response) => response.json())
        // .then(result => setData(result))
        // .catch(error => console.log('error', error));
  
      return{
        props:{
          status:data
        }
      }
  }




