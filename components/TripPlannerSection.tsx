"use client";
import { useState, useEffect, useCallback } from "react";
import { WHATSAPP_URL, INQUIRY_EMAIL, readInterest } from "@/lib/features";

/* ---------------------------------------------------------------------------
   Choices. Each has a short label for the chip and a longer `full` used in the
   message we hand to WhatsApp, so the chips stay thumb-sized while the enquiry
   the office receives is still unambiguous.
--------------------------------------------------------------------------- */

const WHERE = [
  { label: "Serengeti & Ngorongoro", full: "Northern Circuit (Serengeti, Ngorongoro, Tarangire)" },
  { label: "Safari + Zanzibar", full: "Bush & Beach combo (Serengeti + Zanzibar)" },
  { label: "Climb Kilimanjaro", full: "Mount Kilimanjaro summit trek" },
  { label: "Southern parks", full: "Southern Circuit (Nyerere / Selous & Mikumi)" },
  { label: "Not sure yet", full: "Not sure yet — happy to be advised" },
];

const STYLE = [
  { label: "Comfortable", full: "Mid-range comfort lodges" },
  { label: "Luxury", full: "Luxury tented camps & lodges" },
  { label: "Honeymoon", full: "Honeymoon / romantic escape" },
  { label: "Camping", full: "Adventure camping safari" },
];

const LENGTH = [
  { label: "3–5 days", full: "3–5 days" },
  { label: "6–8 days", full: "6–8 days" },
  { label: "9–12 days", full: "9–12 days" },
  { label: "13+ days", full: "13+ days" },
];

const WHO = [
  { label: "Just me", full: "1 solo traveller" },
  { label: "Two of us", full: "2 guests (couple)" },
  { label: "Family", full: "Family (3–5 guests)" },
  { label: "Group", full: "Group (6+ guests)" },
];

/* --------------------------------------------------------------------------- */

function Chips({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: { label: string; full: string }[];
  value: string;
  onChange: (full: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-stone-800 mb-2.5">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => {
          const selected = value === opt.full;
          return (
            <button
              key={opt.full}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(opt.full)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-150 ${
                selected
                  ? "bg-[#1B4332] text-white border-[#1B4332] shadow-md"
                  : "bg-white text-stone-700 border-stone-300 hover:border-[#B8722E] hover:text-[#B8722E]"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function TripPlannerSection() {
  const [where, setWhere] = useState(WHERE[0].full);
  const [style, setStyle] = useState(STYLE[0].full);
  const [length, setLength] = useState(LENGTH[1].full);
  const [who, setWho] = useState(WHO[1].full);

  const [name, setName] = useState("");
  const [reply, setReply] = useState("");
  const [notes, setNotes] = useState("");

  const [interest, setInterest] = useState<string | null>(null);
  const [handedOff, setHandedOff] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  // A visitor who clicked "Book / Inquire" on a package or destination arrives
  // with that interest remembered, so the enquiry carries it without them
  // having to re-type it.
  useEffect(() => {
    const pick = () => setInterest(readInterest());
    pick();
    window.addEventListener("hashchange", pick);
    return () => window.removeEventListener("hashchange", pick);
  }, []);

  const message = [
    "Hello Auraha Safi Explorers, I would like to plan a safari.",
    "",
    interest ? `Interested in: ${interest}` : null,
    `Where: ${where}`,
    `Style: ${style}`,
    `Length: ${length}`,
    `Who is going: ${who}`,
    name ? `Name: ${name}` : null,
    reply ? `Reach me on: ${reply}` : null,
    notes ? `Notes: ${notes}` : null,
  ]
    .filter(line => line !== null)
    .join("\n");

  const nameMissing = name.trim() === "";
  const ready = !nameMissing;

  const handleSend = useCallback(
    (channel: "whatsapp" | "email") => {
      if (!ready) {
        setShowErrors(true);
        return;
      }
      const url =
        channel === "whatsapp"
          ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
          : `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(
              "Safari enquiry from aurahasafi.com",
            )}&body=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setHandedOff(true);
    },
    [ready, message],
  );

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-stone-50 via-white to-stone-50 scroll-mt-24" id="planner">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-[#B8722E] font-bold text-xs uppercase tracking-[0.2em] mb-2">
            START HERE
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#1B4332] tracking-tight mb-4">
            Plan My Safari
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Four taps and your name. We read it in Arusha and reply within 12–24 hours
            with a real itinerary and an honest price — no obligation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-stone-200 shadow-xl shadow-stone-200/50 overflow-hidden">
          {handedOff ? (
            <div className="p-8 sm:p-12 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                ✓
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#1B4332] mb-3">
                Almost there, {name.trim().split(" ")[0]}
              </h3>
              <p className="text-stone-600 text-base leading-relaxed max-w-md mx-auto mb-2">
                Your request opened in a new tab with everything filled in.
                <strong className="text-stone-900"> Press send there</strong> and it reaches
                the Arusha team.
              </p>
              <p className="text-stone-500 text-sm leading-relaxed max-w-md mx-auto mb-7">
                If that tab did not open, copy your request below and send it to us any way
                you like.
              </p>

              <pre className="text-left text-xs sm:text-sm text-stone-700 bg-stone-50 border border-stone-200 rounded-2xl p-5 mb-5 whitespace-pre-wrap font-sans leading-relaxed">
                {message}
              </pre>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={copyMessage}
                  className="px-5 py-3 rounded-xl border border-stone-300 hover:border-[#B8722E] hover:text-[#B8722E] text-sm font-semibold text-stone-700 transition-colors"
                >
                  {copied ? "Copied ✓" : "Copy my request"}
                </button>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-colors"
                >
                  Open WhatsApp again
                </a>
                <button
                  type="button"
                  onClick={() => setHandedOff(false)}
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Change my answers
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSend("whatsapp");
              }}
              className="p-6 sm:p-10 space-y-7"
            >
              {interest && (
                <div className="flex items-start gap-3 rounded-2xl bg-[#B8722E]/10 border border-[#B8722E]/25 px-4 py-3">
                  <span className="text-[#B8722E] text-sm mt-0.5">★</span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    We will include your interest in{" "}
                    <strong className="text-stone-900">{interest}</strong>.{" "}
                    <button
                      type="button"
                      onClick={() => setInterest(null)}
                      className="underline underline-offset-2 text-stone-500 hover:text-stone-800"
                    >
                      Remove
                    </button>
                  </p>
                </div>
              )}

              <Chips legend="Where would you like to go?" options={WHERE} value={where} onChange={setWhere} />
              <Chips legend="What kind of stay?" options={STYLE} value={style} onChange={setStyle} />
              <Chips legend="How long do you have?" options={LENGTH} value={length} onChange={setLength} />
              <Chips legend="Who is going?" options={WHO} value={who} onChange={setWho} />

              <div className="pt-2 border-t border-stone-200 space-y-5">
                <div>
                  <label htmlFor="planner-name" className="block text-sm font-semibold text-stone-800 mb-2">
                    Your name
                  </label>
                  <input
                    id="planner-name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="So we know who we are talking to"
                    aria-invalid={showErrors && nameMissing}
                    className={`w-full bg-stone-50 text-stone-900 text-base rounded-xl px-4 py-3.5 border outline-none transition-colors focus:ring-2 focus:ring-[#B8722E]/40 ${
                      showErrors && nameMissing
                        ? "border-red-400 focus:border-red-400"
                        : "border-stone-300 focus:border-[#B8722E]"
                    }`}
                  />
                  {showErrors && nameMissing && (
                    <p className="text-sm text-red-600 mt-2">Just your first name is plenty.</p>
                  )}
                </div>

                <div>
                  <label htmlFor="planner-reply" className="block text-sm font-semibold text-stone-800 mb-2">
                    Email or phone{" "}
                    <span className="font-normal text-stone-500">
                      — optional, we can simply reply on WhatsApp
                    </span>
                  </label>
                  <input
                    id="planner-reply"
                    value={reply}
                    onChange={e => setReply(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-stone-50 text-stone-900 text-base rounded-xl px-4 py-3.5 border border-stone-300 outline-none transition-colors focus:border-[#B8722E] focus:ring-2 focus:ring-[#B8722E]/40"
                  />
                </div>

                <div>
                  <label htmlFor="planner-notes" className="block text-sm font-semibold text-stone-800 mb-2">
                    Anything else?{" "}
                    <span className="font-normal text-stone-500">— optional</span>
                  </label>
                  <textarea
                    id="planner-notes"
                    rows={3}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Your dates, the Great Migration, a birthday, dietary needs…"
                    className="w-full bg-stone-50 text-stone-900 text-base rounded-xl px-4 py-3.5 border border-stone-300 outline-none transition-colors focus:border-[#B8722E] focus:ring-2 focus:ring-[#B8722E]/40 leading-relaxed"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold shadow-lg shadow-emerald-600/25 transition-all hover:shadow-xl flex items-center justify-center gap-2.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.01-.38.11-.5.13-.14.25-.29.37-.46.12-.16.16-.28.25-.46.08-.17.04-.33-.02-.46-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.17 1.57.1.48-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.14-1.19-.06-.11-.22-.17-.47-.29z" />
                  </svg>
                  Send on WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => handleSend("email")}
                  className="w-full py-3.5 rounded-xl border border-stone-300 hover:border-[#B8722E] hover:text-[#B8722E] text-stone-700 text-sm font-semibold transition-colors"
                >
                  Send by email instead
                </button>

                <p className="text-sm text-center text-stone-500 leading-relaxed pt-1">
                  Nothing is sent until you press send in WhatsApp or your mail app.
                  You will see the message first.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
