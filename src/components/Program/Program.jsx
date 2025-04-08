import React from "react";
import { MdAccessTime } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { FaRegCheckSquare } from "react-icons/fa";

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
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full h-full">
      <div className="flex justify-between">
        <h3 className="font-semibold text-[16px] md:text-[20px]">{title}</h3>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-lg ${
            level === "Beginner-friendly"
              ? "bg-[#EDE7F6]  text-[#7A24FB]"
              : "bg-[#E3F2FD] text-[#0048FF]"
          }`}
        >
          {level}
        </span>
      </div>
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
        <p className="text-[#00A665] font-bold text-[24px] md:text-[36px] mt-4">
          N{price}{" "}
          <span className="text-[#6D737A] text-[16px] font-normal">
            / Course
          </span>
        </p>
        <a
          href="/enroll"
          className="block text-center bg-[#00A665] font-medium text-white text-14px] md:text-[16px] py-6 rounded-[15px] mt-4 hover:border-2 hover:border-[#00A665] hover:bg-white  hover:text-[#00A665]"
        >
          Join Now
        </a>
      </div>
    </div>
  );
};

const Program = () => {
  const programs = [
    {
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
      price: "30,000",
    },
    {
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
      price: "70,000",
    },
  ];
  return (
    <section className="pt-20">
      <div className="bg-[#FAFAFA] md:px-24 md:py-6 p-8">
        <h2 className="text-[18px] md:text-[30px] text-[#1E1E1E] font-bold md:text-center mb-12">
          Our Programs
        </h2>
        <div className="flex flex-col space-y-10 md:flex-row justify-between space-x-10">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
