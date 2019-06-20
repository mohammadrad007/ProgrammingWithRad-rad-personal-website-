import React from "react";
import pwrIcon from "./../images/pwrIcon.ico";
import SearchBar from "./searchbar";

export default function Navbar() {
  return (
    <nav className="rtl navbar  fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <div className="navbar-brand navbar-name col-sm-3 md-2 mr-0">
        <img className="navbar-logo" src={pwrIcon} alt="pwr" />
        <a href="/">وب سایت شخصی محمد راد</a>
      </div>

      <SearchBar />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a>ورود</a>
        </li>
      </ul>
    </nav>
  );
}
