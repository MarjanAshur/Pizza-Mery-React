import React from "react";
import { Link } from "react-router-dom";
//img
import BlogOne from "../assets/img/image_1.jpg";
import BlogTwo from "../assets/img/image_2.jpg";
import BlogThree from "../assets/img/image_3.jpg";
import BlogFour from "../assets/img/image_4.jpg";
import BlogFive from "../assets/img/image_5.jpg";
import BlogSix from "../assets/img/image_6.jpg";
//icon
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
function Blog() {
  return (
    <>
      <section className="blog-page">
        <div className="over-lay"></div>
        <div className="container">
          <div className="row">
            <div className="welcome-box">
              <h1 className="title">READ OUR BLOG</h1>
              <p className="text">
                <Link to="/">Home</Link> menu
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <div className="row">
            <div data-aos="fade-up" className="blog-top">
              <h2 className="title">RECENT FROM BLOG</h2>
              <p className="text">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="blog-bottom" data-aos="fade-up">
              <div className="card">
                <div className="image-card">
                  <Link to="/blog/1" className="blog-img">
                    <img src={BlogOne} alt="restaurant" />
                  </Link>
                </div>

                <div className="down">
                  <div className="meta">
                    <Link to="#" className="info">
                      Sept 10, 2018
                    </Link>
                    <Link to="#" className="info">
                      Admin
                    </Link>
                    <Link to="#" className="info">
                      <BiMessageSquareDetail className="i" />3
                    </Link>
                  </div>
                  <h4 className="title">The Delicious Pizza</h4>
                  <p className="text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image-card">
                  <Link to="/blog/2" className="blog-img">
                    <img src={BlogTwo} alt="restaurant" />
                  </Link>
                </div>

                <div className="down">
                  <div className="meta">
                    <Link to="#" className="info">
                      Sept 10, 2018
                    </Link>
                    <Link to="#" className="info">
                      Admin
                    </Link>
                    <Link to="#" className="info">
                      <BiMessageSquareDetail className="i" />3
                    </Link>
                  </div>
                  <h4 className="title">The Delicious Pizza</h4>
                  <p className="text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image-card">
                  <Link to="/blog/3" className="blog-img">
                    <img src={BlogThree} alt="restaurant" />
                  </Link>
                </div>

                <div className="down">
                  <div className="meta">
                    <Link to="#" className="info">
                      Sept 10, 2018
                    </Link>
                    <Link to="#" className="info">
                      Admin
                    </Link>
                    <Link to="#" className="info">
                      <BiMessageSquareDetail className="i" />3
                    </Link>
                  </div>
                  <h4 className="title">The Delicious Pizza</h4>
                  <p className="text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image-card">
                  <Link to="/blog/1" className="blog-img">
                    <img src={BlogFour} alt="restaurant" />
                  </Link>
                </div>

                <div className="down">
                  <div className="meta">
                    <Link to="#" className="info">
                      Sept 10, 2018
                    </Link>
                    <Link to="#" className="info">
                      Admin
                    </Link>
                    <Link to="#" className="info">
                      <BiMessageSquareDetail className="i" />3
                    </Link>
                  </div>
                  <h4 className="title">The Delicious Pizza</h4>
                  <p className="text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image-card">
                  <Link to="/blog/1" className="blog-img">
                    <img src={BlogFive} alt="restaurant" />
                  </Link>
                </div>

                <div className="down">
                  <div className="meta">
                    <Link to="#" className="info">
                      Sept 10, 2018
                    </Link>
                    <Link to="#" className="info">
                      Admin
                    </Link>
                    <Link to="#" className="info">
                      <BiMessageSquareDetail className="i" />3
                    </Link>
                  </div>
                  <h4 className="title">The Delicious Pizza</h4>
                  <p className="text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image-card">
                  <Link to="/blog/1" className="blog-img">
                    <img src={BlogSix} alt="restaurant" />
                  </Link>
                </div>

                <div className="down">
                  <div className="meta">
                    <Link to="#" className="info">
                      Sept 10, 2018
                    </Link>
                    <Link to="#" className="info">
                      Admin
                    </Link>
                    <Link to="#" className="info">
                      <BiMessageSquareDetail className="i" />3
                    </Link>
                  </div>
                  <h4 className="title">The Delicious Pizza</h4>
                  <p className="text">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="number-bar">
                <ul className="number-list">
                  <li className="number-items">
                    <Link to="/">
                      <FaAngleLeft />
                    </Link>
                  </li>
                  <li className="number-items">
                    <Link to="/" className="active-number-item">
                      1
                    </Link>
                  </li>
                  <li className="number-items">
                    <Link to="#">2</Link>
                  </li>
                  <li className="number-items">
                    <Link to="#">3</Link>
                  </li>
                  <li className="number-items">
                    <Link to="#">4</Link>
                  </li>
                  <li className="number-items">
                    <Link to="#">5</Link>
                  </li>
                  <li className="number-items">
                    <Link to="#">
                      <FaAngleRight />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
