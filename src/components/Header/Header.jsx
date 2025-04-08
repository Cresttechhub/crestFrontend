import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../images/mainIcon.svg";
import Button from "../Button/Button.jsx";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/programs", label: "Programs" },
    { path: "/mentorship", label: "Mentorship" },
    { path: "/faqs", label: "FAQs" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 flex justify-center">
      <nav className="container mx-auto flex justify-between items-center px-4 md:py-3 py-1 border-b md:border-none border-[#D6D6D6] mt-9 bg-white md:rounded-[20px] md:pb-10">
        <div className="flex items-center pr-3 ml-1">
          <img src={Icon} alt="Icon" className="h-10" />
          <span className="font-bold text-2xl">CrestTech Hub</span>
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
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* Overlay and Mobile Menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div className="md:hidden fixed top-0 left-0 w-full h-full z-50 flex items-start justify-center">
            <div className="w-[90%] max-w-[400px] bg-white rounded-2xl mt-10 overflow-hidden shadow-xl z-50">
              <div className="bg-[#15211F]">
                <div className="px-5 py-8 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img src={Icon} alt="Icon" className="h-8" />
                    <span className="text-white font-semibold">
                      CrestTech Hub
                    </span>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-2xl"
                  >
                    <FaRegTimesCircle />
                  </button>
                </div>

                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="What do want to learn?"
                    className="w-[90%] py-2 rounded-lg m-6 p-6 bg-white focus:outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute top-1/2 right-9 transform -translate-y-1/2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
                    />
                  </svg>
                </div>
              </div>

              <div className="px-4 py-3 pb-10">
                <div className="flex flex-col gap-4 text-center items-center text-[#1E1E1E] text-base">
                  {navLinks.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      className={`hover:text-[#009E65] ${
                        location.pathname === path
                          ? "text-[#009E65] font-bold"
                          : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    to="/login"
                    className={`hover:text-[#009E65] ${
                      location.pathname === "/login"
                        ? "text-[#009E65] font-bold"
                        : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link to="/signup" onClick={() => setMenuOpen(false)}>
                    <Button
                      size="lg"
                      className="pl-3 pt-2 pb-2 pr-34 bg-[#009E65] text-white hover:bg-white hover:text-[#009E65] hover:border-[#009E65] mt-2"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;