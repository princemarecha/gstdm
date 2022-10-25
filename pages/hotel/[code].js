import React from 'react'
import {useRouter} from 'next/router'
import CryptoJS from 'crypto-js';
import thumb from "../../public/images/thumb.jpg"
import Header from '../../components/header';
import { faBars, faCalendar, faCheck, faDotCircle, faHouse, faLocation, faMap, faMapLocation, faMoneyBill, faPhone, faSquare, faSquareCheck, faStar, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Nearby from "../../components/nearby"
import Footer from '../../components/footer';
//import { Carousel } from 'react-responsive-carousel';

const HotelScreen = (status) => {



    var path = 'https://photos.hotelbeds.com/giata/' + status.status.hotel.images[0].path;
    var path1 = 'https://photos.hotelbeds.com/giata/' + status.status.hotel.images[1].path;
    var path2 = 'https://photos.hotelbeds.com/giata/' + status.status.hotel.images[2].path;
    var path3 = 'https://photos.hotelbeds.com/giata/' + status.status.hotel.images[3].path;
    var path4 = 'https://photos.hotelbeds.com/giata/' + status.status.hotel.images[4].path;
    //console.log(status.status.hotel.name.content);
    console.log(status);
  return (
    <div>
        <Header />
        <div className='px-24 '>
        
                    <section className='grid grid-cols-12'>
                        <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 col-span-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
                                <div   className="relative z-10 lg:py-16 grid">
                                    <div className="relative h-64 sm:h-80 lg:h-full">
                                        <Image src={path3} alt="  Picture of the author " width="900px" height="700px" className='rounded' />  
                                    </div>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-1 sm:gap-y-1 lg:divide-xm" >
                                    <Image src={path4} alt="  Picture of the author " width="300px" height="200px"className='rounded'/>
                                    <Image src={path1} alt="  Picture of the author " width="300px" height="200px"className='rounded'/>
                                    <Image src={path2} alt="  Picture of the author " width="300px" height="200px"className='rounded'/>
                                    <Image src={path} alt="  Picture of the author " width="300px" height="200px"className='rounded'/>
                                        </div>  
                                        <div>

                                        </div>
                                </div>

                                <div className="relative flex items-center bg-blue-50">
                                    <span
                                        className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-blue-50 lg:block lg:-left-16"
                                    ></span>

                                    <div className="p-8 ">
                                        <h2 className="text-4xl font-bold ">
                                        {status.status.hotel.name.content}
                                        </h2>

                                        <br></br>

                                        <div className="flex items-center mb-1"  >  
                                        <FontAwesomeIcon icon={faStar} />   {status.status.hotel.S2C}
                                                                    
                                     </div>

                                   <br></br>

                                     <FontAwesomeIcon icon={faLocation} />   {status.status.hotel.city .content}

                                        <p className="mt-4 text-gray-600 text-justify">
                                        {status.status.hotel.description.content}
                                        </p>

                                        <a
                                            className="inline-block px-12 py-3 mt-24 text-sm font-medium text-white bg-blue-300 border border-indigo-500 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                                            href="/contact"
                                        >
                                            <FontAwesomeIcon icon={faTicket} /> 
                                            Book 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </section>
            
                <br></br>
    

            <div className='bg-white-200 shadow-2xl ' >
            <label htmlFor="message" className="block mb-2 font-medium bg-blue-300 text-zinc-50 text-left p-3">{status.status.hotel.name.content}</label>
            <div className='grid grid-cols-12'>
                <div className='p-3 col-span-8'>
            <p className='mx-12 text-slate-500 mb-4 text-sm text-justify'>
            {status.status.hotel.description.content}
             </p> </div>
                  <div className='ml-24 p-3 col-span-4 text-sm text-slate-500'>
                  <ul>
                    <li style={{listStyleType:'square'}}> {status.status.hotel.city.content}</li>
                    <li style={{listStyleType:'square'}}> {status.status.hotel.country.code}</li>
                    <li style={{listStyleType:'square'}}> {status.status.hotel.state.code}</li>
                    <li style={{listStyleType:'square'}}> {status.status.hotel.state.name}</li>
                    <li style={{listStyleType:'square'}}> {status.status.hotel.state.web}</li>
                  </ul>
                  </div>
                  </div>        
            </div>
            <br></br>
            <div className='bg-blue-50 p-3 mt-4 shadow-lg' >
            <label htmlFor="message" className=" mb-2 bg-blue-200  font-large font-extrabold text-gray-900 dark:text-blue-200 text-left">KEY POINTS</label>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-5 sm:gap-y-6 lg:divide-x">

                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faSquareCheck} />
                <label className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"> {status.status.hotel.categoryGroup.description.content}</label>
                    </div>
            <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faSquareCheck} />
                <label  className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.destination.name.content}</label>
                <label  className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.destination.code}</label>
                <label  className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.destination.countryCode}</label>
                    </div>
                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faSquareCheck} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.zone.description.content}</label>
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.zone.zoneCode}</label>
                    </div>
                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faSquareCheck} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.zone.zoneCode}</label>
                    </div>
                <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faPhone} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.phones.postalCode}</label>
                    </div>
                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faPhone} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.phones.ranking}</label>
                    </div>
                    {status.status.hotel.phones.map((hotell)=>(
                       <div key={hotell.code}>
                            <div className="flex items-center mb-1"  >
                                <FontAwesomeIcon icon={faPhone} />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">
                            {hotell.code } - {hotell.phoneNumber}
                            {hotell.code } - {hotell.phoneType}
                                </label>                    
                      </div>
                        </div>
  
                ))}

                    </div>               
            </div>
            <br></br>

            <div className='bg-blue-50 p-3 shadow-xl' >
            <label htmlFor="message"  className="block mb-2 bg-blue-200 font-large font-extrabold text-gray-900 dark:text-gray-400 text-left pb-2">ESTABLISHMENT PROFILE</label>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-5 sm:gap-y-6 lg:divide-x">
                </div>
                <br></br>

         <label htmlFor="message" className="block mb-2  bg-blue-200 font-large font-extrabold text-gray-900 dark:text-gray-400 text-left pb-2">FACILITIES</label>
         
         <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-5 sm:gap-y-6 lg:divide-x">
         {status.status.hotel.facilities.map((hotell)=>(
                       <div key={hotell.code}>
                            <div className="flex items-center mb-1"  >
                                <FontAwesomeIcon icon={faSquareCheck} />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">
                            {hotell.code } - {hotell.description.content}
                                </label>                    
                      </div>
                        </div>
  
                ))}

                      
                 
            </div>
            <br></br>
            <label htmlFor="message" className="block mb-2 bg-blue-200  font-large font-extrabold text-gray-900 dark:text-gray-400 text-left pb-2">ROOMS</label>
         
         <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-5 sm:gap-y-6 lg:divide-x">
         {status.status.hotel.rooms.map((hotell)=>(
                       <div key={hotell.code}>
                            <div className="flex items-center mb-1"  >
                                <FontAwesomeIcon icon={faSquareCheck} />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">
                            {hotell.code } - {hotell.description.content}
                            {hotell.code } - {hotell.characteristic.code}
                            {hotell.code } - {hotell.characteristic.code}
                                </label>                    
                      </div>
                        </div>
  
                ))}

                      
                 
            </div>
            <br></br>
            <label htmlFor="message" className="block mb-2 bg-blue-200 font-large font-extrabold text-gray-900 dark:text-gray-400 text-left pb-2">SEGMENTS</label>
         
         <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-5 sm:gap-y-6 lg:divide-x">
         {status.status.hotel.segments.map((hotell)=>(
                       <div key={hotell.code}>
                            <div className="flex items-center mb-1"  >
                                <FontAwesomeIcon icon={faSquareCheck} />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">
                            {hotell.code } - {hotell.description.content}
                          
                                </label>                    
                      </div>
                        </div>
  
                ))}

                      
                 
            </div>
            </div>
             <br></br>
        

            <div className='bg-blue-100 p-3 mt-4 shadow-lg' >
            <label htmlFor="message" className="block mb-2   font-medium text-gray-900 dark:text-gray-400 text-left">Map</label>
           
            <a
                                            className="inline-block px-12 py-3 mt-24 text-sm font-medium text-center text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                                            href="/contact"
                                        >
                                            <FontAwesomeIcon icon={faMapLocation} /> 
                                            Location
                                        </a>            
            
 
            </div>
            

            

            <div className='pt-16 mx-4 '>
   </div>
   {/*<Nearby/> */}
            <Footer />
    </div>
    </div>
  )
}

export default HotelScreen

export async function getServerSideProps(context){
    
var time = (Math.round(Date.now()/1000));
let soup = `e82df103ad74310fdb6a704cf460189b02d949622b${time}`;
let b = CryptoJS.SHA256(soup);
let x_sig = b.toString(CryptoJS.enc.Hex);

//end x-sig gen

var myHeaders = new Headers();
myHeaders.append("Api-key", "e82df103ad74310fdb6a704cf460189b");
myHeaders.append("X-Signature", x_sig);
myHeaders.append("Accept", "application/json");
myHeaders.append("Accept-Encoding", "gzip");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: 'no-cors'
};

  const code = context.params.code;
  const res = await fetch(`https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/${code}/details?language=ENG&useSecondaryLanguage=False`, requestOptions);
  const data = await res.json();
      // .then((response) => response.json())
      // .then(result => setData(result))
      // .catch(error => console.log('error', error));

    return{
      props:{
        status:data
      }
    }
}
