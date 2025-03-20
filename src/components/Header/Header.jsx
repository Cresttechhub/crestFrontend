import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import Button from "../Button/Button";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change when user scrolls 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-white"
      }`}
    ><nav className="container mx-auto flex justify-between items-center px-16 py-6 ">


        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-teal-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-teal-400">
            About
          </Link>
          <Link to="/services" className="hover:text-teal-400">
            Services
          </Link>
          <Link to="/news" className="hover:text-teal-400">
            News
          </Link>
          <Link to="/contact" className="hover:text-teal-400">
            <Button />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
