import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import GetSadza from "../scripts/add";

const BookingChange = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
        <script async src="https://cdn.tailwindcss.com"></script>
        <script async src="./../scripts/add.js"></script>
      </Head>
      <div className="sticky top-0 z-10">
            <Header/>
            </div>

      <div>
        <form className="m-8">
          <div className="grid grid-cols-1">
            <h1 className="text-2xl">Change Your Booking</h1>
            <div className="my-8">
              <h1 className="text-lg">Booking Information</h1>
              <div className="grid grid-cols-1">
                <div className="grid grid-cols-2">
                  <div className="col-span-1 grid grid-cols-1 m-4">
                    <label htmlFor="reference">Reference</label>
                    <input type="text" />
                  </div>
                  <div className="col-span-1 grid grid-cols-1  m-4">
                    <label htmlFor="c-reference">Client-Reference</label>
                    <input type="text" />
                  </div>
                  <div className="col-span-1 grid grid-cols-1  m-4">
                    <label htmlFor="c-reference">Creation Date</label>
                    <input type="date" />
                  </div>
                  <div className="col-span-1 grid grid-cols-1  m-4">
                    <label htmlFor="c-reference">Booking Confirmed</label>
                    <input type="checkBox" value="CONFIRMED" defaultChecked />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="col-span-1 grid grid-cols-1 m-4">
                    <label htmlFor="reference">Creation User</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="col-span-1 grid grid-cols-1 m-4">
                    <label htmlFor="reference">Holder&apos;s Name</label>
                    <input type="text" />
                  </div>
                  <div className="col-span-1 grid grid-cols-1 m-4">
                    <label htmlFor="reference">Holder&apos;s Surname</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <h1 className="text-lg mt-4">Hotel Information</h1>
              <div className="grid grid-cols-1">
                <div className="grid grid-cols-2">
                  <div className="col-span-1 grid grid-cols-1 m-4">
                    <label htmlFor="checkin">Check-In-Date</label>
                    <input type="date" name="checkin" />
                  </div>

                  <div className="col-span-1 grid grid-cols-1  m-4">
                    <label htmlFor="checkOut">Check-Out-Date</label>
                    <input type="date" name="checkOut" />
                  </div>
                  <div className="col-span-1 grid grid-cols-1 m-4">
                    <label htmlFor="hotel-name">Hotel Name</label>
                    <input type="text" name="hotel-name" />
                  </div>
                  <div className="col-span-1 grid grid-cols-1 m-4">
                    <label htmlFor="hotel-code">Hotel Code</label>
                    <input type="text" name="hotel-code" />
                  </div>
                </div>
              </div>
              <h1 className="text-lg mt-4">Room Information</h1>
              <div className="grid grid-cols-1">
               
                <div className="grid grid-cols-1 " id="roomOptions">
                  <div id="unitDiv"></div>
                </div>
                <button type="button" id="add_room" className="m-4 inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={GetSadza}>
                  Add Room
                </button>
                <div className="grid grid-cols-2" id="totals">

                </div>
               
              </div>
              <div className="grid grid-cols-12 m-4 ">
               <button type="submit" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Submit</button> 
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
      <script
        async
        src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
      ></script>
    </div>
  );
};

export default BookingChange;
