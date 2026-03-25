import React, { useState, useEffect } from "react";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiFillHome, AiOutlineProject } from "react-icons/ai";
import { FaUserGraduate, FaTools } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import "../styles/NavBar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

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
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navItems = [
    { name: "home", icon: <AiFillHome /> },
    { name: "skills", icon: <FaTools /> },
    { name: "achievements", icon: <FaUserGraduate /> },
    { name: "projects", icon: <AiOutlineProject /> },
    { name: "contact", icon: <MdContacts /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          port<span>folio</span>
        </a>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>

        {/* Nav links */}
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

        {/* Theme toggle */}
        <div className="nav-right">
          <button
            onClick={toggleTheme}
            className="theme-toggle-button"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <MdSunny size={18} />
            ) : (
              <MdDarkMode size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
