import React from "react";
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js";
import data from "./data/data.json"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import PostNavbar from "./components/PostNavbar.js"


function App() {
  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={data?.banner?.start}/>
        <Offers offer={data?.offer} />
        <Heading text="STAR HEADING" />
        <StarProduct starProduct={data?.starProduct}/>
        <Heading text="HOT ACCESSORIES" />
        <PostNavbar/>
        <Heading text="PRODUCT REVIEWS" />
      </Router>
   
    </>
  );
}

export default App;
