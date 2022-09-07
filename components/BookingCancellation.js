import React from 'react'

const BookingCancellation = () => {
  return (
    <div>
    <form className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white p-10 rounded-xl">
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
        <button className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
          Search
        </button>
      </div>
    </form>
  </div>
  )
}

export default BookingCancellation
