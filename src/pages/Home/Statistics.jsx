import React from "react";
import Button from "../../components/Button/Button";

const Statistics = () => {
  return(
    <div className="bg-black h-[500px] mt-36 font-sans">
      <div className=" text-center p-10">
        <h2 className="text-white text-4xl font-bold">The Services We Offer <span className=" text-[#009E65]">For You</span></h2>
        <div className="flex justify-between items-center m-auto bg-[#F3F3F3] rounded-md w-1/4 h-12 mt-8 p-4">
        <div className="flex flex-row gap-6">
          <Button />
          <p className="text-[#6D7079]">Frontend</p>
          <p className="text-[#6D7079]">Backend</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
