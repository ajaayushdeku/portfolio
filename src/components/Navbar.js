import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <h1>My Portfolio</h1>
        <ul className="nav-links">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
