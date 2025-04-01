import { useState } from "react";
import { motion } from "framer-motion";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto md:py-16 md:px-4 p-8 mt-36 mb-16 text-center">
      <Link
        to="/"
        className="md:hidden flex font-bold items-center space-x-2 text-[#1E1E1E] mb-8"
      >
        <IoArrowBackOutline />
        <h1 className="text-[16px]">Back</h1>
      </Link>
      <h2 className="text-[30px] text-[#1E1E1E] font-bold mb-10 md:mb-20">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 text-left">
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
      <Link to="/contact" className="">
        <button className="w-full md:w-[300px] mt-16 px-6 py-3 text-[16px] font-medium border border-[#00A665] text-[#00A665] rounded-[15px] hover:border-2 transition">
          Still Have Questions? Contact Us
        </button>
      </Link>
    </div>
  );
}
