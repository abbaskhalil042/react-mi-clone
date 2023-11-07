import React from "react";
import "../styles/StarProduct.css"
const StarProduct = ({ starProduct }) => {
  return (
    <div className="star-product ">
      <div className="left-img">
      <a href={starProduct[0].url}>
        <img src={starProduct[0].image}></img>
      </a>
      </div>
    <div className="right-img">
    <a href={starProduct[1].url}>
        <img src={starProduct[1].image}></img>
      </a>
      <a href={starProduct[2].url}>
        <img src={starProduct[2].image}></img>
      </a>
      <a href={starProduct[3].url}>
        <img src={starProduct[3].image}></img>
      </a>
    </div>
    </div>
  );
};

export default StarProduct;
