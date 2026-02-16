import { defineCollection, z } from "astro:content";

const personalCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    location: z.string().optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    github: z.string().optional(),
    linkedin: z.string().url().optional(),
    twitter: z.string().optional(),
    scholar: z.string().url().optional(),
    avatar: z.string().optional(),
    university: z.string().optional(),
    cv: z.string().optional(),
    huggingface: z.string().url().optional(),
    medium: z.string().url().optional(),
    interests: z.array(z.string()).optional(),
  }),
});

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string(),
    technologies: z.array(z.string()).optional(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    github: z.string().url().optional(),
    image: z.string().optional(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const skillsCollection = defineCollection({
  type: "content",
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    url: z.string().url().optional(),
  }),
});

export const collections = {
  personal: personalCollection,
  experiences: experienceCollection,
  projects: projectsCollection,
  skills: skillsCollection,
  posts: postsCollection,
};
