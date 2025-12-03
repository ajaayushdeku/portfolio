import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "C#", "Blender"];

const Skills = () => {
  return (
    <section>
      <div className="skills-info-container">
        <h2 className="component-heading">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              <div>Image of PL</div>
              <h1>{skill}</h1>
              <p>Expertise in the specific programming language</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
