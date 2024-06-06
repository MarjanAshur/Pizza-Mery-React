import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//css
import "./assets/styles/base.css";
//react
import { BrowserRouter } from "react-router-dom";
//aos
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
