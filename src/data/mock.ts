export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Sky Previews", href: "#gallery" },
  { label: "Live Map", href: "#globe" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const heroWidget = {
  location: "Tromsø, Norway",
  temperature: -12,
  kpIndex: 6.4,
  kpMax: 9,
  condition: "Clear skies",
  visibility: "High",
  nextWindow: "22:40 — 01:15",
};

export const features = [
  {
    id: "alerts",
    title: "Real-Time Alerts",
    description:
      "Get notified the moment geomagnetic activity crosses your threshold — before the sky lights up.",
    icon: "bell",
    color: "#4ADE80",
  },
  {
    id: "locations",
    title: "Discover Locations",
    description:
      "Dark-sky spots ranked by cloud cover, light pollution, and current Kp index, near you or anywhere.",
    icon: "compass",
    color: "#EC4899",
  },
  {
    id: "capture",
    title: "Capture & Share",
    description:
      "Camera presets tuned for aurora photography, plus a shared gallery of tonight's best sightings.",
    icon: "aperture",
    color: "#A855F7",
  },
  {
    id: "community",
    title: "Community",
    description:
      "25,000+ chasers trading forecasts, photos, and directions to the clearest horizon in real time.",
    icon: "users",
    color: "#A855F7",
  },
] as const;

export const auroraGallery = [
  {
    id: "fjord",
    title: "Fjord Reflection",
    description: "Kp 6+ activity mirrored across still water — the shot every chaser wants.",
    video: "/videos/aurora-arctic-lake.mp4",
    poster: "/images/aurora-arctic-lake-poster.jpg",
  },
  {
    id: "ridge",
    title: "Ridge Line Curtains",
    description: "High-latitude peaks catch the first color as the oval expands south.",
    video: "/videos/aurora-snowy-mountains.mp4",
    poster: "/images/aurora-snowy-mountains-poster.jpg",
  },
  {
    id: "deepsky",
    title: "Deep Sky Extreme",
    description: "Rare G4+ storm conditions — when the aurora reaches deep into the night sky.",
    video: "/videos/aurora-alien-planet.mp4",
    poster: "/images/aurora-alien-planet-poster.jpg",
  },
] as const;

export const globeStats = [
  { id: "locations", label: "Active locations", value: 312, suffix: "" },
  { id: "kp", label: "Current Kp index", value: 6.4, suffix: "" },
];

export const globeCaptions = [
  {
    title: "Every point, a live reading",
    body: "Each glowing marker is a station reporting real-time geomagnetic and sky data — updated every sixty seconds.",
  },
  {
    title: "Drag to orbit the storm",
    body: "Follow the auroral oval as it swells and contracts across the polar circle, hour by hour.",
  },
  {
    title: "Find your window",
    body: "Hover any location to see its current Kp index, cloud cover, and the next best viewing hour.",
  },
];

export const globePoints = [
  { id: "tromso", name: "Tromsø, Norway", lat: 69.6, lon: 18.9, kp: 6.4 },
  { id: "fairbanks", name: "Fairbanks, USA", lat: 64.8, lon: -147.7, kp: 5.8 },
  { id: "reykjavik", name: "Reykjavík, Iceland", lat: 64.1, lon: -21.9, kp: 5.2 },
  { id: "yellowknife", name: "Yellowknife, Canada", lat: 62.5, lon: -114.4, kp: 6.9 },
  { id: "rovaniemi", name: "Rovaniemi, Finland", lat: 66.5, lon: 25.7, kp: 6.1 },
  { id: "abisko", name: "Abisko, Sweden", lat: 68.3, lon: 18.8, kp: 5.6 },
  { id: "murmansk", name: "Murmansk, Russia", lat: 68.9, lon: 33.0, kp: 4.9 },
  { id: "queenstown", name: "Queenstown, NZ", lat: -45.0, lon: 168.6, kp: 3.8 },
];

export const testimonials = [
  {
    quote:
      "We drove four hours on a Tuesday because Nordr's alert said tonight was the night. Twenty minutes after we parked, the sky turned green. I've never trusted a forecast like this.",
    name: "Elin Fossum",
    role: "Aurora photographer, Tromsø",
  },
  {
    quote:
      "The trip planner alone is worth it — saved locations, custom thresholds, directions the second an alert fires. It turned a hobby into a habit.",
    name: "James Carter",
    role: "Travel photographer, Fairbanks",
  },
  {
    quote:
      "I've tried every aurora app out there. Nordr's Kp forecast is the first one that actually matches what I see through the lens.",
    name: "Mika Laine",
    role: "Tour guide, Rovaniemi",
  },
];

export const communityAvatars = ["Elin Fossum", "James Carter", "Mika Laine", "Sofia Reyes", "Tom Berg"];

export const statBar = [
  { id: "users", label: "Active Explorers", value: 25000, suffix: "+", icon: "users", color: "#4ADE80" },
  { id: "locations", label: "Locations", value: 120, suffix: "+", icon: "pin", color: "#38BDF8" },
  { id: "rating", label: "App Rating", value: 4.9, suffix: "", icon: "star", color: "#EC4899" },
  { id: "satisfaction", label: "Happy Users", value: 98, suffix: "%", icon: "heart", color: "#A855F7" },
] as const;

export const pricingPlans = [
  {
    id: "explorer",
    name: "Explorer",
    price: 0,
    period: "forever",
    description: "For casual sky-watchers just getting started.",
    features: ["3 saved locations", "Daily Kp summary", "Community gallery access"],
    highlighted: false,
    cta: "Start Free",
  },
  {
    id: "chaser",
    name: "Chaser",
    price: 9,
    period: "month",
    description: "For chasers who plan every trip around the forecast.",
    features: [
      "Unlimited saved locations",
      "Real-time push alerts",
      "7-day Kp & cloud forecast",
      "Trip planner & directions",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start Chasing",
  },
  {
    id: "expedition",
    name: "Expedition",
    price: 29,
    period: "month",
    description: "For guides and tour operators running groups.",
    features: [
      "Everything in Chaser",
      "Team accounts (up to 10)",
      "Group alert broadcasts",
      "API access",
      "Dedicated onboarding",
    ],
    highlighted: false,
    cta: "Talk to Us",
  },
] as const;

export const faqItems = [
  {
    question: "How accurate is the aurora forecast?",
    answer:
      "Nordr blends NOAA geomagnetic data with local cloud-cover and light-pollution models, refreshed every 60 seconds. Our Kp readings typically track within 0.3 of official real-time values.",
  },
  {
    question: "Do I need a subscription to get alerts?",
    answer:
      "No — the free Explorer plan includes a daily Kp summary. Real-time push alerts the moment activity crosses your personal threshold are part of the Chaser plan.",
  },
  {
    question: "Can I use Nordr anywhere in the world?",
    answer:
      "Yes. While the auroral oval is strongest near the poles, Nordr tracks geomagnetic activity globally, including southern-hemisphere aurora australis locations like Queenstown.",
  },
  {
    question: "How does the trip planner work?",
    answer:
      "Save any location, set a Kp and cloud-cover threshold, and Nordr will alert you the moment conditions match — with directions to the spot already queued up.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, paid plans are month-to-month with no lock-in. Cancel from your account settings and you'll keep access until the end of the billing period.",
  },
] as const;

export const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Live Map", href: "#globe" },
    { label: "Pricing", href: "#pricing" },
    { label: "Download", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Journal", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};
