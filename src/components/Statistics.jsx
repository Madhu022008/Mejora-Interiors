import React, { useState, useEffect } from 'react';
import { Gem, Home, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Statistics() {
  const navigate = useNavigate();

  // Smooth Counting Animation
  const [counts, setCounts] = useState({ years: 0, clients: 0, awards: 0 });

  useEffect(() => {
    const duration = 1400; // ms
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        years: Math.round(15 * ease),
        clients: Math.round(500 * ease),
        awards: Math.round(10 * ease),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-stats-panel">
      {/* 15+ Years Experience */}
      <div className="stat-box" onClick={() => navigate('/about')}>
        <div className="stat-icon-wrap">
          <Gem size={24} strokeWidth={1.8} />
        </div>
        <div className="stat-content">
          <span className="stat-digit">{counts.years}+</span>
          <span className="stat-text">Years Experience</span>
        </div>
      </div>

      <div className="stat-col-divider" />

      {/* 500+ Happy Clients */}
      <div className="stat-box" onClick={() => navigate('/portfolio')}>
        <div className="stat-icon-wrap">
          <Home size={24} strokeWidth={1.8} />
        </div>
        <div className="stat-content">
          <span className="stat-digit">{counts.clients}+</span>
          <span className="stat-text">Happy Clients</span>
        </div>
      </div>

      <div className="stat-col-divider" />

      {/* 10+ Awards Won */}
      <div className="stat-box" onClick={() => navigate('/about')}>
        <div className="stat-icon-wrap">
          <Trophy size={24} strokeWidth={1.8} />
        </div>
        <div className="stat-content">
          <span className="stat-digit">{counts.awards}+</span>
          <span className="stat-text">Awards Won</span>
        </div>
      </div>
    </div>
  );
}

