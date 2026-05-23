import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });

      setSuccessMessage('Thank you for your message! I will get back to you soon.');
      setTimeout(() => setSuccessMessage(''), 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong, please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info glass-panel" data-aos="fade-right" data-aos-delay="200">
            <h3>Let's Talk</h3>
            <p>Feel free to reach out for collaborations, job opportunities, or just a friendly hello!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaEnvelope className="contact-icon" />
                </div>
                <a href="mailto:aakarshanverma26@gmail.com">aakarshanverma26@gmail.com</a>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaPhoneAlt className="contact-icon" />
                </div>
                <a href="tel:+917780883009">+91 7780883009</a>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <span>Jammu, India</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/AakarshanVerma/Portfolio_Aakarshan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-btn">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aakarshan-verma-5b464026b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <form className="contact-form glass-panel" onSubmit={handleSubmit} noValidate data-aos="fade-left" data-aos-delay="300">
            <div className="terminal-header">
              <span className="terminal-dot-red"></span>
              <span className="terminal-title">MESSAGE SYSTEM // PORT-5000</span>
            </div>

            <div className="form-group floating-group">
              <input
                type="text"
                name="name"
                id="contact-name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                aria-label="Name"
              />
              <label htmlFor="contact-name" className="floating-label">Your Name</label>
            </div>
            
            <div className="form-group floating-group">
              <input
                type="email"
                name="email"
                id="contact-email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                aria-label="Email"
              />
              <label htmlFor="contact-email" className="floating-label">Your Email</label>
            </div>

            <div className="form-group floating-group">
              <input
                type="text"
                name="subject"
                id="contact-subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder=" "
                aria-label="Subject"
              />
              <label htmlFor="contact-subject" className="floating-label">Subject</label>
            </div>

            <div className="form-group floating-group">
              <input
                type="tel"
                name="phone"
                id="contact-phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder=" "
                pattern="\d{10}"
                title="Please enter a valid 10-digit phone number"
                aria-label="Phone Number"
              />
              <label htmlFor="contact-phone" className="floating-label">Phone Number</label>
            </div>

            <div className="form-group floating-group">
              <textarea
                name="message"
                id="contact-message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                rows="6"
                aria-label="Message"
              ></textarea>
              <label htmlFor="contact-message" className="floating-label">Your Message</label>
            </div>

            {successMessage && <p className="success-message">{successMessage}</p>}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
