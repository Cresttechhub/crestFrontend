
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import topLeft from "../../images/topLeft.png";
import bottomLeft from "../../images/bottomLeft.png";
import topRight from "../../images/topRight.png";
import bottomRight from "../../images/bottomRight.png";
import logo from "../..//images/logo.png";
import whiteLogo from "../../images/whiteLogo.png";
import greenLogo from "../../images/greenLogo.png";
import check from "../../images/check.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import useSignup from "../../components/hooks/useSignUp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Signup = () => {
  const signupMutation = useSignup();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      formData.password.length < 8 ||
      !/[A-Z]/.test(formData.password) ||
      !/[a-z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password) ||
      !/[^a-zA-Z0-9]/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, a special character, and a digit.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!validateForm()) return;

    setIsSubmitting(true);
    console.log(formData);

    signupMutation.mutate(formData, {
      onSuccess: () => {
        console.log("Signup successful!", formData); // Log the response data
        setIsSubmitting(false); // Ensure submission state is reset
        navigate("/verify-code"); // Immediate redirection after success
      },

      onError: (err) => {
        console.error("Signup Error:", err); // Log the full error
        console.error("Error Response:", err.response); // Log the response
        const serverError = err.response?.data?.message || "Signup failed";
        setErrors({ api: serverError });
        setIsSubmitting(false);
      },
    });
  };
  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({ ...prevData, phone }));
  };

  // useEffect(() => {
  //   if (isSubmitted) {
  //     const redirectTimeout = setTimeout(() => {
  //       navigate("/login"); // Redirect to login page
  //     }, 3000); // Redirect after 3 seconds

  //     return () => clearTimeout(redirectTimeout); // Clear timeout if component unmounts
  //   }
  // }, [isSubmitted, navigate]);

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
          <img src={check} alt="Check" className="mx-auto mb-4 w-16 h-16" />
          <h2 className="text-2xl font-semibold mb-2">
            Account created successfully
          </h2>
        </div>
      </div>
    );
  }

  console.log("API Base URL:", import.meta.env.VITE_BASE_URL);
  {
    errors.api && <p className="text-red-500 text-sm">{errors.api}</p>;
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

      {/* Signup Form */}

      <div className="w-full md:w-[60%] p-8 md:p-16 mt-18 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center md:float-right">
            <img src={greenLogo} alt="" className="block md:hidden" />
            <button onClick={handleClose} className="">
              <IoCloseSharp className="w-8 h-8 p-1 border border-[#757373]  text-[#757373] rounded-full" />
            </button>
          </div>

          <div className="text-center mt-8">
            <h2 className="text-[24px] md:text-[35px] text-[#1E1E1E] font-bold mb-2">
              Sign Up
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#6D737A] mb-6">
              Let's get you all set up so you can access your personal account.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="text-[#1E1E1E] text-[14px] md:text-[16px] "
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="mt-2 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                id="fullName"
                type="text"
                placeholder="John Doe"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.form && (
                <p className="text-red-500 text-sm mb-4">{errors.form}</p>
              )}
            </div>
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
              {errors.form && (
                <p className="text-red-500 text-sm mb-4">{errors.form}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-[#1E1E1E] text-[14px] md:text-[16px] "
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              {/* <div className="relative custom-phone-input">
                <PhoneInput
                  country={"ng"}
                  placeholder="Phone number"
                  inputClass={`mt-2 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]`}
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                />
              </div> */}
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-2 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#1E1E1E] text-[14px] md:text-[16px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="mt-2 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                id="password"
                type="password"
                placeholder=" Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              {errors.form && (
                <p className="text-red-500 text-sm mb-4">{errors.form}</p>
              )}
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green-600"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />

                <span className="ml-2 text-sm text-[#1E1E1E] text-14px] md:text-[16px]">
                  Remember me
                </span>
              </label>
              <Link
                to="/forgetpassword"
                className="text-[14px] md:text-[16px] font-medium text-[#00A665] hover:underline"
              >
                Forgot Password
              </Link>
            </div>
            <button
              className="bg-[#009E65]text-white py-6 md:px-6 md:py-4 text-white text-[14px] md:text-[16px] hover:text-[#009E65] hover:font-medium bg-[#009E65] hover:bg-white hover:border-2 hover:border-[#009E65] w-full   rounded-[15px] cursor-pointer"
              type="submit"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center ">
            <p className="text-[14px] md:text-[16px] text-[#1E1E1E] font-medium">
              Already have an Account?{" "}
              <Link
                to="/login"
                className="text-[#00A665] font-medium hover:underline"
              >
                Login
              </Link>
            </p>
            <p className="mt-4 text-[16px] text-[#1E1E1E]">Or login with</p>
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

export default Signup;
