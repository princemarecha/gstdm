import React from "react";
import NextLink from "next/link";

const LeadPassDetails = () => {
  return (
    <div>
      <div className="bg-gray-200 shadow-xl pt-3">
        <form className="grid grid-cols-1 gap-y-2 mx-3 my-6 sm:mx-16 sm:px-16">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Name - Adult
          </label>
          <input
            type="text"
            id="first_name"
            className="p-2 mr-3 mb-3 rounded-md text-sm col-span-2"
            placeholder=""
            required
          />

          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Surname - Adult
          </label>
          <input
            type="text"
            id="last_name"
            className="p-2 mr-3 mb-3 rounded-md text-sm col-span-2"
            placeholder=""
            required
          />

          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-500  text-left"
          >
            Booking Details
          </label>
          <br></br>

          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Agency - reference
          </label>
          <input
            type="text"
            id="company"
            className="p-2 mr-3 mb-3 rounded-md text-sm col-span-2"
            placeholder=""
            required
          />
          <div className="grid grid-cols-2 mb-3">
            <button className="inline-block bg-gray-700 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-center rounded-lg px-8 py-3 text-white mt-8 mr-1">
              Clear
            </button>
            <a className="">
              <NextLink href="/tsandcs">
                <button className="inline-block bg-gray-700 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring ring-cyan-300 text-center rounded-lg px-8 py-3 text-white mt-8 float-right">
                  Submit
                </button>
              </NextLink>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadPassDetails;
