import React from "react";

const SearchPackages = () => {
  return (
    <div>
      <form className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white p-10 rounded-xl">
        <div className="sm:col-span-4">
          <label
            htmlFor="first-name"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            What Package are you looking for?
          </label>
          <input
            name="first-name"
            className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div className="sm:col-span-2 flex justify-between items-center">
          <button className="inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPackages;
