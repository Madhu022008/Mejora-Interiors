import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Layers, BookOpen, Compass, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchableIndex = [
    { title: 'Modern Living Room Portfolio', category: 'Portfolio', link: '/portfolio', desc: 'Warm Architectural Minimalism with raw fluted travertine.' },
    { title: 'Luxury Bedroom Portfolio', category: 'Portfolio', link: '/portfolio', desc: 'Modern Serenity inspired by Lake Como with organic linens.' },
    { title: 'Contemporary Calacatta Kitchen', category: 'Portfolio', link: '/portfolio', desc: 'Monolithic Calacatta marble with bronze pocket cabinets.' },
    { title: 'Full-Service Interior Renovation', category: 'Services', link: '/services', desc: 'Turnkey architectural renovation and bespoke interior execution.' },
    { title: 'Bespoke Spatial Planning', category: 'Services', link: '/services', desc: 'Ergonomic spatial optimization and circulation planning.' },
    { title: 'Circadian Ceiling Lighting & Illumination', category: 'Services', link: '/services', desc: 'Concealed warm 2700K false-ceiling architectural grooves.' },
    { title: 'Interior Style Quiz', category: 'Quiz', link: '/quiz', desc: 'Discover your interior archetype in 3 curated steps.' },
    { title: 'Our Design Philosophy & Materials', category: 'About', link: '/about', desc: 'Honesty of materials, Italian travertine, and spatial harmony.' },
    { title: 'Book a Private Consultation', category: 'Consultation', link: '/consultation', desc: 'Schedule an intimate design discovery session with our partners.' },
    { title: '5 Lighting Tips for a Warm Luxury Home', category: 'Journal', link: '/blog', desc: 'Circadian 2700K layering and indirect ceiling trough illumination.' },
    { title: 'The Power of Warm Neutral Palettes', category: 'Journal', link: '/blog', desc: 'Balancing espresso, champagne gold, and warm ivory.' },
    { title: 'Small Space Architectural Mastery', category: 'Journal', link: '/blog', desc: 'Reflective stone, fluted panels, and custom concealed joinery.' }
  ];

  const filteredItems = query.trim() === ''
    ? searchableIndex.slice(0, 5)
    : searchableIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (link) => {
    navigate(link);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 6, 5, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 300,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5rem 1.5rem 2rem 1.5rem'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '38rem',
          background: '#151310',
          border: '1.5px solid rgba(197, 164, 109, 0.45)',
          borderRadius: '1.4rem',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 30px rgba(197, 164, 109, 0.2)',
          overflow: 'hidden'
        }}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--color-border)',
          gap: '1rem'
        }}>
          <Search size={22} color="#C5A46D" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, services, journal articles..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#FFFBF5',
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', color: 'var(--color-muted)', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--color-border)',
              borderRadius: '0.5rem',
              padding: '0.35rem 0.6rem',
              color: 'var(--color-muted)',
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '1rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', padding: '0.5rem 0.75rem', fontWeight: 600 }}>
            {query.trim() === '' ? 'Curated Suggestions' : `Results (${filteredItems.length})`}
          </div>

          {filteredItems.length === 0 ? (
            <div style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--color-muted)' }}>
              No matches found for "{query}". Try "kitchen", "lighting", "renovation", or "portfolio".
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item.link)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  borderRadius: '0.75rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(197, 164, 109, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(197, 164, 109, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                    <span style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      background: 'rgba(197, 164, 109, 0.15)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '0.25rem'
                    }}>
                      {item.category}
                    </span>
                    <span style={{ color: '#FFFBF5', fontWeight: 600, fontSize: '0.98rem' }}>
                      {item.title}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.82rem', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                <ChevronRight size={16} color="#C5A46D" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

