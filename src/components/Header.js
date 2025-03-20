import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/image.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/order">Order Now</Link>
        <Link to="/contact">Reach Us</Link>
        <Link to="/call">Call Us</Link>
      </nav>
    </header>
  );
};

export default Header;
