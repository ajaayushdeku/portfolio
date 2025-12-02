import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav>
      <div className="nav-container">
        <h1>My Portfolio</h1>
        <p>Still in Progress</p>
        <ul className="nav-links">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-button">
          <MdDarkMode /> {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
