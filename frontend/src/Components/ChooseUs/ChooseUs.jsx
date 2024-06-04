import React from "react";
import "./ChooseUs.css";
import GirlFit from "../../assets/meagan-stone-r951FqxHTao-unsplash.jpg";
import ManFit from "../../assets/john-fornander-TAZoUmDqzXk-unsplash.jpg";
import OnotherMan from "../../assets/john-arano-h4i9G-de7Po-unsplash.jpg";
import HeroPic from "../../assets/heroPic.jpg";

const ChooseUs = () => {
  return (
    <div className="chooseUs" id="chooseUs">
      <div className="left-r">
        <img src={ManFit} alt="" />
        <img src={GirlFit} alt="" />
        <img src={OnotherMan} alt="" />
        <img src={HeroPic} alt="" />
      </div>
      <div className="right-r">
        <span>some reason</span>
        <div >
          <span className="stroke-text">why</span>
          <span> PowerHour?</span>
        </div>

        <div> </div>
        <p className="text-right">
          Our class scheduling software was built specifically for the fitness
          and wellness industry. packed with features to make your life easier
          and backed up by customer service that's there for you 24/7. Integrate
          our booking calendar onto any page of your website within minutes for
          a look that's professional with functionality that your clients will
          love. And if you don't have a website your clients can book through
          your dedicated booking page on classfit.com, or our mobile apps. With
          no contracts to lock you in and customer service that runs 7 days a
          week, ClassFit is scheduling software with a difference.
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;
