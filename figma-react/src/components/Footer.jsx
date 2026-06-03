import React from 'react';

export default function Footer() {
  return (
    <div className="bottom-wrapper">
      <section className="cta-section">
        <h2>All voices are welcome here!</h2>
        <a href="#join" className="cta-link">Join us</a>
      </section>

      <footer className="footer-section">
        
        <div className="social-container">
           <a href="#fb">Facebook</a>
           <a href="#ig">Instagram</a>
           <a href="#tt">TikTok</a>
        </div>

        <div className="content-container">
          <p className="footer-tagline">Debate It. Don't Hate It.</p>
          
          <div className="contact-info">
            hello@figma.com<br />
            1750 Candyland Lane,<br />
            Portland, OR 97205<br />
            (646) 555-4567
          </div>
        </div>
        
        <div className="copyright-container">
          <p>Lincoln High School © 2025 All Rights Reserved</p>
        </div>

      </footer>
    </div>
  );
}