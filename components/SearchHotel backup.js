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
     <div className="grid grid-cols-3 gap-2 col-span-full" id="searchMult">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleNumber1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Rooms
            </label>
            
            <select 
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleNumber1"
             onChange={e=>multiplyRooms(e.target.value)}
            >
            {
 
            arr.map((item) =>{
              return( 
                <option value={item} key={item}>{item}</option>
              )
            }
            )}
            </select>
          </div>
        </div>
   
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label
                htmlFor="exampleNumber2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Adults
              </label>
            <select
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleNumber2" 
              ><option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label
                htmlFor="exampleNumber3"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Children
              </label>
              <select
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleNumber3"
              ><option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              </select>
            </div>
          </div>

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
