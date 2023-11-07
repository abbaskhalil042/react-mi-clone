import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import {logo} from "../data/data.json"

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-items">
        <Link className="logo" to="/" ><img className="logoImage" src={logo}  alt="logo"></img></Link>
        <Link className="navLinks" to="/miPhones">Mi phones</Link>
        <Link className="navLinks" to="/miPhones">Redmi Phones</Link>
        <Link className="navLinks" to="/miPhones">TV</Link>
        <Link className="navLinks" to="/miPhones">Laptops</Link>
        <Link className="navLinks" to="/miPhones">Fitness & Lifestyle</Link>
        <Link className="navLinks" to="/miPhones">Home</Link>
        <Link className="navLinks" to="/miPhones">Radio</Link>
        <Link className="navLinks" to="/miPhones">Accessories</Link>
        </div>
        <div className="searchBox">
            <input type="text" name="search" placeholder="Search products" ></input>
            {/* <img className="searchIcon" src="file:///C:/Users/Ritik%20gupta/Downloads/search_FILL0_wght400_GRAD0_opsz24.svg" ></img> */}

        </div>
     
    </div>
  );
};

export default Navbar;
