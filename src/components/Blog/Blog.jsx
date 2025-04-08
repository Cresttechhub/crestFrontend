import React from "react";
import { Link } from "react-router-dom";
import { FaRegCalendar, FaLongArrowAltRight } from "react-icons/fa";
import Button from "../../components/Button/Button";

import BlogImg1 from "../../images/BlogImg1.svg";
import BlogImg2 from "../../images/BlogImg2.svg";
import BlogImg3 from "../../images/BlogImg3.svg";
const Blog = () => {
  return (
    <div className="md:mt-20 mt-4 md:p-0 p-3">
      <h1 className="text-left md:text-center  pl-4 pt-3 text-sm md:text-[30px] text-[18px] text-[#1E1E1E] font-[700] md:mb-12">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-10 p-2">
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
            <Link to="/blog/1">
              <span className="text-[16px]">Read More</span>
            </Link>
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
            <Link to="/blog/1">
              <span className="text-[16px]">Read More</span>
            </Link>
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
            <Link to="/blog/1">
              <span className="text-[16px]">Read More</span>
            </Link>
            <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center md:mt-20 mt-7 md:px-6">
        <Link to="/blogs" className="flex justify-center items-center">
          <Button className="text-center rounded-2xl md:px-10 md:py-4 px-35 text-[16px] font-500 hover:text-[#7ffcce] md:border-none border border-black">
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
