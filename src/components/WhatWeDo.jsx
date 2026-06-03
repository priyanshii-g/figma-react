import React from 'react';

export default function WhatWeDo() {
  return (
    <section className="what-we-do-section">
      
      <div className="what-we-do-title-container">
        <h2>What We Do</h2>
      </div>

      <div className="info-cards-container">
        
        <div className="info-card-hero">
          <span className="club-details">Club Details:</span>
          <p className="club-description">
            Speech and Debate is where you'll learn to think critically, speak confidently, and engage in exciting competitions. Here's everything you need to know:
          </p>
        </div>

        <div className="info-cards-secondary-container">
          <div className="info-card">
            <h3>What:</h3>
            <strong>Ready to find your voice?</strong>
            <p>This is a safe place to hone your skills with like-minded peers.</p>
          </div>
          <div className="info-card">
            <h3>Who:</h3>
            <strong>All Lincoln High students</strong>
            <p>Everyone, in any grade, is welcome to join.</p>
          </div>
          <div className="info-card">
            <h3>When:</h3>
            <strong>Wednesday, 3:30-4:30pm</strong>
            <p>You'll be out in time for the late bus home.</p>
          </div>
          <div className="info-card">
            <h3>Where:</h3>
            <strong>Room 204</strong>
            <p>We meet in Mr. Smith's room. He's our teacher sponsor.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}