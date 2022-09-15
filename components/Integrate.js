import React, { Component, useState, useEffect } from 'react';
import CryptoJS from 'crypto-js'

  const Integrate = ({status}) => {

    const [Hote, setHote] = useState([]);

    //setHote(props);
    return (
      <div>
        <p>{status.auditData.timestamp}</p>   
      </div>
    )
  }
  
  export default Integrate
  