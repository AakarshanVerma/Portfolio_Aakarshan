import React, { useState, useEffect, useCallback } from "react";
import "../styles/Navbar.css";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for navbar shadow or color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-container">

        {/* Aakarshan Verma logo */}
        <a
          href="#home"
          className="nav-logo"
          onClick={handleLinkClick}
          aria-label="Homepage"
        >
          Aakarshan Verma
        </a>

        {/* Navigation Links */}
        <ul
          className={`nav-links ${isMenuOpen ? "active" : ""}`}
          id="primary-navigation"
        >
          <li>
            <a href="#home" className="nav-item" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-item" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-item" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Aakarshan%20verma.pdf"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* 🌗 Dark/Light Mode Toggle + Menu Button */}
        <div className="nav-right">
          <DarkModeToggle />

          <button
            className={`menu-btn ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
