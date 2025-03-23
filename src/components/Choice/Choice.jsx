import React from "react";
import { FaUserCheck, FaDollarSign, FaCode, FaBriefcase } from "react-icons/fa";

const features = [
  {
    icon: <FaUserCheck className="text-green-600 text-3xl" />,
    title: "Personalized Mentorship",
    description: "Learn directly from industry experts who guide your journey.",
  },
  {
    icon: <FaDollarSign className="text-green-600 text-3xl" />,
    title: "Affordable & Accessible",
    description: "Quality tech education that fits your budget.",
  },
  {
    icon: <FaCode className="text-green-600 text-3xl" />,
    title: "Hands-on Learning",
    description: "Build real projects and grow your portfolio.",
  },
  {
    icon: <FaBriefcase className="text-green-600 text-3xl" />,
    title: "Internship Ready",
    description: "Get real work experience after graduation.",
  },
];
const Choice = () => {
  return (
    <section className="py-10">
      <div className="px-16 py-6">
        <h2 className="text-[30px] text-[#1E1E1E] font-bold  text-center mb-12">
          Why Choose Crest Tech Hub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start relative">
              <div className="px-4 py-2 bg-[#E4FFF2] border border-[#00A665] rounded-[10px] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] flex flex-col">
                {feature.title}
              </h3>
              <p className="text-[#6D737A] mt-2 text-[16px] max-w-[200px]">
                {feature.description}
              </p>
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choice;
