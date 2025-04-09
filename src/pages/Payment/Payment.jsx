import React, { useState, useEffect } from "react";

import { IoArrowBackOutline } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import visa from "../../images/visa.svg";
import master from "../../images/master.svg";
import { MdAccessTime } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { FaRegCheckSquare } from "react-icons/fa";
import { usePayment } from "../../contexts/PaymentContext";

const Payment = () => {
  const { selectedProgram, isMonthly, step, setStep } = usePayment();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: selectedProgram ? selectedProgram.title : "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const programs = ["4-Week Tech Bootcamp", "3-Month Masterclass"];

  useEffect(() => {

    setStep(2);

  }, [setStep]);

  if (!selectedProgram) {
    return (
      <div className="mt-36 p-8 lg:px-24 lg:py-12">

        <Link to="/path" className="flex items-center text-[#1E1E1E] mb-6">

          <IoArrowBackOutline className="mr-2" /> Back to Choose Program
        </Link>
        <p className="text-14px md:text-[16px] text-gray-600">
          No program selected. Please go back and choose a program.
        </p>
      </div>
    );
  }

  const displayedPrice =
    isMonthly && selectedProgram.title === "3-Month Masterclass"
      ? selectedProgram.monthlyPrice
      : selectedProgram.originalPrice;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.program) newErrors.program = "Please select a program";

    setErrors(newErrors);
    valid = Object.keys(newErrors).length === 0;


    //   if (valid) {
    //     setIsSubmitting(true);
    //     setTimeout(() => {
    //       setIsSubmitting(false);
    //       setIsSubmitted(true);
    //       setTimeout(() => {
    //         navigate("/confirmation");
    //       }, 2000);
    //     }, 2000);
    //   }
    // };


    if (valid) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {

          navigate("/confirmation", {
            state: {
              displayedPrice: displayedPrice,
              isMonthly: isMonthly,
              selectedProgram: selectedProgram,
            },
          });

        }, 2000);
      }, 2000);
    }
  };

  return (
    <div className="mt-36">
      <div className="p-8 lg:px-80 lg:pt-12 lg:pb-6">
        {" "}
        <Link to="/path" className="mb-6 flex items-center text-[#1E1E1E]">
          <IoArrowBackOutline className="mr-2" /> Back
        </Link>
        {/* Progress Bar */}
        <div className=" flex justify-between items-center mb-8">
          <div className="text-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                step >= 1 ? "bg-[#00A665]" : "bg-gray-300"
              }`}
            >
              1
            </div>
            <p
              className={`text-xs mt-1 ${
                step >= 2 ? "text-[#00A665]" : "text-gray-500"
              }`}
            >
              Information
            </p>
          </div>
          <div
            className={`h-1 bg-[#00A665] flex-grow ${
              step >= 2 ? "bg-[#00A665]" : ""
            }`}
          ></div>
          <div className="text-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                step >= 2 ? "bg-[#00A665]" : "bg-gray-300"
              }`}
            >
              2
            </div>
            <p
              className={`text-xs mt-1 ${
                step >= 2 ? "text-gray-800" : "text-gray-500"
              }`}
            >
              Payment
            </p>
          </div>
          <div
            className={`h-1 bg-gray-300 flex-grow ${
              step >= 3 ? "bg-[#00A665]" : ""
            }`}
          ></div>
          <div className="text-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                step >= 3 ? "bg-[#00A665]" : "bg-gray-300"
              }`}
            >
              3
            </div>
            <p
              className={`text-xs mt-1 ${
                step >= 3 ? "text-gray-800" : "text-gray-500"
              }`}
            >
              Confirmation
            </p>
          </div>
        </div>
      </div>
      <div className=" p-8 lg:px-88">
        <h2 className="text-[18px] md:text-[24px] font-bold mb-4">
          Registration & Payment
        </h2>
        <div className="mb-6">
          <div className="flex justify-between">
            <h3 className="text-l8 md:text-[20px] font-semibold text-[#1E1E1E]">
              {selectedProgram.title}
            </h3>
            <span
              className={` text-xs font-medium px-2 py-1 rounded-lg ${
                selectedProgram.level === "Beginner-friendly"
                  ? "bg-[#EDE7F6]  text-[#7A24FB]"
                  : "bg-[#E3F2FD] text-[#0048FF]"
              }`}
            >
              {selectedProgram.level}
            </span>
          </div>

          <p className="text-2xl items-center font-bold text-[#00A665] mt-2">
            N{displayedPrice}
            <span className="text-[#6D737A] text-[16px] font-normal">
              / Course
            </span>
          </p>
          <div className="text-[14px] md:text-[16px] text-[#6D737A] ">
            <p className="mt-4">{selectedProgram.description}</p>
            <p className="mt-4 flex items-center">
              <MdAccessTime className="mr-2" />
              {selectedProgram.duration}
            </p>
            <p className="mt-4 flex items-center ">
              <SlPeople className="mr-2" />
              {selectedProgram.groupSize}
            </p>
            <ul className=" mt-4 space-y-4">
              {selectedProgram.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <FaRegCheckSquare className="mr-2 text-[#00A665]" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-6 w-full mt-12 ">
          <h3 className="text-[16px] md:text-[24px] font-bold text-[#1E1E1E] mb-4">
            Personal Information
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-[14px] md:text-[16px] text-[#1E1E1E]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[14px] md:text-[16px] text-[#1E1E1E]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-[14px] md:text-[16px] text-[#1E1E1E]"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mt-12 w-full border  rounded-[15px] p-4">
              <div className="flex justify-between">
                <h3 className="text-[18px] md:text-[24px] font-medium text-[#1E1E1E] mb-3">
                  Payment Methods
                </h3>
                <div className="flex items-center space-x-4">
                  <img src={master} alt="mastercard" className="h-14" />
                  <img src={visa} alt="visa" className="h-14" />
                </div>
              </div>
              <div className="">
                <div className="mb-2">
                  <label
                    htmlFor="card-number"
                    className="text-[14px] md:text-[16px] text-[#1E1E1E]"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                  />
                </div>
                <div className="flex space-x-10 mt-4">
                  <div className="">
                    <label
                      htmlFor="expiry-month"
                      className="text-[14px] md:text-[16px] text-[#1E1E1E]"
                    >
                      Expiry Month
                    </label>
                    <select
                      id="expiry-month"
                      className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                    >
                      <option>Jan</option>
                      <option>Feb</option>
                      <option>Mar</option>
                      <option>Apr</option>
                      <option>May</option>
                      <option>Jun</option>
                      <option>Jul</option>
                      <option>Aug</option>
                      <option>Sep</option>
                      <option>Oct</option>
                      <option>Nov</option>
                      <option>Dec</option>
                    </select>
                  </div>
                  <div className="">
                    <label
                      htmlFor="expiry-year"
                      className="text-[14px] md:text-[16px] text-[#1E1E1E]"
                    >
                      Expiry Year
                    </label>
                    <select
                      id="expiry-year"
                      className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                    >
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                      <option>2031</option>
                    </select>
                  </div>
                  <div className="">
                    <label
                      htmlFor="cvc"
                      className="text-[14px] md:text-[16px] text-[#1E1E1E]"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      className="mt-4 w-full text-[12px] md:text-[16px] p-3 border border-[#1E1E1E] rounded-[15px] focus:outline-none focus:ring focus:ring-[#1E1E1E]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-12">
          <h3 className="text-[18px] md:text-[24px] font-bold text-[#1E1E1E] mb-3">
            What Happens Next
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <div className=" flex flex-col">
              <li className="flex items-center text-[#1E1E1E] text-[14px] md:text-[16px] font-medium">
                <FaRegCheckSquare className="mr-2 text-[#00A665]" /> Welcome
                Email
              </li>
              <p className="py-3 px-6 text-[14px] md:text-[16px] text-[#6D737A]">
                You will receive a welcome email.
              </p>
            </div>
            <div className=" flex flex-col">
              <li className="flex items-center text-[#1E1E1E] text-[14px] md:text-[16px] font-medium">
                <FaRegCheckSquare className="mr-2 text-[#00A665]" /> Course
                Start Date:
              </li>
              <p className="py-3 px-6 text-[14px] md:text-[16px] text-[#6D737A]">
                The bootcamp begins on April 15, 2025. Mark your calendar!
              </p>
            </div>
            <div className="flex flex-col">
              <li className="flex items-center text-[#1E1E1E] text-[14px] md:text-[16px] font-medium">
                <FaRegCheckSquare className="mr-2 text-[#00A665]" /> Platform
                Access:
              </li>
              <p className="py-3 px-6 text-[14px] md:text-[16px] text-[#6D737A]">
                You'll get immediate access.
              </p>
            </div>
            <div className="flex flex-col">
              <li className="flex items-center text-[#1E1E1E] text-[14px] md:text-[16px] font-medium">
                <FaRegCheckSquare className="mr-2 text-[#00A665]" /> Orientation
                Session:
              </li>
              <p className="py-3 px-6 text-[14px] md:text-[16px] text-[#6D737A]">
                Join our virtual orientation on April 12, 2025 at 10:00 AM WAT.
              </p>
            </div>
          </ul>
        </div>

        <div className="mt-6 ">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <p className="text-sm font-medium text-gray-700">Total Amount:</p>
              <span className="text-[28px] md:text-[36px] font-bold text-[#000000]">
                N{displayedPrice}
              </span>
            </div>
            <p className="flex items-center text-[14px] md:text-[16px] text-[#00A665]">
              <FaRegCheckSquare className="mr-2 text-[#00A665]" />
              Secure Payment
            </p>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting || isSubmitted}
            className={`w-full  text-[14px] md:text-[16px] mt-8  text-white p-3 rounded-[15px] transition ${
              isSubmitted ? "bg-[#1cf3a4]" : "bg-[#00A665]"
            }`}
          >
            {isSubmitting ? (
              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
            ) : null}
            {isSubmitting
              ? "Submitting..."
              : isSubmitted
              ? "Registration Successful! Redirecting..."
              : "Complete Registration"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
