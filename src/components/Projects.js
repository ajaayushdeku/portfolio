import React, { useEffect, useState } from "react";
import bloodworks1 from "../asset/images/BloodWorks/BloodWorks_Home.jpg";
import bloodworks2 from "../asset/images/BloodWorks/BloodWorks_BloodBank.jpg";
import bloodworks3 from "../asset/images/BloodWorks/BloodWorks_Event.jpg";
import bloodworks4 from "../asset/images/BloodWorks/BloodWorks_UserDashSettings.jpg";

import dodgeBlock1 from "../asset/images/Dodge_Block/DodgeBlock_Home.png";
import dodgeBlock2 from "../asset/images/Dodge_Block/DodgeBlock_HowToPlay.png";
import dodgeBlock3 from "../asset/images/Dodge_Block/DodgeBlock_GamePlay.png";
import dodgeBlock4 from "../asset/images/Dodge_Block/DodgeBlock_ResultScreen.png";

import diceduel1 from "../asset/images/Dice_Duel/DiceDuel_Home.png";
import diceduel2 from "../asset/images/Dice_Duel/DiceDuel_PointLimitSetter.png";
import diceduel4 from "../asset/images/Dice_Duel/DiceDuel_GamePlay1.png";
import diceduel5 from "../asset/images/Dice_Duel/DiceDuel_GamePlay2.png";
import diceduel3 from "../asset/images/Dice_Duel/DiceDuel_PlayScreen.png";
import diceduel6 from "../asset/images/Dice_Duel/DiceDuel_Result.png";

import merchVault1 from "../asset/images/MerchVault/MerchVault_Home.jpg";
import merchVault2 from "../asset/images/MerchVault/MerchVault_Customize.jpg";
import merchVault3 from "../asset/images/MerchVault/MerchVault_Artist.jpg";
import merchVault4 from "../asset/images/MerchVault/MerchVault_ProductPage.jpg";

import visuoFind1 from "../asset/images/VisuoFind/VisuoFind_Home.png";
import visuoFind2 from "../asset/images/VisuoFind/VisuoFind_SearchBox.png";
import visuoFind3 from "../asset/images/VisuoFind/VisuoFind_ViewResult.png";

import "../styles/Projects.css";

import sampleImg from "../asset/bggg.gif";

import judgegy from "../asset/background-gif7.gif";
const allProjects = [
  {
    name: "Dodge Block",
    desc: "Dodge Block is a 3D single-player game built with Unity. Players control a car and must avoid falling blocks and obstacles to survive longer and achieve higher scores.",
    demo: "/unity-demo/index.html",
    img: [dodgeBlock1, dodgeBlock2, dodgeBlock3, dodgeBlock4],
    tags: ["C#", "Unity3D", "Blender"],
    type: "game",
  },
  {
    name: "Dice Duel",
    desc: "Dice Duel is an interactive two-player game where players take turns rolling a dice, accumulating points, and competing to reach the maximum score first. Built with HTML, CSS, and JavaScript, it features dynamic score tracking, progress bars, and a gaming-inspired UI.",
    demo: "/projects/Dice%20Game/dice-game.html",
    img: [diceduel1, diceduel2, diceduel3, diceduel4, diceduel5, diceduel6],
    tags: ["HTML", "CSS", "JavaScript"],
    type: "game",
  },

  {
    name: "Lets Quiz",
    desc: "Lets Quiz is a complete quiz-management platform where admins can create quizzes, rounds, questions, and teams, while assigned Quiz Masters can host the game in real time. The system supports multiple round types including General (MCQ), Subjective (category-based), Rapid Fire (timed question streaks), Estimation (teams provide numerical estimates), and Buzzer (fastest buzz gets to answer). It also provides detailed quiz history, team performance tracking, and admin-level monitoring for smooth event execution.",

    pdf: "/pdf/MerchVault.pdf",
    img: [sampleImg],
    tags: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"],
    type: "web",
  },
  {
    name: "MerchVault",
    desc: "MerchVault is an e-commerce platform for selling apparel such as t-shirts, hoodies, posters, and more. Users can customize products with graphics or text, and creators can upload and sell their own designs on the marketplace.",
    pdf: "/pdf/MerchVault.pdf",
    img: [merchVault1, merchVault2, merchVault3, merchVault4],
    tags: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"],
    type: "web",
  },
  {
    name: "VisuoFind",
    desc: "VisuoFind is an AI-powered product search application that finds look-alike apparel from images. Users can upload a picture of an item—such as shoes, t-shirts, watches, etc.—and the system identifies visually similar products and displays accurate matches.",
    pdf: "/pdf/VisuoFind.pdf",
    img: [visuoFind1, visuoFind2, visuoFind3],
    tags: ["HTML", "CSS", "React.js", "Python", "Spring Boot", "PostgreSQL"],
    type: "web",
  },
  {
    name: "BloodWorks",
    desc: "BloodWorks is a platform that connects blood donors with people in need. Hospitals and organizations can also register to display their available donors and post blood donation events, helping increase participation and awareness.",
    pdf: "/pdf/BloodWorks.pdf",
    img: [bloodworks1, bloodworks2, bloodworks3, bloodworks4],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    type: "web",
  },
];

const tagStyles = {
  HTML: { bg: "#e34c27", shadow: "#b83c1e", color: "#ffffff" },
  CSS: { bg: "#32a9db", shadow: "#217ea7", color: "#ffffff" },
  JavaScript: { bg: "#f0da4f", shadow: "#c4b53e", color: "#323330" },
  "React.js": { bg: "#61d9fa", shadow: "#3eaac7", color: "#ffffff" },
  MongoDB: { bg: "#439934", shadow: "#2c6622", color: "#ffffff" },
  "C#": { bg: "#9c4f96", shadow: "#6f3570", color: "#ffffff" },
  Unity3D: { bg: "#4d4d4d", shadow: "#2f2f2f", color: "#ffffff" },
  Blender: { bg: "#e87400", shadow: "#a95500", color: "#225785" },
  Python: { bg: "#3474a8", shadow: "#225785", color: "#ffcf3d" },
  "Node.js": { bg: "#69a164", shadow: "#4a7350", color: "#323330" },
  PHP: { bg: "#7b7fb5", shadow: "#666a9ece", color: "#323330" },

  MySQL: { bg: "#004463", shadow: "#002e44", color: "#e07014" },
  "Spring Boot": { bg: "#6db53e", shadow: "#4c822a", color: "#ffffff" },
  PostgreSQL: { bg: "#3a6b94", shadow: "#2a4d6d", color: "#ffffff" },
  default: { bg: "#8f8d8d", shadow: "#5e5c5c", color: "#ffffff" },
};

const Projects = () => {
  const [imageIndices, setImageIndices] = useState(
    allProjects.reduce((acc, project) => {
      acc[project.name] = 0;
      return acc;
    }, {})
  );

  const gameProjects = allProjects.filter((p) => p.type === "game");
  const webProjects = allProjects.filter((p) => p.type === "web");

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) => {
        const updated = { ...prev };
        allProjects.forEach((project) => {
          updated[project.name] =
            (updated[project.name] + 1) % project.img.length;
        });
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ProjectCard = ({ project, index }) => {
    return (
      <div
        className="project-card"
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
      >
        <div className="project-img-container">
          {project.img.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={project.name}
              className={idx === imageIndices[project.name] ? "active" : ""}
            />
          ))}

          <div className="project-overlay">
            <h3 className="project-overlay-title">{project.name}</h3>
            {project.demo ? (
              <button
                className="project-overlay-btn"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <span>Play Demo</span>→
              </button>
            ) : (
              <button
                className="project-overlay-btn"
                onClick={() => window.open(project.pdf, "_blank")}
              >
                <span>View Report </span> →
              </button>
            )}
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">{project.desc}</p>

          <div className="project-tags">
            {project.tags.map((tag, idx) => {
              const tagStyle = tagStyles[tag] || tagStyles.default;
              return (
                <span
                  key={idx}
                  className="tag"
                  style={{
                    backgroundColor: tagStyle.bg,
                    color: tagStyle.color,
                    boxShadow: `0 2px 8px ${tagStyle.shadow}40`,
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="project-section">
      {/* Hero Header */}
      <div className="section-header">
        <h2 className="component-heading">
          My <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          Explore my collection of games and web applications, crafted with
          passion and precision
        </p>
      </div>

      {/* Web Applications Section */}
      <div className="projects-section">
        <div className="section-divider">
          <h2>💻 Web Applications</h2>
        </div>
        <div className="projects-grid">
          {webProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Games Section */}
      <div className="projects-section">
        <div className="section-divider">
          <h2>🎮 Games</h2>
          <img src={judgegy} alt="judgegy" className="judgegy" />
        </div>
        <div className="projects-grid">
          {gameProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
