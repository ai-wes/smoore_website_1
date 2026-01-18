
import React from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';

const PricingCard: React.FC<{ title: string, price: string, description: string, children?: React.ReactNode }> = ({ title, price, description, children }) => (
    <div className="border border-[var(--border-color)] rounded-xl p-8 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-accent uppercase tracking-wider">{title}</h3>
        <p className="mt-4 text-4xl font-extrabold text-white">{price}</p>
        <p className="mt-2 text-[var(--text-secondary)]">{description}</p>
        <div className="mt-6 text-[var(--text-secondary)] space-y-2 flex-grow">{children}</div>
    </div>
);


const PricingPage: React.FC = () => {
    return (
        <PageShell>
            <SectionHeader
                title="Engagement Models & Pricing"
                subtitle="Transparent pricing for retainers, sprints, and projects."
            />

            <div className="mt-16 max-w-6xl mx-auto">
                <h3 className="text-2xl font-serif text-white mb-6">Retainers (Popular for PR & Always-On Comms)</h3>
                <div className="grid lg:grid-cols-3 gap-8">
                     <div className="lg:col-span-1">
                        <PricingCard 
                            title="Retainer" 
                            price="$6,000/mo"
                            description="Starting for up to 24 hours (at $250/hr)"
                        />
                     </div>
                     <div className="lg:col-span-2 border border-[var(--border-color)] rounded-xl p-8 flex items-center bg-black/20">
                        <div>
                             <h3 className="text-lg font-semibold text-accent uppercase tracking-wider">Custom Tiers</h3>
                             <p className="mt-2 text-xl text-white">Custom tiers for higher velocity or integrated PR + content + digital.</p>
                        </div>
                     </div>
                </div>

                <h3 className="text-2xl font-serif text-white mt-16 mb-6">Sprints & Projects</h3>
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PricingCard title="Messaging & Narrative" price="$8,000" description="3–4 week sprint" />
                    <PricingCard title="Investor Deck" price="$4,000" description="Up to 25 slides" />
                    <PricingCard title="Sales Deck" price="$3,000" description="Up to 15 slides" />
                    <PricingCard title="One-Pagers" price="$1,500" description="each" />
                 </div>
                 <div className="mt-8 border border-[var(--border-color)] rounded-xl p-8 text-center bg-black/20">
                    <h3 className="text-lg font-semibold text-accent uppercase tracking-wider">Web/Digital Builds</h3>
                    <p className="mt-2 text-xl text-white">Scoped based on size/stack (rapid Webflow builds available)</p>
                 </div>

                <h3 className="text-2xl font-serif text-white mt-16 mb-6">Terms (Sample Baseline)</h3>
                <div className="prose max-w-none text-[var(--text-secondary)] grid md:grid-cols-3 gap-8">
                    <p>30-day termination for either party</p>
                    <p>Net 30 payment terms + 15-day grace period</p>
                    <p>Late payments accrue <strong>10% weekly compounding interest</strong> post-grace period</p>
                </div>
            </div>

            <div className="mt-20 text-center border-t border-[var(--border-color)] pt-12">
                <SectionHeader 
                    title="Need a custom blend?"
                    subtitle="Let's scope it."
                    className="!mb-8"
                    titleClassName="!text-3xl font-serif"
                />
                <CTAButton to="/contact">Request a Proposal</CTAButton>
            </div>
        </PageShell>
    );
};

export default PricingPage;