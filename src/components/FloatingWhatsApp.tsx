"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-[#ecd8d0] px-3.5 py-1.5 rounded-full shadow-lg text-xs font-medium text-brand-truffle animate-in fade-in slide-in-from-right-4 duration-300">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Artists available today</span>
      </div>

      <a
        href={getWhatsAppLink("Hello Glow & Go Ruaka! I would like to book an appointment")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
      </a>
    </div>
  );
}
