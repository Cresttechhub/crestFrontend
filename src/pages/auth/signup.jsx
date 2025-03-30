import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import topLeft from "../../images/topLeft.png";
import bottomLeft from "../../images/bottomLeft.png";
import topRight from "../../images/topRight.png";
import bottomRight from "../../images/bottomRight.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  // Framer Motion Animations
  const controls = useAnimation();

  React.useEffect(() => {
    const sequence = async () => {
      await controls.start({
        y: -20,
        transition: { duration: 1, yoyo: Infinity },
      });
    };
    sequence();
  }, [controls]);

  const reverseControls = useAnimation();

  React.useEffect(() => {
    const sequence = async () => {
      await reverseControls.start({
        y: 20,
        transition: { duration: 1, yoyo: Infinity },
      });
    };
    sequence();
  }, [reverseControls]);

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Signup Successful!
          </h2>
          <p className="text-center">Your account has been created.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen flex md:flex-row flex-col">
      {/* Green Background (Desktop) */}
      <div className="bg-green-600 w-1/2 hidden md:block relative">
        <div className="absolute top-10 left-10">
          <img src="./images/logo.svg" alt="CrestTech Hub" className="w-48" />
        </div>
        {/* Motion Images */}
        <motion.img
          src={topLeft}
          alt="topLeft"
          className="absolute top-10 left-1/4"
          animate={reverseControls}
        />
        <motion.img
          src={bottomLeft}
          alt="bottomLeft"
          className="absolute bottom-10 left-1/4"
          animate={reverseControls}
        />
        <motion.img
          src={topRight}
          alt="topRight"
          className="absolute top-10 right-1/4"
          animate={controls}
        />
        <motion.img
          src={bottomRight}
          alt="bottomRight"
          className="absolute bottom-10 right-1/4"
          animate={controls}
        />
      </div>

      {/* Signup Form */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-2">Sign Up</h2>
          <p className="text-sm text-gray-600 mb-6">
            Let's get you all set up so you can access your personal account.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Your Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs italic">{errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
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
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot Password
              </a>
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an Account?{" "}
              <a href="#" className="text-green-600 hover:underline">
                Login
              </a>
            </p>
            <p className="mt-4 text-sm text-gray-600">Or login with</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-blue-500">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 5.006 3.22 9.213 7.625 10.653v-7.703H6.69v-2.95h2.935V8.557c0-2.894 1.777-4.48 4.314-4.48 1.254 0 2.324.09 2.635.127v3.025h-1.808c-1.416 0-1.693.675-1.693 1.66v2.18h3.456l-.56 2.95h-2.895v7.703A10.007 10.007 0 0022 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-red-500">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.998 2.316C7.94 2.316 4.636 5.62 4.636 9.678c0 3.19 1.89 5.89 4.545 6.816-.002.69-.002 1.306 0 1.996.31 0 .565.114.76.24.44.346.71.867.71 1.405 0 .85-.07 1.565-.11 2.41-.004.007-.004.014-.006.02-.33.05-.66.08-.98.08-4.056 0-7.36-3.304-7.36-7.36 0-4.056 3.304-7.36 7.36-7.36 2.08 0 3.86.804 5.176 2.09l3.522-3.35c-.917-.83-2.112-1.316-3.378-1.316z" />
                </svg>
              </a>
              <a href="#" className="text-gray-900">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 1.995c-5.523 0-10 4.477-10 10 0 2.112.65 4.04 1.77 5.676v-3.953h-2.28v-2.203h2.28V9.99c0-2.26 1.383-3.492 3.38-3.492 1.006 0 1.9.183 1.9 1.99v2.214h-1.065c-1.095 0-1.308.517-1.308 1.257v1.658h2.235l-.36 2.203h-1.875V22c5.523 0 10-4.477-10-10 0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
