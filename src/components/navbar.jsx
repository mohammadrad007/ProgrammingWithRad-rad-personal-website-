import React from "react";
import pwrIcon from "./../images/pwrIcon.ico";
import SearchBar from "./searchbar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="rtl navbar  fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <div className="navbar-brand navbar-name col-sm-3 md-2 mr-0">
        <img className="navbar-logo" src={pwrIcon} alt="pwr" />
        <Link to="/">وب سایت شخصی محمد راد</Link>
      </div>

      <SearchBar />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Link to="/login">ورود</Link>
        </li>
      </ul>
    </nav>
  );
}
