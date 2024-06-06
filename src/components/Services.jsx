import React from "react";
import { Link } from "react-router-dom";
//pages
import HotMeal from "../pages/HotMeals";
import OurServices from "../pages/OurServices";

function Services() {
  return (
    <div>
      <section className="services-page">
        <div className="over-lay"></div>
        <div className="container">
          <div className="row">
            <div className="welcome-box">
              <h1 className="title">Services</h1>
              <p className="text">
                <Link to="/">Home</Link> menu
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurServices />
      <HotMeal />
    </div>
  );
}

export default Services;
