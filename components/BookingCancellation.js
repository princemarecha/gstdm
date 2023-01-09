import Head from 'next/head'
import React from 'react'
import CryptoJS from 'crypto-js'
import { useState } from 'react'
import Link from 'next/link'

const BookingCancellation = () => {

  const [cancel, setCancel] = useState([]);
  const [error, setError] = useState([]);
  const [ref, setRef] = useState();
  const [confirm, setConfirm] = useState();
  const [verify, setVerify] =useState();

  

async function py(event,ref){
    event.preventDefault();
    if (process.browser){
            let y = (new URL(window.location)).searchParams;
            let newRate = y.get("ratekey");
    
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
          
            
            var raw = ""
            
            var requestOptions = {
              method: 'DELETE',
              headers: myHeaders,
              redirect: 'follow',
              body: raw
            };
            
              await fetch("/hotel-api/1.0/bookings/"+ref+"?cancellationFlag=SIMULATION&language=ENG", requestOptions)
               .then(response => response.json())
                .then(result => {setCancel(result)})
                .catch(error => console.log('error fhdhdf', error));
                
            }}
            

async function view(event,ref){
  event.preventDefault();
  if (process.browser){
          let y = (new URL(window.location)).searchParams;
          let newRate = y.get("ratekey");
  
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
        
          
          var raw = ""
          
          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            
          };
          
            await fetch("/hotel-api/1.0/bookings/"+ref, requestOptions)
             .then(response => response.json())
              .then(result => {setVerify(result)})
              .catch(error => console.log('error fhdhdf', error));
              
          }}
        console.log(verify);
  return (
    <div>
      <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossOrigin="anonymous" referrerpolicy="no-referrer" async></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" async></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js" async></script>
      <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
      <script src="https://cdn.tailwindcss.com" async></script>
      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
      </Head>

    {cancel.error && cancel?<div className='text-center text-white bg-red-800 w-4/5 h-10 mx-auto rounded-t-md'>
      <p className='pt-1 '>{cancel.error.message}</p>
    </div>:<></>}
    {!cancel.error && cancel.length!=0?<div className='text-center text-white bg-green-800 w-4/5 h-10 mx-auto rounded-t-md'>
      <p className='pt-1 '>The cancellation has been successful</p>
    </div>:<></>}
    <form className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white p-10 rounded-xl" id='form'>
      <div className="sm:col-span-4">
        <label
          htmlFor="cancelRef"
          className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
          Booking Reference Number
        </label>
        <input
          name="cancelRef"
          onChange={e =>{
            setRef(e.target.value);
            setCancel([]);
            setConfirm("");}
          }

          className="w-full bg-gray-50 text-gray-800 font-bold border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
        />  
        <Link href="book"><button onClick={e =>{
          e.preventDefault();
          console.log("fofo");
          view(e,ref);
        }
          }><p className='italic underline text-sm my-3 text-blue-700 hover:pointer-cursor'>Verify Booking with this reference</p></button></Link></div>
    
     
      <div className="sm:col-span-4">
        <label
          htmlFor="cancellation"
          className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
          Confirm Cancellation
        </label>
        
        <input
          name="cancellation" type= "checkbox" id='cancellation' value="CANCELLATION" 
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        />
        {confirm?<p className='text-xs italic text-red-600'>{confirm}</p>:<></>}
      </div>

      <div className="sm:col-span-2 flex justify-between items-center">
        <button 
        onClick={e => {
          if (document.getElementById("cancellation").checked ==true){
              py(e, ref)
          }
          else{
            e.preventDefault();
            setConfirm("Confirm your cancellation first before you continue");
          }

        }}
        className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
          Cancel
        </button>
      </div>
      
    </form>
      {verify && !verify.error?<div className='max-w-screen-md md:w-1/2 border  mx-auto bg-white p-10 rounded-xl'>
        <p className='text-center'>BOOKING DETAILS</p>
        <hr/>
      <p className='italic py-2 flex justify-between  '>Date Created: <span className='font-bold '>{verify.booking.creationDate}</span></p>
        <hr/><p id='book' className='flex justify-end'>Ref <span className='font-bold mx-1 mb-3'>{ref}</span></p>
        <hr/>
        <p className='flex justify-between'>Holder&apos;s Name: <span className='font-bold '>{verify.booking.holder.name}</span></p>
        <p className='flex justify-between'>Holder&apos;s Surname: <span className='font-bold'>{verify.booking.holder.surname}</span></p>
        <p className='flex justify-between'>From - <span className='font-bold'>{verify.booking.hotel.checkIn}</span> To <span className='font-bold'>{verify.booking.hotel.checkOut}</span></p>
        <hr/>
        <p className='flex justify-between mt-3'>Adults: <span className='font-bold'>{verify.booking.hotel.rooms[0].rates[0].adults}</span></p>
        <p className='flex justify-between'>Children: <span className='font-bold'>{verify.booking.hotel.rooms[0].rates[0].children}</span></p>
        <p className='flex justify-between'>Rooms: <span className='font-bold'>{verify.booking.hotel.rooms[0].rates[0].rooms}</span></p>
        <hr/>
        <br/>
        <hr/>
        <hr/>
        <p>Net Amount: <span className='font-bold'>({verify.booking.hotel.currency}){verify.booking.totalNet}</span></p>
        <hr/>
        <br/>
        <p className='flex justify-center'>Hotel: <span className='font-bold'>{verify.booking.hotel.name}</span></p>
        <p className='flex justify-center'>Destination: <span className='font-bold'>{verify.booking.hotel.destinationName}</span></p>
      </div>
:<></>}
{verify &&verify.error?<div className='max-w-screen-md text-red-600 underline mx-auto'><p>{verify.error.message}<span className='font-bold'>{ref}</span></p></div>:<></>}
  </div>
  )
}

export default BookingCancellation
