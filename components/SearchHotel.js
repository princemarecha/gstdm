import React from "react";
import multiplyRooms from "../scripts/homeRooms";

const SearchHotel = () => {

  var arr = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div>
      <form >
        <div className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white p-10 rounded-xl">
        <div className="sm:col-span-4">
          <label
            htmlFor="first-name"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Destination, zone or hotel name
          </label>
          <input
            name="first-name"
            className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

          <div className="col-span-full flex justify-between items-center">
            <button className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Search
            </button>
          </div>
</div>
      </form>
    </div>
  );
};

export default SearchHotel;
