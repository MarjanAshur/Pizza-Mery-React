import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// section
import RestaurantSection from "../pages/Restaurant";
import ServicesSection from "../pages/OurServices";
import MenuSection from "../pages/Menu";
import FoodType from "../pages/FoodType";
import RecentBlog from "../pages/RecentBlog";
import MyComponent from "../pages/ContactUs";
import ImageLine from "../pages/ImageLine";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../assets/styles/home-slider.css";
//img
import bg from "../assets/img/bg_1.jpg";
import productFirst from "../assets/img/bg_1.png";
import productSecond from "../assets/img/bg_2.png";

const Home = () => {
  return (
    <>
      <section className="home-slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={-1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="welcome">
              <div className="over-lay"></div>
              <div className="container">
                <div className="row">
                  <div className="welcome-box">
                    <span className="info">Welcome</span>
                    <h1 className="title">
                      We cooked your desired Pizza Recipe
                    </h1>
                    <p className="text">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                    <div className="btn">
                      <Link to="/">Order Now</Link>
                      <Link to="/">View Menu</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-area">
              <div className="bg-img">
                <img src={bg} alt="" />
              </div>
              <div className="info">
                <div className="container">
                  <div className="row">
                    <div className="right-side right-text">
                      <span className="sub-title">Delicious</span>
                      <h1 className="title">Italian Cuizine</h1>
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                      <div className="btn">
                        <Link to="/">Order Now</Link>
                        <Link to="/">View Menu</Link>
                      </div>
                    </div>
                    <div className="left-side">
                      <img src={productFirst} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-area">
              <div className="bg-img">
                <img src={bg} alt="" />
              </div>
              <div className="info">
                <div className="container">
                  <div className="row">
                    <div className="left-side">
                      <img src={productSecond} alt="" />
                    </div>
                    <div className="right-side">
                      <span className="sub-title">Crunchy</span>
                      <h1 className="title">Italian Pizza</h1>
                      <p className="text">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                      <div className="btn">
                        <Link to="/">Order Now</Link>
                        <Link to="/">View Menu</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <RestaurantSection />
      <ServicesSection />
      <MenuSection />
      <ImageLine />
      <FoodType />
      <RecentBlog />
      <MyComponent />
    </>
  );
};

export default Home;
