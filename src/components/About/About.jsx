import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import about_img from "../../images/about_img.svg";

const About = () => {
  const [paragraph1, setParagraph1] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setTimeout(() => {
        const text1 = `Founded in 2020, Crest Tech Hub emerged from a vision to bridge
        the gap between traditional education and the rapidly evolving
        tech industry. We recognized the need for practical
        industry-aligned training that prepares students for real-world
        challenges.`;

        const text2 = `Today, we've grown into a thriving community of learners, mentors,
        and industry partners, all united by our passion for technology
        and innovation. Our success is measured by the achievement of our
        graduates who are making significant contributions to the tech
        industry worldwide`;

        const lines1 = text1.split("\n");
        const lines2 = text2.split("\n");
        let lineIndex1 = 0;
        let lineIndex2 = 0;

        const interval1 = setInterval(() => {
          setParagraph1((prev) => prev + lines1[lineIndex1] + "\n");
          lineIndex1++;
          if (lineIndex1 === lines1.length) clearInterval(interval1);
        }, 1000);

        setTimeout(() => {
          const interval2 = setInterval(() => {
            setParagraph2((prev) => prev + lines2[lineIndex2] + "\n");
            lineIndex2++;
            if (lineIndex2 === lines2.length) clearInterval(interval2);
          }, 1000);
        }, lines1.length * 1000);
      }, 5000);
    }
  }, []);

  const handleButtonClick = () => {
    navigate("/about");
  };
  return (
    <div className="px-16 py-6">
      <div className="flex justify-between gap-16">
        <div className="w-full">
          <img src={about_img} alt="" />
        </div>
        <div className="">
          <h1 className="text-[30px] text-[#1E1E1E] font-bold">
            About Crest Tech Hub
          </h1>
          <div className="text-[#6D737A] text-[16px] text-wrap">
            <p className="">{paragraph1}</p>
            <p className="mt-10">{paragraph2}</p>
          </div>
          <button
            onClick={handleButtonClick}
            className="mt-8 px-6 py-2 text-white text-[16px] hover:text-[#009E65] bg-[#009E65] hover:border border-[#009E65] hover:bg-white rounded-[15px] cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
