
import React from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';

const PillarCard: React.FC<{ title: string }> = ({ title }) => (
    <div className="border border-[var(--border-color)] rounded-lg p-6 h-full flex items-center">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
);

const InsightsPage: React.FC = () => {
    const pillars = [
        "Media & PR Playbooks for Digital Health & Tech",
        "Data Storytelling & Survey Design 101",
        "Messaging Pivots that Actually Work",
        "The Modern Web Stack for High-Velocity Comms Teams",
        "Executive Visibility: How to Win Stages & Awards",
    ];

    return (
        <PageShell>
            <SectionHeader
                title="Signals, not noise."
                subtitle="Exploring the intersection of narrative, technology, and health."
            />
            
            <div className="mt-16 max-w-5xl mx-auto">
                <h3 className="text-2xl font-serif text-center text-white mb-8">Content Pillars</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => <PillarCard key={index} title={pillar} />)}
                    <div className="border border-dashed border-[var(--border-color)] rounded-lg p-6 h-full flex items-center justify-center text-[var(--text-secondary)]">
                        <p>More insights coming soon...</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 max-w-2xl mx-auto text-center border-t border-[var(--border-color)] pt-12">
                <h2 className="text-2xl font-serif text-white">Get our quarterly Health Tech PR & Narrative Trends Briefing.</h2>
                <form className="mt-6 flex flex-col sm:flex-row gap-4">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-grow bg-transparent border border-[var(--border-color)] rounded-md px-4 py-3 text-white placeholder-[var(--text-secondary)] focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                    <button type="submit" className="bg-accent text-[var(--bg-dark)] font-bold text-sm px-6 py-3 rounded-md shadow-lg hover:bg-[#d4b071] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-[var(--bg-dark)] transition-all duration-200">
                        Subscribe
                    </button>
                </form>
            </div>
        </PageShell>
    );
};

export default InsightsPage;