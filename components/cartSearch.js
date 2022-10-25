import React, { useState } from "react";
import CryptoJS from "crypto-js";


const CheckAvailability = () => {

  const [start, setStart] = useState([]);
  const [stop, setStop] = useState([]);
  const [live, setLive] = useState([]);
  const [grown, setGrown] = useState([]);
  const [small, setSmall] = useState([]);


  const [lovely, setLovely] = useState([]);

  async function py(){

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
          "checkIn": start,
          "checkOut": stop
        },
        "occupancies": [
          {
            "rooms": 1,
            "adults": 2,
            "children": 0
          },  
          {
            "rooms": live,
            "adults": grown,
            "children": small,
            "paxes": [
              {
                "type": "CH",
                "age": 5
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
        setLovely(data.hotels.total);
        return{
            props:{
              status:data
            }
          }
    }


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
            onChange={event => setStart(event.target.value)}
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
            onChange={event => setStop(event.target.value)}
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
            min="1" 
            onChange={event => setLive(event.target.value)}
            className="border border-gray-500 ml-2"></input>
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
            min="1" 
            onChange={event => setGrown(event.target.value)}
            className="border border-gray-500 ml-2"></input>
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
            min="1" 
            onChange={event => setSmall(event.target.value)}
            className="border border-gray-500 ml-2"></input>
            </div>
          </div>

          </div>
</div>
      </form>
      
 <button className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mt-5" onClick={py}>
              Check Query Results
            </button>
      <div>Number of Rooms available: {lovely}</div>
      
    </div>
  );
};

export default CheckAvailability;
