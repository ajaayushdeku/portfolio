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

import numguesser1 from "../asset/images/Num_Guesser/Num_Guesser_PlayScreen.png";
import numguesser2 from "../asset/images/Num_Guesser/Num_Guesser_GamePlay.png";
import numguesser3 from "../asset/images/Num_Guesser/Num_Guesser_HintLower.png";
import numguesser4 from "../asset/images/Num_Guesser/Num_Guesser_HintHigher.png";
import numguesser5 from "../asset/images/Num_Guesser/Num_Guesser_CorrectGuess.png";

import tictactoe1 from "../asset/images/Tic_Tac_Toe/TicTacToe_PlayScreen.png";
import tictactoe2 from "../asset/images/Tic_Tac_Toe/TicTacToe_GameStart.png";
import tictactoe3 from "../asset/images/Tic_Tac_Toe/TicTacToe_XTurn.png";
import tictactoe4 from "../asset/images/Tic_Tac_Toe/TicTacToe_OTurn.png";
import tictactoe5 from "../asset/images/Tic_Tac_Toe/TicTacToe_WinCase.png";
import tictactoe6 from "../asset/images/Tic_Tac_Toe/TicTacToe_TieCase.png";

import rockpaperscissor1 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_PVP.png";
import rockpaperscissor2 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_MoveChosen.png";
import rockpaperscissor3 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_WinnerCase.png";
import rockpaperscissor4 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_TieCase.png";
import rockpaperscissor5 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_PVP_Score.png";
import rockpaperscissor6 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_CVP.png";
import rockpaperscissor7 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_CVP_PWinCase.png";
import rockpaperscissor8 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_CVP_CWinCase.png";
import rockpaperscissor9 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_CVP_TieCase.png";
import rockpaperscissor10 from "../asset/images/Rock_Paper_Scissor/Rock_Paper_Scissor_CVP_Score.png";

import snakegame1 from "../asset/images/Snake_Game/Snake_Game_PlayScreen.png";
import snakegame2 from "../asset/images/Snake_Game/Snake_Game_GamePlay.png";
import snakegame3 from "../asset/images/Snake_Game/Snake_Game_GameOver.png";

import twozerofoureightgame1 from "../asset/images/2048/2048_PlayScreen.png";
import twozerofoureightgame2 from "../asset/images/2048/2048_GameStart.png";
import twozerofoureightgame3 from "../asset/images/2048/2048_GamePlay.png";
import twozerofoureightgame4 from "../asset/images/2048/2048_GameWon.png";
import twozerofoureightgame5 from "../asset/images/2048/2048_GameOver.png";

import merchVault1 from "../asset/images/MerchVault/MerchVault_Home.jpg";
import merchVault2 from "../asset/images/MerchVault/MerchVault_Customize.jpg";
import merchVault3 from "../asset/images/MerchVault/MerchVault_Artist.jpg";
import merchVault4 from "../asset/images/MerchVault/MerchVault_ProductPage.jpg";

import visuoFind1 from "../asset/images/VisuoFind/VisuoFind_Home.png";
import visuoFind2 from "../asset/images/VisuoFind/VisuoFind_SearchBox.png";
import visuoFind3 from "../asset/images/VisuoFind/VisuoFind_ViewResult.png";

import "../styles/Projects.css";

import sampleImg from "../asset/gifs/bggg.gif";

import judgegy from "../asset/gifs/background-gif7.gif";

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
    name: "Num Guesser",
    desc: "Num Guesser is an engaging number guessing game where players try to guess a randomly generated number. It features real-time hints, a high-score tracker, dynamic input validation, and a playful UI with colorful feedback. Built with HTML, CSS, and JavaScript for a fun and interactive experience.",
    demo: "/projects/Num%20Guesser/num-guesser.html",
    img: [numguesser1, numguesser2, numguesser3, numguesser4, numguesser5],
    tags: ["HTML", "CSS", "JavaScript"],
    type: "game",
  },

  {
    name: "Tic Tac Toe",
    desc: "Tic Tac Toe is an interactive two-player game where players take turns placing X and O on a 3x3 grid. It features turn-based gameplay, win detection with highlighted winning cells, tie detection, and a replay option. Built with HTML, CSS, and JavaScript, it offers a responsive and engaging UI for a fun gaming experience.",
    demo: "/projects/Tic%20Tac%20Toe/tic-tac-toe.html",
    img: [
      tictactoe1,
      tictactoe2,
      tictactoe3,
      tictactoe4,
      tictactoe5,
      tictactoe6,
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    type: "game",
  },

  {
    name: "Rock Paper Scissor",
    desc: "Rock Paper Scissor is a fast-paced interactive game featuring both Player vs Player and Player vs Computer modes. It includes keyboard and button controls, real-time move display, win/tie detection, score tracking, and a clean responsive UI. Built with HTML, CSS, and JavaScript for an engaging gameplay experience. For Payer 1, Press Key: R for Rock, P for Paper and S fot Stone and, For Payer 1, Press Key: ⬅️ for Rock, ⬆️ for Paper and ➡️ fot Stone ",
    demo: "/projects/Rock%20Paper%20Scissor/rock_paper_scissor.html",
    img: [
      rockpaperscissor1,
      rockpaperscissor2,
      rockpaperscissor3,
      rockpaperscissor4,
      rockpaperscissor5,
      rockpaperscissor6,
      rockpaperscissor7,
      rockpaperscissor8,
      rockpaperscissor9,
      rockpaperscissor10,
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    type: "game",
  },

  {
    name: "Snake Game",
    desc: "Snake Game is a classic arcade-style game where the player controls a growing snake, navigating it to eat food while avoiding collisions with walls and itself. It features continuous movement, score tracking, high score storage using localStorage, and both keyboard and on-screen controls. Built with HTML, CSS, and JavaScript, it offers a responsive and engaging UI for desktop and mobile devices.",
    demo: "/projects/Snake%20Game/snake_game.html",
    img: [snakegame1, snakegame2, snakegame3],
    tags: ["HTML", "CSS", "JavaScript"],
    type: "game",
  },

  {
    name: "2048 Game",
    desc: "2048 is a classic puzzle game where players slide numbered tiles on a 4×4 grid to combine matching values and reach the 2048 tile. The game features smooth tile movements, merge animations, score tracking with best score saved using localStorage, keyboard and on-screen controls, and win/game-over detection. Built with HTML, CSS, and JavaScript, it offers an intuitive and responsive gameplay experience.",
    demo: "/projects/2048%20Game/2048_game.html",
    img: [
      twozerofoureightgame1,
      twozerofoureightgame2,
      twozerofoureightgame3,
      twozerofoureightgame4,
      twozerofoureightgame5,
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    type: "game",
  },

  {
    name: "Lets Quiz",
    desc: "Lets Quiz is a complete quiz-management platform where admins can create quizzes, rounds, questions, and teams, while assigned Quiz Masters can host the game in real time. The system supports multiple round types including General (MCQ), Subjective (category-based), Rapid Fire (timed question streaks), Estimation (teams provide numerical estimates), and Buzzer (fastest buzz gets to answer). It also provides detailed quiz history, team performance tracking, and admin-level monitoring for smooth event execution.",
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

  const [expandedProjects, setExpandedProjects] = useState({});

  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxProjectName, setLightboxProjectName] = useState("");

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

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
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
  }, [lightboxOpen, lightboxImages]);

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
