import React from "react";
import "./Activities.css";
import RightArrow from "../../../assets/right-arrow.png";
const Activities = () => {
  return (
    <div className="activities" id="activities">
      <div className="activities-header">
        <span className="stroke-text">Explore our</span>
        <span> Programs</span>
        <span className="stroke-text"> to shape you</span>
      </div>
      <div className="activities-boxes">
        <div className="yoga">
         
          <div>Yoga</div>
          <p>
            Yoga is a holistic practice that combines physical postures,
            breathing exercises, and meditation to promote physical and mental
            well-being.
          </p>
          <div className="join-now">
            <span>Join Now</span>
            <img className="right-arrow" src={RightArrow} alt="" />
          </div>
        </div>
        <div className="pilates">
          {" "}
          Pilates
          <p>
            Pilates is a low-impact exercise system that focuses on
            strengthening core muscles, improving posture, and enhancing overall
            body flexibility.{" "}
          </p>
          <div className="join-now">
            <span>Join Now</span>
            <img className="right-arrow" src={RightArrow} alt="" />
          </div>
        </div>

        <div className="Cardio">
          
          Cardio
          <p>
            Cardio, or cardiovascular exercise, involves activities that raise
            your heart rate and improve the efficiency of your heart, lungs, and
            circulatory system. health.
          </p>
          <div className="join-now">
            <span>Join Now</span>
            <img className="right-arrow" src={RightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
