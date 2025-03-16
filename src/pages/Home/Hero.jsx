import React from "react";
import heroImg from "../../assets/images/hero.svg";
const Hero = () => {
  return (
    <div className="px-8 py-6 bg-[#fff]">
      {/* top */}
      <div className="flex items-center space-x-10">
        {/* left */}
        <div className="">
          <h1 className="text-[#009365] text-[50px] font-bold">Best Choices</h1>
          <h1 className="mt-0 text-[#000000] font-bold text-[50px]">
            For Your Personal Growth
          </h1>
          <p className="mt-4 text-[19px] font-medium text-[#727272] w-[630px]">
            The Crest Tech Hub is an EdTech organization that provides
            organizational needs; offers edtech training programs for young
            people in tech and provides personalized experimental learnings
            developing unique mentorship model
          </p>
          <button className="mt-12 bg-[#009365] font-medium text-[16px] text-white  px-14 py-2 rounded-md hover:bg-[#579b85]">
            Contact us
          </button>
        </div>
        {/* right */}
        <div className="relative">
          <img src={heroImg} alt="hero image" />
          <div className="rounded-md w-11 h-11 bg-[#009365] absolute top-2 left-4 transform rotate-45 ml-20" />
          <div className="rounded-full w-24 h-24 bg-[#D9D9D9] absolute -top-1 left-48 mt-8" />
        </div>
      </div>
      {/* bottom */}
      <div></div>
    </div>
  );
};

export default Hero;
