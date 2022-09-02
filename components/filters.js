import React, { Component } from 'react';



class Filters extends Component {
    render() {
        return (
            <div>
<div className="w-full flex flex-col lg:flex-row lg:px-6">
    <div className="w-full lg:w-60 relative">
      
      <div
        className="hidden absolute left-0 px-6 lg:px-auto bg-white w-full lg:w-auto z-50 mt-10 lg:mt-0 lg:sticky top-0 pt-6 pb-24 lg:flex flex-col lg:max-h-screen"
      >
        <div className="flex-1 lg:overflow-y-scroll">

          <div className="border-b border-gray-300">
          <a className="text-sm font-bold"
            >Favourites</a
          >
          <div className="my-6">
            <div className="">
              <div className="">
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                  /><label className="ml-2 text-sm" htmlFor="delivery-service"
                    ><i className="fa-regular fa-heart text-red-400"></i> Only Favourites</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300">
          <a className="text-sm font-bold"
            >Board</a
          >
          <div className="my-6">
            <div className="">
              <div className="">
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                  /><label className="ml-2 text-sm" htmlFor="delivery-service"
                    >Half board</label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="curbside-service"
                    value="curbside"
                  /><label className="ml-2 text-sm" htmlFor="curbside-service"
                    >All inclusive</label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label className="ml-2 text-sm" htmlFor="orderin-service"
                    >Incl. continental breakfast</label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label className="ml-2 text-sm" htmlFor="orderin-service"
                    >Room only (hotels)</label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label className="ml-2 text-sm" htmlFor="orderin-service"
                    >Incl. breakfast, lunch & dinner</label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label className="ml-2 text-sm" htmlFor="orderin-service"
                    >Incl. breakfast</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="border-b border-gray-300">
          <a className="text-sm font-bold"
            >Category</a
          >
          <div className="my-6">
            <div className="">
              <div className="">
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label className="ml-2 text-sm flex" htmlFor="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg></label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label className="ml-2 text-sm flex" htmlFor="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    </label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label className="ml-2 text-sm flex" htmlFor="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
   </label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label className="ml-2 text-sm flex" htmlFor="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
   </label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label className="ml-2 text-sm flex" htmlFor="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    </label
                  >
                </div>
                
              </div>
            </div>
          </div>
        </div>


        <div className="border-b border-gray-300">
          <a className="text-sm font-bold"
            >Zone</a
          >
          <div className="my-6">
            <div className="">
              <div className="">
                <div className="flex items-center mb-3 last:mb-0">
                <select id="zone" name="zone">
    <option value="volvo">All</option>
    <option value="saab">Europe</option>
    <option value="fiat">Asia</option>
    <option value="audi">Oceania</option>
  </select>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="border-b border-gray-300">
          <a className="text-sm font-bold"
            >Accommodation type</a
          >
          <div className="my-6">
            <div className="">
              <div className="">
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label className="ml-2 text-sm" htmlFor="delivery-service"
                    >Resort</label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="curbside-service"
                    value="curbside"
                  /><label className="ml-2 text-sm" htmlFor="curbside-service"
                    >Boutique hotel</label
                  >
                </div>
                <div className="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label className="ml-2 text-sm" htmlFor="orderin-service"
                    >Boutique</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>


        </div>
      </div>
  
    </div>

            </div>
            </div>
        )
    }
}
export default Filters;