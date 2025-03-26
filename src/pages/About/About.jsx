import React from "react";
import about_img from "../../images/about_img.svg";
import leaders from "../../images/amarachi.png";
import { FaUserCheck } from "react-icons/fa";
import { RiBuilding2Line, RiUserCommunityFill } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import { MdLightbulbOutline } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaInstagram } from "react-icons/fa";

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
    name: "Alexander Kate",
    position: "Chief Executive Officer",
    image: leaders,
    facebook: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
    twitter: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
    instagram: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
  },
  {
    name: "Alexander Kate",
    position: "Chief Executive Officer",
    image: leaders,
    facebook: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
    twitter: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
    instagram: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
  },
  {
    name: "Alexander Kate",
    position: "Chief Executive Officer",
    image: leaders,
    facebook: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
    twitter: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
    instagram: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
  },
  {
    name: "Alexander Kate",
    position: "Chief Executive Officer",
    image: leaders,
    facebook: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
    twitter: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
    instagram: "https://www.linkedin.com/in/fatimah-adebimpe-441b10145",
  },
];
const About = () => {
  return (
    <div className="mt-36 ">
      {/* about */}
      <div className="px-16 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <img
              src={about_img}
              alt="About Crest Tech Hub"
              className="w-[667px] h-[447px] rounded-[25px] object-cover"
            />
          </div>
          <div className="w-full flex flex-col justify-start mt-6">
            <h1 className="text-[30px] text-[#1E1E1E] font-bold mb-8">
              About Crest Tech Hub
            </h1>
            <div className="text-[#6D737A] text-[16px] leading-[36px]">
              <p>
                Founded in 2020, Crest Tech Hub emerged from a vision to bridge
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
        </div>
      </div>

      {/* mission & vision */}
      <div className="mt-10 px-30 py-6">
        <div className="flex justify-between">
          <div className="w-full">
            <h1 className="text-[#1E1E1E] text-[20px] font-bold mb-8">
              Our Mission
            </h1>
            <p className="text-[#6D737A] text-[16px] leading-[30px] max-w-[537px]">
              To provide accessible, high quality tech education that empowers
              individuals to build successful tech careers in technology.
            </p>
          </div>
          <div className="h-40 border border-[#6D737A] opacity-20 mx-8" />
          <div className="w-full">
            <h1 className="text-[#1E1E1E] text-[20px] font-bold mb-8">
              Our Vision
            </h1>
            <p className="text-[#6D737A] text-[16px] leading-[30px] max-w-[537px]">
              To be the leading platform for tech education, creating the next
              generation of tech leaders.
            </p>
          </div>
        </div>
      </div>
      {/* impact */}
      <div className="mt-10 px-30 py-6">
        <h2 className="text-[30px] text-[#1E1E1E] font-bold  text-center mb-12">
          Our impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {impacts.map((impact, index) => (
            <div key={index} className="flex flex-col items-start relative">
              <div className="px-4 py-2 bg-[#E4FFF2] border border-[#00A665] rounded-[10px] mb-4">
                {impact.icon}
              </div>
              <h3 className="text-[34px] font-bold  text-[#00A665]">
                {impact.number}
              </h3>
              <p className="text-[#6D737A] mt-2 text-[16px]">
                {impact.description}
              </p>
              {index < values.length - 1 && (
                <div className="hidden md:block absolute top-0 bottom-0 right-0 border border-[#6D737A] opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* core values */}
      <div className="mt-10 px-30 py-6">
        <h2 className="text-[30px] text-[#1E1E1E] font-bold  text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-start relative">
              <div className="px-4 py-2 bg-[#E4FFF2] border border-[#00A665] rounded-[10px] mb-4">
                {value.icon}
              </div>
              <h3 className="text-[34px] font-bold  text-[#00A665]">
                {value.title}
              </h3>
              <p className="text-[#6D737A] mt-2 text-[16px] max-w-[342px]">
                {value.description}
              </p>
              {index < values.length - 1 && (
                <div className="hidden md:block absolute top-0 bottom-0 right-0 border border-[#6D737A] opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* leadership team */}
      <div className="mt-10 px-16 py-6">
        <h1 className="text-[#1E1E1E] text-[30px] font-bold mb-8 text-center">
          Our Leadership Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((leader, index) => (
            <div key={index} className="flex flex-col space-y-3 items-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-[261px] h-[247px] rounded-[20px] bg-[#F6F6F8] object-cover"
              />
              <h3 className="text-[20px] font-bold text-[#1E1E1E]">
                {leader.name}
              </h3>
              <p className="text-[#6D737A] text-[16px]">{leader.position}</p>
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
                  href={leader.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href={leader.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <FaInstagram />
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
