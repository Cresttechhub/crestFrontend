import React from "react";
import { Link } from "react-router-dom";

import Checkbox from "../../images/Checkbox.svg";
import Ink from "../../images/Ink.svg";
import Code from "../../images/Code.svg";

import Button from "../../components/Button/Button";

const Tracks = () => {
  return (
    <div className="bg-[#FAFAFA] px-5 py-16 md:px-24">
      <h1 className="md:text-center text-[18px] md:text-[34px] text-[#1E1E1E] font-bold mb-12">
        Specialized Learning Tracks
      </h1>

      {/* Responsive cards container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Software Development Card */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg w-full md:w-[600px] min-h-[350px]">
          <div className="bg-[#E4FFF2] border border-[#009E65] flex justify-center items-center rounded-md w-16 h-12">
            <img src={Code} alt="Code" />
          </div>
          <h2 className="mt-6 font-semibold text-[22px] md:text-[24px]">
            Software Development
          </h2>
          <p className="mt-3 mb-6 text-[16px] font-[400] text-[#6D737A] leading-[1.7]">
            Master both Frontend & Backend development with modern technologies and frameworks.
          </p>
          <p className="flex items-center space-x-2 mb-4 text-[16px] font-[400] text-[#6D737A]">
            <img src={Checkbox} alt="checkbox" /> <span>HTML, CSS, JavaScript</span>
          </p>
          <p className="flex items-center space-x-2 mb-4 text-[16px] font-[400] text-[#6D737A] ">
            <img src={Checkbox} alt="checkbox" /> <span>React and Node.js</span>
          </p>
          <p className="flex items-center space-x-2 text-[16px] font-[400] text-[#6D737A]">
            <img src={Checkbox} alt="checkbox" /> <span>Database Management</span>
          </p>
        </div>

        {/* UI/UX Design Card */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg w-full md:w-[600px] min-h-[350px]">
          <div className="bg-[#E4FFF2] border border-[#009E65] flex justify-center items-center rounded-md w-16 h-12">
            <img src={Ink} alt="Ink" />
          </div>
          <h2 className="mt-6 font-semibold text-[22px] md:text-[24px]">
            UI/UX Design
          </h2>
          <p className="mt-3 mb-6 text-[16px] font-[400] text-[#6D737A] leading-[1.7] ">
            Create beautiful and functional user interfaces with modern design principles.
          </p>
          <p className="flex items-center space-x-2 mb-4 text-[16px] font-[400] text-[#6D737A]">
            <img src={Checkbox} alt="checkbox" /> <span>Design Fundamentals</span>
          </p>
          <p className="flex items-center space-x-2 mb-4 text-[16px] font-[400] text-[#6D737A]">
            <img src={Checkbox} alt="checkbox" /> <span>Figma and Adobe XD</span>
          </p>
          <p className="flex items-center space-x-2 text-[16px] font-[400] text-[#6D737A]">
            <img src={Checkbox} alt="checkbox" /> <span>User Research</span>
          </p>
        </div>
      </div>

      {/* Enroll Button */}
      <div className="flex justify-center items-center mt-12">
        <Link to="/enroll">
        <Button className="rounded-2xl md:px-12 md:py-4 px-30 font-[500] text-[20px] border border-[#009E65] md:hover:bg-white md:hover:text-[#009E65]">
          Enroll Now
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Tracks;
