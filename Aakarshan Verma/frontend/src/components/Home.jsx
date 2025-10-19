import React from "react";
import "../styles/Home.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-content">
          <div className="text-zone">
            <p className="intro-text greeting">Hi, my name is</p>
            <h1 className="name">Aakarshan Verma</h1>
            <h2 className="role">DevOps | Cybersecurity | IoT Enthusiast</h2>
            <p className="subtitle">
              Passionate about building secure, scalable systems and integrating DevOps practices
              with IoT and AI for smarter solutions.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="primary-btn">View Projects</a>
              <a href="#contact" className="secondary-btn">Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
