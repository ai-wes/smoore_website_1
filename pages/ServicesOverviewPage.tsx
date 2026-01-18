
import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link }) => (
  <div className="border border-[var(--border-color)] rounded-xl p-8 flex flex-col group hover:border-accent transition-colors duration-300">
    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">{title}</h3>
    <p className="mt-4 text-[var(--text-secondary)] flex-grow">{description}</p>
    <div className="mt-6">
      <Link to={link} className="font-semibold text-accent hover:text-[#d4b071] transition-colors">
        Explore {title.split(' ')[0]} &rarr;
      </Link>
    </div>
  </div>
);

const ServicesOverviewPage: React.FC = () => {
  const services = [
    { title: 'PR & Media Relations', description: 'Hard news cycles, opportunistic thought-leadership, and executive visibility—managed end-to-end, from targeting to briefing to coverage tracking.', link: '/services/pr-media-relations' },
    { title: 'Messaging & Narrative Lab', description: 'A 3–4 week sprint to reset your brand story, positioning, tone, and audience-specific value props—the foundation for everything else.', link: '/services/messaging-narrative' },
    { title: 'Research & Insights', description: 'Survey design, data analysis, and statistically credible storytelling that earns attention, builds authority, and fuels repeatable content.', link: '/services/research-insights' },
    { title: 'Digital & Web', description: 'Strategy, UX, design, web builds (Webflow/React/Ghost), SEO, analytics, conversion rate optimization—built to capture and convert attention.', link: '/services/digital-web' },
    { title: 'Content Studio', description: 'Investor + sales decks, customer one-pagers, white papers, blog programs, social calendars, and design systems that scale.', link: '/services/content-studio' },
    { title: 'Speaking, Awards & Events', description: 'Identify, prioritize, and submit to the conferences, awards, and stages that matter—and prep your execs to nail them.', link: '/services/speaking-awards' },
  ];

  return (
    <PageShell>
      <SectionHeader
        title="One team. PR, narrative, research, and digital—all aligned to outcomes."
        subtitle="We design communications systems that don’t stop at headlines. Our model ensures your PR, messaging, digital content, and web experience reinforce each other, so every touchpoint moves your audience toward adoption, investment, or action."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
        <div className="border border-[var(--border-color)] rounded-xl p-8 flex flex-col items-center justify-center text-center bg-black/10">
            <h3 className="text-xl font-bold text-white">Crisis / Issues Communications</h3>
            <p className="mt-2 text-[var(--text-secondary)]">Rapid-response counsel and frameworks to protect brand trust when it matters most.</p>
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <SectionHeader 
          title="Not sure where to start?" 
          subtitle="We’ll map the fastest path to impact."
          className="!mb-8"
          titleClassName="!text-3xl font-serif"
        />
        <CTAButton to="/contact">Request a 1:1 Consultation</CTAButton>
      </div>
    </PageShell>
  );
};

export default ServicesOverviewPage;