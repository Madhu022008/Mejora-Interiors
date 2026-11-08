import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { MapPin, Mail, Phone, CheckCircle2, Calendar, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Architecture',
    location: '',
    timeline: 'Within 3 - 6 Months',
    budget: '$150,000 – $500,000',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, message: '', id: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, message: '', id: '' });

    setTimeout(() => {
      const generatedId = `MJ-${Date.now().toString().slice(-6)}`;
      setStatus({
        loading: false,
        success: true,
        message: `Thank you, ${formData.name}. Your inquiry has been received. Our senior design director will review your architectural project and contact you within 24 hours.`,
        id: generatedId
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential Architecture',
        location: '',
        timeline: 'Within 3 - 6 Months',
        budget: '$150,000 – $500,000',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="ref-page-wrap taupe-gold-theme">
      <div style={{ maxWidth: '1320px', margin: '0 auto 3rem auto', padding: '1rem 2rem', textAlign: 'center' }}>
        <span className="ref-pill-label">GET IN TOUCH</span>
        <h1 className="ref-heading" style={{ color: '#493326' }}>Let's Create Something Beautiful</h1>
        <p className="ref-subtitle" style={{ maxWidth: '44rem', margin: '0 auto', color: '#5C4436' }}>
          Tell us about your project and we'll be in touch within 24 hours to schedule an initial consultation.
        </p>
      </div>

      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem 5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', textAlign: 'left' }}>
        {/* Left Column: Direct Studio Contacts & Visuals */}
        <ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Atelier Villa Image Frame */}
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1.5px solid rgba(198, 161, 91, 0.4)', height: '240px', boxShadow: '0 12px 30px rgba(73, 51, 38, 0.08)' }}>
              <img
                src="/images/popup-villa.jpg"
                alt="MeJora Atelier Residence"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="taupe-contact-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
                <div className="logo-pillars" style={{ transform: 'scale(0.85)' }}>
                  <span className="pillar-bar pillar-1" style={{ background: '#C6A15B' }} />
                  <span className="pillar-bar pillar-2" style={{ background: '#C6A15B' }} />
                  <span className="pillar-bar pillar-3" style={{ background: '#C6A15B' }} />
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#493326', fontWeight: 600 }}>MEJORA</span>
                  <span style={{ fontSize: '0.55rem', color: '#C6A15B', display: 'block', letterSpacing: '0.3em', fontWeight: 700 }}>INTERIORS</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Mail size={18} color="#C6A15B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#493326', display: 'block', fontSize: '0.92rem' }}>Email Inquiries</strong>
                    <a
                      href="mailto:mejorainteriors@gmail.com"
                      className="contact-action-link"
                    >
                      mejorainteriors@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Phone size={18} color="#C6A15B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#493326', display: 'block', fontSize: '0.92rem' }}>Direct Line</strong>
                    <a
                      href="tel:+13108443290"
                      className="contact-action-link"
                    >
                      +1 (310) 844-3290
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <MapPin size={18} color="#C6A15B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#493326', display: 'block', fontSize: '0.92rem', marginBottom: '0.25rem' }}>Studio Locations</strong>
                    <a
                      href="https://maps.google.com/?q=Coimbatore+Tamil+Nadu+India"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-action-link"
                      style={{ display: 'block', marginBottom: '0.35rem' }}
                    >
                      Coimbatore, Tamil Nadu, India
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Cluster */}
              <div style={{ borderTop: '1px solid rgba(198, 161, 91, 0.25)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.78rem', color: '#C6A15B', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                  Follow Atelier
                </span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
                    <Instagram size={17} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
                    <Facebook size={17} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                    <Linkedin size={17} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube">
                    <Youtube size={17} />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Booking Shortcut Button */}
            <Link
              to="/consultation"
              className="ref-dark-btn"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={15} />
              <span>Schedule a Dedicated Consultation</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Right Column: Contact Inquiry Form */}
        <ScrollReveal delay={150}>
          <div className="taupe-form-container">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: '#493326', marginBottom: '0.5rem' }}>
              Initiate Project Inquiry
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#5C4436', marginBottom: '2rem' }}>
              Complete the parameters below to connect directly with our studio partners.
            </p>

            {status.success ? (
              <div style={{ background: 'rgba(198, 161, 91, 0.12)', border: '1.5px solid #C6A15B', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
                <CheckCircle2 size={40} color="#C6A15B" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#493326', marginBottom: '0.5rem' }}>
                  Inquiry Confirmed
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#5C4436', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {status.message}
                </p>
                <span style={{ fontSize: '0.8rem', color: '#C6A15B', fontWeight: 700, letterSpacing: '0.12em' }}>
                  Reference Code: {status.id}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="input-field-group">
                  <label className="input-label-text">Project Type *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="custom-select"
                  >
                    <option value="Residential Architecture">Residential Penthouse / Villa</option>
                    <option value="Full-Service Renovation">Full-Service Renovation</option>
                    <option value="Spatial Planning">Spatial Planning & Architecture</option>
                    <option value="Interior Styling">Bespoke Interior Styling</option>
                    <option value="Virtual E-Design">Virtual E-Design & Concept</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="input-field-group">
                    <label className="input-label-text">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field-group">
                    <label className="input-label-text">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="julian@estate.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="custom-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="input-field-group">
                    <label className="input-label-text">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field-group">
                    <label className="input-label-text">Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Bel Air, CA"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="custom-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="input-field-group">
                    <label className="input-label-text">Estimated Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="custom-select"
                    >
                      <option value="Immediate (1-3 months)">Immediate (1 - 3 months)</option>
                      <option value="Within 3 - 6 Months">Within 3 - 6 Months</option>
                      <option value="Future Planning (6-12+ months)">Future Planning (6 - 12+ months)</option>
                    </select>
                  </div>
                  <div className="input-field-group">
                    <label className="input-label-text">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="custom-select"
                    >
                      <option value="$50,000 – $150,000">$50,000 – $150,000</option>
                      <option value="$150,000 – $500,000">$150,000 – $500,000</option>
                      <option value="$500,000 – $1,500,000+">$500,000 – $1,500,000+</option>
                    </select>
                  </div>
                </div>

                <div className="input-field-group">
                  <label className="input-label-text">Project Description & Scope *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your residence, architectural vision, square footage, and unique aspirations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="custom-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="ref-dark-btn"
                  style={{ width: '100%', marginTop: '0.75rem', padding: '1rem' }}
                >
                  {status.loading ? 'Transmitting to Atelier...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

