import { useState } from "react";
import wakilat from "../../images/wakilat.png";
import soliu from "../../images/soliu.png";
import daniel from "../../images/daniel.png";
import ismail from "../../images/Ismail.png";
import fatima from "../../images/fatima.png";
import muqtadir from "../../images/muqtadir.png";

const initialMentors = [
  // {
  //   name: "Soliu Opeyemi Sakariyau",
  //   role: "Co-Founder",
  //   description: "Tech entrepreneur with innovative solutions.",
  //   tags: ["Tech Innovation", "Software Development"],
  //   image: soliu,
  // },
  {
    name: "Fatimah Adebimpe",
    role: "Frontend Development Mentor",
    description:
      "Passionate frontend developer expert driving modern web solutions with cutting-edge tech and best practices",
    tags: ["Frontend", "Web Development"],
    image: fatima,
  },
  // {
  //   name: "Ismail Tijani",
  //   role: "Director of Engineering",
  //   description: "Software development & project management",
  //   tags: ["SoftwareDev", "ProjMgmt"],
  //   image: ismail,
  // },
  // {
  //   name: "Amakeme Onyekachi Daniel",
  //   role: "Creative Director",
  //   description:
  //     "Leads branding, UX, marketing, and design innovation in tech products.",
  //   tags: ["Design Excellence", "Digital Creativity"],
  //   image: daniel,
  // },
];

const additionalMentors = [
  {
    name: "Klever Hoset",
    role: "UI/UX Mentor",
    description: "Skilled in UX research, User research and Design thinking.",
    tags: ["UX Research", "Design Thinking"],
    image: "",
  },
  {
    name: "K",
    role: "UI/UX Mentor",
    description: "Skilled in UX research, User research and Design thinking.",
    tags: ["UX Research", "Design Thinking"],
    image: "",
  },
  {
    name: "Klever Hoset",
    role: "UI/UX Mentor",
    description: "Skilled in UX research, User research and Design thinking.",
    tags: ["UX Research", "Design Thinking"],
    image: "",
  },
  {
    name: "Klever Hoset",
    role: "UI/UX Mentor",
    description: "Skilled in UX research, User research and Design thinking.",
    tags: ["UX Research", "Design Thinking"],
    image: "",
  },
  {
    name: "Klever Hoset",
    role: "UI/UX Mentor",
    description: "Skilled in UX research, User research and Design thinking.",
    tags: ["UX Research", "Design Thinking"],
    image: "",
  },
  {
    name: "Klever Hoset",
    role: "UI/UX Mentor",
    description: "Skilled in UX research, User research and Design thinking.",
    tags: ["UX Research", "Design Thinking"],
    image: "",
  },
  {
    name: "Klever Hoset",
    role: "UI/UX Mentor",
    description: "Skilled in UX research, User research and Design thinking.",
    tags: ["UX Research", "Design Thinking"],
    image: "",
  },
  {
    name: "Klever Hoset",
    role: "UI/UX Mentor",
    description: "Skilled in UX research, User research and Design thinking.",
    tags: ["UX Research", "Design Thinking"],
    image: "",
  },
];

export default function Mentors() {
  const [mentors, setMentors] = useState(initialMentors);
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(true);
    setMentors([...mentors, ...additionalMentors]);
  };

  return (
    <div className=" flex flex-col items-center">
      <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 w-full">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-3 w-full"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-[340px] h-[305px] rounded-[20px] object-cover bg-[#F6F6F8]"
            />
            <h3 className="text-[16px] md:text-[20px] text-[#1E1E1E] font-semibold text-left w-full">
              {mentor.name}
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#00A665]  font-normal text-left w-full">
              {mentor.role}
            </p>
            <p className="text-[14px] md:text-[16px] text-[#6D737A] font-normal text-left w-full">
              {mentor.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {mentor.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#E7F8F1] text-[#00A665] font-normal px-3 py-1 text-[12px] md:text-[14px] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!showMore && (
        <button
          onClick={handleViewMore}
          className="mt-12 px-6 py-4 w-full text-nowrap md:w-[240px] text-white text-[14px] md:text-[16px] hover:text-[#009E65] font-medium bg-[#009E65] hover:border-2 hover:border-[#009E65]  hover:bg-white rounded-[15px] cursor-pointer"
        >
          View More Mentors
        </button>
      )}
    </div>
  );
}
