import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [stat1, setStat1] = useState(10);
  const [stat2, setStat2] = useState(50);
  const [stat3, setStat3] = useState(30);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let count = 0;
      const interval = setInterval(() => {
        count++;

        setStat1((prev) => Math.min(prev + 10, 10));
        setStat2((prev) => Math.min(prev + 50, 200));
        setStat3((prev) => Math.min(prev + 30, 95));

        if (count === 3) {
          clearInterval(interval);
        }
      }, 1200);

      return () => clearInterval(interval);
    }
  }, [inView]);

  const statVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-12 md:mt-0 md:px-24 md:py-36 p-8" ref={ref}>
      <div className="bg-[#1E1E1E] text-white rounded-[25px] container mx-auto flex flex-col md:flex-row justify-around items-center pt-20 pb-20">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={statVariants}
        >
          <motion.h2
            key={stat1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[30px] md:text-[50px] font-medium"
          >
            {stat1} +
          </motion.h2>
          <p className="text-[14px] md:text-[16px] mt-2">Expert-Led Courses</p>
        </motion.div>

        {/* <div className="h-40 border-b md:border-r border-white" />
         */}
        {/* <div className="md:border-r border-b md:border-b-0 border-white w-full md:w-auto h-0.5 md:h-auto" /> */}
        <div className="md:border-r md:h-40 border-b w-100 mt-8 mb-8 md:mb-0 md:mt-0 md:w-0 md:border-b-0 border-white " />

        <motion.div
          className="text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={statVariants}
        >
          <motion.h2
            key={stat2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[30px] md:text-[50px] font-medium"
          >
            {stat2} +
          </motion.h2>

          <p className="text-[14px] md:text-[16px]   mt-2">
            Hours of Live & Self-Paced Learning
          </p>
        </motion.div>

        {/* <div className="h-40 border-b md:border-r border-white" /> */}
        <div className="md:border-r md:h-40 border-b w-100 mt-8 md:mt-0 mb-8 md:mb-0 md:w-0 md:border-b-0 border-white " />

        <motion.div
          className="text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={statVariants}
        >
          <motion.h2
            key={stat3}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[30px] md:text-[50px] font-medium"
          >
            {stat3} %
          </motion.h2>
          <p className="text-[14px] md:text-[16px] mt-2">
            Student Satisfaction Rate
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
