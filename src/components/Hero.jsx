import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaBug, FaCodeBranch, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE_DATA } from "../utils/data";
import PROFILE_PIC from "../assets/profile-pic-1.png";
import { IoCodeSharp, IoLogoCodepen } from "react-icons/io5";
import { BsCodeSquare } from "react-icons/bs";

const Hero = () => {
  const {
    name,
    tagline,
    jobTitle,
    yearsOfExperience,
    location,
    email,
    skills,
  } = PROFILE_DATA;

  return (
    <section className="max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto" id="hero">
      <div className="flex-1 text-center md:text-left z-[1]">
        {/* <span className="text-xs md:text-sm text-blue-200 font-thin">
          A Full Stack Developer
        </span> */}
        <h2 className="text-3xl mt-3 md:text-5xl md:mt-5">{name} <BsCodeSquare size={40} className="inline-block ml-2 text-primary "/> </h2>
        {/* IoLogoCodepen another icon*/}
        <p className="w-full text-xs font-light text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-6">{tagline}</p>
        <button className="primary-btn">Contact Me</button>
      </div>

      <div className="flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]">
        <div className="w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6">
          <div className="flex items-center justify-center">
            <img className="hero-img" src={PROFILE_PIC} alt="img one" />
          </div>

          <div className="bg-cardbg rounded-md text-center mt-3 p-4">
            {/* <h5 className="text-sm md:text-base text-white">{name}</h5> */}
            <p className="text-blue-300 text-xl md:font-medium mt-1">
              {jobTitle}
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-1">
              <HiOutlineLocationMarker />
              <p className="font-medium">{location}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap my-3">
            {skills.map((item) => (
              <div
                key={item}
                className="text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1 "
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a href="https://github.com/JimwellProjects" target="_blank">
              <div className="bg-blue-800/30 p-2 rounded hover:scale-105 transition-all ease-in-out">
                <FaGithub className="text-lg md:text-xl" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/jimwell-chavez/" target="_blank">
              <div className="bg-blue-800/30 p-2 rounded hover:scale-105 transition-all ease-in-out">
                <FaLinkedin size={20} />
              </div>
            </a>
            <a href="mailto:jimwellchavez24@gmail.com" target="_blank">
              <div className="bg-blue-800/30 p-2 rounded hover:scale-105 transition-all ease-in-out">
                <FaEnvelope size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="ui-circle absolute top-6 md:top-10 -left-10 md:left-0"></div>
    </section>
  );
};

export default Hero;