import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <p className="footer-copy">
        <span>aayush.dev</span> — © {new Date().getFullYear()} Aayush Shrestha.
        All rights reserved.
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/ajaayushdeku?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-right-icon"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aj-aayush-shrestha/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-right-icon"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
