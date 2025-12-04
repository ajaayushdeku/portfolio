import React from "react";
import heroImage from "../asset/high.jpg"; // Replace with your image
import "../styles/Home.css";

const Hero = () => {
  return (
    <section id="home-about" className="hero-about-section">
      <div className="hero-about-container">
        {/* Left Column: Hero + About */}
        <div className="hero-about-left">
          <p className="status-tag">Still in Progress</p>

          <h1>
            Hi, I'm <span>Aayush Shrestha</span>
          </h1>

          <p className="hero-about-description">
            I am a passionate <strong>Web & Game Developer</strong> creating
            interactive, user-friendly, and visually appealing digital
            experiences. I specialize in modern technologies like{" "}
            <strong>React.js, JavaScript, HTML, CSS</strong>, and{" "}
            <strong>C#</strong>. <br />I enjoy solving problems, learning new
            tech, and turning ideas into functional applications.
          </p>

          <div className="about-btns">
            <a href="#projects" className="about-cta">
              View My Work
            </a>
            <a href="#projects" className="about-cv">
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hero-about-right">
          <div className="hero-image-container">
            <img src={heroImage} alt="Hero" className="hero-about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
