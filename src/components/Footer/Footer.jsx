import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../images/MainIcon.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#15211F] text-white p-4 md:p-10 md:pb-4 pb-16 pt-16">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-30 gap-6 px-4 md:px-12">
        {/* CONNECT */}
        <div className="flex flex-col md:leading-9 leading-7 break-words max-w-[180px]">
          <h1 className="text-[20px] font-[500]">CONNECT</h1>
          <div>
            <p className="md:text-[16px] text-[14px]">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lagos - Nigeria
              </a>
            </p>
            <p className="md:text-[16px] text-[14px]">
              <a
                href="mailto:hello@cresttech.org"
                className="hover:text-[#009E65] break-all"
              >
                hello@cresttech.org
              </a>
            </p>
            <p className="md:text-[16px] text-[14px]">
              <a href="tel:+2348167809278" className="hover:text-[#009E65]">
                +234 816 780 9278
              </a>
            </p>
          </div>
        </div>

        {/* COMPANY */}
        <div className="flex flex-col md:leading-8 leading-7 md:pl-20 pl-10">
          <h1 className="text-[20px] font-[500] mb-3">COMPANY</h1>
          <Link
            to="/about"
            className="hover:text-[#009E65] md:text-[16px] text-[14px] "
          >
            About Us
          </Link>
          <Link
            to="/program"
            className="hover:text-[#009E65] md:text-[16px] text-[14px]"
          >
            Programs
          </Link>
          <Link
            to="/mentorship"
            className="hover:text-[#009E65] md:text-[16px] text-[14px]"
          >
            Mentorship
          </Link>
          <Link
            to="/faq"
            className="hover:text-[#009E65] md:text-[16px] text-[14px]"
          >
            FAQs
          </Link>
          <Link
            to="/blogs"
            className="hover:text-[#009E65] md:text-[16px] text-[14px]"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#009E65] md:text-[16px] text-[14px]"
          >
            Contact us
          </Link>
        </div>

        {/* PROGRAMS */}
        <div className="flex flex-col md:leading-9 leading-7 md:mt-0 mt-9 md:pl-20">
          <h1 className="text-[20px] font-[500] mb-3">PROGRAMS</h1>
          <p className="md:text-[16px] text-[14px]">4-Week Bootcamp</p>
          <p className="md:text-[16px] text-[14px]">3-Month Masterclass</p>
          <p className="md:text-[16px] text-[14px]">Software Development</p>
          <p className="md:text-[16px] text-[14px]">UI/UX Design</p>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col leading-6 md:mt-0 mt-9 md:pl-20 pl-10">
          <h1 className="text-[20px] font-[500] mb-3">Social</h1>
          <div className="flex gap-5 mt-2">
            <a
              href="https://facebook.com/profile.php?id=61559970860204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white text-2xl hover:text-[#009E65] cursor-pointer" />
            </a>
            <a
              href="https://x.com/cresttechhub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-white text-2xl hover:text-[#009E65] cursor-pointer" />
            </a>
            <a
              href="https://instagram.com/cresttechhub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-2xl hover:text-[#009E65] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section Aligned Left */}
      {/* Bottom Section – perfectly aligned left on mobile, untouched on desktop */}
      <div className="md:mt-25 mt-20 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center md:gap-2">
            <img src={Icon} alt="Icon" className="h-10" />
            <span className="font-bold text-2xl">CrestTech Hub</span>
          </div>
          <p className="font-[400] text-[13px] md:pl-0 pl-3">
            &copy; CrestTech Hub Limited. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
