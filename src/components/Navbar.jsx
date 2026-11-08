import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Calendar, Search, Menu, X } from 'lucide-react';
import Logo from './Logo';
import Dropdown from './Dropdown';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for fixed navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isTaupeTheme = ['/about', '/contact'].includes(location.pathname);

  return (
    <>
      <header className={`site-navbar ${isScrolled ? 'scrolled' : ''} ${isTaupeTheme ? 'taupe-nav' : ''}`}>
        {/* Left: Brand Identity Logo */}
        <Logo />

        {/* Right: Desktop Navigation Items */}
        <nav className="nav-items-right">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>



          <NavLink
            to="/services"
            className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          >
            Services
          </NavLink>

          {/* Three-Dot Glassmorphism Dropdown */}
          <Dropdown />

          {/* Consultation Booking Pill Button */}
          <Link to="/consultation" className="nav-consultation-btn">
            <Calendar size={14} color="#C5A46D" />
            <span>Book a Consultation</span>
          </Link>

          {/* Search Icon */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="nav-search-btn"
            aria-label="Search studio collections"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="mobile-nav-panel">
          <Link to="/" className="mobile-nav-item">
            Home
          </Link>
          <Link to="/about" className="mobile-nav-item">
            About Us
          </Link>
          <Link to="/services" className="mobile-nav-item">
            Services & Process
          </Link>
          <Link to="/portfolio" className="mobile-nav-item">
            Portfolio
          </Link>
          <Link to="/quiz" className="mobile-nav-item">
            Style Quiz
          </Link>
          <Link to="/blog" className="mobile-nav-item">
            Blog & Insights
          </Link>
          <Link to="/contact" className="mobile-nav-item">
            Contact
          </Link>
          <Link
            to="/consultation"
            className="btn-gold-primary"
            style={{ width: '100%', marginTop: '0.75rem' }}
          >
            <Calendar size={15} />
            <span>Book Consultation</span>
          </Link>
        </div>
      )}
    </>
  );
}

