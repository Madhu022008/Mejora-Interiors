import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
    if (onClick) onClick(e);
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      className="nav-logo-link"
      style={{ transform: clicked ? 'scale(1.12)' : undefined }}
      aria-label="MEJORA INTERIORS Homepage"
    >
      <div className="logo-pillars">
        <span className="pillar-bar pillar-1" />
        <span className="pillar-bar pillar-2" />
        <span className="pillar-bar pillar-3" />
      </div>

      <div className="logo-words">
        <span className="logo-title">MEJORA</span>
        <span className="logo-sub">INTERIORS</span>
      </div>
    </Link>
  );
}

