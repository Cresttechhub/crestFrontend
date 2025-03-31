import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import topLeft from "../../images/topLeft.png";
import bottomLeft from "../../images/bottomLeft.png";
import topRight from "../../images/topRight.png";
import bottomRight from "../../images/bottomRight.png";
import greenLogo from "../../images/greenLogo.png";
import whiteLogo from "../../images/whiteLogo.png";
import logo from "../..//images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const ResetPassword = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log("Form submitted:", formData); // Log the submitted data
      // You can add logic here to send the form data to your backend
    }, 1000); // Simulate a 1-second submission delay
  };

  useEffect(() => {
    if (isSubmitted) {
      const redirectTimeout = setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 3000); // Redirect after 3 seconds

      return () => clearTimeout(redirectTimeout); // Clear timeout if component unmounts
    }
  }, [isSubmitted, navigate]);

  if (isSubmitting) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="relative w-40 h-40 p-8 shadow-md bg-white rounded-[15px]">
          <motion.div
            className="absolute inset-0 rounded-full border-t-4 border-[#00A665] animate-spin"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <img
            src={logo}
            alt="Logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
          />
        </div>
      </div>
    );
  }
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white -40 h-40 p-8 rounded-[15px] shadow-md text-center">
          <h1 className="text-[#00A665] text-[20px] font-bold">Success!</h1>
          <h2 className="text-2xl font-semibold mb-2">
            Your password has been successfully updated
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen  flex md:flex-row flex-col md:overflow-hidden">
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
              Set a Password
            </h2>
            <p className="text-center text-[14px] md:text-[16px] text-[#6D737A] mb-6">
              Your previous password has been reseted. Please set a new password
              for your account.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <label
                className="block text-[#1E1E1E] text-[14px] md:text-[16px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                placeholder="Enter Your Password"
              />
              <span
                className="absolute right-3 top-12 cursor-pointer text-xl"
                role="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>

              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-[#1E1E1E] text-[14px] md:text-[16px]"
                htmlFor="confirmPassword"
              >
                Re-enter Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                placeholder="Re-enter Your Password"
              />
              <span
                className="absolute right-3 top-12 cursor-pointer text-xl"
                role="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              className="mt-8 bg-[#009E65]text-white py-6 md:px-6 md:py-4 font-medium text-white text-[14px] md:text-[16px] hover:text-[#009E65] hover:font-medium bg-[#009E65] hover:bg-white hover:border-2 hover:border-[#009E65] w-full   rounded-[15px] cursor-pointer"
              type="submit"
            >
              Set Password
            </button>
          </form>
          <div className="text-center mt-8">
            <p className="text-[14px] md:text-[16px] text-[#1E1E1E] font-medium">
              Don't have an Account?{" "}
              <Link
                to="/signup"
                className="text-[#00A665] font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
            <p className="mt-4 text-[16px] text-[#1E1E1E] mb-10">
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

export default ResetPassword;
