import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Offers.css";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/offer");
        console.log(response)
        const { data } = response;
        console.log(data);
        setOffers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOffers();
  }, []);

  return (
    <div className="offers-container">
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* Offers card */}
      <div className="offers">
        {offers.map((offer, i) => (
          <div className="offer" key={i}>
            <span>{offer.title}</span>
            <span>{offer.description}</span>
            <div> {offer.date}</div>
            <div> {offer.duration}</div>

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


