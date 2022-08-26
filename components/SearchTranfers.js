import React from "react";

const SearchTransfers = () => {
  return (
    <div>
      <form className="max-w-screen-md md:w-1/2 grid sm:grid-cols-4 gap-4 mx-auto bg-white p-10 rounded-xl">
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

        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            From
          </label>
          <input
            name="company"
            type="date"
            className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            To
          </label>
          <input
            name="company"
            type="date"
            className="w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleNumber0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Rooms
            </label>
            <input
              type="number"
              min="0"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleNumber0"
              placeholder=""
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleNumber0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Adults
            </label>
            <input
              type="number"
              min="0"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleNumber0"
              placeholder=""
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleNumber0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Children
            </label>
            <input
              type="number"
              min="0"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleNumber0"
              placeholder=""
            />
          </div>
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

export default SearchTransfers;
