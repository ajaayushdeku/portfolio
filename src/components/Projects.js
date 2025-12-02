import React from "react";

const projects = [
  { name: "Project 1", desc: "Short description", link: "#" },
  { name: "Project 2", desc: "Short description", link: "#" },
  { name: "Project 3", desc: "Short description", link: "#" },
];

const Projects = () => {
  return (
    <section className="skills-info-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <a href={project.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
