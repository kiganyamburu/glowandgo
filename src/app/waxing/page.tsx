"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Flame,
  Droplets,
  Heart,
} from "lucide-react";
import {
  WAXING_FACIAL,
  WAXING_BODY,
  WAXING_INTIMATE,
  WAXING_COMBOS,
  formatKsh,
} from "@/data/services";
import { getWhatsAppLink } from "@/lib/whatsapp";


export default function WaxingPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "Complete Menu" },
    { id: "facial", label: "Facial Waxing" },
    { id: "body", label: "Body & Limbs" },
    { id: "intimate", label: "Intimate Care" },
    { id: "combos", label: "Spa Combos & Trios" },
  ];

  return (
    <div className="space-y-16 py-10">
      {/* HEADER SECTION (Screen 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#f5ebe6] border border-[#ecd8d0] px-3.5 py-1 rounded-full text-xs font-semibold text-brand-primary tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-secondary fill-brand-secondary/30" />
            <span>Gentle Botanical Epilation • Ruaka Sanctuary</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-truffle tracking-tight">
            Waxing &amp; Silken Body Care Menu
          </h1>

          <p className="text-sm sm:text-base text-brand-plum leading-relaxed">
            Infused with calming chamomile, tea tree essence, and zinc hard waxes for zero strip
            irritation. Pain-conscious precision, absolute hygienic sterile protocols.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold bg-[#fecf93]/40 border border-brand-secondary/30 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-brand-secondary fill-brand-secondary" />
            <span>Premium Hypoallergenic Stripless Wax</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-8 pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                  : "bg-white text-brand-plum hover:bg-[#f5ebe6] border border-[#ecd8d0]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT GRID (Screen 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Menu Items */}
          <div className="lg:col-span-7 space-y-10">
            {/* Section 1: Facial Epilation & Contouring */}
            {(activeTab === "all" || activeTab === "facial") && (
              <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 sm:p-7 shadow-card space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#ecd8d0]">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-brand-truffle uppercase tracking-wider font-sans">
                      🌸 FACIAL EPILATION &amp; CONTOURING
                    </span>
                  </div>
                  <span className="text-xs text-brand-plum">Sensitive Facial Waxes</span>
                </div>

                <div className="divide-y divide-[#ecd8d0]/60">
                  {WAXING_FACIAL.map((item) => (
                    <div key={item.id} className="py-3.5 group">
                      <div className="flex items-baseline justify-between">
                        <span className="font-semibold text-base text-brand-truffle group-hover:text-brand-primary transition-colors">
                          {item.name}
                        </span>
                        <span className="font-sans font-bold text-base text-brand-primary">
                          {formatKsh(item.price)}
                        </span>
                      </div>
                      <p className="text-xs text-brand-plum/85 mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: Upper & Lower Body Smooth */}
            {(activeTab === "all" || activeTab === "body") && (
              <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 sm:p-7 shadow-card space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#ecd8d0]">
                  <span className="text-base font-bold text-brand-truffle uppercase tracking-wider font-sans">
                    ✨ UPPER &amp; LOWER BODY SMOOTH
                  </span>
                  <span className="text-xs text-brand-plum">Silken Fruit Wax</span>
                </div>

                <div className="divide-y divide-[#ecd8d0]/60">
                  {WAXING_BODY.map((item) => (
                    <div key={item.id} className="py-3.5 group">
                      <div className="flex items-baseline justify-between">
                        <span className="font-semibold text-base text-brand-truffle group-hover:text-brand-primary transition-colors">
                          {item.name}
                        </span>
                        <span className="font-sans font-bold text-base text-brand-primary">
                          {formatKsh(item.price)}
                          {item.secondaryPrice && ` / ${formatKsh(item.secondaryPrice)}`}
                        </span>
                      </div>
                      <p className="text-xs text-brand-plum/85 mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Intimate & Bikini Protocols */}
            {(activeTab === "all" || activeTab === "intimate") && (
              <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 sm:p-7 shadow-card space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#ecd8d0]">
                  <span className="text-base font-bold text-brand-truffle uppercase tracking-wider font-sans">
                    🤍 INTIMATE &amp; BIKINI PROTOCOLS
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Strict No Double-Dip
                  </span>
                </div>

                <div className="divide-y divide-[#ecd8d0]/60">
                  {WAXING_INTIMATE.map((item) => (
                    <div key={item.id} className="py-3.5 group">
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-base text-brand-truffle group-hover:text-brand-primary transition-colors">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#fecf93]/40 text-brand-gold px-2 py-0.5 rounded-full border border-brand-secondary/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <span className="font-sans font-bold text-base text-brand-primary">
                          {formatKsh(item.price)}
                        </span>
                      </div>
                      <p className="text-xs text-brand-plum/85 mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 4: Curated Ruaka Combo Packages */}
            {(activeTab === "all" || activeTab === "combos") && (
              <div className="bg-[#f5ebe6]/60 rounded-2xl border border-[#ecd8d0] p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[#ecd8d0]">
                  <Sparkles className="w-5 h-5 text-brand-secondary" />
                  <span className="text-base font-bold text-brand-truffle uppercase tracking-wider font-sans">
                    CURATED RUAKA COMBO PACKAGES
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {WAXING_COMBOS.map((combo) => (
                    <div
                      key={combo.id}
                      className="bg-white p-5 rounded-xl border border-[#ecd8d0] shadow-sm flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif font-bold text-base text-brand-truffle">
                            {combo.name}
                          </h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffd9dd] text-[#3b0615] px-2 py-0.5 rounded-full whitespace-nowrap">
                            {combo.badge}
                          </span>
                        </div>
                        <p className="text-xs text-brand-plum mt-1.5 leading-relaxed">
                          {combo.subtitle}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#ecd8d0]/60 flex items-center justify-between">
                        <span className="text-xs text-brand-plum">{combo.duration}</span>
                        <span className="font-serif font-bold text-base text-brand-primary">
                          {formatKsh(combo.price)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Promise, Guides & WhatsApp Desk (Screen 4) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Sanctuary Image Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-[#ecd8d0] aspect-[16/10] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"
                alt="Sterile sanctuary treatment bed"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-lg font-bold">Hygiene first, always.</p>
                <p className="text-xs text-white/80">Sterile sanctuary comfort</p>
              </div>
            </div>

            {/* The Glow & Go Promise */}
            <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-card space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[#ecd8d0]">
                <ShieldCheck className="w-5 h-5 text-brand-primary" />
                <h3 className="font-serif text-base font-bold text-brand-truffle uppercase tracking-wider">
                  THE GLOW &amp; GO PROMISE
                </h3>
              </div>

              <p className="text-xs text-brand-plum leading-relaxed">
                Your safety and post-wax skin integrity are our highest obsession.
              </p>

              <div className="space-y-3 pt-1 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-brand-truffle">100% No Double-Dipping: </span>
                    <span className="text-brand-plum">
                      Fresh disposable wooden spatula for every single application.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-brand-truffle">
                      Hospital-Grade Sanitization:{" "}
                    </span>
                    <span className="text-brand-plum">
                      Medical sterilization of non-disposable implements.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-brand-truffle">Soothing Calming Oil: </span>
                    <span className="text-brand-plum">
                      Australian Tea Tree + Aloe infused post-epilation protocol.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre-Wax Prep Guide */}
            <div className="bg-[#f5ebe6]/60 rounded-2xl border border-[#ecd8d0] p-6 space-y-3">
              <h4 className="font-serif text-sm font-bold text-brand-truffle uppercase tracking-wider">
                Pre-Wax Prep Guide
              </h4>
              <ul className="space-y-2 text-xs text-brand-plum leading-relaxed list-disc list-inside">
                <li>
                  Hair length should be at least grain of rice length (1/4 inch or 2 weeks of
                  growth).
                </li>
                <li>Gently exfoliate 24 hours prior to prevent embedded ingrown hairs.</li>
                <li>Wear loose, breathable cotton garments to your appointment.</li>
              </ul>
            </div>

            {/* Direct WhatsApp Desk */}
            <div className="bg-brand-primary text-white rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#ffb2bd]">
                <Calendar className="w-4 h-4" />
                <span>DIRECT WHATSAPP DESK</span>
              </div>

              <div>
                <h4 className="font-serif text-xl font-bold">Reserve Your Session</h4>
                <p className="text-xs text-white/90 mt-1 leading-relaxed">
                  Same-day slots available in Ruaka. Message our wax specialists directly for instant
                  timing confirmation.
                </p>
              </div>

              <a
                href={getWhatsAppLink("Hello Glow & Go Ruaka! I would like to reserve a Waxing session")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white text-brand-truffle hover:bg-[#faf3f0] py-3 rounded-full font-semibold text-sm transition-colors shadow-md"
              >

                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>WhatsApp 0748897019</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-white/70 pt-1 border-t border-white/15">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Ruaka, Limuru Rd
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Mon - Sat: 9am - 7:30pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POST-WAX CARE PROTOCOLS (Screen 4 bottom) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#f5ebe6] border border-[#ecd8d0] flex items-center justify-center text-brand-primary flex-shrink-0">
              <Flame className="w-5 h-5 text-brand-primary" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-brand-truffle">24h Heat Avoidance</h4>
              <p className="text-xs text-brand-plum mt-1 leading-relaxed">
                Skip hot saunas, steam rooms &amp; intense gym workouts to allow pores to close safely.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#f5ebe6] border border-[#ecd8d0] flex items-center justify-center text-brand-primary flex-shrink-0">
              <Droplets className="w-5 h-5 text-brand-secondary" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-brand-truffle">No Fragrances</h4>
              <p className="text-xs text-brand-plum mt-1 leading-relaxed">
                Use gentle unscented moisturizers or pure aloe vera gel for 48 hours post-treatment.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#f5ebe6] border border-[#ecd8d0] flex items-center justify-center text-brand-primary flex-shrink-0">
              <Clock className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-brand-truffle">4-Week Regimen</h4>
              <p className="text-xs text-brand-plum mt-1 leading-relaxed">
                Maintain sessions every 3 to 4 weeks for progressively thinner, finer regrowth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
