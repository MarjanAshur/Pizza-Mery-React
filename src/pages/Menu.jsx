import { Link } from "react-router-dom";

//image
import PizzaOne from "../assets/img/pizza-1.jpg";
import PizzaTwo from "../assets/img/pizza-2.jpg";
import PizzaThree from "../assets/img/pizza-3.png";
import PizzaFour from "../assets/img/pizza-4.jpg";
import PizzaFive from "../assets/img/pizza-5.jpg";
import PizzaSix from "../assets/img/pizza-6 .png";
import PizzaSeven from "../assets/img/pizza-7.jpg";
import PizzaEight from "../assets/img/pizza-8.jpg";
const MenuSection = () => {
  return (
    <>
      <section className="meal">
        <div className="meal-head-type-first">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" className="meal-top-one">
                <h2 className="title">HOT PIZZA MEALS</h2>
                <p className="text">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="meal-middle">
          <div className="row">
            <div className="first-line" data-aos="fade-up">
              <div className="meal-card">
                <div className="pizza-img">
                  <Link to="/" className="a">
                    <img className="image" src={PizzaOne} alt="pizza" />
                  </Link>
                </div>
                <div className="pizza-info">
                  <h5 className="title">Italian Pizza</h5>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <div className="price-and-btn">
                    <span className="price">$2.90</span>
                    <Link to="/order" className="btn">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
              <div className="meal-card">
                <div className="pizza-img">
                  <Link to="/" className="a">
                    <img className="image" src={PizzaTwo} alt="pizza" />
                  </Link>
                </div>
                <div className="pizza-info">
                  <h5 className="title">Greek Pizza</h5>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <div className="price-and-btn">
                    <span className="price">$2.90</span>
                    <Link to="/order" className="btn">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
              <div className="meal-card">
                <div className="pizza-img">
                  <Link to="/" className="a">
                    <img className="image" src={PizzaThree} alt="pizza" />
                  </Link>
                </div>
                <div className="pizza-info">
                  <h5 className="title">Caucasian Pizza</h5>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <div className="price-and-btn">
                    <span className="price">$2.90</span>
                    <Link to="/order" className="btn">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-line" data-aos="fade-up">
              <div className="meal-card">
                <div className="pizza-info">
                  <h5 className="title">American Pizza</h5>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <div className="price-and-btn">
                    <span className="price">$2.90</span>
                    <Link to="/order" className="btn">
                      Order
                    </Link>
                  </div>
                </div>
                <div className="pizza-img">
                  <Link to="/" className="a">
                    <img className="image" src={PizzaFour} alt="pizza" />
                  </Link>
                </div>
              </div>
              <div className="meal-card">
                <div className="pizza-info">
                  <h5 className="title">Tomatoe Pie</h5>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <div className="price-and-btn">
                    <span className="price">$2.90</span>
                    <Link to="/order" className="btn">
                      Order
                    </Link>
                  </div>
                </div>
                <div className="pizza-img">
                  <Link to="/" className="a">
                    <img className="image" src={PizzaFive} alt="pizza" />
                  </Link>
                </div>
              </div>
              <div className="meal-card">
                <div className="pizza-info">
                  <h5 className="title">Margherita</h5>
                  <p className="text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <div className="price-and-btn">
                    <span className="price">$2.90</span>
                    <Link to="/order" className="btn">
                      Order
                    </Link>
                  </div>
                </div>
                <div className="pizza-img">
                  <Link to="/" className="a">
                    <img className="image" src={PizzaSix} alt="pizza" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="meal-head-type-second">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" className="meal-top-two">
                <h2 className="title">OUR MENU PRICING</h2>
                <div className="decoration">
                  <span className="decoration-items"></span>
                  <span className="decoration-items"></span>
                  <span className="decoration-items"></span>
                </div>
                <p className="text">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-catalogue">
          <div className="container">
            <div className="row">
              <div className="left-side" data-aos="fade-up">
                <div className="card">
                  <div className="card-img">
                    <img src={PizzaOne} alt="pizza" />
                  </div>
                  <div className="card-info">
                    <div className="up">
                      <h4 className="title">Italian Pizza</h4>
                      <span className="price">$20.00</span>
                    </div>
                    <div className="down">
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img">
                    <img src={PizzaTwo} alt="pizza" />
                  </div>
                  <div className="card-info">
                    <div className="up">
                      <h4 className="title">Hawaiian Pizza</h4>
                      <span className="price">$29.00</span>
                    </div>
                    <div className="down">
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img">
                    <img src={PizzaThree} alt="pizza" />
                  </div>
                  <div className="card-info">
                    <div className="up">
                      <h4 className="title">Greek Pizza</h4>
                      <span className="price">$20.00</span>
                    </div>
                    <div className="down">
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img">
                    <img src={PizzaFour} alt="pizza" />
                  </div>
                  <div className="card-info">
                    <div className="up">
                      <h4 className="title">Bacon Crispy Thins</h4>
                      <span className="price">$20.00</span>
                    </div>
                    <div className="down">
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-side" data-aos="fade-up">
                <div className="card">
                  <div className="card-img">
                    <img src={PizzaFive} alt="pizza" />
                  </div>
                  <div className="card-info">
                    <div className="up">
                      <h4 className="title">Hawaiian Special</h4>
                      <span className="price">$49.91</span>
                    </div>
                    <div className="down">
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img">
                    <img src={PizzaSix} alt="pizza" />
                  </div>
                  <div className="card-info">
                    <div className="up">
                      <h4 className="title">Ultimate Overload</h4>
                      <span className="price">$20.00</span>
                    </div>
                    <div className="down">
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img">
                    <img src={PizzaSeven} alt="pizza" />
                  </div>
                  <div className="card-info">
                    <div className="up">
                      <h4 className="title">Bacon Pizza</h4>
                      <span className="price">$20.00</span>
                    </div>
                    <div className="down">
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img">
                    <img src={PizzaEight} alt="pizza" />
                  </div>
                  <div className="card-info">
                    <div className="up">
                      <h4 className="title">Ham & Pineapple</h4>
                      <span className="price">$20.00</span>
                    </div>
                    <div className="down">
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;
