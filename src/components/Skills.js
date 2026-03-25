import React from "react";
import "../styles/Skills.css";

const skills = [
  {
    name: "HTML",
    tag: "Markup",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    tag: "Styling",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    tag: "Language",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    tag: "Framework",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MongoDB",
    tag: "Database",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "C#",
    tag: "Language",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Unity",
    tag: "Game Engine",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  },
  {
    name: "Blender",
    tag: "3D Design",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-info-container">
        <div className="skills-header">
          <span className="skills-eyebrow">What I work with</span>
          <h2 className="skills-title">
            My <span>Skills</span>
          </h2>
          <div className="skills-title-bar" />
          <p className="skills-subtitle">
            A mix of tools I use to build, design, and bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon-wrap">
                <img src={skill.img} alt={skill.name} />
              </div>
              <div className="skill-text">
                <h3>{skill.name}</h3>
                <span className="skill-tag">{skill.tag}</span>
              </div>
              <div className="skill-dot" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
