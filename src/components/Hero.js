import React from "react";
import heroVideoMov from "../asset/bg.mov";
import "../styles/Home.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Content Overlay */}
      <div className="hero-content">
        <p
          style={{
            border: "2px solid black",
            width: "fit-content",
            margin: "0 auto",
            borderRadius: "20px",
            padding: "0rem 1rem",
            background: "Black",
            color: "White",
          }}
        >
          Still in Progress
        </p>
        <h1>
          Hi, I'm <span>Aayush Shrestha</span>
        </h1>
        <p>Web Developer | Game Developer | Programmer</p>
        <a href="#projects">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
