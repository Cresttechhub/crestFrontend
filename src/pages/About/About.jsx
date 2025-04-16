import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../images/about_img.svg";
import wakilat from "../../images/wakilat.png";
import soliu from "../../images/soliu.png";
import daniel from "../../images/daniel.png";
import ismail from "../../images/Ismail.png";
import fatima from "../../images/fatima.png";
import muqtadir from "../../images/muqtadir.png";
import { FaUserCheck } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiBuilding2Line, RiUserCommunityFill } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import { MdLightbulbOutline } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const impacts = [
  {
    icon: <FaUserCheck className="text-green-600 text-3xl" />,
    number: "5000+",
    description: "Students Trained",
  },
  {
    icon: <RiBuilding2Line className="text-green-600 text-3xl" />,
    number: "200+",
    description: "Partner Companies",
  },

  {
    icon: <LuGraduationCap className="text-green-600 text-3xl" />,
    number: "92%",
    description: "Certification Earned",
  },
];
const values = [
  {
    icon: <MdLightbulbOutline className="text-green-600 text-3xl" />,
    title: "Innovation",
    description:
      "We embrace new technologies and teaching methods to provide cutting-edge education.",
  },
  {
    icon: <RiUserCommunityFill className="text-green-600 text-3xl" />,
    title: "Community",
    description:
      "We foster a supportive environment where students learn and grow together.",
  },

  {
    icon: <CiGlobe className="text-green-600 text-3xl" />,
    title: "Excellence",
    description:
      "We maintain high standards in our curriculum and student outcomes.",
  },
];

const leadershipTeam = [
  {
    name: "Wakilat Kikelomo Zakariyau",
    position: "Chief Executive Officer",
    image: wakilat,
    facebook: "https://www.facebook.com/teepee.adebayo/",
    twitter: "https://x.com/dainty_zawak",
    instagram: "https://instagram.com/dainty_zawak",
    linkedin: "https://www.linkedin.com/in/wakilat-kikelomo-zakariyau",
  },
  {

    name: "Soliu Opeyemi Sakariyau",
    position: "Co-Founder",
    image: soliu,
    facebook: "",
    twitter: "https://x.com/Iam_RAYMOS?t=IyEIQV_ZhnpWqDiQV5giHA&s=09",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/soliu-sakariyau",

  },
  {
    name: "Fatimah Adebimpe",
    position: "Head of Administration",
    image: fatima,
    twitter: "https://x.com/confudus?s=21&t=Izt36R2dpbi-i_0JRCVriQ",
    linkedin: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
  },
  {
    name: "Ismail Tijani",
    position: "Director of Engineering",
    image: ismail,
    facebook: "",
    twitter: "https://x.com/Son_Of_Tijani",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/tijani-ismail",
  },
  {
    name: "Amakeme Onyekachi Daniel",
    position: "Creative Director",
    image: daniel,
    facebook: "",
    twitter: "",
    instagram: "",
  },
  {
    name: "Abdulmuqtadir Yunus",
    position: "Curriculum Director",
    image: muqtadir,
    facebook: "https://web.facebook.com/yunus.abdulmuqtadir.56",
    twitter: "https://x.com/MuqtadirYunus",
    linkedin: "http://www.linkedin.com/in/abdulmuqtadir-yunus",
  },
];
const About = () => {
  return (
    <div className="mt-28 md:mt-36 md:px-24 py-6 p-8 ">
      {/* about */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hidden md:block w-full">
            <img
              src={aboutImg}
              alt="About Crest Tech Hub"
              className="w-[650px] h-[470px] rounded-[25px] object-cover"
            />
          </div>
          <div className="w-full flex flex-col justify-start mt-6">
            <Link
              to="/"
              className="md:hidden flex font-bold items-center space-x-2 text-[#1E1E1E] mb-8"
            >
              <IoArrowBackOutline />
              <h1 className="text-[16px]">Back</h1>
            </Link>

            <h1 className="text-[18px] md:text-[30px] text-[#1E1E1E] font-bold mb-8">
              About CrestTech Hub
            </h1>
            <div className="text-[#6D737A] text-[14px] md:text-[16px] leading-[36px]">
              <p>
                Founded in 2024, CrestTech Hub emerged from a vision to bridge
                the gap between traditional education and the rapidly evolving
                tech industry. We recognized the need for practical,
                industry-aligned training that prepares students for real-world
                challenges.
              </p>
              <p className="mt-8">
                Today, we've grown into a thriving community of learners,
                mentors, and industry partners, all united by our passion for
                technology and innovation. Our success is measured by the
                achievement of our graduates who are making significant
                contributions to the tech industry worldwide..
              </p>
            </div>
          </div>
          <div className="block w-full md:hidden">
            <img
              src={aboutImg}
              alt="About Crest Tech Hub"
              className="w-[550px] h-[447px] rounded-[25px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* mission & vision */}
      <div className="-mt-6 md:mt-10 md:px-10 md:py-6 p-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full">
            <h1 className="text-[#1E1E1E] text-[18px] md:text-[20px] font-bold mb-8">
              Our Mission
            </h1>
            <p className="text-[#6D737A] text-[14px] md:text-[16px] leading-[30px] max-w-[537px]">
              To provide accessible, high quality tech education that empowers
              individuals to build successful tech careers in technology.
            </p>
          </div>
          <div className="block md:hidden w-full my-8">
            <div className="border-b border-[#6D737A] opacity-20" />
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="border-r border-[#6D737A] h-40  opacity-20" />
          </div>
          <div className="w-full md:ml-16">
            <h1 className="text-[#1E1E1E] text-[18px] md:text-[20px] font-bold mb-8">
              Our Vision
            </h1>
            <p className="text-[#6D737A] text-[14px] md:text-[16px] leading-[30px] max-w-[537px]">
              To be the leading platform for tech education, creating the next
              generation of tech leaders.
            </p>
          </div>
        </div>
      </div>
      {/* impact */}
      <div className="-mt-6 md:mt-10 md:px-10 md:py-6 p-8">
        <h2 className="text-[18px] md:text-[20px] text-[#1E1E1E] font-bold  md:text-center mb-12">
          Our impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          {impacts.map((impact, index) => (
            <div key={index} className="flex flex-col items-start relative">
              <div className="px-4 py-2 bg-[#E4FFF2] border border-[#00A665] rounded-[10px] mb-4">
                {impact.icon}
              </div>
              <h3 className="text-[18px] md:text-[34px] font-bold  text-[#00A665]">
                {impact.number}
              </h3>
              <p className="text-[#6D737A] mt-2 text-[14px] md:text-[16px]">
                {impact.description}
              </p>
              {index < impacts.length - 1 && (
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
      {/* core values */}
      <div className="md:mt-10 md:px-10 md:py-6 p-8">
        <h2 className="text-[18px] md:text-[20px] text-[#1E1E1E] font-bold  md:text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-start relative">
              <div className="px-4 py-2 bg-[#E4FFF2] border border-[#00A665] rounded-[10px] mb-4">
                {value.icon}
              </div>
              <h3 className="text-[16px] md:text-[34px] font-bold  text-[#00A665]">
                {value.title}
              </h3>
              <p className="text-[14px] md:text-[16px] text-[#6D737A] mt-2  max-w-[342px]">
                {value.description}
              </p>
              {index < values.length - 1 && (
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
      {/* leadership team */}
      <div className="md:mt-10 md:py-6 md:px-0  p-8">
        <h1 className="text-[#1E1E1E] text-[18px] md:text-[30px] font-bold mb-10  md:text-center">
          Executive Team
        </h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {leadershipTeam.map((leader, index) => (
            <div key={index} className="flex flex-col space-y-3 items-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full md:w-[261px] md:h-[247px] rounded-[20px] bg-[#F6F6F8] object-cover"
              />
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#1E1E1E]">
                {leader.name}
              </h3>
              <p className="text-[#6D737A] text-[14px] md:text-[16px]">
                {leader.position}
              </p>
              <div className="flex space-x-3 text-[#00A665]">
                <a
                  href={leader.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <TiSocialFacebook />
                </a>
                <a
                  href={leader.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href={leader.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
