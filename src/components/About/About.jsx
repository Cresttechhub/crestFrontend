import { useNavigate } from "react-router-dom";

import about_img from "../../images/about_img.svg";

const About = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <div className="md:px-24 md:py-6 p-8">
      <div className="flex flex-col md:flex-row justify-between md:gap-4">
        <div className="hidden md:block w-full">
          <img
            src={about_img}
            alt="about image"
            className="w-[650px] h-[470px] rounded-[25px] object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-start ">
          <h1 className="text-[18px] md:text-[40px] text-[#1E1E1E] font-bold mb-8">
            About CrestTech Hub
          </h1>
          <div className="text-[#6D737A] text-[14px] md:text-[16px] leading-[36px]">
            <p>
              Founded in 2024, CrestTech Hub emerged from a vision to bridge the
              gap between traditional education and the rapidly evolving tech
              industry. We recognized the need for practical, industry-aligned
              training that prepares students for real-world challenges.
            </p>
            <p className="mt-4">
              Today, we've grown into a thriving community of learners, mentors,
              and industry partners, all united by our passion for technology
              and innovation. Our success is measured by the achievement of our
              graduates who are making significant contributions to the tech
              industry worldwide..
            </p>
          </div>
          <div className=" mt-10 mb-10 md:mb-0 md:mt-12">
            <button
              className="w-full md:w-[159px] py-6 md:px-6 md:py-2 text-white text-[14px] md:text-[16px] hover:text-[#009E65] hover:font-medium bg-[#009E65] hover:border-2 hover:border-[#009E65]  hover:bg-white rounded-[15px] cursor-pointer"
              onClick={handleButtonClick}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="block md:hidden w-full">
          <img
            src={about_img}
            alt="about image"
            className="w-[667px] h-[447px] rounded-[25px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
