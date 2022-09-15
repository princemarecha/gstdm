import React from 'react';
import {useState} from 'react';
import ListingsContainer from '../components/listingscontainer';
import Head from 'next/head';


const Listings = (props) => {
       
    const [showHotel, setHotel] = useState(
        [
            {
                url: "images/slide-01-copy.jpg",
                title: "Victoria Falls",
                rating: 4.7,
                rate: 45,
                currency: "$US",
                perks: ['Luxury Hotel','Breakfast','Dinner','Pool'],
            },
            {

                url: "images/slide-02-copy.jpg",
                title: "Maldives",
                rating: 4.2,
                rate: 45,
                currency: "$US",
                perks: ['Luxury Hotel','Breakfast','Dinner','Pool'],
            },
            {
                url: "images/slide-03-copy.jpg",
                title: "Sweden",
                rating: 4.3,
                rate: 45,
                currency: "$US",
                perks: ['Luxury Hotel','Breakfast','Dinner','Pool'],
            },
            {
                url: "images/slide-04-copy.jpg",
                title: "Toronto",
                rating: 4.2,
                rate: 45,
                currency: "$US",
                perks: ['Luxury Hotel','Breakfast','Dinner','Pool'],
            },
            {
                url: "images/slide-05-copy.jpg",
                title: "Kariba",
                rating: 4.1,
                rate: 45,
                currency: "$US",
                perks: ['Luxury Hotel','Breakfast','Dinner','Pool'],
            },
            {
                url: "images/slide-06-copy.jpg",
                title: "Great Pyramids",
                rating: 4.6,
                rate: 45,
                currency: "$US",
                perks: ['Luxury Hotel','Breakfast','Dinner','Pool'],
            },
            {
                url: "images/slide-07-copy.jpg",
                title: "Norway",
                rating: 4.8,
                rate: 45,
                currency: "$US",
                perks: ['Luxury Hotel','Breakfast','Dinner','Pool'],
            },
            {
                url: "images/slide-08-copy.jpg",
                title: "Mexico",
                rating: 4.3,
                rate: 45,
                currency: "$US",
                perks: ['Luxury Hotel','Breakfast','Dinner','Pool'],
            },
          
        ]
    )
    return (
        <div>
        <div>
        <Head>
          <link rel="stylesheet" href="http://fonts.cdnfonts.com/css/roboto" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
          <link rel="stylesheet" href="../../styles/globals.css"/>
          <script src="https://cdn.tailwindcss.com" async></script>
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
        </Head>
      
    </div>

             {/* <ListingsContainer hotels={showHotel} >*/}
              
        </div>
    )
}

export default Listings
