import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, X, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const stepsData = [
    { number: 1, title: 'Discovery Call', desc: 'Share your ideas and goals.' },
    { number: 2, title: 'Mood Board & Layout', desc: 'Explore design concepts.' },
    { number: 3, title: 'Sourcing & Procurement', desc: 'We handle the details.' },
    { number: 4, title: 'Final Reveal', desc: 'Enjoy your transformed space.' }
  ];

  const servicesData = [
    {
      id: 1,
      title: 'Full-Service Renovation',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Comprehensive architectural overhaul from initial structural demolition to white-glove turnkey reveal.',
      duration: '16 – 32 Weeks',
      deliverables: [
        'Complete 3D Spatial Architectural Renders',
        'CAD Demolition & Construction Drawings',
        'Bespoke Millwork & Marble Engineering',
        'Full On-Site Project Management & Turnkey Staging'
      ]
    },
    {
      id: 2,
      title: 'Virtual E-Design',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'High-touch remote architectural consultation, photorealistic 3D visuals, and global procurement catalogs.',
      duration: '3 – 6 Weeks',
      deliverables: [
        'Photorealistic 3D Digital Perspectives',
        'Detailed Digital Floorplans with Millimeter Dimensions',
        'Curated Trade Sourcing List with Direct Buying Links',
        'Tactile Sample Box Shipped to Your Residence'
      ]
    },
    {
      id: 3,
      title: 'Spatial Planning',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Optimizing flow, daylight transitions, and spatial ergonomics through purposeful interior wall placement.',
      duration: '4 – 8 Weeks',
      deliverables: [
        'Circulation & Traffic Flow Optimization Plans',
        'Ceiling Groove & Architectural Lighting Coordinates',
        'Sightline & Natural Light Mapping Studies',
        'Custom Built-In Storage & Partition Schematics'
      ]
    },
    {
      id: 4,
      title: 'Interior Styling',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Elevating existing architectural spaces with collector art, bespoke textiles, sculpture, and tactile accessories.',
      duration: '4 – 8 Weeks',
      deliverables: [
        'Art Gallery Commissioning & Custom Framing',
        'Sensory Textile Curation (Linen, Mohair, Bouclé)',
        'Bespoke Ceramic & Bronze Accent Sourcing',
        'White-Glove Editorial Photostyling & Installation'
      ]
    },
    {
      id: 5,
      title: 'Furniture Selection',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Direct sourcing of iconic Italian furnishings, custom-commissioned marble monoliths, and bespoke joinery.',
      duration: '6 – 12 Weeks',
      deliverables: [
        'Direct Access to Exclusive European Trade Ateliers',
        'Bespoke Dining Tables, Sofas & Consoles',
        'Fabric Protection, Quality Control & Logistics',
        'White-Glove In-Home Placement & Packaging Removal'
      ]
    },
    {
      id: 6,
      title: 'Lighting Design',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Sophisticated 2700K indirect cove lighting, concealed grooves, and circadian ambient control.',
      duration: '3 – 6 Weeks',
      deliverables: [
        'Recessed Ceiling Groove Engineering',
        'Atmospheric 2700K Luminaire Schedules',
        'Day-to-Night Circadian Mood Lighting Controls',
        'Sculptural Statement Chandelier Specifications'
      ]
    }
  ];

  return (
    <div className="ref-page-wrap">
      {/* 1. Page Header */}
      <section style={{ maxWidth: '1320px', margin: '0 auto 3rem auto', padding: '1rem 2rem', textAlign: 'center' }}>
        <ScrollReveal>
          <span className="ref-pill-label">OUR DISCIPLINES</span>
          <h1 className="ref-heading">Services & Process</h1>
          <p className="ref-subtitle" style={{ maxWidth: '44rem', margin: '0 auto' }}>
            From concept to completion — a seamless design journey delivering bespoke architectural environments.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. The 6 Existing Signature Services Cards */}
      <section style={{ maxWidth: '1320px', margin: '0 auto 4rem auto', padding: '0 2rem' }}>
        <div className="ref-project-grid">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 80}>
              <div className="ref-project-card" onClick={() => setActiveService(service)}>
                <div className="ref-card-img-wrap">
                  <img src={service.image} alt={service.title} />
                  <span className="ref-card-badge">{service.duration}</span>
                </div>
                <div className="ref-card-body">
                  <h3 className="ref-card-title">{service.title}</h3>
                  <p className="ref-card-desc">{service.shortDesc}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(197, 164, 109, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#8C7355', fontSize: '0.88rem', fontWeight: 700 }}>
                    <span>Learn More</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. ONLY ADDED: HOW IT WORKS (Horizontal 4-Step Roadmap) */}
      <section style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem 4rem 2rem' }}>
        <ScrollReveal>
          <div className="how-it-works-card">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="how-it-works-eyebrow">HOW IT WORKS</span>
              <h2 className="how-it-works-title">
                The Four Steps to Your Transformed Space
              </h2>
            </div>

            <div className="roadmap-horizontal-wrap">
              {/* Base Connecting Line Track */}
              <div className="roadmap-connecting-line">
                {/* Active Tracing Route Line */}
                <div
                  className={`roadmap-route-active ${hoveredStep ? 'is-active' : ''} ${hoveredStep === 4 ? 'is-complete' : ''}`}
                  style={{
                    '--route-progress': hoveredStep === 1 ? '33.3%' : hoveredStep === 2 ? '66.6%' : hoveredStep >= 3 ? '100%' : '0%'
                  }}
                >
                  {hoveredStep && <div className="roadmap-route-head" />}
                </div>

                {/* Ambient Traveling Light Beam when idle */}
                {!hoveredStep && <div className="roadmap-route-ambient" />}
              </div>

              {/* 4 Steps */}
              <div className="roadmap-steps-grid">
                {stepsData.map((step) => {
                  const isPassedOrCurrent = hoveredStep && hoveredStep >= step.number;
                  const isCurrent = hoveredStep === step.number;
                  return (
                    <div
                      key={step.number}
                      className={`roadmap-step-item ${isPassedOrCurrent ? 'active-step' : ''} ${isCurrent ? 'hovered-step' : ''}`}
                      onMouseEnter={() => setHoveredStep(step.number)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      <div className="roadmap-marker">
                        <span className="roadmap-marker-number">{step.number}</span>
                      </div>
                      <h3 className="roadmap-step-title">{step.title}</h3>
                      <p className="roadmap-step-desc">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. Service Detail Modal */}
      {activeService && (
        <div className="ref-quiz-modal-overlay" onClick={() => setActiveService(null)}>
          <div className="ref-quiz-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '48rem' }}>
            <button
              type="button"
              className="ref-quiz-close-btn"
              onClick={() => setActiveService(null)}
              aria-label="Close Modal"
            >
              <X size={16} />
            </button>

            <div style={{ height: '260px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <img
                src={activeService.image}
                alt={activeService.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ textAlign: 'left' }}>
              <span className="ref-pill-label">Timeline: {activeService.duration}</span>
              <h2 className="ref-heading" style={{ fontSize: '2.2rem', margin: '0.4rem 0 1rem 0' }}>
                {activeService.title}
              </h2>
              <p className="ref-subtitle" style={{ fontSize: '0.98rem', marginBottom: '1.5rem' }}>
                {activeService.shortDesc}
              </p>

              <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(197, 164, 109, 0.25)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
                <strong style={{ color: 'var(--color-gold)', fontSize: '0.95rem', display: 'block', marginBottom: '1rem' }}>
                  Signature Deliverables:
                </strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {activeService.deliverables.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#D6CEC3', fontSize: '0.88rem' }}>
                      <CheckCircle2 size={16} color="#C5A46D" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/consultation"
                  className="ref-dark-btn"
                  onClick={() => setActiveService(null)}
                >
                  <Calendar size={15} />
                  <span>Inquire for This Service</span>
                </Link>
                <button
                  type="button"
                  className="ref-dark-btn"
                  style={{ background: 'transparent', color: '#FFFBF5', borderColor: 'rgba(197, 164, 109, 0.35)' }}
                  onClick={() => setActiveService(null)}
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
