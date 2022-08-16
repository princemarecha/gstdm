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
            
  <div
    class="flex flex-col sm:flex-row sm:h-20 px-6 border-b border-gray-300 bg-white relative z-50"
  >
    <div
      class="w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex"
    >
    <form class="relative w-full flex">
        <input
          type="search"
          class="w-full max-w-full border border-gray-300 rounded-sm pr-4 pl-10 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
          placeholder="Search for something..."
        />
        <button class="inline-flex bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Search</button>
      </form>
    </div>
  </div>
  <div class="w-full flex flex-col lg:flex-row lg:px-6">
    <div class="w-full lg:w-56 relative">
      <div
        class="py-3 bg-white w-full flex items-center justify-center lg:hidden cursor-pointer font-bold"
      >
        Change Filters
        
      </div>
      
      <div
        class="hidden absolute left-0 px-6 lg:px-auto bg-white w-full lg:w-auto z-50 mt-10 lg:mt-0 lg:sticky top-0 pt-6 pb-24 lg:flex flex-col lg:max-h-screen"
      >
        <div class="border-b border-gray-300">
          <a class="text-sm font-bold"
            >Change Region</a
          >
          <div class="my-6">
            <div class="">
              <div class="">
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    class="appearance-none w-6 h-6 border border-gray-300 outline-none cursor-pointer checked:bg-blue-400"
                    id="delivery-service"
                    value="delivery"
                    checked=""
                  /><label class="ml-2 text-sm" for="delivery-service"
                    >East Asia</label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    class="appearance-none w-6 h-6 border border-gray-300 outline-none cursor-pointer checked:bg-blue-400"
                    id="curbside-service"
                    value="curbside"
                  /><label class="ml-2 text-sm" for="curbside-service"
                    >West Europe</label
                  >
                </div>
                <div class="flex items-center mb-3 last:mb-0">
                  <input
                    name="service"
                    type="checkbox"
                    class="appearance-none w-6 h-6 border border-gray-300 outline-none cursor-pointer checked:bg-blue-400"
                    id="orderin-service"
                    value="orderin"
                  /><label class="ml-2 text-sm" for="orderin-service"
                    >North America</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 lg:overflow-y-scroll">
          <div class="border-b border-gray-300 py-6">
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
          </div>
        </div>
      </div>
  
    </div>
    <div class="w-full lg:px-6 mb-10">
    <div class="lg:pl-12 py-6 px-6 lg:px-0">
      <div class="mt-12">
        <h1 class="text-3xl font-bold">Your search results</h1>
        <div class="mt-12">

          <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-2/3 mt-1 ml-1">
              <Image
      src={img1}
      alt="Picture of the author"
    />
              </div>
              
              <div class="p-6">
              
                <div class="text-sm">
                  <h3 class="font-bold text-base">Victoria Falls</h3>
                  
                  <div class="flex items-center">
                    0001
                  </div>
                  <p class="font-semibold">$900</p>
                  <p class="mt-1">
                    <span>Luxury Hotel · </span><span>Breakfast · </span
                    ><span>Dinner · </span><span>Pool </span>
                  </p>
                  <p>1500 km away</p>
                </div>
              </div>

              <div class="grid grid-cols-1 grid-rows-2">
              <div>
            <i class="fa-regular fa-heart text-red-500  fa-xl float-right mt-9 mr-10" ></i>
            </div>
            <div>
              <p class="float-right mr-10 text-green-400">4.7</p>
            </div>
            </div>

            </div></a>



            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-2/3 mt-1 ml-1">
              <Image
      src={img2}
      alt="Picture of the author"
    />
              </div>
              
              <div class="p-6">
              
                <div class="text-sm">
                  <h3 class="font-bold text-base">Maldives</h3>
                  
                  <div class="flex items-center">
                    0002
                  </div>
                  <p class="font-semibold">$1500</p>
                  <p class="mt-1">
                    <span>Luxury Hotel · </span><span>Breakfast · </span
                    ><span>Dinner · </span><span>Pool </span>
                  </p>
                  <p>100 km away</p>
                </div>
              </div>

              <div class="grid grid-cols-1 grid-rows-2">
              <div>
            <i class="fa fa-heart text-red-500 fa-xl float-right mt-9 mr-10" aria-hidden="true"></i>
            </div>
            <div>
              <p class="float-right mr-10 text-green-400">4.6</p>
            </div>
            </div>

            </div></a>



            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-2/3 mt-1 ml-1">
              <Image
      src={img3}
      alt="Picture of the author"
    />
              </div>
              
              <div class="p-6">
              
                <div class="text-sm">
                  <h3 class="font-bold text-base">Sweden</h3>
                  
                  <div class="flex items-center">
                    0003
                  </div>
                  <p class="font-semibold">$700</p>
                  <p class="mt-1">
                    <span>Luxury Hotel · </span><span>Breakfast · </span
                    ><span>Dinner · </span><span>Pool </span>
                  </p>
                  <p>500 km away</p>
                </div>
              </div>

              <div class="grid grid-cols-1 grid-rows-2">
              <div>
            <i class="fa fa-heart text-red-500 fa-xl float-right mt-9 mr-10" aria-hidden="true"></i>
            </div>
            <div>
              <p class="float-right mr-10 text-green-400">4.5</p>
            </div>
            </div>

            </div></a>



            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-2/3 mt-1 ml-1">
              <Image
      src={img4}
      alt="Picture of the author"
    />
              </div>
              
              <div class="p-6">
              
                <div class="text-sm">
                  <h3 class="font-bold text-base">Toronto</h3>
                  
                  <div class="flex items-center">
                    0004
                  </div>
                  <p class="font-semibold">$800</p>
                  <p class="mt-1">
                    <span>Luxury Hotel · </span><span>Breakfast · </span
                    ><span>Dinner · </span><span>Pool </span>
                  </p>
                  <p>600 km away</p>
                </div>
              </div>

              <div class="grid grid-cols-1 grid-rows-2">
              <div>
            <i class="fa fa-heart text-red-500 fa-xl float-right mt-9 mr-10" aria-hidden="true"></i>
            </div>
            <div>
              <p class="float-right mr-10 text-green-400">4.8</p>
            </div>
            </div>

            </div></a>




            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-2/3 mt-1 ml-1">
              <Image
      src={img5}
      alt="Picture of the author"
    />
              </div>
              
              <div class="p-6">
              
                <div class="text-sm">
                  <h3 class="font-bold text-base">Kariba</h3>
                  
                  <div class="flex items-center">
                    0005
                  </div>
                  <p class="font-semibold">$1000</p>
                  <p class="mt-1">
                    <span>Luxury Hotel · </span><span>Breakfast · </span
                    ><span>Dinner · </span><span>Pool </span>
                  </p>
                  <p>100 km away</p>
                </div>
              </div>

              <div class="grid grid-cols-1 grid-rows-2">
              <div>
            <i class="fa fa-heart text-red-500 fa-xl float-right mt-9 mr-10" aria-hidden="true"></i>
            </div>
            <div>
              <p class="float-right mr-10 text-green-400">4.2</p>
            </div>
            </div>

            </div></a>




            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-2/3 mt-1 ml-1">
              <Image
      src={img6}
      alt="Picture of the author"
    />
              </div>
              
              <div class="p-6">
              
                <div class="text-sm">
                  <h3 class="font-bold text-base">Great Pyramids</h3>
                  
                  <div class="flex items-center">
                    0006
                  </div>
                  <p class="font-semibold">$1200</p>
                  <p class="mt-1">
                    <span>Luxury Hotel · </span><span>Breakfast · </span
                    ><span>Dinner · </span><span>Pool </span>
                  </p>
                  <p>200 km away</p>
                </div>
              </div>

              <div class="grid grid-cols-1 grid-rows-2">
              <div>
            <i class="fa fa-heart text-red-500 fa-xl float-right mt-9 mr-10" aria-hidden="true"></i>
            </div>
            <div>
              <p class="float-right mr-10 text-green-400">4.3</p>
            </div>
            </div>

            </div></a>




            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-2/3 mt-1 ml-1">
              <Image
      src={img7}
      alt="Picture of the author"
    />
              </div>
              
              <div class="p-6">
              
                <div class="text-sm">
                  <h3 class="font-bold text-base">Norway</h3>
                  
                  <div class="flex items-center">
                    0007
                  </div>
                  <p class="font-semibold">$800</p>
                  <p class="mt-1">
                    <span>Luxury Hotel · </span><span>Breakfast · </span
                    ><span>Dinner · </span><span>Pool </span>
                  </p>
                  <p>400 km away</p>
                </div>
              </div>

              <div class="grid grid-cols-1 grid-rows-2">
              <div>
            <i class="fa fa-heart text-red-500 fa-xl float-right mt-9 mr-10" aria-hidden="true"></i>
            </div>
            <div>
              <p class="float-right mr-10 text-green-400">4.5</p>
            </div>
            </div>

            </div></a>



            <a href="#">
          
          <div
              class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-x-1 m-3 cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-full max-w-full border border-gray-300 rounded-sm bg-white"
            >
            
              <div class="w-2/3 mt-1 ml-1">
              <Image
      src={img8}
      alt="Picture of the author"
    />
              </div>
              
              <div class="p-6">
              
                <div class="text-sm">
                  <h3 class="font-bold text-base">Mexico</h3>
                  
                  <div class="flex items-center">
                    0008
                  </div>
                  <p class="font-semibold">$700</p>
                  <p class="mt-1">
                    <span>Luxury Hotel · </span><span>Breakfast · </span
                    ><span>Dinner · </span><span>Pool </span>
                  </p>
                  <p>300 km away</p>
                </div>
              </div>

              <div class="grid grid-cols-1 grid-rows-2">
              <div>
            <i class="fa fa-heart text-red-500 fa-xl float-right mt-9 mr-10" aria-hidden="true"></i>
            </div>
            <div>
              <p class="float-right mr-10 text-green-400">4.6</p>
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