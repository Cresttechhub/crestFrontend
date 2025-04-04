import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Icon from "../../images/mainIcon.svg";
import Button from "../Button/Button.jsx";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/programs", label: "Programs" },
    { path: "/mentorship", label: "Mentorship" },
    { path: "/faqs", label: "FAQs" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white pb-10 z-50 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center px-3 py-2 mt-9 bg-white">
        <div className="flex items-center">
          <img src={Icon} alt="Icon" className="h-8 md:h-10" /> {/* Reduced size */}
          <span className="font-bold text-xl md:text-2xl">CrestTech Hub</span> {/* Reduced text size for mobile */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-7 items-center text-[#1E1E1E] text-[18px] font-[400]">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`cursor-pointer hover:text-[#009E65] ${
                location.pathname === path ? "text-[#009E65] font-bold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-7 items-center text-[18px] text-[#1E1E1E]">
          <Link
            to="/login"
            className={`hover:text-[#009E65] ${
              location.pathname === "/login" ? "text-[#009E65] font-bold" : ""
            }`}
          >
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg py-5 px-4 text-[#1E1E1E] flex flex-col gap-4 text-lg">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-[#009E65] ${
                location.pathname === path ? "text-[#009E65] font-bold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <hr className="border-[#6D737A] my-2" />
          <Link
            to="/login"
            className={`hover:text-[#009E65] ${
              location.pathname === "/login" ? "text-[#009E65] font-bold" : ""
            }`}
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
