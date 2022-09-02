import NextLink from "next/link";
import React from "react";

const CreditCardPay = () => {
  return (
    <div>
      <form className="mt-6 sm:mx-16 sm:px-16 grid-col-12">
        <p className="pt-6  mt-6 font-medium  text-gray-500 mb-3">
          Your Details (the one who is booking)
        </p>
        <hr />
        <div className="mt-6"></div>
        <div className="grid grid-cols-1">
          <div className=" grid grid-cols-1 gap-y-3">
            <label htmlFor="hname" className="mr-3 text-sm ">
              Name
            </label>
            <input
              id="hname"
              className="p-2 mr-3 mb-3 rounded-md text-sm col-span-2"
              placeholder="Your Name"
            ></input>
          </div>
          <div className="grid grid-cols-1 gap-y-3">
            <label htmlFor="sname" className="mr-3 text-sm col-span-1">
              Surname
            </label>
            <input
              id="sname"
              className="p-2 mr-3 mb-3 rounded-md text-sm col-span-1"
              placeholder="Your Surname"
            ></input>
          </div>
        </div>

        <hr />
        <p className="pt-6  mt-6 font-medium  text-gray-500 mb-3">
          Card Holder&apos;s Details
        </p>
        <hr />
        <div className="mt-3"></div>

        <div className="grid grid-cols-1">
          <div className=" grid grid-cols-1 gap-y-3">
            <label htmlFor="hname" className="mr-3 text-sm ">
              Name
            </label>
            <input
              id="hname"
              className="p-2 mr-3 mb-3 rounded-md text-sm "
              placeholder="Holder's Name"
            ></input>
          </div>
          <div className="grid grid-cols-1 gap-y-3">
            <label htmlFor="sname" className="mr-3 text-sm ">
              Surname
            </label>
            <input
              id="sname"
              className="p-2 mr-3 mb-3 rounded-md text-sm"
              placeholder="Holder's Surname"
            ></input>
          </div>

          <br />
          <label htmlFor="cardt" className="mr-3 text-sm">
            Card Type
          </label>
          <select className="p-2 mr-3 rounded-md my-3 text-sm" id="">
            <option>Visa</option>
            <option>MasterCard</option>
          </select>

          <br />
          <label htmlFor="cardn" className="mr-3 text-sm">
            Card Number
          </label>
          <input
            id="cardn"
            className="p-2 mr-16 rounded-md my-3 text-sm"
            type="number"
            placeholder="45447-37593-65677-45435"
          ></input>

          <label htmlFor="cardn" className="mr-3 text-sm">
            Card CVC
          </label>
          <input
            id="cardn"
            className="p-2 mr-3 rounded-md my-3 text-sm "
            type="number"
            placeholder="123"
          ></input>
        </div>
        <hr />
        <p className="pt-6  mt-6 mb-3 font-medium  text-gray-500 ">
          Contact Details
        </p>
        <hr />
        <div className="mt-3"></div>
        <div className="grid grid-cols-1">
          <label htmlFor="cardn" className="mr-3 text-sm">
            Email
          </label>
          <input
            id="cardn"
            className="p-2 mr-16 rounded-md my-3 text-sm"
            type="email"
            placeholder="email@example.com"
          ></input>

          <label htmlFor="cardn" className="mr-3 text-sm">
            Phone Number
          </label>
          <input
            id="cardn"
            className="p-2 mr-3 rounded-md my-3 text-sm "
            type="number"
            placeholder="+263 77777777"
          ></input>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <button className="inline-block bg-gray-700 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-center rounded-lg px-8 py-3 text-white mt-8 mr-1">
            Submit
          </button>
          <a className="">
            <NextLink href="/tsandcs">
              <button className="inline-block bg-gray-700 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-center rounded-lg px-8 py-3 text-white mt-8 float-right">
                Terms and Conditions
              </button>
            </NextLink>
          </a>
        </div>
      </form>
    </div>
  );
};

export default CreditCardPay;
