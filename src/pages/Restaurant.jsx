//react
import { Link } from "react-router-dom";
//Icon
import { BiSolidPhone, BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLocationCrosshairs, FaRegClock } from "react-icons/fa6";
import { GiFullPizza } from "react-icons/gi";

const RestaurantSection = () => {
  return (
    <>
      <section className="primary-info">
        <div className="row">
          <div className="left-side">
            <div className="info-card" data-aos="fade-up">
              <BiSolidPhone className="i" />
              <Link to="tel:+0004567890" className="title">
                {" "}
                000 (123) 456 7890
              </Link>
              <p className="text">A small river named Duden flows</p>
            </div>
            <div className="info-card" data-aos="fade-up">
              <FaLocationCrosshairs className="i" />
              <h3 className="title">198 West 21th Street</h3>
              <p className="text">Suite 721 New York NY 10016</p>
            </div>
            <div className="info-card" data-aos="fade-up">
              <FaRegClock className="i" />
              <h3 className="title">
                Open <span>Monday</span>-<span>Friday</span>
              </h3>
              <p className="text">
                <span>8:00am</span> - <span>9:00pm</span>
              </p>
            </div>
          </div>
          <div className="right-side">
            <ul className="icon-list">
              <li className="icon-items" data-aos="fade-up">
                <Link className="i" to="/">
                  {" "}
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li className="icon-items" data-aos="fade-up">
                <Link className="i" to="/">
                  {" "}
                  <BiLogoFacebook />
                </Link>
              </li>
              <li className="icon-items" data-aos="fade-up">
                <Link className="i" to="/">
                  {" "}
                  <BiLogoInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="restaurant">
        <div className="row">
          <div className="restaurant-img"></div>
          <div className="restaurant-info">
            <h2 className="title" data-aos="fade-up">
              WELCOME TO
              <span>
                {" "}
                <GiFullPizza /> PIZZA{" "}
              </span>{" "}
              A RESTAURANT
            </h2>
            <p className="text" data-aos="fade-up">
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantSection;
