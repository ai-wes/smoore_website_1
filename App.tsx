
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import { PRMediaPage, MessagingPage, ResearchPage, SpeakingPage, DigitalWebPage, ContentStudioPage } from './pages/ServicePages';
import ApproachPage from './pages/ApproachPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-[var(--bg-dark)] text-[var(--text-primary)] font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/services/pr-media-relations" element={<PRMediaPage />} />
            <Route path="/services/messaging-narrative" element={<MessagingPage />} />
            <Route path="/services/research-insights" element={<ResearchPage />} />
            <Route path="/services/speaking-awards" element={<SpeakingPage />} />
            <Route path="/services/digital-web" element={<DigitalWebPage />} />
            <Route path="/services/content-studio" element={<ContentStudioPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;