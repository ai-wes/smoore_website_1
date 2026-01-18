
import React from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="h-6 w-6 flex-shrink-0 text-accent mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[var(--text-secondary)]">{children}</span>
    </li>
);

const ServicePageLayout: React.FC<{ 
    title: string; 
    subtitle: string; 
    ctaText: string;
    ctaLink: string;
    children: React.ReactNode; 
}> = ({ title, subtitle, ctaText, ctaLink, children }) => (
    <PageShell>
        <div className="max-w-5xl mx-auto">
            <SectionHeader title={title} subtitle={subtitle} titleClassName="font-serif" />
            <div className="mt-16 prose prose-lg max-w-none prose-p:text-[var(--text-secondary)] prose-headings:text-white prose-strong:text-white">
                {children}
            </div>
            <div className="mt-16 text-center border-t border-[var(--border-color)] pt-12">
                <CTAButton to={ctaLink}>{ctaText}</CTAButton>
            </div>
        </div>
    </PageShell>
);

export const PRMediaPage: React.FC = () => (
    <ServicePageLayout
        title="PR that actually lands—and ladders back to your goals."
        subtitle="From hard news drops to opportunistic thought leadership, we build and run media programs that relentlessly pursue the right coverage, with the right targets, at the right time."
        ctaText="Map the first 90 days of your PR program"
        ctaLink="/contact"
    >
        <h3>What we do</h3>
        <ul className="space-y-4 not-prose list-none p-0">
            <BulletPoint><strong>News Announcements:</strong> Strategy, calendarization, press release drafting/editing, and targeted outreach.</BulletPoint>
            <BulletPoint><strong>Opportunistic Pitching:</strong> We mine trends, breaking news, and events to place your POV where it matters.</BulletPoint>
            <BulletPoint><strong>Interview Prep & Staffing:</strong> Briefings, message discipline, and follow-through that protects relationships.</BulletPoint>
            <BulletPoint><strong>Media Lists & Relationship Management:</strong> Research, segmentation, and ongoing refinement.</BulletPoint>
            <BulletPoint><strong>Coverage Monitoring & Reporting:</strong> Know exactly what landed, where, and why.</BulletPoint>
        </ul>

        <h3>Sample Program Targets</h3>
        <p>As used with UnityAI, customizable:</p>
        <ul className="list-disc ml-6 space-y-2">
            <li>2–3 media hits per hard news announcement (unless exclusive)</li>
            <li>1–2 opportunistic interviews/month, dependent on news volume</li>
            <li>1–2 earned speaking opportunities during the initial term</li>
        </ul>

        <h3>Engagements & Pricing</h3>
        <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div className="border border-[var(--border-color)] p-6 rounded-lg">
                <h4 className="font-bold text-white text-xl">Retainer</h4>
                <p className="text-[var(--text-secondary)] mt-2">Starting at <strong className="text-accent text-2xl">$6,000/month</strong> (24 hours @ $250/hour)</p>
            </div>
             <div className="border border-[var(--border-color)] p-6 rounded-lg">
                <h4 className="font-bold text-white text-xl">Project-Based</h4>
                <p className="text-[var(--text-secondary)] mt-2">Custom for product launches, funding rounds, repositioning efforts</p>
            </div>
        </div>
        <p className="text-sm text-slate-500 italic mt-4">*Media coverage can’t be guaranteed; our job is to maximize the probability, velocity, and quality of results.</p>
    </ServicePageLayout>
);

export const MessagingPage: React.FC = () => (
     <ServicePageLayout
        title="Your message platform, rebuilt for scale."
        subtitle="A 3–4 week sprint to clarify your brand promise, positioning, tone, and audience-specific value propositions—so everything you say aligns and converts."
        ctaText="Need your new narrative live in under a month?"
        ctaLink="/contact"
    >
        <h3>Deliverables</h3>
        <ul className="list-disc ml-6 space-y-2">
            <li>Brand promise & positioning statement</li>
            <li>Primary & secondary messages</li>
            <li>Tone of voice & elevator pitch</li>
            <li>Boilerplate</li>
            <li>Communication pillars + proof points</li>
            <li>Audience value statements (up to 3)</li>
            <li>Product descriptions / solution narratives</li>
        </ul>

        <h3>Process</h3>
        <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Discovery & Inputs:</strong> Competitive scan, internal content audit, team workshops.</li>
            <li><strong>Drafting & Alignment:</strong> Narrative v1 with review cycles.</li>
            <li><strong>Platform Finalization:</strong> Final doc + rollout plan.</li>
        </ol>
        
        <div className="not-prose grid md:grid-cols-2 gap-8 my-8">
             <div className="border border-[var(--border-color)] p-6 rounded-lg text-center">
                <h4 className="font-bold text-white text-xl">Timeline</h4>
                <p className="text-accent mt-2 text-3xl font-bold">3–4 weeks</p>
            </div>
            <div className="border border-[var(--border-color)] p-6 rounded-lg text-center">
                <h4 className="font-bold text-white text-xl">Investment</h4>
                <p className="text-accent mt-2 text-3xl font-bold">$8,000</p>
                <p className="text-[var(--text-secondary)] text-sm">(approx. 32 hours @ $250/hr)</p>
            </div>
        </div>

        <h3>Optional Add-ons</h3>
        <ul className="list-disc ml-6 space-y-2">
            <li><strong>Investor Deck</strong> (up to 25 slides) – $4,000</li>
            <li><strong>Sales Deck</strong> (up to 15 slides) – $3,000</li>
            <li><strong>Customer One-Pagers</strong> – $1,500 each</li>
        </ul>
    </ServicePageLayout>
);

export const ResearchPage: React.FC = () => (
     <ServicePageLayout
        title="Data that makes your story undeniable."
        subtitle="We design and run surveys, analyze results, and turn insights into PR, content, and sales ammo that separates you from the pack."
        ctaText="Ready to anchor your narrative in data?"
        ctaLink="/contact"
    >
        <h3>What we do</h3>
        <ul className="list-disc ml-6 space-y-2">
            <li>Survey design & vendor coordination</li>
            <li>Statistical analysis & insight extraction</li>
            <li>Data storytelling (PR angles, executive POVs, charts & graphics)</li>
            <li>Report & white paper creation</li>
            <li>Press & social-ready content bundles</li>
        </ul>

        <h3>Why it matters</h3>
        <ul className="list-disc ml-6 space-y-2">
            <li>Elevates thought leadership beyond opinion</li>
            <li>Generates repeatable PR and content hooks</li>
            <li>Increases trust with media, partners, and buyers</li>
        </ul>
        
        <h3>Deliverables (customizable)</h3>
        <ul className="list-disc ml-6 space-y-2">
            <li>Full dataset + analysis memo</li>
            <li>“Top 10 Insights” media pitch doc</li>
            <li>Executive talking points</li>
            <li>Designed report / landing page content</li>
            <li>Social + blog content kits</li>
        </ul>
    </ServicePageLayout>
);

export const SpeakingPage: React.FC = () => (
     <ServicePageLayout
        title="Own the stage. Shape the conversation."
        subtitle="We identify, prioritize, and secure the speaking opportunities, awards, and event presence that build authority and drive growth."
        ctaText="Let’s get your executives where they belong: on stage."
        ctaLink="/contact"
    >
        <h3>What we do</h3>
        <ul className="list-disc ml-6 space-y-2">
            <li>Target list of <strong>high-value conferences, awards, and webinars</strong></li>
            <li>Abstract & submission writing</li>
            <li>Executive prep & messaging</li>
            <li>Media engagement around events</li>
        </ul>

        <h3>Typical target (initial term)</h3>
        <div className="not-prose border border-[var(--border-color)] p-6 rounded-lg text-center my-8">
            <p className="text-accent text-3xl font-bold">1–2</p>
            <p className="text-white mt-1">earned speaking opportunities (scope/volume dependent)</p>
        </div>
    </ServicePageLayout>
);

export const DigitalWebPage: React.FC = () => (
     <ServicePageLayout
        title="Websites and digital systems that convert attention into action."
        subtitle="From Webflow/React builds to SEO, analytics, CRO, and content operations, we make sure the story you tell is discoverable, fast, and measurable."
        ctaText="Need a site that ships fast and scales with you?"
        ctaLink="/contact"
    >
        <h3>Capabilities</h3>
        <ul className="list-disc ml-6 space-y-2 columns-1 md:columns-2">
            <li>Website Strategy & IA</li>
            <li>UX/UI Design & Design Systems</li>
            <li>Web Development (Webflow, React, Ghost, Headless CMS)</li>
            <li>SEO Foundations & On-Page Optimization</li>
            <li>Analytics & Reporting (GA4, dashboards, attribution)</li>
            <li>Conversion Rate Optimization (CRO)</li>
            <li>Content Ops (governance, playbooks, templates)</li>
        </ul>
        
        <h3>Typical timelines</h3>
        <div className="not-prose grid md:grid-cols-3 gap-8 my-8 text-center">
            <div className="border border-[var(--border-color)] p-6 rounded-lg"><h4 className="font-bold text-white">2–4 weeks</h4><p className="text-[var(--text-secondary)] mt-1">Messaging-first microsites / LPs</p></div>
            <div className="border border-[var(--border-color)] p-6 rounded-lg"><h4 className="font-bold text-white">4–10 weeks</h4><p className="text-[var(--text-secondary)] mt-1">Marketing sites (5–15 pages)</p></div>
            <div className="border border-[var(--border-color)] p-6 rounded-lg"><h4 className="font-bold text-white">Scoped</h4><p className="text-[var(--text-secondary)] mt-1">Full-stack builds / migrations</p></div>
        </div>
    </ServicePageLayout>
);

export const ContentStudioPage: React.FC = () => (
     <ServicePageLayout
        title="Collateral that sells, raises, and educates."
        subtitle="Your PR + messaging + digital stack feeds our content engine, so the assets we produce are on-brand, on-strategy, and immediately usable by sales, execs, and PR."
        ctaText="Show me what this looks like for my team."
        ctaLink="/contact"
    >
        <h3>We create:</h3>
        <ul className="list-disc ml-6 space-y-2 columns-1 md:columns-2">
            <li>Investor decks</li>
            <li>Sales decks</li>
            <li>Customer one-pagers</li>
            <li>White papers & reports</li>
            <li>Blog & op-ed programs</li>
            <li>Social content kits</li>
            <li>Visual identity extensions & templates</li>
        </ul>
        
        <div className="not-prose bg-black/20 border border-[var(--border-color)] rounded-lg p-8 my-8">
            <h4 className="font-bold text-white text-xl">Why it works</h4>
            <p className="text-[var(--text-primary)] mt-2">Your <strong>PR + messaging + digital</strong> stack feeds our content engine, so the assets we produce are <strong>on-brand, on-strategy, and immediately usable</strong> by sales, execs, and PR.</p>
        </div>
    </ServicePageLayout>
);