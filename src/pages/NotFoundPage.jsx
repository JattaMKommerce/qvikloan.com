import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../lib/usePageMeta';

export default function NotFoundPage() {
  usePageMeta('Page not found', 'This page does not exist on QvikLoan.');

  return (
    <section className="max-w-2xl mx-auto px-4 py-24 text-center space-y-5">
      <p className="text-sm font-bold text-royal">404</p>
      <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy">We couldn’t find that page</h1>
      <p className="text-slate-blue">The link may be old or mistyped.</p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link to="/" className="px-5 py-2.5 rounded-xl bg-royal text-white font-semibold text-sm hover:bg-royal-hover">Go to the home page</Link>
        <Link to="/contact-us" className="px-5 py-2.5 rounded-xl border border-neutral-border bg-white text-navy font-semibold text-sm hover:border-royal">Contact us</Link>
      </div>
    </section>
  );
}
