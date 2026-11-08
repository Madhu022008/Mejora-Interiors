import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoreHorizontal, ChevronDown, Folder, FileText, Mail } from 'lucide-react';

export default function Dropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const timerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 220); // Smooth buffer to avoid flicker
  };

  const handleItemClick = () => {
    setIsOpen(false);
    if (onSelect) onSelect();
  };

  return (
    <div
      className="nav-dropdown-wrapper"
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`dots-menu-btn ${isOpen ? 'is-open' : ''}`}
        aria-label="Additional Navigation Menu"
        aria-expanded={isOpen}
      >
        <MoreHorizontal size={20} />
        <ChevronDown size={13} className={`dropdown-trigger-chevron ${isOpen ? 'rotated' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="nav-dropdown-panel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/portfolio"
            onClick={handleItemClick}
            className="nav-dropdown-item"
          >
            <div className="nav-dropdown-item-content">
              <Folder size={16} className="nav-dropdown-icon" />
              <span>Portfolio</span>
            </div>
          </Link>

          <Link
            to="/blog"
            onClick={handleItemClick}
            className="nav-dropdown-item"
          >
            <div className="nav-dropdown-item-content">
              <FileText size={16} className="nav-dropdown-icon" />
              <span>Blog</span>
            </div>
          </Link>

          <Link
            to="/contact"
            onClick={handleItemClick}
            className="nav-dropdown-item"
          >
            <div className="nav-dropdown-item-content">
              <Mail size={16} className="nav-dropdown-icon" />
              <span>Contact</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

