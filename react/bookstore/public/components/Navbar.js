import React from "react";
import { Link } from "react-router-dom";
import NavForm from "./NavForm";

const Navbar = () => (
  <nav className="navbar navbar-top-bar navbar-static-top">
    <div className="container">
      <ul className="navbar-nav nav">
        <li><Link to="/">Home</Link></li>
        <li className="disabled"><Link to="/">About Us</Link></li>
      </ul>
      <ul className="navbar-nav nav navbar-right">
        <li className="disabled"><a href="#">Login</a></li>
        <li>
          <NavForm />
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
