import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const Skills = () => {
  return (
    <>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
