import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import topLeft from "../../images/topLeft.png";
import bottomLeft from "../../images/bottomLeft.png";
import topRight from "../../images/topRight.png";
import bottomRight from "../../images/bottomRight.png";
import greenLogo from "../../images/greenLogo.png";
import whiteLogo from "../../images/whiteLogo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const forgetPassword = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    navigate("/");
  };
  const toLogin = () => {
    navigate("/login");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/verifycode");
    }
  };
  return (
    <div className="relative   flex md:flex-row flex-col overflow-hidden">
      {/* Green Background (Desktop) */}
      <div className="bg-[#00A665] h-screen w-[40%] hidden md:block relative">
        <div className="mr-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4">
          <img src={whiteLogo} alt="" />
        </div>
        {/* Motion Images */}
        <motion.img
          src={topLeft}
          alt="topLeft"
          className="absolute -top-8 left-0 w-[250px]"
          animate={{
            y: [0, -20, 0], // Moves up and down
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={bottomLeft}
          alt="bottomLeft"
          className="absolute bottom-0 left-0"
          animate={{
            y: [0, 20, 0], // Moves down and up
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.img
          src={topRight}
          alt="topRight"
          className="absolute -top-8 right-0"
          animate={{
            y: [0, -20, 0], // Moves down and up
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={bottomRight}
          alt="bottomRight"
          className="absolute bottom-0 right-0"
          animate={{
            y: [0, 20, 0], // Moves down and up
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
      {/* form */}
      <div className="w-full md:w-[60%] p-8 md:px-2 flex flex-col justify-center items-center">
        <div className="w-full p-16">
          <div className="flex justify-between items-center md:float-right">
            <img src={greenLogo} alt="" className="block md:hidden" />
            <button onClick={handleClose} className="">
              <IoCloseSharp className="w-8 h-8 p-1 border border-[#757373]  text-[#757373] rounded-full" />
            </button>
          </div>

          <div className=" mt-16">
            <div className="md:flex md:justify-center md:items-center hidden">
              <button
                onClick={toLogin}
                className="cursor pointer flex items-center space-x-2"
              >
                <IoIosArrowBack className="text-[#1E1E1E]" />
                <span className="text-[#1E1E1E] text-[16px]">
                  Back to Login{" "}
                </span>
              </button>
            </div>

            <h2 className="text-center text-[24px] md:text-[35px] text-[#1E1E1E] font-bold mb-2">
              Forget Your Password?
            </h2>
            <p className="text-center text-[14px] md:text-[16px] text-[#6D737A] mb-6">
              Don’t worry, happens to all of us. <br className="md:hidden" />{" "}
              Enter your email below to recover your password.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-[#1E1E1E] text-[14px] md:text-[16px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-2 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                id="email"
                type="email"
                placeholder="you@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <button
              className="mt-8 bg-[#009E65]text-white py-6 md:px-6 md:py-4 text-white text-[14px] md:text-[16px] hover:text-[#009E65] hover:font-medium bg-[#009E65] hover:bg-white hover:border-2 hover:border-[#009E65] w-full   rounded-[15px] cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="text-center mt-8">
            <p className="mt-4 text-[14px] md:text-[16px] text-[#1E1E1E] mb-10">
              Or login with
            </p>
            <div className="flex justify-center mt-4 space-x-16 ">
              <FaFacebookF className="bg-[#1877F2] w-6 h-6 p-0.5 rounded-full text-white" />
              <FcGoogle className="w-6 h-6" />
              <FaApple className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forgetPassword;
