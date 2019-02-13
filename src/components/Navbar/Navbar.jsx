import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

function Navbar({ location: { pathname } }) {
  return (
    <div className="Navbar--container">
      <div className="Navbar--list">
        <Link
          to="/"
          className={`Navbar--item${
            pathname === "/" ? " Navbar--item--selected" : ""
          }`}
        >
          Gallery
        </Link>
        <Link
          to="/slideshow"
          className={`Navbar--item${
            pathname === "/slideshow" ? " Navbar--item--selected" : ""
          }`}
        >
          Slideshow
        </Link>
        <Link
          to="/about"
          className={`Navbar--item${
            pathname === "/about" ? " Navbar--item--selected" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`Navbar--item${
            pathname === "/contact" ? " Navbar--item--selected" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Navbar);
