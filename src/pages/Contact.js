import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '256747266821';
    const text = `Hello Kawa Culture!\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <div className="section-container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Have a question or want to place a custom order? Reach out to us 
                using any of the methods below. We're here to help!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-detail">
                    <h3>Phone</h3>
                    <p>0747266821</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-detail">
                    <h3>Email</h3>
                    <p>sarahasiimire42@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-detail">
                    <h3>Location</h3>
                    <p>Makerere University</p>
                    <p>Food Science and Technology Incubation Centre</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-detail">
                    <h3>Working Hours</h3>
                    <p>Monday - Saturday: 8AM - 8PM</p>
                    <p>Sunday: 10AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <span className="social-icon" role="button" tabIndex="0" title="Facebook">📘</span>
                  <span className="social-icon" role="button" tabIndex="0" title="Instagram">📷</span>
                  <span className="social-icon" role="button" tabIndex="0" title="Twitter">🐦</span>
                  <span className="social-icon" role="button" tabIndex="0" title="WhatsApp">💬</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <span className="map-icon">🗺️</span>
            <p>Interactive Map</p>
            <p className="map-address">Makerere University, Food Science and Technology Incubation Centre</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you offer delivery?</h3>
              <p>Yes, we offer delivery services within Kampala. Delivery fees vary based on location.</p>
            </div>
            <div className="faq-item">
              <h3>Can I place a custom order?</h3>
              <p>Absolutely! We love creating custom cakes and treats for special occasions. Contact us at least 48 hours in advance.</p>
            </div>
            <div className="faq-item">
              <h3>What are your payment options?</h3>
              <p>We accept cash, mobile money (MTN Mobile Money, Airtel Money), and bank transfers.</p>
            </div>
            <div className="faq-item">
              <h3>Do you have vegan options?</h3>
              <p>Yes, we offer a selection of vegan-friendly products. Please ask about our current vegan options.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
