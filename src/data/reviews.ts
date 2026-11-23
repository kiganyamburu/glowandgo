export interface ReviewItem {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  rating: number;
  service: string;
  comment: string;
  date: string;
  verified: boolean;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Ganjeri Mwangi",
    handle: "@ganjeri_m",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "Wispy Individual (The Kim K Whispers)",
    comment: "I have been doing my lashes in Westlands for years, but Glow & Go in Ruaka has completely converted me! Zero burning during application, and 3.5 weeks later they still look like I just walked out of the studio. Faith is an absolute magician.",
    date: "2 days ago",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Wambui Kariuki",
    handle: "@wambui_k",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "Cat Eye Clusters (Volume)",
    comment: "I needed lashes for my graduation on Saturday. Took only 45 minutes on the bed and they looked like expensive strip lashes! The under-lash technique means no messy glue on my eyelid.",
    date: "1 week ago",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Sharon Otieno",
    handle: "@sharon_otieno",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "Wet Set + Brow Sculpt Combo",
    comment: "The Brazilian wax + lash combo is top tier! Strict no double-dipping, lavender soothing oil, and super fast. The hygiene standard here is unmatched anywhere along Limuru Road.",
    date: "2 weeks ago",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Joyce Chepkwony",
    handle: "@joyce_chep",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "Hybrid Set + Coloured Plum Charm",
    comment: "The plum colored lashes and Swarovski crystal charm got me so many compliments at my friend's ruracio. Such delicate artistry. Loved the complimentary spoolie wand too!",
    date: "3 weeks ago",
    verified: true,
  },
  {
    id: "rev-5",
    name: "Mercy Achieng",
    handle: "@mercy_a",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "Classic Mid-Volume Lift",
    comment: "Super affordable at KSh 1,200 for cluster lashes that lasted through two gym sessions and a wedding. Booking via WhatsApp was instant and easy.",
    date: "1 month ago",
    verified: true,
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    client: "@wanjiku_n",
    caption: "Woke up like this thanks to @glowandgo_lashandwax ✨ D-curl perfection!",
    likes: "248",
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    client: "@beautynairobi",
    caption: "The salon mirror check is pure happiness at Ruaka Commercial Center 💕",
    likes: "312",
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    client: "@queen_k",
    caption: "Pre-birthday glam sorted in under an hour. Lashes on point!",
    likes: "189",
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    client: "@glam_ke",
    caption: "Lash artist Faith doing her magic. Zero irritation, peaceful sanctuary vibe.",
    likes: "420",
  },
];
