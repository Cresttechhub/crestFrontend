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
    initial: { x: 0, opacity: 0, scale: 0.8, zIndex: 1 },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: { duration: 0.5 },
    },
    moveIn: (index) => {
      // We calculate a base offset. 40px works well for both mobile and desktop cards.
      const offset = 40;

      const xPos =
        index === 0
          ? offset * 1.5
          : index === 1
            ? offset * 0.75
            : index === 3
              ? -(offset * 0.75)
              : index === 4
                ? -(offset * 1.5)
                : 0;

      return {
        x: xPos,
        opacity: 1,
        scale: 1,
        // Keeps the middle image (index 2) on top, others layered behind
        zIndex: index === 2 ? 10 : index === 1 || index === 3 ? 5 : 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
      };
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3 },
    },
  };
  return (
    <div className="mt-32 lg:mt-64 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Section: Text & Search */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
        <div className="text-[40px] md:text-[60px] lg:text-[72px] text-[#1E1E1E] font-bold leading-tight">
          Learn.{" "}
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
          <h1 className="mt-[-10px]">Innovate.</h1>
        </div>

        <p className="mt-6 text-[16px] md:text-[18px] text-[#6D737A] max-w-[500px] lg:max-w-[596px]">
          Gain in-demand tech skills online with expert mentorship, hands-on
          projects, and real-world training. Join live classes, build a
          portfolio, and access internships—all affordably!
        </p>

        {/* CTA & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full max-w-[500px] lg:max-w-none">
          <Link
            to="/signup"
            className="bg-[#009E65] text-[16px] text-white py-4 px-6 rounded-[15px] flex items-center lg:max-w-[400px] w-full"
          >
            <img src={flight} alt="" className="mr-2 w-[17px]" />
            Get Started Today
          </Link>

          <div className="flex items-center border border-[#737373] rounded-[15px] px-6 py-4 text-[#6D737A] w-full lg:max-w-[400px]">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="outline-none w-full bg-transparent text-[14px]"
            />
            <IoSearch className="text-[#1E1E1E] text-[20px] ml-2" />
          </div>
        </div>
      </div>

      {/* Right Section: Image & Floating Elements */}
      <div className="relative mt-16 lg:mt-0 w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end">
        <div className="relative">
          <img
            src={homeHero}
            alt="Woman on laptop"
            className="bg-[#D1F1E5] rounded-3xl w-full max-w-[450px] lg:max-w-[550px] object-cover"
          />

          {/* Decorative Icons - Scaled for Tablet */}
          <img
            src={cap}
            alt="cap"
            className="absolute -top-6 -right-4 md:-right-10 w-20 md:w-32 lg:w-40"
          />
          <img
            src={laptop}
            alt="laptop"
            className="absolute bottom-20 -left-6 md:-left-12 w-20 md:w-32 lg:w-40"
          />

          {/* Floating Profile Card - Responsive Width */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[350px] md:w-[400px]">
            <div className="bg-white rounded-[25px] shadow-2xl p-4 md:p-6 flex flex-col items-center border border-gray-100">
              <div className="flex relative w-full justify-center items-center h-12">
                <AnimatePresence initial={false} custom={animationStage}>
                  {images.map((image, idx) => (
                    <motion.img
                      key={idx}
                      src={image}
                      className="absolute w-10 h-10 rounded-full border-2 border-white object-cover"
                      initial="initial"
                      animate={animationStage === 0 ? "animate" : "moveIn"}
                      exit="exit"
                      variants={imageVariants}
                      custom={idx}
                      style={{
                        ...(animationStage === 0 && {
                          transform: `translateX(${(idx - 2) * 35}px)`,
                        }),
                      }}
                    />
                  ))}
                </AnimatePresence>
              </div>
              <div className="text-[#1E1E1E] flex items-center justify-center space-x-2 mt-2">
                <h1 className="text-[24px] md:text-[32px] font-bold">100+ </h1>
                <span className="text-[12px] md:text-[14px] font-medium text-gray-500">
                  Learners & Counting!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
