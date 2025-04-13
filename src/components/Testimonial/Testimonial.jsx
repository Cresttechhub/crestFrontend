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
    image: AvatarPlaceholder, // No avatar for Pelumi
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
    <div className="md:mb-10 mb-20  ">
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
      <h2 className="text-[30px] font-[700] md:text-center mb-8 mt-10 md:px-0 px-5 ">
        What Our Techies Say
      </h2>
      <div className="flex flex-col md:items-center items-left md:py-16 md:ml-0 md:p-0 p-12 relative">
        {/* Quote SVG */}
        <motion.div
          key={testimonials[activeIndex].id}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileInView={{
            x: [12, -12, 10, -10, 7, -7, 4, -4, 2, -2, 0],
            transition: { duration: 1.5 },
          }}
        >
          <img src={Quote} alt="Quote" className="mt-10 md:mt-15 self-start md:self-center" />
        </motion.div>

        <div className="relative w-full mt-0 overflow-hidden md:min-h-[600px] min-h-[auto]">
          <AnimatePresence mode="sync">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full flex flex-col md:min-h-[600px]"
            >
              {/* Top Section: Avatar + Testimonial */}
              <div className="flex flex-col md:flex-row md:items-center justify-between bg-white md:p-10">
                <div className="w-full md:w-1/3 flex flex-col md:items-center mt-10 mb-6 md:mb-0">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 rounded-md mb-4 object-cover"
                  />
                  <p className="text-md font-bold w-72 md:text-center text-[#6D737A]">
                    {testimonials[activeIndex].course}
                  </p>
                  <p className="text-sm text-gray italic">
                    {testimonials[activeIndex].location}
                  </p>
                </div>

                <div className="w-full md:w-2/3 mb-10 md:mb-0">
                  <p className="text-[#6D737A] leading-relaxed font-[400] text-[16px]">
                    "{testimonials[activeIndex].text}"
                  </p>
                </div>
              </div>

              {/* Name & Line Section */}
              <div className="flex flex-row items-center md:justify-center md:mt-6 mt-4 md:spx-5">
                <p className="text-[24px] md:text-[39px] font-[500] text-[#1E1E1E] md:text-center">
                  {testimonials[activeIndex].name}
                </p>
                <div className="w-full md:w-2/3 md:pl-10 mt-2 md:mt-0">
                  <div className="md:w-full w-50 h-1 bg-[#009E65]"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

              {/* Name & Line Section */}
              <div className="flex flex-row items-center md:justify-center md:mt-6 mt-4 md:spx-5">
                <p className="text-[24px] md:text-[39px] font-[500] text-[#1E1E1E] md:text-center">
                  {testimonials[activeIndex].name}
                </p>
                <div className="w-full md:w-2/3 md:pl-10 mt-2 md:mt-0">
                  <div className="md:w-full w-50 h-1 bg-[#009E65]"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bullet Navigation */}
        <div className="hidden md:flex md:mb-40 mt-6 space-x-2 justify-center md:absolute md:bottom-10 md:p-0 p-4 w-full">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-[#009E65]" : "bg-gray-400"
                } cursor-pointer`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        {/* Subtle arrow nav for mobile only */}
        <div className="flex md:hidden justify-between items-center mt-6 px-6">
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="bg-gray-500 text-gray-800 text-3xl rounded-full px-2 -py-0 hover:bg-gray-400 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            className=" bg-gray-500 text-gray-800 rounded-full text-3xl px-2 -py-0 hover:bg-gray-400 transition-all duration-300"
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>


      </div>
    </div>
  );
};

export default Testimonial;
