"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  Shield,
  ArrowRight,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Star,
  Eye,
  Award,
  FileText,
} from "lucide-react";
import {
  CLUSTER_GROUPS,
  CLUSTER_LASHES,
  INDIVIDUAL_LASHES,
  LASH_REFILLS,
  LASH_ADDONS,
  formatKsh,
} from "@/data/services";
import { InstantEstimator } from "@/components/InstantEstimator";
import { OfficialFlyerView } from "@/components/OfficialFlyerView";
import { getWhatsAppLink } from "@/lib/whatsapp";


export default function HomePage() {
  const [viewMode, setViewMode] = useState<"cards" | "flyer">("cards");

  const styleSpectrums = [
    {
      title: "Classic",
      tag: "1:1 NATURAL",
      description:
        "One extension meticulously bonded to each individual natural lash. Subtly polished, clean 'better-than-mascara' effect.",
      clusterPrice: "KSh 1,200",
      indPrice: "KSh 2,500",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Hybrid",
      tag: "MUTED DRAMA",
      description:
        "A harmonious 50/50 blend of classic singles and fluffy hand-made volume fans. The ideal bridge for texture and density.",
      clusterPrice: "KSh 1,300",
      indPrice: "KSh 3,000",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Wispy",
      tag: "TEXTURED SPIKES",
      description:
        "Alternating spikes of extended lengths layered over softer closed fans to create a playful, dimensional, staggered lash fringe.",
      clusterPrice: "KSh 1,300",
      indPrice: "KSh 3,500",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Cat Eye",
      tag: "WINGED ELONGATION",
      description:
        "Shorter inner corners gradually fanning out into lush elongated outer points, simulating the seductive wing of a liquid liner.",
      clusterPrice: "KSh 1,200",
      indPrice: "Outer Wing Focus",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Wet Look",
      tag: "GLOSSY SHEEN",
      description:
        "Crafted using unbloomed narrow volume fans, emulating that dewy, fresh-out-of-the-pool glossy mascara definition.",
      clusterPrice: "KSh 1,300",
      indPrice: "Full Bold Depth",
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION (Screen 3) */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-[#ecd8d0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#f5ebe6] border border-[#ecd8d0] px-3.5 py-1 rounded-full text-xs font-semibold text-brand-primary tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-secondary fill-brand-secondary/30" />
                <span>Lash Boutique • Ruaka Nairobi</span>
              </div>

              <div className="space-y-2">
                <p className="font-serif italic text-xl sm:text-2xl text-brand-secondary">
                  Your lashes, your story
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-truffle tracking-tight leading-[1.15]">
                  Longer Lashes, <br />
                  <span className="text-brand-primary">Bigger Confidence.</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-brand-plum leading-relaxed max-w-xl">
                Welcome to Glow &amp; Go Lash + Wax Spa in Ruaka. Hand-mapped cluster sets,
                featherweight individual extensions, and indulgent eye-framing rituals tailored to
                harmonize with your natural eye curvature.
              </p>

              {/* Tag Pills */}
              <div className="flex items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f5ebe6] border border-[#ecd8d0] rounded-full text-xs font-medium text-brand-plum">
                  <Heart className="w-3.5 h-3.5 text-brand-primary fill-brand-primary/20" /> Beauty
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f5ebe6] border border-[#ecd8d0] rounded-full text-xs font-medium text-brand-plum">
                  <Sparkles className="w-3.5 h-3.5 text-brand-secondary fill-brand-secondary/20" />{" "}
                  Self Care
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f5ebe6] border border-[#ecd8d0] rounded-full text-xs font-medium text-brand-plum">
                  <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold/20" /> Confidence
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <a
                  href={getWhatsAppLink("Hello Glow & Go Ruaka! I would like to book a lash appointment")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#73323f] text-white px-7 py-3.5 rounded-full font-semibold shadow-md shadow-brand-primary/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book on WhatsApp • 0748897019</span>
                </a>


                <a
                  href="#lash-menu"
                  className="flex items-center justify-center gap-2 bg-[#f5ebe6] hover:bg-[#ebdcd5] text-brand-truffle border border-[#ecd8d0] px-6 py-3.5 rounded-full font-semibold transition-colors"
                >
                  <span>Explore Price Card</span>
                  <span className="text-brand-primary">↓</span>
                </a>
              </div>

              {/* Micro-links */}
              <div className="flex items-center gap-4 pt-3 text-xs text-brand-plum font-medium">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                  Ruaka Town, Limuru Rd
                </span>
                <span>•</span>
                <a
                  href="https://instagram.com/glowandgo_lashwaxspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary underline transition-colors"
                >
                  @glowandgo_lashwaxspa
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#fecf93]/30 via-[#ffd9dd]/30 to-[#f5ebe6]/40 rounded-3xl blur-xl transform -rotate-1"></div>

                <div className="relative rounded-2xl overflow-hidden border-2 border-[#ecd8d0] shadow-card bg-white aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1554062428-772409bd871c?auto=format&fit=crop&w=1000&q=80"
                    alt="Radiant client with luxury lash extensions"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Floating Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#ecd8d0] px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-truffle shadow-sm">
                    <span className="font-serif italic text-brand-primary">Lash it up</span> — Artistry In Every Fiber
                  </div>

                  {/* Floating Bottom Card */}
                  <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-[#ecd8d0] p-3.5 rounded-xl shadow-lg flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#fecf93]/40 border border-brand-secondary/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                      <Shield className="w-4 h-4 text-brand-secondary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-truffle">
                        Precision Isolation
                      </div>
                      <div className="text-[11px] text-brand-plum">
                        Zero tension on natural lash beds. 100% cashmere filaments.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE STYLE SPECTRUM (Screen 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
            The Style Spectrum
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-truffle">
            Find Your Signature Eye Map
          </h2>
          <p className="text-sm text-brand-plum leading-relaxed">
            Whether you desire effortless everyday enhancement or full red-carpet drama, our lash
            artists sculpt the contour around your facial symmetry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {styleSpectrums.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#ecd8d0] overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-[#f5ebe6]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-[#2b1e22]/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-truffle group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-plum mt-1 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#ecd8d0]/60 space-y-1 text-xs">
                  <div className="flex justify-between text-brand-plum">
                    <span>Cluster:</span>
                    <span className="font-semibold text-brand-truffle">{item.clusterPrice}</span>
                  </div>
                  <div className="flex justify-between text-brand-plum">
                    <span>Ind:</span>
                    <span className="font-semibold text-brand-primary">{item.indPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURATED TREATMENTS: THE OFFICIAL RUAKA LASH MENU (Screen 3 & New Price List Image) */}
      <section id="lash-menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
            Curated Treatments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-truffle">
            The Official Ruaka Lash Menu
          </h2>
          <p className="text-sm text-brand-plum leading-relaxed">
            Hand-crafted with medical-grade adhesives and hypoallergenic synthetic mink filaments.
            All prices in Kenyan Shillings (KSh).
          </p>

          {/* Toggle View Mode */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${viewMode === "cards"
                ? "bg-brand-primary text-white shadow-sm"
                : "bg-white text-brand-plum border border-[#ecd8d0] hover:bg-[#f5ebe6]"
                }`}
            >
              Curated Menu Cards
            </button>
            <button
              onClick={() => setViewMode("flyer")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${viewMode === "flyer"
                ? "bg-brand-primary text-white shadow-sm"
                : "bg-white text-brand-plum border border-[#ecd8d0] hover:bg-[#f5ebe6]"
                }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Official Flyer View</span>
            </button>
          </div>
        </div>

        {viewMode === "flyer" ? (
          <OfficialFlyerView />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Card 1: CLUSTER LASHES (Updated with Exact Mid Volume & Volume Prices) */}
            <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 sm:p-7 shadow-card relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#ecd8d0]">
                <div className="flex items-center gap-2.5">
                  <Eye className="w-5 h-5 text-brand-primary" />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-truffle tracking-wide">
                      CLUSTER LASHES
                    </h3>
                    <span className="text-xs text-brand-plum">
                      Quick application • 2-3 week graceful wear
                    </span>
                  </div>
                </div>
                <span className="bg-[#f5ebe6] border border-[#ecd8d0] text-brand-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Pre-Fanned
                </span>
              </div>

              {/* Grouped Cluster Sets with Mid Volume / Volume */}
              <div className="divide-y divide-[#ecd8d0]/60 py-2">
                {CLUSTER_GROUPS.map((group) => (
                  <div key={group.id} className="py-3.5 space-y-1.5 group">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-base text-brand-truffle group-hover:text-brand-primary transition-colors">
                        {group.name}
                      </h4>
                      {group.tagline && (
                        <span className="text-xs text-brand-plum italic">{group.tagline}</span>
                      )}
                    </div>

                    <div className="space-y-1 pl-1 text-xs text-brand-plum">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">• Mid Volume</span>
                        <span className="dotted-leader"></span>
                        <span className="font-sans font-bold text-brand-primary">
                          {formatKsh(group.midVolumePrice)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">• Volume</span>
                        <span className="dotted-leader"></span>
                        <span className="font-sans font-bold text-brand-primary">
                          {formatKsh(group.volumePrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#ecd8d0]">
                <a
                  href={getWhatsAppLink("Hello Glow & Go! I would like to book a Cluster Set")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#f5ebe6] hover:bg-[#ebdcd5] text-brand-primary font-semibold py-3 rounded-full text-sm border border-[#ecd8d0] transition-colors"
                >
                  <span>Book Cluster Set On WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Card 2: INDIVIDUAL LASHES & REFILLS & ADD-ONS */}
            <div className="space-y-6">
              {/* Individual Lashes */}
              <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 sm:p-7 shadow-card">
                <div className="flex items-center justify-between pb-4 border-b border-[#ecd8d0]">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-brand-primary" />
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-truffle tracking-wide">
                        INDIVIDUAL LASHES
                      </h3>
                      <span className="text-xs text-brand-plum">
                        Single lash isolation • 4-6 week durability
                      </span>
                    </div>
                  </div>
                  <span className="bg-[#fecf93]/40 border border-brand-secondary/30 text-brand-gold text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Premium Mink
                  </span>
                </div>

                <div className="divide-y divide-[#ecd8d0]/60 py-2">
                  {INDIVIDUAL_LASHES.map((item) => (
                    <div key={item.id} className="py-3 group">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-brand-truffle group-hover:text-brand-primary transition-colors">
                          • {item.name}
                        </span>
                        <span className="dotted-leader"></span>
                        <span className="font-sans font-bold text-sm text-brand-primary">
                          {formatKsh(item.price)}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="text-xs text-brand-plum/80 pl-3 mt-0.5">{item.subtitle}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lash Refills (2-Week) */}
              <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 sm:p-7 shadow-card">
                <div className="flex items-center justify-between pb-3 border-b border-[#ecd8d0]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-secondary" />
                    <h4 className="font-serif text-lg font-bold text-brand-truffle">
                      Lash Refills (2-Week)
                    </h4>
                  </div>
                  <span className="text-xs text-brand-plum">Retain ≥40%</span>
                </div>
                <p className="text-xs text-brand-plum mt-1 mb-3">
                  Keep your lash fan lush and seamless. Refills valid for sets retaining at least 40%
                  of extensions:
                </p>
                <div className="space-y-1.5 text-xs text-brand-plum">
                  {LASH_REFILLS.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-1 border-b border-[#ecd8d0]/40 last:border-0">
                      <span className="font-medium">• {item.name}</span>
                      <span className="dotted-leader"></span>
                      <span className="font-bold text-brand-primary">{formatKsh(item.price)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lash Add-ons & Extras */}
              <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 sm:p-7 shadow-card">
                <div className="flex items-center gap-2 pb-3 border-b border-[#ecd8d0]">
                  <Sparkles className="w-4 h-4 text-brand-secondary" />
                  <h4 className="font-serif text-lg font-bold text-brand-truffle">
                    Lash Add-Ons &amp; Extras
                  </h4>
                </div>
                <div className="space-y-1.5 pt-2 text-xs text-brand-plum">
                  {LASH_ADDONS.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-1 border-b border-[#ecd8d0]/40 last:border-0">
                      <span className="text-brand-truffle font-medium">• {item.name}</span>
                      <span className="dotted-leader"></span>
                      <span className="font-bold text-brand-primary">{formatKsh(item.price)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* INTERACTIVE ESTIMATOR (Screen 3) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstantEstimator />
      </section>

      {/* CLIENT PROTOCOL: HOW TO KEEP YOUR LASHES FLAWLESS (Screen 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5ebe6]/60 rounded-3xl border border-[#ecd8d0] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Photo with 48h Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#ecd8d0] aspect-[4/3] sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80"
                  alt="Lash application protocol"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#8b4552] text-white px-4 py-2 rounded-xl text-center shadow-lg">
                  <div className="font-serif font-bold text-lg leading-tight">48 Hours</div>
                  <div className="text-[10px] tracking-wider uppercase font-semibold text-white/80">
                    Strict Moisture Window
                  </div>
                </div>
              </div>
            </div>

            {/* Protocol Steps */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
                  Client Protocol
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-truffle mt-1">
                  How To Keep Your Lashes Flawless
                </h3>
                <p className="text-xs sm:text-sm text-brand-plum mt-1 leading-relaxed">
                  Proper aftercare is 50% of your lash longevity. Follow our verified protocol to
                  preserve the adhesive bond and maintain fluffiness for weeks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-[#ecd8d0] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-primary">
                    <span className="w-5 h-5 rounded-full bg-[#ffd9dd] text-[#3b0615] flex items-center justify-center text-[11px]">
                      1
                    </span>
                    <span>Avoid Steam &amp; Water</span>
                  </div>
                  <p className="text-xs text-brand-plum leading-relaxed">
                    No direct showers, steam rooms, or gym saunas for the first 24–48 hours while the
                    adhesive cures.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ecd8d0] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-primary">
                    <span className="w-5 h-5 rounded-full bg-[#ffd9dd] text-[#3b0615] flex items-center justify-center text-[11px]">
                      2
                    </span>
                    <span>Oil-Free Cleansers Only</span>
                  </div>
                  <p className="text-xs text-brand-plum leading-relaxed">
                    Avoid oil-based makeup removers near the eye area, as oils dissolve the
                    cyanoacrylate glue bond.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ecd8d0] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-primary">
                    <span className="w-5 h-5 rounded-full bg-[#ffd9dd] text-[#3b0615] flex items-center justify-center text-[11px]">
                      3
                    </span>
                    <span>Gentle Daily Spoolie Brush</span>
                  </div>
                  <p className="text-xs text-brand-plum leading-relaxed">
                    Brush lashes gently each morning using the complimentary sanitized spoolie
                    provided by our team.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ecd8d0] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-primary">
                    <span className="w-5 h-5 rounded-full bg-[#ffd9dd] text-[#3b0615] flex items-center justify-center text-[11px]">
                      4
                    </span>
                    <span>Sleep On Your Back</span>
                  </div>
                  <p className="text-xs text-brand-plum leading-relaxed">
                    Prevent friction on outer lashes by using a silk pillowcase or sleeping in an
                    elevated position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READY FOR YOUR GLOW UP? BANNER (Screen 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="text-xs tracking-widest uppercase font-semibold text-[#ffb2bd]">
              Glow • Beauty • Confidence
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Ready For Your Glow Up?
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl">
              Located conveniently in Ruaka Town along Limuru Road. Walk-ins warmly welcomed upon
              availability; WhatsApp reservations highly advised.
            </p>

            <div className="flex items-center gap-4 text-xs text-white/80 pt-1">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> 0748897019
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 9:00 AM – 7:30 PM
              </span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppLink("Hello Glow & Go! I am ready for my glow up!")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-brand-truffle hover:bg-[#f8f3f0] px-6 py-3.5 rounded-full font-semibold text-sm transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Chat Direct on WhatsApp</span>
              </a>


              <a
                href="tel:0748897019"
                className="flex items-center justify-center gap-2 bg-[#73323f] hover:bg-[#5c2832] text-white px-6 py-3.5 rounded-full font-semibold text-sm border border-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Salon Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
