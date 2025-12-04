import React from "react";
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
