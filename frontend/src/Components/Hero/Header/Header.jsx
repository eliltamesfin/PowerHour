import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <div className="boxLogo">
        <a href="#home">
          <img className="logo" src={Logo} alt="weight lifting logo" />
        </a>
        <span>PowerHour</span>
        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--orange)",

              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img
              src={HambugerMenu}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li onClick={() => setMenuOpened(false)}> Home</li>
            <li onClick={() => setMenuOpened(false)}>Programs</li>
            <li onClick={() => setMenuOpened(false)}>Why us</li>
            <li onClick={() => setMenuOpened(false)}>Plans</li>
            <li onClick={() => setMenuOpened(false)}>Testimonials</li>
          </ul>
        )}
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
