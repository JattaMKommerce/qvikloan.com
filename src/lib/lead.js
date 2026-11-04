// Sends website enquiries to the lead relay (public/api/lead.php), which forwards
// them to iamkratu.ai. The iamkratu.ai key stays on the server, never in this file.

const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || '/api/lead.php';

// Ad-campaign details from the landing URL (e.g. Meta ads add utm_* and fbclid),
// so the team can see which campaign each lead came from.
const ATTRIBUTION_KEY = 'qvk_attribution';
const TRACKED_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];

/** Call once on page load: remembers the first landing page of this visit. */
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(ATTRIBUTION_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const data = { landing_page: window.location.href, referrer: document.referrer || '' };
    TRACKED_PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value) data[key] = value;
    });
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
  } catch {
    // Storage blocked (private mode etc.): attribution is optional.
  }
}

function readAttribution() {
  try {
    return JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || '{}');
  } catch {
    return {};
  }
}

/** `retryable` is false for validation problems the visitor must fix in the form. */
export class LeadError extends Error {
  constructor(message, retryable) {
    super(message);
    this.retryable = retryable;
  }
}

/** Submits the enquiry. Resolves with the reference number, or throws a LeadError. */
export async function submitLead(fields) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);

  let response;
  try {
    response = await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...readAttribution(), ...fields }),
      signal: controller.signal,
    });
  } catch {
    throw new LeadError("We couldn't reach our server. Please check your internet connection and try again.", true);
  } finally {
    clearTimeout(timer);
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    // Non-JSON reply (e.g. server misconfigured): handled below.
  }

  if (response.ok && data?.ok && data.reference) {
    return data.reference;
  }
  throw new LeadError(
    data?.error || "We couldn't send your enquiry right now. Please try again in a few minutes.",
    response.status !== 422,
  );
}
