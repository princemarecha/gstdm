import React from 'react';
import {useState} from 'react';
import ResultsContainer from '../../components/ResultsContainer';
import Head from 'next/head';
import Filters from '../../components/filters';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Result from '../../components/Result';
import { notifiContext } from '../../Helper/Context';
import { cartNum } from '../../Helper/Context';

const Results = (props) => {

  const [show, setShow] = useState(false);



var x = [];    
if (process.browser){
    x = JSON.parse(localStorage.getItem("mytime"))
}

    const [searchRes, setSearchRes] = useState(props.status)
    const [cartNumber, setCartNumber] = useState(0)

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

    <notifiContext.Provider value={{show, setShow}}>
      <cartNum.Provider value={{cartNumber, setCartNumber}}>
        <div className="sticky top-0 z-10">
            <Header/>
            {show?<div id="toast-top-right" className="notification  bg-green-500 flex absolute top-20 right-5 items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
              <div className="text-sm font-normal text-white justify-even flex"><div>Product added to cart successfully</div></div>
            </div>:<div></div>}
        </div>
  
    <div className="flex">
            <div className='sticky top-0'><Filters/></div>
              <ResultsContainer hotels={searchRes} />
    </div>  
    </cartNum.Provider>
    </notifiContext.Provider>
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
