import React from "react";
import  "../styles/OfferCss.css"

const Offers = ({ offer }) => {
  return (
    
    <div className="offer flex justify-center items-center m-[1rem] ">
      {offer.map((item) => (
        <img className="hover:shadow-lg p-[1rem]" src={item.image} key={item.index} />
      ))}
    </div>
  );
};

export default Offers;
