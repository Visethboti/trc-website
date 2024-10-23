import { ABOUT_TYPES, type AboutType } from "./about.type";
import { ACTIVE_TYPES, type ActiveType } from "./active.type";
import { DIRECTIVE_TYPES, type DirectiveType } from "./content.type";
import { LEADERS_TYPES, type LeadersType } from "./leader.type";
import { MEDIA_TYPES, type MediaType } from "./media.type";
import { languages } from "@/i18n/ui";
import { defineCollection, z } from "astro:content";
import type { SchemaContext } from "astro:content";

const SupportedLanguage = Object.values(languages) as [string, ...string[]];

const DirectiveTypeEnum = z.enum(
  Object.values(DIRECTIVE_TYPES) as [DirectiveType, ...DirectiveType[]],
);

const MediaTypeEnum = z.enum(
  Object.values(MEDIA_TYPES) as [MediaType, ...MediaType[]],
);

const ActiveTypeEnum = z.enum(
  Object.values(ACTIVE_TYPES) as [ActiveType, ...ActiveType[]],
);

const AboutTypeEnum = z.enum(
  Object.values(ABOUT_TYPES) as [AboutType, ...AboutType[]],
);

const LeadersTypeEnum = z.enum(
  Object.values(LEADERS_TYPES) as [LeadersType, ...LeadersType[]],
);

const articleSchema = ({ image }: SchemaContext) =>
  z.object({
    author: z
      .string()
      .default("Telecommunication Regulator of Cambodia - T.R.C."),
    categories: z.array(z.string()).default(["News", "Article"]),
    date: z.string(),
    featured: z.boolean(),
    image: image(),
    title: z.string(),
    description: z.string().max(160, {
      message: "Description must be at most 160 characters long",
    }),
    lang: z.enum(SupportedLanguage),
  });

const articlesCollection = defineCollection({
  schema: articleSchema,
});

const mediaSchema = ({ image }: SchemaContext) =>
  z.object({
    author: z
      .string()
      .default("Telecommunication Regulator of Cambodia - T.R.C."),
    categories: z.array(z.string()).default(["News", "Article"]),
    date: z.string(),
    featured: z.boolean(),
    image: image(),
    title: z.string(),
    description: z.string().max(160, {
      message: "Description must be at most 160 characters long",
    }),
    lang: z.enum(SupportedLanguage),
    type: MediaTypeEnum,
  });

const mediaCollection = defineCollection({
  schema: mediaSchema,
});

const activeSchema = ({ image }: SchemaContext) =>
  z.object({
    author: z
      .string()
      .default("Telecommunication Regulator of Cambodia - T.R.C."),
    categories: z.array(z.string()).default(["News", "Article"]),
    date: z.string(),
    number: z.string(),
    phone: z.string(),
    address: z.string(),
    featured: z.boolean(),
    image: image(),
    title: z.string(),
    description: z.string().max(160, {
      message: "Description must be at most 160 characters long",
    }),
    lang: z.enum(SupportedLanguage),
    type: ActiveTypeEnum,
  });

const activesCollection = defineCollection({
  schema: activeSchema,
});

const directiveSchema = ({ image }: SchemaContext) =>
  z.object({
    date: z.string(),
    title: z.string(),
    featured: z.boolean(),
    image: image(),
    lang: z.enum(SupportedLanguage),
    file: z.string(),
    type: DirectiveTypeEnum,
  });

const directivesCollection = defineCollection({
  schema: directiveSchema,
});

const aboutsSchema = z.object({
  date: z.string(),
  title: z.string().nullable(),
  lang: z.enum(SupportedLanguage),
  type: AboutTypeEnum,
});

const aboutsCollection = defineCollection({
  schema: aboutsSchema,
});

const leaderSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    title: z.string(),
    image: image(),
    lang: z.enum(SupportedLanguage),
  });

const leaderCollection = defineCollection({
  schema: leaderSchema,
});

const boardMembersSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    title: z.string(),
    image: image(),
    organization: z.string(),
    role: z.string(),
    lang: z.enum(SupportedLanguage),
  });

const boardMembersCollection = defineCollection({
  schema: boardMembersSchema,
});

const secretariesSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    title: z.string(),
    image: image(),
    organization: z.string(),
    role: LeadersTypeEnum,
    lang: z.enum(SupportedLanguage),
  });

const secretariesCollection = defineCollection({
  schema: secretariesSchema,
});

export const collections = {
  "cybersecurity-tips": articlesCollection,
  "news-releases": mediaCollection,
  activities: mediaCollection,
  events: mediaCollection,
  articles: articlesCollection,
  directives: directivesCollection,
  abouts: aboutsCollection,
  actives: activesCollection,
  leaders: leaderCollection,
  "board-members": boardMembersCollection,
  secretaries: secretariesCollection,
};
