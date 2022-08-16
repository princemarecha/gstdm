import React, { Component } from 'react';
import Header from './../components/header';
import Footer from './../components/footer';


class Tsandcs extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>

                <div>
                    Content
                </div>

                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Tsandcs;