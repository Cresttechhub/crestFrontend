import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const How = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const steps = [
    "Sign Up",
    "Join Live Classes",
    "Build Projects",
    "Get Certified",
  ];

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen(); // Run on mount
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="-mt-0 md:px-24 py-16 md:p-0 p-5">
      <h1 className="md:text-center text-[18px] md:text-[30px] text-[#1E1E1E] font-[700] md:mb-20 mb-7">
        How It Works
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:px-6">
        {steps.map((title, index) => {
          const isActive = index === activeIndex;
          const isLeft = index < activeIndex;
          const isRight = index > activeIndex;

          return (
            <motion.div
              key={index}
              initial={{ scale: 1, backgroundColor: "#009E65", x: 0 }}
              animate={{
                scale: window.innerWidth < 768 ? 1 : isActive ? 1.1 : 1,
                x: window.innerWidth < 768 ? 0 : isLeft ? -10 : isRight ? 10 : 0,
                backgroundColor: isActive ? "#005c39" : "#009E65",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col space-y-2 rounded-2xl overflow-hidden p-6 md:p-10 md:items-center h-full"
            >
              <div className="bg-white -mt-2 w-14 md:w-16 mx-auto rounded-lg py-2">
                <h1 className="font-[600] text-[#00A665] text-[16px] md:text-[18px] text-center">
                  {index + 1}
                </h1>
              </div>
              <h2 className="text-[18px] md:text-[20px] font-[600] text-white text-center">
                {title}
              </h2>
              <p className="text-white font-[400] text-[14px] md:text-[16px] text-center">
                {index === 0 && "Choose a program & register online"}
                {index === 1 && "Learn from industry mentors"}
                {index === 2 && "Gain hands-on experience"}
                {index === 3 && "Stand out in the tech job market"}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default How;
