import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return(
    <div className="text-xs text-center p-4">
        <div className="flex items-center justify-center gap-2 flex-wrap">
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
        <h5 className="text-sky-500 text-xs font-semibold text-center pt-4">
        © Copyright 2024 PixelCoder. All Rights Reserved
        {/* TechTinker */}
        </h5>
    </div>
  );
};

export default Footer;
