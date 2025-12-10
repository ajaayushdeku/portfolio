import React, { useState } from "react";
import award1 from "../asset/mount-glasses.jpg";
import "../styles/Achievements.css";

const achievements = [
  {
    title: "GCES IT Expo Showcase",
    desc: "Showcased a collection of games and interactive projects developed using Unity and other technologies.",
    date: "Dec 2024",
    image: award1,
    tag: "Game Development",
    icon: "🎮",
    color: "#667eea",
  },
  {
    title: "Top GPA (4.0) Award",
    desc: "Achieved a GPA of 4.0 in the 4th semester, with outstanding academic performance across multiple semesters (CGPA: 3.8).",
    date: "Aug 2024",
    image: award1,
    tag: "Academics",
    icon: "🏆",
    color: "#f093fb",
  },
];

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="achievement-section achievements-wrapper">
      {/* Header Section */}
      <div className="achievements-header">
        {/* <h2 className="achievements-title">
          Achievements & <span className="gradient-text">Awards</span>
        </h2> */}

        <h1 className="component-heading">
          My <span>Achievements</span>
        </h1>
        <p className="achievements-subtitle">
          Highlights of my milestones and recognitions
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="achievements-grid">
        {achievements.map((ach, index) => (
          <div
            key={index}
            className="achievement-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            {/* Image Section with Overlay */}
            <div className="achievement-image-wrapper">
              <img
                src={ach.image}
                alt={ach.title}
                className="achievement-img"
              />
              <div className="achievement-image-overlay">
                <span className="achievement-icon">{ach.icon}</span>
              </div>

              {/* Decorative gradient border */}
              <div
                className="achievement-glow"
                style={{
                  background: `linear-gradient(135deg, ${ach.color}, transparent)`,
                }}
              ></div>
            </div>

            {/* Content Section */}
            <div className="achievement-content">
              <div className="achievement-header-row">
                <span
                  className="ach-tag"
                  style={{
                    background: `${ach.color}20`,
                    color: ach.color,
                    border: `1px solid ${ach.color}40`,
                  }}
                >
                  {ach.tag}
                </span>
                <span className="ach-date">{ach.date}</span>
              </div>

              <h3 className="achievement-title-text">{ach.title}</h3>
              <p className="achievement-description">{ach.desc}</p>

              {/* Animated Progress Bar */}
              <div className="achievement-bar">
                <div
                  className="achievement-bar-fill"
                  style={{
                    width: hoveredIndex === index ? "100%" : "0%",
                    background: `linear-gradient(90deg, ${ach.color}, ${ach.color}80)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="achievements-stats">
        <div className="stat-item">
          <div className="stat-number">4.0</div>
          <div className="stat-label">GPA Achieved</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">3.8</div>
          <div className="stat-label">Overall CGPA</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">{achievements.length}</div>
          <div className="stat-label">Major Awards</div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
