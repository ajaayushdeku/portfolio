import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-info-container">
        <h2>About Me</h2>
        <p>
          Hi! I'm <strong>Aayush Shrestha</strong>, a passionate Web and Game
          Developer with a strong interest in creating interactive,
          user-friendly, and visually appealing digital experiences. I
          specialize in building modern websites and applications using
          technologies like <strong>React.js, JavaScript, HTML, CSS</strong>,
          and <strong>Node.js</strong>.
        </p>
        <p>
          I enjoy solving challenging problems, optimizing performance, and
          learning new technologies to stay ahead in the fast-paced world of
          development. Whether it's a small personal project or a large-scale
          application, I love bringing ideas to life through code.
        </p>
        <p>
          Outside of coding, I have a keen interest in game development, UI/UX
          design, and exploring emerging tech trends. When I'm not in front of a
          screen, I enjoy reading tech blogs, playing strategy games, and
          contributing to open-source projects.
        </p>
        <a href="#projects" className="about-cta">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default About;
