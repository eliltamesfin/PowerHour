import React from "react";
import "./Footer.css";
import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import twitter from "../../assets/icon/twitter (copy).svg";
import Logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
      </div>
      <div className="logo-f">
        <img className="logo"  src={Logo} alt=""/>
      </div>
      </div>
    </div>
  );
};

export default Footer;
