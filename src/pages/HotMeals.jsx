import React from "react";
import { Link } from "react-router-dom";

//image
import PizzaOne from "../assets/img/pizza-2.jpg";
import PizzaTwo from "../assets/img/pizza-3.png";
import PizzaThree from "../assets/img/pizza-4.jpg";
import PizzaFour from "../assets/img/pizza-1.jpg";

function HotMeal() {
  return (
    <section className="hot-meal">
      <div className="container">
        <div className="row">
          <div data-aos="fade-up" className="hot-meal-top">
            <h2 className="title">HOT MEALS</h2>
            <div className="decoration">
              <span className="decoration-items"></span>
              <span className="decoration-items"></span>
              <span className="decoration-items"></span>
            </div>
            <p className="text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="hot-meal-bottom" data-aos="fade-up">
            <div className="card">
              <div className="pizza-img">
                <Link to="/pizza/1">
                  <img src={PizzaFour} alt="pizza" />
                </Link>
              </div>
              <div className="pizza-info">
                <h5 className="title">Italian Pizza</h5>
                <p className="text">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <span className="price">$2.90</span>
                <div className="btn">
                  <Link to="/order/pizza/1">Add to cart</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="pizza-img">
                <Link to="/pizza/2">
                  <img src={PizzaOne} alt="pizza" />
                </Link>
              </div>
              <div className="pizza-info">
                <h5 className="title">Italian Pizza</h5>
                <p className="text">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <span className="price">$2.90</span>
                <div className="btn">
                  <Link to="/order/pizza/2">Add to cart</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="pizza-img">
                <Link to="/pizza/3">
                  <img src={PizzaTwo} alt="pizza" />
                </Link>
              </div>
              <div className="pizza-info">
                <h5 className="title">Italian Pizza</h5>
                <p className="text">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <span className="price">$2.90</span>
                <div className="btn">
                  <Link to="/order/pizza/3">Add to cart</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="pizza-img">
                <Link to="/pizza/4">
                  <img src={PizzaThree} alt="pizza" />
                </Link>
              </div>
              <div className="pizza-info">
                <h5 className="title">Italian Pizza</h5>
                <p className="text">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <span className="price">$2.90</span>
                <div className="btn">
                  <Link to="/order/pizza/4">Add to cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotMeal;
