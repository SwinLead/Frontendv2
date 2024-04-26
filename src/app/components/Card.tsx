import React from "react";
import Button from "./Button";

interface CardProps {
  heading: string;
  topic: string;
  desc: string;
  logo: string;
  to: string;
}

const Card: React.FC<CardProps> = ({ heading, topic, desc, logo, to }) => {
  return (
    <div className="m-6 bg-white drop-shadow md:max-w-xl px-5 pt-5 pb-12">
      <h5 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight text-[#ED1C2E]">
        {heading}
      </h5>
      <div className="flex items-center mb-3">
        <img
          className="object-cover w-16 rounded-t-lg md:h-auto md:w-24 "
          src={logo}
          alt="Logo"
        />
        <div className="mx-5">
          <h6 className="text-md sm:text-xl font-medium text-[#800021] mb-2">
            {topic}
          </h6>
          <p className="font-normal text-black text-xs sm:text-md xl:text-sm">
            {desc}
          </p>
        </div>
      </div>
      <div className="float-right">
        <Button text="Read More" to={to}></Button>
      </div>
    </div>
  );
};

export default Card;
