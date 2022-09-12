import React, { Component } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import img1 from "./../public/images/slide-01-copy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import {
  faCalendar,
  faHouse,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import CartComp from "./../components/CartComp";
import NextLink from "next/link";
import Passenger from "../components/Passenger";
import Head from "next/head";
import Payment from "../components/Payment";

class Cart extends Component {
  render() {
    return (
      <div className="m-2">
        <Head>
          <title>Hello</title>
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

        <Header />
        <div className="grid grid-cols-12 ">
          <div className="xs:col-span-12 md:col-span-9 ">
            <header className="bg-gray-50">
              <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 shadow-xl">
                <div className="sm:justify-between sm:items-center sm:flex ">
                  <div className="text-center sm:text-left flex ">
                    <div className="pr-4">
                      <Image
                        src={img1}
                        alt="Picture of the author"
                        width="200px"
                        height="150px"
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-1xl font-bold text-green-600 light:text-green-200  pt-1 md:pt-3">
                        <FontAwesomeIcon icon={faHouse} />
                        New Ambassador Hotel
                      </h1>
                      <div className="pb-1 md:pb-0            "></div>
                      <p className="pb-2 text-xs sm:text-sm">
                        <FontAwesomeIcon icon={faLocation} className="mr-2" />
                        Harare, Harare
                      </p>
                      <p className="pb-2 text-xs sm:text-sm">
                        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                        From 08/17/21(Wednesday) - 08/28/21(Wednesday)
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">
                    <button
                      className="inline-flex items-center justify-center px-5 py-3 text-gray-500 transition bg-white border border-gray-200 rounded-lg hover:text-gray-700 focus:outline-none focus:ring"
                      type="button"
                    >
                      <span className="text-sm font-medium"> View Rooms </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        //stroke-width="2"
                      >
                        <path
                          //stroke-linecap="round"
                          //stroke-linejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>

                    <button
                      className="block px-5 py-3 text-sm font-medium text-white transition bg-red-600 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring"
                      type="button"
                    >
                      Delete Product
                    </button>
                  </div>
                </div>
              </div>
            </header>
            <div className="border-b"></div>
            <div className="pt-6 pl-3">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-400 "
              >
                Remarks{" "}
              </label>

              <p className="text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search htmlFor will
                uncover many web sites still in their infancy.
              </p>
            </div>
            <br></br>
            <label
              htmlFor="message"
              className="block font-medium text-green-500 light:text-green-200 mb-2 mt-4 pl-8"
            >
              Requests For the accomodation
            </label>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-4 pl-8"
            >
              For reference only, Hotelbeds Can not guarante them
            </label>

            <div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3  lg:divide-x m-4 pl-8">
                <div className="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"
                  >
                    Double bed
                  </label>
                </div>
                <div className="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"
                  >
                    Two beds
                  </label>
                </div>
                <div className="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"
                  >
                    Client without voucher
                  </label>
                </div>
                <div className="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"
                  >
                    Smoking room
                  </label>
                </div>
                <div className="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"
                  >
                    Non-smoking room
                  </label>
                </div>
                <div className="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"
                  >
                    Honeymooon
                  </label>
                </div>
                <div className="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"
                  >
                    Adjacent room
                  </label>
                </div>
                <div className="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"
                  >
                    Except ground floor
                  </label>
                </div>
                <div className="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-small text-gray-450 light:text-gray-80"
                  >
                    Late arrival
                  </label>
                </div>
              </div>

              <br></br>
              <label
                htmlFor="message"
                className="block font-medium text-gray-900 dark:text-gray-400 lg:pl-8 mt-8 mb-6"
              >
                Comments
              </label>
              <form>
                <div className="lg:pl-12">
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                  ></textarea>

                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-300  mt-2 italic"
                  >
                    character remaining:1000
                  </label>
                </div>
              </form>
              <div className=" md:hidden lg:pb-40 border-y-2 border-dashed mt-10">
                <CartComp />
              </div>

              <br></br>
              <div className="border-b"></div>
              <br></br>
              <label
                htmlFor="message"
                className="block mb-2  font-medium text-green-500 light:text-green-200"
              >
                1 x Single Standard, Room Only, 1 Adult, 0 Children
              </label>

              <div className="bg-white py-6 sm:py-8 lg:py-12">
                <label
                  htmlFor="message"
                  className="block mb-2  font-medium text-gray-900 dark:text-gray-400 pb-2 italic"
                >
                  Cancellation Fees
                </label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-10 sm:gap-y-12 lg:divide-x">
                  <div className="flex flex-col items-left gap-4 md:gap-6 sm:px-4 lg:px-8">
                    <div className="text-gray-600 text-left italic">
                      “This is a section of some simple filler text, also known
                      as placeholder text.”
                    </div>
                  </div>

                  <div className="flex flex-col items-left gap-4 md:gap-6 sm:px-4 lg:px-8">
                    <div className="text-gray-600 text-left italic">
                      Date and time are calculated based on local time in the
                      destination.In case of no-show, different fees will
                      apply.Please refer to our T&C.
                    </div>
                  </div>
                  <div />
                </div>

                <div className="border-b"></div>
                <div className=" py-8 px-2 border-x">
                  <p className="font-medium">Discount</p>
                  <label
                    htmlFor="message"
                    className="block mb-1 font-bold text-gray-900 dark:text-gray-400 text-right"
                  >
                    Total net amount : 11.243 ZAR
                  </label>
                </div>

                <div className=" py-6 px-2">
                  <p className="font-medium">Supplement</p>
                  <label
                    htmlFor="message"
                    className="block mb-1  font-bold text-gray-900 dark:text-gray-400 text-right"
                  >
                    Total net amount : 11.243 ZAR
                  </label>
                </div>

                <div className="bg-gray-300 py-6 px-2 shadow-xl">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-extrabold  text-gray-900 dark:text-gray-400 text-right"
                  >
                    Total net amount : 11.243 ZAR
                  </label>
                </div>
              </div>

              <br></br>
              <label
                htmlFor="message"
                className="block mb-2  font-medium text-gray-700 dark:text-white-400 text-left"
              >
                Payment Details
              </label>
              <Passenger />

              <label
                htmlFor="message"
                className="block mb-6 mt-20 font-medium  text-gray-900 dark:text-gray-400 text-left"
              >
                Booking Confirmation
              </label>
              <div className="bg-gray-300 py-6 px-2 shadow-xl">
                <Payment />
                <div className="mt-3"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 xs:hidden md:block lg:pb-40">
            <CartComp />
          </div>

          <br></br>
          <br></br>
        </div>
        <div></div>

        <Footer />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
        ></script>
      </div>
    );
  }
}
export default Cart;
