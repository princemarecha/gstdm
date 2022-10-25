import React, { Component } from "react";
import CheckAvailability from "./cartSearch";


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
          </ul>
        </div>
        <div className="tab-content" id="tabs-tabContent">
          <div
            className="tab-pane fade show active"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
          >
            <CheckAvailability />
          </div>
             
        </div>
      </div>
    );
  }
}
export default Tab;
