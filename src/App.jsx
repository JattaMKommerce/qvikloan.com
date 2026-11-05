import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

import HomePage from './pages/HomePage';
import PersonalLoansPage from './pages/PersonalLoansPage';
import BusinessLoansPage from './pages/BusinessLoansPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import GrievanceRedressalPage from './pages/GrievanceRedressalPage';
import ContactUsPage from './pages/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import MetaPersonalLoanPage from './pages/MetaPersonalLoanPage';

// Ad landing page: keeps the footer, but has its own minimal header and no chat pop-up.
const AD_LANDING_PATH = '/meta-personal-loan';

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
  const isAdLanding = useLocation().pathname === AD_LANDING_PATH;

  return (
    <div className="min-h-screen flex flex-col text-neutral-text antialiased">
      <ScrollManager />

      {!isAdLanding && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-loans" element={<PersonalLoansPage />} />
          <Route path="/business-loans" element={<BusinessLoansPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressalPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path={AD_LANDING_PATH} element={<MetaPersonalLoanPage />} />
          {/* Alternative and old-site addresses */}
          {/* How It Works is now a section of the home page */}
          <Route path="/how-it-works" element={<Navigate to={{ pathname: '/', hash: '#how-it-works' }} replace />} />
          {/* The Lending Partners page was removed: its addresses go to the partner strip on the home page */}
          <Route path="/participating-lenders" element={<Navigate to={{ pathname: '/', hash: '#lending-partners' }} replace />} />
          <Route path="/lending-partners" element={<Navigate to={{ pathname: '/', hash: '#lending-partners' }} replace />} />
          <Route path="/financial-disclaimer" element={<Navigate to="/disclaimer" replace />} />
          <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="/personal-loan" element={<Navigate to="/personal-loans" replace />} />
          <Route path="/business-loan" element={<Navigate to="/business-loans" replace />} />
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="/grievance" element={<Navigate to="/grievance-redressal" replace />} />
          <Route path="/partners" element={<Navigate to={{ pathname: '/', hash: '#lending-partners' }} replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      {/* iamkratu.ai chatbot, on every page */}
      {!isAdLanding && <ChatWidget />}
    </div>
  );
}
