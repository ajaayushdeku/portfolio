import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/ajaayushdeku?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-right-icon"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/aj-aayush-shrestha/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-right-icon"
      >
        <FaLinkedin />
      </a>
      © {new Date().getFullYear()} Aayush Shrestha. All rights reserved.
    </footer>
  );
};

export default Footer;
