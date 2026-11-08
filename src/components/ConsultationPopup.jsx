import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Home, Gem, Users, ArrowRight } from 'lucide-react';

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('mejora_popup_dismissed_session');
    if (isDismissed) return;

    // Show automatically 5 seconds after homepage loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // exactly 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem('mejora_popup_dismissed_session', 'true');
  };

  const handleGetStarted = () => {
    handleDismiss();
    navigate('/consultation');
  };

  if (!isOpen) return null;

  return (
    <div className="consultation-popup-overlay" onClick={handleDismiss}>
      <div className="consultation-popup-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button in Top-Right Corner */}
        <button
          type="button"
          className="popup-dismiss-btn"
          onClick={handleDismiss}
          aria-label="Close Consultation Popup"
        >
          <X size={16} />
        </button>

        {/* Left Side: Modern Architectural Villa Photograph */}
        <div className="popup-villa-side">
          <img
            src="/images/popup-villa.jpg"
            alt="MeJora Luxury Architectural Villa"
            className="popup-villa-photo"
          />
          <div className="popup-side-gradient" />
        </div>

        {/* Right Side: MEJORA Branding, Copy & Gold Action Button */}
        <div className="popup-content-side">
          {/* Logo Symbol + Text */}
          <div className="popup-logo-unit">
            <div className="logo-pillars" style={{ transform: 'scale(0.85)', transformOrigin: 'left bottom' }}>
              <span className="pillar-bar pillar-1" />
              <span className="pillar-bar pillar-2" />
              <span className="pillar-bar pillar-3" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="popup-logo-text">MEJORA</span>
              <span className="popup-logo-sub">INTERIORS</span>
            </div>
          </div>

          {/* Heading & Subtitle */}
          <h2 className="popup-card-heading">Book a Consultation</h2>
          <p className="popup-card-intro">
            Let's create a space that feels like you.
          </p>

          <div className="popup-card-divider" />

          {/* Three Feature Highlights */}
          <div className="popup-feature-list">
            <div className="popup-feature-line">
              <div className="popup-feature-glyph">
                <Home size={18} strokeWidth={1.8} />
              </div>
              <span>Modern & Timeless Designs</span>
            </div>

            <div className="popup-feature-line">
              <div className="popup-feature-glyph">
                <Gem size={18} strokeWidth={1.8} />
              </div>
              <span>Premium Quality</span>
            </div>

            <div className="popup-feature-line">
              <div className="popup-feature-glyph">
                <Users size={18} strokeWidth={1.8} />
              </div>
              <span>Personalized Solutions</span>
            </div>
          </div>

          {/* Gold Action Button */}
          <button
            type="button"
            onClick={handleGetStarted}
            className="popup-cta-btn"
          >
            <span>Book a Consultation</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

