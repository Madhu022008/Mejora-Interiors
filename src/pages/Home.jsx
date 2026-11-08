import React from 'react';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, Compass, Gem, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* 1. Master Hero Section (with Inline Drop Consultation Card on the Right) */}
      <Hero />

      {/* 2. Brief Studio Overview Strip */}
      <section style={{ background: '#12100E', borderTop: '1px solid var(--color-border)', padding: '5rem 3.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <span className="page-eyebrow">THE MEJORA ATELIER</span>
            <h2 className="page-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem' }}>
              Architectural Beautiful Design Meets Everyday Comfort.
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '42rem', margin: '0 auto 3rem auto' }}>
              We design beautiful and comfortable homes with quality materials, elegant interiors and warm lighting.
              Every detail is carefully planned to make your home look stylish and feel welcoming.
            </p>
          </ScrollReveal>

          {/* 3 Feature Highlights with Premium Hover Interactions */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left', marginBottom: '3.5rem' }}>
            <ScrollReveal delay={100}>
              <div className="home-feature-card">
                <div>
                  <div className="feature-icon-wrap">
                    <Compass size={28} color="#C5A46D" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFBF5', marginBottom: '0.65rem' }}>
                    Timeless Proportion
                  </h3>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Balancing classical spatial harmony with clean contemporary horizons for enduring elegance.
                  </p>
                </div>
                <ArrowRight size={18} className="feature-card-arrow" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="home-feature-card">
                <div>
                  <div className="feature-icon-wrap">
                    <Gem size={28} color="#C5A46D" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFBF5', marginBottom: '0.65rem' }}>
                    Material Harmony
                  </h3>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    We use good-quality materials, natural wood, beautiful
                    stones and premium finishes to give your home a rich look.
                  </p>
                </div>
                <ArrowRight size={18} className="feature-card-arrow" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="home-feature-card">
                <div>
                  <div className="feature-icon-wrap">
                    <Sparkles size={28} color="#C5A46D" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFBF5', marginBottom: '0.65rem' }}>
                    Beautiful Lighting
                  </h3>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    We use warm lights, hidden LED strips and
                    modern ceiling designs to make every room look beautiful and comfortable.
                  </p>
                </div>
                <ArrowRight size={18} className="feature-card-arrow" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link to="/portfolio" className="btn-gold-primary">
                <span>Explore Featured Works</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/consultation" className="btn-dark-secondary">
                <span>Book a Consultation</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

