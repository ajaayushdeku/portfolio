import React, { useEffect, useState } from "react";
import sampleImg from "../asset/mount-glasses.jpg"; // add your image here
import sampleImg2 from "../asset/face.jpeg"; // add your image here

import dodgeBlock1 from "../asset/DodgeBlock_Home.png";
import dodgeBlock2 from "../asset/DodgeBlock_HowToPlay.png";
import dodgeBlock3 from "../asset/DodgeBlock_GamePlay.png";
import dodgeBlock4 from "../asset/DodgeBlock_ResultScreen.png";

import merchVault1 from "../asset/MerchVault_Home.jpg";
import merchVault2 from "../asset/MerchVault_Customize.jpg";
import merchVault3 from "../asset/MerchVault_Artist.jpg";
import merchVault4 from "../asset/MerchVault_ProductPage.jpg";

import visuoFind1 from "../asset/VisuoFind_Home.png";
import visuoFind2 from "../asset/VisuoFind_SearchBox.png";
import visuoFind3 from "../asset/VisuoFind_ViewResult.png";
import "../styles/Projects.css";

const projects = [
  {
    name: "BloodWorks",
    desc: "BloodWorks is a platform that connects blood donors with people in need. Hospitals and organizations can also register to display their available donors and post blood donation events, helping increase participation and awareness.",
    pdf: "/pdf/BloodWorks.pdf",
    img: [sampleImg, sampleImg2, sampleImg, sampleImg2],
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    name: "Dodge Block",
    desc: "Dodge Block is a 3D single-player game built with Unity. Players control a car and must avoid falling blocks and obstacles to survive longer and achieve higher scores.",
    pdf: "/pdf/MerchVault.pdf",
    img: [dodgeBlock1, dodgeBlock2, dodgeBlock3, dodgeBlock4],
    tags: ["C#", "Unity3D", "Blender"],
  },
  {
    name: "MerchVault",
    desc: "MerchVault is an e-commerce platform for selling apparel such as t-shirts, hoodies, posters, and more. Users can customize products with graphics or text, and creators can upload and sell their own designs on the marketplace.",
    pdf: "/pdf/MerchVault.pdf",
    img: [merchVault1, merchVault2, merchVault3, merchVault4],
    tags: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"],
  },
  {
    name: "VisuoFind",
    desc: "VisuoFind is an AI-powered product search application that finds look-alike apparel from images. Users can upload a picture of an item—such as shoes, t-shirts, watches, etc.—and the system identifies visually similar products and displays accurate matches.",
    pdf: "/pdf/VisuoFind.pdf",
    img: [visuoFind1, visuoFind2, visuoFind3],
    tags: ["HTML", "CSS", "React.js", "Python", "Spring Boot", "PostgreSQL"],
  },
];

const tagStyles = {
  HTML: {
    bg: "#e34c27",
    shadow: "#b83c1e",
    color: "#ffffff",
  },
  CSS: {
    bg: "#32a9db",
    shadow: "#217ea7",
    color: "#ffffff",
  },
  JavaScript: {
    bg: "#f0da4f",
    shadow: "#c4b53e",
    color: "#323330",
  },
  "React.js": {
    bg: "#61d9fa",
    shadow: "#3eaac7",
    color: "#ffffffff",
  },
  MongoDB: {
    bg: "#439934",
    shadow: "#2c6622",
    color: "#ffffff",
  },
  "C#": {
    bg: "#9c4f96",
    shadow: "#6f3570",
    color: "#ffffff",
  },
  Unity3D: {
    bg: "#4d4d4d",
    shadow: "#2f2f2f",
    color: "#ffffff",
  },
  Blender: {
    bg: "#e87400",
    shadow: "#a95500",
    color: "#225785",
  },
  Python: {
    bg: "#3474a8",
    shadow: "#225785",
    color: "#ffcf3d",
  },
  "Node.js": {
    bg: "#69a164",
    shadow: "#4a7350",
    color: "#323330",
  },
  MySQL: {
    bg: "#004463",
    shadow: "#002e44",
    color: "#e07014",
  },
  "Spring Boot": {
    bg: "#6db53e",
    shadow: "#4c822a",
    color: "#ffffff",
  },
  PostgreSQL: {
    bg: "#3a6b94",
    shadow: "#2a4d6d",
    color: "#ffffff",
  },
  default: {
    bg: "#8f8d8d",
    shadow: "#5e5c5c",
    color: "#ffffff",
  },
};

const Projects = () => {
  const [imageIndices, setImageIndices] = useState(
    projects.reduce((acc, project) => {
      acc[project.name] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) => {
        const updated = { ...prev };
        projects.forEach((project) => {
          updated[project.name] =
            (updated[project.name] + 1) % project.img.length;
        });
        return updated;
      });
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Project Images:", projects.img);
  }, []);

  return (
    <section>
      <h2 className="component-heading">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            {/* Project Image */}
            <div className="project-img-container">
              {project.img.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={project.name}
                  className={idx === imageIndices[project.name] ? "active" : ""}
                />
              ))}
              <h2 className="img-text">
                {project.name}
                <button
                  className="project-btn"
                  onClick={() => window.open(project.pdf, "_blank")}
                >
                  View Project Report →
                </button>
              </h2>
            </div>

            {/* Card Content */}
            <div className="project-content">
              <h3 className="project-name">{project.name} </h3>
              <p className="project-description">{project.desc}</p>

              {/* Project Tags */}
              <div className="project-tags">
                {project.tags.map((tag, idx) => {
                  const { bg, shadow, color } =
                    tagStyles[tag] || tagStyles.default;

                  return (
                    <span
                      key={idx}
                      className="tag"
                      style={{
                        backgroundColor: bg,
                        color: color,
                        "--shadow-color": shadow,
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
