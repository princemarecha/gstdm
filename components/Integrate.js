import React, { Component, useState, useEffect, useContext } from 'react';
import CryptoJS from 'crypto-js'
import { hotelData } from '../Helper/Context';

  const Integrate = () => {

    const {status, setStatus} = useContext(hotelData);
   // const [dummy, setDummy] = useState(JSON.parse(JSON.stringify(status)));

    console.log((status) )
    const [Hote, setHote] = useState([status]);

    return (
      <div>
  
      {Hote.map((hotell)=>(
        hotell.map((hoo)=>(
          <p key = {hoo.code}>{hoo.name.content}</p>
        ))
      ))}
      </div>
    )
  }
  
  export default Integrate
  