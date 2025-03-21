import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [stat1, setStat1] = useState(10);
  const [stat2, setStat2] = useState(50);
  const [stat3, setStat3] = useState(30);

  const [animationComplete, setAnimationComplete] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true }); // Trigger only once

  useEffect(() => {
    if (inView && !animationComplete) {

  const [ref, inView] = useInView();

  
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setStat1((prev) => prev + 10);
        setStat2((prev) => prev + 50);
        setStat3((prev) => prev + 30);

        if (count === 3) {
          clearInterval(interval);
          setStat1(40);
          setStat2(200);
          setStat3(95);

      return () => clearInterval(interval);
    }
  }, [inView, animationComplete]);


  const statVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  return (
    <div className="px-16 py-36 " ref={ref}>
      <div className="bg-[#1E1E1E] text-white rounded-[25px] container mx-auto flex justify-around items-center pt-20 pb-20">
        <div className="text-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.h2
              key={stat1}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={statVariants}
              className="text-[50px] font-medium"
            >
              {stat1} +
            </motion.h2>
          </AnimatePresence>
          <p className="text-[16px] mt-2">Expert-Led Courses</p>
        </div>

        <div className="h-40 border-r border-white" />
        <div className="text-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.h2
              key={stat2}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={statVariants}
              className="text-[50px] font-medium"
            >
              {stat2} +
            </motion.h2>
          </AnimatePresence>
          <p className="text-[16px] mt-2">
            Hours of Live & Self-Paced Learning
          </p>
        </div>

        <div className="h-40 border-r border-white" />
        <div className="text-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.h2
              key={stat3}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={statVariants}
              className="text-[50px] font-medium"
            >
              {stat3} %
            </motion.h2>
          </AnimatePresence>
          <p className="text-[16px] mt-2">Student Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
