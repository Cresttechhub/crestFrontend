import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";

import Icon from "../../images/MainIcon.svg";

import Button from "../Button/Button.jsx";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown visibility
  const profileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
    const handleClickOutside = (event) =>{
      if(profileRef.current && 
        !profileRef.current.contains(event.target)
      ){
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return()=>{
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])

  useEffect(()=>{
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 flex justify-center">
      <div className="w-full overflow-visible md:px-24 md:py-8">
        <nav className="w-full flex flex-wrap justify-between items-center py-1 border-b md:border-none border-[#D6D6D6] md:mt-0 mt-6 bg-white md:rounded-[20px]">
          <div className="flex items-center min-w-0 flex-shrink md:m-0 m-2">
            <img src={Icon} alt="Icon" className="h-10" />
            <span className="font-bold text-2xl">CrestTech Hub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-5 items-center text-[#1E1E1E] text-[18px] font-[400]">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`cursor-pointer hover:text-[#009E65] ${location.pathname === path ? "text-[#009E65] font-bold" : ""}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-7 items-center text-[18px] text-[#1E1E1E]">
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="flex items-center pr-3 space-x-1">
                  <p className="bg-[#9747FF] font-[400] text-[23px] text-white rounded-full w-8 h-8 flex items-center justify-center">
                  {user?.initials || 'N/A'} {/* Display first letter of the user's name */}
                  </p>
                  <span className="text-[14px] font-[600] text-[#1E1E1E]">
                    {user?.email?.slice(0, 10)}...
                  </span>
                </div>
              </div>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute right-0 w-32 top-full bg-white rounded-2xl shadow-md z-10 mt-4">
                  <button
                    onClick={handleLogout}
                    className="block w-full p-2 text-center px-3 py-3 text-lg text-red-500 font-[600]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`hover:text-[#009E65] ${location.pathname === "/login" ? "text-[#009E65] font-bold" : ""}`}
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
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </nav>
      </div>

      {/* Overlay and Mobile Menu */}
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/30 z-30 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-full z-50 transition-transform duration-500 ease-in-out transform rounded-2xl shadow-xl ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{
            width: "100%",
            paddingLeft: "5%",
            paddingRight: "5%",
            paddingTop: "10%",
          }}
        >
          <div className="bg-[#15211F] py-0.5 rounded-t-2xl">
            <div className="px-5 py-8 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <img src={Icon} alt="Icon" className="h-8" />
                <span className="text-white font-semibold">CrestTech Hub</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl"
              >
                <FaRegTimesCircle className="cursor-pointer" />
              </button>
            </div>

            <div className="relative mb-2">
              <input
                type="text"
                placeholder="What do you want to learn?"
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

          <div className="px-4 py-3 pb-10 bg-white rounded-b-2xl">
            <div className="flex flex-col gap-4 text-center items-center text-[#1E1E1E] text-base">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`hover:text-[#009E65] ${location.pathname === path ? "text-[#009E65] font-bold" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/login"
                className={`hover:text-[#009E65] ${location.pathname === "/login" ? "text-[#009E65] font-bold" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <Button
                  size="lg"
                  className="pl-28 pt-2 pb-2 pr-28 bg-[#009E65] text-white hover:bg-white hover:text-[#009E65] hover:border-[#009E65] mt-2"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    </header>
  );
}

export default Header;
