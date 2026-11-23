"use client";

import { useState } from "react";
import { Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { formatKsh } from "@/data/services";
import { openWhatsApp } from "@/lib/whatsapp";

interface EstimatorOption {
  id: string;
  name: string;
  price: number;
}

const LASH_TREATMENTS: EstimatorOption[] = [
  { id: "ind-wispy", name: "Individual Wispy (KSh 3,500)", price: 3500 },
  { id: "ind-classic", name: "Individual Classic (KSh 2,500)", price: 2500 },
  { id: "ind-hybrid", name: "Individual Hybrid (KSh 3,000)", price: 3000 },
  { id: "ind-volume", name: "Individual Volume (KSh 4,000)", price: 4000 },
  { id: "cluster-classic-mid", name: "Cluster Classic - Mid Volume (KSh 1,200)", price: 1200 },
  { id: "cluster-classic-vol", name: "Cluster Classic - Volume (KSh 1,500)", price: 1500 },
  { id: "cluster-cat-mid", name: "Cluster Cat Eye - Mid Volume (KSh 1,200)", price: 1200 },
  { id: "cluster-cat-vol", name: "Cluster Cat Eye - Volume (KSh 1,400)", price: 1400 },
  { id: "cluster-wispy-mid", name: "Cluster Wispy - Mid Volume (KSh 1,300)", price: 1300 },
  { id: "cluster-wispy-vol", name: "Cluster Wispy - Volume (KSh 1,500)", price: 1500 },
  { id: "cluster-wet-mid", name: "Cluster Wet Set - Mid Volume (KSh 1,300)", price: 1300 },
  { id: "cluster-wet-vol", name: "Cluster Wet Set - Volume (KSh 1,500)", price: 1500 },
  { id: "cluster-hybrid-mid", name: "Cluster Hybrid - Mid Volume (KSh 1,300)", price: 1300 },
  { id: "cluster-hybrid-vol", name: "Cluster Hybrid - Volume (KSh 1,500)", price: 1500 },
];

const ENHANCEMENTS: EstimatorOption[] = [
  { id: "bottom", name: "Bottom Lashes", price: 500 },
  { id: "removal", name: "Safe Lash Removal", price: 300 },
  { id: "clear", name: "Lash Clear Spa Wash", price: 200 },
  { id: "coloured", name: "Coloured Lashes", price: 150 },
  { id: "charm", name: "Lash Charm / Sparkle", price: 150 },
];

export function InstantEstimator() {
  const [selectedTreatment, setSelectedTreatment] = useState<EstimatorOption>(LASH_TREATMENTS[0]);
  const [selectedEnhancements, setSelectedEnhancements] = useState<string[]>([]);

  const toggleEnhancement = (id: string) => {
    setSelectedEnhancements((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const enhancementsTotal = selectedEnhancements.reduce((acc, id) => {
    const item = ENHANCEMENTS.find((e) => e.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const total = selectedTreatment.price + enhancementsTotal;

  const handleWhatsAppBooking = () => {
    const enhancementNames = selectedEnhancements
      .map((id) => ENHANCEMENTS.find((e) => e.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Hello Glow & Go Ruaka! I used the Instant Estimator on your website and would like to book:

• Treatment: ${selectedTreatment.name}
• Enhancements: ${enhancementNames ? enhancementNames : "None"}
• Estimated Total: ${formatKsh(total)}

Please let me know the available time slots this week!`;

    openWhatsApp(text);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 sm:p-8 shadow-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#fecf93]/15 to-transparent rounded-bl-full pointer-events-none" />

      <div className="mb-6">
        <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
          Instant Estimator
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-truffle mt-1">
          Build Your Dream Look
        </h3>
        <p className="text-xs sm:text-sm text-brand-plum mt-1 max-w-2xl leading-relaxed">
          Select your desired set and custom finishing accents to calculate your total and generate
          an instant one-click WhatsApp reservation.
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. Treatment Selector */}
        <div>
          <label className="block text-xs font-semibold text-brand-truffle uppercase tracking-wider mb-2">
            1. Select Lash Treatment
          </label>
          <div className="relative">
            <select
              value={selectedTreatment.id}
              onChange={(e) => {
                const found = LASH_TREATMENTS.find((t) => t.id === e.target.value);
                if (found) setSelectedTreatment(found);
              }}
              className="w-full bg-[#faf3f0] border border-[#e4d2cb] rounded-xl px-4 py-3 text-sm text-brand-truffle font-medium focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-secondary/30 transition-all appearance-none cursor-pointer"
            >
              {LASH_TREATMENTS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-plum">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 2. Add Finishing Enhancements */}
        <div>
          <label className="block text-xs font-semibold text-brand-truffle uppercase tracking-wider mb-2">
            2. Add Finishing Enhancements
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ENHANCEMENTS.map((item) => {
              const checked = selectedEnhancements.includes(item.id);
              return (
                <label
                  key={item.id}
                  onClick={() => toggleEnhancement(item.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                    checked
                      ? "bg-[#faf0ec] border-brand-primary text-brand-truffle shadow-xs"
                      : "bg-[#faf3f0]/60 border-[#e4d2cb] hover:bg-[#faf3f0] text-brand-plum"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                        checked
                          ? "bg-brand-primary border-brand-primary text-white"
                          : "border-[#d8c1c3] bg-white"
                      }`}
                    >
                      {checked && (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-brand-secondary">
                    +{formatKsh(item.price)}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Hygiene Promise Badge */}
        <div className="bg-[#f5ebe6]/60 border border-[#ecd8d0] rounded-xl p-3.5 flex items-start gap-3 text-xs text-brand-plum">
          <ShieldCheck className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-brand-truffle">Ruaka Hygiene Promise: </span>
            Strict single-use disinfected tweezers, hypoallergenic under-eye collagen patches, and
            temperature-stabilized lash adhesive for zero fumes.
          </div>
        </div>

        {/* Total & WhatsApp Booking Button */}
        <div className="pt-4 border-t border-[#ecd8d0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-plum">
              Estimated Total
            </span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary">
              {formatKsh(total)}
            </div>
          </div>

          <button
            onClick={handleWhatsAppBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-[#73323f] text-white px-8 py-3.5 rounded-full font-semibold shadow-md shadow-brand-primary/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Confirm On WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
