import {
  Droplets,
  PackageCheck,
  PawPrint,
  ShoppingBag,
  Sparkles,
  Trees,
  Utensils,
  Waves
} from "lucide-astro";

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  buyerIntent: string;
  icon: typeof Droplets;
  filters: string[];
};

export const categories: Category[] = [
  {
    slug: "cat-litter",
    name: "Cat Litter",
    shortName: "Litter",
    description: "Compare litter types by dust, tracking, odor control, clumping, disposal notes, and estimated monthly cost.",
    buyerIntent: "Best for recurring purchases and low-friction affiliate testing.",
    icon: Sparkles,
    filters: ["Type", "Dust", "Tracking", "Scent", "Auto-box fit"]
  },
  {
    slug: "litter-boxes",
    name: "Litter Boxes",
    shortName: "Boxes",
    description: "Open, covered, top-entry, high-sided, and furniture-style boxes with size guidance for kittens, large cats, and small apartments.",
    buyerIntent: "Strong long-tail demand around size, odor, privacy, and tracking.",
    icon: PackageCheck,
    filters: ["Entry", "Footprint", "Large cat fit", "Cleaning", "Odor control"]
  },
  {
    slug: "automatic-litter-boxes",
    name: "Automatic Litter Boxes",
    shortName: "Auto Boxes",
    description: "Track dimensions, cat weight ranges, safety sensors, required consumables, app support, and cleaning workload.",
    buyerIntent: "High-ticket category that needs careful, evidence-based comparisons.",
    icon: PawPrint,
    filters: ["Weight range", "Sensors", "App", "Consumables", "Noise"]
  },
  {
    slug: "water-fountains",
    name: "Water Fountains",
    shortName: "Fountains",
    description: "Compare capacity, material, filter cost, pump noise, cleaning steps, and multi-cat suitability.",
    buyerIntent: "Great for maintenance guides and recurring filter-cost tools.",
    icon: Droplets,
    filters: ["Capacity", "Material", "Noise", "Filter cost", "Cleaning"]
  },
  {
    slug: "automatic-feeders",
    name: "Automatic Feeders",
    shortName: "Feeders",
    description: "Review hopper size, portion control, power backup, app reliability, cleaning, and wet/dry food compatibility.",
    buyerIntent: "Strong decision category for busy owners and travel planning.",
    icon: Utensils,
    filters: ["Capacity", "Portions", "Power", "App", "Food type"]
  },
  {
    slug: "cat-carriers",
    name: "Cat Carriers",
    shortName: "Carriers",
    description: "Size, ventilation, airline notes, cleaning, loading style, and comfort details for vet trips and travel.",
    buyerIntent: "Useful for size calculators and safety-first buying guides.",
    icon: ShoppingBag,
    filters: ["Length", "Load style", "Ventilation", "Airline notes", "Cleaning"]
  },
  {
    slug: "cat-trees",
    name: "Cat Trees",
    shortName: "Trees",
    description: "Map height, footprint, weight limit, scratching surfaces, stability, and fit for large cats or apartments.",
    buyerIntent: "Visual, high-intent comparison category with high shipping and size concerns.",
    icon: Trees,
    filters: ["Height", "Footprint", "Stability", "Large cat fit", "Materials"]
  },
  {
    slug: "scratching-and-toys",
    name: "Scratching & Toys",
    shortName: "Toys",
    description: "Track scratcher shapes, refill costs, toy safety notes, engagement type, and durability signals.",
    buyerIntent: "Good low-cost category for repeat visits and email list building.",
    icon: Waves,
    filters: ["Material", "Refill", "Durability", "Play style", "Safety notes"]
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
