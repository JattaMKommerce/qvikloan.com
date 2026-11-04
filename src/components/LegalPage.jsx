import React from 'react';
import { companyInfo } from '../data/companyInfo';

/**
 * Layout shared by the legal pages: page header, "last updated" line, a table of contents built
 * from `sections` ([{ id, title }]), and the body. Each section in the body should be a
 * <LegalSection id=... title=...> whose id matches an entry in `sections`.
 */
export default function LegalPage({ icon: Icon, badge, title, intro, lastUpdated, sections, children }) {
  return (
    <div className="pb-16">
      <section className="bg-gradient-to-b from-white via-royal-soft/10 to-neutral-bg border-b border-neutral-border py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-soft text-royal-dark text-xs font-semibold">
            {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
            {badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">{title}</h1>
          {intro && <p className="text-base text-slate-blue leading-relaxed">{intro}</p>}
          <p className="text-sm text-neutral-muted">
            {lastUpdated && <>Last updated: {lastUpdated} · </>}
            QvikLoan is operated by {companyInfo.name}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        {sections?.length > 0 && (
          <nav aria-label="On this page" className="rounded-2xl border border-neutral-border bg-white p-5 sm:p-6">
            <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">On this page</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm list-decimal pl-5 text-royal">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:underline">{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article className="rounded-2xl border border-neutral-border bg-white p-6 sm:p-10 space-y-10 text-[15px] text-slate-blue leading-relaxed">
          {children}
        </article>
      </div>
    </div>
  );
}

export function LegalSection({ id, number, title, children }) {
  return (
    <section id={id} className="space-y-3 scroll-mt-28">
      <h2 className="text-xl font-heading font-bold text-navy">
        {number ? `${number}. ` : ''}{title}
      </h2>
      {children}
    </section>
  );
}

/** Highlighted box for the points readers most need to see. */
export function Callout({ tone = 'info', title, children }) {
  const styles = tone === 'warning'
    ? 'bg-amber-50 border-amber-200 text-amber-950'
    : 'bg-royal-soft/60 border-royal/20 text-navy [&_a]:text-royal-dark';
  return (
    <div className={`rounded-xl border p-5 space-y-2 ${styles}`}>
      {title && <p className="font-heading font-bold">{title}</p>}
      {children}
    </div>
  );
}
