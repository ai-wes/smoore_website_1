
import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import SectionHeader from '../components/SectionHeader';

const CheckIcon: React.FC = () => (
  <svg className="h-6 w-6 flex-shrink-0 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="border-t-2 border-accent pt-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-[var(--text-secondary)]">{description}</p>
    </div>
);

const OutcomeItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center p-6">
        <p className="font-serif text-4xl font-bold text-accent">{value}</p>
        <p className="mt-2 text-[var(--text-secondary)]">{label}</p>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Your story, <span className="text-accent">engineered for impact.</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[var(--text-primary)]">
            Senior PR firepower + data-backed messaging + digital execution.
            <br />
            Healthcare & tech brands trust us to <strong className="text-white">launch, reposition, and win</strong> in noisy markets.
          </p>
          <div className="mt-10">
            <CTAButton to="/contact">Request a 1:1 Consultation</CTAButton>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Trusted by leaders from</p>
        <div className="mt-4 text-[var(--text-secondary)] text-sm md:text-base">
          Hims & Hers &bull; Accolade &bull; Cedars-Sinai &bull; Imprivata &bull; IBM Watson &bull; HealthEdge &bull; Lyra Health &bull; Tia &bull; AppliedVR
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard title="PR & Media Relations" description="Hard news, opportunistic pitching, and relentless follow-through."/>
            <ServiceCard title="Messaging & Narrative Lab" description="Distinctive positioning, audience-specific value props."/>
            <ServiceCard title="Research & Insights" description="Survey-led storytelling that gives your narrative teeth."/>
            <ServiceCard title="Digital & Web" description="Strategy, UX, Webflow/React builds, SEO & analytics."/>
            <ServiceCard title="Content Studio" description="Investor decks, sales collateral, one-pagers, white papers, blogs, social."/>
             <div className="border-t-2 border-[var(--border-color)] pt-6">
                <h3 className="text-xl font-bold text-white">Executive Visibility</h3>
                <p className="mt-2 text-[var(--text-secondary)]">Claiming the stages and awards that matter.</p>
            </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Proof in the Process" subtitle="*Media cannot be guaranteed, but our process maximizes your odds, speed, and quality." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-[var(--border-color)] border border-[var(--border-color)] rounded-lg">
            <OutcomeItem value="2–3" label="Placements per hard news announcement" />
            <OutcomeItem value="1–2" label="Opportunistic interviews per month" />
            <OutcomeItem value="2–8" label="Weeks for investor & sales collateral" />
            <OutcomeItem value="4–10" label="Weeks to launch modern websites" />
        </div>
      </section>

      {/* Featured Wins Section */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Featured Wins" />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="border border-[var(--border-color)] p-6 rounded-lg"><p className="text-[var(--text-primary)]">“How Hims & Hers reframed access to GLP-1s in mainstream business media.”</p></div>
            <div className="border border-[var(--border-color)] p-6 rounded-lg"><p className="text-[var(--text-primary)]">“AppliedVR + Kernel Flow: turning complex neuro data into mainstream coverage.”</p></div>
            <div className="border border-[var(--border-color)] p-6 rounded-lg"><p className="text-[var(--text-primary)]">“From stealth to Series A: narrative, messaging, and investor deck that closed the round.”</p></div>
        </div>
        <div className="mt-10 text-center">
            <Link to="/work" className="font-semibold text-accent hover:text-[#d4b071]">See the Work &rarr;</Link>
        </div>
      </section>

      {/* How We're Different Section */}
      <section className="container mx-auto px-4">
        <div className="bg-black/20 rounded-2xl p-8 md:p-12 lg:flex lg:items-center lg:justify-between border border-[var(--border-color)]">
            <div className="lg:w-1/2">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">How We're Different</h2>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12">
                <ul className="space-y-4">
                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-[var(--text-primary)]"><strong className="text-white">Senior-only team.</strong> No handoffs to juniors.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-[var(--text-primary)]"><strong className="text-white">Data-backed narratives.</strong> We prefer facts over fluff.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-[var(--text-primary)]"><strong className="text-white">Measurable & process-efficient.</strong> Clear scopes, clear reporting.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-3 text-[var(--text-primary)]"><strong className="text-white">Health tech depth + modern digital execution.</strong> We don’t stop at press hits.</span></li>
                </ul>
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to unify PR, messaging, and digital?</h2>
        <div className="mt-8">
            <CTAButton to="/contact">Request a Consultation</CTAButton>
        </div>
      </section>
    </div>
  );
};

export default HomePage;