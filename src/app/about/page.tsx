import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, Award, CheckCircle2, MapPin, Calendar, Clock, Crown } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#f5ebe6] border border-[#ecd8d0] px-3.5 py-1 rounded-full text-xs font-semibold text-brand-primary tracking-wider uppercase">
          <Crown className="w-3.5 h-3.5 text-brand-secondary" />
          <span>The Ruaka Beauty Sanctuary</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-truffle tracking-tight">
          Crafting Quiet Luxury in Ruaka
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-brand-secondary">
          &ldquo;Where delicate artistry meets uncompromising sterile hygiene.&rdquo;
        </p>
        <p className="text-sm sm:text-base text-brand-plum leading-relaxed">
          Glow &amp; Go was founded with one clear vision: to bring Westlands and Kilimani-level lash
          and skin refinement to Ruaka. Located on the 2nd Floor of Ruaka Commercial Center, our
          space is an intimate, welcoming sanctuary designed to slow down time.
        </p>
      </section>

      {/* Philosophy & Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-7 rounded-2xl border border-[#ecd8d0] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#f5ebe6] border border-[#ecd8d0] flex items-center justify-center text-brand-primary">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-truffle">Bespoke Eye Architecture</h3>
          <p className="text-xs text-brand-plum leading-relaxed">
            No two eye shapes are identical. We map every set using custom facial contouring—balancing
            almond, round, deep-set, or hooded lids with personalized curl degrees and lengths.
          </p>
        </div>

        <div className="bg-white p-7 rounded-2xl border border-[#ecd8d0] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#f5ebe6] border border-[#ecd8d0] flex items-center justify-center text-brand-secondary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-truffle">Zero-Compromise Sterilization</h3>
          <p className="text-xs text-brand-plum leading-relaxed">
            We follow strict hospital-grade autoclave sterilization for precision tweezers and tools.
            In our waxing lounge, a 100% No Double-Dipping policy ensures absolute peace of mind.
          </p>
        </div>

        <div className="bg-white p-7 rounded-2xl border border-[#ecd8d0] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#f5ebe6] border border-[#ecd8d0] flex items-center justify-center text-brand-gold">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-truffle">Gentle Natural Preservation</h3>
          <p className="text-xs text-brand-plum leading-relaxed">
            Healthy natural lashes always come first. We use 0.03mm-0.05mm ultra-lightweight cashmere
            mink fibers that exert zero tension on natural follicles, guaranteeing longevity.
          </p>
        </div>
      </section>

      {/* Meet the Artists */}
      <section className="bg-[#f5ebe6]/60 rounded-3xl border border-[#ecd8d0] p-8 sm:p-12">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
            Our Specialists
          </span>
          <h2 className="font-serif text-3xl font-bold text-brand-truffle">
            Master Lash &amp; Wax Artists
          </h2>
          <p className="text-xs sm:text-sm text-brand-plum leading-relaxed">
            Trained and certified in advanced Russian volume, Kim K styling, and pain-conscious
            hard-wax technique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Faith */}
          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-primary flex-shrink-0 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                alt="Faith M."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary">
                Lead Specialist
              </span>
              <h3 className="font-serif text-xl font-bold text-brand-truffle">Faith M.</h3>
              <p className="text-xs font-semibold text-brand-primary">Master Lash Artist</p>
              <p className="text-xs text-brand-plum leading-relaxed pt-1">
                Specializes in Wispy Spikes, Wet Look effects, and custom colored ombre sets. Over
                1,500 successful mappings.
              </p>
            </div>
          </div>

          {/* Brenda */}
          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-secondary flex-shrink-0 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=300&q=80"
                alt="Brenda K."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary">
                Technique Lead
              </span>
              <h3 className="font-serif text-xl font-bold text-brand-truffle">Brenda K.</h3>
              <p className="text-xs font-semibold text-brand-primary">Volume &amp; Hybrid Specialist</p>
              <p className="text-xs text-brand-plum leading-relaxed pt-1">
                Expert in Russian volume fan blooming, knotless clusters, and quick painless Brazilian
                waxing protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Studio Invitation */}
      <section className="bg-white rounded-3xl border border-[#ecd8d0] p-8 sm:p-12 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
            Visit Our Sanctuary
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-truffle">
            Ruaka Commercial Center, 2nd Floor
          </h2>
          <p className="text-xs sm:text-sm text-brand-plum leading-relaxed">
            Conveniently situated along Limuru Road with secure on-site parking. Come relax in our
            aroma-infused lounge while our specialists elevate your beauty.
          </p>
          <div className="flex items-center gap-4 text-xs text-brand-plum pt-2">
            <span className="flex items-center gap-1 font-semibold text-brand-truffle">
              <Clock className="w-4 h-4 text-brand-primary" /> Open 7 Days A Week
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-brand-truffle">
              <MapPin className="w-4 h-4 text-brand-primary" /> Along Limuru Road
            </span>
          </div>
        </div>

        <Link
          href="/book"
          className="bg-brand-primary hover:bg-[#73323f] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-md transition-all whitespace-nowrap"
        >
          Book Your Experience
        </Link>
      </section>
    </div>
  );
}
