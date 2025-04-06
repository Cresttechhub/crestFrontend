import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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

const words = ["Build.", "Grow.", "Create."];

const images = [image1, image2, image3, image4, image5];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const changeWord = () => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    const displayNextWord = () => {
      timeoutId = setTimeout(() => {
        changeWord();
      }, 2000); // 2 seconds delay before transitioning
    };

    displayNextWord();

    return () => clearTimeout(timeoutId);
  }, [index]);

  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStage((prev) => (prev + 1) % 2); // Toggle between 0 and 1
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const imageVariants = {
    initial: { x: 0, opacity: 1, scale: 1, zIndex: 1 },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: { duration: 0.5 },
    },
    moveIn: (index) => ({
      x:
        index === 0
          ? 60
          : index === 1
          ? 30
          : index === 3
          ? -30
          : index === 4
          ? -60
          : 0,
      opacity: 1,
      scale: 1,
      zIndex: index === 2 ? 3 : index === 1 || index === 3 ? 2 : 1,
      transition: { duration: 0.5 },
    }),
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-32 md:mt-64 md:px-24 p-8 justify-between md:flex-row flex  flex-col">
      <div className="">
        <div className="text-[32px] md:text-[72px] text-[#1E1E1E] font-bold">
          Learn.
          <motion.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 600,
              damping: 150,
            }}
            className="text-green-600 inline-block"
          >
            {words[index]}
          </motion.span>
          <h1>Innovate.</h1>
        </div>

        <p className="mt-4 text-[14px] md:text-[16px] text-[#6D737A] min-w-[340px] md:max-w-[596px]">
          Gain in-demand tech skills online with expert mentorship, hands-on
          projects, and real-world training. Join live classes, build a
          portfolio, connect with industry experts, and access internships-all
          affordably!
        </p>
        <div className="flex items-center  text-[14px] md:text-[16px] mt-12 md:mt-6">

          <Link
            to="/enroll"
            className="bg-[#009E65] text-[16px] text-white py-5 px-8 rounded-[15px] flex items-center md:w-full"
          >
            <img src={flight} alt="" className="mr-2 w-[17px]" />
            Get Started Today
          </Link>
          <div className="ml-4 hidden md:flex items-center border border-[#737373] rounded-[15px] px-8 py-5 text-[#6D737A] text-[14px] w-full">

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
      <div className="relative mt-20 md:mt-0">
        <img
          src={homeHero}
          alt="Woman on laptop"
          className="bg-[#D1F1E5] rounded-3xl relative"
        />
        <img
          src={cap}
          alt="cap"
          className="absolute top-12 right-2 md:-right-16 w-30 md:w-40"
        />
        <img
          src={laptop}
          alt="laptop"
          className="absolute top-80 -left-12 md:-left-16 w-30 md:w-40"
        />

        {/* Profile Images */}

        <div className="absolute left-60 md:-right-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-[#FFFFFF] rounded-[25px] shadow-lg p-4 flex flex-col items-center w-[400px]">
            <div className="flex relative w-full justify-center items-center">
              <AnimatePresence initial={false} custom={animationStage}>
                {images.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Profile ${index + 1}`}
                    initial="initial"
                    animate={animationStage === 0 ? "animate" : "moveIn"}
                    exit="exit"
                    variants={imageVariants}
                    custom={index}
                    style={{
                      ...(animationStage === 0 && {
                        transform: `translateX(${(index - 2) * 50}px)`,
                      }),
                    }}
                  />
                ))}
              </AnimatePresence>
            </div>
            <div className="text-[#1E1E1E] flex items-center justify-center space-x-2 mt-4">
              <h1 className="text-[30px] md:text-[40px] font-medium">10K </h1>
              <span className="text-[14px] md:text-[16px]">
                Learners & Counting!
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#f6f9f8] rounded-[25px] -z-10 -mt-4 -ml-4 -mr-4" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
