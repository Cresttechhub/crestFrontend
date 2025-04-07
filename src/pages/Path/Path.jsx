import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Switch, Label, Field } from "@headlessui/react";
import { MdAccessTime } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { FaRegCheckSquare } from "react-icons/fa";
import visa from "../../images/visa.svg";
import master from "../../images/master.svg";
import { motion } from "framer-motion";
import { IoChevronDownOutline } from "react-icons/io5";

const faqs = [
  {
    question: "Who can apply for mentorship?",
    answer:
      "Anyone enrolled in our programs can apply for mentorship. We welcome students at all skill levels, from beginners to advanced learners looking to upskill",
  },
  {
    question: "How do I enroll in a program?",
    answer:
      "To enroll, visit the Programs page, select your preferred course (Bootcamp or Masterclass) and click 'Join now. You will be redirected to the registration form to complete your enrollment",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No! Our 4-Week Tech Bootcamp is designed for beginners while the 3-Month Masterclass is for looking to advance their skills. Choose base on your experience level.",
  },
  {
    question: "How often do mentorship sessions occur?",
    answer:
      "We offer weekly live sessions and regular check-ins with your assigned mentor. Additional support is available through our online platforms.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer:
      "We offer a mix of live mentorship sessions with industry experts and self-paced learning materials to ensure flexibility and hands-on experience.",
  },
  {
    question: "Is there a payment plan available?",
    answer:
      "Yes! You can pay in installments for the 3-Month Masterclass to make we provide flexible payment plans to make learning more affordable. Full payment is required for the 4-Week Bootcamp.",
  },
  {
    question:
      "Will I get a certificate and internship after completing a program?",
    answer:
      "Absolutely, Upon successful completion, you'll receive a recognized certificate and top performing students may qualify for an internship opportunity with partner companies.",
  },
];

const ProgramCard = ({
  title,
  level,
  description,
  duration,
  groupSize,
  features,
  price,
}) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-2xl p-6 w-full h-full ${
        level === "Pro Level" ? "border-2 border-[#00A665]" : "border-none"
      }`}
    >
      <h3 className="font-semibold text-[16px] md:text-[20px] mb-12">
        {title}
      </h3>
      <span
        className={` text-xs font-medium px-2 py-1 rounded-lg ${
          level === "Beginner-friendly"
            ? "bg-[#EDE7F6]  text-[#7A24FB]"
            : "bg-[#E3F2FD] text-[#0048FF]"
        }`}
      >
        {level}
      </span>
      <p className="text-[#00A665] font-bold text-[24px] md:text-[36px] mt-4">
        N{price}{" "}
        <span className="text-[#6D737A] text-[16px] font-normal">/ Course</span>
      </p>
      <div className="text-[14px] md:text-[16px] text-[#6D737A] ">
        <p className="mt-4">{description}</p>
        <p className="mt-4 flex items-center">
          <MdAccessTime className="mr-2" />
          {duration}
        </p>
        <p className="mt-4 flex items-center ">
          <SlPeople className="mr-2" />
          {groupSize}
        </p>
        <ul className="mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mt-4 text-[#6D737A]">
              <FaRegCheckSquare className="mr-2 text-[#00A665] rounded-md" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to="/payment"
          className="block text-center bg-[#00A665] font-medium text-white text-14px] md:text-[16px] py-6 rounded-[15px] mt-4 hover:border-2 hover:border-[#00A665] hover:bg-white  hover:text-[#00A665]"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

const Path = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [monthlyPayment, setMonthlyPayment] = useState(false);
  const bootcampPrice = monthlyPayment ? "30,000" : "30,000";
  const masterclassPrice = monthlyPayment ? "23,340" : "70,000";

  const programs = [
    {
      price: bootcampPrice,
      title: "4-Week Tech Bootcamp",
      level: "Beginner-friendly",
      description:
        "Learn the basics of tech and kickstart your journey with our comprehensive bootcamp program.",
      duration: "4 weeks, 20 hours/week",
      groupSize: "Small groups (max 15 students)",
      features: [
        "Four week intensive training",
        "One month capstone",
        "One month internship",
        "Immersive and hands-on mentorship",
        "Flexible and tailored to your needs",
      ],
    },
    {
      price: masterclassPrice,
      title: "3-Month Masterclass",
      level: "Pro Level",
      description:
        "In-depth training with structured mentorship for those ready to become a tech professional.",
      duration: "4 weeks, 20 hours/week",
      groupSize: "Small groups (max 15 students)",
      features: [
        "Three month intensive training",
        "One month capstone",
        "Two month internship",
        "Immersive and hands-on mentorship",
        "Flexible and tailored to your needs",
      ],
    },
  ];

  return (
    <div className="mt-36">
      <div className="p-8 lg:px-24 lg:py-12">
        <div className="flex font-medium justify-between items-center md:py-[20px] md:px-[50px] bg-[#E5F6F0] text-[#00A665] text-[14px] md:text-[16px] rounded-[20px]">
          <h1>Welcome, KashMooniee Choose your learning path below.</h1>
          <Link to="/" className="flex justify-between space-x-4 items-center ">
            <IoArrowBackOutline className=" text-[20px]" />
            <h2>Home</h2>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-[#1E1E1E] font-bold text-[18px] md:text-[30px]">
          Choose Your Program
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#6D737A] mt-4">
          Select the perfect learning path that aligns with your goals and
          schedule.
          <br /> Our programs are designed to help you succeed in the tech
          industry.
        </p>
        <div className="mt-10 space-x-6">
          <span className="text-[14px] md-text-[16px] text-[#6D737A]">
            One-time Payment
          </span>
          <Switch
            checked={monthlyPayment}
            onChange={setMonthlyPayment}
            className={`${
              monthlyPayment ? "bg-[#00A665]" : "bg-[#C7C7C7]"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
          >
            <span className="sr-only">Enable monthly payment</span>
            <span
              className={`${
                monthlyPayment ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
          <span className="text-[14px] md-text-[16px] text-[#6D737A]">
            Monthly Payment
          </span>
        </div>
      </div>
      <div className="mt-12 flex flex-col space-y-10 md:flex-row justify-between space-x-10 p-8 md:px-24 md:py-12">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
      <div className="text-center">
        <h1 className="text-[#1E1E1E] font-bold text-[18px] md:text-[30px]">
          Secure Payment Option
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#6D737A] mt-4">
          We accept various payment methods for your convenience
        </p>
        <span className="mt-6 inline-flex">
          <img src={visa} alt="visa" />
          <img src={master} alt="master" />
        </span>
      </div>
      <div className="mt-12 ">
        <h2 className="text-center text-[30px] text-[#1E1E1E] font-bold mb-10 md:mb-20">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left px-80">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="pb-2 cursor-pointer text-[#6D737A] text-[16px]"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center py-3">
                <span className="text-[#6D737A]">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoChevronDownOutline className="w-5 h-5" />
                </motion.div>
              </div>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: "1000px" }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#f3f0f0] rounded-[15px] p-6 mt-4 overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Path;
