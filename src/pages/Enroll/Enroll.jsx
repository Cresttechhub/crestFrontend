import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../images/enroll_img.svg";
import image2 from "../../images/enroll_img1.svg";
import { IoArrowBackOutline, IoChevronDownOutline } from "react-icons/io5";

const images = [image1, image2];

const programs = [
  "4-Week Bootcamp",
  "3-Month Masterclass",
  "UI/UX Track",
  "Software Development Track",
];

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

    if (!formData.program) {
      newErrors.program = "Please select a program";
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

      // Reset the form after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", program: "" });
      }, 5000); // Resets after 5 seconds
    }, 2000);
  };

  return (
    <div className="mt-32 md:mt-56 md:px-24 md:py-6 p-8 flex flex-col">
      <Link
        to="/"
        className="flex font-bold items-center space-x-2 text-[#1E1E1E] mb-8"
      >
        <IoArrowBackOutline />
        <h1 className="text-[16px]">Back</h1>
      </Link>
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
        <div className="hidden md:flex w-full">
          <img
            src={images[currentImage]}
            alt="Enrollment image"
            className="w-full h-[720px] rounded-tl-[25px] rounded-bl-[25px] object-cover transition-opacity duration-700"
          />
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 mt-8 md:mt-0 md:py-8 w-full h-full"
        >
          <h2 className="text-[18px] md:text-[28px] font-bold text-[#1E1E1E] -mt-8 md:mt-0">
            Enroll Now
          </h2>
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
          <div className="relative">
            <label className="block mb-2 text-[14px] md:text-[16px] text-[#1E1E1E]">
              Programs
            </label>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] flex justify-between items-center focus:outline-none focus:ring focus:ring-[#1E1E1E]"
            >
              {formData.program || "Select a program"}
              <IoChevronDownOutline className="text-[#1E1E1E]" />
            </button>

            {isOpen && (
              <ul className="absolute w-full bg-white rounded-[15px] p-8 mt-4 shadow-lg z-10">
                {programs.map((program) => (
                  <li
                    key={program}
                    onClick={() => {
                      setFormData({ ...formData, program });
                      setIsOpen(false);
                    }}
                    className="px-2 py-3 hover:bg-[#009E65] hover:text-[white] hover:rounded-[15px] cursor-pointer"
                  >
                    {program}
                  </li>
                ))}
              </ul>
            )}

            {errors.program && (
              <p className="text-red-500 text-sm">{errors.program}</p>
            )}
          </div>

          <button
            disabled={isSubmitting || isSubmitted}
            type="submit"
            className={`w-full text-[14px] md:text-[16px] mt-8 text-white p-3 rounded-[15px] transition ${
              isSubmitted ? "bg-[#1cf3a4]" : "bg-[#009E65]"
            }`}
          >
            {isSubmitting ? (
              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
            ) : null}
            {isSubmitting
              ? "Submitting..."
              : isSubmitted
              ? "Application submitted successfully we'll contact you soon!"
              : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
