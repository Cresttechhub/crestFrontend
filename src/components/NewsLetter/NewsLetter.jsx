import React from "react";

const NewsLetter = () => {
  return (
    <div className="px-8 py-6 bg-[#fff]">
      <h1 className="font-semibold text-[31px] text-[#222222] mb-4">
        Lorem, ipsum.
      </h1>
      <p className="mb-8 text-[17px] text-[#525252] w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        similique error
      </p>
      <div className="bg-[#1b1b1b] text-white py-8 px-6 rounded-xl flex items-center justify-between ">
        <div className="mb-4 md:mb-0">
          <h2 className="text-[31px] font-medium mb-4">Stay in the loop</h2>
          <p className=" text-[18px]">
            Subscribe to receive the latest news and updates about Crest Tech
            Hub.
          </p>
          <p className="text-[18px]">We promise not to spam you!</p>
        </div>
        <form className="flex w-full md:w-auto relative">
          <input
            type="email"
            placeholder="Enter email address"
            className="px-4 py-2 rounded-md w-full pr-60 bg-[#fff] text-black focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#009365] font-medium text-[13px] text-white  px-4 py-2 rounded-md hover:bg-[#579b85]"
          >
            Contact us
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
