/* eslint-disable @next/next/no-html-link-for-pages */
import React, { Component } from 'react';
import Nav from './Nav';
import Head from 'next/head';


class Header extends Component {
    
    render() {
        return(
            <header className="bg-white"> 
            <Head>
            <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
            </Head>
<Nav/>
<script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></script>
</header>

        );
    };
};

export default Header;