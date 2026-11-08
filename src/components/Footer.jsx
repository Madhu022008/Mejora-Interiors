import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube, ArrowRight, CheckCircle2, Home } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-master-footer">
      <div className="footer-top-grid">
        {/* Column 1: Brand & Atelier Mission */}
        <div>
          <div className="footer-brand-header">
            <Logo />
            <Link
              to="/"
              className="footer-home-btn"
              title="Return to Home"
              aria-label="Home"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Home size={17} />
            </Link>
          </div>
          <p className="footer-brand-bio">
            At MeJora Interiors, we believe every space deserves thoughtful design. From cozy / simple homes to modern interiors, we create spaces that inspire, comfort, and reflect you..
          </p>
        </div>

        {/* Column 2: Studio Exploration */}
        <div>
          <h4 className="footer-col-header">Explore Studio</h4>
          <ul className="footer-link-stack">
            <li><Link to="/" className="footer-nav-link">Home</Link></li>
            <li><Link to="/about" className="footer-nav-link">Our Philosophy</Link></li>
            <li><Link to="/services" className="footer-nav-link">Services & Process</Link></li>
            <li><Link to="/portfolio" className="footer-nav-link">Portfolio & Works</Link></li>
            <li><Link to="/quiz" className="footer-nav-link">Discover Style Quiz</Link></li>
            <li><Link to="/blog" className="footer-nav-link">Design Editorial</Link></li>
            <li><Link to="/contact" className="footer-nav-link">Contact Atelier</Link></li>
          </ul>
        </div>

        {/* Column 3: Design Disciplines */}
        <div>
          <h4 className="footer-col-header">Disciplines</h4>
          <ul className="footer-link-stack">
            <li><Link to="/services" className="footer-nav-link">Full-Service Renovation</Link></li>
            <li><Link to="/services" className="footer-nav-link">Virtual E-Design</Link></li>
            <li><Link to="/services" className="footer-nav-link">Spatial Architecture</Link></li>
            <li><Link to="/services" className="footer-nav-link">Bespoke Interior Styling</Link></li>
            <li><Link to="/services" className="footer-nav-link">Furniture Selection</Link></li>
            <li><Link to="/services" className="footer-nav-link">2700K Lighting Design</Link></li>
            <li><Link to="/consultation" className="footer-nav-link gold-text">Book Private Appointment</Link></li>
          </ul>
        </div>

        {/* Column 4: Private Gazette / Newsletter */}
        <div>
          <h4 className="footer-col-header">Studio Gazette</h4>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
            Receive our private quarterly monograph on rare materials, architectural trends, and European provenance.
          </p>

          {subscribed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', marginTop: '1rem', fontSize: '0.85rem' }}>
              <CheckCircle2 size={16} />
              <span>You are now subscribed to the MeJora Gazette.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form-row">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-field"
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          <div style={{ marginTop: '1.75rem' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
              Concierge Inquiries
            </span>
            <a href=" mejorainteriors@gmail.com" className="footer-contact-link">
              mejorainteriors@gmail.com
            </a>
            <a href="tel:+13108443290" className="footer-contact-link">
              +1 (310) 844-3290
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="footer-bottom-bar">
        <span>© {new Date().getFullYear()} MEJORA INTERIORS Atelier. All Rights Reserved. Crafted for extraordinary living.</span>
        <div className="footer-social-cluster">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube">
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

