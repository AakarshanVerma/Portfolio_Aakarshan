import React from 'react';
import profilePic from '../assets/Aakarshan.png';
import '../styles/AboutMe.css';

const AboutMe = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 92 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js & Express', level: 88 },
        { name: 'Python & FastAPI', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL & Supabase', level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker & Kubernetes', level: 82 },
        { name: 'CI/CD & Jenkins', level: 80 },
        { name: 'Terraform & Linux', level: 85 },
        { name: 'AWS Cloud Basics', level: 75 }
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        
        <div className="about-content">
          <div className="about-image" data-aos="fade-right" data-aos-delay="200">
            <img 
              src={profilePic}
              alt="Aakarshan Verma" 
              className="profile-image"
            />
            <div className="hud-scanner"></div>
            <div className="image-glow-border"></div>
          </div>

          <div className="about-text" data-aos="fade-left" data-aos-delay="300">
            <h3>Hi, I'm <span className="highlight">Aakarshan Verma</span></h3>
            <p className="bio">
              I’m a passionate Full Stack Developer and DevOps enthusiast with a keen interest in AI/ML, Cybersecurity, and IoT. I enjoy building elegant, scalable, and intelligent web applications that solve real-world problems. Constantly exploring new technologies, I thrive in collaborative environments and aim to integrate smart, secure, and efficient solutions into modern applications.
            </p>

            <div className="skills-section">
              <h3>Technical Skills</h3>
              <div className="skills-container">
                {skillCategories.map((category, index) => (
                  <div key={index} className="skill-category glass-panel">
                    <h4>{category.title}</h4>
                    <div className="skills-progression-list">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="skill-progression">
                          <div className="skill-info-row">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percent">{skill.level}%</span>
                          </div>
                          <div className="skill-bar-outer">
                            <div 
                              className="skill-bar-inner" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="education-section glass-panel">
              <h3>Education</h3>
              <div className="timeline">
                <div className="education-item">
                  <div className="timeline-dot"></div>
                  <h4>Bachelor of Engineering in Computer Science and Engineering</h4>
                  <p className="school">Model Institute of Engineering and Technology, Jammu</p>
                  <p className="year">2022 - Present</p>
                </div>
                
                <div className="education-item">
                  <div className="timeline-dot"></div>
                  <h4>Senior Secondary (XII), Science</h4>
                  <p className="school">Indira Public School</p>
                  <p className="year">Completed June 2022</p>
                </div>
              </div>
            </div>

            <div className="cta-buttons">
              <a 
                href="/RESUME.pdf" 
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
