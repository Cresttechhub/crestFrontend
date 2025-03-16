import React from "react";

import Icon1 from "./FeaturedImages/icon1.png"
import Icon2 from "./FeaturedImages/icon2.png"
import Icon3 from "./FeaturedImages/icon3.png"
import Icon4 from "./FeaturedImages/icon4.png"

import Ornament from "./FeaturedImages/ornament.png"
import Ornament1 from "./FeaturedImages/ornament1.png"

const FeaturedServices = () => {
  return (
    <div className="container mt-32 ml-8 text-white">
      <div className="bg-[#009E65] rounded-full mx-auto w-3/5 h-11">
        <h2 className="text-center text-2xl font-medium py-8">Benefit of joining Crest Tech Hub</h2>
      </div>

      <div className="bg-[#009E65] rounded-2xl mx-7 w-4.5/5 h-60 flex justify-center items-center">
        <img src={Ornament} alt="ornament" className="absolute -left-8 -bottom-8/12 border-amber-600" />
        <div className="flex justify-evenly w-full mt-4">

          <div className="flex flex-col items-center">
            <img src={Icon1} alt="specialIcon1" className="w-20 h-20" />
            <p className="mt-2 text-lg text-center">Expanding the Market</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Icon2} alt="specialIcon2" className="w-20 h-20" />
            <p className="mt-2 text-lg text-center">Cost-Effective</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Icon3} alt="specialIcon3" className="w-20 h-20" />
            <p className="mt-2 text-lg text-center">More Professional</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Icon4} alt="specialIcon4" className=" w-20 h-20" />
            <p className="mt-2 text-lg text-center">Attract Client</p>
          </div>

        </div>
        <img src={Ornament1} alt="ornament" className="absolute right-0 -bottom-12/12" />
      </div>
    </div>
  )
};

export default FeaturedServices;
