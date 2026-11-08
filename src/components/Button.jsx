import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  type = 'button',
  icon: Icon,
  className = '',
  disabled = false,
  style = {}
}) {
  const baseClass = variant === 'primary' ? 'btn-gold-primary' : 'btn-dark-secondary';
  const combinedClass = `${baseClass} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClass} style={style} onClick={onClick}>
        <span>{children}</span>
        {Icon && <Icon size={15} />}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      {Icon && <Icon size={15} />}
    </button>
  );
}

