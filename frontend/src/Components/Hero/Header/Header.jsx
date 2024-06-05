import React, { useState } from "react";
import "./Header.css";
import Logo from "../../../assets/logo.png";
import HambugerMenu from "../../../assets/icon/humbugerMenu.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <div className="boxLogo">
        <span>
          <img className="logo" src={Logo} alt="weight lifting logo " />
        </span>
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
            <li onClick={() => setMenuOpened(false)}>Trainers</li>
            <li onClick={() => setMenuOpened(false)}>About us</li>
            <li onClick={() => setMenuOpened(false)}>Plans</li>
            <li onClick={() => setMenuOpened(false)}>Testimonials</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
