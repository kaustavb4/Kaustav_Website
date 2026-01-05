import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: rssSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    demoUrl: z.string().optional(),
    image: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { blog, projects };
