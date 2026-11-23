"use client";

import { X, Printer, CheckCircle2, MapPin, Calendar, Clock, User, Phone, Sparkles } from "lucide-react";
import { formatKsh } from "@/data/services";

interface ReservationSlipProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    bookingId: string;
    clientName: string;
    phone: string;
    serviceName: string;
    category: string;
    artist: string;
    date: string;
    timeSlot: string;
    price: number;
    specialNotes?: string;
  };
}

export function ReservationSlipModal({ isOpen, onClose, bookingData }: ReservationSlipProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#ecd8d0] shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-plum hover:text-brand-truffle rounded-full hover:bg-[#f5ebe6] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Printable Card Area */}
        <div id="reservation-slip" className="border-2 border-dashed border-[#ecd8d0] rounded-xl p-6 bg-[#fdf8f5]">
          {/* Header */}
          <div className="text-center pb-4 border-b border-[#ecd8d0]">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f5ebe6] text-brand-primary mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-truffle">Glow &amp; Go</h3>
            <p className="text-xs uppercase tracking-widest font-semibold text-brand-plum">
              Official Appointment Reservation Slip
            </p>
            <div className="mt-2 inline-block bg-[#fecf93]/40 border border-brand-secondary/30 text-brand-gold text-[11px] font-bold px-3 py-0.5 rounded-full">
              ID: {bookingData.bookingId}
            </div>
          </div>

          {/* Details */}
          <div className="py-4 space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1 border-b border-[#ecd8d0]/50">
              <span className="text-brand-plum flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-brand-primary" /> Client Name:
              </span>
              <span className="font-bold text-brand-truffle">{bookingData.clientName || "Valued Client"}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-[#ecd8d0]/50">
              <span className="text-brand-plum flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-primary" /> Contact:
              </span>
              <span className="font-semibold text-brand-truffle">{bookingData.phone || "07XXXXXXXX"}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-[#ecd8d0]/50">
              <span className="text-brand-plum flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" /> Treatment:
              </span>
              <span className="font-bold text-brand-truffle text-right">{bookingData.serviceName}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-[#ecd8d0]/50">
              <span className="text-brand-plum">Specialist:</span>
              <span className="font-semibold text-brand-truffle">{bookingData.artist}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-[#ecd8d0]/50">
              <span className="text-brand-plum flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-secondary" /> Date:
              </span>
              <span className="font-semibold text-brand-truffle">{bookingData.date}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-[#ecd8d0]/50">
              <span className="text-brand-plum flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-secondary" /> Scheduled Time:
              </span>
              <span className="font-semibold text-brand-truffle">{bookingData.timeSlot}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-[#ecd8d0]/50">
              <span className="text-brand-plum">Payment Terms:</span>
              <span className="font-medium text-emerald-700">Pay at Studio / M-Pesa</span>
            </div>

            <div className="flex justify-between items-center pt-2 text-base">
              <span className="font-bold text-brand-truffle">Total Amount:</span>
              <span className="font-serif font-bold text-brand-primary text-xl">
                {formatKsh(bookingData.price)}
              </span>
            </div>
          </div>

          {/* Location note */}
          <div className="mt-3 p-3 bg-white rounded-lg border border-[#ecd8d0] text-[11px] text-brand-plum flex items-start gap-2">
            <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-brand-truffle">Ruaka Commercial Center, 2nd Fl: </span>
              Please arrive 5-10 minutes prior to your slot. Clean eye area free of mascara is recommended.
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handlePrint}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 border border-[#ecd8d0] bg-[#faf3f0] hover:bg-[#f5ebe6] text-brand-truffle py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print or Save PDF</span>
          </button>
          <button
            onClick={onClose}
            className="w-full sm:flex-1 bg-brand-primary hover:bg-[#73323f] text-white py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
