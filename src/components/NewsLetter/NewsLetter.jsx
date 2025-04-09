import React from "react";

import Partner1 from "../../images/Partner1.svg";
import Partner2 from "../../images/Partner2.svg";
import Partner3 from "../../images/Partner3.svg";

const NewsLetter = () => {
  return (
    <div className="mt-15">
<div className="flex justify-around md:gap-0 gap-5 items-center px-4 md:px-24 -mb-7 h-[200px]">
  <div>
    <img
      src={Partner1}
      alt="Partners"
      className="bg-transparent filter invert w-44 md:w-76"
    />
  </div>
  <div className="flex">
    <img
      src={Partner3}
      alt="Partners"
      className="w-28 md:w-48"
    />
  </div>
  <div>
    <img
      src={Partner2}
      alt="Partners"
      className="bg-transparent filter invert w-40 md:w-64"
    />
  </div>
</div>

      <div className="bg-[#00A665] text-white py-8 px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
        {/* Text Section */}
        <div className="ml-0 md:ml-20">
          <h2 className="text-[24px] md:text-[31px] font-bold mb-1">Stay in the loop</h2>
          <p className="text-[14px] md:text-[18px]">
            Subscribe to receive the latest news and updates about <br className="hidden md:block" />
            Crest Tech Hub. We promise not to spam you!
          </p>
        </div>

        {/* Form Section */}
        <form className="w-full md:w-auto relative">
          <input
            type="email"
            placeholder="Enter email address"
            className="px-4 py-3 rounded-[19px] w-full md:pr-60 bg-white text-[#A0A0A0] text-[15px] font-[400] focus:outline-none h-14"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#009E65] font-medium text-white px-6 md:px-10 py-2 rounded-[12px] border border-transparent hover:bg-white hover:border-[#009E65] hover:text-[#009E65] cursor-pointer text-[16px]"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>
  );
};

export default NewsLetter;
