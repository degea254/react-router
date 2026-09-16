import React from "react";
import logo from "../assets/2.jpg";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" width="130px" />

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="contact">
          <li>Contact</li>
        </Link>
      </ul>

      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
