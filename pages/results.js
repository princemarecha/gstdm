import React, { Component } from 'react';
import Head from 'next/head';
import Header from './../components/header';
import Footer from './../components/footer';
import Image from 'next/image';
import img1 from "./../public/images/slide-01-copy.jpg";
import img2 from "./../public/images/slide-02-copy.jpg";
import img3 from "./../public/images/slide-03-copy.jpg";
import img4 from "./../public/images/slide-04-copy.jpg";
import img5 from "./../public/images/slide-05-copy.jpg";
import img6 from "./../public/images/slide-06-copy.jpg";
import img7 from "./../public/images/slide-07-copy.jpg";
import img8 from "./../public/images/slide-08-copy.jpg";


class Results extends Component {
    render() {
        return (
            <div>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
            </Head>
            <Header/>
            
{/* Search item */}

    <form class="max-w-screen-md w-full flex gap-4 bg-white p-10 rounded-xl">
      <div class="grid grid-rows-2">
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Destination, zone or hotel name</label>
        <input name="first-name" class="bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <div class="grid grid-rows-2">
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">From</label>
        <input name="first-name" type="date" class="bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <div class="grid grid-rows-2">
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">To</label>
        <input name="first-name" type="date" class="bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <div class="grid grid-rows-2">
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Rooms</label>
        <input name="first-name" type="number" class="bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <div class="grid grid-rows-2">
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Adults</label>
        <input name="first-name" type="number" class="bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      <div class="grid grid-rows-2">
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Children</label>
        <input name="first-name" type="number" class="bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="grid grid-rows-2">
      <div></div>
        <button class="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Search</button>
      </div>

    </form>



{/* Filters */}
  <div class="w-full flex flex-col lg:flex-row lg:px-6">
    <div class="w-full lg:w-60 relative">
      
      <div
        class="hidden absolute left-0 px-6 lg:px-auto bg-white w-full lg:w-auto z-50 mt-10 lg:mt-0 lg:sticky top-0 pt-6 pb-24 lg:flex flex-col lg:max-h-screen"
      >
        <div class="flex-1 lg:overflow-y-scroll">
          {/*<div class="border-b border-gray-300 py-6">
            <div class="flex items-center justify-between cursor-pointer">
              <h5 class="text-sm font-bold">Sort</h5>
              
            </div>
            <div class="my-6">
              <div class="">
                <div class="">
                  <div class="flex items-center mb-3 last:mb-0">
                    <input
                      name="sort"
                      type="radio"
                      class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                      id="distance-sort"
                      value="distance"
                    /><label class="ml-2 text-sm" for="distance-sort"
                      >Distance</label
                    >
                  </div>
                  <div class="flex items-center mb-3 last:mb-0">
                    <input
                      name="sort"
                      type="radio"
                      class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                      id="popular-sort"
                      value="popular"
                    /><label class="ml-2 text-sm" for="popular-sort"
                      >Popularity</label
                    >
                  </div>
                  <div class="flex items-center mb-3 last:mb-0">
                    <input
                      name="sort"
                      type="radio"
                      class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                      id="topRated-sort"
                      value="topRated"
                      checked=""
                    /><label class="ml-2 text-sm" for="topRated-sort"
                      >Top Rated</label
                    >
                  </div>
                  <div class="flex items-center mb-3 last:mb-0">
                    <input
                      name="sort"
                      type="radio"
                      class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                      id="atoz-sort"
                      value="atoz"
                    /><label class="ml-2 text-sm" for="atoz-sort">A to Z</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border-b border-gray-300 py-6">
            <div class="flex items-center justify-between cursor-pointer">
              <h5 class="text-sm font-bold">Room type</h5>
            </div>
            <div class="my-6">
              <div class="w-full flex items-center">
                <input
                  type="radio"
                  name="organic"
                  class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                /><label class="ml-2 text-sm" for="organic">Single</label>
              </div>
            </div>
            <div class="my-6">
              <div class="w-full flex items-center">
                <input
                  type="radio"
                  name="gluten-free"
                  class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                /><label class="ml-2 text-sm" for="gluten-free"
                  >Double</label
                >
              </div>
            </div>
            <div class="my-6">
              <div class="w-full flex items-center">
                <input
                  type="radio"
                  name="kosher"
                  class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                /><label class="ml-2 text-sm" for="kosher">Couple</label>
              </div>
            </div>
            <div class="my-6">
              <div class="w-full flex items-center">
                <input
                  type="radio"
                  name="paleo"
                  class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                /><label class="ml-2 text-sm" for="paleo">Family</label>
              </div>
            </div>
            <div class="my-6">
              <div class="w-full flex items-center">
                <input
                  type="radio"
                  name="vegan"
                  class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                /><label class="ml-2 text-sm" for="vegan">Separate beds</label>
              </div>
            </div>
            <div class="my-6">
              <div class="w-full flex items-center">
                <input
                  type="radio"
                  name="halal"
                  class="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
                /><label class="ml-2 text-sm" for="halal">Kids only</label>
              </div>
            </div>
          </div> */}

          <div class="border-b border-gray-300">
          <a class="text-sm font-bold"
            >Favourites</a
          >
          <div class="my-6">
            <div class="">
              <div class="">
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                  /><label class="ml-2 text-sm" for="delivery-service"
                    ><i class="fa-regular fa-heart text-red-400"></i> Only Favourites</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-300">
          <a class="text-sm font-bold"
            >Board</a
          >
          <div class="my-6">
            <div class="">
              <div class="">
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                  /><label class="ml-2 text-sm" for="delivery-service"
                    >Half board</label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="curbside-service"
                    value="curbside"
                  /><label class="ml-2 text-sm" for="curbside-service"
                    >All inclusive</label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label class="ml-2 text-sm" for="orderin-service"
                    >Incl. continental breakfast</label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label class="ml-2 text-sm" for="orderin-service"
                    >Room only (hotels)</label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label class="ml-2 text-sm" for="orderin-service"
                    >Incl. breakfast, lunch & dinner</label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label class="ml-2 text-sm" for="orderin-service"
                    >Incl. breakfast</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="border-b border-gray-300">
          <a class="text-sm font-bold"
            >Category</a
          >
          <div class="my-6">
            <div class="">
              <div class="">
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label class="ml-2 text-sm flex" for="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg></label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label class="ml-2 text-sm flex" for="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    </label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label class="ml-2 text-sm flex" for="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
   </label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label class="ml-2 text-sm flex" for="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
   </label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label class="ml-2 text-sm flex" for="delivery-service"
                    > <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    </label
                  >
                </div>
                
              </div>
            </div>
          </div>
        </div>


        <div class="border-b border-gray-300">
          <a class="text-sm font-bold"
            >Zone</a
          >
          <div class="my-6">
            <div class="">
              <div class="">
                <div class="flex items-center mb-3 last:mb-0">
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


        <div class="border-b border-gray-300">
          <a class="text-sm font-bold"
            >Accommodation type</a
          >
          <div class="my-6">
            <div class="">
              <div class="">
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label class="ml-2 text-sm" for="delivery-service"
                    >Resort</label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="curbside-service"
                    value="curbside"
                  /><label class="ml-2 text-sm" for="curbside-service"
                    >Boutique hotel</label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    id="orderin-service"
                    value="orderin"
                  /><label class="ml-2 text-sm" for="orderin-service"
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

    {/* Search results */}

    <div class="w-full lg:px-6 mb-10">
    <div class="lg:pl-12 py-6 px-6 lg:px-0">
      <div class="mt-12">
        <h1 class="text-3xl font-bold">Your search results</h1>
        <div class="mt-12">

          <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-full mt-1 ml-1">
              <Image
      src={img1}
      alt="Picture of the author"
      class="relative"
    />
    <i class="fa-regular fa-heart text-white fa-xl float-right mt-9 mr-2 absolute left-5" ></i>
              </div>
              
              
                <div class="text-sm p-6 col-span-2">
                  <h3 class="font-bold text-base flex">Victoria Falls 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
                  </h3>
                  
                  
                  
                  <div class="flex items-center">
                    <span class="font-semibold">Mosi oa Tunya, </span> Victoria Falls
                  </div>
                  
                  <p class="mt-1">
                  <i class="fas fa-wifi"></i> Wifi
                  </p>
                  <p class="mt-1">
                  <i class="fas fa-parking"></i> Car park
                  </p>
                  <p class="mt-1">
                  <i class="fa fa-cutlery"></i> Restaurant
                  </p>
                  
                  <div class="flex">
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Map
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Images
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Description
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Opinions
                  </div>
                  </div>
                </div>
              

              <div class="bg-cyan-100">
             <p class="text-blue-700 font-semibold p-3 text-sm">3 x Suite Double Garden Suite</p>
             <p class="px-3 pb-3 text-sm"><i class="fa fa-info-circle" aria-hidden="true"></i> Non refundable</p>
             <div class="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
               $1,999.99
             </div>
             <div class="flex justify-between items-center">
        <button class="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2">Add to cart</button>
      </div>
            </div>

            </div></a>



            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-full mt-1 ml-1">
              <Image
      src={img2}
      alt="Picture of the author"
      class="relative"
    />
    <i class="fa fa-heart text-white fa-xl float-right mt-9 mr-2 absolute left-5" ></i>
              </div>
              
              
                <div class="text-sm p-6 col-span-2">
                  <h3 class="font-bold text-base flex">Maldives 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
                  </h3>
                  
                  
                  
                  <div class="flex items-center">
                    <span class="font-semibold">Beach of Hope, </span> Maldives
                  </div>
                  
                  <p class="mt-1">
                  <i class="fas fa-wifi"></i> Wifi
                  </p>
                  <p class="mt-1">
                  <i class="fas fa-parking"></i> Car park
                  </p>
                  <p class="mt-1">
                  <i class="fa fa-cutlery"></i> Restaurant
                  </p>
                  
                  <div class="flex">
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Map
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Images
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Description
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Opinions
                  </div>
                  </div>
                </div>
              

              <div class="bg-cyan-100">
             <p class="text-blue-700 font-semibold p-3 text-sm">2 x Single Beach Suite</p>
             <p class="px-3 pb-3 text-sm"><i class="fa fa-info-circle" aria-hidden="true"></i> Non refundable</p>
             <div class="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
               $1,799.99
             </div>
             <div class="flex justify-between items-center">
        <button class="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2">Add to cart</button>
      </div>
            </div>

            </div></a>




            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-full mt-1 ml-1">
              <Image
      src={img3}
      alt="Picture of the author"
      class="relative"
    />
    <i class="fa-regular fa-heart text-white fa-xl float-right mt-9 mr-2 absolute left-5" ></i>
              </div>
              
              
                <div class="text-sm p-6 col-span-2">
                  <h3 class="font-bold text-base flex">Sweden 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
                  </h3>
                  
                  
                  
                  <div class="flex items-center">
                    <span class="font-semibold">Geneva, </span> Sweden
                  </div>
                  
                  <p class="mt-1">
                  <i class="fas fa-wifi"></i> Wifi
                  </p>
                  <p class="mt-1">
                  <i class="fas fa-parking"></i> Car park
                  </p>
                  <p class="mt-1">
                  <i class="fa fa-cutlery"></i> Restaurant
                  </p>
                  
                  <div class="flex">
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Map
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Images
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Description
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Opinions
                  </div>
                  </div>
                </div>
              

              <div class="bg-cyan-100">
             <p class="text-blue-700 font-semibold p-3 text-sm">1 x Suite Palace Suite</p>
             <p class="px-3 pb-3 text-sm"><i class="fa fa-info-circle" aria-hidden="true"></i> Non refundable</p>
             <div class="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
               $2,599.99
             </div>
             <div class="flex justify-between items-center">
        <button class="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2">Add to cart</button>
      </div>
            </div>

            </div></a>




            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-full mt-1 ml-1">
              <Image
      src={img4}
      alt="Picture of the author"
      class="relative"
    />
    <i class="fa-regular fa-heart text-white fa-xl float-right mt-9 mr-2 absolute left-5" ></i>
              </div>
              
              
                <div class="text-sm p-6 col-span-2">
                  <h3 class="font-bold text-base flex">Toronto 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
                  </h3>
                  
                  
                  
                  <div class="flex items-center">
                    <span class="font-semibold">Lakeside, </span> Toronto
                  </div>
                  
                  <p class="mt-1">
                  <i class="fas fa-wifi"></i> Wifi
                  </p>
                  <p class="mt-1">
                  <i class="fas fa-parking"></i> Car park
                  </p>
                  <p class="mt-1">
                  <i class="fa fa-cutlery"></i> Restaurant
                  </p>
                  
                  <div class="flex">
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Map
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Images
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Description
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Opinions
                  </div>
                  </div>
                </div>
              

              <div class="bg-cyan-100">
             <p class="text-blue-700 font-semibold p-3 text-sm">1 x Suite Double Lake Suite</p>
             <p class="px-3 pb-3 text-sm"><i class="fa fa-info-circle" aria-hidden="true"></i> Non refundable</p>
             <div class="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
               $999.99
             </div>
             <div class="flex justify-between items-center">
        <button class="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2">Add to cart</button>
      </div>
            </div>

            </div></a>




            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-full mt-1 ml-1">
              <Image
      src={img5}
      alt="Picture of the author"
      class="relative"
    />
    <i class="fa fa-heart text-white fa-xl float-right mt-9 mr-2 absolute left-5" ></i>
              </div>
              
              
                <div class="text-sm p-6 col-span-2">
                  <h3 class="font-bold text-base flex">Kariba 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
                  </h3>
                  
                  
                  
                  <div class="flex items-center">
                    <span class="font-semibold">Mabvuku, </span> Kariba
                  </div>
                  
                  <p class="mt-1">
                  <i class="fas fa-wifi"></i> Wifi
                  </p>
                  <p class="mt-1">
                  <i class="fas fa-parking"></i> Car park
                  </p>
                  <p class="mt-1">
                  <i class="fa fa-cutlery"></i> Restaurant
                  </p>
                  
                  <div class="flex">
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Map
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Images
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Description
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Opinions
                  </div>
                  </div>
                </div>
              

              <div class="bg-cyan-100">
             <p class="text-blue-700 font-semibold p-3 text-sm">4 x Suite Triple River Suite</p>
             <p class="px-3 pb-3 text-sm"><i class="fa fa-info-circle" aria-hidden="true"></i> Non refundable</p>
             <div class="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
               $1,999.99
             </div>
             <div class="flex justify-between items-center">
        <button class="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2">Add to cart</button>
      </div>
            </div>

            </div></a>




            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-full mt-1 ml-1">
              <Image
      src={img6}
      alt="Picture of the author"
      class="relative"
    />
    <i class="fa-regular fa-heart text-white fa-xl float-right mt-9 mr-2 absolute left-5" ></i>
              </div>
              
              
                <div class="text-sm p-6 col-span-2">
                  <h3 class="font-bold text-base flex">Great Pyramids 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
                  </h3>
                  
                  
                  
                  <div class="flex items-center">
                    <span class="font-semibold">Pyramid of Giza, </span> Egypt
                  </div>
                  
                  <p class="mt-1">
                  <i class="fas fa-wifi"></i> Wifi
                  </p>
                  <p class="mt-1">
                  <i class="fas fa-parking"></i> Car park
                  </p>
                  <p class="mt-1">
                  <i class="fa fa-cutlery"></i> Restaurant
                  </p>
                  
                  <div class="flex">
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Map
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Images
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Description
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Opinions
                  </div>
                  </div>
                </div>
              

              <div class="bg-cyan-100">
             <p class="text-blue-700 font-semibold p-3 text-sm">1 x Suite Single Mummy Suite</p>
             <p class="px-3 pb-3 text-sm"><i class="fa fa-info-circle" aria-hidden="true"></i> Non refundable</p>
             <div class="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
               $2,999.99
             </div>
             <div class="flex justify-between items-center">
        <button class="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2">Add to cart</button>
      </div>
            </div>

            </div></a>



            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-full mt-1 ml-1">
              <Image
      src={img7}
      alt="Picture of the author"
      class="relative"
    />
    <i class="fa-regular fa-heart text-white fa-xl float-right mt-9 mr-2 absolute left-5" ></i>
              </div>
              
              
                <div class="text-sm p-6 col-span-2">
                  <h3 class="font-bold text-base flex">Norway 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
                  </h3>
                  
                  
                  
                  <div class="flex items-center">
                    <span class="font-semibold">Oslo, </span> Norway
                  </div>
                  
                  <p class="mt-1">
                  <i class="fas fa-wifi"></i> Wifi
                  </p>
                  <p class="mt-1">
                  <i class="fas fa-parking"></i> Car park
                  </p>
                  <p class="mt-1">
                  <i class="fa fa-cutlery"></i> Restaurant
                  </p>
                  
                  <div class="flex">
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Map
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Images
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Description
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Opinions
                  </div>
                  </div>
                </div>
              

              <div class="bg-cyan-100">
             <p class="text-blue-700 font-semibold p-3 text-sm">1 x Suite Double Country Suite</p>
             <p class="px-3 pb-3 text-sm"><i class="fa fa-info-circle" aria-hidden="true"></i> Non refundable</p>
             <div class="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
               $975.95
             </div>
             <div class="flex justify-between items-center">
        <button class="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2">Add to cart</button>
      </div>
            </div>

            </div></a>



            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-full mt-1 ml-1">
              <Image
      src={img8}
      alt="Picture of the author"
      class="relative"
    />
    <i class="fa-regular fa-heart text-white fa-xl float-right mt-9 mr-2 absolute left-5" ></i>
              </div>
              
              
                <div class="text-sm p-6 col-span-2">
                  <h3 class="font-bold text-base flex">Mexico 
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
                  </h3>
                  
                  
                  
                  <div class="flex items-center">
                    <span class="font-semibold">Encanto, </span> Mexico
                  </div>
                  
                  <p class="mt-1">
                  <i class="fas fa-wifi"></i> Wifi
                  </p>
                  <p class="mt-1">
                  <i class="fas fa-parking"></i> Car park
                  </p>
                  <p class="mt-1">
                  <i class="fa fa-cutlery"></i> Restaurant
                  </p>
                  
                  <div class="flex">
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Map
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Images
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Description
                  </div>
                  <div class="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Opinions
                  </div>
                  </div>
                </div>
              

              <div class="bg-cyan-100">
             <p class="text-blue-700 font-semibold p-3 text-sm">2 x Suite Single City Suite</p>
             <p class="px-3 pb-3 text-sm"><i class="fa fa-info-circle" aria-hidden="true"></i> Non refundable</p>
             <div class="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
               $899.99
             </div>
             <div class="flex justify-between items-center">
        <button class="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2">Add to cart</button>
      </div>
            </div>

            </div></a>



           {/* <a href="#"
            ><div
              class="md:flex mx-auto mb-8 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
              <div class="w-1/5">
              <Image
      src={img2}
      alt="Picture of the author"
    />
              </div>
              <div class="p-6">
                <div class="text-sm">
                  <h3 class="font-bold text-base">Maldives</h3>
                  <div class="flex items-center text-green-400">
                    4.7
                  </div>
                  <p class="mt-1">
                    <span>Luxury Hotel · </span><span>Breakfast · </span
                    ><span>Dinner · </span><span>Pool </span>
                  </p>
                  <p>1500 km away · $900</p>
                </div>
              </div>
            </div></a> */}
           
        </div>
      </div>
    </div>
  </div>
  </div>

  
<div class="flex flex-col items-center mb-5">

  <span class="text-sm text-black dark:text-black">
      Showing <span class="font-semibold text-gray-400 dark:text-gray-400">1</span> to <span class="font-semibold text-gray-400 dark:text-gray-400">8</span> of <span class="font-semibold text-gray-400 dark:text-gray-400">100</span> Entries
  </span>
  <div class="inline-flex mt-2 xs:mt-0">
    
    <button class="mr-1 inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-cyan-500 rounded-l hover:bg-cyan-600 dark:bg-cyan-500 dark:border-cyan-500 dark:text-gray-600 dark:hover:bg-cyan-500 dark:hover:text-white">
        <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Prev
    </button>
    <button class="ml-1 inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-cyan-500 rounded-r border-0 border-l border-cyan-700 hover:bg-cyan-600 dark:bg-cyan-500 dark:border-cyan-500 dark:text-gray-600 dark:hover:bg-cyan-500 dark:hover:text-white">
        Next
        <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
</div>

  <Footer/>
</div>
        )
    }
}
export default Results;