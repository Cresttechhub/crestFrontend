import React from "react";

import Checkbox from "../../images/Checkbox.svg"
import Ink from "../../images/Ink.svg"
import Code from "../../images/Code.svg"

import Button from "../../components/Button/Button"
const Tracks = () => {
  return (
    <div className="bg-[#FAFAFA] h-[700px] ">
      <h1 className="text-center text-[30px] text-[#1E1E1E] font-[700] mb-9 pt-12">Specialized Learning Tracks</h1>
      <div className=" flex flex-row justify-center items-center gap-10 p-10">
        <div className=" bg-white rounded-2xl p-9 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
          <div className="bg-[#E4FFF2] border border-[#009E65] flex justify-center items-center rounded-md w-15 h-10">
          <img src={Code} alt="Code" />
          </div>
          <h2 className="mt-4 font-[600] text-[20px]">Software Development</h2>
          <p className="mt-2 mb-6">Master both Frontend & Backend development with modern <br /> technologies and frameworks</p>
          <p className="flex items-center space-x-2 mb-6"><img src={Checkbox} alt="checkbox" /> <span>HTML, CSS, Javascript</span></p>
          <p className="flex items-center space-x-2 mb-6"><img src={Checkbox} alt="checkbox" /> <span>React and Node.js</span></p>
          <p className="flex items-center space-x-2"><img src={Checkbox} alt="checkbox" /> <span>Database Management</span></p>
        </div>

        <div className=" bg-white rounded-2xl p-10 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
          <div className="bg-[#E4FFF2] border border-[#009E65] flex justify-center items-center rounded-md w-15 h-10">
          <img src={Ink} alt="ink" />
          </div>
          <h2 className="mt-4 font-[600] text-[20px]">UI/UX Design</h2>
          <p className="mt-2 mb-6">Create beautiful and functional user interface with modern <br /> design principles.</p>
          <p className="flex items-center space-x-2 mb-6"><img src={Checkbox} alt="checkbox" /> <span>Design Fundamentals</span>    </p>
          <p className="flex items-center space-x-2 mb-6"><img src={Checkbox} alt="checkbox" /> <span>Figma and Adobe XD</span>    </p>
          <p className="flex items-center space-x-2"><img src={Checkbox} alt="checkbox" /> <span>User Research</span>    </p>
        </div>

      </div>
      <div className="flex justify-center items-center ">
        <Button className="rounded-lg px-10 py-3 text-[20px]">Enroll Now</Button>
      </div>
    </div>
  );
};

export default Tracks;