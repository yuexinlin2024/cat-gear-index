# Cat Gear Index

An Astro static-site MVP for a cat supplies database and affiliate/content business.

## What is included

- Category database pages
- Product detail pages with sample records
- Comparison page
- Cat litter cost calculator
- Guide templates
- About, editorial policy, affiliate disclosure, privacy, and contact pages
- Sitemap integration and robots.txt

## Important launch note

The product records in `src/data/products.ts` are sample records, not verified reviews. Before public monetization, replace them with real product data, source notes, approved images, and compliant affiliate links.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Add a new guide

Guide articles live in `src/content/guides/` as Markdown files. To add a new guide, create a file such as:

```text
src/content/guides/best-cat-litter-for-low-tracking.md
```

Use this frontmatter format:

```md
---
title: "Best Cat Litter for Low Tracking"
description: "How to choose cat litter that tracks less through apartments and multi-cat homes."
category: "Buying Guides"
readingTime: "8 min"
updatedAt: "2026-06-06"
draft: false
points:
  - "Larger granules usually track less than fine litter."
  - "Mat placement matters as much as litter type."
  - "Long-haired cats may need a different setup."
---

## Start with the real problem

Write the article body here.
```

The file name becomes the URL slug. The example above becomes:

```text
/guides/best-cat-litter-for-low-tracking/
```

Set `draft: true` to keep an article out of the built site.

## Revenue setup checklist

1. Buy a domain and update `site` in `astro.config.mjs` and `src/utils/seo.ts`.
2. Replace placeholder contact and privacy text with real business details.
3. Add verified products and original notes.
4. Apply to affiliate programs such as Amazon Associates, Chewy, Walmart, or Petco where available.
5. Add clear affiliate disclosures near monetized links.
6. Connect Google Search Console and submit the sitemap.
7. Apply for AdSense after the site has real content, navigation, policy pages, and natural search visibility.
