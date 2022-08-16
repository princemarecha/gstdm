import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tab from './tab';

class Search extends Component {
    render() {
        return (
            <div class="bg-white py-6 sm:py-8 lg:py-12 background-image">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
  <Tab/>
    <form class="max-w-screen-md w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white p-10 rounded-xl">
      <div class="sm:col-span-4">
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Destination, zone or hotel name</label>
        <input name="first-name" class="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">From</label>
        <input name="company" type="date" class="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">To</label>
        <input name="company" type="date" class="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>


      <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
      >Rooms</label>
    <input
      type="number" min="0"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleNumber0"
      placeholder=""
    />
  </div>
</div>

<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
      >Adults</label>
    <input
      type="number" min="0"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleNumber0"
      placeholder=""
    />
  </div>
</div>

<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
      >Children</label>
    <input
      type="number" min="0"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleNumber0"
      placeholder=""
    />
  </div>
</div>

      <div class="sm:col-span-2 flex justify-between items-center">
        <button class="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Search</button>
      </div>

    </form>

  </div>
</div>
        )
    }
}
export default Search;