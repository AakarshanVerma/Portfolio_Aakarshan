import React from 'react';
import profilePic from '../assets/Aakarshan.png'; // Update with your actual image filename
import '../styles/AboutMe.css';

const AboutMe = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Figma', 'Postman', 'Supabase', 'FastAPI', 'CI/CD', 'AWS Basics', 'Linux', 'Jenkins', 'Kubernetes', 'Terraform']
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src={profilePic}
              alt="Aakarshan Verma" 
              className="profile-image"
            />
          </div>

          <div className="about-text">
            <h3>Hi, I'm <span className="highlight">Aakarshan Verma</span></h3>
            <p className="bio">
              I’m a passionate Full Stack Developer and DevOps enthusiast with a keen interest in AI/ML, Cybersecurity, and IoT. I enjoy building elegant, scalable, and intelligent web applications that solve real-world problems. Constantly exploring new technologies, I thrive in collaborative environments and aim to integrate smart, secure, and efficient solutions into modern applications.
            </p>

            <div className="skills-section">
              <h3>Technical Skills</h3>
              <div className="skills-container">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    {skills.frontend.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    {skills.backend.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Tools & Technologies</h4>
                  <ul>
                    {skills.tools.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Bachelor of Engineering in Computer Science and Engineering</h4>
                <p>Model Institute of Engineering and Technology, Jammu</p>
                <p>2022 - Present</p>
              </div>
              
              <div className="education-item">
                <h4>Senior Secondary (XII), Science</h4>
                <p>Indira Public School</p>
                <p>Completed June 2022</p>
              </div>
            </div>

            <div className="cta-buttons">
              <a 
                href="https://drive.google.com/file/d/1voQeN6TCgRfFxsrIoj-LjPc_pPC1Lobb/view?usp=drive_link" 
                className="resume-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a href="#contact" className="contact-button">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
