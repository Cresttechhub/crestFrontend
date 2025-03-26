import React, { useState } from "react";
import Program from "../../components/Program/Program";
import Choice from "../../components/Choice/Choice";
import Tracks from "../../components/Tracks/Tracks";
import { MdLightbulbOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import program_hero from "../../images/program_hero.svg";
import thickGreen from "../../images/thickGreen.svg";
import thinGreen1 from "../../images/thinGreen1.svg";
import thinGreen2 from "../../images/thinGreen2.svg";
import cresthub from "../../images/cresthub.svg";

const Programs = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("9:00 AM");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEnrollClick = () => {
    navigate("/enroll");
  };

  const handleConfirmSchedule = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitting(false);
    setIsSubmitted(false);
  };
  return (
    <div className="mt-36">
      {/* hero */}
      <div className="px-16 py-6">
        <div className="relative flex  h-[385px]">
          <div className="text-white bg-[#15211F] p-6 rounded-tl-[25px] rounded-bl-[25px] w-full relative ">
            <img
              src={thickGreen}
              alt=""
              className="absolute rounded-[25px] top-0 left-0 inset-0"
            />
            <div className="p-10">
              <h2 className="text-[44px] font-bold ">
                Become a Tech Pro with Our Training Programs
              </h2>

              <p className="text-[16px] mt-8 ">
                Gain in-demand skills with hands-on learning, expert mentorship,
                and real-world projects. Choose the perfect program for you and
                start your tech journey today!
              </p>
            </div>
          </div>
          <div className="relative bg-green-100 p-6 rounded-tr-[25px] rounded-br-[25px] w-[800px] flex items-center justify-center">
            <img
              src={program_hero}
              alt="Man with laptop"
              className="object-contain h-auto"
            />

            <h1 className="absolute bottom-20 left-48 text-[#1E1E1E] font-bold">
              CrestTech Hub
            </h1>

            {/* <img src={thinGreen1} alt="" className="absolute z-auto" />
            <img src={thinGreen2} alt="" className="" /> */}
            <img
              src={thinGreen1}
              alt=""
              className="absolute -z-0"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <img
              src={thinGreen2}
              alt=""
              className="absolute "
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* program component */}
      <Program />
      {/* choice component */}
      <Choice />
      {/* Track component */}
      <Tracks />
      <div className="pt-16 ">
        <div className="flex space-x-4 items-center justify-center bg-[#E4FFF2] py-8">
          <MdLightbulbOutline className="text-[#00A665] text-xl " />
          <p className="text-[#1E1E1E] text-[16px] font-medium">
            All programs include real-world projects and internship
            opportunities!
          </p>
        </div>
      </div>
      <div className="pt-10">
        <div className="flex flex-col space-y-4 items-center justify-center">
          <p className="text-[#1E1E1E] text-[25px] font-bold">
            Ready to Start Your Tech Journey?
          </p>
          <p className="text-[#6D737A] text-[16px]">
            Join our community of learners and kickstart your career in tech
          </p>
          <div className="flex space-x-8">
            <button
              onClick={handleEnrollClick}
              className="w-[159px] px-2 py-4 text-white text-[16px] hover:text-[#009E65] hover:font-medium bg-[#009E65] hover:border-2 hover:border-[#009E65]  hover:bg-white rounded-[15px] cursor-pointer"
            >
              Enroll Now
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-[159px] px-6 py-4 text-[16px] border-2 border-[#009365] text-[#009365] rounded-[15px] cursor-pointer"
            >
              Schedule a call
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1E1E1E] opacity-93">
          <div className="bg-white p-6 rounded-xl w-[400px] relative">
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] text-[#1E1E1E] font-bold">
                Schedule a Call
              </h2>
              <button
                className="rounded-full w-6 h-6 border-2 border-[#6D737A] text-[#6D737A] font-bold text-[10px]"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>

            <div className="mt-4">
              <label className="block text-[16px] text-[#1E1E1E]">
                Preferred Date
              </label>
              <input
                type="date"
                className="mt-4 w-full border rounded-[15px] p-4"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div className="mt-4 relative">
              <label className="block text-[16px] text-[#1E1E1E]">
                Preferred Time
              </label>
              <div
                className="mt-4 w-full border rounded-[15px] p-4 flex justify-between items-center cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedTime} <FaChevronDown />
              </div>
              {isDropdownOpen && (
                <div className="absolute p-8 w-full bg-white mt-4 rounded-[15px] text-[#6D737A] shadow-md">
                  {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"].map(
                    (time) => (
                      <div
                        key={time}
                        className="px-2 py-3 hover:bg-[#009E65] hover:text-[white] hover:rounded-[15px] cursor-pointer"
                        onClick={() => {
                          setSelectedTime(time);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {time}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <button
              className={`w-full mt-6 py-4 px-6 text-white rounded-[15px] ${
                isSubmitted ? "bg-[#145e43]" : "bg-[#009E65]"
              }`}
              onClick={handleConfirmSchedule}
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
              ) : null}
              {isSubmitting
                ? "Submitting..."
                : isSubmitted
                ? "Done"
                : "Confirm Schedule"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;
