import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import HeroPic from "../../assets/heroPic.jpg";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="left-h">
        <Header />
        <div className="hero-text">
          <div>
            <span className="stroke-text"> Maximize</span>
            <span>your potential every</span>
            <span className="stroke-text">Hour</span>
          </div>
        </div>
        {/*figures */}
        <div className="figures">
          <div>
            <span>+14</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+9</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+30</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/*Hero buttons */}
        <div className="hero-button">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn more</buttons>
        </div>
      </div>
      <div className="right-h">
  <button className="btn" >Join Now</button>

  {/*hero image */}
  <img src={HeroPic} alt="" className="hero-image"/>

      </div>
    </div>
  );
};

export default Hero;
