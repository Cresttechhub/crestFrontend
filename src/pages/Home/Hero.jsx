import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../../images/Ellipse 1.svg";
import image2 from "../../images/Ellipse 2.svg";
import image3 from "../../images/Ellipse 3.svg";
import image4 from "../../images/Ellipse 4.svg";
import image5 from "../../images/Ellipse 5.svg";
import laptop from "../../images/laptop.svg";
import cap from "../../images/graduation-cap.svg";
import homeHero from "../../images/home-hero.svg";
import flight from "../../images/flight.svg";
import { IoSearch } from "react-icons/io5";
import { PiRocketLight } from "react-icons/pi";

const words = ["Build.", "Grow.", "Create."];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mt-64 px-16 py-6 flex flex-row items-center justify-between">
      {/* Text Section */}
      <div className="">
        <div className="text-[72px] text-[#1E1E1E] font-bold">
          Learn.{" "}
          <motion.span
            key={words[index]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-600"
          >
            {words[index]}
          </motion.span>
          <h1>Innovate.</h1>
        </div>

        <p className="mt-4 text-[16px] text-[#6D737A] w-[596px]">
          Gain in-demand tech skills online with expert mentorship, hands-on
          projects, and real-world training. Join live classes, build a
          portfolio, connect with industry experts, and access internships-all
          affordably!
        </p>
        <div className="flex items-center mt-6">
          <button className="bg-[#009E65] text-[16px] text-white py-2 px-8 rounded-[15px] flex items-center w-full">
            <img src={flight} alt="" className="mr-2 w-[17px]" />
            Get Started Today
          </button>
          <div className="ml-4 flex items-center border border-[#737373] rounded-[15px] px-8 py-2 text-[#6D737A] text-[14px] w-full">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="outline-none w-full"
            />
            <IoSearch className="text-[#1E1E1E] text-[18px]" />
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative">
        <img
          src={homeHero}
          alt="Woman on laptop"
          className="bg-[#D1F1E5] rounded-3xl relative"
        />
        <img src={cap} alt="cap" className="absolute top-12 -right-16 w-40" />
        <img
          src={laptop}
          alt="laptop"
          className="absolute top-80 -left-16 w-40"
        />

        {/* Profile Images */}
        <div className="bg-[#FFFFFF] rounded-[25px] shadow-[0px_2px_24px_16px_#ffffff] p-4 mt-6 flex flex-col items-center relative">
          <div className="flex relative">
            <div className="flex">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
            </div>
          </div>
          <div className="text-[#1E1E1E] flex items-center space-x-2 mt-6">
            <h1 className="text-[40px] font-medium">10K </h1>
            <span className="text-[16px]">Learners & Counting!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
