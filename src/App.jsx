import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoanEnquiryModal from './components/LoanEnquiryModal';

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState('personal');

  const handleOpenEnquiry = (type = 'personal') => {
    setEnquiryType(type);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-bg text-neutral-text antialiased">
      <ScrollToTop />
      
      {/* Sticky Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry('personal')} />

      {/* Main Content View */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/personal-loans" element={<PersonalLoansPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/business-loans" element={<BusinessLoansPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/how-it-works" element={<HowItWorksPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/about-us" element={<AboutUsPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/participating-lenders" element={<ParticipatingLendersPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressalPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="*" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
        </Routes>
      </main>

      {/* Global Interactive Enquiry Modal */}
      <LoanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
        initialType={enquiryType}
      />

      {/* Corporate Compliance Footer */}
      <Footer />
    </div>
  );
}
