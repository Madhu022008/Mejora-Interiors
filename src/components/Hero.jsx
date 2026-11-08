import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Home, Gem, Users, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Statistics from './Statistics';

export default function Hero() {
  const navigate = useNavigate();

  // Consultation card drop-down animation states (starts at exactly 3 seconds)
  const [isCardMounted, setIsCardMounted] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCardDismissed, setIsCardDismissed] = useState(false);

  useEffect(() => {
    // Wait exactly 3 seconds after homepage loads
    const timer = setTimeout(() => {
      setIsCardMounted(true);
      // Slight tick to trigger the smooth CSS top-to-bottom drop animation
      requestAnimationFrame(() => {
        setIsCardVisible(true);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismissCard = (e) => {
    e.stopPropagation();
    setIsCardVisible(false);
    setTimeout(() => {
      setIsCardDismissed(true);
    }, 600);
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-viewport" id="home">
      {/* 1. Base Luxury Living Room Photograph */}
      <div className="hero-bg-base" />

      {/* 2. Subtle Elegant Ambient Lighting Glow */}
      <div className="hero-ambient-glow" />

      {/* 3. Vignette & Contrast Shadows */}
      <div className="hero-vignette-overlay" />
      <div className="hero-bottom-shadow" />

      {/* 4. Main Hero Composition (Left: Text & Stats | Right: Floating Consultation Card) */}
      <div className="hero-inner-content">
        {/* Left Side: Brand Identity, Heading & Statistics */}
        <div className="hero-text-block">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow-wrap">
            <span className="hero-eyebrow-text">LUXURY INTERIOR DESIGN</span>
            <div className="hero-eyebrow-line" />
          </div>

          {/* Main Editorial Heading */}
          <h1 className="hero-main-heading">
            Dream. Design. <br />
            <span>Live </span>
            <span className="gold-better">Better.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subheading">
            Transform your space into a masterpiece with MeJora Interiors – where elegance meets comfort.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions-row">
            <button
              type="button"
              onClick={() => navigate('/portfolio')}
              className="btn-gold-primary"
            >
              <span>Explore Our Portfolio</span>
              <ArrowRight size={15} />
            </button>

            <button
              type="button"
              onClick={() => navigate('/consultation')}
              className="btn-dark-secondary"
            >
              <Calendar size={15} color="#C5A46D" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Statistics Section (Always Visible without Scrolling) */}
          <Statistics />
        </div>

        {/* Right Side: INLINE Consultation Card (Drops after 3s - Matches Uploaded Screenshot) */}
        {isCardMounted && !isCardDismissed && (
          <div className={`hero-inline-card-wrap ${isCardVisible ? 'card-dropped' : ''}`}>
            <div className="hero-inline-consultation-card">
              {/* Close Button */}
              <button
                type="button"
                className="inline-card-close-btn"
                onClick={handleDismissCard}
                aria-label="Dismiss consultation preview"
              >
                <X size={15} />
              </button>

              {/* Left Side: Modern Luxury Villa Photograph */}
              <div className="inline-card-villa-side">
                <img
                  src="/images/popup-villa.jpg"
                  alt="Modern Luxury Villa Architecture"
                  className="inline-card-villa-img"
                />
                <div className="inline-card-img-fade" />
              </div>

              {/* Right Side: MEJORA Branding & Details */}
              <div className="inline-card-content-side">
                {/* Brand Logo */}
                <div className="inline-card-brand">
                  <div className="logo-pillars" style={{ transform: 'scale(0.8)' }}>
                    <span className="pillar-bar pillar-1" />
                    <span className="pillar-bar pillar-2" />
                    <span className="pillar-bar pillar-3" />
                  </div>
                  <div>
                    <span className="inline-card-brand-title">MEJORA</span>
                    <span className="inline-card-brand-sub">INTERIORS</span>
                  </div>
                </div>

                {/* Heading & Subtitle */}
                <h3 className="inline-card-heading">Book a Consultation</h3>
                <p className="inline-card-sub">Let's create a space that feels like you.</p>

                <div className="inline-card-divider" />

                {/* Feature List */}
                <div className="inline-card-features">
                  <div className="inline-feature-item">
                    <Home size={15} color="#C5A46D" />
                    <span>Modern & Timeless Designs</span>
                  </div>
                  <div className="inline-feature-item">
                    <Gem size={15} color="#C5A46D" />
                    <span>Premium Quality</span>
                  </div>
                  <div className="inline-feature-item">
                    <Users size={15} color="#C5A46D" />
                    <span>Personalized Solutions</span>
                  </div>
                </div>

                {/* Gold Action Button */}
                <button
                  type="button"
                  onClick={() => navigate('/consultation')}
                  className="inline-card-cta-btn"
                >
                  <span>Get Started</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5. Scroll Down Mouse Widget (Centered with downward chevron) */}
      <button
        type="button"
        className="scroll-mouse-widget"
        onClick={handleScrollDown}
        aria-label="Scroll to discover"
      >
        <div className="mouse-contour">
          <div className="mouse-pip" />
        </div>
        <ChevronDown size={14} className="mouse-chevron" />
      </button>
    </section>
  );
}
