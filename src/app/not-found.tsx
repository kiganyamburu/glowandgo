import Link from "next/link";
import { Crown, Sparkles, Home, Calendar, Phone, ArrowLeft } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-[#ecd8d0] p-8 sm:p-10 text-center shadow-card space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#f5ebe6] border border-[#d8c1c3] mx-auto flex items-center justify-center text-brand-primary shadow-sm">
          <Crown className="w-8 h-8 text-brand-primary" />
        </div>

        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary">
            Page Not Found • Ruaka Sanctuary
          </span>
          <h1 className="font-serif text-3xl font-bold text-brand-truffle">
            Lost Your Glow?
          </h1>
          <p className="text-xs sm:text-sm text-brand-plum leading-relaxed">
            The page you are looking for doesn&apos;t exist or has moved. Let us guide you back to
            our beauty treatment menus.
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#73323f] text-white py-3 rounded-full text-xs font-semibold shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Lash Menu (Home)</span>
          </Link>

          <Link
            href="/book"
            className="w-full flex items-center justify-center gap-2 bg-[#f5ebe6] hover:bg-[#ebdcd5] text-brand-truffle border border-[#ecd8d0] py-3 rounded-full text-xs font-semibold transition-colors"
          >
            <Calendar className="w-4 h-4 text-brand-primary" />
            <span>Book Appointment</span>
          </Link>

          <a
            href={getWhatsAppLink("Hello Glow & Go Ruaka! I need help finding something on your website")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 py-2.5 rounded-full text-xs font-semibold transition-colors"
          >
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
