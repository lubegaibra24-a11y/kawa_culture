import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const productsData = [
  // Cakes
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    description: "Rich, moist chocolate cake with creamy fudge frosting",
    price: 45000,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
    category: "Cakes"
  },
  {
    id: 2,
    name: "Vanilla Celebration Cake",
    description: "Classic vanilla sponge with buttercream frosting",
    price: 40000,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
    category: "Cakes"
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    description: "Velvety red cake with cream cheese frosting",
    price: 50000,
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&q=80",
    category: "Cakes"
  },
  // Biscuits
  {
    id: 4,
    name: "Butter Cookies",
    description: "Crispy, buttery cookies that melt in your mouth",
    price: 8000,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
    category: "Biscuits"
  },
  {
    id: 5,
    name: "Chocolate Chip Cookies",
    description: "Classic cookies loaded with chocolate chips",
    price: 10000,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80",
    category: "Biscuits"
  },
  {
    id: 6,
    name: "Oatmeal Raisin Cookies",
    description: "Healthy oatmeal cookies with sweet raisins",
    price: 9000,
    image: "https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?w=400&q=80",
    category: "Biscuits"
  },
  // Sweets
  {
    id: 7,
    name: "Assorted Candy Box",
    description: "A delightful mix of colorful candies",
    price: 12000,
    image: "https://images.unsplash.com/photo-1582058993795-4f335a8005d6?w=400&q=80",
    category: "Sweets"
  },
  {
    id: 8,
    name: "Chocolate Truffles",
    description: "Decadent chocolate truffles in various flavors",
    price: 15000,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=80",
    category: "Sweets"
  },
  {
    id: 9,
    name: "Fruit Jellies",
    description: "Soft, fruity jelly candies",
    price: 7000,
    image: "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=400&q=80",
    category: "Sweets"
  },
  // Ice Cubes
  {
    id: 10,
    name: "Premium Ice Cubes (2kg)",
    description: "Crystal clear ice cubes for your beverages",
    price: 5000,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80",
    category: "Ice Cubes"
  },
  {
    id: 11,
    name: "Party Ice Pack (5kg)",
    description: "Large pack perfect for parties and events",
    price: 10000,
    image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?w=400&q=80",
    category: "Ice Cubes"
  },
  {
    id: 12,
    name: "Crushed Ice (3kg)",
    description: "Finely crushed ice for smoothies and cocktails",
    price: 7000,
    image: "https://images.unsplash.com/photo-1516684669134-de6d7c47743b?w=400&q=80",
    category: "Ice Cubes"
  },
  // Milkshakes
  {
    id: 13,
    name: "Strawberry Milkshake",
    description: "Creamy strawberry milkshake with fresh berries",
    price: 8000,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
    category: "Milkshakes"
  },
  {
    id: 14,
    name: "Chocolate Milkshake",
    description: "Rich chocolate milkshake topped with whipped cream",
    price: 9000,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&q=80",
    category: "Milkshakes"
  },
  {
    id: 15,
    name: "Vanilla Milkshake",
    description: "Classic vanilla milkshake with a cherry on top",
    price: 7500,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&q=80",
    category: "Milkshakes"
  },
  {
    id: 16,
    name: "Banana Milkshake",
    description: "Fresh banana blended with creamy milk",
    price: 8500,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80",
    category: "Milkshakes"
  }
];

const categories = ["All", "Cakes", "Biscuits", "Sweets", "Ice Cubes", "Milkshakes"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="products-header">
        <div className="section-container">
          <h1 className="page-title">Our Products</h1>
          <p className="page-description">
            Discover our delicious range of freshly baked goods and refreshing beverages. 
            Each item is crafted with care using the finest ingredients.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="section-container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="section-container">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="no-products">No products found in this category.</p>
          )}
        </div>
      </section>

      {/* Special Order Section */}
      <section className="special-order">
        <div className="section-container">
          <div className="special-order-content">
            <h2>Need a Custom Order?</h2>
            <p>
              Looking for something specific? We accept custom orders for special occasions. 
              Contact us to discuss your requirements.
            </p>
            <a href="/contact" className="contact-button">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
