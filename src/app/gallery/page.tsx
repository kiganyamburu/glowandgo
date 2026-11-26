"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Droplets,
  Calendar,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkle,
} from "lucide-react";
import { LOOKBOOK_ITEMS, LookbookItem } from "@/data/lookbook";
import { INSTAGRAM_POSTS } from "@/data/reviews";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { formatKsh } from "@/data/services";
import { getWhatsAppLink } from "@/lib/whatsapp";


export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Transformations (12)" },
    { id: "cluster", label: "Cluster Lashes (KSh 1,200+)" },
    { id: "individual", label: "Individual Sets (Classic / Hybrid / Wispy)" },
    { id: "cat-wet", label: "Cat Eye & Wet Sets" },
    { id: "coloured", label: "Coloured Flairs & Lash Charms" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? LOOKBOOK_ITEMS
      : LOOKBOOK_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 py-10">
      {/* LOOKBOOK HEADER (Screen) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#ecd8d0]">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#f5ebe6] border border-[#ecd8d0] px-3.5 py-1 rounded-full text-xs font-semibold text-brand-primary tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-secondary fill-brand-secondary/30" />
              <span>Real Results • Ruaka Beauty Sanctuary</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-truffle tracking-tight">
              Before &amp; After Lookbook
            </h1>
            <p className="font-serif italic text-xl text-brand-secondary">
              &quot;Longer lashes, bigger confidence.&quot;
            </p>

            <p className="text-sm text-brand-plum leading-relaxed max-w-2xl">
              Witness the signature Glow &amp; Go touch. From feather-light natural everyday
              clusters to full-drama wispy and cat-eye individual lash mapping, each set is custom
              tailored to your eye shape.
            </p>
          </div>

          {/* Stats on Right (Screen) */}
          <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0 bg-white p-4 sm:p-6 rounded-2xl border border-[#ecd8d0] shadow-sm">
            <div className="text-left">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary">
                2,400+
              </div>
              <div className="text-[11px] font-semibold text-brand-plum uppercase tracking-wider">
                Lash Sets Crafted
              </div>
            </div>
            <div className="w-px h-10 bg-[#ecd8d0]"></div>
            <div className="text-left">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary">
                99.4%
              </div>
              <div className="text-[11px] font-semibold text-brand-plum uppercase tracking-wider">
                Retention Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Screen) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pt-6 pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${activeCategory === cat.id
                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                : "bg-white text-brand-plum hover:bg-[#f5ebe6] border border-[#ecd8d0]"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* LOOKBOOK GRID (Screen) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#ecd8d0] overflow-hidden shadow-card flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              {/* Interactive Before & After Slider */}
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeAlt={`${item.name} Before`}
                afterAlt={`${item.name} After`}
              />

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-secondary pb-1">
                    <span>{item.categoryLabel}</span>
                    <span className="font-sans text-brand-primary font-bold text-sm">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-truffle mt-1">
                    {item.name}
                  </h3>

                  <p className="text-xs text-brand-plum leading-relaxed mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-[#faf3f0] rounded-xl border border-[#ecd8d0]/70 text-center text-[11px]">
                  <div>
                    <span className="text-brand-plum/70 font-semibold block text-[10px]">
                      {item.specs.label1}
                    </span>
                    <span className="font-bold text-brand-truffle">{item.specs.value1}</span>
                  </div>
                  <div className="border-x border-[#ecd8d0]">
                    <span className="text-brand-plum/70 font-semibold block text-[10px]">
                      {item.specs.label2}
                    </span>
                    <span className="font-bold text-brand-truffle">{item.specs.value2}</span>
                  </div>
                  <div>
                    <span className="text-brand-plum/70 font-semibold block text-[10px]">
                      {item.specs.label3}
                    </span>
                    <span className="font-bold text-brand-truffle">{item.specs.value3}</span>
                  </div>
                </div>

                {/* Client Handle & Tech Note */}
                <div className="space-y-1.5 text-xs text-brand-plum">
                  <div className="flex items-center gap-1.5 font-medium text-brand-truffle">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                    <span>Client: {item.client}</span>
                  </div>
                  <p className="text-[11px] italic text-brand-plum/80 leading-normal">
                    &ldquo;Tech Note: {item.techNote}&rdquo;
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/book?service=${item.serviceId || "cluster-classic-mid"}`}
                  className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#73323f] text-white py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all transform hover:-translate-y-0.5 shadow-sm"
                >
                  <span>Get This Look</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LONGEVITY STANDARD & REFILL REMINDER (Screen) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5ebe6]/70 rounded-3xl border border-[#ecd8d0] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Longevity Standard */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
                  The Glow &amp; Go Longevity Standard
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-truffle mt-1">
                  How our Ruaka clients maintain 3+ weeks of flawless wear
                </h3>
                <p className="text-xs sm:text-sm text-brand-plum mt-1 leading-relaxed">
                  Every appointment begins with a deep oil-free foam cleanse to eliminate
                  micro-residues, followed by medical-grade moisture balancing. Our
                  humidity-controlled lash lounge in Ruaka guarantees glue polymerization for extreme
                  bond retention.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-[#ecd8d0] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-primary">
                    <Droplets className="w-4 h-4 text-brand-primary" />
                    <span>Shower Shield</span>
                  </div>
                  <p className="text-xs text-brand-plum leading-relaxed">
                    Keep water-free for the first 6 hours; after that, cleanse with lash shampoo
                    daily.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ecd8d0] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-primary">
                    <Sparkles className="w-4 h-4 text-brand-secondary" />
                    <span>Daily Spoolie</span>
                  </div>
                  <p className="text-xs text-brand-plum leading-relaxed">
                    Complimentary luxury golden wand provided to gently separate and groom curls.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#ecd8d0] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-primary">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span>Silk Sleeping</span>
                  </div>
                  <p className="text-xs text-brand-plum leading-relaxed">
                    Sleep on your back or silk pillowcase to prevent side friction during rest.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Refill Schedule Reminder Box (Screen) */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#ecd8d0] shadow-card space-y-4">
              <div className="text-center space-y-1 pb-3 border-b border-[#ecd8d0]">
                <div className="w-9 h-9 rounded-full bg-[#faf3f0] border border-[#ecd8d0] mx-auto flex items-center justify-center text-brand-primary">
                  <Calendar className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-truffle">
                  Refill Schedule Reminder
                </h4>
                <p className="text-xs text-brand-plum">
                  Natural lashes shed 2–5 strands daily. Book your 2-week touch-up to keep fullness
                  seamless:
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#ecd8d0]/60">
                  <span className="text-brand-plum">2-Week Classic Refill</span>
                  <span className="font-bold text-brand-truffle">KSh 1,100</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#ecd8d0]/60">
                  <span className="text-brand-plum">2-Week Hybrid Refill</span>
                  <span className="font-bold text-brand-truffle">KSh 1,300</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-brand-plum">2-Week Volume Refill</span>
                  <span className="font-bold text-brand-truffle">KSh 1,500</span>
                </div>
              </div>

              <Link
                href="/book?service=refill-hybrid"
                className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#73323f] text-white py-2.5 rounded-full text-xs font-semibold shadow-sm transition-colors"
              >
                <span>Reserve Refill Slot</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY LOVE: TAGGED BY NAIROBI'S GLAM BEAUTIES (Screen) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
              Community Love
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-truffle mt-1">
              Tagged by Nairobi&apos;s Glam Beauties
            </h3>
          </div>

          <a
            href="https://instagram.com/glowandgo_lashwaxspa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:underline"
          >
            <span>Follow @glowandgo_lashwaxspa</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden border border-[#ecd8d0] aspect-[4/5] bg-[#faf3f0] shadow-sm"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="font-semibold text-xs">{post.client}</span>
                <p className="text-[11px] text-white/90 line-clamp-2 mt-1">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Live consultation bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#f5ebe6] border border-[#ecd8d0] p-4 rounded-2xl max-w-xl mx-auto text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-brand-truffle">Artists available today</span>
          </div>
          <span className="hidden sm:inline text-brand-border">•</span>
          <a
            href={getWhatsAppLink("Hello Glow & Go Ruaka! I would like a lash consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-[#73323f] transition-colors"
          >

            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
