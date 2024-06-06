import { Link } from "react-router-dom";
//img
import PhotoOne from "../assets/img/gallery-1.jpg";
import PhotoTwo from "../assets/img/gallery-2.jpg";
import PhotoThree from "../assets/img/gallery-3.jpg";
import PhotoFour from "../assets/img/gallery-4.jpg";
//statistic
import NumberCounter from "./Statistic";
//icon
import { LiaPizzaSliceSolid, LiaLaughSquint } from "react-icons/lia";
import { PiMedal } from "react-icons/pi";
import { LuChefHat } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

const ImageGallery = () => (
  <>
    <section className="image-line">
      <div className="row">
        <Link to="/gallery/1" className="card" data-aos="fade-up">
          <img className="image" src={PhotoOne} alt="human" />
          <div className="i">
            <FaSearch />
          </div>
        </Link>
        <Link to="/gallery/2" className="card" data-aos="fade-up">
          <img className="image" src={PhotoTwo} alt="human" />
          <div className="i">
            <FaSearch />
          </div>
        </Link>
        <Link to="/gallery/3" className="card" data-aos="fade-up">
          <img className="image" src={PhotoThree} alt="human" />
          <div className="i">
            <FaSearch />
          </div>
        </Link>
        <Link to="/gallery/4" className="card" data-aos="fade-up">
          <img className="image" src={PhotoFour} alt="human" />
          <div className="i">
            <FaSearch />
          </div>
        </Link>
      </div>
    </section>
    <section className="statistics">
      <div className="over-lay"></div>
      <div className="container">
        <div className="row">
          <div className="statistics-box" data-aos="fade-up">
            <div className="card">
              <p className="i">
                <LiaPizzaSliceSolid />
              </p>
              <span className="title">
                <NumberCounter
                  start={1}
                  end={100}
                  step={1}
                  className="yourClass"
                />
              </span>
              <p className="text">Pizza Branches</p>
            </div>
            <div className="card">
              <p className="i">
                <PiMedal />
              </p>
              <span className="title">
                <NumberCounter
                  start={1}
                  end={85}
                  step={1}
                  className="yourClass"
                />
              </span>
              <p className="text">Number of Awards</p>
            </div>
            <div className="card">
              <p className="i">
                <LiaLaughSquint />
              </p>
              <span className="title">
                <NumberCounter
                  start={6000}
                  end={10567}
                  step={34}
                  className="yourClass"
                />
              </span>
              <p className="text">Happy Customer</p>
            </div>
            <div className="card">
              <p className="i">
                <LuChefHat />
              </p>
              <span className="title">
                <NumberCounter
                  start={650}
                  end={900}
                  step={4}
                  className="yourClass"
                />
              </span>
              <p className="text">Staff</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ImageGallery;
