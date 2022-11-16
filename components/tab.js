import React, { Component } from "react";
import SearchHotel from "./../components/SearchHotel";
import SearchPackages from "./../components/SearchPackage";
import SearchTours from "./../components/SearchTours";
import SearchTransfers from "./../components/SearchTranfers";

class Tab extends Component {
  render() {
    return (
      <div>
        <div className="grid place-items-center">
          <ul
            className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            id="tabs-tab"
            role="tablist"
          >
            <li
              className="nav-item bg-cyan-500 rounded-tl-lg"
              role="presentation"
            >
              <a
                href="#tabs-home"
                className="   
                 
            block
            font-medium
            text-xs
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent border-white
            px-6
            py-3
            my-2
            hover:border-transparent 
            focus:border-transparent
            active
          "
                id="tabs-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-home"
                role="tab"
                aria-controls="tabs-home"
                aria-selected="true"
                style={{ color: "white" }}
              >
                Hotels
              </a>
            </li>
            <li className="nav-item bg-cyan-500" role="presentation">
              <a
                href="#tabs-profile"
                className="

            block
            font-medium
            text-xs
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent border-white
            px-6
            py-3
            my-2
            hover:border-transparent 
            focus:border-transparent
          "
                id="tabs-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-profile"
                role="tab"
                aria-controls="tabs-profile"
                aria-selected="false"
                style={{ color: "white" }}
              >
                Tours
              </a>
            </li>
            <li className="nav-item bg-cyan-500" role="presentation">
              <a
                href="#tabs-messages"
                className="
        
            block
            font-medium
            text-xs
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent border-white
            px-6
            py-3
            my-2
            hover:border-transparent 
            focus:border-transparent
          "
                id="tabs-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messages"
                role="tab"
                aria-controls="tabs-messages"
                aria-selected="false"
                style={{ color: "white" }}
              >
                Packages
              </a>
            </li>
            <li className="nav-item bg-cyan-500" role="presentation">
              <a
                href="#tabs-messages"
                className="
        
            block
            font-medium
            text-xs
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent border-white
            px-6
            py-3
            my-2
            hover:border-transparent 
            focus:border-transparent
          "
                id="tabs-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-transfers"
                role="tab"
                aria-controls="tabs-messages"
                aria-selected="false"
                style={{ color: "white" }}
              >
                Transfers
              </a>
            </li>
            <li
              className="nav-item bg-cyan-500 rounded-tr-lg"
              role="presentation"
            >
              <a
                href="#tabs-messages"
                className="
        
            block
            font-medium
            text-xs
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent border-white
            px-6
            py-3
            my-2
            hover:border-transparent hover:
            focus:border-transparent
          "
                id="tabs-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messages"
                role="tab"
                aria-controls="tabs-messages"
                aria-selected="false"
                style={{ color: "white" }}
              >
                Availability
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="tabs-tabContent">
          <div
            className="tab-pane fade show active"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
          >
            <SearchHotel />
          </div>
          <div
            className="tab-pane fade"
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            <SearchTours />
          </div>
          <div
            className="tab-pane fade"
            id="tabs-messages"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            <SearchPackages />  
          </div>
          <div
            className="tab-pane fade"
            id="tabs-transfers"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab"
          >
            {/* <SearchTransfers /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Tab;
