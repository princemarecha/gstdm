import React, { Component, useContext } from 'react';
import Tab from './tab';
import { hotelContext } from '../Helper/Context';


const Search = () => {

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 background-image">
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <Tab/>
    </div>
  </div>
  )
}

export default Search
