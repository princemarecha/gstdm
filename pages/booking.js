import React, { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'
import Passenger from '../components/Passenger';
import Payment from '../components/Payment';
import Link from 'next/link';
import Head from 'next/head';
import { NextOO } from '../Helper/Context';
import { useContext } from 'react';
import adultBooking from "../scripts/adultBooking";
import childrenBooking from "../scripts/childrenB";
import Checkboxes from '../components/Checkboxes';
import { checkBoxContext } from '../Helper/Context';
import ErrorModal from '../components/ErrorModal';
import { errorState } from '../Helper/Context';
import { image64 } from '../utils/image';

const Booking = () => {

useEffect(()=>{
  if(process.browser) {
    if (!(document.getElementById("divStart"))) {
    var temp = localStorage.getItem("adult");
    var temp2 = localStorage.getItem("child");
    setChildTemp(temp2);
    var rooms = localStorage.getItem("rooms");
     adultBooking(parseInt(temp), parseInt(rooms));
     childrenBooking(parseInt(temp2), parseInt(rooms));
   }
 }
},[])

    const [childTemp, setChildTemp] = useState([]);
    const [surname, setSurname] = useState([]);
    const [name, setName] = useState([]);
    const [asurname, setASurname] = useState([]);
    const [aname, setAName] = useState([]);
    const [remarkCH, setRemarkCH] = useState([]);
    const [str, setStr] = useState();
    const [errorr,setError] = useState();

    const [sasurname, setSASurname] = useState([]);
    const [saname, setSAName] = useState([]);

    const [remarks, setRemarks] = useState([]);

    const [result, setResult] = useState([]);
    const [rateRes, setRateRes] = useState([]);

    const [valid, setValid] = useState(true);

    const [btnClicked, setbtnClicked] = useState(false);

    const [childAge, setChildAge]  = useState([]);

    const [adultAge, setAdultAge]  = useState([]);

    const [amalgamated, setAmalgamated]  = useState([]);

    async function py(){
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
        
        var raw = JSON.stringify({
          "holder": {
            "name": name,
            "surname": surname
          },
          "rooms": [
            {
              "rateKey": newRate,
              "paxes": amalgamated
            }
          ],
          "clientReference": "IntegrationAgency",
          "remark": remarks,
          "tolerance": 2
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow',
          body: raw
        };
        
          await fetch("/hotel-api/1.0/bookings", requestOptions)
           .then(response => response.json())
            .then(result => {setResult(result)})
            .catch(error => console.log('error', error));
            
        }}
        console.log(result);

function delayNav(){
  window.location.href='../reciept';
} 

if (result.booking ){
    scroll();
}

function scroll(){
  
  console.log("we are here");
  document.body.style.overflow = "hidden";
  
  try{
    setTimeout(document.getElementById("start").scrollIntoView(),20000);
  }
  catch{
    var btn = document.getElementById("bookButton");

    if (!btnClicked)
      {
        btn.click();
        setbtnClicked(true);
      }
  }
}

function yesscroll(){
  document.body.style.overflow = "visible";
}
       
async function oppo (){
  if (process.browser){
           let y = (new URL(window.location)).searchParams;
           let newRate = y.get("ratekey");
           console.log(newRate);

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
            "rooms": [
              {
                "rateKey": newRate
              }
            ]                     
           });
           
           var requestOptions = {
             method: 'POST',
             headers: myHeaders,
             redirect: 'follow',
             body: raw
           };
           
             await fetch("/hotel-api/1.0/checkrates", requestOptions)
              .then(response => response.json())
               .then(result => setRateRes(result))
               .catch(error => console.log('error', error));
              
          }

}

if (rateRes.length == 0){
  oppo();
}



function feedAdult(){
  var temp2 = [];
  if (document.getElementById('adults')) 
  {
    var index = 0;
    var b = document.getElementById('adults').getElementsByTagName('input')
    for (var i = 0;i<b.length/3;i++){
      //console.log(b[i].value);
      
      var data = { 
          "roomId": parseInt(b[index+2].value),
          "type": "AD",
          "name": b[index].value,
          "surname": b[index+1].value
        
      }
      index = index+3;
      var temp = adultAge;
      temp2 = [...temp2, data];
      
      console.log(temp2);
      
    }
    setAdultAge(temp2);
    console.log(adultAge);
  }
}

function feedChild(){
  var temp2 = [];
  if (document.getElementById('children')) 
  {
    var index = 0;
    var b = document.getElementById('children').getElementsByTagName('input')
    for (var i = 0;i<b.length/3;i++){
      //console.log(b[i].value);
      
      var data = { 
          "roomId": parseInt(b[index+2].value),
          "type": "CH",
          "name": b[index].value,
          "surname": b[index+1].value
        
      }
      index = index+3;
      var temp = childAge;
      temp2 = [...temp2, data];
      
      console.log(temp2);
      
    }
    setChildAge(temp2);
    console.log(childAge);
  }
}

function amalgamate(){


  var c = [...adultAge, ...childAge];

  setAmalgamated(c);
  console.log(c);
}

function errorHndler(){
  result.error? setError(result.error.message == "Insufficient allotment"?"The booking you requested is no longer available, please try another booking":result.error.message):"";
  console.log("done")
}

function print(e){
  e.preventDefault();
  try{
    
  let today = new Date().toISOString().slice(0, 10)

  let times = new Date().toLocaleTimeString()

  // console.log(times);

  // var element = document.getElementById('form');

  // var opt = {
  //   margin:       1,
  //   filename:     `voucher(${today} ${times}).pdf`,
  //   image:        { type: 'jpeg', quality: 0.98 },
  //   html2canvas:  { scale: 2 },
  //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  // };

  // html2pdf().set(opt).from(element).save();

  const doc = new jsPDF("l","in","a4");
  const para  = document.getElementById("para")
  const provider  = document.getElementById("provider")
  const ref  = document.getElementById("ref")
  const location = document.getElementById("loc")
  const services = document.getElementById("services")
  const meal = document.getElementById("meal")
  const remark = document.getElementById("remarkk")
  const notes = document.getElementById("notes")

  
  
  doc.addImage(image64, 'PNG', 0.7,1,2,2);

  doc.setDrawColor('black');
  doc.setLineWidth(1/72);
  doc.line(0.5,0.5,0.5,7.75); //H:8.25 W:11.75
  doc.line(11.25,0.5,11.25,7.75);

  doc.line(0.5,0.5,11.25,0.5); //up
  doc.line(0.5,7.75,11.25,7.75); //up
  
  doc.setFontSize(10);
  doc.text(para.innerText, 3.5, 2);
  
 
  doc.text(location.innerText, 0.8, 4.2);
  
  doc.text(meal.innerText, 0.8, 5);
  doc.setFontStyle('italic');
  doc.text(remark.innerText, 0.8, 5.8);

  doc.setFontStyle('bold');
  doc.text(services.innerText, 0.8, 4.8);
  doc.text(notes.innerText, 0.8, 6.4);
  doc.text(provider.innerText, 4.4, 3.2); 
  doc.text(ref.innerText, 0.8, 3.5);

  doc.setFontSize(12);
  doc.text("ACCOMODATION VOUCHER - OVERNIGHT", 3.75, 1);
  
  doc.save(`${result.booking.holder.name} ${result.booking.holder.surname}'s voucher${today} ${times}.pdf`);

  
}
catch{
  console.log("encountered an error making your voucher")
}
}

  return (
    <div >
      
      {process.browser?(result.length==0? localStorage.setItem("marker","done"): (localStorage.setItem("marker",JSON.stringify(result)) )  ):""}
       <Head> 
          <title>GSTDM | Booking</title>
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
          <script src="https://cdn.tailwindcss.com" async></script>
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossOrigin="anonymous" referrerpolicy="no-referrer" async></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" async></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js" async></script>

      </Head>



    <div className= {!btnClicked?'booking-image':''} >
      <div className='text-center text-white text-6xl pt-6 pb-10'> <label>Make Your Reservation</label></div>    
        
      {/* {errorr!=null?<errorState.Provider value={{errorr, setError}}><ErrorModal/></errorState.Provider>:""} */}
      <br></br>
<br></br>

<div className='grid grid-cols-2 gap-2 px-5 text-slate-700 ' >

      <div className='col-span-1 '>
              <form className='bg-grey-50 text-left pt-4 border rounded-2xl pl-3' id='bookingForm' onSubmit={(e) =>{e.preventDefault()}} style={{backgroundColor: "rgba(255,255,255,0.8)"}} >
        <label className='text-xl ml-2 font-semibold'>Holder&apos;s Information</label>
        <div className='grid grid-cols-2 mt-2 pl-6'>
        <div className='col-span-1'>
          <label className='ml-2 mr-2'>Name</label>
          <input required type="text" placeholder='Name' id='name' className='p-2 mr-3 rounded-md text-sm'   onChange={e=> setName(e.target.value) }/>
          </div>  
        <div>
          <label className='ml-2 mr-2'>Surname</label>
          <input required type="text" placeholder='Surname' className='p-2 mr-3 rounded-md text-sm' id='surname' onChange={e=> setSurname(e.target.value)}/>
          </div>
        </div>
        
        <br/>
        <label className='ml-2 mr-2 text-xl font-semibold'>Passenger Information (Adult)</label> 
        <br/> 
        <br/>
        <div id="adults">

        </div>
        
       {childTemp != "0"? <label className='ml-2 mr-2 text-xl font-semibold'>Passenger Information (Children)</label>:''} 
        <div id="children" className='mt-2'>

        </div>
      <checkBoxContext.Provider value={{remarkCH, setRemarkCH, str, setStr}}>
      <div className='mx-2'><Checkboxes/></div>
     
        <div className='mx-6' > 
        <span className='text-gray-700 text-sm italic'>({str})</span>
          <textarea required className='w-full ml-2 mb-6 h-32 p-2 mr-3 mb-3 rounded-md text-sm' placeholder='Additional Remarks' id='remark' onChange={e=> {
            
            
            setRemarks(str + " (and also) " +e.target.value)
            console.log(remarks);
            }}>
            
          </textarea>
          <span className='text-red-400'>{result.error?result.error.message =="Insufficient allotment"?"This booking is no longer available, please try to make another":result.error.message:""}</span>
        </div>

      </checkBoxContext.Provider>
     <div className='grid grid-cols-1 p-4'>
        <button type='submit' id='bookButton' 
        onFocus={()=>{
          feedAdult();
          feedChild();
          amalgamate();
        }
        }
        onMouseOver={()=>{
          feedAdult();
          feedChild();
          amalgamate();
        }
        }
        onClick={function (event) { 
          //event.preventDefault();
          console.log("clicked");
          var elements = document.getElementById("bookingForm").elements;

          for (var i = 0, element; element = elements[i++];) {
              if (element.type === "text" && element.value === "")
                  {console.log("it's an empty textfield")
                  setValid(false);}

              else{
                setValid(true);
              }
              }
              if (valid )
                  {py();}
            
              errorHndler();
        } } className="bg-cyan-900 ml-5 mt-5 p-3 hover:bg-gray-400 hover:text-black font-bold text-white rounded-lg">
        Book Now
      </button>

      </div>
              </form>
              
     </div>
       
     {rateRes.length != 0 && rateRes.hotel?<div className='col-span-1 rounded-xl 'style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
          <div className='grid grid-cols-3 gap-6 text-white'>
              <div className=' col-span-1 bg-black p-6 m-6 text-center rounded-tl-lg'>
                <span className='fa-solid fa-hotel text-6xl'></span>
                <p className='pt-2 font-extrabold'>({rateRes.hotel.rooms[0].rates[0].boardCode})</p>
                <p>{rateRes.hotel.rooms[0].rates[0].boardName}</p>
                <p className='text-yellow-600'>~ {rateRes.hotel.categoryName} ~</p>
              </div>
              <div className='col-span-2 bg-black p-6 m-6 text-white'>
              <div className='grid grid-cols-7'>
                <p className='col-span-1 text-center'><span className='fa-solid fa-location text-2xl'></span></p>
                <p className='col-span-6 my-auto'>{rateRes.hotel.name}, {rateRes.hotel.destinationName}, {rateRes.hotel.zoneName}</p>
              </div>
          <div className='grid grid-cols-3'>   
          <div className='mt-4 col-span-2'>
              <div className='grid grid-cols-7'>
              <p className='text-center'><span className='fa-solid fa-male text-lg col-span-1'></span><span className='fa-solid fa-female text-lg col-span-1'></span></p>
              <p className='col-span-6 my-auto'><span>({rateRes.hotel.rooms[0].rates[0].adults})</span> Adult(s) </p>
              </div>
              <div className='grid grid-cols-7'>
              <p className='text-center'><span className='fa-solid fa-child text-sm'></span><span className='fa-solid fa-child text-sm'></span></p>
              <p className='col-span-6 my-auto'><span>({rateRes.hotel.rooms[0].rates[0].children})</span> Children </p>
              </div>
              <div className='grid grid-cols-7'>
              <p className='text-center'><span className='fa-solid fa-bed'></span></p>
              <p className='col-span-6 my-auto'><span>({rateRes.hotel.rooms[0].rates[0].rooms})</span> Room(s) </p>
              </div>
          </div>
          <div className='text-white text-center'>
            <p className='fa-solid fa-calendar-days text-2xl mt-2 '></p>
            <br/>
            <span className='fa-solid fa-right-to-bracket text-cyan-500'></span><span> {rateRes.hotel.checkIn}</span>
            <span className='fa-solid fa-right-to-bracket rotate-180 text-yellow-500'></span><span> {rateRes.hotel.checkOut}</span>
          </div>
          </div> 
              </div>
          </div>
          <div className='text-white text-lg bg-black mx-6 grid grid-cols-5 mb-1'>
            <p className='col-span-1 p-3 font-extrabold'>{rateRes.hotel.rooms[0].code}</p>
            <p className='col-span-3 p-3 font-semibold'>{rateRes.hotel.rooms[0].name}</p>
            <p className='col-span-1 py-3 bg-gray-900 mx-auto px-2 font-semibold'>{rateRes.hotel.rooms[0].rates[0].rateType == "BOOKABLE"? <span>BOOKABLE</span>:<span className='text-sm'>NOT BOOKABLE</span>}</p>
          </div>
          <div className='text-white text-lg bg-black mx-6 grid grid-cols-5'>
            <p className='col-span-3 p-3'><span className='text-4xl my-auto fa-solid fa-money-check-dollar'></span><span className='text-6xl my-auto font-semibold'> {rateRes.hotel.totalNet} </span></p>
            <div className= "col-span-2 p-3 my-auto">
            <p className='italic text-sm'><span className='fa-solid fa-wallet'></span> Currency (<span className='text-yellow-300'>{rateRes.hotel.currency}</span>) </p>
            <p className='text-sm'>+ <span className='font-semibold text-yellow-300'>{rateRes.hotel.rooms[0].rates[0].taxes?rateRes.hotel.rooms[0].rates[0].taxes.taxes[0].amount:"(N/A)"}</span> ({rateRes.hotel.currency}) applicable tax, {rateRes.hotel.rooms[0].rates[0].taxes?rateRes.hotel.rooms[0].rates[0].taxes.taxes[0].included?<span className='font-semibold'>included</span>:<span className='font-semibold'>not included</span>:"(N/A)"}  </p>
            <p className='text-sm'><span className='fa-solid fa-credit-card'></span>Payment Type (<span className='font-bold text-yellow-300'>{rateRes.hotel.rooms[0].rates[0].paymentType}</span>)</p>
            </div>
          </div>

          <div className='text-white text-lg bg-black mx-6 mt-1'>
            <p className='p-3'>Remarks</p>
            <hr/>
            <p className='p-3 text-sm'>{rateRes.hotel.rooms[0].rates[0].rateComments}</p>
            
          </div>
     </div>:<div className='col-span-1 rounded-xl spinner-grow'style={{backgroundColor: "rgba(0,0,0,0.8)"}}></div>}

    {result.booking? <div >
    <p id='para'> <span>Consultant:</span> Mark Abrahams / Donald Hondo +263774217849 
    <br/>or 263772340485
    <br/><span>Email:</span> mark@getawayspecialisedtours.com
    <br/><span>Our Ref No.:</span> MA 223
    </p>
    <p id='provider'>Provider:{result.booking.holder.name} {result.booking.holder.surname}</p>
    <p id='ref'>(Adults {result.booking.hotel.rooms[0].rates[0].adults}) <span>Your Ref no.: {result.booking.reference}</span></p>
    <p id='loc'><span>GPS:</span> Lat {result.booking.hotel.latitude}&quot;, Lon {result.booking.hotel.longitude}&quot;<br/>
    <span>Check In:</span> {result.booking.hotel.checkIn} <span>Check Out:</span> {result.booking.hotel.checkOut} (2 Nights) 
    </p>
    <p id='services'>INCLUDED SERVICES</p>
    <p id='meal'><span>Meal Basis:</span>Fully Inclusive - Bed, All Meals, Fees and Activities<br/>
    <span>Drinks:</span>All Local Brands (Spirits, Wine and Beers) Included <br/>
    <span>Dietary Requirements:</span></p>
    <p id='remarkk' className='italic font-bold'>All additional services are for guest&apos;s own account</p>
    <p id='notes' >Notes: <br/>
    {result.booking.remark}</p>
    </div>:<></>}
   
</div>


  
    <div className='pt-40 pb-5' id='voucher' >
      <div className=''>
        {!result.booking ? <p></p> : 
        <div >
           <div className='text-center' id="start"> <i className="fa-sharp fa-solid fa-circle-check text-green-600 text-9xl"></i>
          
           <p className='text-xl py-1'>Congratulations, your booking was successful</p>
           </div>
            <br/>
            <br/>
            <div className='flex'>




         <div className='mx-40 shadow-2xl border rounded-tl-4xl px-10 py-8 w-150' id='bookPrint'>   
            <br/>
          <div className='font-bold text-4xl justify-between flex py-4'>
              <div>INVOICE</div> 
              <div className='text-xl'>Ref. {result.booking.reference}</div>
          </div>
          <hr/>
        
            <p className='text-md grid grid-cols-5 py-4'>holder&apos;s Name : <span className='font-semibold text-xl '>{result.booking.holder.name}</span>  <span className='text-xl'>{result.booking.holder.surname}</span> </p>
            <hr/>
            <p className='grid grid-cols-5 py-4'>booking status : <span className='text-xl text-white'> <span className='bg-green-600 p-1 rounded-md'>{result.booking.status}</span></span> </p>
<br/>
            <p className='grid grid-cols-5'>pending amount  : <span className='text-xl font-bold'>${result.booking.pendingAmount}</span> </p>

            
            <br/>
            <hr/>
            <div className='flex justify-end'><p>total pending : <span className='font-black text-red-700 text-5xl'>${result.booking.totalNet}</span> </p></div>
            <hr/>
            <br/>
            <p className='italic text-sm text-gray-500'>Invoicing Company | {result.booking.invoiceCompany.company} | {result.booking.invoiceCompany.code} | Co. RegNo. | {result.booking.invoiceCompany.registrationNumber}</p>
    


       </div>
      <div>      
       <button><Link href={"../cart"}><p className='bg-cyan-900 ml-5 mt-5 p-3 hover:bg-gray-400 hover:text-black font-bold text-white rounded-lg' onClick={yesscroll}>Make another booking</p></Link></button>

       <button><p className='bg-black ml-5 mt-5 p-3 hover:bg-gray-400 hover:text-black font-bold text-white rounded-lg' onClick={e=>{print(e)}}>Download Voucher <span className='fas fa-arrow-down'></span></p></button>
       </div>
       </div>
        </div> }
      </div>

    </div>
    </div>
    
    </div>
  
  )
}

export default Booking

