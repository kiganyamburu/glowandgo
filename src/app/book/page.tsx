"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Sparkles,
  Eye,
  RefreshCw,
  Clock,
  Calendar,
  CheckCircle2,
  MapPin,
  Phone,
  Instagram,
  FileText,
  MessageCircle,
  HelpCircle,
  Scissors,
  Check,
} from "lucide-react";
import {
  CLUSTER_LASHES,
  INDIVIDUAL_LASHES,
  LASH_REFILLS,
  LASH_ADDONS,
  WAXING_FACIAL,
  WAXING_BODY,
  WAXING_INTIMATE,
  WAXING_COMBOS,
  ServiceItem,
  formatKsh,
} from "@/data/services";
import { ReservationSlipModal } from "@/components/ReservationSlipModal";
import confetti from "canvas-confetti";
import { openWhatsApp } from "@/lib/whatsapp";


const ALL_SERVICES: ServiceItem[] = [
  ...CLUSTER_LASHES,
  ...INDIVIDUAL_LASHES,
  ...LASH_REFILLS,
  ...LASH_ADDONS,
  ...WAXING_FACIAL,
  ...WAXING_BODY,
  ...WAXING_INTIMATE,
  ...WAXING_COMBOS,
];

function BookingContent() {
  const searchParams = useSearchParams();
  const initialServiceId = searchParams.get("service");

  // Categories
  const categories = [
    { id: "cluster", label: "Cluster Lashes", icon: Eye },
    { id: "individual", label: "Individual Lashes", icon: Sparkles },
    { id: "refills", label: "Lash Refills", icon: RefreshCw },
    { id: "addons", label: "Lash Add-ons", icon: Sparkles },
    { id: "wax", label: "Wax & Brows", icon: Scissors },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("cluster");

  // Get services for current category
  const getCategoryServices = (cat: string): ServiceItem[] => {
    switch (cat) {
      case "cluster":
        return CLUSTER_LASHES;
      case "individual":
        return INDIVIDUAL_LASHES;
      case "refills":
        return LASH_REFILLS;
      case "addons":
        return LASH_ADDONS;
      case "wax":
        return [...WAXING_FACIAL, ...WAXING_INTIMATE, ...WAXING_BODY, ...WAXING_COMBOS];
      default:
        return CLUSTER_LASHES;
    }
  };

  // Active selected service
  const [selectedService, setSelectedService] = useState<ServiceItem>(CLUSTER_LASHES[0]);

  // On initial mount or search param change, auto select requested service
  useEffect(() => {
    if (initialServiceId) {
      const found = ALL_SERVICES.find((s) => s.id === initialServiceId);
      if (found) {
        setSelectedService(found);
        if (found.category === "cluster") setSelectedCategory("cluster");
        else if (found.category === "individual") setSelectedCategory("individual");
        else if (found.category === "refills") setSelectedCategory("refills");
        else if (found.category === "addons") setSelectedCategory("addons");
        else if (found.category.startsWith("wax")) setSelectedCategory("wax");
      }
    }
  }, [initialServiceId]);

  // Stylists
  const stylists = [
    {
      id: "faith",
      name: "Faith M.",
      role: "Master Lash Artist",
      desc: "Master Lash Artist",
    },
    {
      id: "brenda",
      name: "Brenda K.",
      role: "Volume & Hybrid Specialist",
      desc: "Volume & Hybrid Specialist",
    },
    {
      id: "any",
      name: "Any Artist",
      role: "Earliest Available",
      desc: "Earliest slot available",
    },
  ];

  const [selectedArtist, setSelectedArtist] = useState(stylists[0]);
  const [bookingDate, setBookingDate] = useState("2026-10-27");
  const [timeSlot, setTimeSlot] = useState("02:00 PM");

  const timeSlots = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM",
    "06:30 PM",
  ];

  // Client info
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [clientType, setClientType] = useState<"first-time" | "returning">("first-time");
  const [notes, setNotes] = useState("");

  // Reservation slip modal
  const [slipModalOpen, setSlipModalOpen] = useState(false);
  const [bookingId, setBookingId] = useState("GG-8942");

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    const services = getCategoryServices(catId);
    if (services.length > 0) {
      setSelectedService(services[0]);
    }
  };

  const handleSaveSlip = () => {
    const id = "GG-" + Math.floor(1000 + Math.random() * 9000);
    setBookingId(id);
    setSlipModalOpen(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#8b4552", "#c59b63", "#fecf93"],
    });
  };

  const handleWhatsAppConfirm = () => {
    const id = "GG-" + Math.floor(1000 + Math.random() * 9000);
    setBookingId(id);

    const message = `Hello Glow & Go Ruaka! I would like to confirm my appointment reservation:

• Booking ID: ${id}
• Name: ${fullName || "Valued Client"}
• Phone: ${phone || "Not specified"}
• Service: ${selectedService.name} (${formatKsh(selectedService.price)})
• Category: ${selectedCategory.toUpperCase()}
• Specialist: ${selectedArtist.name} (${selectedArtist.role})
• Date: ${bookingDate}
• Time: ${timeSlot}
• Client Type: ${
      clientType === "first-time"
        ? "First-Time Client (Welcome Consultation Included)"
        : "Returning Client"
    }
${notes ? `• Special Notes: ${notes}\n` : ""}
Please confirm my booking at Ruaka Commercial Center!`;

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8b4552", "#c59b63", "#25D366"],
    });

    openWhatsApp(message);
  };


  const currentCategoryLabel =
    categories.find((c) => c.id === selectedCategory)?.label || "Cluster Lashes";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN: 4-STEP BOOKING WORKFLOW (Screen 1) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Header Banner & Showcase (Screen 1) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#ecd8d0]">
            <div className="space-y-2 max-w-lg">
              <div className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
                PREMIUM LASH &amp; WAX STUDIO • RUAKA
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-truffle">
                Glow &amp; Go
              </h1>
              <p className="font-serif italic text-base text-brand-primary">
                Longer Lashes, Bigger Confidence ♥
              </p>
              <p className="text-xs text-brand-plum leading-relaxed">
                Curate your signature eye look or silky waxing ritual. Experience precision lash
                artistry, tailored sets, and bespoke refills in our calm sanctuary.
              </p>

              <div className="flex items-center gap-3 pt-2 text-[11px] text-brand-plum font-medium flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-primary" /> Ruaka Studio
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-secondary" /> 9:00 AM - 7:00 PM Daily
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Certified Lash Artists
                </span>
              </div>
            </div>

            {/* Menu Showcase Card on right (Screen 1 top-right) */}
            <div className="relative rounded-2xl overflow-hidden border border-[#ecd8d0] w-full sm:w-48 aspect-[4/5] bg-black shadow-sm flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1583001800475-527119bd7c3f?auto=format&fit=crop&w=400&q=80"
                alt="Menu showcase"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3 text-white">
                <span className="text-[9px] uppercase tracking-wider font-bold text-brand-secondary">
                  MENU SHOWCASE
                </span>
                <h4 className="font-serif text-xs font-bold leading-snug">
                  Cluster &amp; Individual Lashes
                </h4>
                <span className="text-[10px] text-white/80 mt-0.5">
                  Starting from KSh 1,200
                </span>
              </div>
            </div>
          </div>

          {/* STEP 1: SELECT TREATMENT CATEGORY (Screen 1) */}
          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#ecd8d0]/60">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-truffle">
                    Select Treatment Category
                  </h3>
                  <p className="text-xs text-brand-plum">Choose your look or grooming service</p>
                </div>
              </div>

              <span className="text-xs font-semibold px-3 py-1 bg-[#f5ebe6] text-brand-primary rounded-full border border-[#ecd8d0]">
                {currentCategoryLabel}
              </span>
            </div>

            {/* Category Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all ${
                      isSelected
                        ? "bg-brand-primary text-white border-brand-primary shadow-md shadow-brand-primary/20 scale-[1.02]"
                        : "bg-[#faf3f0] hover:bg-[#f5ebe6] text-brand-plum border-[#ecd8d0]"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? "text-white" : "text-brand-primary"}`} />
                    <span className="text-xs font-semibold leading-tight">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: SELECT SPECIFIC SERVICE (Screen 1) */}
          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-[#ecd8d0]/60">
              <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold">
                2
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-truffle">
                  Select Specific Service
                </h3>
                <p className="text-xs text-brand-plum">
                  Transparent pricing directly from our signature menu
                </p>
              </div>
            </div>

            {/* Selectable Services List */}
            <div className="space-y-2 pt-1">
              {getCategoryServices(selectedCategory).map((service) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-brand-primary text-white border-brand-primary shadow-md shadow-brand-primary/20"
                        : "bg-[#faf3f0]/50 hover:bg-[#faf3f0] text-brand-truffle border-[#ecd8d0]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? "border-white bg-white/20 text-white"
                            : "border-[#d8c1c3] bg-white text-transparent"
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold text-sm ${isSelected ? "text-white" : "text-brand-truffle"}`}>
                            {service.name}
                          </span>
                        </div>
                        {service.subtitle && (
                          <p className={`text-xs mt-0.5 ${isSelected ? "text-white/80" : "text-brand-plum"}`}>
                            {service.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className={`font-bold font-sans text-sm sm:text-base ${isSelected ? "text-white" : "text-brand-truffle"}`}>
                        {formatKsh(service.price)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 3: DATE, TIME & SPECIALIST (Screen 1) */}
          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-[#ecd8d0]/60">
              <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold">
                3
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-truffle">
                  Date, Time &amp; Specialist
                </h3>
                <p className="text-xs text-brand-plum">Choose your preferred session details</p>
              </div>
            </div>

            {/* Preferred Stylist */}
            <div>
              <label className="block text-xs font-semibold text-brand-truffle mb-2">
                Preferred Lash Stylist
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stylists.map((st) => {
                  const isSelected = selectedArtist.id === st.id;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setSelectedArtist(st)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-[#faf0ec] border-brand-primary text-brand-truffle ring-1 ring-brand-primary"
                          : "bg-[#faf3f0] border-[#ecd8d0] text-brand-plum hover:bg-[#f5ebe6]"
                      }`}
                    >
                      <div className="font-semibold text-xs text-brand-truffle">{st.name}</div>
                      <div className="text-[11px] text-brand-plum mt-0.5">{st.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date and Time Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-brand-truffle mb-1.5">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-[#faf3f0] border border-[#e4d2cb] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-truffle font-medium focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-truffle mb-1.5">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-[#faf3f0] border border-[#e4d2cb] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-truffle font-medium focus:outline-none focus:border-brand-primary cursor-pointer"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* STEP 4: CLIENT INFORMATION (Screen 1) */}
          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-[#ecd8d0]/60">
              <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold">
                4
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-truffle">
                  Client Information
                </h3>
                <p className="text-xs text-brand-plum">
                  For booking confirmation &amp; reminder updates
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-brand-truffle mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Wanjiku Mwangi"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#faf3f0] border border-[#e4d2cb] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-truffle placeholder-brand-subtle focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-truffle mb-1.5">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="07XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#faf3f0] border border-[#e4d2cb] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-truffle placeholder-brand-subtle focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            {/* Client Type Radio */}
            <div>
              <label className="block text-xs font-semibold text-brand-truffle mb-2">
                Client Type
              </label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-brand-truffle">
                  <input
                    type="radio"
                    name="clientType"
                    checked={clientType === "first-time"}
                    onChange={() => setClientType("first-time")}
                    className="accent-brand-primary w-4 h-4"
                  />
                  <span>First-Time Client (Welcome Consultation Included)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-brand-truffle">
                  <input
                    type="radio"
                    name="clientType"
                    checked={clientType === "returning"}
                    onChange={() => setClientType("returning")}
                    className="accent-brand-primary w-4 h-4"
                  />
                  <span>Returning Client</span>
                </label>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-xs font-semibold text-brand-truffle mb-1.5">
                Special Requests or Lash Sensitivity Notes
              </label>
              <textarea
                rows={2}
                placeholder="e.g., Sensitive eyes, contact lens wearer, preferred curl length..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#faf3f0] border border-[#e4d2cb] rounded-xl px-4 py-2 text-xs sm:text-sm text-brand-truffle placeholder-brand-subtle focus:outline-none focus:border-brand-primary"
              ></textarea>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STICKY BOOKING SUMMARY & LOCATION (Screen 1) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          {/* Booking Summary Box */}
          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-card space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#ecd8d0]">
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-truffle">Booking Summary</h3>
                <p className="text-[11px] text-brand-plum">Live appointment estimate</p>
              </div>
              <FileText className="w-5 h-5 text-brand-primary" />
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] tracking-wider uppercase font-bold text-brand-plum/80 block">
                  SERVICE
                </span>
                <div className="flex justify-between items-baseline mt-0.5">
                  <span className="font-bold text-brand-truffle text-sm">{selectedService.name}</span>
                  <span className="font-bold font-sans text-brand-truffle">
                    {formatKsh(selectedService.price)}
                  </span>
                </div>
                <span className="text-[11px] text-brand-plum">{currentCategoryLabel}</span>
              </div>

              <div className="pt-2 border-t border-[#ecd8d0]/60">
                <span className="text-[10px] tracking-wider uppercase font-bold text-brand-plum/80 block">
                  ARTIST
                </span>
                <span className="font-semibold text-brand-truffle block mt-0.5">
                  {selectedArtist.name} – {selectedArtist.role}
                </span>
              </div>

              <div className="pt-2 border-t border-[#ecd8d0]/60">
                <span className="text-[10px] tracking-wider uppercase font-bold text-brand-plum/80 block">
                  SCHEDULE
                </span>
                <span className="font-semibold text-brand-truffle block mt-0.5">
                  {bookingDate} at {timeSlot}
                </span>
              </div>

              <div className="pt-3 border-t border-[#ecd8d0] space-y-1.5">
                <div className="flex justify-between text-brand-plum">
                  <span>Subtotal</span>
                  <span className="font-semibold text-brand-truffle">
                    {formatKsh(selectedService.price)}
                  </span>
                </div>
                <div className="flex justify-between text-brand-plum">
                  <span>Booking Deposit</span>
                  <span className="font-medium text-emerald-700">Pay At Studio / M-Pesa</span>
                </div>
                <div className="flex justify-between text-base font-bold text-brand-truffle pt-2 border-t border-[#ecd8d0]">
                  <span>Total</span>
                  <span className="font-serif text-xl font-bold text-brand-primary">
                    {formatKsh(selectedService.price)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleWhatsAppConfirm}
                className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#73323f] text-white py-3.5 rounded-full font-semibold text-xs sm:text-sm shadow-md shadow-brand-primary/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Confirm via WhatsApp (0748897019)</span>
              </button>

              <button
                onClick={handleSaveSlip}
                className="w-full flex items-center justify-center gap-2 bg-[#f5ebe6] hover:bg-[#ebdcd5] text-brand-truffle border border-[#ecd8d0] py-2.5 rounded-full font-semibold text-xs transition-colors"
              >
                <span>Save Reservation Slip</span>
              </button>
            </div>

            <div className="p-3 bg-[#faf3f0] rounded-xl border border-[#ecd8d0] text-[11px] text-brand-plum flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" />
              <span>
                Free cancellations or rescheduling up to 6 hours before your appointment.
              </span>
            </div>
          </div>

          {/* Ruaka Studio Location Card (Screen 1) */}
          <div className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm space-y-3 text-xs">
            <h4 className="font-serif text-base font-bold text-brand-truffle">Ruaka Studio Location</h4>
            <div className="p-3.5 bg-[#f5ebe6]/60 rounded-xl border border-[#ecd8d0] flex items-center gap-2 font-medium text-brand-truffle">
              <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span>Ruaka Commercial Center, 2nd Fl</span>
            </div>
            <div className="space-y-1.5 pt-1 text-brand-plum">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                <span>Direct Hotline: 0748897019</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-brand-primary" />
                <span>Instagram: @glowandgo_lashandwax</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Slip Modal */}
      <ReservationSlipModal
        isOpen={slipModalOpen}
        onClose={() => setSlipModalOpen(false)}
        bookingData={{
          bookingId: bookingId,
          clientName: fullName,
          phone: phone,
          serviceName: selectedService.name,
          category: currentCategoryLabel,
          artist: `${selectedArtist.name} (${selectedArtist.role})`,
          date: bookingDate,
          timeSlot: timeSlot,
          price: selectedService.price,
          specialNotes: notes,
        }}
      />
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-brand-plum">
          Loading booking sanctuary...
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
