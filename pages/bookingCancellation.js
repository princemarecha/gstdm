import React, { useState } from 'react'
import { Button } from 'reactstrap';
import BookingCancellation from '../components/BookingCancellation';
import Header from '../components/header'
import { cartNum } from '../Helper/Context'

const bookingCancellation = () => {

const [cartNumber, setCartNumber] = useState(1);

  return (
    <div>
      <cartNum.Provider value={{cartNumber, setCartNumber}}>
        <Header/>
        <h1 className='font-bold text-center text-4xl mt-8'>Booking Cancellation</h1>
        
        <BookingCancellation/>
      </cartNum.Provider>
    </div>
  )
}

export default bookingCancellation