import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Home, Gem, Users, Calendar, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Service Renovation',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="ref-page-wrap taupe-gold-theme">
      {/* Header Banner */}
      <section style={{ maxWidth: '1320px', margin: '0 auto 2rem auto', padding: '1rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <ScrollReveal>
            <span className="ref-pill-label">EXCLUSIVE ARCHITECTURAL APPOINTMENTS</span>
            <h1 className="ref-heading" style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)', marginBottom: '1.25rem', color: '#493326' }}>
              Your Dream Space Starts Here.
            </h1>
            <p className="ref-subtitle" style={{ maxWidth: '44rem', margin: '0 auto', color: '#5C4436' }}>
              Every exceptional space begins with an intimate conversation. Let us understand your lifestyle and spatial desires to craft something extraordinary together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Container: Split View between Luxury House Showcase & Simplified Form */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem 6rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Luxury House / Modern Villa Showcase */}
          <ScrollReveal>
            <div className="consultation-showcase-card">
              {/* Dusk Modern Villa Picture */}
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                <img
                  src="/images/popup-villa.jpg"
                  alt="MeJora Luxury Modern Villa"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(73, 51, 38, 0.85) 0%, transparent 60%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C6A15B', boxShadow: '0 0 10px #C6A15B' }} />
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F8F3EA', fontWeight: 600 }}>
                    Modern Villa Commission
                  </span>
                </div>
              </div>

              {/* Consultation Highlights */}
              <div style={{ padding: '2.25rem', textAlign: 'left' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#493326', marginBottom: '0.5rem' }}>
                  The MeJora Experience
                </h3>
                <p style={{ color: '#5C4436', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  A seamless design journey tailored to your individual lifestyle and architectural aspirations.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(198, 161, 91, 0.15)',
                      border: '1px solid rgba(198, 161, 91, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Home size={18} color="#C6A15B" />
                    </div>
                    <div>
                      <h4 className="consultation-feature-heading" style={{ color: '#493326', fontSize: '0.95rem', fontWeight: 600 }}>Modern & Timeless Designs</h4>
                      <p className="consultation-feature-desc" style={{ color: '#5C4436', fontSize: '0.82rem', marginTop: '0.15rem' }}>
                        Architectural proportions built to withstand shifting trends.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(198, 161, 91, 0.15)',
                      border: '1px solid rgba(198, 161, 91, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Gem size={18} color="#C6A15B" />
                    </div>
                    <div>
                      <h4 className="consultation-feature-heading" style={{ color: '#493326', fontSize: '0.95rem', fontWeight: 600 }}>Premium Quality</h4>
                      <p className="consultation-feature-desc" style={{ color: '#5C4436', fontSize: '0.82rem', marginTop: '0.15rem' }}>
                        Artisanal Italian stone, bespoke joinery, and warm ambient lighting.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(198, 161, 91, 0.15)',
                      border: '1px solid rgba(198, 161, 91, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Users size={18} color="#C6A15B" />
                    </div>
                    <div>
                      <h4 className="consultation-feature-heading" style={{ color: '#493326', fontSize: '0.95rem', fontWeight: 600 }}>Personalized Solutions</h4>
                      <p className="consultation-feature-desc" style={{ color: '#5C4436', fontSize: '0.82rem', marginTop: '0.15rem' }}>
                        Curated spatial programs honoring your exact daily rituals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Contact info */}
                <div className="consultation-contact-box" style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #D8C8B3',
                  borderRadius: '1rem',
                  padding: '1.15rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  fontSize: '0.85rem',
                  color: '#493326',
                  boxShadow: '0 4px 15px rgba(73, 51, 38, 0.04)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <ShieldCheck size={16} color="#C6A15B" />
                    <span>Complimentary discovery session</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Phone size={16} color="#C6A15B" />
                    <span>Direct Contact: +1 (310) 844-3290</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Mail size={16} color="#C6A15B" />
                    <span>mejorainteriors@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Simplified 5-Field Consultation Booking Form */}
          <ScrollReveal delay={150}>
            <div className="consultation-form-card" style={{ padding: '2.5rem' }}>
              {isSubmitted ? (
                /* Beautiful Success Message */
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(198, 161, 91, 0.15)',
                    border: '2px solid #C6A15B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}>
                    <CheckCircle2 size={34} color="#C6A15B" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#493326', marginBottom: '0.75rem' }}>
                    Consultation Requested
                  </h3>
                  <p style={{ color: '#5C4436', fontSize: '1rem', lineHeight: 1.7, maxWidth: '28rem', margin: '0 auto 2rem auto' }}>
                    Thank you, <strong style={{ color: '#493326' }}>{formData.name}</strong>. We have received your inquiry for <strong style={{ color: '#493326' }}>{formData.projectType}</strong>. Our senior design team will confirm your consultation on <strong style={{ color: '#C6A15B' }}>{formData.preferredDate}</strong> via <strong style={{ color: '#493326' }}>{formData.email}</strong> shortly.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="ref-dark-btn"
                      style={{ background: 'transparent', color: '#493326', border: '1.5px solid rgba(198, 161, 91, 0.5)' }}
                    >
                      <span>Book Another Appointment</span>
                    </button>
                    <Link to="/portfolio" className="ref-dark-btn">
                      <span>Explore Portfolio</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ) : (
                /* Simplified 5-Field Consultation Form */
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: '#493326', marginBottom: '0.5rem' }}>
                      Schedule Your Consultation
                    </h3>
                    <p style={{ color: '#5C4436', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Please provide your details below and we will prepare a personalized discovery session.
                    </p>
                  </div>

                  {/* 1. Name */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#493326', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      className="custom-input"
                      style={{ borderColor: errors.name ? '#FF6B6B' : undefined }}
                    />
                    {errors.name && <span style={{ color: '#FF6B6B', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                  </div>

                  {/* 2. Email */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#493326', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. eleanor@residence.com"
                      className="custom-input"
                      style={{ borderColor: errors.email ? '#FF6B6B' : undefined }}
                    />
                    {errors.email && <span style={{ color: '#FF6B6B', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                  </div>

                  {/* 3. Project Type (Dropdown with readable text) */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#493326', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="custom-select"
                    >
                      <option value="Full-Service Renovation">Full-Service Renovation</option>
                      <option value="New Architectural Build">New Architectural Build</option>
                      <option value="Luxury Penthouse / Villa">Luxury Penthouse / Villa</option>
                      <option value="Living Room & Salon Design">Living Room & Salon Design</option>
                      <option value="Bespoke Spatial Planning & Lighting">Bespoke Spatial Planning & Lighting</option>
                    </select>
                  </div>

                  {/* 4. Preferred Date */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#493326', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="custom-input"
                      style={{ borderColor: errors.preferredDate ? '#FF6B6B' : undefined }}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.preferredDate && <span style={{ color: '#FF6B6B', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.preferredDate}</span>}
                  </div>

                  {/* 5. Short Message */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#493326', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Short Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Share a few words about your space, dimensions, or design goals..."
                      className="custom-textarea"
                    />
                  </div>

                  {/* Simple Booking Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ref-dark-btn"
                    style={{ width: '100%', justifyContent: 'center', padding: '1rem 1.5rem', opacity: isSubmitting ? 0.75 : 1 }}
                  >
                    {isSubmitting ? (
                      <span>Reserving Appointment Slot...</span>
                    ) : (
                      <>
                        <span>Book a Consultation</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
