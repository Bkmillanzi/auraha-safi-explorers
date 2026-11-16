/**
 * Temporary visibility switches.
 *
 * Nothing is deleted when a switch is off — the component still lives in
 * `components/`, it just is not rendered. Flip a switch back to `true` to
 * bring the section back exactly as it was.
 *
 * A full snapshot of the design taken before anything was hidden is on the git
 * tag `design-2026-11-16-full` (and the branch `backup/design-2026-11-16-full`).
 */

/** The "Plan My Safari" section. Restored 16 Nov 2026 as the primary CTA. */
export const SHOW_TRIP_PLANNER = true;

/** Hidden 16 Nov 2026 at the client's request. Set to `true` to restore. */
export const SHOW_DESTINATIONS = false;

/**
 * Where links that pointed at the Destinations section go.
 *
 * While Destinations is hidden they fall back to Safari Packages, which
 * covers the same places, rather than dead-ending on a missing anchor.
 */
export const destinationsHref = SHOW_DESTINATIONS ? "#destinations" : "#packages";

export const WHATSAPP_URL = "https://wa.me/255658402886";
export const INQUIRY_EMAIL = "info@aurahasafi.com";

/* -------------------------------------------------------------------------- *
 * Carrying what the visitor was looking at into the planner
 * -------------------------------------------------------------------------- */

const INTEREST_KEY = "auraha:interest";

/**
 * Remember what a visitor clicked "Book / Inquire" on, so the planner can
 * pre-fill it. Session-scoped and best-effort: private browsing and blocked
 * site data make this throw, and the planner works fine without it.
 */
export function rememberInterest(context?: string) {
  if (typeof window === "undefined") return;
  try {
    if (context) sessionStorage.setItem(INTEREST_KEY, context);
    else sessionStorage.removeItem(INTEREST_KEY);
  } catch {
    /* ignore — the planner just starts blank */
  }
}

export function readInterest(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(INTEREST_KEY);
  } catch {
    return null;
  }
}

/* -------------------------------------------------------------------------- *
 * Call-to-action targets
 * -------------------------------------------------------------------------- */

type InquiryLinkProps = {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

/**
 * Props for any "book / inquire / plan this" call to action.
 *
 * While the planner is visible these scroll to it, remembering what the
 * visitor was looking at. While it is hidden they open WhatsApp instead,
 * pre-filled — so no call to action dead-ends on a missing anchor.
 *
 * Spread it onto the anchor:  <a {...inquiryLink(pkg.name)}>Book / Inquire</a>
 *
 * Note the `onClick`: if the call site needs its own click handler too, it must
 * call this one as well rather than overriding it.
 */
export function inquiryLink(context?: string): InquiryLinkProps {
  if (SHOW_TRIP_PLANNER) {
    return {
      href: "#planner",
      onClick: () => rememberInterest(context),
    };
  }

  const message = context
    ? `Hello Auraha Safi Explorers, I would like to inquire about ${context}.`
    : "Hello Auraha Safi Explorers, I would like to plan a safari.";

  return {
    href: `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`,
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

/**
 * The same target with no `onClick`, for use in Server Components — React
 * refuses to pass event handlers across that boundary, and the footer is
 * rendered on the server. There is no interest to remember from a plain
 * footer link anyway.
 */
export const inquiryLinkPlain: InquiryLinkProps = (() => {
  const { href, target, rel } = inquiryLink();
  return { href, target, rel };
})();
