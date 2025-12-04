import React from "react";
import award1 from "../asset/mount-glasses.jpg";
import "../styles/Achievements.css";

const achievements = [
  {
    title: "Hackathon Winner",
    desc: "Won 1st place in a national-level hackathon by building an AI-powered solution.",
    date: "Dec 2024",
    image: award1,
    tag: "AI / ML",
  },
  {
    title: "Top Performer – Web Dev",
    desc: "Recognized for outstanding performance in modern frontend development.",
    date: "Aug 2023",
    image: award1,
    tag: "Frontend",
  },
  {
    title: "Game Design Showcase",
    desc: "My 2D indie game was featured in the Pokhara Game Expo.",
    date: "Jan 2025",
    image: award1,
    tag: "Game Dev",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-container">
      <h2 className="component-heading">Achievements</h2>

      <div className="achievements-grid">
        {achievements.map((ach, index) => (
          <div key={index} className="achievement-card">
            <img src={ach.image} alt={ach.title} className="achievement-img" />

            <div className="achievement-content">
              <h3>{ach.title}</h3>
              <p>{ach.desc}</p>

              <div className="achievement-bottom">
                <span className="ach-tag">{ach.tag}</span>
                <span className="ach-date">{ach.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
