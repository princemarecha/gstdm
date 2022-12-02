import React, {useState} from 'react';
import Nav2 from '../components/Nav2';
import Head from 'next/head';
import { cartNum } from '../Helper/Context';
import Image from 'next/image';
import Logo from './../public/images/GSTDMLogo.png';
import Footer from '../components/footer';

const about = () => {
  const [cartNumber, setCartNumber] = useState([]);
  return (
    <div>
        <Head>
        <title>GSTDM | About</title>
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
          <script src="https://cdn.tailwindcss.com" async></script>
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
        </Head>
        <cartNum.Provider value={{cartNumber, setCartNumber}}>
        <Nav2/>
        </cartNum.Provider>

        <div className='grid md:grid-cols-2'>
          <div className='w-1/2 m-auto'>
          <Image
            src = {Logo}
            alt = "Enlarged image of Logo"
          />
          </div>
          <div className='w-1/2 m-auto my-10 text-center nameStyle'>
            <h1 className='text-center mb-7 font-bold text-4xl'>About</h1>
            <p>
            Getaway Specialised Tours and Destination Management is a specialised Owner operated Tour company that will cater for all your travel package needs.
            </p>
            <p>
              Our staff have over 50 years experience in the travel industry with in depth knowledge of all the places we sell.
            </p>
            <p>
              We don&apos;t just create packages, we create packages with memories to last a lifetime
            </p>
            <p>
              So the next time you are planning a trip, let us take you there, spoil you and create those memories...
            </p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default about