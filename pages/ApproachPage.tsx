
import React from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';

const PrincipleCard: React.FC<{ number: string, title: string, children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="border border-[var(--border-color)] p-6 rounded-lg">
        <span className="text-accent font-bold text-2xl">{number}</span>
        <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-[var(--text-secondary)]">{children}</p>
    </div>
);

const ApproachPage: React.FC = () => {
    return (
        <PageShell>
            <SectionHeader
                title="Maniacal about process. Obsessive about outcomes."
            />

            <div className="mt-16 max-w-5xl mx-auto">
                <h3 className="text-2xl font-serif text-center text-white mb-8">Our principles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PrincipleCard number="01" title="Senior-first.">You work with the people doing the work.</PrincipleCard>
                    <PrincipleCard number="02" title="Strategy before noise.">Alignment &gt; activity.</PrincipleCard>
                    <PrincipleCard number="03" title="Data > opinion.">We validate narratives whenever possible.</PrincipleCard>
                    <PrincipleCard number="04" title="Measurable.">Clear KPIs, transparent reporting.</PrincipleCard>
                    <PrincipleCard number="05" title="Tight loops.">Weekly standups, rapid iteration, no black boxes.</PrincipleCard>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-serif text-center text-white mb-8">Our operating model</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="border border-[var(--border-color)] p-6 rounded-lg">
                            <h4 className="font-bold text-white text-lg">90-Day Sprints</h4>
                            <p className="text-[var(--text-secondary)] mt-2">For momentum and clarity</p>
                        </div>
                         <div className="border border-[var(--border-color)] p-6 rounded-lg">
                            <h4 className="font-bold text-white text-lg">Mixed Retainer + Projects</h4>
                            <p className="text-[var(--text-secondary)] mt-2">Keep the core running and ship critical assets fast</p>
                        </div>
                         <div className="border border-[var(--border-color)] p-6 rounded-lg">
                            <h4 className="font-bold text-white text-lg">Embedded Collaboration</h4>
                            <p className="text-[var(--text-secondary)] mt-2">We adopt your cadence/tools, not the other way around</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-serif text-center text-white mb-8">Sample KPIs</h3>
                    <div className="prose max-w-none text-center text-[var(--text-secondary)] grid md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-accent font-bold">Media</h4>
                            <p>Secured coverage per announcement; SOV vs. competitors; Tier 1/Tier 2 mix</p>
                        </div>
                        <div>
                            <h4 className="text-accent font-bold">Content</h4>
                            <p>Asset velocity, engagement, SQL influence</p>
                        </div>
                        <div>
                            <h4 className="text-accent font-bold">Digital</h4>
                            <p>Traffic quality, SEO lift, conversion rates, attribution clarity</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center border-t border-[var(--border-color)] pt-12">
                     <SectionHeader 
                        title="Let’s architect your 90-day plan."
                        className="!mb-8"
                        titleClassName="!text-3xl font-serif"
                     />
                    <CTAButton to="/contact">Book a Working Session</CTAButton>
                </div>

            </div>
        </PageShell>
    );
};

export default ApproachPage;