
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 border-t border-[var(--border-color)]">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
             <Link to="/" className="text-xl font-bold text-white tracking-tight">
              S. Moore <span className="text-accent">Integrated</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)]">Your story, engineered for impact.</p>
            <p className="text-sm text-[var(--text-secondary)]">
              Based in Los Angeles & Austin. Working everywhere.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/services/pr-media-relations" className="text-base text-[var(--text-secondary)] hover:text-accent">PR & Media</Link></li>
                  <li><Link to="/services/messaging-narrative" className="text-base text-[var(--text-secondary)] hover:text-accent">Messaging</Link></li>
                  <li><Link to="/services/digital-web" className="text-base text-[var(--text-secondary)] hover:text-accent">Digital & Web</Link></li>
                  <li><Link to="/services/content-studio" className="text-base text-[var(--text-secondary)] hover:text-accent">Content Studio</Link></li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/about" className="text-base text-[var(--text-secondary)] hover:text-accent">About</Link></li>
                  <li><Link to="/work" className="text-base text-[var(--text-secondary)] hover:text-accent">Work</Link></li>
                  <li><Link to="/approach" className="text-base text-[var(--text-secondary)] hover:text-accent">Approach</Link></li>
                  <li><Link to="/contact" className="text-base text-[var(--text-secondary)] hover:text-accent">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-2 text-base text-[var(--text-secondary)]">
                    <li>General Inquiries: <a href="mailto:general@smoore.com" className="hover:text-accent">general@smoore.com</a></li>
                    <li>Press Inquiries: <a href="mailto:press@smoore.com" className="hover:text-accent">press@smoore.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--border-color)] pt-8">
          <p className="text-base text-slate-500 text-center">&copy; {new Date().getFullYear()} S. Moore Integrated Communications. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;