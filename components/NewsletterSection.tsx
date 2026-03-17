"use client";
import { useState } from "react";
import { Button } from "@heroui/react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-teal-500 p-1">
          <div className="rounded-[2.8rem] bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-16 sm:p-20 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Travel Inspiration Weekly
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
                Get Exclusive Deals
                <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-400">
                  Before Anyone Else
                </span>
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Join 12,000+ explorers receiving Tanzania travel tips, early-bird safari packages, and hidden gem discoveries every week.
              </p>

              {submitted ? (
                <div className="glass rounded-2xl px-8 py-6 text-center">
                  <div className="w-14 h-14 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-lg">You&apos;re in!</p>
                  <p className="text-white/60 text-sm mt-1">Welcome to the Auraha Safi Explorers family.</p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 glass text-white placeholder-white/40 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-400/50 text-sm"
                  />
                  <Button
                    onPress={() => { if (email) setSubmitted(true); }}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold shadow-lg shadow-amber-500/40 rounded-2xl px-8 py-4 h-auto"
                    size="lg"
                  >
                    Subscribe
                  </Button>
                </div>
              )}

              <p className="text-white/30 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
