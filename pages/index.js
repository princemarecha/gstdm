import React, { Component } from 'react';
import Head from 'next/head';
import Footer from './../components/footer';
import Header from './../components/header';
import Search from './../components/search';
import Listings from './../components/listings';

class Index extends Component {
render () {
  return (
    <div>
    <Head>
          <title>GSTDM | Home</title>
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
          <script src="https://cdn.tailwindcss.com" async></script>
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
          
      </Head>
      
    <div>
    <Header/>
    
</div>

<Search/>

<Listings/>

<div>
    <Footer/>
    </div>
    <script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js" async></script>
    </div>
  )
}
}


export default Index;