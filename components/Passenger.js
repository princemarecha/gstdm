import React from "react";
import Head from "next/head";
import LeadPassDetails from "./LeadPassDetails";
const Passenger = () => {
  return (
    <div>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tabFill"
        role="tablist"
      >
        <li className="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-homeFill"
            className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            id="tabs-home-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeFill"
            role="tab"
            aria-controls="tabs-homeFill"
            aria-selected="true"
          >
            Enter Lead Passenger Data Only
          </a>
        </li>
        <li className="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-profileFill"
            className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-profile-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileFill"
            role="tab"
            aria-controls="tabs-profileFill"
            aria-selected="false"
          >
            Enter Data for all Passengers
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentFill">
        <div
          className="tab-pane fade show active"
          id="tabs-homeFill"
          role="tabpanel"
          aria-labelledby="tabs-home-tabFill"
        >
          <LeadPassDetails />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-profileFill"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabFill"
        >
          Tab 2 content fill
        </div>
        <div
          className="tab-pane fade"
          id="tabs-messagesFill"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabFill"
        >
          Tab 3 content fill
        </div>
      </div>
    </div>
  );
};

export default Passenger;
