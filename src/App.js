import { Route, Routes } from "react-router-dom";
//pages
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from "./components/MainMenu";
import Services from "./components/Services";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
//css
import "./assets/styles/header.css";
import "./assets/styles/restaurant.css";
import "./assets/styles/services.css";
import "./assets/styles/imageline.css";
import "./assets/styles/food.css";
import "./assets/styles/meal.css";
import "./assets/styles/blog.css";
import "./assets/styles/chef.css";
import "./assets/styles/contact.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
