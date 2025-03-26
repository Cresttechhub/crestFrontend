import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../images/mainIcon.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[450px] bg-[#15211F] text-white p-10">
      <div className="container mx-auto flex justify-between gap-10 items-start h-3/4 pl-12 mt-2">
        <div className=" flex flex-col leading-9">
          <h1 className="text-[20px] font-[500] ">CONNECT</h1>
          <div>
            <p>1234 - Peru </p>
            <p>La Llibertad 43210</p>
            <p>123-456-789</p>
          </div>
        </div>
        <div className=" flex flex-col leading-8">
          <h1 className="text-[20px] font-[500] mb-3 ">COMPANY</h1>
          <Link to="/about" className="hover:text-[#009E65]">
            About Us
          </Link>
          <Link to="/program" className="hover:text-[#009E65]">
            Programs
          </Link>
          <Link to="/mentorship" className="hover:text-[#009E65]">
            Mentorship
          </Link>
          <Link to="/faq" className="hover:text-[#009E65]">
            FAQs
          </Link>
          <Link to="/blogs" className="hover:text-[#009E65]">
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-[#009E65]">
            Contact us
          </Link>
        </div>

        <div className=" flex flex-col leading-9">
          <h1 className="text-[20px] font-[500] mb-3 ">PROGRAM</h1>
          <p>4-Week Bootcamp</p>
          <p>3-Month Masterclass</p>
          <p>Software Development</p>
          <p>UI/UX Design</p>
        </div>

        <div className="flex flex-col leading-6">
          <h1 className="text-[20px] font-[500] mb-3 ">Social</h1>
          <div className="flex gap-5 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white text-2xl hover:text-[#009E65] cursor-pointer w-[10px]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-2xl hover:text-[#009E65] cursor-pointer w-[17px]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-2xl hover:text-[#009E65] cursor-pointer w-[15px]" />

            </a>
          </div>
        </div>
      </div>

      <div className=" flex justify-between items-center mt-12">
        <div className="flex items-center">
          <img src={Icon} alt="Icon" className="h-10 pl-12" />{" "}
          <span className="font-bold text-2xl">CrestTech Hub</span>
        </div>
        <p className="font-[400] text-[13px] ">
          &copy; CrestTech Hub. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
