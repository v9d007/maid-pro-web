import React from "react";
import { Shield, RefreshCw, Award, CheckCircle2, XCircle, Sparkles, Star, ArrowRight } from "lucide-react";
import { getDirectWhatsAppChatLink } from "@/utils/whatsapp";

export const WhyChooseUs: React.FC = () => {
  const comparisonItems = [
    {
      feature: "Identity & Police Verification",
      maidPro: "100% Government Aadhaar & Police Background Checked",
      local: "Zero identity checks or criminal background verification",
    },
    {
      feature: "Leave & Absence Guarantee",
      maidPro: "Free Instant Backup Helper within 24 Hours",
      local: "Sudden unannounced leaves with no backup provided",
    },
    {
      feature: "Pricing & Transparency",
      maidPro: "Fixed hourly & monthly rates with zero hidden charges",
      local: "Random rate hikes and unexpected advance demands",
    },
    {
      feature: "Skill, Hygiene & Training",
      maidPro: "Trained in tile descaling, kitchen degreasing & hygiene",
      local: "No standardized training, irregular timing & hygiene",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-surface relative overflow-hidden border-t border-outline-variant/20">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary border border-outline-variant/30 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span>Our Gold Standard</span>
          </div>
          
          <h2 className="font-extrabold text-3xl sm:text-4xl text-primary font-heading tracking-tight">
            Why Agra Homeowners Choose Maid Pro
          </h2>
          
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We organize Agra's domestic help sector with structured background verification, guaranteed punctuality, and complete peace of mind.
          </p>
        </div>

        {/* 3 Core Trust Pillars (Symmetrical 3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 border-t-4 border-t-primary shadow-sm hover-card-elevation transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-on-surface font-heading mb-1.5">
                100% Police & Identity Verified
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Every helper's government Aadhaar, permanent address, and criminal records are authenticated before entering your home.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 border-t-4 border-t-primary shadow-sm hover-card-elevation transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-tertiary-container/15 text-tertiary border border-tertiary/20 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-on-surface font-heading mb-1.5">
                Free Instant Maid Replacement
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                If your helper takes leave or doesn't match your routine, we provide an immediate backup replacement within 24 hours.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 border-t-4 border-t-primary shadow-sm hover-card-elevation transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-on-surface font-heading mb-1.5">
                Transparent Rates & Zero Advance
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Total transparency with zero advance deposits. Pay conveniently via UPI or Cash only after you are 100% satisfied.
              </p>
            </div>
          </div>

        </div>

        {/* Centered Comparison Matrix Card */}
        <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/30 shadow-high overflow-hidden glint-top">
          
          {/* Table Header with Brand Highlights */}
          <div className="p-5 sm:p-6 bg-primary text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-primary-fixed text-xs font-bold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Side-by-Side Comparison</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading">
                Maid Pro Solution 4 You vs. Unverified Local Helpers
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/20">
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span className="text-xs font-bold text-white">4.9 / 5 Rated in Agra</span>
            </div>
          </div>

          {/* Table Column Labels on Medium+ Screens */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 bg-surface-container-low border-b border-outline-variant/30 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            <div className="col-span-4">Service Standard</div>
            <div className="col-span-4 text-emerald-800">Maid Pro Advantage (Verified)</div>
            <div className="col-span-4 text-rose-800">Unverified Local Helpers</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-outline-variant/20 text-xs">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center hover:bg-surface-container-low/30 transition"
              >
                {/* Feature Name */}
                <div className="md:col-span-4">
                  <span className="font-bold text-on-surface text-xs uppercase tracking-wider block">
                    {item.feature}
                  </span>
                </div>

                {/* Maid Pro Value (Emerald Highlight) */}
                <div className="md:col-span-4 flex items-start gap-2 bg-emerald-50 px-3 py-2.5 rounded-xl border border-emerald-200 text-emerald-950 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.maidPro}</span>
                </div>

                {/* Local Maid Value (Rose Highlight) */}
                <div className="md:col-span-4 flex items-start gap-2 bg-rose-50/70 px-3 py-2.5 rounded-xl border border-rose-200 text-rose-900 font-medium">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.local}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Metrics & CTA Bar */}
          <div className="p-5 sm:p-6 bg-surface-container-low border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 text-center sm:text-left">
              <div>
                <span className="text-xl font-extrabold text-primary font-heading block">5,000+</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Homes Cleaned in Agra</span>
              </div>
              <div className="w-px h-8 bg-outline-variant/40"></div>
              <div>
                <span className="text-xl font-extrabold text-primary font-heading block">100%</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Police Verified</span>
              </div>
              <div className="w-px h-8 bg-outline-variant/40"></div>
              <div>
                <span className="text-xl font-extrabold text-primary font-heading block">24/7</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Local Helpline</span>
              </div>
            </div>

            <a
              href={getDirectWhatsAppChatLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-container transition shadow-mid flex items-center justify-center gap-2 active:scale-95 flex-shrink-0"
            >
              <span>Book Verified Helper on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
