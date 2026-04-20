import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="about-header">
        <div className="section-container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Get to know the story behind Kawa Culture</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="section-container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Kawa Culture is a local Ugandan business focused on delivering fresh, 
                high-quality baked goods and refreshing beverages. Founded with a passion 
                for creating memorable taste experiences, we have grown from a small home 
                kitchen to a beloved local brand.
              </p>
              <p>
                Our journey began with a simple belief: that everyone deserves access to 
                delicious, freshly made treats that bring joy to their day. Today, we continue 
                to uphold that promise by using only the finest ingredients and traditional 
                recipes passed down through generations.
              </p>
              <p>
                Located in the heart of Kampala, we take pride in being part of our community 
                and contributing to the local economy by sourcing ingredients from Ugandan 
                farmers and suppliers whenever possible.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80" 
                alt="Baking with passion" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mission-vision-values">
        <div className="section-container">
          <div className="mvv-grid">
            {/* Mission */}
            <div className="mvv-card">
              <div className="mvv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To create exceptional baked goods and beverages that bring joy to our 
                customers while supporting local communities and maintaining the highest 
                standards of quality and freshness.
              </p>
            </div>

            {/* Vision */}
            <div className="mvv-card">
              <div className="mvv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become Uganda's most trusted and loved brand for fresh baked goods 
                and beverages, recognized for our commitment to quality, innovation, 
                and community impact.
              </p>
            </div>

            {/* Values */}
            <div className="mvv-card">
              <div className="mvv-icon">💎</div>
              <h3>Our Values</h3>
              <ul className="values-list">
                <li><strong>Quality:</strong> We never compromise on ingredients or process</li>
                <li><strong>Freshness:</strong> Everything is made fresh daily</li>
                <li><strong>Community:</strong> We support local farmers and suppliers</li>
                <li><strong>Integrity:</strong> Honest pricing and transparent practices</li>
                <li><strong>Innovation:</strong> Constantly improving our offerings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Process Section */}
      <section className="our-process">
        <div className="section-container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon">🌾</div>
              <h3>Sourcing</h3>
              <p>We carefully select the finest ingredients from trusted local suppliers</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon">👨‍🍳</div>
              <h3>Preparation</h3>
              <p>Our skilled bakers prepare each item with attention to detail</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon">🔥</div>
              <h3>Baking</h3>
              <p>Everything is baked fresh daily in small batches</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-icon">✅</div>
              <h3>Quality Check</h3>
              <p>Each item is inspected to ensure it meets our high standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Product Varieties</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Fresh Daily</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
