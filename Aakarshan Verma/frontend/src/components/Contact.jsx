import React, { useState } from 'react';
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
      // Simulate API call or email sending (replace with real API call)
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

      setSuccessMessage('Thank you for your message!');
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
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            
            <a
              href="https://docs.google.com/forms/d/e/16Rz8zgoBmi7jqlz2uTml7DdoKYOs3-Zcsz_uIUkOe7M/viewform"
              className="google-form-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i>
              Fill Google Form
            </a>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:aakarshanverma26@gmail.com">aakarshanverma26@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+917780883009">+91 7780883009</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Jammu,India</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/AakarshanVerma/Portfolio_Aakarshan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/aakarshan-verma-5b464026b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                aria-label="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                aria-label="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                aria-label="Subject"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                pattern="\d{10}"
                title="Please enter a valid 10-digit phone number"
                aria-label="Phone Number"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="6"
                aria-label="Message"
              ></textarea>
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
