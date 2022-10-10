import React from 'react'
import { useState } from 'react';






const Huy = () => {

  const [startdate, setStartDate] = useState("")

    var time = (Math.round(Date.now()/1000));
    let soup = `e82df103ad74310fdb6a704cf460189b02d949622b${time}`;
    let b = CryptoJS.SHA256(soup);
    let x_sig = b.toString(CryptoJS.enc.Hex);
    
    //end x-sig gen
    
    var myHeaders = new Headers();
  myHeaders.append("Api-key", "e82df103ad74310fdb6a704cf460189b");
  myHeaders.append("X-Signature", x_sig);
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Accept-Encoding", "gzip");
  myHeaders.append("Content-Type", "application/json");
  
  
  var raw = JSON.stringify({
      "stay": {
        "checkIn": startdate,
        "checkOut": "2023-06-16"
      },
      "occupancies": [
        {
          "rooms": 1,
          "adults": 2,
          "children": 0
        }
      ],
      "hotels": {
        "hotel": [
          77,
          168,
          264,
          265,
          297,
          311
        ]
      }
    });
    
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    
    
    
    
    // const res = await fetch("https://api.test.hotelbeds.com/hotel-api/1.0/hotels", requestOptions);
    // const data = await res.json();
       
    



  return (
    <div>
      <input onChange={(e) => {setStartDate(e.target.value)}}/>
      <button onClick={submit}/>
    </div>
  )
}

export default Huy
