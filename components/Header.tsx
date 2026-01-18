
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CTAButton from './CTAButton';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block md:inline-block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          isActive
            ? 'text-accent'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[var(--bg-dark)]/70 backdrop-blur-sm sticky top-0 z-50 border-b border-[var(--border-color)]">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white tracking-tight">
              S. Moore <span className="text-accent">Integrated</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 lg:space-x-2">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/services">Services</NavItem>
              <NavItem to="/approach">Approach</NavItem>
              <NavItem to="/work">Work</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/pricing">Pricing</NavItem>
              <NavItem to="/insights">Insights</NavItem>
              <div className="ml-4">
                <CTAButton to="/contact">Request a Consultation</CTAButton>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--text-secondary)] hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem to="/" onClick={closeMenu}>Home</NavItem>
            <NavItem to="/services" onClick={closeMenu}>Services</NavItem>
            <NavItem to="/approach" onClick={closeMenu}>Approach</NavItem>
            <NavItem to="/work" onClick={closeMenu}>Work</NavItem>
            <NavItem to="/about" onClick={closeMenu}>About</NavItem>
            <NavItem to="/pricing" onClick={closeMenu}>Pricing</NavItem>
            <NavItem to="/insights" onClick={closeMenu}>Insights</NavItem>
          </div>
          <div className="pt-4 pb-3 border-t border-[var(--border-color)] px-5">
             <CTAButton to="/contact" fullWidth onClick={closeMenu}>Request a Consultation</CTAButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;