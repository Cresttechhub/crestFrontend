import { useNavigate } from "react-router-dom";

import about_img from "../../images/about_img.svg";

const About = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <div className="px-6 py-12 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Image Container: High priority on Desktop, moves below text on Mobile/Tablet stack */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <img
            src={about_img}
            alt="about image"
            className="w-full max-w-[650px] aspect-[4/3] rounded-[25px] object-cover shadow-lg mx-auto"
          />
        </div>

        {/* Text Content Container */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start order-1 lg:order-2">
          <h1 className="text-[28px] md:text-[40px] text-[#1E1E1E] font-bold mb-6 text-center lg:text-left">
            About CrestTech Hub
          </h1>

          <div className="text-[#6D737A] text-[15px] md:text-[16px] leading-relaxed md:leading-[32px] text-left">
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
              graduates.
            </p>
          </div>
          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              className="w-full sm:w-[180px] py-4 md:py-3 text-white text-[16px] font-medium bg-[#009E65] border-2 border-[#009E65] hover:bg-white hover:text-[#009E65] rounded-[15px] transition-all duration-300 cursor-pointer"
              onClick={handleButtonClick}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
