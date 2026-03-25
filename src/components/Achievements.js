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
  },
  {
    title: "Top GPA (4.0) Award",
    desc: "Achieved a GPA of 4.0 in the 4th semester, with outstanding academic performance across multiple semesters (CGPA: 3.8).",
    date: "Aug 2024",
    image: award1,
    tag: "Academics",
  },
];

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="achievement-section" id="achievements">
      <div className="ach-container">
        {/* Header */}
        <div className="ach-header">
          <span className="ach-eyebrow">Recognition &amp; milestones</span>
          <h2 className="ach-title">
            My <span>Achievements</span>
          </h2>
          <div className="ach-title-bar" />
          <p className="ach-subtitle">
            Highlights of things I've built, earned, and been recognized for.
          </p>
        </div>

        {/* Cards */}
        <div className="ach-grid">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="ach-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="ach-img-wrap">
                <img src={ach.image} alt={ach.title} className="ach-img" />
                <div className="ach-img-overlay" />
                <span className="ach-img-tag">{ach.tag}</span>
                <span className="ach-img-date">{ach.date}</span>
              </div>

              {/* Body */}
              <div className="ach-body">
                <h3 className="ach-card-title">{ach.title}</h3>
                <p className="ach-card-desc">{ach.desc}</p>
                <div className="ach-progress">
                  <div
                    className="ach-progress-fill"
                    style={{ width: hoveredIndex === index ? "100%" : "0%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="ach-stats">
          <div className="ach-stat">
            <div className="ach-stat-num">4.0</div>
            <div className="ach-stat-lbl">GPA Achieved</div>
          </div>
          <div className="ach-stat-sep" />
          <div className="ach-stat">
            <div className="ach-stat-num">3.8</div>
            <div className="ach-stat-lbl">Overall CGPA</div>
          </div>
          <div className="ach-stat-sep" />
          <div className="ach-stat">
            <div className="ach-stat-num">{achievements.length}</div>
            <div className="ach-stat-lbl">Major Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
