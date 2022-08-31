import React from "react";
import CreditCardPay from "./CreditCardPay";

const Payment = () => {
  return (
    <div>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tabFill2"
        role="tablist"
      >
        <li className="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-homeFill2"
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
            id="tabs-home-tabFill2"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeFill2"
            role="tab"
            aria-controls="tabs-homeFill2"
            aria-selected="true"
          >
            Pay with Credit Card
          </a>
        </li>
        <li className="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-profileFill2"
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
            id="tabs-profile-tabFill2"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileFill2"
            role="tab"
            aria-controls="tabs-profileFill2"
            aria-selected="false"
          >
            Pay with Debit Card
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentFill">
        <div
          className="tab-pane fade show active"
          id="tabs-homeFill2"
          role="tabpanel"
          aria-labelledby="tabs-home-tabFill2"
        >
          <CreditCardPay />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-profileFill2"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabFill2"
        >
          Tab 2 content fill
        </div>
      </div>
    </div>
  );
};

export default Payment;
