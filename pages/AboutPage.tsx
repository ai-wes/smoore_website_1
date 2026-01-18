
import React from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';

const AboutPage: React.FC = () => {
    return (
        <PageShell>
            <SectionHeader
                title="A senior-led studio built for speed, rigor, and outcomes."
            />

            <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1">
                    <img
                        src="https://picsum.photos/500/500?grayscale"
                        alt="Sam Moore"
                        className="rounded-full aspect-square object-cover shadow-lg mx-auto"
                    />
                    <h3 className="text-xl font-bold text-white mt-4 text-center">Sam Moore</h3>
                    <p className="text-accent text-center">Senior Consultant</p>
                </div>
                <div className="md:col-span-2 prose prose-lg max-w-none prose-p:text-[var(--text-secondary)] prose-strong:text-white">
                    <p>
                        Award-winning PR and media-relations strategist with 15 years leading programs for top healthcare and technology brands. Former national <strong>“Media Relations Person of the Year”</strong> finalist.
                    </p>
                    <p>
                        Experience across insurers (Aetna, UnitedHealthcare, Blue Shield of California, Humana), pharmacy (CVS, Walgreens), digital health (Hims & Hers, Doctor on Demand, Lyra Health), health IT (HealthEdge, Imprivata, Accolade, IBM Watson), health systems (Cedars-Sinai, Rush University), and more. LSU grad. Splits time between Los Angeles and Austin.
                    </p>
                </div>
            </div>

            <div className="mt-20 pt-16 border-t border-[var(--border-color)] grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                 <div>
                    <h3 className="text-2xl font-serif text-white">Extended Team / Partners</h3>
                    <p className="mt-4 text-[var(--text-secondary)] text-lg">We scale with a <strong>tight network of senior specialists</strong>—from data & survey science to design, web engineering, and analytics—so you only pay for the exact expertise you need.</p>
                 </div>
                 <div>
                    <h3 className="text-2xl font-serif text-white">Our Promise</h3>
                    <p className="mt-4 text-accent text-3xl font-bold tracking-wider font-serif">Bold. Unwavering. Committed. Accountable.</p>
                 </div>
            </div>

        </PageShell>
    );
};

export default AboutPage;