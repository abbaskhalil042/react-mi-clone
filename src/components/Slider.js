import React from "react";
import { Carousel } from "@material-tailwind/react";
// import {banner} from "../data/"

const Slider = ({ start }) => {
  return (
    <Carousel transition={{ duration: .1 }} className="rounded-xl" >
      {/* <img
        // src={item}
        src='https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif'
        alt="image 1"
        className="h-full w-full object-cover"
      /> */}
      {start.map((item) => (
        <img
          src={item}
          // src='https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif'
          alt="image 1"
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
};
export default Slider;
