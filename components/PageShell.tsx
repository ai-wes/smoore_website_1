
import React from 'react';

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

const PageShell: React.FC<PageShellProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}>
      {children}
    </div>
  );
};

export default PageShell;
