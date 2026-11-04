import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Personal Loans', path: '/personal-loans' },
    { name: 'Business Loans', path: '/business-loans' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  // Shown in the top strip on desktop and at the bottom of the mobile menu.
  const disclosureLinks = [
    { name: 'Lending Partners', path: '/participating-lenders' },
    { name: 'Grievance Redressal', path: '/grievance-redressal' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Compliance Micro-Header */}
      <aside aria-label="Operator and disclosures" className="bg-navy text-white text-[12px] font-medium py-1.5 px-4 hidden md:block border-b border-navy-light/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-accent" />
            <span className="opacity-90">
              Operated by Jatta M Kommerce Private Limited • Connecting borrowers with participating lenders
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs opacity-90">
            {disclosureLinks.map((link, i) => (
              <React.Fragment key={link.path}>
                {i > 0 && <span className="opacity-40" aria-hidden="true">|</span>}
                <Link to={link.path} className="hover:text-teal-accent transition-colors">{link.name}</Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-neutral-border py-3'
            : 'bg-white border-b border-neutral-border py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo */}
            <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-royal rounded-lg p-0.5">
              <img
                src="/logos/QvikLoan_Web.webp"
                alt="QvikLoan Logo"
                className="h-9 sm:h-10 w-auto object-contain"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main" className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[14px] font-semibold tracking-tight transition-colors py-1 ${
                    isActive(link.path)
                      ? 'text-royal font-bold border-b-2 border-royal'
                      : 'text-neutral-text hover:text-royal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                to="/#enquiry-section"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-royal hover:bg-royal-hover text-white text-[14px] font-bold shadow-subtle transition-all duration-200"
              >
                <span>Start an enquiry</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Menu button: phones and tablets (the link bar only fits from lg up) */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                className="p-2 rounded-xl text-neutral-text hover:bg-neutral-bg focus:outline-none focus:ring-2 focus:ring-royal"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          // absolute (not fixed): positioned under the sticky header, scrolled or not.
          <div id="mobile-menu" className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-neutral-border shadow-premium px-4 pt-3 pb-6 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-1 divide-y divide-neutral-border/50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between py-3 px-2 text-[15px] font-semibold ${
                    isActive(link.path) ? 'text-royal' : 'text-neutral-text hover:text-royal'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-muted" />
                </Link>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-border flex flex-col gap-3">
              <Link
                  to="/#enquiry-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-royal text-white text-[15px] font-bold shadow-subtle"
                >
                  <span>Start an enquiry</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-blue pt-1">
                {disclosureLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="hover:text-royal underline-offset-2 hover:underline">{link.name}</Link>
                ))}
              </div>
              <div className="text-center text-xs text-neutral-muted">
                Operated by Jatta M Kommerce Private Limited
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

