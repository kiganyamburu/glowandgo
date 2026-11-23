export interface ServiceItem {
  id: string;
  name: string;
  subtitle?: string;
  category: "cluster" | "individual" | "refills" | "addons" | "wax-facial" | "wax-body" | "wax-intimate" | "wax-combos";
  price: number;
  secondaryPrice?: number;
  secondaryLabel?: string;
  badge?: string;
  description?: string;
  duration?: string;
  specs?: Record<string, string>;
}

export interface ClusterGroup {
  id: string;
  name: string;
  tagline?: string;
  midVolumePrice: number;
  volumePrice: number;
  description?: string;
}

export function formatKsh(amount: number) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}

export const CLUSTER_GROUPS: ClusterGroup[] = [
  {
    id: "classic",
    name: "Classic Set",
    tagline: "Balanced definition",
    midVolumePrice: 1200,
    volumePrice: 1500,
    description: "Lightweight cluster flares for a subtle daytime boost. Natural everyday finish.",
  },
  {
    id: "cat-eye",
    name: "Cat Eye Set",
    tagline: "Elongated outer wing",
    midVolumePrice: 1200,
    volumePrice: 1400,
    description: "Elongated outer corners for an alluring winged, almond silhouette.",
  },
  {
    id: "wispy",
    name: "Wispy Set",
    tagline: "Feathery spike spikes",
    midVolumePrice: 1300,
    volumePrice: 1500,
    description: "Textured, staggered spikes creating a playful feathery Kim K dimension.",
  },
  {
    id: "wet",
    name: "Wet Set",
    tagline: "Glossy mascara spikes",
    midVolumePrice: 1300,
    volumePrice: 1500,
    description: "Deconstructed spikes giving a fresh stepped-out-of-the-shower mascara gloss look.",
  },
  {
    id: "hybrid",
    name: "Hybrid Set",
    tagline: "Classic + fluffy blend",
    midVolumePrice: 1300,
    volumePrice: 1500,
    description: "Balanced blend of classic spacing and fluffy volume fans for plush fullness.",
  },
];

export const CLUSTER_LASHES: ServiceItem[] = [
  {
    id: "cluster-classic-mid",
    name: "Classic Set (Mid Volume)",
    category: "cluster",
    price: 1200,
    subtitle: "Lightweight cluster flares for a subtle daytime boost",
    description: "Balanced definition, effortless everyday lash enhancement with zero eyelid weight.",
    duration: "35-45 mins",
  },
  {
    id: "cluster-classic-vol",
    name: "Classic Set (Volume)",
    category: "cluster",
    price: 1500,
    subtitle: "Fuller density classic clusters with rich depth",
    description: "Denser lash fringe creating an open-eye effect with flawless mascara finish.",
    duration: "45 mins",
  },
  {
    id: "cluster-cat-mid",
    name: "Cat Eye Set (Mid Volume)",
    category: "cluster",
    price: 1200,
    subtitle: "Elongated outer corners for an alluring winged silhouette",
    description: "Shorter inner corners fanning out into graceful outer wings.",
    duration: "45 mins",
  },
  {
    id: "cluster-cat-vol",
    name: "Cat Eye Set (Volume)",
    category: "cluster",
    price: 1400,
    subtitle: "High-drama winged lift with extra flutter at outer tips",
    description: "Maximum feline drama with extra fluttered volume along the outer third.",
    duration: "50 mins",
  },
  {
    id: "cluster-wispy-mid",
    name: "Wispy Set (Mid Volume)",
    category: "cluster",
    price: 1300,
    subtitle: "Textured, staggered spikes creating a feathery finish",
    description: "Alternating spikes and fans mimicking the coveted Kim K textured lash line.",
    duration: "45 mins",
  },
  {
    id: "cluster-wispy-vol",
    name: "Wispy Set (Volume)",
    category: "cluster",
    price: 1500,
    subtitle: "Bold dimensional wisps with pronounced peaks",
    description: "Feathery Kim K volume with dramatic peaks and plush multi-layered texture.",
    duration: "50 mins",
  },
  {
    id: "cluster-wet-mid",
    name: "Wet Set (Mid Volume)",
    category: "cluster",
    price: 1300,
    subtitle: "Deconstructed spikes giving a fresh mascara gloss aesthetic",
    description: "Closed unbloomed spikes creating that freshly stepped-out-of-the-shower look.",
    duration: "45 mins",
  },
  {
    id: "cluster-wet-vol",
    name: "Wet Set (Volume)",
    category: "cluster",
    price: 1500,
    subtitle: "High density wet-look spikes with striking definition",
    description: "Rich, intense wet effect with dark lash line density and glossy spike tips.",
    duration: "50 mins",
  },
  {
    id: "cluster-hybrid-mid",
    name: "Hybrid Set (Mid Volume)",
    category: "cluster",
    price: 1300,
    subtitle: "Balanced blend of classic spacing and fluffy volume fans",
    description: "The sweet spot between natural separation and airy flutter.",
    duration: "45 mins",
  },
  {
    id: "cluster-hybrid-vol",
    name: "Hybrid Set (Volume)",
    category: "cluster",
    price: 1500,
    subtitle: "Fluffy mixed-texture clusters for intense fullness",
    description: "Plush, full-coverage hybrid mapping with soft dimensional layers.",
    duration: "50 mins",
  },
];

export const INDIVIDUAL_LASHES: ServiceItem[] = [
  {
    id: "ind-classic",
    name: "Classic",
    category: "individual",
    price: 2500,
    subtitle: "1:1 lash attachment, natural everyday flutter",
    description: "One ultra-fine extension meticulously isolated and bonded to each natural lash. 4-6 weeks durability.",
    duration: "75-90 mins",
    badge: "Natural Everyday",
  },
  {
    id: "ind-hybrid",
    name: "Hybrid",
    category: "individual",
    price: 3000,
    subtitle: "Fluffy volume fans merged with singles",
    description: "A harmonious 50/50 blend of classic singles and handmade volume fans. Soft texture with buildable density.",
    duration: "90-105 mins",
    badge: "Most Popular",
  },
  {
    id: "ind-wispy",
    name: "Wispy",
    category: "individual",
    price: 3500,
    subtitle: "Textured peaks and multi-length spikes",
    description: "Custom mapping with staggered high peaks and fluffy base fans for signature celebrity allure.",
    duration: "100-120 mins",
    badge: "Kim K Signature",
  },
  {
    id: "ind-volume",
    name: "Volume",
    category: "individual",
    price: 4000,
    subtitle: "Dense, ultra-soft multi-dimensional fans",
    description: "Full hand-crafted fans of 3D-6D cashmere lash filaments delivering velvety black fullness.",
    duration: "120 mins",
    badge: "Red Carpet Drama",
  },
];

export const LASH_REFILLS: ServiceItem[] = [
  {
    id: "refill-classic",
    name: "2-Week Classic Refill",
    category: "refills",
    price: 1100,
    subtitle: "Keep your lash fan lush and seamless (at least 40% retained)",
    description: "Outgrown lashes gently detached and replaced with fresh extensions.",
    duration: "45 mins",
  },
  {
    id: "refill-hybrid",
    name: "2-Week Hybrid Refill",
    category: "refills",
    price: 1300,
    subtitle: "Restore your hybrid fullness and fluffy texture",
    description: "Replenishes both single extensions and volume fans for seamless symmetry.",
    duration: "50 mins",
  },
  {
    id: "refill-volume",
    name: "2-Week Volume Refill",
    category: "refills",
    price: 1500,
    subtitle: "Fullness top-up for Russian & Kim K volume sets",
    description: "Replaces shed fans to restore dense, black lash-line volume.",
    duration: "60 mins",
  },
];

export const LASH_ADDONS: ServiceItem[] = [
  {
    id: "addon-removal",
    name: "Lash Removal",
    category: "addons",
    price: 300,
    subtitle: "Safe, pain-free cream breakdown with zero damage",
    description: "Gentle medical-grade cream dissolver protects delicate natural lash follicles.",
  },
  {
    id: "addon-bottom",
    name: "Bottom Lashes",
    category: "addons",
    price: 500,
    subtitle: "Delicate lower lash framing for full doll-eye symmetry",
    description: "Micro-extensions placed along the lower lash line for striking photo-ready balance.",
  },
  {
    id: "addon-clear",
    name: "Lash Clear",
    category: "addons",
    price: 200,
    subtitle: "Deep oil-free foam spa bath & primer prep",
    description: "Purifies natural lashes from sebum, dust, and makeup residue for 2x stronger glue adhesion.",
  },
  {
    id: "addon-coloured",
    name: "Coloured Lashes",
    category: "addons",
    price: 150,
    subtitle: "Ombre plum, royal blue, or burgundy accents",
    description: "Subtle or bold color flashes placed on outer lash edges to flatter eye color.",
  },
  {
    id: "addon-charm",
    name: "Lash Charm (Crystal / Glitter Accent)",
    category: "addons",
    price: 150,
    subtitle: "Sparkling Swarovski crystal or glitter tips",
    description: "Dainty micro-crystals catch the light beautifully when you blink.",
  },
];

export const WAXING_FACIAL: ServiceItem[] = [
  {
    id: "wax-brow",
    name: "Brow Sculpt & Wax",
    category: "wax-facial",
    price: 500,
    subtitle: "Arch mapping, warm botanical wax, precision tweezing & soothing aloe calm",
    description: "Custom geometric brow mapping tailored to your brow bone, finished with cooling aloe vera.",
    duration: "20 mins",
  },
  {
    id: "wax-lip-chin",
    name: "Upper Lip or Chin Wax",
    category: "wax-facial",
    price: 400,
    subtitle: "Ultra-delicate rose cream wax removing finest peach fuzz seamlessly",
    description: "Hypoallergenic stripless wax designed for reactive facial skin. Smooth finish with zero stubble.",
    duration: "15 mins",
  },
  {
    id: "wax-full-face",
    name: "Full Face Silk Complex",
    category: "wax-facial",
    price: 1200,
    subtitle: "Includes brows, upper lip, chin, sideburns & forehead + chilled tea tree tonic",
    description: "Comprehensive facial hair removal leaves skin silky and creates a flawless makeup canvas.",
    duration: "35 mins",
    badge: "Glow Favorite",
  },
];

export const WAXING_BODY: ServiceItem[] = [
  {
    id: "wax-underarm",
    name: "Underarm Gentle Care",
    category: "wax-body",
    price: 800,
    subtitle: "Fast, root-pulling stripless wax prevents shadowing and minimizes ingrowns",
    description: "Quick 10-minute stripless wax with tea tree essence prevents folliculitis and smooths skin.",
    duration: "15 mins",
    badge: "Essential",
  },
  {
    id: "wax-arms",
    name: "Half Arms / Full Arms",
    category: "wax-body",
    price: 1000,
    secondaryPrice: 1800,
    secondaryLabel: "Full Arms: KSh 1,800",
    subtitle: "Elbow to wrist or total shoulder-to-fingertip smooth hydration glaze",
    description: "Silky fruit wax enriched with titanium dioxide leaves arms effortlessly smooth.",
    duration: "25-40 mins",
  },
  {
    id: "wax-legs",
    name: "Half Legs / Full Legs",
    category: "wax-body",
    price: 1500,
    secondaryPrice: 2500,
    secondaryLabel: "Full Legs: KSh 2,500",
    subtitle: "Silky knee-down or full leg treatment finished with cooling botanical emulsion",
    description: "Gentle large-area waxing with calming post-wax hydration balm.",
    duration: "30-50 mins",
  },
];

export const WAXING_INTIMATE: ServiceItem[] = [
  {
    id: "wax-bikini",
    name: "Classic Bikini Line",
    category: "wax-intimate",
    price: 1500,
    badge: "Gentle",
    subtitle: "Tidy panty-line clean finish using hypoallergenic hard wax for pure comfort",
    description: "Ideal for beginners or quick maintenance. Uses stripless hard wax with strict single-dip spatulas.",
    duration: "20 mins",
  },
  {
    id: "wax-brazilian",
    name: "Signature Brazilian Wax",
    category: "wax-intimate",
    price: 2800,
    badge: "Top Pick",
    subtitle: "Complete front-to-back removal (strip option available). Lavender prep oil + ingrown serum",
    description: "Our signature intimate treatment. Fast, thorough, and surprisingly gentle with pre-wax lavender protective oil.",
    duration: "35 mins",
  },
];

export const WAXING_COMBOS: ServiceItem[] = [
  {
    id: "combo-trio",
    name: "Lash & Brow Trio",
    category: "wax-combos",
    price: 2100,
    badge: "Save KSh 400",
    subtitle: "Mid-Volume Classic Cluster Lashes + Brow Sculpt & Wax + Brow Tinting glaze. Complete eye transformation",
    description: "Total eye rejuvenation package. Walk out with elevated lashes and flawlessly defined brows.",
    duration: "Est. 45 mins",
  },
  {
    id: "combo-head-to-toe",
    name: "Glow Head-to-Toe Care",
    category: "wax-combos",
    price: 5400,
    badge: "VIP Signature",
    subtitle: "Brazilian Wax + Full Legs + Underarms + Post-wax chamomile jelly calm treatment. Total silky bliss",
    description: "The ultimate salon pampering package for total smooth confidence.",
    duration: "Est. 75 mins",
  },
];
