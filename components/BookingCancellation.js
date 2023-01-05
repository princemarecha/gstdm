import Head from 'next/head'
import React from 'react'
import CryptoJS from 'crypto-js'

const BookingCancellation = () => {

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
            
              await fetch("/hotel-api/1.0/bookings/69-43630000?cancellationFlag=SIMULATION&language=ENG", requestOptions)
               .then(response => response.json())
                .then(result => {console.log(result)})
                .catch(error => console.log('error fhdhdf', error));
                
            }}

  return (
    <div>
      <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js"></script>
      <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
      <script src="https://cdn.tailwindcss.com" async></script>
      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
      </Head>

    <form className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white p-10 rounded-xl" id='form'>
      <div className="sm:col-span-4">
        <label
          htmlFor="first-name"
          className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
          Booking Reference Number
        </label>
        <input
          name="first-name"
          className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
        />
      </div>
      <div className="sm:col-span-4">
        <label
          htmlFor="cancellation"
          className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
          Confirm Cancellation
        </label>
        <input
          name="cancellation" type= "checkbox" defaultChecked value="CANCELLATION"
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        />
      </div>

      <div className="sm:col-span-2 flex justify-between items-center">
        <button 
        onClick={e => py(e, 56)}
        className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
          Cancel
        </button>
      </div>
    </form>


  </div>
  )
}

export default BookingCancellation
