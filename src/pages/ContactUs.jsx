import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Btn from './Btn'

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.73061,
  lng: -73.935242,
};

const MyComponent = () => {
  return (
    <div>
      <section className="contact">
        <div className="row">
          <div className="left-side">
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="right-side" data-aos="fade-up">
            <h3 className="title">Contact Us</h3>
            <form>
              <div className="form-bar">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-bar">
                <input
                  type="text"
                  name="surname"
                  className="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-bar">
                <textarea
                  cols="30"
                  rows="3"
                  className="form-control"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              {/* <button className="btn" type="submit">
                Send
              </button> */}
              <Btn text="Send" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
