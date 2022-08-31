import React from 'react';
import Toggle from './toggle';


const ResultsItems = ({hotel}) => {

    const perks = hotel.perks;
    const icons = hotel.icons;

    return (
        <div>
            <a href="#">
          <div
              className="md:grid grid-flow-row-dense grid-cols-4 grid-row-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div className="w-full mt-1 ml-1 flex">
              <img src={hotel.url} alt=""/>
              <button className="absolute float-right mt-4 mr-2 left-5">
              <Toggle/>
              </button>
              </div>
              
                <div className="text-sm p-6 col-span-2">
                  <h3 className="font-bold text-base flex">{hotel.title}
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
    </svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
                  </h3>
                  
                  
                  
                  <div className="flex items-center">
                    <span className="font-semibold">{hotel.city}, </span> {hotel.place}
                  </div>

                  <div className="list-disc pl-0">
                  {perks.map((value, index)=>{   
          return(
                  <p className='pr-5'>{icons[index]} {value}</p>
        )
      })}
      </div>
                  
                  <div className="flex mb-0 bottom-0">
                  <div className="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Map
                  </div>
                  <div className="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Images
                  </div>
                  <div className="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Description
                  </div>
                  <div className="bg-slate-300 mx-1 bottom-0 -mb-6 mt-3 p-1">
                    Opinions
                  </div>
                  </div>
                </div>
              

              <div className="bg-cyan-100">
             <p className="text-blue-700 font-semibold p-3 text-sm">3 x Suite Double Garden Suite</p>
             <p className="px-3 pb-3 text-sm"><i className="fa fa-info-circle" aria-hidden="true"></i> Non refundable</p>
             <div className="bg-blue-700 text-white w-2/3 m-auto font-semibold py-1 text-center text-lg">
             {hotel.currency} {hotel.rate}
             </div>
             <div className="flex justify-between items-center">
        <button className="m-auto inline-block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-8 py-2 mt-2">Add to cart</button>
      </div>
            </div>
            </div>
            </a>
        </div>
    )
}

export default ResultsItems
