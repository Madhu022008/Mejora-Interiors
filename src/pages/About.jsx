import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, X, Compass, Gem, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="ref-page-wrap">
      {/* Exact Reference Image Match: Panel 4 "Our Philosophy" */}
      <section className="ref-about-section">
        <div className="ref-about-grid">
          {/* Left Column: Editorial Philosophy & Branding */}
          <ScrollReveal>
            <div className="ref-about-content">
              <span className="ref-pill-label">ABOUT US</span>
              <h1 className="ref-heading" style={{ fontSize: 'clamp(2.6rem, 4.8vw, 3.8rem)', marginBottom: '1.5rem', color: '#FFFBF5' }}>
                Our Philosophy
              </h1>

              <p style={{ fontSize: '1.18rem', lineHeight: 1.75, color: '#F5EFE6', fontWeight: 600, marginBottom: '1.35rem' }}>
                We believe great design isn't just about how a space looks, but how it feels.
              </p>

              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#C9BFB5', marginBottom: '1.75rem' }}>
                With a passion for timeless aesthetics and a love for functional beauty, we create spaces that tell your story.
              </p>

              {/* Signature-style MEJORA INTERIORS branding */}
              <div className="ref-about-signature">
                Mejora Interiors
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="ref-dark-btn"
                >
                  <span>Know More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interior Design Material & Texture Collage (Panel 4) */}
          <ScrollReveal delay={150}>
            <div className="ref-moodboard-collage">
              {/* Tile 1: Ceramic Vase with Natural Branches (Tall) */}
              <div className="ref-collage-tile ref-tile-tall">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80"
                  alt="Ceramic Vase and Organic Branches"
                />
              </div>

              {/* Tile 2: Fluted Travertine Stone Texture */}
              <div className="ref-collage-tile">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
                  alt="Textured Stone and Architectural Materials"
                />
              </div>

              {/* Tile 3: Lush Green House Plant */}
              <div className="ref-collage-tile">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80"
                  alt="Lush Botanical Living Feature"
                />
              </div>

              {/* Tile 4: Premium Furniture Living Vignette (Wide) */}
              <div className="ref-collage-tile ref-tile-wide">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                  alt="Curated Living Room Furniture and Warm Lighting"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Atelier Core Pillars Strip */}
      <section style={{ maxWidth: '1320px', margin: '3rem auto 0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <ScrollReveal delay={100}>
            <div className="taupe-pillar-card">
              <Compass size={28} color="#C6A15B" style={{ marginBottom: '1rem' }} />
              <h3>Sensory Architecture</h3>
              <p>
                Every volume, doorway, and alcove is proportioned to bring quietude and natural rhythm into your daily living.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="taupe-pillar-card">
              <Gem size={28} color="#C6A15B" style={{ marginBottom: '1rem' }} />
              <h3>Honest Provenance</h3>
              <p>
                Raw Italian travertine from Tuscan quarries, hand-milled oak from certified forests, and pure Belgian linen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="taupe-pillar-card">
              <Sparkles size={28} color="#C6A15B" style={{ marginBottom: '1rem' }} />
              <h3>Layered Illumination</h3>
              <p>
                Indirect ceiling coves and 2700K circadian warmth eliminate harsh shadows for serene evening transitions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal: Know More / Atelier Philosophy Details */}
      {isModalOpen && (
        <div
          className="ref-quiz-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="ref-quiz-modal-box"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '48rem' }}
          >
            <button
              type="button"
              className="ref-quiz-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={18} />
            </button>

            <span className="ref-pill-label">THE MEJORA ATELIER STORY</span>
            <h2 className="ref-heading" style={{ fontSize: '2.4rem', marginBottom: '1rem', color: '#FFFBF5' }}>
              Crafting Quiet Sanctuaries
            </h2>
            <p className="ref-subtitle" style={{ marginBottom: '1.5rem', color: '#C9BFB5' }}>
              Founded in 2010, MeJora Interiors is an international interior architecture studio committed to creating environments that elevate human wellbeing through architectural rigor and textural warmth.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1.5px solid rgba(197, 164, 109, 0.35)', padding: '1.75rem', borderRadius: '1.2rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <Check size={20} color="#C5A46D" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#FFFBF5', fontSize: '0.95rem' }}>Bespoke Architectural Integration</strong>
                  <p style={{ color: '#C9BFB5', fontSize: '0.88rem', marginTop: '0.2rem', margin: 0 }}>
                    We treat interior design not as superficial decoration, but as an integral extension of a building's bones.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <Check size={20} color="#C5A46D" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#FFFBF5', fontSize: '0.95rem' }}>Turnkey Procurement & Execution</strong>
                  <p style={{ color: '#C9BFB5', fontSize: '0.88rem', marginTop: '0.2rem', margin: 0 }}>
                    From Italian stone quarry selection to custom lighting joinery, our project directors handle every facet seamlessly.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <Link to="/consultation" className="ref-dark-btn">
                <span>Book a Consultation</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
