/**
 * Temporary visibility switches.
 *
 * Nothing is deleted when a switch is off — the component still lives in
 * `components/`, it just is not rendered. Flip a switch back to `true` to
 * bring the section back exactly as it was.
 *
 * A full snapshot of the design taken before the Trip Planner was hidden is
 * on the git tag `design-2026-11-16-full` (and the branch
 * `backup/design-2026-11-16-full`).
 */

/** Hidden 16 Nov 2026 at the client's request. Set to `true` to restore. */
export const SHOW_TRIP_PLANNER = false;

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

/**
 * Props for any "book / inquire / plan this" call to action.
 *
 * While the Trip Planner is visible these scroll to the inquiry form. While it
 * is hidden they open WhatsApp instead, pre-filled with what the visitor was
 * looking at — so no call to action dead-ends on a missing anchor.
 *
 * Spread it onto the anchor:  <a {...inquiryLink(pkg.name)}>Book / Inquire</a>
 */
export function inquiryLink(context?: string) {
  if (SHOW_TRIP_PLANNER) {
    return {
      href: context ? `#planner?package=${encodeURIComponent(context)}` : "#planner",
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
