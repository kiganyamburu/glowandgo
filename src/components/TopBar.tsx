import Link from "next/link";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function TopBar() {
  return (
    <div className="bg-[#fdf8f5] border-b border-[#ecd8d0] py-1.5 px-4 text-xs font-medium text-brand-plum">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1 text-brand-plum/80">
            <MapPin className="w-3.5 h-3.5 text-brand-primary" />
            <span>Ruaka, Limuru Road, Nairobi</span>
          </div>
          <span className="hidden sm:inline text-brand-border">•</span>
          <div className="flex items-center gap-1 text-brand-plum/80">
            <Clock className="w-3.5 h-3.5 text-brand-secondary" />
            <span>Mon - Sat: 9:00 AM - 7:30 PM</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:0748897019"
            className="flex items-center gap-1.5 hover:text-brand-primary transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-brand-primary" />
            <span>0748897019</span>
          </a>
          <span className="text-brand-border">•</span>
          <a
            href={getWhatsAppLink("Hello Glow & Go Ruaka, I would like to inquire about booking a session")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800 transition-colors font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-600/20" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </div>
  );
}
