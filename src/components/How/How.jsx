import React from "react";

const How = () => {
  return (
    <div className=" mb-20 ">
      <h1 className="text-center text-[30px] text-[#1E1E1E] font-[700] mb-10">How It Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        <div className="flex flex-col space-y-2 bg-[#009E65] rounded-lg overflow-hidden p-10 ">
          <h1 className=" bg-white text-[009E65] text-center text-lg ">1</h1>
          <h2 className="font-bold text-lg text-white">Sign Up</h2>
          <p className="text-white">Choose a program and register online</p>
        </div>

        <div className="flex flex-col space-y-2 bg-[#009E65] rounded-lg overflow-hidden p-10 ">
          <h1 className=" bg-white text-[009E65] text-center text-lg ">1</h1>
          <h2 className="font-bold text-lg text-white">Join Live Classes</h2>
          <p className="text-white">Learn from industry mentors</p>
        </div>

        <div className="flex flex-col space-y-2 bg-[#009E65] rounded-lg overflow-hidden p-10 ">
          <h1 className=" bg-white text-[009E65] text-center text-lg ">1</h1>
          <h2 className="font-bold text-lg text-white">Build Projects</h2>
          <p className="text-white">Gain hands-on experience</p>
        </div>

        <div className="flex flex-col space-y-2 bg-[#009E65] rounded-lg overflow-hidden p-10 ">
          <h1 className=" bg-white text-[009E65] text-center text-lg ">1</h1>
          <h2 className="font-bold text-lg text-white">Get Certified</h2>
          <p className="text-white">Stand out in the tech job market</p>
        </div>


      </div>
    </div>
  );
};

export default How;
