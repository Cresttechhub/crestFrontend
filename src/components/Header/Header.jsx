import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../images/MainIcon.svg";
import Button from "../Button/Button.jsx";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white pb-10 z-50 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3 border border-[#6D737A] rounded-[20px] mt-9 bg-white">
        <div className="flex items-center border-r border-[#6D737A] pr-3 ml-1">
          <img src={Icon} alt="Icon" className="h-10" />
          <span className="font-bold text-2xl">CrestTech Hub</span>
        </div>

        <div className="hidden md:flex gap-7 items-center text-[#1E1E1E] text-[18px] font-[400]">
          <Link to="/" className="hover:text-[#009E65] cursor-default">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#009E65]">
            About Us
          </Link>
          <Link to="/programs" className="hover:text-[#009E65]">
            Programs
          </Link>
          <Link to="/mentorship" className="hover:text-[#009E65]">
            Mentorship
          </Link>
          <Link to="/faqs" className="hover:text-[#009E65]">
            FAQs
          </Link>
          <Link to="/blogs" className="hover:text-[#009E65]">
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-[#009E65]">
            Contact us
          </Link>
        </div>

        <div className="hidden md:flex gap-7 items-center text-[18px] text-[#1E1E1E]">
          <Link to="/login" className="hover:text-[#009E65]">
            Login
          </Link>
          <Link to="/signup">
            <Button
              size="lg"
              className="border border-[#009E65] hover:bg-white hover:text-[#009E65] hover:border-[#009E65]"
            >
              Sign Up
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg py-5 px-4 text-[#1E1E1E] flex flex-col gap-4 text-lg">
          <Link
            to="/"
            className="hover:text-[#009E65]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#009E65]"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/programs"
            className="hover:text-[#009E65]"
            onClick={() => setMenuOpen(false)}
          >
            Programs
          </Link>
          <Link
            to="/mentorship"
            className="hover:text-[#009E65]"
            onClick={() => setMenuOpen(false)}
          >
            Mentorship
          </Link>
          <Link
            to="/faqs"
            className="hover:text-[#009E65]"
            onClick={() => setMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            to="/blogs"
            className="hover:text-[#009E65]"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#009E65]"
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </Link>
          <hr className="border-[#6D737A] my-2" />
          <Link
            to="/login"
            className="hover:text-[#009E65]"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link to="/signup">
            <Button
              size="lg"
              className="w-full border border-[#009E65] hover:bg-white hover:text-[#009E65] hover:border-[#009E65]"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
