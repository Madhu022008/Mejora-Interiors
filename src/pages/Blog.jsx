import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, X, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: '5 Lighting Tips for a Cozy Home',
      category: 'Lighting Architecture',
      readTime: '6 min read',
      date: 'November 2026',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      description: 'How to use recessed 2700K indirect ceiling grooves, low-glare floor lamps, and layered circadian dimmers to create intimate warmth.',
      body: 'Lighting is the most transformative element in architectural interior design. When illuminating a luxury space, direct overhead downlights often create harsh shadows. Instead, utilize concealed false-ceiling LED channels washed against warm plasterboard, paired with low-level table luminaires for a restful, restorative ambiance.'
    },
    {
      id: 2,
      title: 'The Power of Neutral Tones',
      category: 'Color & Texture',
      readTime: '5 min read',
      date: 'October 2026',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      description: 'Why monochromatic beige, cream, champagne gold, and dark espresso create more visual depth than bold saturated colors.',
      body: 'Monochromatic neutral palettes succeed when built upon diverse tactile textures. Pairing raw honed travertine with bouclé upholstery, brushed champagne metals, and Belgian linen prevents a space from feeling sterile, infusing it with subtle sensory richness.'
    },
    {
      id: 3,
      title: 'Small Space, Big Style',
      category: 'Spatial Planning',
      readTime: '7 min read',
      date: 'October 2026',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
      description: 'Architectural illusions: floor-to-ceiling sheer drapery, continuous flooring materials, and concealed pocket joinery.',
      body: 'Compact footprints can possess as much luxury as palatial estates. By utilizing continuous large-format stone flooring without thresholds, installing floor-to-ceiling acoustic doors, and concealing storage inside flush fluted wall paneling, spatial perception expands dramatically.'
    },
    {
      id: 4,
      title: 'Modern Luxury Interior Trends',
      category: 'Trends & Forecasts',
      readTime: '8 min read',
      date: 'September 2026',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      description: 'The shift from ostentatious displays to acoustic intimacy, biophilic courtyards, and artisanal material provenance.',
      body: 'Today\'s luxury homeowner values silence, privacy, and restorative wellness above all else. We are witnessing a decisive return to natural stone monolithic islands, acoustic wool draperies, and bespoke European craftsmanship over mass-produced designer labels.'
    },
    {
      id: 5,
      title: 'Choosing the Right Furniture',
      category: 'Curation Guide',
      readTime: '6 min read',
      date: 'September 2026',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description: 'How to balance low-profile Italian sofas, sculptural coffee tables, and proportionate spacing for relaxed entertaining.',
      body: 'Proportion and silhouette are paramount. Selecting low-slung, floating furniture pieces allows ceiling heights to feel loftier and preserves sightlines toward gardens or skyline views. Focus on heirloom pieces made with solid hardwoods and full-grain leathers.'
    }
  ];

  return (
    <div className="ref-page-wrap">
      {/* 1. Page Header */}
      <section style={{ maxWidth: '1320px', margin: '0 auto 3rem auto', padding: '1rem 2rem', textAlign: 'center' }}>
        <ScrollReveal>
          <span className="ref-pill-label">STUDIO MONOGRAPHS</span>
          <h1 className="ref-heading">Design Tips & Ideas</h1>
          <p className="ref-subtitle" style={{ maxWidth: '44rem', margin: '0 auto' }}>
            Curated architectural insights, tactile material advice, and spatial living philosophy from our principal designers.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. Featured Lead Article */}
      <section style={{ maxWidth: '1320px', margin: '0 auto 4rem auto', padding: '0 2rem' }}>
        <ScrollReveal>
          <div
            style={{
              background: 'rgba(22, 19, 16, 0.94)',
              border: '1.5px solid rgba(197, 164, 109, 0.35)',
              borderRadius: '1.6rem',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              cursor: 'pointer',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(197, 164, 109, 0.12)'
            }}
            onClick={() => setActiveArticle(articles[0])}
          >
            <div style={{ height: '360px', overflow: 'hidden' }}>
              <img
                src={articles[0].image}
                alt={articles[0].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
              <span className="ref-pill-label">
                FEATURED MONOGRAPH • {articles[0].category}
              </span>
              <h2 className="ref-heading" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
                {articles[0].title}
              </h2>
              <p className="ref-subtitle" style={{ fontSize: '0.98rem', marginBottom: '1.75rem' }}>
                {articles[0].description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.9rem' }}>
                <span>Read Complete Article</span>
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. Grid of Articles */}
      <section style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem 5rem 2rem' }}>
        <div className="ref-project-grid">
          {articles.slice(1).map((art, index) => (
            <ScrollReveal key={art.id} delay={index * 80}>
              <div
                className="ref-project-card"
                onClick={() => setActiveArticle(art)}
              >
                <div className="ref-card-img-wrap">
                  <img src={art.image} alt={art.title} />
                  <span className="ref-card-badge">{art.readTime}</span>
                </div>
                <div className="ref-card-body">
                  <span className="ref-card-style">
                    {art.category} • {art.date}
                  </span>
                  <h3 className="ref-card-title">{art.title}</h3>
                  <p className="ref-card-desc">{art.description}</p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8C7355', fontSize: '0.88rem', fontWeight: 700 }}>
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. Article Reader Modal */}
      {activeArticle && (
        <div className="ref-quiz-modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="ref-quiz-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '48rem' }}>
            <button
              type="button"
              className="ref-quiz-close-btn"
              onClick={() => setActiveArticle(null)}
              aria-label="Close Article"
            >
              <X size={16} />
            </button>

            <div style={{ height: '260px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.75rem' }}>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ textAlign: 'left' }}>
              <span className="ref-pill-label">
                {activeArticle.category} • {activeArticle.readTime}
              </span>
              <h2 className="ref-heading" style={{ fontSize: '2.2rem', margin: '0.5rem 0 1.25rem 0' }}>
                {activeArticle.title}
              </h2>
              <p style={{ color: '#211B16', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {activeArticle.body}
              </p>
              <p style={{ color: '#524538', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                At MeJora Interiors, every architectural decision is vetted against our core pillars: honesty of materials, invisible integration of illumination, and timeless geometric proportions.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/consultation"
                  className="ref-dark-btn"
                  onClick={() => setActiveArticle(null)}
                >
                  <Calendar size={15} />
                  <span>Discuss With Our Architects</span>
                </Link>
                <button
                  type="button"
                  className="ref-dark-btn"
                  style={{ background: 'transparent', color: '#211B16', borderColor: 'rgba(33, 27, 22, 0.2)' }}
                  onClick={() => setActiveArticle(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
