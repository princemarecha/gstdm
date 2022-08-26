import React, { Component } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';
import img1 from "./../public/images/slide-01-copy.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import { faCalendar, faHouse, faLocation } from '@fortawesome/free-solid-svg-icons';
import Tab2 from './../components/tab2';
import CartComp from './../components/CartComp';
import NextLink from "next/link";

class Cart extends Component {
    render() {
        return (
    <div>
            <Header />
<div className= "grid grid-cols-12 ">
            <div className="col-span-9 pl-8">
   
          
        <header className="bg-gray-50" >
              <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 shadow-xl" >
                <div className="sm:justify-between sm:items-center sm:flex " >
                  <div className="text-center sm:text-left flex " >
                  <div className='pr-4'><Image
      src={img1}
      alt="Picture of the author"
      width="200px"
      height="150px"

      className='rounded'
    />
    </div>
    <div>
                    <h1 className="text-1xl font-bold text-green-600 light:text-green-200 sm:text-2xl pt-6"  >           
                    <FontAwesomeIcon icon={faHouse} />
                     New Ambassador Hotel
                     
                    </h1>
                    <div className='pb-10             '></div>
                    <p className='pb-2 text-sm'>
                    <FontAwesomeIcon icon={faLocation}  className='mr-2'/>
                    Harare, Harare
                  </p>
                  <p className='pb-2 text-sm'>
                    <FontAwesomeIcon icon={faCalendar} className='mr-2'/>
                    From 08/17/21(Wednesday) - 08/28/21(Wednesday)
                    </p>
                
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">
                    <button
                      className="inline-flex items-center justify-center px-5 py-3 text-gray-500 transition bg-white border border-gray-200 rounded-lg hover:text-gray-700 focus:outline-none focus:ring"
                      type="button"
                    >
                      <span className="text-sm font-medium"> View Rooms </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        //stroke-width="2"
                      >
                        <path 
                          //stroke-linecap="round"
                          //stroke-linejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>

                    <button
                      className="block px-5 py-3 text-sm font-medium text-white transition bg-red-600 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring"
                      type="button"
                    >
                      Delete Product
                    </button>
                  </div>
                </div>
              </div>
            </header>
<div className='border-b'></div>
              <div className='pt-6 pl-3'>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-gray-400 ">Remarks </label>

              <p className='text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search htmlFor  will uncover many web sites still in their infancy.</p>
              </div>
              <br></br>
              <label htmlFor="message" className="block font-medium text-green-500 light:text-green-200 mb-2 mt-4 pl-8">Requests For the accomodation</label>
              
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-4 pl-8">For reference only, Hotelbeds Can not guarante them</label>

              <div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3  lg:divide-x m-4 pl-8">
                <div className="flex items-center mb-1"  >
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Double bed</label>
                </div>
                <div className="flex items-center mb-1">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Two beds</label>
                </div>
                <div className="flex items-center mb-1">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Client without voucher</label>
                </div>
                <div className="flex items-center mb-1"  >
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Smoking room</label>
                </div>
                <div className="flex items-center mb-1">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Non-smoking room</label>
                </div>
                <div className="flex items-center mb-1">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Honeymooon</label>
                </div>
                <div className="flex items-center mb-1"  >
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Adjacent room</label>
                </div>
                <div className="flex items-center mb-1">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Except ground floor</label>
                </div>
                <div className="flex items-center mb-1">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Late arrival</label>
                </div>
              </div>

              <br></br>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-gray-400 pl-8 mt-8 mb-6">Comments</label>
              <div className='pl-12'>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
         
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300  mt-2 italic">character remaining:1000</label>
              </div>
              <br></br>
              <div className='border-b'></div>
<br></br>
<label htmlFor="message" className="block mb-2  font-medium text-green-500 light:text-green-200">1 x Single Standard, Room Only, 1 Adult, 0 Children</label>

<div className="bg-white py-6 sm:py-8 lg:py-12">
<label htmlFor="message" className="block mb-2  font-medium text-gray-900 dark:text-gray-400 pb-2 italic">Cancellation Fees</label>
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-10 sm:gap-y-12 lg:divide-x">
  
      <div className="flex flex-col items-left gap-4 md:gap-6 sm:px-4 lg:px-8">
        <div className="text-gray-600 text-left italic">“This is a section of some simple filler text, also known as placeholder text.”</div>
      </div>

      <div className="flex flex-col items-left gap-4 md:gap-6 sm:px-4 lg:px-8">
        <div className="text-gray-600 text-left italic">Date and time are calculated based on local time in the destination.In case of no-show, different fees will apply.Please refer to our T&C.</div>
      </div> 
  <div/>
      </div>

      <div className='border-b'></div>
      <div className=" py-8 px-2 border-x">
        <p className='font-medium'>Discount</p>
  <label htmlFor="message" className="block mb-1 font-bold text-gray-900 dark:text-gray-400 text-right">Total net amount : 11.243 ZAR</label>
  </div>

      <div className=" py-6 px-2">
      <p className='font-medium'>Supplement</p>
  <label htmlFor="message" className="block mb-1  font-bold text-gray-900 dark:text-gray-400 text-right">Total net amount : 11.243 ZAR</label>
  </div>

  <div className="bg-gray-300 py-6 px-2 shadow-xl">
   
  <label htmlFor="message" className="block mb-2 font-extrabold  text-gray-900 dark:text-gray-400 text-right">Total net amount : 11.243 ZAR</label>
  </div>
      </div>


  <br></br>
  <label htmlFor="message" className="block mb-2  font-medium text-gray-700 dark:text-white-400 text-left">Payment Details</label>
 

  <div className="bg-gray-200 pb-4 shadow-xl">
    <div className='m-8'>
  <div className=" py-6 px-2 grid sm:grid-cols-2 lg:grid-cols-2 gap-y-1 lg:divide-x">
                <div className="flex items-center mb-1"  >
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Enter the lead passenger data only </label>
                </div>
                <div className="flex items-center mb-1"  >
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
                  <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">Enter the data for all passengers</label>
                </div>
                </div>
  <label htmlFor="message" className="block mb-4 text-sm font-medium  text-gray-500 text-left ml-6">Lead Passenger</label>
 
    <div className="grid gap-6 mb-6 md:grid-cols-2 ml-8">
        <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Name - Adult</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Surname - Adult</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-500  text-left">Booking Details</label>
 <br></br>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Agency - reference</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
                </div>
               </div>
                </div>

  <label htmlFor="message" className="block mb-6 mt-20 font-medium  text-gray-900 dark:text-gray-400 text-left">Booking Confirmation</label>
  <div className="bg-gray-300 py-6 px-2 shadow-xl">
  <Tab2/>
  <div className='mt-3'></div>

  
  <form className='mt-6 mx-16 px-16' >
  <p  className='pt-6  mt-6 font-medium  text-gray-500 mb-3'>Your Details (the one who is booking)</p>
  <hr/>
  <div className='mt-6'></div>
    
    <label htmlFor='hname' className='mr-3 text-sm'>Name</label>
    <input id='hname' className='p-2 mr-16 rounded-md text-sm' placeholder='Your Name'></input>
    <label htmlFor='sname' className='mr-3 text-sm'>Surname</label>
    <input id='hname' className='p-2 mr-3 mb-3 rounded-md text-sm' placeholder='Your Surname'></input>
<hr/>
    <p  className='pt-6  mt-6 font-medium  text-gray-500 mb-3'>Card Details</p>
<hr/>
<div className='mt-3'></div>
    <label htmlFor='cname' className='mr-3 text-sm '>Card Holder Name</label>
    <input id='cname' className='p-2 mr-16 rounded-md my-3 text-sm' placeholder='Your Name'></input>
    <label htmlFor='csname' className='mr-3 text-sm'>Card Holder Surname</label>
    <input id='csname' className='p-2 mr-3 rounded-md my-3 text-sm' placeholder='Your Surname'></input>

    <br/><label htmlFor='cardt' className='mr-3 text-sm'>Card Type</label>
    <select  className='p-2 mr-3 rounded-md my-3 text-sm'id=''>
      <option>Visa</option>
      <option>MasterCard</option>
    </select>

    <br/><label htmlFor='cardn' className='mr-3 text-sm'>Card Number</label>
    <input id='cardn' className='p-2 mr-16 rounded-md my-3 text-sm' type='number' placeholder='45447-37593-65677-45435'></input>

    <label htmlFor='cardn' className='mr-3 text-sm'>Card CVC</label>
    <input id='cardn'  className='p-2 mr-3 rounded-md my-3 text-sm 'type='number' placeholder='123'></input>
<hr/>
    <p className='pt-6  mt-6 mb-3 font-medium  text-gray-500 '>Contact Details</p>
    <hr/>
    <div className='mt-3'></div>

    <label htmlFor='cardn' className='mr-3 text-sm'>Email</label>
    <input id='cardn' className='p-2 mr-16 rounded-md my-3 text-sm' type='email' placeholder='email@example.com'></input>
    
    <label htmlFor='cardn' className='mr-3 text-sm'>Phone Number</label>
    <input id='cardn'  className='p-2 mr-3 rounded-md my-3 text-sm 'type='number' placeholder='+263 77777777'></input>
    <hr/>
    <button className="inline-block bg-gray-700 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-center rounded-lg px-8 py-3 text-white mt-8 mr-1">Submit</button>
    <a className="border-4">
    <NextLink href='/tsandcs'>
    <button className="inline-block bg-gray-700 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-center rounded-lg px-8 py-3 text-white mt-8 float-right">Terms and Conditions</button>
    </NextLink>
    </a>
  </form>
  </div>
                
  </div>
  </div>
  

  <div className="col-span-3">
  <CartComp/>  

  </div>

<br></br>
 <br></br> 

 
</div>
<div>

</div>



          <Footer />
          </div>
 
        );
    };
};
export default Cart;