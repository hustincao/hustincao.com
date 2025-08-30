import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date().optional(),
    modifiedDate: z.date().optional(),
  }),
});

export const collections = { blog };
