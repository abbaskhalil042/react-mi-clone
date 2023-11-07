import React from "react";

const Heading = ({text}) => {
  return (
    <div className="start-heading flex justify-center items-center">
      <div className="w-[30rem] h-[.1rem] bg-black "></div>
      <p className=" text-black p-[3rem] text-[2rem] font-thin ">{text}</p>
      <div className="w-[30rem] h-[.1rem] bg-black" ></div>
      <div ></div>
    </div>
  );
};

export default Heading;
