
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '', titleClassName = '', subtitleClassName = '' }) => {
  return (
    <div className={`max-w-4xl mx-auto text-center ${className}`}>
      <h2 className={`font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-[var(--text-secondary)] sm:text-xl ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;