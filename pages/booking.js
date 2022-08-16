import React, { Component } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Search from './search';
import Image from 'next/image';
import img1 from './../public/images/slide-15.jpg';


class Booking extends Component {
    render() {
        return (
     <div>
      <Header/>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-100 md:px-25 mx-auto">
    <div className="grid grid-cols-2 gap-8">
    
      <div className="space-y-4 ml-10">
        <div className="bg-gray-100 rounded-lg overflow-hidden relative">
          <Image
              src={img1}
              alt="Picture of hotel"
          />

          <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
        </div>
      </div>
   
      <div className="md:py-8">
       
        <div className="mb-2 md:mb-3">
          <span className="inline-block text-gray-500 mb-0.5">Top Rated</span>
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Royal Zanzibar Beach Resort</h2>
        </div>   
        <div className="flex items-center mb-6 md:mb-10">
          <div className="flex gap-0.5 -ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <span className="text-gray-500 text-sm ml-2">4.2</span>

          <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold transition duration-100 ml-4">view all 47 reviews</a>
        </div>
    
        <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-gray-800 text-xl md:text-2xl font-bold">$990.00</span>
            <span className="text-red-500 line-through mb-0.5">$1050.00</span>
          </div>

          <span className="text-gray-500 text-sm">incl. breakfast and WIFI</span>
        </div>
        
       
        <div className="flex gap-2.5">
          <a href="#" className="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Add to cart</a>

          <a href="#" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
        </div>
     
        
   
      </div>
    
    </div>
  </div>
</div>

<div >
<div className="max-w-screen-2xl px-100 md:px-35 mx-auto">
          <div className="text-gray-800 text-lg font-semibold mb-3"><h1 className="text-gray-800 text-2xl sm:text-3xl font-bold max-w-screen-xl px-4 mx-auto sm:px-35 lg:px-12">About the hotel</h1></div>

          <p className="text-gray-500 px-4 mx-auto sm:px-35 lg:px-12">
            Closeness to ISRO (1.6 km) and BEL (2.4 km)
            Cozy rooms with modern interiors
            In-house restaurant serving tasty dishes
         </p>
        </div>
  <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold max-w-screen-xl px-4 mx-auto sm:px-35 lg:px-12">Where are we located</h1>

    <p className="text-gray-500 sm:text-lg mb-2 md:mb-4">
    The FabHotel RMS Comforts is situated on 5th Main in the Mathikere Extension area
Yeshwantpur Junction Railway Station is 1.8 km, while Krantivira Sangolli Rayanna Railway Station is 7.3 km from the hotel
Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)
Some of the prominent landmarks near the hotel include BBMP Office (700 m), Ramaiah Institute of Technology (750 m), Indian Institute of Science (950 m), BEL-THALES Systems Limited (1.5 km), ISRO (1.6 km), RTO Office Yeshwanthpura (1.8 km), Antrix Corporation Limited (1.9 km), Bharat Electronics Limited (2.1 km) and Professional Tax Office (2.5 km)
Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)</p>

    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Where to eat</h2>

    <p className="text-gray-500 sm:text-lg mb-2 md:mb-4">The hotel has a restaurant that treats you with a wide range of dishes across multiple cuisines
Sri Krishna Bhavan (53 m), Shree Sagar (63 m), Delight (72 m), Reddy Mess (140 m), Star Biryani Center (290 m) and Indira Canteen (300 m) are among many dining options around the hotel</p>

<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-lg px-12 md:px-5 mx-auto">
    <div className="grid md:grid-cols-2 gap-12">
<form
  className="relative w-screen max-w-lg mx-auto overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow-2xl"
  role="dialog"
  aria-label="Filters"
>
  <header className="p-6 text-center">
    <p className="text-lg font-medium">Arrivals in London</p>
  </header>

  <main className="flow-root p-6 overflow-y-auto h-96">
    <div className="-my-8 divide-y divide-gray-100">

      <div className="py-8">
        <fieldset>
          <legend className="text-xl font-medium">Request for accomodation</legend>
                <p> Bed Types</p>
          <ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
            <li>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                <span className="ml-3 font-medium">Aston University</span>
              </label>
            </li>

            <li>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                <span className="ml-3 font-medium">Bangor University</span>
              </label>
            </li>

            <li>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                <span className="ml-3 font-medium">Brunel University London</span>
              </label>
            </li>

            <li>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                <span className="ml-3 font-medium">Glyndwr University</span>
              </label>
            </li>
          </ul>
        </fieldset>

        <button className="inline-flex items-center mt-6 text-sm font-medium text-gray-600 underline" type="button">
          Show all related searches 

          <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </main>

  <footer className="flex items-center justify-between p-6">
    <button className="text-sm font-medium text-gray-600 underline" type="button">Clear all</button>

    <button className="px-5 py-3 font-medium text-white bg-black rounded-lg" type="submit">Book</button>
  </footer>
</form>
    <form className="max-w-screen-md w-1/2 grid sm:grid-cols-2 gap-2 mx-auto bg-white p-10 rounded-xl align-top">
      <div className="sm:col-span-2">
        <label htmlFor="first-name" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Destination, zone or hotel name</label>
        <input name="first-name" className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="company" className="inline-block text-gray-800 text-sm sm:text-base mb-2">From</label>
        <input name="company" type="date" className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="company" className="inline-block text-gray-800 text-sm sm:text-base mb-2">To</label>
        <input name="company" type="date" className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>


      <div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <label htmlFor="exampleNumber0" className="form-label inline-block mb-2 text-gray-700"
      >Rooms</label>
    <input
      type="number" min="0"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleNumber0"
      placeholder=""
    />
  </div>
</div>

<div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <label htmlFor="exampleNumber0" className="form-label inline-block mb-2 text-gray-700"
      >Adults</label>
    <input
      type="number" min="0"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleNumber0"
      placeholder=""
    />
  </div>
</div>

<div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <label htmlFor="exampleNumber0" className="form-label inline-block mb-2 text-gray-700"
      >Children</label>
    <input
      type="number" min="0"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleNumber0"
      placeholder=""
    />
  </div>
</div>

      <div className="sm:col-span-2 flex justify-between items-center">
        <button className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Search</button>
      </div>

    </form>
</div>
</div>
</div>
    
  </div>
</div>

<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-lg px-12 md:px-5 mx-auto">
    <div className="grid md:grid-cols-3 gap-12">
    


</div>
 </div>
 </div>



      <Footer/>
     </div>

        )
    }
}
export default Booking;