import React,{useState} from 'react';
import CryptoJS from 'crypto-js';
import Header from '../../components/header';
import {faLocation, faLocationPin, faMapLocation, faPhone, faPhoneSquareAlt, faPlaneArrival, faSquareCheck, faStar, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Footer from '../../components/footer';
import LeftArrow from './../../public/images/left-arrow.png';
import RightArrow from './../../public/images/right-arrow.png';
import Link from 'next/link';
import { cartNum } from '../../Helper/Context';


const HotelScreen = (status) => {


    const[bruh2, setBruh2]=useState(6);

    const[pics, setPics] = useState(path0);

    const [cartNumber, setCartNumber] = useState([]);
 

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
        rating.push(<FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xl px-1" />);
    }

    

    var coords = "https://maps.google.com/maps?q="+status.status.hotel.coordinates.latitude+",%20"+status.status.hotel.coordinates.longitude+"&t=&z=13&ie=UTF8&iwloc=&output=embed";

    var path0 = 'https://photos.hotelbeds.com/giata/' + status.status.hotel.images[0].path;
   
    var real = 'https://photos.hotelbeds.com/giata/';
 
    console.log(status);

  return (
    <div>
    <cartNum.Provider value={{cartNumber, setCartNumber}}>
    <div className="sticky top-0 z-20">
            <Header/>
            </div>
    </cartNum.Provider>
    <div>
    
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
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-1 sm:gap-y-1 lg:divide-xm"  >
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
                                        <h2 className="text-4xl font-bold nameStyle">
                                        {status.status.hotel.name.content}
                                        </h2>

                                        <br></br>

                                        <div className="flex items-center mb-1"  >  
                                        {rating}                  
                                     </div>

                                   <br></br>

                                     <FontAwesomeIcon icon={faLocation} className="text-blue-300 text-2xl "/>   <span className='locationTag'>{status.status.hotel.city .content}</span>

                                        <p className="mt-4 text-gray-600 text-justify overflow-y-scroll h-72 pr-3 locationTag">
                                        {status.status.hotel.description.content}
                                        </p>
                                       
                                        
                                        <button className="mt-3 bg-gray-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-yellow-500 rounded">
                                            <FontAwesomeIcon icon={faTicket} />
                                            &nbsp; <Link  href="/cart"> Check Availability </Link>
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                            </section>
            
                <br></br>
    

            <div className='bg-white-200 shadow-2xl' id="description">
            <label htmlFor="message" className="block mb-2 font-medium bg-yellow-500 nameStyle text-zinc-50 text-left p-3">{status.status.hotel.name.content}</label>
            <div className='grid grid-cols-12'>
                <div className='p-3 col-span-8'>
            <p className='mx-12 text-slate-500 mb-4 text-sm text-justify nameStyle'>
            {status.status.hotel.description.content}
             </p> </div>
                  <div className='ml-24 p-3 col-span-4 text-sm text-slate-500 font-bold mapBanner'>
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


            <label htmlFor="message" className="block mb-2 mapBanner text-center text-4xl font-bold mt-6 text-left pl-2">Contact Details</label>
            <div className='pb-4'>
                    <hr className='visitLine mx-auto border-2 border-black'></hr>
             </div>
            <div className='bg-white p-3 mt-4 shadow-lg' >
         
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-y-3 sm:gap-y-3 lg:divide-x">

                    
            <div className="flex items-center "  >
                <FontAwesomeIcon icon={faPlaneArrival} />
                <label  className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"> {status.status.hotel.destination.name.content} <span className='italic text-xs'>(Destination)</span></label>
                    </div>
                    <div className="flex items-center "  >
                <FontAwesomeIcon icon={faLocationPin} />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">{status.status.hotel.zone.description.content} <span className='italic text-xs'>(Zone Code ({status.status.hotel.zone.zoneCode}))</span></label>
                    </div>
                    {console.log(status.status.hotel.facilities)}
                    {status.status.hotel.phones.map((hotell)=>(
                       <div key={hotell.code}>
                            <div className="flex items-center mb-1"  >
                                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">
                            {hotell.code }  {hotell.phoneNumber}
                            
                                </label>                    
                      </div>
                        </div>
  
                ))}

                    </div>               
            </div>
            <br></br>
   
        <label htmlFor="message" className="block mb-2 mapBanner text-center text-4xl font-bold  text-left pl-2">Facilities</label>
         <div className='pb-4'>
                    <hr className='visitLine mx-auto border-2 border-black'></hr>
        </div>
            <div className='bg-white p-3 shadow-xl' >
         
         <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-y-4 sm:gap-y-4 lg:divide-x">
         {status.status.hotel.facilities.slice(0,bruh2).map((hotell)=>(
                       <div key={hotell.code}>
                            <div className="flex items-center mb-1"  >
                                <FontAwesomeIcon icon={faSquareCheck} />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-small text-gray-450 light:text-gray-80">
                             {hotell.description.content}
                             {hotell.description.number?hotell.description.number:""}
                                </label>                
                      </div>
                        </div>
  
                ))}

                <button></button>
                <div>

                </div>
                {(bruh2 === 6) ? <button onClick={showmore} className="inline-block px-12 py-3 mt-5 text-sm font-medium text-white bg-gray-400 border  rounded active:text-indigo-500 hover:bg-transparent hover:text-black">Show More</button>: <button onClick={showless} className="inline-block px-12 py-3 mt-5 text-sm font-medium text-white bg-yellow-500 border border-indigo-500 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600">Show Less</button>}
                 
            </div>
            <br></br>
            
            </div>
             <br></br>

             



            <div className='text-center py-6 mapBanner text-4xl font-bold' id='map'> 
                    <span >Visit Us</span>
                    <div className='py-3'>
                    <hr className='visitLine mx-auto border-2 border-black'></hr>
                    </div>
            </div>
            <div >
            <iframe width="100%" height="400px" id="gmap_canvas" src={coords} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
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
