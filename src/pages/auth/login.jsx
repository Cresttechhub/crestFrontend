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
import { useLogin } from "../../components/hooks/useLogin";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { mutate: loginUser, isPending } = useLogin();

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
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

  const handleClose = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/path");
    }

    if (!validateForm()) return;

    loginUser(formData, {
      onSuccess: (data) => {
        setSuccess(true);
        localStorage.setItem("token", data.token);

        // Delay for checkmark to show
        setTimeout(() => {
          navigate("/path");
        }, 1200);
      },
      onError: (error) => {
        const message = error?.response?.data?.message || error.message;
        setErrors({ form: message });
      },
    });
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
      {/* Login Form */}
      <div className="w-full md:w-[60%] p-8 md:p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center md:float-right">
            <img src={greenLogo} alt="" className="block md:hidden" />
            <button onClick={handleClose} className="">
              <IoCloseSharp className="w-8 h-8 p-1 border border-[#757373]  text-[#757373] rounded-full" />
            </button>
          </div>
          <div className="text-center mt-8">
            <h2 className="text-[24px] md:text-[35px] text-[#1E1E1E] font-bold mb-2">
              Login
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#6D737A] mb-6">
              Login to access your CrestTech Hub account.
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
                placeholder="yourname@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.form && (
                <p className="text-red-500 text-sm mb-4">{errors.form}</p>
              )}
            </div>
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
                className="mt-2 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                placeholder="Password"
              />
              <span
                className="absolute right-3 top-12 cursor-pointer text-xl"
                role="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>

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
              className={`bg-[#009E65] text-white py-6 md:px-6 md:py-4 text-[14px] md:text-[16px] w-full rounded-[15px] cursor-pointer flex justify-center items-center gap-2 transition-all duration-300 ${
                isPending || success
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:text-[#009E65] hover:font-medium hover:bg-white hover:border-2 hover:border-[#009E65]"
              }`}
              type="submit"
              disabled={isPending || success}
            >
              {isPending ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="ml-2">Logging in...</span>
                </>
              ) : success ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Success</span>
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="mt-6 text-center ">
            <p className="text-[14px] md:text-[16px] text-[#1E1E1E] font-medium">
              Don't have an Account?{" "}
              <Link
                to="/signup"
                className="text-[#00A665] font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
            <p className="mt-4 text-14px] md:text-[16px] text-[#1E1E1E]">
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

export default Login;
