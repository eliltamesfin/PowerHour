import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero.jsx";
import Activities from "./Components/Hero/Activities/Activities.jsx";
import ChooseUs from "./Components/ChooseUs/ChooseUs.jsx";
import Offers from "./Components/Offers/Offers.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Signup from "./Components/JoinNow/Signup.jsx";
import Login from "./Components/JoinNow/Login.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <section id="home">
                <Hero />
              </section>
              <section id="programs">
                <Activities />
              </section>
              <section id="why-us">
                <ChooseUs />
              </section>
              <section id="plans">
                <Offers />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <Footer />
            </div>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
