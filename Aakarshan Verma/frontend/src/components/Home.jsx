import React from 'react';
import '../styles/Home.css';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="text-zone">
          <div className="intro-text">
            <p className="greeting">Hi there,</p>
            <h1 className="name">I'm Aakarshan Verma</h1>
            <h2 className="role">DevOps Engineer | Cyber Security Enthusiast</h2>
            <p className="subtitle">
              Building & Scaling Apps | Full Stack + DevOps | Solution-Oriented
            </p>
            <p className="ml-note">
              Currently exploring machine learning applications in real-world problems — combining AI with web technologies to create smarter apps.
            </p>
          </div>

          {/* Add social links here */}
          <div className="social-links">
            <a 
              href="https://www.instagram.com/__noxus_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/in/aakarshan-verma-5b464026b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="primary-btn">View My Work</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
