import React from 'react';
import { Link } from 'react-router-dom';
import { participatingLenders } from '../data/lendersData';

// Enough logos in each half of the strip to fill a wide screen, so the loop never shows a gap.
const MIN_PER_HALF = 8;

/**
 * Scrolling strip of lending partner logos, shown under the home page hero.
 *
 * It lists ONLY the verified lenders in data/lendersData.js (signed agreement, lender confirmation,
 * details copied from the lender's own records). With no lender there, it renders nothing.
 * Never add a bank's or NBFC's name or logo here, or anywhere on the site, without that agreement:
 * it would mislead borrowers, use the lender's trademark without permission and break Meta's ad policy.
 */
export default function LenderLogoLoop() {
  const lenders = participatingLenders;
  if (lenders.length === 0) return null;

  const half = Array.from({ length: Math.ceil(MIN_PER_HALF / lenders.length) }, () => lenders).flat();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="lending-partners-loop">
      <div className="text-center mb-5">
        <h2 id="lending-partners-loop" className="text-xs font-bold text-royal uppercase tracking-wider">
          Our lending partners
        </h2>
        <p className="mt-1.5 text-sm text-slate-blue">
          RBI-registered banks and NBFCs. Details on our{' '}
          <Link to="/participating-lenders" className="text-royal font-semibold underline">Lending Partners</Link> page.
        </p>
      </div>

      <div className="logo-loop glass rounded-2xl py-5 sm:py-6 overflow-hidden">
        <ul className="logo-loop-track flex w-max items-center">
          {[...half, ...half].map((lender, i) => {
            const duplicate = i >= lenders.length;
            return (
              <li
                key={`${lender.id}-${i}`}
                aria-hidden={duplicate || undefined}
                className={`shrink-0 px-6 sm:px-10 ${duplicate ? 'logo-loop-dup' : ''}`}
              >
                {lender.logo ? (
                  <img
                    src={lender.logo}
                    alt={duplicate ? '' : lender.legalName}
                    className="h-8 sm:h-10 w-auto max-w-[160px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-blue/80 whitespace-nowrap">
                    {lender.brandName || lender.legalName}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
