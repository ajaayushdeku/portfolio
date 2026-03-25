import React, { useCallback, useEffect, useState } from "react";

import judgegy from "../asset/gifs/background-gif7.gif";
import { allProjects } from "../utils/projectInfo";

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
    }, {}),
  );

  const gameProjects = allProjects.filter((p) => p.type === "game");
  const webProjects = allProjects.filter((p) => p.type === "web");

  const [expandedProjects, setExpandedProjects] = useState({});

  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxProjectName, setLightboxProjectName] = useState("");

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  }, [lightboxImages]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1,
    );
  }, [lightboxImages]);

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
  }, [nextImage, prevImage]);

  const toggleProject = (name) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Lightbox functions
  const openLightbox = (images, index, projectName) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxProjectName(projectName);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxImages, nextImage, prevImage]);

  const ProjectCard = ({ project }) => {
    const currentIndex = imageIndices[project.name];
    const isOpen = expandedProjects[project.name];

    return (
      <div className={`project-card ${isOpen ? "open" : "closed"}`}>
        {/* Image Container */}
        <div
          className="project-img-container"
          onClick={() => openLightbox(project.img, currentIndex, project.name)}
          style={{ cursor: "pointer" }}
          title="Click to view full images"
        >
          <div className="project-img">
            {project.img.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.name} screenshot ${idx + 1}`}
                className={idx === currentIndex ? "active" : ""}
              />
            ))}
          </div>

          {/* Image Indicators */}
          {project.img.length > 1 && (
            <div className="image-indicators">
              {project.img.map((_, idx) => (
                <div
                  key={idx}
                  className={`indicator-dot ${
                    idx === currentIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-name">{project.name}</h3>
            {/* <span className="project-type-badge">
              {project.type === "game" ? "🎮 Game" : "💻 Web"}
            </span> */}

            <div className="project-action">
              {project.demo ? (
                <button
                  className="project-btn project-overlay-btn"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <span>🎮 Play Demo</span>→
                </button>
              ) : project.pdf ? (
                <button
                  className="project-btn project-overlay-btn"
                  onClick={() => window.open(project.pdf, "_blank")}
                >
                  <span>💻 View Report</span>→
                </button>
              ) : project.link ? (
                <button
                  className="project-btn project-overlay-btn"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <span>🌐 View Project</span>→
                </button>
              ) : (
                <button className="project-btn project-still-btn">
                  <span>🥶 Still in Production</span>
                </button>
              )}
            </div>
          </div>

          {/* Toggle Button */}
          <button
            className="project-toggle-btn"
            onClick={() => toggleProject(project.name)}
          >
            {isOpen ? "▲ Show Less" : "▼ Show More"}
          </button>

          {/* Dropdown Content */}
          <div className="project-dropdown">
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
                      "--shadow-color": tagStyle.shadow,
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
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
          {webProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
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
          {gameProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            {/* Project Name */}
            <div className="lightbox-header">
              <h3>{lightboxProjectName}</h3>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {lightboxImages.length}
              </span>
            </div>

            {/* Image */}
            <div className="lightbox-image-container">
              <img
                src={lightboxImages[lightboxIndex]}
                alt={`${lightboxProjectName} screenshot ${lightboxIndex + 1}`}
              />
            </div>

            {/* Navigation Buttons */}
            {lightboxImages.length > 1 && (
              <>
                <button
                  className="lightbox-nav lightbox-prev"
                  onClick={prevImage}
                  title="Previous (←)"
                >
                  ❮
                </button>
                <button
                  className="lightbox-nav lightbox-next"
                  onClick={nextImage}
                  title="Next (→)"
                >
                  ❯
                </button>
              </>
            )}

            {/* Thumbnail Strip */}
            {lightboxImages.length > 1 && (
              <div className="lightbox-thumbnails">
                {lightboxImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`lightbox-thumb ${
                      idx === lightboxIndex ? "active" : ""
                    }`}
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
