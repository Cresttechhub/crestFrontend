import React, { useRef } from "react";
import { FaUserCheck } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoMdBook } from "react-icons/io";
import { MdOutlineHandshake } from "react-icons/md";
import How from "../../components/How/How";
import Mentors from "../../components/Mentors/Mentors";
import mentorshipHero from "../../images/mentorship-hero.svg";
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
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-16 py-12 bg-white rounded-lg">
        <img src={mentorshipHero} alt="" />
        <div className="flex-1 bg-[#FAFAFA] h-[389px] p-12 rounded-tr-[25px] rounded-br-[25px] relative">
          <img
            src={thinGreen1}
            alt=""
            className="absolute z-10"
            style={{
              top: "50%",
              left: "71%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <h1 className="text-3xl lg:text-[44px] font-bold text-[#1E1E1E] ">
            Guided by Experts. <br /> Mentored for{" "}
            <span className="text-[#009E65]">Success.</span>
          </h1>
          <p className="mt-4 text-[#6D737A] text-[16px] max-w-[490px]">
            Learn from top industry professionals who provide hands-on guidance,
            career mentorship, and real-world insights to help you excel in your
            tech journey.
          </p>
          <button
            onClick={scrollToMentors}
            className="mt-12 px-6 py-3 bg-[#009E65] text-white font-medium  text-[16px] hover:text-[#009E65] hover:font-medium hover:border-2 hover:border-[#009E65]  hover:bg-white rounded-[15px] cursor-pointer"
          >
            Meet Your Team
          </button>
        </div>
      </div>
      {/* why mentorship matters */}
      <div className="px-24 py-6">
        <h2 className="text-[30px] text-[#1E1E1E] font-bold  text-center mb-12">
          Why Mentorship Matters?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col  items-start relative">
              <div className="px-4 py-2 bg-[#E4FFF2] border border-[#00A665] rounded-[10px] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] flex flex-col">
                {feature.title}
              </h3>
              <p className="text-[#6D737A] mt-2 text-[16px] max-w-[190px]">
                {feature.description}
              </p>
              {index < features.length - 1 && (
                <div className="hidden md:block absolute top-0 bottom-0 right-0 border border-[#6D737A] opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* mentors */}
      <div ref={mentorsRef} className="mt-20">
        <h2 className="text-3xl text-center text-[#1E1E1E] font-bold">
          Meet Our Team
          <Mentors />
        </h2>
      </div>
      {/* How */}
      <How />
    </div>
  );
};

export default Mentorship;
