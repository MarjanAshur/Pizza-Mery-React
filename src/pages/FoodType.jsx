import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//db
import tabDb from "../db/FoodDb";
//img
import About from "../assets/img/about.jpg";

const FoodType = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let newArr = tabDb.filter((item) => item.category === activeTab);
    setData(newArr);
  }, [activeTab]);

  return (
    <section className="food-type">
      <div className="row">
        <div className="left-side">
          <img src={About} alt="pizza" />
        </div>
        <div className="right-side">
          <div className="up-btn" data-aos="fade-up">
            <span
              to="/pizza"
              onClick={() => setActiveTab("pizza")}
              className={activeTab === "pizza" ? "active" : ""}
            >
              Pizza
            </span>
            <span
              to="/drink"
              onClick={() => setActiveTab("drink")}
              className={activeTab === "drink" ? "active" : ""}
            >
              Drinks
            </span>
            <span
              to="/burger"
              onClick={() => setActiveTab("burger")}
              className={activeTab === "burger" ? "active" : ""}
            >
              Burgers
            </span>
            <span
              to="/pasta"
              onClick={() => setActiveTab("pasta")}
              className={activeTab === "pasta" ? "active" : ""}
            >
              Pasta
            </span>
          </div>
          <div className="down" id={activeTab} data-aos="fade-up">
            {data &&
              data.map((product) => (
                <div className="card" key={product.id}>
                  <div className="pizza-img">
                    <Link to="/">
                      <img src={product.imgDeskop} alt="pizza" />
                    </Link>
                  </div>
                  <div className="pizza-info">
                    <h5 className="title">{product.titlE}</h5>
                    <p className="text">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia.
                    </p>
                    <span className="price">$2.90</span>
                    <div className="btn">
                      <Link to="/">Add to cart</Link>
                    </div>
                  </div>
                </div>
              ))}
            ;
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodType;
