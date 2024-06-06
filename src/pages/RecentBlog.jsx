import { Link } from "react-router-dom";
//img
import BlogOne from "../assets/img/image_1.jpg";
import BlogTwo from "../assets/img/image_2.jpg";
import BlogThree from "../assets/img/image_3.jpg";
//icon
import { BiMessageSquareDetail } from "react-icons/bi";
const BlogSection = () => {
  return (
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
          <div data-aos="fade-up" className="blog-bottom">
            <div className="card">
              <div className="image-card">
                <Link to="/blog/1" className="blog-img">
                  <img src={BlogOne} alt="restaurant" />
                </Link>
              </div>
              <div className="down">
                <div className="meta">
                  <span className="info">Sept 10, 2018</span>
                  <span className="info">Admin</span>
                  <span className="info">
                    <BiMessageSquareDetail className="i" />3
                  </span>
                </div>
                <h4 className="title">The Delicious Pizza</h4>
                <p className="text">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
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
                  <span className="info">Sept 10, 2018</span>
                  <span className="info">Admin</span>
                  <span className="info">
                    <BiMessageSquareDetail className="i" />3
                  </span>
                </div>
                <h4 className="title">The Delicious Pizza</h4>
                <p className="text">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
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
                  <span className="info">Sept 10, 2018</span>
                  <span className="info">Admin</span>
                  <span className="info">
                    <BiMessageSquareDetail className="i" />3
                  </span>
                </div>
                <h4 className="title">The Delicious Pizza</h4>
                <p className="text">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
