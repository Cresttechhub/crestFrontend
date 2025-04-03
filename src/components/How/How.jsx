import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const How = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = ["Sign Up", "Join Live Classes", "Build Projects", "Get Certified"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-20 p-8 md:p-16">
      <h1 className="text-center text-[24px] md:text-[30px] text-[#1E1E1E] font-[700] mb-10">
        How It Works
      </h1>
      
      {/* Use grid to control layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6">
        {steps.map((title, index) => {
          const isActive = index === activeIndex;
          const isLeft = index < activeIndex;
          const isRight = index > activeIndex;

          return (
            <motion.div
              key={index}
              initial={{ scale: 1, backgroundColor: "#009E65", x: 0 }}
              animate={{
                scale: isActive ? 1.1 : 1, 
                x: isLeft ? -10 : isRight ? 10 : 0, 
                backgroundColor: isActive ? "#005c39" : "#009E65",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col space-y-2 rounded-lg overflow-hidden p-6 md:p-10 items-center"
            >
              <div className="bg-white -mt-2 w-14 md:w-16 mx-auto rounded-lg py-2">
                <h1 className="font-[600] text-[#00A665] text-[16px] md:text-[18px] text-center">
                  {index + 1}
                </h1>
              </div>
              <h2 className="text-[18px] md:text-[20px] font-[600] text-white">{title}</h2>
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
