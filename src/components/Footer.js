import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-icon">☕</span> Kawa Culture
          </h3>
          <p className="footer-description">
            Fresh Taste, Sweet Moments. Your destination for premium baked goods and refreshing beverages in Uganda.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/products" className="footer-link">Products</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Products</h4>
          <ul className="footer-links">
            <li><Link to="/products" className="footer-link">Cakes</Link></li>
            <li><Link to="/products" className="footer-link">Biscuits</Link></li>
            <li><Link to="/products" className="footer-link">Sweets</Link></li>
            <li><Link to="/products" className="footer-link">Ice Cubes</Link></li>
            <li><Link to="/products" className="footer-link">Milkshakes</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">📞</span>
              <span>+256 700 000000</span>
            </li>
            <li>
              <span className="contact-icon">✉️</span>
              <span>kawaculture@gmail.com</span>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <span>Kampala, Uganda</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Kawa Culture. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
