import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaRegCalendar,
  FaLongArrowAltRight,
  FaArrowLeft,
} from "react-icons/fa";

import GreenVector from "../../images/GreenVector.svg";
import GreenVector1 from "../../images/GreenVector1.svg"
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

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="md:mt-50 mt-35 m-5 ">
      <button
        onClick={goBack}
        className="items-center space-x-2 mb-4 cursor-pointer md:hidden flex m-2 text-[#757373]"
      >
        <FaArrowLeft className="text-lg " />
        <span className="font-[400] text-[16px] ">Back</span>
      </button>
      <div className="flex md:flex-row flex-col md:justify-between items-center bg-[#007849] md:h-[250px] md:pt-0 pt-6 pb-6 rounded-3xl p-0 md:m-12 m-2 relative overflow-hidden">
        {/* Green Vector (Left) */}
        <img
          src={GreenVector}
          alt="Green"
          className="absolute left-0 top-0 w-auto h-full md:block hidden rounded-l-2xl"
        />
        {/* Green Vector for mobile */}
        <img
          src={GreenVector1}
          alt="Green Mobile"
          className="absolute left-0 top-0 h-full md:hidden object-cover rounded-t-2xl"
        />

        <div className="relative z-10 w-full flex flex-col md:flex-row md:justify-between md:items-center items-center text-white px-6 py-8 md:px-0 md:py-0">
          {/* Heading */}
          <div className="md:w-1/2 md:text-left">
            <h2 className="font-bold md:text-[44px] text-[18px] md:p-10 leading-tight md:pl-25">
              Stay Updated,{" "}
              <span className="text-[#3DEA9E] md:whitespace-nowrap">
                Stay <br className="hidden md:block " /> Ahead
              </span>
            </h2>
          </div>

          {/* Paragraph */}
          <div className="md:w-1/2 mt-2 md:pt-4 md:mt-0 md:text-right text-left md:pr-4 pl-2 w-[80%] ">
            <p className="font-[400] md:text-[16px] text-[12px] leading-[22px] md:leading-[30px] px-2 md:px-10">
              Explore expert insights, tech trends, and career growth tips{" "}
              <br className="md:block hidden" /> from our blog. Learn, apply,
              and grow in your tech journey!
            </p>
          </div>
        </div>

        {/* White Vector (Right) */}
        <img
          src={WhiteVector}
          alt="White"
          className="absolute right-0 bottom-0 w-auto h-full md:block hidden rounded-r-2xl"
        />
        {/* White Vector for mobile */}
        <img
          src={WhiteVector}
          alt="White Mobile"
          className="absolute -bottom-9 -right-2 w-[70%] h-full md:hidden rounded-b-2xl"
        />
      </div>

      {/* Blog Posts */}
      <div className="md:mt-30 mt-20 md:px-10">
        <h1 className="text-center text-[30px] text-[#1E1E1E] font-[700] mb-10">
          Latest Blog Posts
        </h1>

        {/*First Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group hover:cursor-pointer">
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
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[#1E1E1E] ">
              <Link to="/blog/1">
                <span className="md:text-[16px] text-[14px] ">Read More</span>
              </Link>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group md:mt-0 mt-12">
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
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ] ">
              <Link to="/blog/1">
                <span className="md:text-[16px] text-[14px] ">Read More</span>
              </Link>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group md:mt-0 mt-12">
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
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
              <Link to="/blog/1">
                <span className="md:text-[16px] text-[14px] ">Read More</span>
              </Link>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>
        </div>

        {/*Second line */}
        <div className=" grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-8 md:grid hidden">
          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group hover:cursor-pointer">
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
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
              <Link to="/blog/1">
                <span className="md:text-[16px] text-[14px] ">Read More</span>
              </Link>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
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
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
              <Link to="/blog/1">
                <span className="md:text-[16px] text-[14px] ">Read More</span>
              </Link>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
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
            <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
              <Link to="/blog/1">
                <span className="md:text-[16px] text-[14px] ">Read More</span>
              </Link>
              <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
            </div>
          </div>
        </div>

        {/* Show More Posts */}
        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-10">
            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
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
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
                <Link to="/blog/1">
                  <span className="md:text-[16px] text-[14px] ">Read More</span>
                </Link>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group hover:cursor-pointer">
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
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
                <Link to="/blog/1">
                  <span className="md:text-[16px] text-[14px] ">Read More</span>
                </Link>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
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
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
                <Link to="/blog/1">
                  <span className="md:text-[16px] text-[14px] ">Read More</span>
                </Link>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>
          </div>
        )}

        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-10 mb-20">
            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
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
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
                <Link to="/blog/1">
                  <span className="md:text-[16px] text-[14px] ">Read More</span>
                </Link>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
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
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
                <Link to="/blog/1">
                  <span className="md:text-[16px] text-[14px] ">Read More</span>
                </Link>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden md:p-6 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group hover:cursor-pointer">
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
              <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] text-[text-[#1E1E1E] ">
                <Link to="/blog/1">
                  <span className="md:text-[16px] text-[14px] ">Read More</span>
                </Link>
                <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
              </div>
            </div>
          </div>
        )}

        {showButton && (
          <div className="text-center md:mt-8 mt-28 mb-12">
            <button
              onClick={handleToggleView}
              className="bg-[#009E65] md:p-6 md:px-10 px-30 md:py-4 py-2 text-white rounded-2xl font-[500] text-[16px] border border-[#009E65] hover:bg-white hover:text-[#009E65] cursor-pointer"
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
