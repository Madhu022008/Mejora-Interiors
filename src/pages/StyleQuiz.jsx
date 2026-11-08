import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, X, Sparkles, RotateCcw, Check, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StyleQuiz() {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);

  const questions = [
    {
      question: 'Which living atmosphere feels most like home to you?',
      options: [
        { label: 'Clean Lines & Calm Serenity', desc: 'Warm ivory tones, low-profile furniture, unpolished travertine, decluttered air.', style: 'Modern Minimalist' },
        { label: 'Dramatic Architectural Luxury', desc: 'Bold Calacatta marble monoliths, brushed bronze accents, statement lighting.', style: 'Contemporary Luxury' },
        { label: 'Organic Warmth & Biophilic Light', desc: 'Natural white oak slats, linen drapery, textured pottery, indoor greenery.', style: 'Modern Organic' },
        { label: 'Timeless Classical Sophistication', desc: 'Fluted walnut paneling, heritage moldings, velvet upholstery, deep neutral tones.', style: 'Classic Elegance' }
      ]
    },
    {
      question: 'What materials do you find yourself instinctively drawn to?',
      options: [
        { label: 'Honed Travertine & Neutral Wool', desc: 'Natural porous stone with soft textural tactile warmth.', style: 'Modern Minimalist' },
        { label: 'Bookmatched Marble & Dark Bronze', desc: 'Rich contrasting architectural surfaces with polished precision.', style: 'Contemporary Luxury' },
        { label: 'Pale Oak & Belgian Linen', desc: 'Light, breathable, organic finishes that age gracefully.', style: 'Modern Organic' },
        { label: 'Smoked Walnut & Antiqued Brass', desc: 'Deep historic tones that exude bespoke craftsmanship.', style: 'Classic Elegance' }
      ]
    },
    {
      question: 'What is your primary lighting aspiration for evenings?',
      options: [
        { label: 'Concealed 2700K Indirect Glow', desc: 'Hidden ceiling coves that softly bathe walls in gentle ambient light.', style: 'Modern Minimalist' },
        { label: 'Sculptural Statement Chandelier', desc: 'Dramatic focal fixtures with warm directional mood spots.', style: 'Contemporary Luxury' },
        { label: 'Layered Ceramic Lamps & Sconces', desc: 'Cozy pools of warm light casting soft organic shadows.', style: 'Modern Organic' },
        { label: 'Intimate Symmetrical Wall Torches', desc: 'Classical architectural illumination highlighting fine art.', style: 'Classic Elegance' }
      ]
    }
  ];

  const resultsData = {
    'Modern Minimalist': {
      title: 'Modern Minimalist',
      tagline: 'Quiet Architectural Purity & Enduring Restraint',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      description: 'Your aesthetic is rooted in the elegance of negative space. You value unpolished Italian travertine, custom-milled oak joinery, and concealed 2700K lighting over unnecessary decoration.',
      materials: ['Honed Travertine', 'White Oak Slats', 'Raw Belgian Linen', 'Warm Plaster']
    },
    'Contemporary Luxury': {
      title: 'Contemporary Luxury',
      tagline: 'Sculptural Precision & High-Contrast Drama',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      description: 'Your sanctuary balances bold architectural statements with bespoke luxury. You appreciate Calacatta marble monoliths, brushed bronze accents, and curated collector furniture.',
      materials: ['Calacatta Gold Marble', 'Brushed Champagne Bronze', 'Architectural Glazing', 'Fluted Joinery']
    },
    'Modern Organic': {
      title: 'Modern Organic',
      tagline: 'Biophilic Calm & Tactile Earthiness',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
      description: 'You thrive in spaces that celebrate nature indoors. Lime-washed walls, textured ceramics, and lush greenery create a deeply grounding and restful sanctuary.',
      materials: ['Lime-Wash Plaster', 'Natural Clay Ceramics', 'Unfinished Cedar', 'Woven Bouclé']
    },
    'Classic Elegance': {
      title: 'Classic Elegance',
      tagline: 'Timeless Heritage & Rich Textural Depth',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
      description: 'You cherish timeless proportions and rich materials. Smoked walnut paneling, heritage moldings, and bespoke cabinetry create an ambiance of distinguished warmth.',
      materials: ['Smoked Walnut', 'Antiqued Brass', 'Custom Crown Moldings', 'Fine Wool Rugs']
    }
  };

  const handleSelectOption = (style) => {
    const updatedAnswers = { ...selectedAnswers, [currentStep]: style };
    setSelectedAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate archetype
      const styleCounts = {};
      Object.values(updatedAnswers).forEach((s) => {
        styleCounts[s] = (styleCounts[s] || 0) + 1;
      });
      let winningStyle = 'Modern Minimalist';
      let maxCount = 0;
      Object.entries(styleCounts).forEach(([s, count]) => {
        if (count > maxCount) {
          maxCount = count;
          winningStyle = s;
        }
      });
      setQuizResult(resultsData[winningStyle] || resultsData['Modern Minimalist']);
    }
  };

  const handleResetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setQuizResult(null);
  };

  return (
    <div className="ref-page-wrap">
      {/* 1. Style Quiz Hero Section (Exact Match to Reference Image Panel 5) */}
      <section className="ref-quiz-section">
        <ScrollReveal>
          <div className="ref-quiz-hero-card">
            <div className="ref-quiz-hero-overlay" />

            {/* Left Content */}
            <div className="ref-quiz-hero-left">
              <span className="ref-pill-label">FIND YOUR STYLE</span>
              <h1 className="ref-heading" style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)', marginBottom: '1rem' }}>
                Style Quiz
              </h1>
              <p className="ref-subtitle" style={{ color: '#44403C', maxWidth: '28rem', marginBottom: '2rem' }}>
                Discover your interior style in just a few clicks!
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    handleResetQuiz();
                    setIsQuizModalOpen(true);
                  }}
                  className="ref-dark-btn"
                >
                  <span>Take the Quiz</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right: Floating Result Card (Exact Reference Image Panel 5 Match) */}
            <div className="ref-quiz-floating-result">
              <span className="ref-floating-label">Your Style:</span>
              <h3 className="ref-floating-title">Modern Minimalist</h3>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Modern Minimalist Interior Style Preview"
                className="ref-floating-img"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Style Showcase Cards Below */}
        <div style={{ marginTop: '2rem' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="ref-pill-label">ARCHITECTURAL ARCHETYPES</span>
              <h2 className="ref-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                Discover Our Signature Aesthetics
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {Object.values(resultsData).map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 80}>
                <div style={{
                  background: 'rgba(22, 19, 16, 0.94)',
                  border: '1.5px solid rgba(197, 164, 109, 0.25)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.65)',
                  textAlign: 'left'
                }}>
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Archetype {idx + 1}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFBF5', margin: '0.35rem 0 0.5rem 0' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#D6CEC3', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {item.tagline}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setQuizResult(item);
                        setIsQuizModalOpen(true);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-gold)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: 0
                      }}
                    >
                      <span>Explore Aesthetic</span>
                      <ArrowRight size={14} color="var(--color-gold)" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quiz Modal Workflow */}
      {isQuizModalOpen && (
        <div
          className="ref-quiz-modal-overlay"
          onClick={() => setIsQuizModalOpen(false)}
        >
          <div
            className="ref-quiz-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="ref-quiz-close-btn"
              onClick={() => setIsQuizModalOpen(false)}
            >
              <X size={18} />
            </button>

            {!quizResult ? (
              /* Quiz Step Questions */
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span className="ref-pill-label">
                    STEP {currentStep + 1} OF {questions.length}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#8C7355', fontWeight: 600 }}>
                    Style Assessment
                  </span>
                </div>

                {/* Progress Bar */}
                <div style={{ width: '100%', height: '4px', background: '#EAE5DC', borderRadius: '9999px', marginBottom: '2rem' }}>
                  <div
                    style={{
                      height: '100%',
                      background: '#1C1917',
                      borderRadius: '9999px',
                      width: `${((currentStep + 1) / questions.length) * 100}%`,
                      transition: 'width 0.4s ease'
                    }}
                  />
                </div>

                <h2 className="ref-heading" style={{ fontSize: '1.85rem', marginBottom: '1.5rem' }}>
                  {questions[currentStep].question}
                </h2>

                {/* Options Grid */}
                <div className="ref-quiz-option-grid">
                  {questions[currentStep].options.map((opt, i) => (
                    <div
                      key={i}
                      className={`ref-quiz-option-card ${selectedAnswers[currentStep] === opt.style ? 'selected' : ''}`}
                      onClick={() => handleSelectOption(opt.style)}
                    >
                      <h4 style={{ color: '#1C1917', fontSize: '1rem', fontWeight: 600, margin: 0 }}>
                        {opt.label}
                      </h4>
                      <p style={{ color: '#57534E', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                        {opt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Final Result Card */
              <div>
                <span className="ref-pill-label">YOUR BESPOKE ARCHITECTURAL ARCHETYPE</span>
                <h2 className="ref-heading" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                  {quizResult.title}
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#8C7355', fontWeight: 600, marginBottom: '1.75rem' }}>
                  {quizResult.tagline}
                </p>

                <div style={{ position: 'relative', height: '240px', borderRadius: '1.25rem', overflow: 'hidden', marginBottom: '1.75rem' }}>
                  <img
                    src={quizResult.image}
                    alt={quizResult.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#D6CEC3', marginBottom: '1.75rem' }}>
                  {quizResult.description}
                </p>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(197, 164, 109, 0.25)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
                    Recommended Atelier Material Palette
                  </span>
                  <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                    {quizResult.materials.map((mat) => (
                      <span
                        key={mat}
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(197, 164, 109, 0.3)',
                          padding: '0.4rem 0.95rem',
                          borderRadius: '9999px',
                          fontSize: '0.82rem',
                          color: 'var(--color-gold-light)',
                          fontWeight: 500
                        }}
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(28,25,23,0.15)',
                      borderRadius: '9999px',
                      padding: '0.8rem 1.4rem',
                      color: '#1C1917',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <RotateCcw size={15} />
                    <span>Retake Quiz</span>
                  </button>

                  <Link
                    to="/consultation"
                    className="ref-dark-btn"
                    onClick={() => setIsQuizModalOpen(false)}
                  >
                    <Calendar size={15} />
                    <span>Book Consultation For This Style</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
