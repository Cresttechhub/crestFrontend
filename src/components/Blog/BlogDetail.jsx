import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegCalendar } from "react-icons/fa";
import Header from "../Header/Header";

import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";

import BlogImg from "../../images/BlogImg.svg";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const BlogDetail = () => {
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000); 
    }, 2000); // Simulating an API request
  };

  const { id } = useParams(); 
  const navigate = useNavigate();
  const blogDetails = {
    
    1: {
      title: "Getting Started with Web Development in 2025",
      image: BlogImg,
      date: "March 15, 2025",
      readTime: "5 min read",
      reader: "By John",
    },

    /* 2: {
            title: "UI/UX Design Trends to Watch in 2025",
            image: BlogImg2,
            date: "March 15, 2025",
            readTime: "5 min read",
            reader: "By John",
        },
        3: {
            title: "The Impact of AI on Software Development",
            image: BlogImg3,
            date: "March 15, 2025",
            readTime: "5 min read",
            reader: "By John",
        },
        */
  };

  const blog = blogDetails[id];

  if (!blog) {
    return <div>Blog not found</div>; 
  }

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="">
      <Header />
      <div className="mt-40 md:px-15 px-5">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="flex items-center space-x-2 pb-4 m-1 cursor-pointer"
        >
          <FaArrowLeft className="text-lg md:text-[#1E1E1E] text-[#757373] " />
          <span className="font-[400] text-[16px] md:text-[#1E1E1E] text-[#757373] leading-[130%] ">
            Back
          </span>
        </button>

        {/* Blog Content */}
        <div className=" ">
          <img src={blog.image} alt="Blog" className="w-full object-cover md:h-120 rounded-2xl " />
        </div>

        <div className="flex items-center text-[#6D737A] text-[14px] space-x-5 md:py-16 py-6 font-[400]">
          <div className="flex items-center space-x-1">
            <FaRegCalendar className="text-lg" />
            <span> {blog.date} </span>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="text-2xl">•</span>
            <span> {blog.readTime} </span>
          </div>
          <span> {blog.reader} </span>
        </div>

        <h1 className="text-[#1E1E1E] text-[20px] font-[600] w-[80%] ">{blog.title}</h1>

        <div className="mt-12">
          <h2 className="font-[600] text-[20px] text-[#1E1E1E] leading-normal ">
            Introduction
          </h2>
          <p className="text-[#6D737A] text-[16px] font-[400] leading-normal py-3 md:w-[80%] w-[95%] ">
            Web development continues to evolve, and in 2025, it's more
            accessible than ever! Whether you're an absolute beginner or someone
            looking to switch careers, this guide will help you understand the
            essential tools, technologies, and steps to kickstart your journey
            in web development.
          </p>
        </div>

        <div className="mt-9">
          <h2 className="font-[600] text-[20px] text-[#1E1E1E] leading-normal ">
            Understanding Web Development
          </h2>
          <ul className="list-disc pl-8 mt-3 ">
            <li className=" gap-1 text-[#6D737A] text-[16px] font-[600] ">
              Frontend Development:{" "}
              <span className="font-[400] ">
                Focuses on the visual elements users interact with (HTML, CSS,
                JavaScript).
              </span>
            </li>
            <li className=" gap-1 text-[#6D737A] text-[16px] font-[600] ">
              Backend Development:{" "}
              <span className="font-[400] ">
                Handles the server, database, and application logic (Node.js,
                Python, PHP).
              </span>
            </li>
            <li className=" gap-1 text-[#6D737A] text-[16px] font-[600] ">
              Full-Stack Development:{" "}
              <span className="font-[400] ">
                A combination of both frontend and backend skills.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-9">
          <h2 className="font-[600] text-[20px] text-[#1E1E1E] leading-normal w-[80%] ">
            Essential Skills & Technologies in 2025
          </h2>
          <ul className="list-disc pl-8 mt-3 font-[400] text-[16px] text-[#6D737A] w-[95%] ">
            <li>To become a web developer, you need to master:</li>
            <li>HTML, CSS and JavaScript - The foundation of web pages.</li>
            <li>
              Franeworks & Libraries - React.js, Next.js, Vue.js for frontend;
              Node.js, Express.js for backend
            </li>
            <li>Version Control - Git & GitHub for tracking changes.</li>
            <li>
              Databases - SQL (PostgreSQL, MySQL) & NoSQL (MongoDB, Firebase).
            </li>
            <li>Responsive Design - Making websites mobile-friendly.</li>
            <li>APIs & Authentication - RESTful APIs, JWT, OAuth.</li>
          </ul>
        </div>

        <div className="mt-9">
          <h2 className="font-[600] text-[20px] text-[#1E1E1E] leading-normal ">
            The Future of Web Development
          </h2>
          <ul className="list-disc pl-8 mt-3 font-[400] text-[16px] text-[#6D737A] w-[95%] ">
            <li>
              AI & Automation - AI-powered coding tools like GitHub Copilot.
            </li>
            <li>
              Web3 and Blockchain- Smart contracts and decentralized
              applications.
            </li>
            <li>
              Progressive Web Apps (PWAs) - Faster and more reliable
              mobile-friendly websites.
            </li>
          </ul>
        </div>

        <div className="mt-9">
          <h2 className="font-[600] text-[20px] text-[#1E1E1E] leading-normal ">
            Conclusion
          </h2>
          <ul className="list-disc pl-8 mt-3 font-[400] text-[16px] text-[#6D737A] md:w-[84%] w-[95%] ">
            <li>
              Web development in 2025 is filled with opportunities. If you're
              ready to start, take your first step today by enrolling in a
              course, building projects, and staying updated with the latest
              trends!
            </li>
            <li className="font-[600] ">Ready to Begin?</li>
            <li className="font-[600] ">
              Join our Web Development Bootcamp and learn from industry experts!
            </li>
          </ul>
        </div>

        <div className="md:px-24 md:py-24 md:mt-0 mt-10 ">
          <h2 className="text-[20px] font-[700] leading-[170%] text-[#1E1E1E]">
            Add A Comment
          </h2>
          <p className="text-[16px] font-[400] w-[75%] md:text-[#1E1E1E] text-[#7C7C7C] ">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form onSubmit={handleSubmit} className="mt-6 ">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold"></label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-5 mt-2 border border-[#A0A0A0] rounded-[15px] text-[#A0A0A0] text-[14px] font-[400] leading-[170%] focus:outline-none focus:ring-2 focus:ring-[#009E65] focus:border-transparent"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[12px] font-semibold"
              ></label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-5 mt-2 border border-[#A0A0A0] rounded-[15px] text-[#A0A0A0] text-[14px] font-[400] leading-[170%] focus:outline-none focus:ring-2 focus:ring-[#009E65] focus:border-transparent"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="comment"
                className="block text-[#6D737A] text-sm font-semibold"
              ></label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                className="w-full p-5 mt-2 border border-[#A0A0A0] rounded-[15px] text-[#A0A0A0] text-[14px] font-[400] leading-[170%] focus:outline-none focus:ring-2 focus:ring-[#009E65] focus:border-transparent"
                placeholder="Your Comment"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className={`
            min-w-52 md:p-5 py-4 md:pr-0 pr-40 md:pl-0 pl-40 px-1 mt-2 rounded-[15px] text-white text-[16px] font-[500] leading-[170%]
            transition duration-300 ease-in-out
            ${
              status === "idle"
                ? "bg-[#009E65] cursor-pointer "
                : status === "loading"
                ? "bg-[#009E65] cursor-default"
                : "bg-[#269804]"
            }
        `}
                disabled={status === "loading"} // Disable when loading
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <FaSpinner className="animate-spin" /> Submitting...
                  </span>
                ) : status === "success" ? (
                  "Submitted Successfully"
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default BlogDetail;
