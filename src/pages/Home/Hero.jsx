import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";


import HeroImg from "./HeroImages/Hero.png"
import Vector from "./HeroImages/Vector.png"
import Square from "./HeroImages/Square.png"
import Vector1 from "./HeroImages/Vector1.png"
import Ellipse from "./HeroImages/Ellipse.png"


const Hero = () => {
  return (
    <div className="container h-[500px] flex items-center justify-between mx-auto mt-39">
      <div className="w-[50%] ml-6">
        <h2 className="text-[#009E65] font-medium text-5xl mb-1">Best Choices</h2>
        <h2 className="font-medium text-5xl">For Your Personal Growth</h2>
        <p className="mt-4.5 mb-2.5 text-2xl">The Crest Tech Hub is an EdTech organization that provides organizational needs; offers edtech
          training programs for young people in tech and provides personalized experimental learnings developing
          unique mentorship model
        </p>
        <img src={Vector1} alt="vector1" className="absolute -left-6 -bottom-46 z-[-1]" />
        <div className="mt-14">
          <Link to="/contact" className="hover:text-teal-400">
            <Button size="lg" />
          </Link>
        </div>
      </div>

      <div className="flex">
        <img src={Vector} alt="vectorImage" className="h-1/2 w-3/4 absolute right-0 -top-3 z-[-1]" />
        <img src={Ellipse} alt="ellipse" className="absolute left-8/12 top-42" />
        <img src={Square} alt="square" className="absolute top-40 left-7/12 " />
        <img src={HeroImg} alt="heroImg" className="h-[500px] " />
      </div>
    </div>
  );
};

export default Hero;
