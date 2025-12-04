import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
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

      {/* <section id="about">
        <About />
      </section> */}

      <section id="skills">
        <Skills />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
