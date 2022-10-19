import React from 'react';
import {useState} from 'react';
import ResultsContainer from '../../components/ResultsContainer';
import Head from 'next/head';
import Filters from '../../components/filters';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Result from '../../components/Result';

const Results = (props) => {



var x = [];    
if (process.browser){
    x = JSON.parse(localStorage.getItem("mytime"))
}

    const [searchRes, setSearchRes] = useState(props.status)

    const [showHotel, setHotel] = useState(
        [
            {
                url: "images/slide-01-copy.jpg",
                title: "Victoria Falls",
                rating: 4.7,
                rate: 1999.99,
                currency: "$US",
                perks: ['Wifi','Car Park','Restaurant'],
                city: "Mosi oa Tunya",
                place: "Victoria Falls",
                icons: [<i className="fas fa-wifi" key={"wifi"}></i>, <i className="fas fa-parking" key={"parking"}></i>,  <i className="fa fa-cutlery" key={"restaurant"}></i> ],

            },
            {
                url: "images/slide-02-copy.jpg",
                title: "Maldives",
                rating: 4.2,
                rate: 1799.99,
                currency: "$US",
                perks: ['Wifi','Car Park','Restaurant'],
                city: "Beach of Hope",
                place: "Maldives",
                icons: [<i className="fas fa-wifi" key={"wifi"}></i>, <i className="fas fa-parking" key={"parking"}></i>,  <i className="fa fa-cutlery" key={"restaurant"}></i> ],
            },
            {
                url: "images/slide-03-copy.jpg",
                title: "Sweden",
                rating: 4.3,
                rate: 2599.99,
                currency: "$US",
                perks: ['Wifi','Car Park','Restaurant'],
                city: "Geneva",
                place: "Sweden",
                icons: [<i className="fas fa-wifi" key={"wifi"}></i>, <i className="fas fa-parking" key={"parking"}></i>,  <i className="fa fa-cutlery" key={"restaurant"}></i> ],
            },
            {
                url: "images/slide-04-copy.jpg",
                title: "Toronto",
                rating: 4.2,
                rate: 999.99,
                currency: "$US",
                perks: ['Wifi','Car Park','Restaurant'],
                city: "Lakeside",
                place: "Toronto",
                icons: [<i className="fas fa-wifi" key={"wifi"}></i>, <i className="fas fa-parking" key={"parking"}></i>,  <i className="fa fa-cutlery" key={"restaurant"}></i> ],
            },
            {
                url: "images/slide-05-copy.jpg",
                title: "Kariba",
                rating: 4.1,
                rate: 1999.99,
                currency: "$US",
                perks: ['Wifi','Car Park','Restaurant'],
                city: "Mabvuku",
                place: "Kariba",
                icons: [<i className="fas fa-wifi" key={"wifi"}></i>, <i className="fas fa-parking" key={"parking"}></i>,  <i className="fa fa-cutlery" key={"restaurant"}></i> ],
            },
            {
                url: "images/slide-06-copy.jpg",
                title: "Great Pyramids",
                rating: 4.6,
                rate: 2999.99,
                currency: "$US",
                perks: ['Wifi','Car Park','Restaurant'],
                city: "Pyramid of Giza",
                place: "Egypt",
                icons: [<i className="fas fa-wifi" key={"wifi"}></i>, <i className="fas fa-parking" key={"parking"}></i>,  <i className="fa fa-cutlery" key={"restaurant"}></i> ],
            },
            {
                url: "images/slide-07-copy.jpg",
                title: "Norway",
                rating: 4.8,
                rate: 975.95,
                currency: "$US",
                perks: ['Wifi','Car Park','Restaurant'],
                city: "Oslo",
                place: "Norway",
                icons: [<i className="fas fa-wifi" key={"wifi"}></i>, <i className="fas fa-parking" key={"parking"}></i>,  <i className="fa fa-cutlery" key={"restaurant"}></i> ],
            },
            {
                url: "images/slide-08-copy.jpg",
                title: "Mexico",
                rating: 4.3,
                rate: 899.99,
                currency: "$US",
                perks: ['Wifi','Car Park','Restaurant'],
                city: "Encanto",
                place: "Mexico",
                icons: [<i className="fas fa-wifi" key={"wifi"}></i>, <i className="fas fa-parking" key={"parking"}></i>,  <i className="fa fa-cutlery" key={"restaurant"}></i> ],
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
    <Header/>
    <Result/>
    <div className="flex">
            <Filters/>
              <ResultsContainer hotels={searchRes} />
    </div>
    <Footer/>
        </div>
    )
}

export default Results

export async function getServerSideProps(context){

    const name = context.params.name
    const res = await fetch(`http://localhost:3000/api/properties?name=${name}`);
    const data = await res.json();

  
      return{
        props:{
          status:data
        }
      }
  }
