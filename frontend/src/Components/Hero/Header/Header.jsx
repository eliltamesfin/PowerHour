import React from "react";
import "./Header.css";
import Logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="boxLogo">
        <span>
          <img className="logo" src={Logo} alt="weight lifting logo " />
        </span>
        <span>PowerHour</span>
      </div>
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
