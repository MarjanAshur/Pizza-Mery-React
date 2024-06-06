import React from "react";
import { Link } from "react-router-dom";
//pages
import FoodType from "../pages/FoodType";
import Menu from "../pages/Menu";
function MainMenu() {
  return (
    <div>
      <section className="menu-page">
        <div className="over-lay"></div>
        <div className="container">
          <div className="row">
            <div className="welcome-box">
              <h1 className="title">our menu</h1>
              <p className="text">
                <Link to="/">Home</Link> menu
              </p>
            </div>
          </div>
        </div>
      </section>
      <Menu />
      <FoodType />
    </div>
  );
}

export default MainMenu;
