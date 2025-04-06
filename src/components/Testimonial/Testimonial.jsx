import React, { useEffect, useState } from "react";
import Bulb from "../../images/Bulb.svg";
import Quote from "../../images/Quote.svg";
import { motion, AnimatePresence } from "framer-motion";

import AvatarPlaceholder from "../../images/AvatarPlaceholder.svg";
import Pelumi from "../../images/Pelumi.jpg"

const testimonials = [
  {
    id: 1,
    name: "Alade Victoria.",
    location: "Ibadan, Nigeria.",
    course: "UI/UX Design Preparatory Track",
    text: "Throughout my class, my experience was incredible, knowledgeable mentor, engaging lessons. Everything exceeded my expectations, overall the course has been a great motivation.",
    image: AvatarPlaceholder,
  },
  {
    id: 2,
    name: "Tolulope Grace.",
    location: "Nigeria.",
    course: "UI/UX Design Preparatory Track",
    text: "Overall it has been a wonderful experience, being a woman and a fist timer, diving into tech is a big step for me and I do not take it for granted. It's been a good experience with an amazing and patient mentor. See you at the advance class!!! Thank you CrestTech!!!",
    image: AvatarPlaceholder,
  },
  {
    id: 3,
    name: "Sukurat.",
    location: "Ibadan, Nigeria.",
    course: "Frontend Software Development Preparatory Track",
    text: "It has been an informative and enlightening session. It gave me a clear view of what Frontend Software Development is all about. Thank you so much for this great opportunity.",
    image: AvatarPlaceholder,
  },
  {
    id: 4,
    name: "Emmanuel Etuk.",
    location: "Lagos state, Nigeria.",
    course: "Frontend Software Development Preparatory Track",
    text: "I had an amazing time learning with CrestTech. The curriculum was well structured with nice resources. The problem was challenging but it helped me apply concepts. The assessment was comprehensive, allowing me access to area of improvement. And my mentor Miss Eniola, with her invaluable guidance helped a lot. Key highlights: Completing my project helped me showcase my skills in this field and also recieving feedback from my mentor means a lot. I highly recommend the CrestTech Preparatory Program to anyone to kickstart their tech journey.",
    image: AvatarPlaceholder,
  },
  {
    id: 5,
    name: "Aladesanmi Pelumi.",
    location: "Ibadan, Nigeria.",
    course: "UI/UX Design Preparatory Track",
    text: "The experience has been amazing and the lecture is fantastic, our mentor is so amazing and patient and I sincerely wish to learn more about this track.",
    image: Pelumi, // No avatar for Pelumi
  },
  {
    id: 6,
    name: "Usurat.",
    location: "Osun state, Nigeria.",
    course: "UI/UX Design Preparatory Track",
    text: "I appreciate the organization for organizing this because without them, we the beginners won't be able to have any knowledge about tech, so I say a very big Thank You to CrestTech and to our mentor, we appreciate you for coaching us well because I really gained a lot. About the assessment, I was so impressed after knowing how much I learned",
    image: AvatarPlaceholder,
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="-mb-50">
      {/* Top Bulb Section */}
      <div className="bg-[#E4FFF2] p-12">
        <p className="flex justify-center items-center space-x-2 text-[16px] font-[500]">
          <img src={Bulb} alt="Bulb" />
          <span>
            All programs include real-world projects and internship
            opportunities!
          </span>
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center py-16 px-6 relative">
        <h2 className="text-[30px] font-[700] text-center mb-10 -mt-8">
          What Our Techies Say
        </h2>

        {/* Quote SVG */}
        <motion.div
          key={testimonials[activeIndex].id}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }} // Exit smoothly
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileInView={{
            x: [12, -12, 10, -10, 7, -7, 4, -4, 2, -2, 0], // Shaking effect
            transition: { duration: 1.5 },
          }}
        >
          <img src={Quote} alt="Quote" className=" mt-15" />
        </motion.div>

        <div className="relative w-[1200px] mt-0 overflow-hidden min-h-[600px]">
          <AnimatePresence mode="sync">
            {/* CURRENT TESTIMONIAL */}
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }} // Exit smoothly
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileInView={{
                x: [12, -12, 10, -10, 7, -7, 4, -4, 2, -2, 0], // Shaking effect
                transition: { duration: 1.5 },
              }}
              className="absolute bg-white p-10 w-full flex items-center justify-between"
            >
              {/* Left Side: Image, Course, and Location */}
              <div className="w-1/3 flex flex-col items-center">
                {testimonials[activeIndex].image ? (
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 rounded-md mb-4 object-cover" // Square image with border radius
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-300 mb-4 rounded-md"></div> // Placeholder for Pelumi (no image)
                )}
                <p className="text-md font-bold w-72 text-center text-[#6D737A] ">
                  {testimonials[activeIndex].course}
                </p>
                <p className="text-sm text-gray italic">
                  {testimonials[activeIndex].location}
                </p>
              </div>

              {/* Right Side: Testimonial Text */}
              <div className="w-2/3">
                <p className="text-[#6D737A] leading-relaxed font-[400] text-[16px] ">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={testimonials[activeIndex].id}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }} // Exit smoothly
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileInView={{
              x: [12, -12, 10, -10, 7, -7, 4, -4, 2, -2, 0], // Shaking effect
              transition: { duration: 1.5 },
            }}
            className="absolute p-10 w-full flex items-center justify-between top-45"
          >
            {/*left side NAME */}
            <div className="w-1/3 pr-6 flex flex-col items-center">
              <p className="text-lg text-[39px] font-[500] text-center text-[#1E1E1E] ">
                {testimonials[activeIndex].name}
              </p>
            </div>
            {/* Right side LINE */}
            <div className="w-2/3 pl-2">
              <div className="w-full h-1 bg-[#009E65]"></div>
            </div>
          </motion.div>
        </div>

        {/* Bullet Navigation */}
        <div className="absolute bottom-70 flex space-x-2 justify-center w-full ">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${index === activeIndex ? "bg-[#009E65]" : "bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
