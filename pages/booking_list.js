import React, { Component, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import NextLink from "next/link";
import Head from "next/head";
import Payment from "../components/Payment";
import Search from "../components/search";
import PostSearch from "../components/PostSearch";
import { cartNum } from "../Helper/Context";

const Booking_list = () => {
  const [cartNumber, setCartNumber] = useState([]);
  return (
    <div>
      <Head>
      <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
          />
          <script async src="https://cdn.tailwindcss.com"></script>
      </Head>
      <cartNum.Provider value={{cartNumber, setCartNumber}}>
      <div className="sticky top-0 z-10">
            <Header/>
   
      </div>
      </cartNum.Provider>
        <PostSearch/>
      <Footer/>
      <script
          async
          src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
    ></script>
    </div>
  )
}

export default Booking_list

