//icon
import { IoFastFoodOutline } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { LiaPizzaSliceSolid } from "react-icons/lia";

const ServicesSection = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="row">
            <div data-aos="fade-up" className="services-top">
              <h2 className="title">OUR SERVICES</h2>
              <p className="text">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="services-bottom">
              <div className="card">
                <div className="services-img">
                  <IoFastFoodOutline className="" />
                </div>
                <h3 className="card-title">HEALTHY FOODS</h3>
                <p className="card-text">
                  Even the all-powerful Pointing has no control about the blind
                  texts; it is an almost unorthographic.
                </p>
              </div>
              <div className="card">
                <div className="services-img">
                  <MdDeliveryDining className="" />
                </div>
                <h3 className="card-title">FASTEST DELIVERY</h3>
                <p className="card-text">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
              <div className="card">
                <div className="services-img">
                  <LiaPizzaSliceSolid />
                </div>
                <h3 className="card-title">ORIGINAL RECIPES</h3>
                <p className="card-text">
                  Even the all-powerful Pointing has no control about the blind
                  texts; it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
