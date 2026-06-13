export type Topic = {
  slug: string;
  name: string;
  description: string;
  intro: string;
  categories: string[];
  startHere: string[];
};

export const topics: Topic[] = [
  {
    slug: "brushing-and-shedding",
    name: "Brushing And Shedding",
    description: "Brushing routines, tool picks, loose-fur cleanup, and simple at-home shedding control.",
    intro:
      "This topic groups together the most practical content for owners dealing with loose fur, basic coat maintenance, and everyday brushing routines at home.",
    categories: ["Brushing And Shedding", "Product Picks", "Home Cleaning"],
    startHere: [
      "how-often-should-you-brush-a-cat",
      "best-cat-brushes-for-short-hair",
      "how-to-reduce-cat-hair-on-sofa-and-bedding",
      "how-to-brush-a-cat-that-hates-brushing"
    ]
  },
  {
    slug: "bathing-and-drying",
    name: "Bathing And Drying",
    description: "Home bathing setup, drying routines, and low-stress cleanup steps that stay outside medical care.",
    intro:
      "Use this topic when the main question is how to wash, dry, and reset the room without turning grooming into a stressful event for the cat or the owner.",
    categories: ["Bathing And Drying", "Routine Checklists", "Product Picks"],
    startHere: [
      "how-to-bathe-a-cat-at-home",
      "how-to-dry-a-cat-after-a-bath",
      "best-towels-for-cat-bath-time"
    ]
  },
  {
    slug: "odor-control-and-litter-area-care",
    name: "Odor Control And Litter Area Care",
    description: "Litter cleanup, recurring cost, smell control, and easier routines for keeping the litter zone manageable.",
    intro:
      "This topic focuses on the daily systems behind a cleaner litter area: scooping rhythm, full resets, odor handling, and practical home upkeep.",
    categories: ["Odor Control", "Litter Area Care", "Home Cleaning"],
    startHere: [
      "how-to-clean-a-litter-area-without-strong-odor",
      "cat-litter-monthly-cost",
      "how-often-should-you-clean-a-cat-water-fountain",
      "best-litter-mats-for-small-apartments",
      "how-often-should-you-replace-cat-litter-completely",
      "how-to-reduce-litter-tracking-in-a-small-apartment",
      "how-to-keep-a-small-apartment-from-smelling-like-cat-litter"
    ]
  },
  {
    slug: "small-apartment-care",
    name: "Small Apartment Care",
    description: "Compact-home grooming, cleanup, litter management, and product choices for tighter spaces.",
    intro:
      "Small homes make every routine more visible. This topic helps owners reduce clutter, shorten cleanup, and build care systems that actually fit apartment life.",
    categories: ["Routine Checklists", "Beginner Care", "Home Cleaning", "Odor Control"],
    startHere: [
      "small-apartment-cat-setup",
      "cat-grooming-routine-for-small-apartments",
      "new-cat-owner-supplies-checklist",
      "how-to-store-cat-grooming-tools-in-a-small-home",
      "how-often-should-you-wash-cat-blankets-and-bedding",
      "small-apartment-cleaning-routine-for-cat-owners"
    ]
  }
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
