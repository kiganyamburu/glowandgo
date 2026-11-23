import { Star, CheckCircle2, MessageCircle, ExternalLink, Heart } from "lucide-react";
import { REVIEWS, INSTAGRAM_POSTS } from "@/data/reviews";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#f5ebe6] border border-[#ecd8d0] px-3.5 py-1 rounded-full text-xs font-semibold text-brand-primary tracking-wider uppercase">
          <Star className="w-3.5 h-3.5 text-brand-secondary fill-brand-secondary" />
          <span>Client Love &amp; Verified Feedback</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-truffle tracking-tight">
          Loved by Nairobi&apos;s Glam Beauties
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-brand-secondary">
          &ldquo;5.0 Star Rating across 2,400+ handcrafted lash sets in Ruaka.&rdquo;
        </p>
        <p className="text-sm text-brand-plum leading-relaxed">
          Read genuine reviews from clients who trust Glow &amp; Go with their lashes, brows, and
          waxing routines.
        </p>
      </section>

      {/* Review Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl border border-[#ecd8d0] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-brand-secondary fill-brand-secondary"
                  />
                ))}
              </div>

              {/* Service Tag */}
              <div className="text-xs font-semibold text-brand-primary bg-[#f5ebe6] px-2.5 py-1 rounded-md inline-block">
                {rev.service}
              </div>

              {/* Comment */}
              <p className="text-xs sm:text-sm text-brand-plum leading-relaxed">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            {/* Client profile */}
            <div className="flex items-center justify-between pt-3 border-t border-[#ecd8d0]/60">
              <div className="flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#ecd8d0]"
                />
                <div>
                  <div className="font-bold text-xs text-brand-truffle flex items-center gap-1">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                    )}
                  </div>
                  <span className="text-[11px] text-brand-plum/80">{rev.handle}</span>
                </div>
              </div>
              <span className="text-[10px] text-brand-subtle">{rev.date}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Instagram Spotlight */}
      <section className="bg-[#f5ebe6]/60 rounded-3xl border border-[#ecd8d0] p-8 sm:p-12 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-secondary">
              Instagram Showcase
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-truffle mt-1">
              Tagged by Our Beautiful Clients
            </h2>
          </div>
          <a
            href="https://instagram.com/glowandgo_lashandwax"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#73323f] transition-colors"
          >
            <span>Follow @glowandgo_lashandwax</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden border border-[#ecd8d0] aspect-[4/5] bg-white shadow-sm"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="font-bold text-xs">{post.client}</span>
                <p className="text-[11px] text-white/90 line-clamp-2 mt-1">{post.caption}</p>
                <div className="flex items-center gap-1 text-[10px] text-brand-secondary mt-1">
                  <Heart className="w-3 h-3 fill-current" />
                  <span>{post.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="text-center bg-white rounded-3xl border border-[#ecd8d0] p-8 sm:p-12 shadow-card space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-truffle">
          Experience the Glow &amp; Go Difference
        </h3>
        <p className="text-xs sm:text-sm text-brand-plum max-w-xl mx-auto">
          Join over 2,400 satisfied clients who wake up ready to conquer the day with effortless
          flutter.
        </p>
        <div className="pt-2">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#73323f] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-md transition-all"
          >
            <span>Book Your Transformation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
