import React from 'react';

export default function RegionalResults() {
  return (
    <section className="regional-results-section">
      <div className="regional-header">
        <h2>2025 Regional Results</h2>
        <p className="results-subtitle">Scoresheets are available for download below.</p>
      </div>
      
      <div className="results-columns-container">
        
        <div className="events-column">
          <h3>Speech events</h3>
          <ul className="event-list">
            <li><a href="#di">Dramatic Interpretation (DI)</a></li>
            <li><a href="#duo">Duo Interpretation (DUO)</a></li>
            <li><a href="#poe">Poetry (POE)</a></li>
            <li><a href="#hi">Humorous Interpretation (HI)</a></li>
          </ul>
        </div>

        <div className="events-column">
          <h3>Debate events</h3>
          <ul className="event-list">
            <li><a href="#xdb">Extemporaneous Debate (XDB)</a></li>
            <li><a href="#ld">Lincoln-Douglas Debate (LD)</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
}