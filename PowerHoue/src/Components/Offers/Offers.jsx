import React from "react";
import "./Offers.css";
import "../../../src/Data/offersData.js";
import { offersData } from "../../../src/Data/offersData.js";

const Offers = () => {
  return (
    <div className="offers-container">
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/*Offers card*/}
      <div className="offers">
        {offersData.map((plan, i) => (
          <div className="offer" key={i}>
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              
              <span>See more benefits</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
