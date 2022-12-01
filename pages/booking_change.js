import BookingChange from "../components/BookingChange";

import React, { useState } from 'react'
import { cartNum } from "../Helper/Context";

const Booking_change = () => {
  const [cartNumber, setCartNumber] = useState([]);
  return (
    <div>
      <cartNum.Provider value={{cartNumber, setCartNumber}}>
        <BookingChange/>
      </cartNum.Provider>
      
    </div>
  )
}

export default Booking_change
