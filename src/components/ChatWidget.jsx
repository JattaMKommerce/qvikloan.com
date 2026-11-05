import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { companyInfo, phoneDigits } from '../data/companyInfo';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasOpened(true);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const waUrl = `https://wa.me/${phoneDigits(companyInfo.whatsapp)}?text=Hi%20QvikLoan%2C%20I%20have%20a%20question%20about%20loan%20options.`;

  return (
    <div role="region" aria-label="Chat and WhatsApp support">
      {/* 1. Floating WhatsApp Button on the LEFT Side */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with QvikLoan on WhatsApp"
        className="fixed left-4 sm:left-6 bottom-5 sm:bottom-6 z-50 inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-[#0F7A40] hover:bg-[#0C6634] text-white shadow-premium hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 group border-2 border-white"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.275-.1-.476-.15-.677.15-.2.301-.777.977-.953 1.178-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.496-.897-.798-1.503-1.784-1.68-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.244-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.229 3.111c.15.2 2.124 3.243 5.145 4.547.719.31 1.28.496 1.718.636.723.23 1.381.197 1.901.12.58-.087 1.78-.727 2.031-1.43.251-.703.251-1.304.176-1.43-.076-.126-.276-.201-.577-.352z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.055 21.6a.75.75 0 0 0 .937.937l4.432-1.383A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.5a8.47 8.47 0 0 1-4.33-1.187.75.75 0 0 0-.573-.083l-3.327 1.038 1.038-3.327a.75.75 0 0 0-.083-.573A8.468 8.468 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
        </svg>
        <span className="hidden sm:inline text-xs sm:text-sm font-bold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>

      {/* 2. Floating AI Assistant (Bottom-Right, waving video/avatar, +4% scale) */}
      <div className="fixed bottom-0 right-2 sm:right-6 z-50 pointer-events-none">
        
        {/* Glassmorphic Speech Bubble / Callout Prompt */}
        {!isOpen && !bubbleDismissed && (
          <div
            aria-label="Loan enquiry prompt"
            className="pointer-events-auto absolute right-[125px] sm:right-[165px] bottom-[34px] sm:bottom-[44px] w-[220px] sm:w-[260px] backdrop-blur-2xl bg-white/95 rounded-2xl rounded-tr-sm p-3.5 pr-7 shadow-[0_16px_40px_rgba(15,74,168,0.18)] border border-white/80 ring-1 ring-royal/15 animate-in fade-in slide-in-from-right-2 duration-300"
          >
            <p
              onClick={handleOpenChat}
              className="text-xs sm:text-[13px] font-semibold text-navy leading-snug cursor-pointer hover:text-royal transition-colors"
            >
              Questions about personal or business loans? Ask our assistant.
            </p>

            {/* Bubble Tail Pointing RIGHT towards Assistant's head */}
            <div
              className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[8px] border-l-white/95 filter drop-shadow-[1px_0_1px_rgba(0,0,0,0.06)]"
              aria-hidden="true"
            />

            {/* Dismiss 'x' button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBubbleDismissed(true);
              }}
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-navy hover:bg-royal-soft/50 rounded-md transition-colors"
              aria-label="Dismiss greeting"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Assistant Avatar Button (Waving hi 👋, +4% size) */}
        {!isOpen && (
          <button
            onClick={handleOpenChat}
            className="pointer-events-auto relative group focus:outline-none block cursor-pointer transition-transform duration-200 transform hover:-translate-y-1 scale-[1.04] origin-bottom-right"
            aria-label="Open AI Loan Assistant Chat"
          >
            {/* Assistant Cutout Image / Waving Animation */}
            <div className="relative w-[115px] h-[92px] sm:w-[152px] sm:h-[122px]">
              <picture>
                <source srcSet="/images/assistant-waving.webp" type="image/webp" />
                <img
                  src="/images/assistant.png"
                  alt="QvikLoan AI Assistant waving hi"
                  className="w-full h-full object-contain object-bottom filter drop-shadow-[0_8px_16px_rgba(11,31,69,0.22)]"
                  loading="eager"
                />
              </picture>

              {/* Cyan/Blue Chat Icon Badge on Her Shoulder */}
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#06A3DA] text-white border-2 border-white shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <MessageCircle className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 fill-white" />
              </div>
            </div>
          </button>
        )}

        {/* 3. Open Chat Window — Redesigned with True Site Glassmorphism */}
        {isOpen && (
          <div className="pointer-events-auto fixed sm:absolute bottom-0 sm:bottom-3 right-0 sm:right-0 w-full sm:w-[410px] h-[88vh] sm:h-[min(620px,calc(100vh-90px))] backdrop-blur-2xl bg-white/95 rounded-t-3xl sm:rounded-3xl shadow-[0_25px_70px_-10px_rgba(15,74,168,0.35),0_0_0_1px_rgba(53,106,230,0.18)] border border-white/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 z-50">
            
            {/* Glassmorphic Fintech Header Matching Site Theme */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 bg-gradient-to-r from-navy via-navy to-[#1e3a8a] text-white border-b border-white/10 shadow-sm shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white/10 border-2 border-white/40 shadow-sm shrink-0">
                  <img
                    src="/images/assistant.png"
                    alt="QvikLoan Assistant"
                    className="w-full h-full object-cover object-top scale-125"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-navy" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-heading font-extrabold text-sm text-white tracking-tight">
                      QvikLoan Assistant
                    </h4>
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-royal-soft/20 text-[#93c5fd] text-[9px] font-bold border border-white/20">
                      <Sparkles className="w-2.5 h-2.5" />
                      AI
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Automated AI Assistant • Instant Help</span>
                  </p>
                </div>
              </div>

              {/* Minimalist Close Button */}
              <button
                onClick={handleCloseChat}
                className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/15 transition-all"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body (iframe) with smooth container */}
            <div className="flex-1 w-full bg-[#0a0a0f] relative overflow-hidden">
              {hasOpened && (
                <iframe
                  src="https://iamkratu.ai/customer-chat/?key=b37315e4a118f16484c57c6c2871ba8c"
                  title="QvikLoan AI Chat Assistant"
                  className="w-full h-full border-0"
                  allow="clipboard-write; microphone"
                />
              )}
            </div>

            {/* Notice: automated replies, and what not to type into the chat */}
            <div className="py-2.5 px-4 backdrop-blur-xl bg-white/95 border-t border-neutral-border/70 text-center text-[11px] leading-snug text-slate-600 shrink-0">
              Automated replies are general information, not a lending decision. Don’t share PAN, Aadhaar, bank details
              or OTPs here.{' '}
              <Link to="/privacy-policy" onClick={handleCloseChat} className="text-royal font-semibold underline hover:text-royal-hover">Privacy</Link>
              <span className="block text-slate-500 font-medium mt-0.5 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-royal inline shrink-0" />
                <span>Operated by <strong>{companyInfo.name}</strong></span>
              </span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
