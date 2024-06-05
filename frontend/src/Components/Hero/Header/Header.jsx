import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="boxLogo">
        <a href="#home">
          <img className="logo" src={Logo} alt="weight lifting logo" />
        </a>
        <span>PowerHour</span>
      </div>
      <ul className="header-menu">
        <li><a href="#programs">Programs</a></li>
        <li><a href="#why-us">Why Us</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <div className="right-h">
      <Link to="/signup">
        <button className="btn">Join Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
