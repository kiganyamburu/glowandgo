"use client";

import {
  CLUSTER_GROUPS,
  INDIVIDUAL_LASHES,
  LASH_REFILLS,
  LASH_ADDONS,
  formatKsh,
} from "@/data/services";
import { Crown, Sparkles, Heart, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";


export function OfficialFlyerView() {
  return (
    <div className="max-w-xl mx-auto bg-[#fdeeee] rounded-3xl border-2 border-[#ecd8d0] p-6 sm:p-8 shadow-2xl relative overflow-hidden font-sans">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#fecf93]/20 via-[#ffd9dd]/30 to-transparent rounded-full pointer-events-none -mr-20 -mt-20"></div>

      {/* Header */}
      <div className="text-center relative space-y-2 pb-6 border-b border-[#ecd8d0]/70">
        <div className="w-12 h-12 rounded-full bg-white border border-[#d8c1c3] mx-auto flex items-center justify-center text-brand-primary shadow-sm">
          <Crown className="w-6 h-6 text-brand-primary" />
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-truffle">
            GLOW &amp; GO
          </h2>
          <Sparkles className="w-4 h-4 text-brand-secondary fill-brand-secondary" />
        </div>
        <p className="text-[11px] font-bold tracking-[0.25em] text-brand-plum uppercase">
          LASH + WAX SPA
        </p>

        <div className="pt-1">
          <span className="font-serif italic text-3xl sm:text-4xl text-brand-primary block transform -rotate-1">
            Lash Menu
          </span>
          <div className="flex items-center justify-center gap-1 text-xs text-brand-primary mt-0.5">
            <Heart className="w-3 h-3 fill-current" />
            <span className="font-serif italic">Longer Lashes, Bigger Confidence</span>
            <Heart className="w-3 h-3 fill-current" />
          </div>
        </div>
      </div>

      {/* Two Column Price Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
        {/* Column 1: Cluster Lashes */}
        <div className="bg-white/80 backdrop-blur-xs rounded-2xl border border-[#ecd8d0] p-4 sm:p-5 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#ecd8d0]/70 text-xs font-bold text-brand-truffle uppercase tracking-wider">
            <span>✨</span>
            <span>CLUSTER LASHES</span>
          </div>

          <div className="divide-y divide-[#ecd8d0]/50 space-y-3">
            {CLUSTER_GROUPS.map((group) => (
              <div key={group.id} className="pt-2 first:pt-0">
                <span className="font-serif italic font-bold text-base text-brand-truffle block">
                  {group.name}
                </span>
                <div className="space-y-1 mt-1 text-xs text-brand-plum">
                  <div className="flex items-center justify-between">
                    <span>• Mid Volume</span>
                    <span className="dotted-leader"></span>
                    <span className="font-bold text-brand-primary">
                      {formatKsh(group.midVolumePrice)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>• Volume</span>
                    <span className="dotted-leader"></span>
                    <span className="font-bold text-brand-primary">
                      {formatKsh(group.volumePrice)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Individual Lashes, Refills, Add-ons */}
        <div className="space-y-4">
          {/* Individual Lashes */}
          <div className="bg-white/80 backdrop-blur-xs rounded-2xl border border-[#ecd8d0] p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#ecd8d0]/70 text-xs font-bold text-brand-truffle uppercase tracking-wider">
              <span>👁️</span>
              <span>INDIVIDUAL LASHES</span>
            </div>

            <div className="space-y-1.5 text-xs text-brand-plum">
              {INDIVIDUAL_LASHES.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <span>• {item.name}</span>
                  <span className="dotted-leader"></span>
                  <span className="font-bold text-brand-primary">{formatKsh(item.price)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lash Refills */}
          <div className="bg-white/80 backdrop-blur-xs rounded-2xl border border-[#ecd8d0] p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#ecd8d0]/70 text-xs font-bold text-brand-truffle uppercase tracking-wider">
              <span>🔄</span>
              <span>LASH REFILLS</span>
            </div>

            <div className="space-y-1.5 text-xs text-brand-plum">
              {LASH_REFILLS.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <span>• {item.name}</span>
                  <span className="dotted-leader"></span>
                  <span className="font-bold text-brand-primary">{formatKsh(item.price)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lash Add-ons */}
          <div className="bg-white/80 backdrop-blur-xs rounded-2xl border border-[#ecd8d0] p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#ecd8d0]/70 text-xs font-bold text-brand-truffle uppercase tracking-wider">
              <span>✨</span>
              <span>LASH ADD-ONS</span>
            </div>

            <div className="space-y-1.5 text-xs text-brand-plum">
              {LASH_ADDONS.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <span>• {item.name}</span>
                  <span className="dotted-leader"></span>
                  <span className="font-bold text-brand-primary">{formatKsh(item.price)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Booking & Social Bar */}
      <div className="mt-6 pt-4 border-t border-[#ecd8d0]/70 space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={getWhatsAppLink("Hello Glow & Go Ruaka! I would like to book an appointment from your Lash Menu")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md transition-colors"
          >

            <Phone className="w-3.5 h-3.5" />
            <span>BOOK NOW 0748897019</span>
          </a>

          <div className="flex items-center gap-3 text-xs text-brand-plum font-semibold">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-primary" /> RUAKA
            </span>
            <span>|</span>
            <a
              href="https://instagram.com/glowandgo_lashwaxspa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-brand-primary hover:underline"
            >
              <Instagram className="w-3.5 h-3.5" /> @glowandgo_lashwaxspa
            </a>
          </div>
        </div>

        <div className="text-center text-[10px] tracking-[0.2em] uppercase font-bold text-brand-plum/70 pt-1">
          GLOW • BEAUTY • CONFIDENCE
        </div>
      </div>
    </div>
  );
}
