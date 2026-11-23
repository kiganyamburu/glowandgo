export interface FAQItem {
  question: string;
  answer: string;
  category: "lashes" | "waxing" | "booking" | "aftercare";
}

export const FAQS: FAQItem[] = [
  {
    category: "lashes",
    question: "What is the difference between Cluster Lashes and Individual Lashes?",
    answer: "Cluster Lashes feature pre-fanned bouquets bonded gently beneath your natural lash line in just 35-45 minutes, delivering instant density and lasting 2-3 weeks. Individual Lashes are bonded 1-to-1 or as handmade fans to every single natural lash with microscopic precision, lasting 4-6 weeks with natural shedding cycles.",
  },
  {
    category: "lashes",
    question: "Will lash extensions damage my natural lashes?",
    answer: "Never at Glow & Go. We strictly adhere to isolation protocol and weight-matching guidelines (using ultra-fine 0.03mm-0.05mm cashmere filaments). Each natural lash bears only what its growth phase can safely carry, ensuring healthy natural follicle cycles.",
  },
  {
    category: "aftercare",
    question: "What is the strict 48-Hour Moisture Window?",
    answer: "While modern cyanoacrylate glues bond quickly, full cross-polymerization requires 24 to 48 hours. During this period, avoid direct heavy shower jets, steam rooms, facial saunas, and hot yoga to maximize bond longevity and ensure 3+ weeks retention.",
  },
  {
    category: "waxing",
    question: "Do you double-dip wooden wax spatulas?",
    answer: "Strictly NO. We follow a 100% No Double-Dipping policy. Every single wax application uses a brand new, disposable medical-grade wooden spatula. Non-disposable implements undergo hospital-grade autoclave sterilization.",
  },
  {
    category: "waxing",
    question: "How long should my hair be before a Brazilian or body wax?",
    answer: "Your hair should ideally be about the length of a grain of rice (approximately 1/4 inch or 2-3 weeks of post-shave regrowth). This allows our premium stripless hard wax to grip the root firmly without hair breakage.",
  },
  {
    category: "booking",
    question: "Do I need an appointment or do you accept walk-ins?",
    answer: "Walk-ins are warmly accommodated based on daily bed availability, but reservations via WhatsApp (0748897019) or our online booking portal are highly recommended to secure your preferred artist and time slot without waiting.",
  },
  {
    category: "booking",
    question: "What is your cancellation and rescheduling policy?",
    answer: "We understand schedules shift! You can reschedule or cancel with zero penalty up to 6 hours before your appointment. Message us on WhatsApp or call our desk directly.",
  },
  {
    category: "booking",
    question: "Where exactly in Ruaka are you located?",
    answer: "We are located at Ruaka Commercial Center, 2nd Floor, right along Limuru Road, Ruaka, Nairobi. Free secure client parking is available on-site.",
  },
];
