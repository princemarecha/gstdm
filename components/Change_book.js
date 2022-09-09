import React from 'react'
import Link from 'next/link'

const Change_book = () => {
  return (
    <div>
    <form className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white p-10 rounded-xl">
    
      <div className="sm:col-span-2 flex justify-between items-center">
        <Link href= "../../booking_change">
        <button className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
        Change your Booking Now
        </button>
        </Link>
      </div>
    </form>
  </div>
  )
}

export default Change_book
