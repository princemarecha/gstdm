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
    <div className="sticky top-0 z-10">
            <Header/>
            </div>
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
