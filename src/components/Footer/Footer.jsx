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
            <p><a href="https://www.google.com/maps/search/?api=1&query=Lagos+Nigeria" target="_blank" rel="noopener noreferrer">Lagos - Nigeria</a></p>
            <p><a href="mailto:cresttechhub@gmail.com" className="hover:text-[#009E65]">cresttechhub@gmail.com</a></p>         
            <p><a href="tel:+2348167809278" className="hover:hover:text-[#009E65]">+234 816 780 9278</a></p>
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

          <h1 className="text-[20px] font-[500] mb-3 ">PROGRAMS</h1>
          <p>4-Week Bootcamp</p>
          <p>3-Month Masterclass</p>
          <p>Software Development</p>
          <p>UI/UX Design</p>
        </div>

        <div className="flex flex-col leading-6">
          <h1 className="text-[20px] font-[500] mb-3 ">Social</h1>
          <div className="flex gap-5 mt-2">
            <a
              href="https://facebook.com/profile.php?id=61559970860204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white text-2xl hover:text-[#009E65] cursor-pointer w-[10px]" />
            </a>
            <a
              href=" https://x.com/cresttechhub "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-2xl hover:text-[#009E65] cursor-pointer w-[17px]" />
            </a>
            <a
              href=" https://instagram.com/cresttechhub"
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
