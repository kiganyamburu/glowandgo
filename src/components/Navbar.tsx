"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Sparkles, Menu, X, Calendar, Crown, ChevronRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Services & Lash Menu" },
    { href: "/waxing", label: "Waxing" },
    { href: "/gallery", label: "Before & After Gallery" },
    { href: "/about", label: "About & Studio" },
    { href: "/reviews", label: "Client Reviews" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fdf8f5]/95 backdrop-blur-md border-b border-[#ecd8d0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#f5ebe6] border border-[#d8c1c3] flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform shadow-sm">
            <Crown className="w-5 h-5 text-brand-primary" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-truffle group-hover:text-brand-primary transition-colors">
                Glow &amp; Go
              </span>
              <Sparkles className="w-3.5 h-3.5 text-brand-secondary fill-brand-secondary/40" />
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-brand-plum">
              Lash + Wax Spa • Ruaka
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${isActive
                    ? "bg-[#f5ebe6] text-brand-primary font-semibold shadow-sm"
                    : "text-brand-plum hover:text-brand-primary hover:bg-[#f8f3f0]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Stylist Avatar */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#73323f] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md shadow-brand-primary/20 hover:shadow-lg hover:shadow-brand-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
          <div
            title="Rachel M. - Master Lash Artist On Duty"
            className="relative w-10 h-10 rounded-full border-2 border-brand-secondary overflow-hidden shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
              alt="Master Lash Artist"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-400"></span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href="/book"
            className="text-xs font-semibold bg-brand-primary text-white px-3 py-1.5 rounded-full"
          >
            Book
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-brand-plum hover:bg-[#f5ebe6] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#ecd8d0] bg-[#fdf8f5] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                    ? "bg-[#f5ebe6] text-brand-primary font-semibold"
                    : "text-brand-plum hover:bg-[#f8f3f0]"
                  }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-brand-subtle" />
              </Link>
            );
          })}
          <div className="pt-4 border-t border-[#ecd8d0]">
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white py-3 rounded-full text-base font-semibold shadow-md"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment Now</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
