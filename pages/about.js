import React, { useState } from 'react'
import Nav2 from '../components/Nav2'
import Head from 'next/head'
import { cartNum } from '../Helper/Context'

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
    </div>
  )
}

export default about