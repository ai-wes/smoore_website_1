
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ to, children, fullWidth = false, onClick }) => {
  const classes = `
    inline-block text-center bg-accent text-[var(--bg-dark)] font-bold text-sm
    px-6 py-3 rounded-md shadow-lg
    hover:bg-[#d4b071] focus:outline-none focus:ring-2 focus:ring-offset-2
    focus:ring-accent focus:ring-offset-[var(--bg-dark)] transition-all duration-200
    ${fullWidth ? 'w-full' : ''}
  `;

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
};

export default CTAButton;