import React, { useEffect, useRef, useState } from "react";
import heroImage from "../asset/profile.jpg";
import "../styles/Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  const [theme, setTheme] = useState(
    document.body.getAttribute("data-theme") || "dark",
  );

  // Watch for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.getAttribute("data-theme") || "dark");
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const isDark = theme !== "light";
    const dotColor = isDark ? "rgba(20, 137, 255, 0.55)" : "rgb(9, 107, 218)";
    const lineAlpha = isDark ? 0.75 : 0.85;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NUM = 40;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.9,
      dy: (Math.random() - 0.5) * 0.9,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y,
          );
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(94,170,247,${lineAlpha * (1 - d / 120)})`
              : `rgba(9,105,218,${lineAlpha * (1 - d / 120)})`;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-inner">
        {/* Left */}
        <div className="hero-left">
          <div className="hero-status">
            <span className="hero-status-dot" />
            Open to opportunities
          </div>

          <h1 className="hero-h1">
            Hey, I'm
            <span className="hero-name">Aayush.</span>
          </h1>

          <p className="hero-role">
            Web &amp; <em>Game Developer</em>
          </p>

          <p className="hero-desc">
            I build <strong>interactive web apps</strong> and{" "}
            <strong>games</strong> with React, JavaScript, C#, and Unity. I
            enjoy solving problems and turning ideas into things people can
            actually use.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn-primary">
              View My Work →
            </a>
            <a
              href="/pdf/Aayush_Shrestha_CV.pdf"
              download="Aayush-Shrestha-CV.pdf"
              className="hero-btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero-right">
          <div className="hero-photo-frame">
            <div className="hero-photo-ring hero-photo-ring--outer" />
            <div className="hero-photo-ring hero-photo-ring--inner" />
            <div className="hero-photo-morph">
              <img
                src={heroImage}
                alt="Aayush Shrestha"
                className="hero-photo-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
