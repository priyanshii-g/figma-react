import React from 'react';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <span className="hero-eyebrow">Committed to all students in need</span>
        <h1>Lincoln High School Speech and Debate Club</h1>
        <a href="#join" className="hero-link">Join us</a>
      </div>
      
      <div className="hero-image-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1240&auto=format&fit=crop" 
          alt="Row of books in a library" 
          className="hero-image"
        />
      </div>
    </div>
  );
}