import React from "react";
import { Link } from "react-router-dom";
//css
import "../assets/styles/footer.css";
//img
import ImageOne from "../assets/img/image_1.jpg";
import ImageTwo from "../assets/img/image_2.jpg";
//icon
import { AiOutlineTwitter, AiFillCalendar } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiSolidUser,
  BiMessageSquareDetail,
  BiSolidPhone,
  BiSolidEnvelope,
} from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="card about-us">
            <h2 className="title">ABOUT US</h2>
            <p className="text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="icon-list">
              <li className="icon-items" data-aos="fade-up">
                <Link className="i" to="/">
                  {" "}
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li className="icon-items" data-aos="fade-up">
                <Link className="i" to="/">
                  <BiLogoFacebook />
                </Link>
              </li>
              <li className="icon-items" data-aos="fade-up">
                <Link className="i" to="/">
                  <BiLogoInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <div className="card recent-blog">
            <h2 className="title">RECENT BLOG</h2>
            <div className="line-card">
              <Link to="/" className="line-card-img">
                <img className="card-img" src={ImageOne} alt="restaurant" />
              </Link>
              <div className="info">
                <Link to="/" className="line-card-title">
                  Even the all-powerful Pointing has no control about
                </Link>
                <div className="meta">
                  <Link className="icon" to="/">
                    <AiFillCalendar className="i" />
                    Sept 15, 2018
                  </Link>
                  <Link className="icon" to="/">
                    <BiSolidUser className="i" />
                    Admin
                  </Link>
                  <Link className="icon" to="/">
                    <BiMessageSquareDetail className="i" />
                    19
                  </Link>
                </div>
              </div>
            </div>
            <div className="line-card">
              <Link to="/" className="line-card-img">
                <img className="card-img" src={ImageTwo} alt="restaurant" />
              </Link>
              <div className="info">
                <Link to="/" className="line-card-title">
                  Even the all-powerful Pointing has no control about
                </Link>
                <div className="meta">
                  <Link className="icon" to="/">
                    <AiFillCalendar className="i" />
                    Sept 15, 2018
                  </Link>
                  <Link className="icon" to="/">
                    <BiSolidUser className="i" />
                    Admin
                  </Link>
                  <Link className="icon" to="/">
                    <BiMessageSquareDetail className="i" />
                    19
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card services-info">
            <h2 className="title">SERVICES</h2>
            <ul className="secvices-list">
              <li className="services-items">
                <Link to="/">Cooked</Link>
              </li>
              <li className="services-items">
                <Link to="/">Deliver</Link>
              </li>
              <li className="services-items">
                <Link to="/">Quality Foods</Link>
              </li>
              <li className="services-items">
                <Link to="/">Mixed</Link>
              </li>
            </ul>
          </div>
          <div className="card quetion">
            <h2 className="title">HAVE A QUESTIONS?</h2>
            <ul className="primary-info-list">
              <li className="primary-info-items">
                <FaLocationDot className="i" />
                <span className="text"></span> 203 Fake St. Mountain View, San
                Francisco, California, USA
              </li>
              <li className="primary-info-items">
                <BiSolidPhone className="i" />
                <a href="tel:+23923929210" className="tel">
                  +2 392 3929 210
                </a>
              </li>
              <li className="primary-info-items">
                <BiSolidEnvelope className="i" />
                <a href="mailto:someone@example.com" className="mail">
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="last">Copyright © 2023 All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
