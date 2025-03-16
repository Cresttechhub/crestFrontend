import React from "react";
import { Link } from "react-router-dom"

import Circle from "./FooterImages/circle.png"
import Circle1 from "./FooterImages/Circle1.png"
import Logo from "./FooterImages/logo1.png"
import Facebook from "./FooterImages/facebook.png"
import Instagram from "./FooterImages/instagram.png"

const Footer = () => {
  return (
    <div className="h-96 bg-[#1B1B1B] p-4 w-auto mb-20 rounded-t-md text-white">

      <div className="relative">
        <img src={Circle} alt="circle" className="absolute w-[250px] left-0 top-3 -ml-4" />
      </div>

      <div className="container mx-auto flex items-center justify-between m-6">

        <div className=" flex gap-6 w-3/4">

          <div className=" pl-20 w-2/4">
            <img src={Logo} alt="logo" className="w-60 mt-2" />
            <p className="pl-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p className="pl-2.5 mt-8">@cresttechhub.com</p>
          </div>

          <div className="w-2/6 pl-16 leading-loose m-auto h-24">
            <Link to="/about" className="hover:text-teal-400">About us</Link> <br />
            <Link to="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-teal-400">Home</Link> <br />
            <Link to="/services" className="hover:text-teal-400">Services</Link> <br />
            <Link to="/news" className="hover:text-teal-400">Blog</Link> <br />
            <Link to="/contact" className="hover:text-teal-400">Contact us</Link>
          </div>

          <div className="w-2/6 m-auto h-24">
            <h3 className="font-medium">Contact us</h3>
            <p className="pt-6"> Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry.</p>
            <p className="pt-3">+234800 000 0000</p>
          </div>
        </div>

        <div className="relative w-20">
            <img src={Circle1} alt="circle" className=" absolute -right-50 -top-24" />
          </div>
        <div className="flex justify-center gap-3 w-1/14 mt-36">
          <div className="bg-white rounded-full hover:bg-[#3a3f3e] p-1">
            <img src={Facebook} alt="facebookIcon" className="cursor-pointer" />
          </div>
          <div className="bg-white rounded-full hover:bg-[#3a3f3e] p-1">
            <img src={Instagram} alt="instagramIcon" className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className=" text-center">
        <div className="relative mt-16">
          <hr className=" absolute w-[1350px] -right-4 border-t border-gray-500 my-4" />
        </div>
        <p className="p-12 text-sm">Copyright &copy; 2025 Company All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
