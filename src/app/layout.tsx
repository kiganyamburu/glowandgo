import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Glow & Go Lash + Wax Spa | Ruaka, Nairobi",
  description:
    "Longer Lashes, Bigger Confidence. Nairobi's premier boutique lash and waxing sanctuary located at Ruaka Commercial Center, along Limuru Road. Hand-mapped cluster lashes, cashmere individual extensions, and painless stripless waxing.",
  keywords: [
    "Lashes Ruaka",
    "Glow and Go",
    "Lash extensions Nairobi",
    "Cluster lashes",
    "Individual lashes Kenya",
    "Brazilian wax Ruaka",
    "Lash salon Limuru Road",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#fdf8f5] text-[#2b1e22] antialiased selection:bg-brand-primary selection:text-white">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
