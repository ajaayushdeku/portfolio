import React, { useEffect, useRef, useState } from "react";
import heroImage from "../asset/high.jpg";
import "../styles/Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  // State to store current theme from body
  const [theme, setTheme] = useState(
    document.body.getAttribute("data-theme") || "dark",
  );

  useEffect(() => {
    // Function to update theme when body attribute changes
    const observer = new MutationObserver(() => {
      setTheme(document.body.getAttribute("data-theme") || "dark");
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const numParticles = 40;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set colors based on theme
      const particleColor =
        theme === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0, 0, 0, 0.7)";
      const lineColor =
        theme === "dark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Draw connecting lines
        particles.forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [theme]);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-bg" />

      <div className="hero-content-wrapper">
        <div className="hero-left">
          <p className="tag">Still in Progress</p>

          <h1>
            Hey, I'm <span>Aayush</span>
          </h1>

          <p className="description">
            I am a passionate <strong>Web & Game Developer</strong> creating
            interactive, user-friendly, and visually appealing digital
            experiences. I specialize in modern technologies like{" "}
            <strong>React.js, JavaScript, HTML, CSS</strong>, and{" "}
            <strong>C#</strong>. <br />I enjoy solving problems, learning new
            tech, and turning ideas into functional applications.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary">
              View My Work
            </a>
            <a
              href="/pdf/Aayush_Shrestha_CV.pdf"
              download="Aayush-Shrestha-CV.pdf"
              className="secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-container">
            <img src={heroImage} alt="Hero" className="hero-about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
