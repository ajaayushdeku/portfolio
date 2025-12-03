import React from "react";
import sampleImg from "../asset/extra-logo.png"; // add your image here

const projects = [
  { name: "Project 1", desc: "Short description", link: "#", img: sampleImg },
  { name: "Project 2", desc: "Short description", link: "#", img: sampleImg },
  { name: "Project 3", desc: "Short description", link: "#", img: sampleImg },
];

const Projects = () => {
  return (
    <section>
      <h2 className="component-heading">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            {/* Project Image */}
            <div className="project-img-container">
              <img src={project.img} alt={project.name} />
            </div>

            {/* Card Content */}
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>

              <a href={project.link} className="project-btn">
                View Project →
              </a>

              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>JS</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
