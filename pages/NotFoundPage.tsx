
import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';

const NotFoundPage: React.FC = () => {
  return (
    <PageShell className="text-center">
      <h1 className="text-6xl font-extrabold text-accent">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-white">Page Not Found</h2>
      <p className="mt-4 text-lg text-[var(--text-secondary)]">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10">
        <Link 
          to="/"
          className="inline-block bg-accent text-[var(--bg-dark)] font-bold text-sm px-6 py-3 rounded-md shadow-lg hover:bg-[#d4b071] focus:outline-none focus:ring-2 focus:ring-offset-2 ring-accent focus:ring-offset-[var(--bg-dark)] transition-all duration-200"
        >
          Go back home
        </Link>
      </div>
    </PageShell>
  );
};

export default NotFoundPage;