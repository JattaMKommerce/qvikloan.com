import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://qvikloan.com';
const DEFAULT_TITLE = 'QvikLoan | Explore Personal & Business Loan Options';

/**
 * Sets the browser-tab title, meta description and canonical URL for the current page.
 * Pass title=null for the home page to keep the default title.
 */
export function usePageMeta(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title ? `${title} | QvikLoan` : DEFAULT_TITLE;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL + (pathname === '/' ? '/' : pathname.replace(/\/+$/, ''));
  }, [title, description, pathname]);
}
