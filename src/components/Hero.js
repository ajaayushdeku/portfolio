import React from "react";
import heroImage from "../asset/extra-logo.png"; // Replace with your image
import "../styles/Home.css";

const Hero = () => {
  return (
    <section id="home-about" className="hero-about-section">
      <div className="hero-about-container">
        {/* Left Column: Hero + About */}
        <div className="hero-about-left">
          <p
            className="status-tag"
            style={{
              border: "2px solid black",
              borderRadius: "20px",
              padding: "0.3rem 1rem",
              background: "black",
              color: "white",
              width: "fit-content",
            }}
          >
            Still in Progress
          </p>

          <h1>
            Hi, I'm <span>Aayush Shrestha</span>
          </h1>
          <p className="hero-about-description">
            Hi! I'm <strong>Aayush Shrestha</strong>, a passionate Web and Game
            Developer with a strong interest in creating interactive,
            user-friendly, and visually appealing digital experiences. I
            specialize in building modern websites and applications using
            technologies like <strong>React.js, JavaScript, HTML, CSS</strong>,
            and <strong>C#</strong>.
            <br />
          </p>

          <a href="#projects" className="about-cta">
            View My Work
          </a>
        </div>

        {/* Right Column: Image / Video */}
        <div className="hero-about-right">
          <img src={heroImage} alt="Hero" className="hero-about-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
