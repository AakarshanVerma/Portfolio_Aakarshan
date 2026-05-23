import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const roles = [
  "DevOps Specialist",
  "Cybersecurity Enthusiast",
  "IoT Engineer",
  "Full Stack Developer"
];

const Home = () => {
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const activeRole = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setRoleText(activeRole.substring(0, roleText.length + 1));
        setTypingSpeed(80);

        if (roleText === activeRole) {
          setIsDeleting(true);
          setTypingSpeed(2200); // Hold role for 2.2 seconds
        }
      } else {
        setRoleText(activeRole.substring(0, roleText.length - 1));
        setTypingSpeed(30);

        if (roleText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // Wait slightly before typing next
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="home-section" id="home">
      {/* Bio-electric background energy fields */}
      <div className="energy-container">
        <div className="energy-field energy-crimson"></div>
        <div className="energy-field energy-gold"></div>
      </div>

      <div className="home-container">
        <div className="home-content" data-aos="fade-up" data-aos-delay="200">
          <div className="text-zone">
            <p className="intro-text greeting">Hi, my name is</p>
            <h1 className="name">Aakarshan Verma</h1>
            <h2 className="role">
              <span className="bracket-left">[</span>
              <span className="typewriter-text">{roleText}</span>
              <span className="typewriter-cursor">_</span>
              <span className="bracket-right">]</span>
            </h2>
            <p className="subtitle">
              Passionate about building secure, scalable systems and integrating DevOps practices
              with IoT and AI for smarter, future-ready solutions.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="primary-btn">
                <span className="btn-bracket">[ </span>
                View Projects
                <span className="btn-bracket"> ]</span>
              </a>
              <a href="#contact" className="secondary-btn">
                <span className="btn-bracket">[ </span>
                Contact Me
                <span className="btn-bracket"> ]</span>
              </a>
            </div>
            <div className="social-links">
              <a 
                href="https://github.com/AakarshanVerma/Portfolio_Aakarshan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/aakarshan-verma-5b464026b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
