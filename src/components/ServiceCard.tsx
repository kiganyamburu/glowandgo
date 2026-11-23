"use client";

import Link from "next/link";
import { formatKsh, ServiceItem } from "@/data/services";

import { Sparkles, Clock, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  onSelect?: (service: ServiceItem) => void;
  isSelected?: boolean;
}

export function ServiceCard({ service, onSelect, isSelected }: ServiceCardProps) {
  return (
    <div
      onClick={() => onSelect && onSelect(service)}
      className={`group relative p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
        isSelected
          ? "bg-[#8b4552] text-white border-[#8b4552] shadow-md shadow-brand-primary/20"
          : "bg-white hover:bg-[#faf4f1] border-[#ecd8d0] text-brand-truffle shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4
              className={`font-semibold text-base sm:text-lg tracking-tight ${
                isSelected ? "text-white" : "text-brand-truffle group-hover:text-brand-primary"
              }`}
            >
              {service.name}
            </h4>
            {service.badge && (
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-[#fecf93] text-brand-gold border border-brand-secondary/30"
                }`}
              >
                {service.badge}
              </span>
            )}
          </div>

          {service.subtitle && (
            <p
              className={`text-xs mt-1 ${
                isSelected ? "text-white/80" : "text-brand-plum"
              }`}
            >
              {service.subtitle}
            </p>
          )}

          {service.description && (
            <p
              className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                isSelected ? "text-white/90" : "text-brand-plum/80"
              }`}
            >
              {service.description}
            </p>
          )}
        </div>

        {/* Price & Booking action */}
        <div className="text-right flex-shrink-0">
          <div
            className={`font-bold font-sans text-base sm:text-lg ${
              isSelected ? "text-white" : "text-brand-truffle"
            }`}
          >
            {formatKsh(service.price)}
          </div>
          {service.secondaryPrice && (
            <div
              className={`text-[11px] ${
                isSelected ? "text-white/80" : "text-brand-plum"
              }`}
            >
              {service.secondaryLabel}
            </div>
          )}
          {service.duration && (
            <div
              className={`flex items-center justify-end gap-1 text-[11px] mt-1 ${
                isSelected ? "text-white/70" : "text-brand-subtle"
              }`}
            >
              <Clock className="w-3 h-3" />
              <span>{service.duration}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 pt-3 border-t flex items-center justify-between text-xs font-medium border-current/10">
        <span className={isSelected ? "text-white/80" : "text-brand-plum"}>
          {service.category.includes("wax") ? "Stripless botanical wax" : "Cashmere mink filaments"}
        </span>
        <Link
          href={`/book?service=${service.id}`}
          onClick={(e) => e.stopPropagation()}
          className={`inline-flex items-center gap-1 font-semibold ${
            isSelected
              ? "text-white hover:underline"
              : "text-brand-primary group-hover:translate-x-0.5 transition-transform"
          }`}
        >
          <span>Select &amp; Book</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
