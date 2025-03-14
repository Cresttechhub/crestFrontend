import React from "react";
import HeroImg from "../../images/hero.png"
import Button from "../../components/Button/Button";

const Hero = () => {
  return(
    <div className="container h-[500px] flex items-center justify-between mx-auto mt-36">
      <div className="w-[50%] ml-6">
        <h2 className="text-[#009E65] font-medium text-5xl mb-1">Best Choices</h2>
        <h2 className="font-medium text-5xl">For Your Personal Growth</h2>
        <p className="mt-4.5 mb-2.5">The Crest Tech Hub is an EdTech organization that provides organizational needs; offers edtech 
          training programs for young people in tech and provides personalized experimental learnings developing 
          unique mentorship model
        </p>
        <Button />
      </div>

      <div className="flex">
        <img src={HeroImg} alt="heroImg" className="h-[500px] " />
      </div>
    </div>
  );
};

export default Hero;
