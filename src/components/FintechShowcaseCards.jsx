import React from 'react';
import { ArrowUpRight, TrendingUp, ShieldCheck, ArrowRight, Sparkles, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FintechShowcaseCards({ onEnquireClick }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      
      {/* Card 1: Transparent Comparison & Financial Growth (Paritetbank Style Left Card) */}
      <div className="lg:col-span-6 backdrop-blur-xl bg-white/90 rounded-card-lg border border-neutral-border shadow-subtle hover-lift p-8 flex flex-col justify-between overflow-hidden relative group">
        <div className="space-y-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-soft text-royal text-xs font-bold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Digital Borrowing Facilitation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy leading-tight">
            Transparent comparison for informed decisions
          </h3>
          <p className="text-sm text-slate-blue leading-relaxed max-w-md">
            Review loan options and compare monthly instalments and APRs directly across participating lenders. Fast digital evaluation with zero hidden surprises.
          </p>
        </div>

        {/* Visual Chart Graphic & Loan Amount Pills */}
        <div className="mt-8 pt-4 relative z-10">
          {/* Amount Pills */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3.5 py-1.5 rounded-full bg-royal text-white text-xs font-bold shadow-sm">
              ₹50,000
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-royal-soft text-royal text-xs font-bold border border-royal/20">
              ₹5,00,000
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-neutral-bg text-navy text-xs font-bold border border-neutral-border">
              ₹25,00,000
            </span>
          </div>

          {/* Upward Line Graphic with SVG Gradient */}
          <div className="h-28 w-full relative rounded-xl overflow-hidden bg-gradient-to-t from-royal-soft/40 to-transparent flex items-end">
            <svg
              className="w-full h-24"
              viewBox="0 0 400 100"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#356AE6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#356AE6" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0 80 Q100 70 200 40 T400 10 L400 100 L0 100 Z"
                fill="url(#chartGradient)"
              />
              <path
                d="M0 80 Q100 70 200 40 T400 10"
                stroke="#356AE6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute top-2 right-4 flex items-center gap-1 text-xs font-bold text-royal bg-white px-2.5 py-1 rounded-full shadow-subtle border border-royal/10">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Multi-Lender Access</span>
            </div>
          </div>
        </div>

        {/* Ambient subtle background glow */}
        <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-royal/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Card 2: Floating Digital Cards (Paritetbank Style Right Card) */}
      <div className="lg:col-span-6 bg-gradient-to-br from-navy via-slate-blue to-navy-deep rounded-card-lg text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-premium group">
        
        {/* Subtle dot matrix pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        <div className="space-y-2 z-10">
          <span className="text-[11px] font-bold tracking-widest uppercase text-teal-accent">
            Institutional Network
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight">
            Seamless Digital Lending
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
            Access transparent retail and commercial loan evaluation from participating RBI-registered NBFCs.
          </p>
        </div>

        {/* Floating Realistic Embossed Cards Visual */}
        <div className="relative my-8 sm:my-10 h-44 sm:h-48 flex items-center justify-center z-10">
          
          {/* Back Card (Slightly tilted) */}
          <div className="absolute w-64 sm:w-72 h-38 sm:h-40 rounded-xl bg-gradient-to-tr from-slate-blue/90 to-royal/70 border border-white/20 shadow-2xl p-4 transform -rotate-6 -translate-x-4 -translate-y-2 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div className="w-8 h-6 rounded bg-amber-200/80 shadow-inner flex items-center justify-center text-[8px] font-mono font-bold text-amber-900">
                CHIP
              </div>
              <span className="text-[11px] font-extrabold tracking-widest text-white/90">QVIKLOAN</span>
            </div>
            <div className="mt-6 text-sm font-mono tracking-widest text-white/80">
              •••• •••• •••• 8981
            </div>
            <div className="mt-3 flex justify-between items-end text-[10px] text-white/70">
              <span>COMMERCIAL TIER</span>
              <span className="font-bold text-white text-xs">PARTNER</span>
            </div>
          </div>

          {/* Front Card (Embossed, crisp, glossy) */}
          <div className="absolute w-64 sm:w-72 h-38 sm:h-40 rounded-xl bg-gradient-to-br from-royal via-royal-hover to-navy-light border border-white/30 shadow-2xl p-4 transform rotate-3 translate-x-4 translate-y-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex justify-between items-start">
              <div className="w-8 h-6 rounded bg-amber-300/90 shadow-sm flex items-center justify-center text-[7px] font-mono font-bold text-amber-950">
                CHIP
              </div>
              <div className="text-right">
                <span className="text-[11px] font-heading font-extrabold tracking-wider text-white block">QvikLoan</span>
                <span className="text-[9px] text-teal-accent font-semibold">PREMIER ACCESS</span>
              </div>
            </div>
            <div className="mt-5 text-sm sm:text-base font-mono tracking-wider font-semibold text-white text-shadow-sm">
              5550 9898 1098 8981
            </div>
            <div className="mt-3 flex justify-between items-end text-[10px] text-white/90">
              <div>
                <span className="text-[8px] text-slate-300 block uppercase">Applicant Tier</span>
                <span className="font-semibold tracking-wider">VERIFIED APPLICANT</span>
              </div>
              <div className="flex items-center gap-1 font-bold text-xs text-white">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block -mr-1.5" />
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400/80 inline-block" />
              </div>
            </div>
          </div>

        </div>

        {/* Card CTA Action */}
        <div className="z-10 pt-2 flex items-center justify-between">
          <button
            onClick={() => {
              const el = document.getElementById('enquiry-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-navy font-bold text-xs sm:text-sm hover:bg-neutral-bg transition-colors shadow-subtle group-hover:shadow-premium"
          >
            <span>Explore Loan Options</span>
            <ArrowRight className="w-4 h-4 ml-1.5 text-royal" />
          </button>
          <span className="text-[11px] text-slate-300/80">Direct Lender Evaluation</span>
        </div>

      </div>

    </div>
  );
}

