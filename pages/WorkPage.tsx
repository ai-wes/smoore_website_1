
import React from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';

interface CaseStudyTileProps {
  title: string;
  description: string;
}

const CaseStudyTile: React.FC<CaseStudyTileProps> = ({ title, description }) => (
    <div className="border border-[var(--border-color)] rounded-xl p-8 transition-all duration-300 hover:border-accent hover:bg-black/10">
        <h3 className="text-xl font-bold text-accent">{title}</h3>
        <p className="mt-3 text-lg text-white">{description}</p>
    </div>
);

const WorkPage: React.FC = () => {
    const caseStudies = [
        { title: "Tia", description: "Demonstrating better outcomes through care model data → national coverage." },
        { title: "Hims & Hers", description: "Translating GLP-1 access into a mainstream story of affordability & safety." },
        { title: "AppliedVR + Kernel Flow", description: "Turning complex brain data into accessible, high-visibility narratives." },
        { title: "[Confidential Health IT Co.]", description: "From legacy perceptions to category leadership." },
        { title: "UnityAI (template case)", description: "From narrative sprint to media-ready brand in 90 days." },
    ];

    return (
        <PageShell>
            <SectionHeader
                title="Press wins, positioning pivots, decks that close, and websites that convert."
            />
            
            <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
                {caseStudies.map((study, index) => (
                    <CaseStudyTile key={index} {...study} />
                ))}
            </div>

            <div className="mt-20 text-center border-t border-[var(--border-color)] pt-12">
                <SectionHeader 
                    title="Want to see what this looks like behind the scenes?" 
                    className="!mb-8"
                    titleClassName="!text-3xl font-serif"
                />
                <CTAButton to="/contact">Request a Redacted Case Pack</CTAButton>
            </div>
        </PageShell>
    );
};

export default WorkPage;