import React, { useState, useEffect } from "react";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiFillHome, AiOutlineProject } from "react-icons/ai";
import { FaUserGraduate, FaTools } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
// import hi from "../asset/gifs/welcome_gif.gif";
import "../styles/NavBar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  console.log("Current theme in Navbar:", theme);

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
      const scrollPos = window.scrollY + window.innerHeight / 3;

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

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navItems = [
    { name: "home", icon: <AiFillHome /> },
    { name: "skills", icon: <FaTools /> },
    { name: "achievements", icon: <FaUserGraduate /> },
    { name: "projects", icon: <AiOutlineProject /> },
    { name: "contact", icon: <MdContacts /> },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left: Logo or Hamburger */}
        <div className="nav-left">
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
          </button>
        </div>

        {/* Middle: Nav Links */}
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

        {/* Right: Welcome & Theme Toggle */}
        <div className="nav-right">
          {/* <div className="nav-welcome">
            <span className="welcome-logo">👋🏻</span>
            <span>Hi, Aayush!</span>
          </div> */}
          <button onClick={toggleTheme} className="theme-toggle-button">
            {theme === "dark" ? (
              <MdSunny size={22} />
            ) : (
              <MdDarkMode size={22} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
