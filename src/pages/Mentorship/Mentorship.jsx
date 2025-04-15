import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoMdBook } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdOutlineHandshake } from "react-icons/md";
import How from "../../components/How/How";
import Mentors from "../../components/Mentors/Mentors";
import mentorHero from "../../images/mentorship-hero.svg";
import thinGreen1 from "../../images/thinGreen1.svg";

const features = [
  {
    icon: <FaUserCheck className="text-green-600 text-3xl" />,
    title: "Personalized Guidance",
    description:
      "Get one-on-one support from experienced mentors tailored to your needs.",
  },
  {
    icon: <GrLocation className="text-green-600 text-3xl" />,
    title: "Career Roadmap",
    description:
      "Navigate your career with structured mentorship and clear goals.",
  },
  {
    icon: <IoMdBook className="text-green-600 text-3xl" />,
    title: "Real-World Insight",
    description:
      "Learn industry best practices directly from active professionals.",
  },
  {
    icon: <MdOutlineHandshake className="text-green-600 text-3xl" />,
    title: "Networking Opportunities",
    description: "Connect with experts and peers in your field of interest.",
  },
];

const Mentorship = () => {
  const mentorsRef = useRef(null);

  const scrollToMentors = () => {
    if (mentorsRef.current) {
      mentorsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mt-36">
      <Link
        to="/"
        className="p-8 md:hidden flex font-bold items-center space-x-2 text-[#1E1E1E] mb-8"
      >
        <IoArrowBackOutline />
        <h1 className="text-[16px]">Back</h1>
      </Link>

      <div className="-mt-20 md:-mt-0 flex flex-col lg:flex-row items-stretch justify-between w-full p-8 lg:px-24 py-12 bg-white">
        <div
          className="flex-1 bg-[#FAFAFA] p-12 relative order-0 md:order-2 flex flex-col h-full 
      rounded-tl-[15px] rounded-tr-[15px] lg:rounded-tr-[15px] lg:rounded-br-[15px] lg:rounded-tl-none lg:rounded-bl-none"
        >
          <img
            src={thinGreen1}
            alt=""
            className="absolute z-10 top-1/2 left-[55%] lg:left-[71%] transform -translate-x-1/2 -translate-y-1/2"
          />
          <h1 className="text-3xl lg:text-[44px] font-bold text-[#1E1E1E]">
            Guided by Experts. <br /> Mentored for{" "}
            <span className="text-[#009E65]">Success.</span>
          </h1>
          <p className="mt-4 text-[#6D737A] text-[16px] max-w-[490px] order-0 md:order-1">
            Learn from top industry professionals who provide hands-on guidance,
            career mentorship, and real-world insights to help you excel in your
            tech journey.
          </p>
          <button
            onClick={scrollToMentors}
            className="mt-12 px-6 py-3 md:w-[213px] bg-[#009E65] text-white font-medium text-[16px] hover:text-[#009E65] hover:font-medium hover:border-2 hover:border-[#009E65] hover:bg-white rounded-[15px] cursor-pointer"
          >
            Meet Our Mentors
          </button>
        </div>
        <div
          className="order-0 lg:order-none w-full lg:w-auto flex flex-col h-full 
      rounded-bl-[15px] rounded-br-[15px] lg:rounded-tl-[15px] lg:rounded-bl-[15px] lg:rounded-br-none lg:rounded-tr-none overflow-hidden"
        >
          <img
            src={mentorHero}
            alt=""
            className="h-full w-full bg-[#edebeb] object-cover"
          />
        </div>
      </div>

      {/* why mentorship matters */}

      <div className="md:px-24 md:py-6 p-8">
        <h2 className="text-[18px] md:text-[30px] text-[#1E1E1E] font-bold  md:text-center mb-12">
          Why Mentorship Matters?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col  items-start relative">
              <div className="px-4 py-2 bg-[#E4FFF2] border border-[#00A665] rounded-[10px] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#1E1E1E] flex flex-col">
                {feature.title}
              </h3>
              <p className="text-[#6D737A] mt-2 text-[14px] md:text-[16px] max-w-[190px]">
                {feature.description}
              </p>

              {index < features.length - 1 && (
                <div
                  className={`border-r border-[#6D737A] opacity-20 absolute top-0 bottom-0 right-0 ${
                    index % 2 === 0 ? "block" : "hidden md:block"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* mentors */}

      <div ref={mentorsRef} className="-mt-4 md:mt-6 md:px-24 md:py-6 p-8">
        <h2 className="text-[18px] md:text-3xl md:text-center  text-[#1E1E1E] font-bold">
          Book a Mentor
          <Mentors />
        </h2>
      </div>
      {/* How */}
      <How />
    </div>
  );
};

export default Mentorship;
