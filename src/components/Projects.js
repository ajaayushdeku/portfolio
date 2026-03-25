import React, { useCallback, useEffect, useState } from "react";
import judgegy from "../asset/gifs/background-gif7.gif";
import { allProjects } from "../utils/projectInfo";
import "../styles/Projects.css";

const tagStyles = {
  HTML: {
    bg: "rgba(227,76,39,0.12)",
    border: "rgba(227,76,39,0.3)",
    color: "#e34c27",
  },
  CSS: {
    bg: "rgba(50,169,219,0.12)",
    border: "rgba(50,169,219,0.3)",
    color: "#32a9db",
  },
  JavaScript: {
    bg: "rgba(240,218,79,0.12)",
    border: "rgba(240,218,79,0.3)",
    color: "#c4b53e",
  },
  "React.js": {
    bg: "rgba(97,217,250,0.12)",
    border: "rgba(97,217,250,0.3)",
    color: "#61d9fa",
  },
  MongoDB: {
    bg: "rgba(67,153,52,0.12)",
    border: "rgba(67,153,52,0.3)",
    color: "#57c23a",
  },
  "C#": {
    bg: "rgba(156,79,150,0.12)",
    border: "rgba(156,79,150,0.3)",
    color: "#c97dc3",
  },
  Unity3D: {
    bg: "rgba(77,77,77,0.25)",
    border: "rgba(160,160,160,0.2)",
    color: "#c9d1d9",
  },
  Blender: {
    bg: "rgba(232,116,0,0.12)",
    border: "rgba(232,116,0,0.3)",
    color: "#e87400",
  },
  Python: {
    bg: "rgba(52,116,168,0.12)",
    border: "rgba(52,116,168,0.3)",
    color: "#4c9fd4",
  },
  "Node.js": {
    bg: "rgba(105,161,100,0.12)",
    border: "rgba(105,161,100,0.3)",
    color: "#69a164",
  },
  PHP: {
    bg: "rgba(123,127,181,0.12)",
    border: "rgba(123,127,181,0.3)",
    color: "#9b9fc9",
  },
  MySQL: {
    bg: "rgba(0,68,99,0.2)",
    border: "rgba(0,68,99,0.4)",
    color: "#e07014",
  },
  "Spring Boot": {
    bg: "rgba(109,181,62,0.12)",
    border: "rgba(109,181,62,0.3)",
    color: "#7dc94a",
  },
  PostgreSQL: {
    bg: "rgba(58,107,148,0.12)",
    border: "rgba(58,107,148,0.3)",
    color: "#6da3cc",
  },
  default: {
    bg: "rgba(139,148,158,0.12)",
    border: "rgba(139,148,158,0.3)",
    color: "#8b949e",
  },
};

const Projects = () => {
  const [imageIndices, setImageIndices] = useState(
    allProjects.reduce((acc, p) => {
      acc[p.name] = 0;
      return acc;
    }, {}),
  );
  const [expandedProjects, setExpandedProjects] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxProjectName, setLightboxProjectName] = useState("");

  const gameProjects = allProjects.filter((p) => p.type === "game");
  const webProjects = allProjects.filter((p) => p.type === "web");

  const nextImage = useCallback(
    () => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length),
    [lightboxImages],
  );
  const prevImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === 0 ? lightboxImages.length - 1 : prev - 1,
      ),
    [lightboxImages],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) => {
        const updated = { ...prev };
        allProjects.forEach((p) => {
          updated[p.name] = (updated[p.name] + 1) % p.img.length;
        });
        return updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  const openLightbox = (images, index, name) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxProjectName(name);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleProject = (name) =>
    setExpandedProjects((prev) => ({ ...prev, [name]: !prev[name] }));

  const ProjectCard = ({ project }) => {
    const currentIndex = imageIndices[project.name];
    const isOpen = expandedProjects[project.name];

    return (
      <div className={`project-card ${isOpen ? "open" : ""}`}>
        {/* Image */}
        <div
          className="project-img-container"
          onClick={() => openLightbox(project.img, currentIndex, project.name)}
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
          {project.img.length > 1 && (
            <div className="image-indicators">
              {project.img.map((_, idx) => (
                <div
                  key={idx}
                  className={`indicator-dot ${idx === currentIndex ? "active" : ""}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-name">{project.name}</h3>
            <div className="project-action">
              {project.demo ? (
                <button
                  className="project-btn project-btn-primary"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  Play Demo →
                </button>
              ) : project.pdf ? (
                <button
                  className="project-btn project-btn-primary"
                  onClick={() => window.open(project.pdf, "_blank")}
                >
                  View Report →
                </button>
              ) : project.link ? (
                <button
                  className="project-btn project-btn-primary"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project →
                </button>
              ) : (
                <button className="project-btn project-btn-wip" disabled>
                  Still in Production
                </button>
              )}
            </div>
          </div>

          <button
            className="project-toggle-btn"
            onClick={() => toggleProject(project.name)}
          >
            {isOpen ? "Show less ▲" : "Show more ▾"}
          </button>

          <div className="project-dropdown">
            <p className="project-description">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => {
                const s = tagStyles[tag] || tagStyles.default;
                return (
                  <span
                    key={idx}
                    className="proj-tag"
                    style={{
                      background: s.bg,
                      color: s.color,
                      border: `1px solid ${s.border}`,
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
    <section className="project-section" id="projects">
      {/* Header */}
      <div className="proj-header">
        <span className="proj-eyebrow">What I've built</span>
        <h2 className="proj-title">
          My <span>Projects</span>
        </h2>
        <div className="proj-title-bar" />
        <p className="proj-subtitle">
          A collection of games and web apps crafted with passion and precision.
        </p>
      </div>

      {/* Web Apps */}
      <div className="projects-group">
        <div className="group-label">
          <span>Web Applications</span>
        </div>
        <div className="projects-grid">
          {webProjects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>

      {/* Games */}
      <div className="projects-group">
        <div className="group-label">
          <span>Games</span>
          <img src={judgegy} alt="games gif" className="group-gif" />
        </div>
        <div className="projects-grid">
          {gameProjects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            <div className="lightbox-header">
              <h3>{lightboxProjectName}</h3>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {lightboxImages.length}
              </span>
            </div>
            <div className="lightbox-image-container">
              <img
                src={lightboxImages[lightboxIndex]}
                alt={`${lightboxProjectName} ${lightboxIndex + 1}`}
              />
            </div>
            {lightboxImages.length > 1 && (
              <>
                <button
                  className="lightbox-nav lightbox-prev"
                  onClick={prevImage}
                >
                  ❮
                </button>
                <button
                  className="lightbox-nav lightbox-next"
                  onClick={nextImage}
                >
                  ❯
                </button>
                <div className="lightbox-thumbnails">
                  {lightboxImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`lightbox-thumb ${idx === lightboxIndex ? "active" : ""}`}
                      onClick={() => setLightboxIndex(idx)}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
