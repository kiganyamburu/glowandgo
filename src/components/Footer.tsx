"use client";

import Link from "next/link";
import { Crown, Sparkles, MapPin, Phone, Instagram, Send, Heart } from "lucide-react";


export function Footer() {
  return (
    <footer className="bg-[#f5ebe6] border-t border-[#ecd8d0] pt-14 pb-8 text-brand-truffle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#ecd8d0]">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white border border-[#d8c1c3] flex items-center justify-center text-brand-primary shadow-sm">
                <Crown className="w-4 h-4 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-truffle">Glow &amp; Go</h3>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-brand-plum">
                  Lash + Wax Spa • Ruaka
                </p>
              </div>
            </div>

            <p className="text-sm text-brand-plum leading-relaxed">
              Upscale lash styling and gentle body waxing boutique curated for effortless glamour in
              Ruaka, Nairobi. Meticulously designed for your natural eye geometry.
            </p>

            <div className="space-y-2 pt-2 text-xs text-brand-plum font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>Ruaka Town, Along Limuru Road (Ruaka Commercial Center, 2nd Fl)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a href="tel:0748897019" className="hover:text-brand-primary transition-colors">
                  WhatsApp: +254 748 897 019
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Opening Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-brand-truffle tracking-wide">
              Opening Hours
            </h4>
            <div className="space-y-2.5 text-xs text-brand-plum">
              <div className="flex justify-between border-b border-[#ecd8d0]/60 pb-1.5">
                <span>Monday – Friday</span>
                <span className="font-semibold text-brand-truffle">9:00 AM – 7:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#ecd8d0]/60 pb-1.5">
                <span>Saturday</span>
                <span className="font-semibold text-brand-truffle">8:30 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#ecd8d0]/60 pb-1.5">
                <span>Sunday</span>
                <span className="font-semibold text-brand-truffle">By Appointment</span>
              </div>
              <div className="flex justify-between  pb-1.5">
                <span>Public Holidays</span>
                <span className="font-semibold text-brand-primary">By Appointment</span>
              </div>
            </div>
          </div>

          {/* Column 3: Studio Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-brand-truffle tracking-wide">
              Studio Links
            </h4>
            <ul className="space-y-2 text-xs text-brand-plum">
              <li>
                <Link href="/" className="hover:text-brand-primary transition-colors">
                  Cluster &amp; Individual Lashes
                </Link>
              </li>
              <li>
                <Link href="/waxing" className="hover:text-brand-primary transition-colors">
                  Gentle Waxing Treatments
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-primary transition-colors">
                  Client Transformations (Lookbook)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-primary transition-colors">
                  The Ruaka Sanctuary &amp; Hygiene Standards
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-brand-primary transition-colors">
                  Client Love &amp; Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-primary transition-colors">
                  Lash Aftercare &amp; Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Glamour */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-brand-truffle tracking-wide">
              Connect &amp; Glamour
            </h4>
            <p className="text-xs text-brand-plum">
              Follow our work on Instagram:{" "}
              <a
                href="https://instagram.com/glowandgo_lashandwax"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-primary hover:underline"
              >
                @glowandgo_lashandwax
              </a>
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-brand-truffle block mb-1.5">
                VIP Private Invitations
              </span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for joining our VIP list! Exclusive seasonal drops will arrive in your inbox.");
                }}
                className="flex items-center gap-1.5"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="bg-white border border-[#ecd8d0] rounded-lg px-3 py-2 text-xs text-brand-truffle placeholder-brand-subtle flex-1 focus:outline-none focus:border-brand-primary"
                />
                <button
                  type="submit"
                  className="bg-brand-gold hover:bg-[#5f4111] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  Join
                </button>
              </form>
              <span className="text-[10px] text-brand-plum/70 mt-1 block">
                Exclusive offers and seasonal lash drops.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-plum/80">
          <p>© 2025 Glow &amp; Go Lash + Wax Spa. Ruaka, Kenya.</p>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="hover:text-brand-primary transition-colors">
              Booking Terms &amp; Cancellation Policy
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-brand-primary transition-colors">
              Lash Care Protocol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
