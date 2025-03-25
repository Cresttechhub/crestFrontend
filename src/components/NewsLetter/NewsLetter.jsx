import React from "react";

import Microsoft from "../../images/Microsoft.svg"
import Slack from "../../images/Slack.svg"
import Google from "../../images/Google.svg"

const NewsLetter = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-24">
        <div>
<img src={Microsoft} alt="Partners" />
        </div>
        <div>
<img src={Slack} alt="Partners" />
        </div>
        <div className="flex">
      <img src={Google} alt="Partners" />
        </div>
      </div>
      <div className="bg-[#00A665] text-white py-8 px-6 flex items-center justify-between ">
        <div className="mb-4 md:mb-0 ml-20">
          <h2 className="text-[31px] font-bold mb-1">Stay in the loop</h2>
          <p className=" text-[18px]">
            Subscribe to receive the latest news and updates about <br /> Crest Tech
            Hub.We promise not to spam you!
          </p>
        </div>
        <form className="flex w-full md:w-auto relative">
          <input
            type="email"
            placeholder="Enter email address"
            className="px-3 py-1 rounded-[19px] w-full pr-60 bg-[#fff] text-[#A0A0A0] text-[15px] font-[400] focus:outline-none h-15"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#009E65] font-medium text-white px-10 py-2 rounded-[12px] border border-transparent hover:bg-white hover:border-[#009E65] hover:text-[#009E65] cursor-pointer text-[16px] "
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
