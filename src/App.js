import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import "./styles//Home.css";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      {/* <div className="portfolio-section-divider"></div> */}

      <section id="skills">
        <Skills />
      </section>

      {/* <div className="portfolio-section-divider"></div> */}

      <section id="achievements">
        <Achievements />
      </section>

      {/* <div className="portfolio-section-divider"></div> */}

      <section id="projects">
        <Projects />
      </section>

      {/* <div className="portfolio-section-divider"></div> */}

      <section id="contact">
        <Contact />
      </section>
      {/* <h1>service_79ma28b</h1>
      <h1>template_wreu0bf</h1>
      <h1>bH5QW9n4OlfGwUGE6</h1> */}

      <Footer />
    </div>
  );
}

export default App;
