import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { hotelContext, NextOO, RateURL } from "../Helper/Context";
import { useContext } from "react";
import childrenCustom from "../scripts/children"
import ErrorModal from "./ErrorModal";
import { errorState } from "../Helper/Context";



const CheckAvailability = () => {

  const [start, setStart] = useState([]);
  const [stop, setStop] = useState([]);
  const [live, setLive] = useState(1);
  const [grown, setGrown] = useState(1);
  const [small, setSmall] = useState(0);
  const [childAge, setChildAge]  = useState([]);


  const [lovely, setLovely] = useState([]);
  const [roomss, setRooms] = useState([]);
  const [errorr, setError] = useState();
  const [rateKey, setKey] =useState([]);

  const {nextCon, setNextCon} = useContext(NextOO);
  const {rateU, setRateU} = useContext(RateURL);
  const {hoteCode, setHoteCode} = useContext(hotelContext);

  console.log(hoteCode); 

  //var btn = document.getElementById("myBtn");

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
            "paxes": childAge
          }
        ],
        "hotels": {
          "hotel": [
           //hoteCode
            1533 
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

        console.log(data);

       try {
        setLovely(data.hotels.hotels[0].rooms[0].rates.length);
        setRooms(data.hotels.hotels[0].rooms[0].rates);
        setError("");
    
      }
       catch(ex){
        data.error?setError(data.error.message):setError(data.hotels.total + " available rates");
        setRooms("");
        setLovely("");
      }

        return{
            props:{
              status:data
            }
          }
    }

  function feedChild(){
    var temp2 = [];
    if (document.getElementById('childDiv')) 
    {
      
      var b = document.getElementById('childDiv').getElementsByTagName('input')
      for (var i = 0;i<b.length;i++){
        //console.log(b[i].value);

        var data = {
          "type": "CH",
          "age": b[i].value 
        }

        var temp = childAge;
        temp2 = [...temp2, data];
        
        setChildAge(temp2);
        
      }
      setChildAge(temp2);
      console.log(childAge);
      
    }
  }

  return (
    <div>
      
      <form id="form">
        <div className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white md:p-10 rounded-xl" id="allOptions">

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
            onChange={(event) => {
             if (errorr){ if (errorr.length !=0){setError(null)}}
              setStart(event.target.value)}}
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
            onChange={(event) => {
              if (errorr){ if (errorr.length !=0){setError(null)}}
              setStop(event.target.value)}}
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
            defaultValue="1"
            onKeyDown={event => event.preventDefault()} 
            onChange={event => {
              document.getElementById("adults").value = parseInt(live)+1;
              setLive(event.target.value);
              if (errorr){ if (errorr.length !=0){setError(null)}}
            }}
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
            max= "10"
            min= {live} 
            defaultValue={live}
            onChange={(event) => {
              setGrown(event.target.value);
              if (errorr){ if (errorr.length !=0){setError(null)}}
            }}
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
            min="0"
            defaultValue="0" 
            onChange={(event) => {
              setSmall(event.target.value);
              if (errorr){ if (errorr.length !=0){setError(null)}}
              var num = parseInt(event.target.value);

              childrenCustom(num)

            }}
            className="border border-gray-500 ml-2"></input>
            </div>
          </div>

          </div>
        
</div>
<errorState.Provider value={{errorr, setError}}><p><span className="text-red-600">{errorr?<p><ErrorModal/></p>:""}</span><span className="text-red-400 italic"> </span></p></errorState.Provider>

      </form>
      
 <button 
        onFocus={()=>{
          feedChild();
          if (errorr!=null){setError(null)};
        }}
        onMouseOver ={()=>{
          feedChild();
          if (errorr!=null){setError(null)};
        }}
        className="inline-block bg-cyan-500 hover:bg-cyan-700 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mt-5" onClick={py}>
              Check Availability
            </button>
          
      <div className="py-5 px-8 font-semibold text-gray-600">
        <hr className="my-5"/>
        <div className="justify-end flex">
          {lovely.length !=0?<div><span className="text-2xl md:text-6xl">( {lovely} )</span><span className="ml-4 italic  text-md md:text-lg">Available Rates</span></div>:""}</div>
        <hr className="my-5"/>
        
         </div>
      
      <div>
        {rateKey.length==0?"":setNextCon(true)}
      {roomss? roomss.map((rate)=>
            
          <div key={rate.rateKey} className="my-4 grid grid-cols-9 shadow-xl rounded-xl  font-sans text-white">
            
        <div className="col-span-2 ml-2 grid grid-rows-4 bg-sky-700 rounded-tl-lg rounded-bl-lg"> 
            <div className="pl-3 pt-2 row-span-1 bg-cyan-700 rounded-tl-lg"><p className="font-semibold">Board Code/Name</p></div>
            <div className="row-span-3 my-auto rounded-bl-lg"><p className="text-center font-bold">{rate.boardCode}/{rate.boardName}</p></div>
            
        </div>
        <div className="col-span-3 grid grid-rows-4 bg-sky-600">
        <div className="row-span-1  bg-cyan-700 pl-2 pt-2"><p className="font-semibold">Cancellation Policy</p></div>
        <div className="pl-2 row-span-3"><p>Amount ({rate.taxes.taxes[0].currency}) <span className="font-semibold">{rate.cancellationPolicies[0].amount}</span> </p>
              <p >from <span className="font-semibold"> {rate.cancellationPolicies[0].from}</span></p>
        </div>
        </div>
        <div className="col-span-2 grid grid-rows-4  ">
        <div className="row-span-1   bg-cyan-700 pt-2">
          <p className="font-semibold">Specifications</p>
        </div>
           <div className="row-span-3 bg-sky-600">
           <p><span className="font-semibold">({rate.adults})</span> Adults</p>
           <p><span className="font-semibold">({rate.children})</span> Children</p>
           <p><span className="font-semibold">({rate.rooms})</span> Available room/s</p>
        </div>
        </div>
        <div className="col-span-2  mr-2 text-white">
        <div className="py-2 bg-blue-600 text-center "><p className="text-2xl font-extrabold">{rate.net} </p><p>({rate.taxes.taxes[0].currency})</p></div>
        <div className="bg-blue-500 text-center  italic"><p className="text-sm">{rate.taxes.taxes[0].amount} ({rate.taxes.taxes[0].currency}) <span>Applicable Tax({rate.taxes.taxes[0].included ?"Included" : "Excluded"})</span></p> </div>
        <div className={rateKey ==rate.rateKey?"p-2 text-center font-bold bg-yellow-600":"p-2 text-center font-bold bg-green-600"}>
          {rate.rateType =="BOOKABLE"? 
            <button onClick={(e)=>{
            e.preventDefault();
            setKey(rate.rateKey);
            setRateU(rate.rateKey);
            console.log(rate);
            localStorage.setItem("adult", rate.adults);
            localStorage.setItem("child", rate.children);
            localStorage.setItem("rooms", rate.rooms);
            }}>{rateKey != rate.rateKey? <span>BOOK NOW</span>:<span>SELECTED</span>}</button>:
            <p>{rateKey != rate.rateKey?<span>CAN&apos;T BOOK</span>:<span>SELECTED</span>}</p>}</div>
        </div>
      </div>
      ): ""}
      
    </div>
        
      
    </div>
  );
};

export default CheckAvailability;





