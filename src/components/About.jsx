import React from "react";
import { Link } from "react-router-dom";
//components
import Contact from "../pages/ContactUs";
import Restaurant from "../pages/Restaurant";
//img
import ChefOne from "../assets/img/person_1.jpg";
import ChefTwo from "../assets/img/person_2.jpg";
import ChefThree from "../assets/img/person_3.jpg";
import ChefFour from "../assets/img/person_4.jpg";

function Chef() {
  return (
    <>
      <section className="about-page">
        <div className="over-lay"></div>
        <div className="container">
          <div className="row">
            <div className="welcome-box">
              <h1 className="title">About</h1>
              <p className="text">
                <Link to="/">Home</Link> menu
              </p>
            </div>
          </div>
        </div>
      </section>
      <Restaurant />

      <section className="chef">
        <div className="container">
          <div className="row">
            <div data-aos="fade-up" className="chef-top">
              <h2 className="title">OUR CHEF</h2>
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
            <div className="chef-bottom" data-aos="fade-up">
              <div className="card">
                <div className="image">
                  <img src={ChefOne} alt="human" />
                </div>
                <div className="info">
                  <Link to="/chef/tom-smith" className="chef-name">
                    Tom Smith
                  </Link>
                  <span className="title">Hair Specialist</span>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={ChefTwo} alt="human" />
                </div>
                <div className="info">
                  <Link to="/chef/mark-wilson" className="chef-name">
                    Mark Wilson
                  </Link>
                  <span className="title">Beard Specialist</span>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={ChefThree} alt="human" />
                </div>
                <div className="info">
                  <Link to="/chef/patrick-jacobson" className="chef-name">
                    Patrick Jacobson
                  </Link>
                  <span className="title">Hair Stylist</span>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={ChefFour} alt="human" />
                </div>
                <div className="info">
                  <Link to="/chef/ivan-dorchsner" className="chef-name">
                    Ivan DORCHSNER
                  </Link>
                  <span className="title">Beard Specialist</span>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default Chef;
