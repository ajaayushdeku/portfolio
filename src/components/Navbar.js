import React, { useState, useEffect } from "react";
import { MdDarkMode, MdSunny } from "react-icons/md";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiFillHome, AiOutlineProject } from "react-icons/ai";
import { FaUserGraduate, FaTools, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import logo from "../asset/logo.png";
import hi from "../asset/hi.gif";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);

    const handleScroll = () => {
      const sections = [
        "home",
        "skills",
        "achievements",
        "projects",
        "contact",
      ];
      const scrollPos = window.scrollY + window.innerHeight / 3; // middle point

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { name: "home", icon: <AiFillHome /> },
    { name: "skills", icon: <FaTools /> },
    { name: "achievements", icon: <FaUserGraduate /> },
    { name: "projects", icon: <AiOutlineProject /> },
    { name: "contact", icon: <MdContacts /> },
  ];

  return (
    <nav>
      <div className="nav-container">
        {/* Left Section: Logo */}
        <div className="nav-left">
          <img src={logo} alt="Portfolio Logo" className="nav-logo" />

          <p className="nav-welcome">
            Welcome <img src={hi} className="welcome-logo" />
          </p>

          {/* Hamburger Button for Mobile */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>

        {/* Middle Section: Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name} onClick={() => setMenuOpen(false)}>
              <a
                href={`#${item.name}`}
                className={activeSection === item.name ? "active" : ""}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: Theme + GitHub + LinkedIn */}
        <div className="nav-right">
          <a
            href="https://github.com/ajaayushdeku?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-right-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aj-aayush-shrestha/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-right-icon"
          >
            <FaLinkedin />
          </a>

          <button onClick={toggleTheme} className="theme-toggle-button">
            <div>
              {" "}
              {theme === "light" ? (
                <MdDarkMode size={24} />
              ) : (
                <MdSunny size={24} />
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
