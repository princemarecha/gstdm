import React, { Component, useState, useEffect } from 'react';
import CryptoJS from 'crypto-js'

  const Integrate = ({status}) => {

    const [Hote, setHote] = useState([status.hotels]);

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
  