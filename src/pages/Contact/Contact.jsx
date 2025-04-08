import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import map from "../../images/map.svg";
import { IoArrowBackOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    if (!formData.message) newErrors.message = "Message is required";

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

      // Reset the form after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 5000); // Resets after 5 seconds
    }, 2000);
  };

  return (
    <div className="mt-36 md:px-24 md:py-6 p-4 flex flex-col">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:space-x-8">
        <Link
          to="/"
          className="md:hidden flex font-bold items-center space-x-2 text-[#1E1E1E] mb-8"
        >
          <IoArrowBackOutline />
          <h1 className="text-[16px]">Back</h1>
        </Link>
        <div className="bg-[#007849] rounded-[25px] text-white p-10">
          <h2 className="text-[20px] md:text-[30px] mb-4 font-bold">
            Contact Us
          </h2>
          <p className="text-[14px] md:text-[16px]">
            Have questions about our services? Want to start a project? We'd
            love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
          <h2 className="mt-16 text-[16px] md:text-[20px] font-medium mb-4">
            Office Address
          </h2>
          <p className="text-[14px] md:text-[16px]">
            Have questions about our services? Want to start a project? We'd
            love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
          <div className="mt-16 text-[16px] md:text-[20px]">
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: info@gmail.coom</p>
          </div>
          <h2 className="mt-10 text-[16px] md:text-[20px] font-[600px] mb-4">
            Social Media
          </h2>
          <div className="flex space-x-4 items-center text-[#3DEA9E]">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full mt-8 md:mt-0 md:py-8"
        >
          <div className="">
            <label
              htmlFor=""
              className="text-[14px] md:text-[16px] text-[#1E1E1E]"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[14px] md:text-[16px] text-[#1E1E1E]"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[14px] md:text-[16px] text-[#1E1E1E]"
            >
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[14px] md:text-[16px] text-[#1E1E1E]"
            >
              Message
            </label>
            <textarea
              placeholder="Write here..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
              rows="5"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            disabled={isSubmitting || isSubmitted}
            type="submit"
            className={`w-full mt-6 text-white p-3 rounded-[15px] text-[14px] md:text-[16px] transition ${
              isSubmitted ? "bg-[#1cf3a4]" : "bg-[#009E65]"
            }`}
          >
            {isSubmitting ? (
              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
            ) : null}
            {isSubmitting
              ? "Submitting..."
              : isSubmitted
              ? "Submitted Successfully"
              : "Submit"}
          </button>
        </form>
      </div>
      <div className="mt-10">
        <img src={map} alt="map" />
      </div>
    </div>
  );
};

export default Contact;
