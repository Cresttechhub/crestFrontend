import React from "react";
import { Link } from "react-router-dom";
import { FaRegCalendar, FaLongArrowAltRight } from "react-icons/fa";
import Button from "../../components/Button/Button"


import BlogImg1 from "../../images/BlogImg1.svg"
import BlogImg2 from "../../images/BlogImg2.svg"
import BlogImg3 from "../../images/BlogImg3.svg"

const Blog = () => {

  return (
    <div>
      <h1 className="text-center text-[30px] text-[#1E1E1E] font-[700] mb-10">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-10 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group hover:cursor-pointer">
          <img src={BlogImg1} alt="BlogImgs" className="w-full h-60 object-cover rounded-2xl" />
          <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400]">
            <FaRegCalendar className="text-lg" />
            <span>March 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>


          <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-pointer group-hover:text-[#009E65] transition-colors duration-300">Getting Started with Web <br /> Development in 2025</h2>
          <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6">
            Learn the essential tools and technologies that every aspiring web developer needs t...
          </p>
          <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65] ">
            <span className="text-[16px]">Read More</span>
            <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
          </div>
        </div>

        <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-10 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
          <img src={BlogImg2} alt="BlogImgs" className="w-full h-60 object-cover rounded-2xl" />
          <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
            <FaRegCalendar className="text-lg" />
            <span>March 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>


          <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default  group-hover:text-[#009E65] transition-colors duration-300">UI/UX Design Trends to Watch in 2025</h2>
          <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-10 cursor-default">
            Discover the latest design trends that are shaping the future of digital experiences.
          </p>
          <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
            <span className="text-[16px]">Read More</span>
            <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
          </div>
        </div>


        <div className="flex flex-col space-y-2 bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden p-10 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 group">
          <img src={BlogImg3} alt="BlogImgs" className="w-full h-60 object-cover rounded-2xl" />
          <div className="flex items-center text-[#6D737A] text-sm space-x-2 mt-3 mb-4 font-[400] cursor-default">
            <FaRegCalendar className="text-lg" />
            <span>March 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>


          <h2 className="font-bold text-lg leading-tight hover:text-[#009E65] text-[18px] cursor-default  group-hover:text-[#009E65] transition-colors duration-300">The Impact of AI on Software Development</h2>
          <p className="text-[#6D737A] text-[16px] leading-snug mt-2 mb-6 cursor-default">
            Explore how artificial intelligence is revolutionizing the way we build software
          </p>
          <div className="flex items-center font-semibold cursor-pointer hover:text-[#009E65]">
            <span className="text-[16px]">Read More</span>
            <FaLongArrowAltRight className="text-xl text-[black] ml-2 mt-1 hover:text-[#009E65]" />
          </div>
        </div>

      </div>
      <div className=" flex justify-center items-center mt-20">
        <Link to="/blogs" className="hover:text-[#009E65]">
          <Button className="rounded-2xl px-10 py-5 text-[16px] font-500 border border-[#009E65] hover:bg-white hover:text-[#009E65] hover:border-[#009E65] "> View All</Button>
        </Link>
      </div>
    </div>

  );

};

export default Blog;
