import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <section className="contact-page">
        <div className="over-lay"></div>
        <div className="container">
          <div className="row">
            <div className="welcome-box">
              <h1 className="title">contact us</h1>
              <p className="text">
                <Link to="/">Home</Link> menu
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="left-side" data-aos="fade-up">
              <h4 className="title">Contact Information</h4>
              <ul className="contact-list">
                <li className="contact-items">
                  <span className="item-title">Address:</span>198 West 21th
                  Street, Suite 721 New York NY 10016
                </li>
                <li className="contact-items">
                  <span className="item-title">Phone:</span>
                  <a href="tel:+1235235598" className="tel">
                    + 1235 2355 98
                  </a>
                </li>
                <li className="contact-items">
                  <span className="item-title">Email:</span>
                  <a href="mailto:someone@example.com" className="mail">
                    info@yoursite.com
                  </a>
                </li>
                <li className="contact-items">
                  <span className="item-title">Website:</span>
                  <Link to="/yoursite" className="site">
                    yoursite.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-side" data-aos="fade-up">
              <form>
                <div className="personality-info">
                  <div className="form-bar">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-bar">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-bar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-bar">
                  <textarea
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button className="btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
