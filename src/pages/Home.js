import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Kawa Culture</h1>
          <p className="hero-tagline">Fresh Taste, Sweet Moments</p>
          <p className="hero-description">
            Discover the finest selection of freshly baked goods and refreshing beverages 
            crafted with love in the heart of Uganda.
          </p>
          <Link to="/products" className="hero-button">
            Explore Our Products
          </Link>
        </div>
        <div className="hero-image-container">
          <img 
            src="/images/group picture.jpeg"
            alt="Kawa Culture team" 
            className="hero-image"
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="section-container">
          <h2 className="section-title">Welcome to Kawa Culture</h2>
          <p className="intro-text">
            At Kawa Culture, we believe in creating memorable moments through exceptional taste. 
            Our passion for quality drives us to use only the finest ingredients, sourced locally 
            whenever possible, to bring you an authentic Ugandan culinary experience.
          </p>
          <p className="intro-text">
            From our signature cakes to refreshing milkshakes, every item is crafted with care 
            and attention to detail. Whether you're celebrating a special occasion or simply 
            treating yourself, we're here to make every moment sweeter.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="section-container">
          <h2 className="section-title">Our Specialties</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">🎂</div>
              <h3>Cakes</h3>
              <p>Delicious cakes for every celebration</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🍪</div>
              <h3>Biscuits</h3>
              <p>Crunchy, freshly baked biscuits</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🍬</div>
              <h3>Sweets</h3>
              <p>Sweet treats to brighten your day</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🧊</div>
              <h3>Ice Cubes</h3>
              <p>Premium quality ice for your drinks</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🥤</div>
              <h3>Milkshakes</h3>
              <p>Refreshing milkshakes in various flavors</p>
            </div>
          </div>
          <div className="center-button">
            <Link to="/products" className="view-all-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="section-container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <h3>Fresh Daily</h3>
              <p>All our products are baked fresh every day using quality ingredients</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌿</div>
              <h3>Local Ingredients</h3>
              <p>We source ingredients from local Ugandan suppliers</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">❤️</div>
              <h3>Made with Love</h3>
              <p>Every item is crafted with passion and attention to detail</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery across Kampala</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
