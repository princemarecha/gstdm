import React, { useState } from 'react'
import CryptoJS from 'crypto-js'
import Passenger from '../components/Passenger';
import Payment from '../components/Payment';
import Link from 'next/link';


const Booking = () => {

    const [surname, setSurname] = useState([]);
    const [name, setName] = useState([]);
    const [asurname, setASurname] = useState([]);
    const [aname, setAName] = useState([]);
    const [result, setResult] = useState([])

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
          "holder": {
            "name": "name",
            "surname": "surname"
          },
          "rooms": [
            {
              "rateKey": "20230615|20230616|W|1|168|TPL.ST|CG-OPAQUE|RO||1~2~0||P@06~~21d97~1684271547~N~~~NOR~253D7FBCA04C42B166634081739000AAUK0000001000000000721d97",
              "paxes": [
                {
                  "roomId": 1,
                  "type": "AD",
                  "name": "aname",
                  "surname": "asurname"
                },
                {
                  "roomId": 1,
                  "type": "AD",
                  "name": "Second Adult Name",
                  "surname": "Surname"
                }
              ]
            }
          ],
          "clientReference": "IntegrationAgency",
          "remark": "Booking remarks are to be written here.",
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
            .then(result => setResult(result))
            .catch(error => console.log('error', error));
           
        }


  return (
  
    <div>
       <button onClick={function (event) { py(); } } className="bg-cyan-400 ml-5 mt-5 p-3 ">
        Click Me!
      </button>
      
      <button onClick={console.log(surname +" "+ name +" "+aname+" "+asurname)} className="bg-cyan-500 ml-5 mt-5 p-3">
        Click Me Again!
      </button>
      <Link href="/hotel-api/1.0/bookings">
      <button   className="bg-cyan-600 ml-5 mt-5 p-3">
        Click to see result!
      </button>
      </Link>
      <br></br>
<br></br>


<form className='bg-grey-50 text-left w-85 h-60 pt-3 border'>
        <div>
        <label className='ml-2 mr-2'>Name</label>
        <input type="text" placeholder='Name' id='name'  onChange={e=> setName(e.target.value)}/>
        </div>
        <div>
        <label className='ml-2 mr-2'>Surname</label>
        <input type="text" placeholder='Surname' id='surname' onChange={e=> setSurname(e.target.value)}/>
        </div>
        
        <br/>
        <br/>   
        <label className='ml-2 mr-2'>First Adult Name</label>
        <br/>
        <br/>
        <div>
        <label className='ml-2 mr-2'>Name</label>
        <input type="text" placeholder='Adult Name' id='aname' onChange={e=> setAName(e.target.value)}/>
        </div>
        <div>
        <label className='ml-2 mr-2'>Surname</label>
        <input type="text" placeholder='Adult Surname' id='asurname' onChange={e=> setASurname(e.target.value)}/>
        </div>


        
     </form>



  
     


     
 

    <div>
        {(result.length==0)? <p></p> : 
        <div>
            
            <br/>
            <br/>
            ........................................................................................................
            <br/>

            <p>VOUCHER || {result.booking.holder.name} {result.booking.holder.surname} || Ref. {result.booking.reference}</p>
            ........................................................................................................
            <p>booking status | {result.booking.status} </p>

            <p>pending amount  | ${result.booking.pendingAmount} </p>

            <br/>
            <br/>
            ------------------------------------------------------------------------------
            <p>Total Pending | ${result.booking.totalNet}</p>
            ------------------------------------------------------------------------------
            <br/>
            <p>Invoicing Company | {result.booking.invoiceCompany.company} | {result.booking.invoiceCompany.code} | Co. RegNo. | {result.booking.invoiceCompany.registrationNumber}</p>

            ........................................................................................................
        </div> }
    </div>
    </div>
  )
}

export default Booking

