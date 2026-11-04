import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

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

  const cleanPhone = companyInfo.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=Hi%20QvikLoan%2C%20I%20would%20like%20to%20know%20more%20about%20your%20loans.`;

  return (
    <>
      {/* 1. Floating WhatsApp Button on the LEFT Side */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with QvikLoan on WhatsApp"
        className="fixed left-4 sm:left-6 bottom-5 sm:bottom-6 z-50 inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white shadow-premium hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 group border-2 border-white"
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

      {/* 2. Floating AI Assistant (Bottom-Right, waving hand, +4% scale) */}
      <div className="fixed bottom-0 right-2 sm:right-6 z-50 pointer-events-none">
        
        {/* Speech Bubble / Callout Prompt - Positioned to the left of her head */}
        {!isOpen && !bubbleDismissed && (
          <aside
            aria-label="Loan enquiry prompt"
            className="pointer-events-auto absolute right-[125px] sm:right-[165px] bottom-[34px] sm:bottom-[44px] w-[220px] sm:w-[260px] bg-white rounded-2xl rounded-tr-sm p-3.5 pr-7 shadow-premium border border-neutral-border animate-in fade-in slide-in-from-right-2 duration-300"
          >
            <p
              onClick={handleOpenChat}
              className="text-xs sm:text-[13px] font-semibold text-navy leading-snug cursor-pointer hover:text-royal transition-colors"
            >
              Looking for a personal or business loan? Let's find the right option for you.
            </p>

            {/* Bubble Tail Pointing RIGHT towards Assistant's head */}
            <div
              className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[8px] border-l-white filter drop-shadow-[1px_0_1px_rgba(0,0,0,0.06)]"
              aria-hidden="true"
            />

            {/* Dismiss 'x' button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBubbleDismissed(true);
              }}
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-navy hover:bg-neutral-bg rounded-md transition-colors"
              aria-label="Dismiss greeting"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </aside>
        )}

        {/* Assistant Avatar Button (Waving hi 👋, +4% size) */}
        {!isOpen && (
          <button
            onClick={handleOpenChat}
            className="pointer-events-auto relative group focus:outline-none block cursor-pointer transition-transform duration-200 transform hover:-translate-y-1 scale-[1.04] origin-bottom-right"
            aria-label="Open AI Loan Assistant Chat"
          >
            {/* Assistant Cutout Image */}
            <div className="relative w-[115px] h-[92px] sm:w-[152px] sm:h-[122px]">
              <img
                src="/images/assistant.png"
                alt="QvikLoan AI Assistant waving hi"
                className="w-full h-full object-contain object-bottom filter drop-shadow-[0_8px_16px_rgba(11,31,69,0.22)]"
                loading="eager"
              />

              {/* Cyan/Blue Chat Icon Badge on Her Shoulder */}
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#06A3DA] text-white border-2 border-white shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <MessageCircle className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 fill-white" />
              </div>
            </div>
          </button>
        )}

        {/* 3. Open Chat Window (Embedded Kratu AI Chatbot) */}
        {isOpen && (
          <div className="pointer-events-auto fixed sm:absolute bottom-0 sm:bottom-2 right-0 sm:right-0 w-full sm:w-[390px] h-[85vh] sm:h-[min(590px,calc(100vh-100px))] bg-white rounded-t-2xl sm:rounded-2xl shadow-premium border border-neutral-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0F172A] text-white border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-800 border border-slate-700">
                  <img
                    src="/images/assistant.png"
                    alt=""
                    className="w-full h-full object-cover object-top scale-125"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-slate-900" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-white leading-tight">
                    QvikLoan Assistant
                  </h4>
                  <p className="text-[10px] text-slate-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online • Instant Help</span>
                  </p>
                </div>
              </div>

              <button
                onClick={handleCloseChat}
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body (iframe) */}
            <div className="flex-1 w-full bg-[#0F172A] relative">
              {hasOpened && (
                <iframe
                  src="https://iamkratu.ai/customer-chat/?key=2e7b577ed59a3cdc5e80a98d4783b391"
                  title="QvikLoan AI Chat Assistant"
                  className="w-full h-full border-0"
                  allow="clipboard-write; microphone"
                />
              )}
            </div>

            {/* Compliance Footer Note */}
            <div className="py-1 px-3 bg-[#0B132B] border-t border-slate-800 text-center">
              <span className="text-[10px] text-slate-400">
                Operated by Jatta M Kommerce Private Limited
              </span>
            </div>

          </div>
        )}

      </div>
    </>
  );
}
