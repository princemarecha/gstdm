import React, { Component } from 'react';
import Head from 'next/head';
import Footer from './../components/footer';
import Header from './../components/header';
import Image from 'next/image';
import BG from './../public/images/bnr1.jpg';
import Search from './search';
import Carousel from './carousel';
import Listings from './listings';

class Index extends Component {
render () {
  return (
    <div>
    <Head>
          <title>Getaway Specialised Tours</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
          
      </Head>
      
    <div>
    <Header/>
    
</div>
<div className='relative'>
{/*<Image
      src={BG}
      alt="Picture of the author"
      width="1500px"
      height="400px"
    />*/}
</div>

<Search/>

<Listings/>


<div>
    <Footer/>
    </div>
    </div>
  )
}
}


export default Index;