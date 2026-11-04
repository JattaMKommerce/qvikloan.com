import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

import HomePage from './pages/HomePage';
import PersonalLoansPage from './pages/PersonalLoansPage';
import BusinessLoansPage from './pages/BusinessLoansPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutUsPage from './pages/AboutUsPage';
import ParticipatingLendersPage from './pages/ParticipatingLendersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import GrievanceRedressalPage from './pages/GrievanceRedressalPage';
import ContactUsPage from './pages/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage';

// On route change: scroll to top, or to the section named in the URL hash
// (e.g. /#enquiry-section from the navbar on any page).
function ScrollManager() {
  // `key` changes on every link click, so clicking a form link again still scrolls.
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // Wait one frame so the new page has rendered before we look for the section.
    const t = setTimeout(() => {
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 90; // clear the sticky navbar
          window.scrollTo({ top, behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(t);
  }, [pathname, hash, key]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-neutral-text antialiased">
      <ScrollManager />

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-loans" element={<PersonalLoansPage />} />
          <Route path="/business-loans" element={<BusinessLoansPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/participating-lenders" element={<ParticipatingLendersPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressalPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          {/* Alternative and old-site addresses */}
          <Route path="/lending-partners" element={<Navigate to="/participating-lenders" replace />} />
          <Route path="/financial-disclaimer" element={<Navigate to="/disclaimer" replace />} />
          <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      {/* iamkratu.ai chatbot, on every page */}
      <ChatWidget />
    </div>
  );
}
