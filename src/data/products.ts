export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  status: "sample" | "verified";
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  image: string;
  imageAlt: string;
  summary: string;
  bestFor: string[];
  notFor: string[];
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  maintenance: string;
  sourceNote: string;
  affiliateUrl?: string;
  updatedAt: string;
};

export const products: Product[] = [
  {
    slug: "low-dust-clumping-clay-litter",
    name: "Low-Dust Clumping Clay Litter",
    brand: "Starter Record",
    category: "cat-litter",
    status: "sample",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cat resting near household pet supplies",
    summary: "A template record for comparing clay litter by dust, clumping, tracking, scent, and monthly replacement cost.",
    bestFor: ["Owners who want firm clumps", "Single-cat households", "Manual litter boxes"],
    notFor: ["Owners avoiding mineral litter", "Homes that require flushable litter", "Very sensitive dust environments"],
    pros: ["Usually easy to scoop", "Widely available", "Good baseline for odor-control comparisons"],
    cons: ["Can track outside the box", "Heavy bags", "Dust varies heavily by brand"],
    specs: {
      Type: "Clumping clay",
      Dust: "Low to medium",
      Tracking: "Medium",
      Scent: "Unscented preferred",
      "Auto-box fit": "Model dependent"
    },
    maintenance: "Scoop daily, top up weekly, and deep-clean the box on a regular schedule based on odor and household use.",
    sourceNote: "Replace this sample with verified package data, owner feedback, and hands-on testing before publishing as a recommendation.",
    updatedAt: "2026-06-06"
  },
  {
    slug: "high-sided-open-litter-box",
    name: "High-Sided Open Litter Box",
    brand: "Starter Record",
    category: "litter-boxes",
    status: "sample",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cat looking at the camera in a home",
    summary: "A high-sided open box format for cats that kick litter while still needing easy entry and simple cleaning.",
    bestFor: ["Cats that dig heavily", "Owners who want quick cleaning", "Apartments with limited box space"],
    notFor: ["Very senior cats needing a low entrance", "Cats that strongly prefer covered boxes"],
    pros: ["Open top is easy to monitor", "High sides reduce scatter", "No hood seams to trap odor"],
    cons: ["Still visible in the room", "Entry height must match the cat", "Odor control depends on litter and cleaning"],
    specs: {
      Entry: "Front low-entry",
      Footprint: "Medium",
      "Large cat fit": "Check inner length",
      Cleaning: "Easy",
      "Odor control": "Open-air"
    },
    maintenance: "Wash with mild soap during deep cleans and avoid harsh fragrances that may discourage box use.",
    sourceNote: "Use verified dimensions and inner usable length for each real product.",
    updatedAt: "2026-06-06"
  },
  {
    slug: "sensor-equipped-automatic-litter-box",
    name: "Sensor-Equipped Automatic Litter Box",
    brand: "Starter Record",
    category: "automatic-litter-boxes",
    status: "sample",
    priceRange: "$$$$",
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cat sitting indoors near a window",
    summary: "A template for high-ticket automatic litter boxes where safety sensors, cat size fit, and consumable costs matter.",
    bestFor: ["Multi-cat homes with confirmed weight fit", "Owners who need less daily scooping", "Homes willing to maintain moving parts"],
    notFor: ["Kittens below manufacturer weight limits", "Cats afraid of moving appliances", "Owners who want zero maintenance"],
    pros: ["Can reduce daily scooping", "Waste drawer makes odor control easier to track", "App alerts may help monitor usage"],
    cons: ["Expensive", "Requires careful cleaning", "Fit and sensor reliability must be verified"],
    specs: {
      "Weight range": "Verify per model",
      Sensors: "Weight and motion expected",
      App: "Model dependent",
      Consumables: "Bags or liners possible",
      Noise: "Low to medium"
    },
    maintenance: "Empty the drawer on schedule, inspect sensors, clean contact surfaces, and follow manufacturer safety instructions.",
    sourceNote: "Do not publish automatic-box recommendations without verified safety, fit, and recall checks.",
    updatedAt: "2026-06-06"
  },
  {
    slug: "stainless-steel-water-fountain",
    name: "Stainless Steel Water Fountain",
    brand: "Starter Record",
    category: "water-fountains",
    status: "sample",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cat in a bright home setting",
    summary: "A fountain template focused on material, pump noise, cleaning effort, and recurring filter cost.",
    bestFor: ["Owners prioritizing easy washing", "Multi-cat homes needing larger capacity", "Cats encouraged by moving water"],
    notFor: ["Owners unwilling to clean pumps", "Homes with no easy filter supply", "Cats that ignore fountains"],
    pros: ["Stainless basins are often easier to clean", "Capacity can reduce refill frequency", "Filter cost is easy to model"],
    cons: ["Pump maintenance is still required", "Noise depends on water level", "Filter subscriptions add recurring cost"],
    specs: {
      Capacity: "2-3 L target range",
      Material: "Stainless steel",
      Noise: "Low when full",
      "Filter cost": "Track monthly",
      Cleaning: "Weekly target"
    },
    maintenance: "Rinse daily when possible, wash the basin weekly, and clean the pump according to the manual.",
    sourceNote: "Validate exact capacity, replacement filter SKU, pump warranty, and dishwasher-safe parts.",
    updatedAt: "2026-06-06"
  },
  {
    slug: "portion-control-dry-food-feeder",
    name: "Portion-Control Dry Food Feeder",
    brand: "Starter Record",
    category: "automatic-feeders",
    status: "sample",
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cat near a feeding area",
    summary: "A dry-food feeder template that tracks portion increments, power backup, hopper size, and cleaning requirements.",
    bestFor: ["Dry food routines", "Owners managing predictable meal times", "Short trips with backup power"],
    notFor: ["Wet food feeding", "Cats who break into hoppers", "Medical diets needing veterinary supervision"],
    pros: ["Scheduled portions", "Can reduce early-morning feeding pressure", "Backup power is easy to compare"],
    cons: ["Kibble size may jam", "Not a substitute for checking appetite", "App reliability varies"],
    specs: {
      Capacity: "3-5 L target range",
      Portions: "Small increments preferred",
      Power: "Adapter plus battery backup",
      App: "Optional",
      "Food type": "Dry kibble"
    },
    maintenance: "Wash the bowl frequently and deep-clean the hopper on a routine schedule to avoid stale food buildup.",
    sourceNote: "Verify portion accuracy with measured tests before ranking.",
    updatedAt: "2026-06-06"
  },
  {
    slug: "soft-sided-vet-trip-carrier",
    name: "Soft-Sided Vet Trip Carrier",
    brand: "Starter Record",
    category: "cat-carriers",
    status: "sample",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cat sitting on a soft surface",
    summary: "A carrier template for comparing inner length, loading style, ventilation, cleaning, and travel notes.",
    bestFor: ["Routine vet trips", "Small to medium cats", "Owners needing shoulder-carry options"],
    notFor: ["Large cats above weight limits", "Cats that chew soft mesh", "Cargo-style travel needs"],
    pros: ["Lightweight", "Often easier to store", "Top loading can reduce handling stress"],
    cons: ["Soft sides may collapse", "Mesh durability varies", "Airline fit must be checked per carrier"],
    specs: {
      Length: "Verify inner length",
      "Load style": "Top and side preferred",
      Ventilation: "Mesh panels",
      "Airline notes": "Airline-specific",
      Cleaning: "Removable pad preferred"
    },
    maintenance: "Vacuum hair, wash removable pads, and inspect zippers and mesh before every trip.",
    sourceNote: "Do not claim airline approval without checking the current airline and product dimensions.",
    updatedAt: "2026-06-06"
  },
  {
    slug: "apartment-cat-tree",
    name: "Apartment Cat Tree",
    brand: "Starter Record",
    category: "cat-trees",
    status: "sample",
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cat relaxing in a home",
    summary: "A compact cat tree template for comparing footprint, height, platform size, stability, and scratching surfaces.",
    bestFor: ["Small apartments", "Cats that like vertical perches", "Owners needing combined scratching and resting space"],
    notFor: ["Very large cats without verified platform size", "Homes without wall-anchor options for tall models"],
    pros: ["Uses vertical space", "Can combine lounge and scratching areas", "Footprint is easy to compare"],
    cons: ["Stability varies", "Sisal wear is common", "Platforms may be too small for large cats"],
    specs: {
      Height: "Medium",
      Footprint: "Compact",
      Stability: "Wall anchor recommended for tall units",
      "Large cat fit": "Platform dimensions required",
      Materials: "Sisal and engineered wood common"
    },
    maintenance: "Vacuum fabric surfaces and inspect posts, screws, and anchors regularly.",
    sourceNote: "Measure platform size and base footprint from real product data.",
    updatedAt: "2026-06-06"
  },
  {
    slug: "corrugated-cardboard-scratcher",
    name: "Corrugated Cardboard Scratcher",
    brand: "Starter Record",
    category: "scratching-and-toys",
    status: "sample",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cat lying comfortably indoors",
    summary: "A scratcher template for tracking shape, refillability, cardboard density, mess level, and replacement cost.",
    bestFor: ["Budget scratching zones", "Cats that prefer horizontal scratching", "Testing scratcher preferences"],
    notFor: ["Owners avoiding cardboard debris", "Cats that only use vertical posts"],
    pros: ["Low cost", "Easy to replace", "Good preference test for new owners"],
    cons: ["Creates cardboard flakes", "Durability varies", "Usually less attractive as furniture"],
    specs: {
      Material: "Corrugated cardboard",
      Refill: "Model dependent",
      Durability: "Low to medium",
      "Play style": "Horizontal scratching",
      "Safety notes": "Remove loose pieces"
    },
    maintenance: "Shake out debris, rotate reversible pads, and replace when the surface collapses or sheds heavily.",
    sourceNote: "Use real measurements and replacement-pad availability for each listed product.",
    updatedAt: "2026-06-06"
  }
];

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
