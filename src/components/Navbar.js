import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../asset/logo.png";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav>
      <div className="nav-container">
        {/* LOGO */}
        <img src={logo} alt="Portfolio Logo" className="nav-logo" />

        <p className="nav-welcome">Welcome</p>

        {/* HAMBURGER BUTTON */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {[
            "home",
            "about",
            "skills",
            "Achievements",
            "projects",
            "contact",
          ].map((item) => (
            <li key={item} onClick={() => setMenuOpen(false)}>
              <a href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* THEME TOGGLE */}
        <button onClick={toggleTheme} className="theme-toggle-button">
          <MdDarkMode />
          {/* {theme === "light" ? "Dark Mode" : "Light Mode"} */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
