import Head from 'next/head'
import React from 'react'
import Nav2 from '../components/Nav2'

const testpage = () => {
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
        <script src="https://cdn.tailwindcss.com" async></script>

      </Head>


        <Nav2/>
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
        </div>
  )
}

export default testpage