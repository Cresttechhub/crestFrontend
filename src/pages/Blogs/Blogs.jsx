import React, { useState } from "react";
import { FaRegCalendar, FaLongArrowAltRight } from "react-icons/fa";

import GreenVector from "../../images/GreenVector.svg";
import WhiteVector from "../../images/WhiteVector.svg";
import BlogImg1 from "../../images/BlogImg1.svg";
import BlogImg2 from "../../images/BlogImg2.svg";
import BlogImg3 from "../../images/BlogImg3.svg";

const Blogs = () => {
  const [showMore, setShowMore] = useState(false);
  const [showButton, setShowButton] = useState(true); // Track button visibility

  const handleToggleView = () => {
    setShowMore((prev) => !prev); // Toggle the state between true and false
    setShowButton(false); // Hide the button after click
  };

  return (
    <div className="">
<div className="flex justify-between items-center bg-[#007849] h-[250px] rounded-2xl mt-50 p-0 m-10 relative overflow-hidden">
  <div className="relative w-full h-full flex justify-center items-center">
    <img
      src={GreenVector}
      alt="Green"
      className="absolute left-0 top-0 w-auto h-full rounded-l-2xl" // Apply rounded to the left side of the image
    />
    <div className="flex justify-center items-center font-[700] text-[44px] z-10">
      <h2 className="text-white">
        Stay Updated,{" "}
        <span className="text-[#3DEA9E]">
          Stay <br /> Ahead.
        </span>
      </h2>
    </div>
  </div>

  <div className="relative z-10 text-right w-full">
    <p className="font-[400] text-[16px] text-white">
      Explore expert insights, tech trends, and career growth tips <br />
      from our blog. Learn, apply, and grow in your tech journey!
    </p>
  </div>

  <img
    src={WhiteVector}
    alt="White"
    className="absolute right-0 bottom-0 w-auto h-full rounded-r-2xl" // Apply rounded to the right side of the image
  />
</div>


      {/* Blog Posts */}
      <div className="mt-30">
        <h1 className="text-center text-[30px] text-[#1E1E1E] font-[700] mb-10">
          Latest Blog Posts
        </h1>

        {/*First Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group hover:cursor-pointer">
            <img
              src={BlogImg1}
              alt="BlogImgs"
              className="w-full object-cover rounded-2xl"
            />
            <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400]">
              <FaRegCalendar className="text-lg" />
              <span>March 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-pointer group-hover:text-[#009E65] transition-colors duration-300">
              Getting Started with Web <br /> Development in 2025
            </h2>
            <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6">
              Learn the essential tools and technologies that every aspiring web
              developer needs t...
            </p>
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
              <span className="text-[16px]">Read More</span>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
            <img
              src={BlogImg2}
              alt="BlogImgs"
              className="w-full object-cover rounded-2xl"
            />
            <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
              <FaRegCalendar className="text-lg" />
              <span>March 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default group-hover:text-[#009E65] transition-colors duration-300">
              UI/UX Design Trends to Watch in 2025
            </h2>
            <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-10 cursor-default">
              Discover the latest design trends that are shaping the future of
              digital experiences.
            </p>
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
              <span className="text-[16px]">Read More</span>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
            <img
              src={BlogImg3}
              alt="BlogImgs"
              className="w-full object-cover rounded-2xl"
            />
            <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
              <FaRegCalendar className="text-lg" />
              <span>March 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default group-hover:text-[#009E65] transition-colors duration-300">
              The Impact of AI on Software Development
            </h2>
            <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6 cursor-default">
              Explore how artificial intelligence is revolutionizing the way we
              build software
            </p>
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
              <span className="text-[16px]">Read More</span>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>
        </div>

        {/*Second line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-8">
          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group hover:cursor-pointer">
            <img
              src={BlogImg1}
              alt="BlogImgs"
              className="w-full object-cover rounded-2xl"
            />
            <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400]">
              <FaRegCalendar className="text-lg" />
              <span>March 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-pointer group-hover:text-[#009E65] transition-colors duration-300">
              Getting Started with Web <br /> Development in 2025
            </h2>
            <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6">
              Learn the essential tools and technologies that every aspiring web
              developer needs t...
            </p>
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
              <span className="text-[16px]">Read More</span>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
            <img
              src={BlogImg2}
              alt="BlogImgs"
              className="w-full object-cover rounded-2xl"
            />
            <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
              <FaRegCalendar className="text-lg" />
              <span>March 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default group-hover:text-[#009E65] transition-colors duration-300">
              UI/UX Design Trends to Watch in 2025
            </h2>
            <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-10 cursor-default">
              Discover the latest design trends that are shaping the future of
              digital experiences.
            </p>
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
              <span className="text-[16px]">Read More</span>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
            <img
              src={BlogImg3}
              alt="BlogImgs"
              className="w-full object-cover rounded-2xl"
            />
            <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
              <FaRegCalendar className="text-lg" />
              <span>March 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default group-hover:text-[#009E65] transition-colors duration-300">
              The Impact of AI on Software Development
            </h2>
            <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6 cursor-default">
              Explore how artificial intelligence is revolutionizing the way we
              build software
            </p>
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
              <span className="text-[16px]">Read More</span>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>
        </div>

        {/* Show More Posts */}
        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-10">
            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group hover:cursor-pointer">
              <img
                src={BlogImg1}
                alt="BlogImgs"
                className="w-full object-cover rounded-2xl"
              />
              <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400]">
                <FaRegCalendar className="text-lg" />
                <span>March 15, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-pointer group-hover:text-[#009E65] transition-colors duration-300">
                Getting Started with Web <br /> Development in 2025
              </h2>
              <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6">
                Learn the essential tools and technologies that every aspiring
                web developer needs t...
              </p>
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
                <span className="text-[16px]">Read More</span>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
              <img
                src={BlogImg2}
                alt="BlogImgs"
                className="w-full object-cover rounded-2xl"
              />
              <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
                <FaRegCalendar className="text-lg" />
                <span>March 15, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default group-hover:text-[#009E65] transition-colors duration-300">
                UI/UX Design Trends to Watch in 2025
              </h2>
              <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-10 cursor-default">
                Discover the latest design trends that are shaping the future of
                digital experiences.
              </p>
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
                <span className="text-[16px]">Read More</span>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
              <img
                src={BlogImg3}
                alt="BlogImgs"
                className="w-full object-cover rounded-2xl"
              />
              <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
                <FaRegCalendar className="text-lg" />
                <span>March 15, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default group-hover:text-[#009E65] transition-colors duration-300">
                The Impact of AI on Software Development
              </h2>
              <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6 cursor-default">
                Explore how artificial intelligence is revolutionizing the way
                we build software
              </p>
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
                <span className="text-[16px]">Read More</span>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>
          </div>
        )}

        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-10 mb-20">
            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group hover:cursor-pointer">
              <img
                src={BlogImg1}
                alt="BlogImgs"
                className="w-full object-cover rounded-2xl"
              />
              <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400]">
                <FaRegCalendar className="text-lg" />
                <span>March 15, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-pointer group-hover:text-[#009E65] transition-colors duration-300">
                Getting Started with Web <br /> Development in 2025
              </h2>
              <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6">
                Learn the essential tools and technologies that every aspiring
                web developer needs t...
              </p>
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
                <span className="text-[16px]">Read More</span>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
              <img
                src={BlogImg2}
                alt="BlogImgs"
                className="w-full object-cover rounded-2xl"
              />
              <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
                <FaRegCalendar className="text-lg" />
                <span>March 15, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default group-hover:text-[#009E65] transition-colors duration-300">
                UI/UX Design Trends to Watch in 2025
              </h2>
              <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-10 cursor-default">
                Discover the latest design trends that are shaping the future of
                digital experiences.
              </p>
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
                <span className="text-[16px]">Read More</span>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
              <img
                src={BlogImg3}
                alt="BlogImgs"
                className="w-full object-cover rounded-2xl"
              />
              <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
                <FaRegCalendar className="text-lg" />
                <span>March 15, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default group-hover:text-[#009E65] transition-colors duration-300">
                The Impact of AI on Software Development
              </h2>
              <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6 cursor-default">
                Explore how artificial intelligence is revolutionizing the way
                we build software
              </p>
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
                <span className="text-[16px]">Read More</span>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>
          </div>
        )}

        {showButton && (
          <div className="text-center mt-8 mb-12">
            <button
              onClick={handleToggleView}
              className="bg-[#009E65] p-6 px-10 py-4 text-white rounded-2xl font-[500] text-[16px] border border-[#009E65] hover:bg-white hover:text-[#009E65] cursor-pointer"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
