import React, { useState } from "react";
import rightArrow from "../../assets/right-arrow.png"
import leftArrow from "../../assets/left-arrow.png"

import "./Testimonials.css";
import { testimonialData } from "../../Data/testimonialData.js";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tData = testimonialData.length;

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span className="stroke-text">What our</span>
        <span> personal service clients have to say </span>
        <span> </span>

        <span>{testimonialData[selected].review}</span>
        <span>
          <span>{testimonialData[selected].name} </span>
          {testimonialData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img   src={testimonialData[selected].image}   alt=""/>
        <div className="arrows">
        <img 
  onClick={() => {
    if (selected === 0) {
      setSelected(tData - 1);
    } else {
      setSelected(prev => prev - 1);
    }
  }} 
  className="left-Arrow" src={leftArrow} alt="" /*it will always revert to previous testimonial review ex:for instants if we are in the first review then it will return to last testimony on clicking the on previous button.And if not it means it is not the first */
/>
          <img className="right-Arrow" src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
