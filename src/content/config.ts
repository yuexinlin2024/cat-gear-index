import { defineCollection, z } from "astro:content";

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    readingTime: z.string(),
    updatedAt: z.string(),
    draft: z.boolean().default(false),
    points: z.array(z.string())
  })
});

export const collections = { guides };
