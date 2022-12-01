import React, { Component, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';
import thumb from "./../public/images/thumb.jpg";
import Nearby from './../components/nearby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import { faCalendar, faDotCircle, faHouse, faLocation, faMap } from '@fortawesome/free-solid-svg-icons';
import { cartNum } from '../Helper/Context';


const Hotel = () => {
    const [cartNumber, setCartNumber] = useState([]);
  return (

    <div>
        <cartNum.Provider value={{cartNumber, setCartNumber}}>
                <div className="sticky top-0 z-10">
            <Header/>
            </div>
        </cartNum.Provider>
                <div >
                    <section className='grid grid-cols-12'>
                        <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 col-span-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
                                <div className="relative z-10 lg:py-16 ">
                                    <div className="relative h-64 sm:h-80 lg:h-full">
                                        <Image
                                            src={thumb}
                                            alt="Picture of the author"
                                            width="1000px"
                                            height="700px" />
                                    </div>
                                </div>

                                <div className="relative flex items-center bg-gray-100">
                                    <span
                                        className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
                                    ></span>

                                    <div className="p-8 ">
                                        <h2 className="text-4xl font-bold ">
                                        New Ambassador Hotel​
                                        </h2>

                                        <p className="mt-4 text-gray-600 text-justify">
                                        Located in the Central Business District of Harare, the New Ambassador hotel is an ideal business hotel. It is within walking distance of all the main financial, commercial and government institutions. The hotel is also within easy reach of shops, cinemas, restaurants, the National museum and Art Gallery
                                        </p>

                                        <a
                                            className="inline-block px-12 py-3 mt-24 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                                            href="/contact"
                                        >
                                            <FontAwesomeIcon icon={faMap} />
                                            Show Map
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </section>
                </div>
           
            <br></br>
            <div className='px-24 '>

            <div className='bg-white-200 shadow-2xl ' >
            <label htmlFor="message" className="block mb-2 font-medium bg-stone-700 text-zinc-50 text-left p-3">The Hotel</label>
            <div className='grid grid-cols-12'>
                <div className='p-3 col-span-8'>
            <p className='mx-12 text-slate-500 mb-4 text-sm text-justify'>RTG Virtual is a partnership platform between RTG and selected hotels in Zimbabwe in areas where RTG has few or no properties. This innovative one stop shop, allows RTG to process bookings on behalf of quality approved local partners. Partner hotels can be found in the Eastern Highlands, Masvingo, Hwange, Kariba, Victoria Falls, Harare and its environs. This foot print will continue to grow. RTG Virtual offers guests, wider choice, convenience and a competitive product portfolio through the one stop shop RTG Central Reservations.
                <br/>
             
             </p> </div>
                  <div className='ml-24 p-3 col-span-4 text-sm text-slate-500'>
                  <ul>
                    <li style={{listStyleType:'square'}}>Year of Construction 2022</li>
                    <li style={{listStyleType:'square'}}>Most Recent Innovation 2022</li>
                    <li style={{listStyleType:'square'}}>Total Number of rooms</li>
                    <li style={{listStyleType:'square'}}>Number of floors (3)</li>
                  </ul>
                  </div>
                  </div>        
            </div>
            <br></br>
            <div className='bg-gray-200 p-3 mt-4 shadow-lg' >
            <label htmlFor="message" className="block mb-2   font-medium text-gray-900 dark:text-gray-400 text-left">Key Points</label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-6 lg:divide-x">
                <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faDotCircle} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Double bed</label>
                    </div>
                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faDotCircle} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Double bed</label>
                    </div>
                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faDotCircle} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Double bed</label>
                    </div>
                    </div>               
            </div>
            <br></br>
            <div className='bg-gray-100 p-3 shadow-xl' >
            <label htmlFor="message" className="block mb-2  font-medium text-gray-900 dark:text-gray-400 text-left pb-2">Establishment Profile</label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-6 lg:divide-x">
                <div className="flex items-center mb-1 ml-2"  >
                <FontAwesomeIcon icon={faDotCircle} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80 pb-2">Double bed</label>
                    </div>
                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faDotCircle} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Double bed</label>
                    </div>
                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faDotCircle} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Double bed</label>
                    </div>
                    </div>               
            </div>
            </div>
<br></br>
    <div className='pt-16 mx-4 '>
    <label htmlFor="message" className="px-6 py-6 font-bold text-3xl" style={{color:'#7393B3'}}>Nearby Hotels</label>
    </div>
<Nearby/>
             <br></br>


            <Footer />
          </div>
 
  )
}

export default Hotel

