import React, { useState } from 'react';
import { ArrowRight, Bell, User, Check, ShieldCheck, Sparkles } from 'lucide-react';

export default function BranchHeroMockup({ onSelectAmount }) {
  const [selectedType, setSelectedType] = useState('personal');
  const [amountIndex, setAmountIndex] = useState(1);

  const amounts = selectedType === 'personal' 
    ? [
        { label: '₹1,50,000', value: 150000, tenure: '12 - 36 Mo.' },
        { label: '₹3,00,000', value: 300000, tenure: '12 - 48 Mo.' },
        { label: '₹5,00,000', value: 500000, tenure: '24 - 60 Mo.' },
      ]
    : [
        { label: '₹5,00,000', value: 500000, tenure: '12 - 36 Mo.' },
        { label: '₹10,00,000', value: 1000000, tenure: '24 - 48 Mo.' },
        { label: '₹20,00,000', value: 2000000, tenure: '36 - 60 Mo.' },
      ];

  const current = amounts[amountIndex];

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center py-4 select-none">
      
      {/* ==================================================
          ARTISTIC BOTANICAL & GEOMETRIC BACKDROP (Branch.co Style)
          Inspired by Branch International: Stylized leaves with
          polka dots and diagonal stripes in teal, coral, and cyan.
          ================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
        <svg viewBox="0 0 500 500" className="w-full h-full opacity-90 filter drop-shadow-sm">
          <defs>
            {/* Coral Polka Dot Pattern */}
            <pattern id="coralDots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="4.5" fill="#F43F5E" />
            </pattern>
            {/* Cyan Polka Dot Pattern */}
            <pattern id="cyanDots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="9" cy="9" r="5" fill="#0284C7" />
            </pattern>
            {/* Mint / Teal Diagonal Stripe Pattern */}
            <pattern id="mintStripes" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="16" stroke="#34D399" strokeWidth="6" />
            </pattern>
          </defs>

          {/* Top-Left Leaf with Coral Polka Dots */}
          <g transform="translate(10, 40)">
            {/* Deep green leaf base */}
            <path d="M 120 180 C 70 120, 40 40, 110 10 C 180 50, 170 140, 120 180 Z" fill="#14532D" />
            {/* Stem */}
            <path d="M 120 180 Q 115 100, 110 10" stroke="#052E16" strokeWidth="3" fill="none" />
            {/* Pattern overlay */}
            <path d="M 120 180 C 70 120, 40 40, 110 10 C 180 50, 170 140, 120 180 Z" fill="url(#coralDots)" opacity="0.85" />
          </g>

          {/* Top-Right Leaf with Mint Stripes */}
          <g transform="translate(260, 20)">
            <path d="M 40 190 C 80 130, 160 80, 180 10 C 130 5, 50 80, 40 190 Z" fill="#064E3B" />
            <path d="M 40 190 Q 110 100, 180 10" stroke="#022C22" strokeWidth="3" fill="none" />
            <path d="M 40 190 C 80 130, 160 80, 180 10 C 130 5, 50 80, 40 190 Z" fill="url(#mintStripes)" opacity="0.9" />
          </g>

          {/* Bottom-Left Leaf with Cyan Dots */}
          <g transform="translate(0, 220)">
            <path d="M 140 100 C 60 120, 10 200, 40 250 C 110 240, 150 180, 140 100 Z" fill="#0F766E" />
            <path d="M 140 100 Q 80 180, 40 250" stroke="#134E4A" strokeWidth="3" fill="none" />
            <path d="M 140 100 C 60 120, 10 200, 40 250 C 110 240, 150 180, 140 100 Z" fill="url(#cyanDots)" opacity="0.85" />
          </g>
        </svg>

        {/* Soft edge fade so it blends into the background */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/50 to-transparent" />
      </div>

      {/* ==================================================
          BRANCH.CO STYLE SMARTPHONE DEVICE
          ================================================== */}
      <div className="relative z-10 w-[290px] sm:w-[310px] bg-white rounded-[40px] shadow-[0_25px_60px_-15px_rgba(20,36,58,0.22)] border-[7px] border-white ring-1 ring-neutral-border/80 overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Phone Speaker & Camera Notch */}
        <div className="pt-3 pb-2 flex justify-center items-center bg-white">
          <div className="w-12 h-1 bg-slate-300 rounded-full" />
        </div>

        {/* App Screen Container */}
        <div className="px-5 pb-6 pt-1 space-y-4 bg-white text-navy font-sans">
          
          {/* App Header */}
          <div className="flex items-center justify-between pt-1">
            <span className="font-heading font-extrabold text-base tracking-tight text-navy">
              My Loan
            </span>
            <div className="flex items-center gap-2.5 text-slate-400">
              <Bell className="w-4 h-4 hover:text-navy cursor-pointer transition-colors" />
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <User className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Category Toggle (Personal / Business) */}
          <div className="grid grid-cols-2 p-1 bg-slate-100/90 rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => { setSelectedType('personal'); setAmountIndex(1); }}
              className={`py-1.5 rounded-lg transition-all ${
                selectedType === 'personal'
                  ? 'bg-white text-navy shadow-xs font-bold'
                  : 'text-slate-500 hover:text-navy'
              }`}
            >
              Personal
            </button>
            <button
              type="button"
              onClick={() => { setSelectedType('business'); setAmountIndex(1); }}
              className={`py-1.5 rounded-lg transition-all ${
                selectedType === 'business'
                  ? 'bg-white text-navy shadow-xs font-bold'
                  : 'text-slate-500 hover:text-navy'
              }`}
            >
              Business
            </button>
          </div>

          <p className="text-[12px] text-slate-500 text-center font-normal">
            Swipe and tap to select a loan amount
          </p>

          {/* Central Circular Amount Dial / Bubble (Exact Branch.co Style) */}
          <div className="relative py-2 flex items-center justify-center">
            
            {/* Peeking Left Amount Bubble */}
            <button
              type="button"
              onClick={() => setAmountIndex(Math.max(0, amountIndex - 1))}
              disabled={amountIndex === 0}
              className={`absolute -left-10 w-24 h-24 rounded-full bg-slate-100/80 border border-slate-200/60 flex items-center justify-center transition-all duration-200 ${
                amountIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-200/80 cursor-pointer'
              }`}
            >
              <span className="text-[11px] font-bold text-slate-400 pl-6">
                {amountIndex > 0 ? amounts[amountIndex - 1].label : ''}
              </span>
            </button>

            {/* Central Active Cyan Circle */}
            <div className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#38BDF8] via-[#0EA5E9] to-[#0284C7] shadow-[0_12px_28px_rgba(2,132,199,0.35)] flex flex-col items-center justify-center text-white transition-all transform hover:scale-105 cursor-pointer">
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-90">
                PRINCIPAL
              </span>
              <span className="text-2xl font-heading font-extrabold tracking-tight mt-0.5">
                {current.label}
              </span>
              <span className="text-[10px] font-medium opacity-85 mt-0.5">
                Tenure {current.tenure}
              </span>
            </div>

            {/* Peeking Right Amount Bubble */}
            <button
              type="button"
              onClick={() => setAmountIndex(Math.min(amounts.length - 1, amountIndex + 1))}
              disabled={amountIndex === amounts.length - 1}
              className={`absolute -right-10 w-24 h-24 rounded-full bg-slate-100/80 border border-slate-200/60 flex items-center justify-center transition-all duration-200 ${
                amountIndex === amounts.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-200/80 cursor-pointer'
              }`}
            >
              <span className="text-[11px] font-bold text-slate-400 pr-6">
                {amountIndex < amounts.length - 1 ? amounts[amountIndex + 1].label : ''}
              </span>
            </button>
          </div>

          {/* Stepper Dots Indicator */}
          <div className="flex justify-center gap-1.5 pt-1">
            {amounts.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setAmountIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  amountIndex === i ? 'w-6 bg-[#0284C7]' : 'w-1.5 bg-slate-200'
                }`}
              />
            ))}
          </div>

          {/* Continue Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onSelectAmount(selectedType, current.value)}
              className="w-full py-3 px-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-heading font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center text-[10px] text-slate-400 pt-0.5">
            Participating RBI-regulated lenders only
          </div>

        </div>

        {/* Phone Bottom Home Bar */}
        <div className="py-2 bg-white flex justify-center">
          <div className="w-24 h-1 bg-slate-300 rounded-full" />
        </div>

      </div>

      {/* Floating Trust Pills */}
      <div className="absolute -bottom-2 -left-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-border shadow-md text-navy text-xs font-bold">
        <Check className="w-3.5 h-3.5 text-teal-dark" />
        <span>RBI-Regulated Underwriting</span>
      </div>

      <div className="absolute top-4 -right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-border shadow-md text-navy text-xs font-bold">
        <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
        <span>Key Facts Statement (KFS)</span>
      </div>

    </div>
  );
}

