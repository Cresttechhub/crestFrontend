import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about_img from "../../images/about_img.svg";

const About = () => {
  const [paragraph1, setParagraph1] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const navigate = useNavigate();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const timeoutRefs = useRef([]);

  useEffect(() => {
    if (inView) {
      const text1 =
        `Founded in 2020, Crest Tech Hub emerged from a vision to bridge the gap between traditional education and the rapidly evolving tech industry. We recognized the need for practical, industry-aligned training that prepares students for real-world challenges.`.split(
          " "
        );

      const text2 =
        `Today, we've grown into a thriving community of learners, mentors, and industry partners, all united by our passion for technology and innovation. Our success is measured by the achievement of our graduates who are making significant contributions to the tech industry worldwide.`.split(
          " "
        );

      setParagraph1("");
      setParagraph2("");

      const addWords = (text, setText, delay) => {
        text.forEach((word, index) => {
          const timeout = setTimeout(() => {
            setText((prev) => (prev ? `${prev} ${word}` : word));
          }, index * 50); // Adjust speed by modifying 50ms delay
          timeoutRefs.current.push(timeout);
        });
      };

      addWords(text1, setParagraph1, 0);
      setTimeout(
        () => addWords(text2, setParagraph2, text1.length * 50),
        text1.length * 50
      );
    } else {
      setParagraph1("");
      setParagraph2("");
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
    }

    return () => {
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
    };
  }, [inView]);

  const handleButtonClick = () => {
    navigate("/about");
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <div className="px-16 py-6" ref={ref}>
      <div className="flex justify-between">
        <div className="w-full">
          <img src={about_img} alt="About Crest Tech Hub" />
        </div>
        <div className="w-full flex flex-col justify-start">
          <h1 className="text-[40px] text-[#1E1E1E] font-bold mb-8">
            About Crest Tech Hub
          </h1>
          <div className="text-[#6D737A] text-2xl min-h-[120px] leading-relaxed">
            <AnimatePresence>
              <motion.p
                key="paragraph1"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {paragraph1}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence>
              <motion.p
                key="paragraph2"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mt-4"
              >
                {paragraph2}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="mt-12">
            <button
              className="w-[159px] px-6 py-2 text-white text-[16px] hover:text-[#009E65] hover:font-medium bg-[#009E65] hover:border-2 hover:border-[#009E65]  hover:bg-white rounded-[15px] cursor-pointer"
              onClick={handleButtonClick}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
