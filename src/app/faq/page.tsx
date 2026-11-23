"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQS, FAQItem } from "@/data/faqs";
import { ChevronDown, Search, HelpCircle, MessageCircle, Phone, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";


export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "lashes", label: "Lash Extensions" },
    { id: "waxing", label: "Waxing Protocols" },
    { id: "aftercare", label: "Aftercare & Retention" },
    { id: "booking", label: "Booking & Policies" },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-14 py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#f5ebe6] border border-[#ecd8d0] px-3.5 py-1 rounded-full text-xs font-semibold text-brand-primary tracking-wider uppercase">
          <HelpCircle className="w-3.5 h-3.5 text-brand-secondary" />
          <span>Client Knowledgebase &amp; Protocols</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-truffle tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-brand-plum leading-relaxed max-w-xl mx-auto">
          Everything you need to know about preparing for your session, post-treatment care, and our
          strict hygienic standards in Ruaka.
        </p>

        {/* Search Bar */}
        <div className="pt-4 max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search questions (e.g. steam, refills, hygiene)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-[#ecd8d0] rounded-full pl-11 pr-4 py-3 text-xs sm:text-sm text-brand-truffle placeholder-brand-subtle focus:outline-none focus:border-brand-primary shadow-sm"
          />
          <Search className="w-4 h-4 text-brand-subtle absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pt-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-brand-primary text-white shadow-sm"
                  : "bg-white text-brand-plum hover:bg-[#f5ebe6] border border-[#ecd8d0]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ecd8d0] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[#faf3f0]/50"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-brand-truffle pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#f5ebe6] flex items-center justify-center text-brand-primary transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-brand-primary text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-brand-plum leading-relaxed border-t border-[#ecd8d0]/60 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#ecd8d0] p-6 text-brand-plum text-sm">
            No matching questions found. Feel free to contact our salon desk directly!
          </div>
        )}
      </section>

      {/* Still Have Questions Box */}
      <section className="bg-[#f5ebe6]/70 rounded-3xl border border-[#ecd8d0] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif text-xl font-bold text-brand-truffle">
            Have a question not listed here?
          </h3>
          <p className="text-xs text-brand-plum">
            Our Ruaka specialists are on standby to answer lash and skin questions directly.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink("Hello Glow & Go Ruaka! I have a question regarding my treatment")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold text-xs shadow-sm hover:bg-[#20ba59] transition-colors"
          >

            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>

          <a
            href="tel:0748897019"
            className="flex items-center gap-2 bg-white text-brand-truffle border border-[#ecd8d0] px-5 py-2.5 rounded-full font-semibold text-xs hover:bg-[#faf3f0] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-primary" />
            <span>Call Us</span>
          </a>
        </div>
      </section>
    </div>
  );
}
