import React,{useState} from 'react';
import CryptoJS from 'crypto-js';
import Header from '../../components/header';
import {faLocation, faMapLocation, faPhone, faSquareCheck, faStar, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Footer from '../../components/footer';
import LeftArrow from './../../public/images/left-arrow.png';
import RightArrow from './../../public/images/right-arrow.png';
import Link from 'next/link';


const HotelScreen = (status) => {


    const[bruh2, setBruh2]=useState(6);

    const[pics, setPics] = useState(path0);
 

    function Pictures(arg) {
        setPics(arg)
    }

    const showmore = () => {
        setBruh2()
    }
    
    const showless = () => {
        setBruh2(6)
    }


    const[left, setLeft] = useState(0);
    const[right, setRight] = useState(4);
    
    function slideLeft() {
        if(left == 0){
            setLeft(left);
            setRight(right);
        }
        else{
            setLeft(left -1);
            setRight(right -1);
        }

    }

    function slideRight() {
        if(right == status.status.hotel.images.length){
            setLeft(left);
            setRight(right);
        }
        else{
            setLeft(left + 1);
            setRight(right + 1);
        }
    }

    const rating = [];
    for (let i = 0; i < parseInt(status.status.hotel.S2C[0]); i++) {
        rating.push(<FontAwesomeIcon icon={faStar} />);
    }

    

    var coords = "https://maps.google.com/maps?q="+status.status.hotel.coordinates.latitude+",%20"+status.status.hotel.coordinates.longitude+"&t=&z=13&ie=UTF8&iwloc=&output=embed";

    var path0 = 'https://photos.hotelbeds.com/giata/' + status.status.hotel.images[0].path;
   
    var real = 'https://photos.hotelbeds.com/giata/';
 
    console.log(status);

  return (
    <div>
    <div>
        <Header />
        </div>
        <div className='px-24'>
        
                    <section className='grid grid-cols-12'>
                        <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 col-span-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
                                <div   className="relative z-10 lg:py-16 grid">
                                    <div className="relative h-64 sm:h-80 lg:h-full" id="image">
                                    <Image src={pics ? pics : path0} alt="Picture of the hotel" width="900px" height="700px" className='rounded'/>
                                    </div>
                                    <div className='flex'>
                                    <button onClick={slideLeft}>
                                        <Image
                                            src={LeftArrow}
                                            alt="right"
                                            width="200px"
                                            height="200px"
                                        />
                                    </button>
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-1 sm:gap-y-1 lg:divide-xm" >
                                    {/* start of map images code */}

                                    {status.status.hotel.images.slice(left, right).map((hotell)=>(
                       <div key={hotell.path.visualOrder}>
                            <div>
                             <Image src={real + hotell.path} alt="Picture of the hotel" width="300px" height="200px" className='rounded' onClick={() => Pictures(real + hotell.path)} key={hotell.path.visualOrder}/>    
                      </div>
                        </div>
  
                ))}
                                    {/* end of map images code */}
                                        </div>
                                        <button onClick={slideRight}>
                                            <Image
                                                src={RightArrow}
                                                alt="right"
                                                width="200px"
                                                height="200px"
                                            />
                                        </button>
                                        </div>
                                        <div>

                                        </div>
                                </div>

                                <div className="relative flex items-center bg-blue-50">
                                    <span
                                        className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-blue-50 lg:block lg:-left-16"
                                    ></span>

                                    <div className="p-8">
                                        <h2 className="text-4xl font-bold ">
                                        {status.status.hotel.name.content}
                                        </h2>

                                        <br></br>

                                        <div className="flex items-center mb-1"  >  
                                        {rating}                  
                                     </div>

                                   <br></br>

                                     <FontAwesomeIcon icon={faLocation} />   {status.status.hotel.city .content}

                                        <p className="mt-4 text-gray-600 text-justify overflow-y-scroll h-72 pr-3">
                                        {status.status.hotel.description.content}
                                        </p>

                                        <a
                                            className="inline-block px-12 py-3 mt-24 text-sm font-medium text-white bg-yellow-500 border border-indigo-500 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600"
                                            href="/contact"
                                        >
                                            <FontAwesomeIcon icon={faTicket} />
                                            &nbsp; Check Availability 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </section>
            
                <br></br>
    

            <div className='bg-white-200 shadow-2xl' id="description">
            <label htmlFor="message" className="block mb-2 font-medium bg-yellow-500 text-zinc-50 text-left p-3">{status.status.hotel.name.content}</label>
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
                  </ul>
                  </div>
                  </div>        
            </div>
            <br></br>


            <div className='bg-blue-50 p-3 mt-4 shadow-lg' >
            <label htmlFor="message" className="block mb-2 bg-yellow-500 font-large font-extrabold text-gray-100 text-left pb-2 pl-2">CONTACT DETAILS</label>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-5 sm:gap-y-6 lg:divide-x">

                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faSquareCheck} />
                <label className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"> {status.status.hotel.categoryGroup.description.content}</label>
                    </div>
            <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faSquareCheck} />
                <label  className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.destination.name.content}</label>
                    </div>
                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faSquareCheck} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.zone.description.content}</label>
                    </div>
                    <div className="flex items-center mb-1"  >
                <FontAwesomeIcon icon={faSquareCheck} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.zone.zoneCode}</label>
                    </div>
                    {status.status.hotel.phones.map((hotell)=>(
                       <div key={hotell.code}>
                            <div className="flex items-center mb-1"  >
                                <FontAwesomeIcon icon={faPhone} />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">
                            {hotell.code }  {hotell.phoneNumber}
                            
                                </label>                    
                      </div>
                        </div>
  
                ))}

                    </div>               
            </div>
            <br></br>

            <div className='bg-blue-50 p-3 shadow-xl' >

         <label htmlFor="message" className="block mb-2 bg-yellow-500 font-large font-extrabold text-gray-100 text-left pb-2 pl-2">FACILITIES</label>
         
         <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-5 sm:gap-y-6 lg:divide-x">
         {status.status.hotel.facilities.slice(0,bruh2).map((hotell)=>(
                       <div key={hotell.code}>
                            <div className="flex items-center mb-1"  >
                                <FontAwesomeIcon icon={faSquareCheck} />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">
                             {hotell.description.content}
                                </label>                
                      </div>
                        </div>
  
                ))}

                <button></button>
                <div>

                </div>
                {(bruh2 === 6) ? <button onClick={showmore} className="inline-block px-12 py-3 mt-5 text-sm font-medium text-white bg-yellow-500 border border-indigo-500 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600">Show More</button>: <button onClick={showless} className="inline-block px-12 py-3 mt-5 text-sm font-medium text-white bg-yellow-500 border border-indigo-500 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600">Show Less</button>}
                 
            </div>
            <br></br>
            
            </div>
             <br></br>

             

            <div className='p-3 mt-4 shadow-lg' id="map" >
            <label htmlFor="message" className="block mb-2   font-medium text-gray-900 dark:text-gray-400 text-left">Map</label>
           
            <a className="inline-block px-12 py-3 mt-5 text-sm font-medium text-center text-white"
                href="/contact">
                
                {/*start of google maps code*/}
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="950" height="500" id="gmap_canvas" src={coords} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
                {/*end of google maps code*/}
                    
                    <FontAwesomeIcon icon={faMapLocation} /> 
                    Location
            </a>            
            
 
            </div>
            

            <div className='pt-16 mx-4'>
            </div>
        </div>
        <div>
            <Footer/>
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
