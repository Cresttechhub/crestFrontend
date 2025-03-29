import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

import BlogImg1 from "../../images/BlogImg1.svg"
import BlogImg2 from "../../images/BlogImg2.svg"
import BlogImg3 from "../../images/BlogImg3.svg"

const Blog = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      <div className="flex flex-col space-y-2 bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <img src={BlogImg1} alt="Blog Post 1" className="w-full h-40 object-cover" />
        <div className="flex items-center text-gray-500 text-sm space-x-2">
        <FaRegCalendarAlt className="text-lg" />          
        <span>March 15, 2025</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        
        <h2 className="font-bold text-lg leading-tight">Your Blog Title Here Goes Over Two Lines</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-snug">
          This is a short description of the blog post, fitting within two lines...
        </p>

        {/* Read More */}
        <div className="flex items-center text-blue-500 font-semibold cursor-pointer">
          <span>Read More</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>

      {/* Repeat for other Blog Posts */}
    </div>

  );

};

export default Blog;
