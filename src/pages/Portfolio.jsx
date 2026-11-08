import React, { useState, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, X, Sliders, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  // Before / After Slider Position (0 to 100%)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleSliderMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const newPos = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPos(newPos);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // Modern Serenity Case Study Modal State
  const [isModernSerenityModalOpen, setIsModernSerenityModalOpen] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'Living Room',
      style: 'Warm Architectural Minimalism',
      location: 'Bel Air, California',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: 'An expansive open-concept salon balancing raw fluted travertine, custom recessed 2700K lighting, and panoramic floor-to-ceiling horizon views.',
      tags: ['Travertine Stone', 'Architectural Lighting', 'Minimalist Joinery']
    },
    {
      id: 2,
      title: 'Luxury Bedroom',
      category: 'Bedroom',
      style: 'Modern Serenity',
      location: 'Lake Como, Italy',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Lakeside serenity brought to life through organic linen textures, sculpted warm oak paneling, and curated bespoke Italian furniture.',
      tags: ['Linen Upholstery', 'Bespoke Walnut', 'Sculptural Seating']
    },
    {
      id: 3,
      title: 'Contemporary Kitchen',
      category: 'Kitchen',
      style: 'Monolithic Calacatta',
      location: 'Tribeca, New York',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      description: 'Sculptural kitchen architecture featuring a 14-foot honed Calacatta marble monolith, integrated bronze pocket cabinets, and concealed ambient glow.',
      tags: ['Calacatta Gold', 'Brushed Bronze', 'Seamless Induction']
    },
    {
      id: 4,
      title: 'Minimalist Apartment',
      category: 'Apartment',
      style: 'Japanese Wabi-Sabi Harmony',
      location: 'Kyoto, Japan',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      description: 'A harmonious modern Japanese aesthetic blending cedar slatting, unpolished charcoal granite, and tranquil water courtyard perspectives.',
      tags: ['Wabi-Sabi', 'Charcoal Granite', 'Slatted Cedar']
    },
    {
      id: 5,
      title: 'Premium Villa',
      category: 'Villa',
      style: 'Riviera Mediterranean Modern',
      location: 'French Riviera',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      description: 'Sun-drenched coastal residence with lime-washed interior walls, continuous indoor-outdoor terrazzo flooring, and bespoke bronze lighting.',
      tags: ['Lime-Wash Plaster', 'Custom Terrazzo', 'Indoor-Outdoor']
    },
    {
      id: 6,
      title: 'Modern Office',
      category: 'Office',
      style: 'Executive Acoustic Sanctuary',
      location: 'Mayfair, London',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      description: 'Private executive suite combining dark fluted walnut joinery, concealed acoustic fabric paneling, and curated collector art.',
      tags: ['Fluted Walnut', 'Acoustic Comfort', 'Bespoke Executive Desk']
    }
  ];

  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Apartment', 'Villa', 'Office'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="ref-page-wrap">
      {/* 1. Top Section: Header & Architectural Banner (Exact Reference Panel 2) */}
      <section className="ref-portfolio-header">
        <ScrollReveal>
          <div className="ref-portfolio-intro">
            <span className="ref-pill-label">OUR WORK</span>
            <h1 className="ref-heading">Portfolio</h1>
            <p className="ref-subtitle">Thoughtful design. Real impact.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="ref-portfolio-banner">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
              alt="Architectural Ceramic Vase and Arched Niche"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Featured Case Study: "Modern Serenity" with Before/After Slider */}
      <section className="ref-case-study-card">
        <ScrollReveal>
          <div className="ref-case-study-inner">
            {/* Left: Interactive Before / After Slider */}
            <div
              className="ref-slider-box"
              ref={sliderRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={(e) => isDragging && handleSliderMove(e.clientX)}
              onTouchMove={handleTouchMove}
            >
              {/* After: Transformed Luxury Bedroom */}
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Modern Serenity Bedroom After"
                className="ref-slider-img-after"
              />

              {/* Before: Plain unrenovated bedroom (clipped) */}
              <div
                className="ref-slider-clipped"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
                  alt="Raw Space Before"
                  className="ref-slider-img-before"
                  style={{ width: sliderRef.current ? `${sliderRef.current.clientWidth}px` : '600px' }}
                />
              </div>

              {/* Divider Line & Circular Drag Knob */}
              <div
                className="ref-slider-divider"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="ref-slider-handle">
                  <span>⟨|⟩</span>
                </div>
              </div>
            </div>

            {/* Right: Project Details matching Reference Image */}
            <div className="ref-case-study-details">
              <h2 className="ref-case-title">Modern Serenity</h2>

              <div className="ref-case-points">
                <p className="ref-case-point-line">
                  <strong>Client Brief:</strong> A calm, clutter-free bedroom with modern aesthetics.
                </p>
                <p className="ref-case-point-line">
                  <strong>Challenge:</strong> Limited space and poor lighting.
                </p>
                <p className="ref-case-point-line">
                  <strong>Solution:</strong> Light tones, smart storage and layered lighting.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsModernSerenityModalOpen(true)}
                  className="ref-dark-btn"
                >
                  <span>View Full Project</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. Secondary Curated Works Gallery */}
      <section className="ref-grid-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="ref-pill-label">CURATED RESIDENCES</span>
            <h2 className="ref-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
              Explore Recent Commissions
            </h2>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <div className="ref-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`ref-filter-tab ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid (PREMIUM 3-COLUMN IMAGE GALLERY) */}
        <div className="ref-project-grid">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 80}>
              <div
                className="ref-project-card"
                onClick={() => setActiveProject(project)}
              >
                <div className="ref-card-img-wrap">
                  <img src={project.image} alt={project.title} />
                  <span className="ref-card-badge">{project.category}</span>
                </div>
                <div className="ref-card-body">
                  <span className="ref-card-style">{project.category} • {project.location}</span>
                  <h3 className="ref-card-title">{project.title}</h3>
                  <div className="ref-card-footer">
                    <span>View Project</span>
                    <ArrowRight size={15} className="ref-card-arrow" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Modal: Modern Serenity Detailed Case Study */}
      {isModernSerenityModalOpen && (
        <div
          className="ref-quiz-modal-overlay"
          onClick={() => setIsModernSerenityModalOpen(false)}
        >
          <div
            className="ref-quiz-modal-box"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '54rem' }}
          >
            <button
              type="button"
              className="ref-quiz-close-btn"
              onClick={() => setIsModernSerenityModalOpen(false)}
            >
              <X size={18} />
            </button>

            <span className="ref-pill-label">FEATURED RESIDENTIAL RETREAT</span>
            <h2 className="ref-heading" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              Modern Serenity
            </h2>
            <p className="ref-subtitle" style={{ marginBottom: '2rem' }}>
              A master bedroom transformation balancing organic tactile linens, acoustic wood slats, and warm 2700K ambient illumination.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Headboard and slatted wall"
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '1rem', border: '1px solid rgba(197, 164, 109, 0.3)' }}
              />
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
                alt="Custom dressing joinery"
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '1rem', border: '1px solid rgba(197, 164, 109, 0.3)' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(197, 164, 109, 0.25)', padding: '1.75rem', borderRadius: '1.2rem', marginBottom: '2rem' }}>
              <div>
                <strong style={{ color: 'var(--color-gold)', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Key Materials</strong>
                <span style={{ color: '#D6CEC3', fontSize: '0.88rem' }}>White Oak Slats, Belgian Linen, Honed Travertine</span>
              </div>
              <div>
                <strong style={{ color: 'var(--color-gold)', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Lighting Program</strong>
                <span style={{ color: '#D6CEC3', fontSize: '0.88rem' }}>Recessed 2700K False Ceiling Cove + Dimmable Sconces</span>
              </div>
              <div>
                <strong style={{ color: 'var(--color-gold)', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Completion Timeline</strong>
                <span style={{ color: '#D6CEC3', fontSize: '0.88rem' }}>10 Weeks from Discovery to Reveal</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <Link to="/consultation" className="ref-dark-btn">
                <span>Book a Similar Project</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Gallery Project Details */}
      {activeProject && (
        <div
          className="ref-quiz-modal-overlay"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="ref-quiz-modal-box"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '44rem' }}
          >
            <button
              type="button"
              className="ref-quiz-close-btn"
              onClick={() => setActiveProject(null)}
            >
              <X size={18} />
            </button>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '1.2rem', border: '1px solid rgba(197, 164, 109, 0.3)', marginBottom: '1.75rem' }}
            />
            <span className="ref-pill-label">{activeProject.category} • {activeProject.location}</span>
            <h2 className="ref-heading" style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>
              {activeProject.title}
            </h2>
            <p className="ref-subtitle" style={{ marginBottom: '1.75rem' }}>
              {activeProject.description}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {activeProject.tags.map((t) => (
                <span key={t} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(197, 164, 109, 0.3)', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.82rem', color: 'var(--color-gold)' }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/consultation" className="ref-dark-btn">
                <span>Consult On This Style</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
