import { defineCollection, z } from "astro:content";

const writings = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const bookClub = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    authorWiki: z.string().optional(),
    overview: z.string().optional(),
    pubDate: z.coerce.date(),
    bookSlug: z.string().optional(),
  }),
});

export const collections = { writings, "book-club": bookClub };
