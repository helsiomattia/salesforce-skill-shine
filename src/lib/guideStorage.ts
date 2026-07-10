import { z } from "zod";
import type { GuideItem } from "@/data/guideData";

const guideCategorySchema = z.enum(["clouds", "foundations", "admin", "dev", "architect", "tools"]);

const locStringSchema = z.object({
  pt: z.string(),
  en: z.string(),
  es: z.string(),
});

const locStringArraySchema = z.object({
  pt: z.array(z.string()),
  en: z.array(z.string()),
  es: z.array(z.string()),
});

const keyConceptSchema = z.object({
  title: locStringSchema,
  description: locStringSchema,
  codeSnippet: z.string().optional(),
  codeLanguage: z.string().optional(),
});

const resourceLinkSchema = z.object({
  title: locStringSchema,
  url: z.string(),
  type: z.enum(["trailhead", "doc", "video", "article"]),
});

const guideItemSchema: z.ZodType<GuideItem> = z.object({
  id: z.string(),
  category: guideCategorySchema,
  title: locStringSchema,
  subtitle: locStringSchema,
  description: locStringSchema,
  iconName: z.string(),
  tags: locStringArraySchema,
  keyConcepts: z.array(keyConceptSchema),
  implementationGuide: z.array(keyConceptSchema).optional(),
  bestPractices: locStringArraySchema,
  realUseCases: locStringArraySchema.optional(),
  resources: z.array(resourceLinkSchema),
});

const customGuidesSchema = z.array(guideItemSchema);
const guideNoteSchema = z.string();

export type GuideCategory = z.infer<typeof guideCategorySchema>;

const CUSTOM_GUIDES_KEY = "sfs_custom_guides";
const LAST_TAB_KEY = "sfs_guide_last_tab";
const noteKey = (id: string) => `sfs_guide_notes_${id}`;

const warnInvalidStorage = (key: string, error: unknown) => {
  console.warn(`Ignoring invalid localStorage value for ${key}`, error);
};

export const getGuideLastTab = (): GuideCategory => {
  const saved = localStorage.getItem(LAST_TAB_KEY);
  const parsed = guideCategorySchema.safeParse(saved);

  if (parsed.success) return parsed.data;
  if (saved !== null) warnInvalidStorage(LAST_TAB_KEY, parsed.error);
  return "clouds";
};

export const setGuideLastTab = (tab: GuideCategory) => {
  localStorage.setItem(LAST_TAB_KEY, tab);
};

export const getCustomGuides = (): GuideItem[] => {
  const raw = localStorage.getItem(CUSTOM_GUIDES_KEY);
  if (!raw) return [];

  try {
    const parsedJson = JSON.parse(raw);
    const parsedGuides = customGuidesSchema.safeParse(parsedJson);

    if (parsedGuides.success) return parsedGuides.data;
    warnInvalidStorage(CUSTOM_GUIDES_KEY, parsedGuides.error);
  } catch (error) {
    warnInvalidStorage(CUSTOM_GUIDES_KEY, error);
  }

  return [];
};

export const setCustomGuides = (guides: GuideItem[]) => {
  localStorage.setItem(CUSTOM_GUIDES_KEY, JSON.stringify(guides));
};

export const getGuideNote = (id: string): string => {
  const key = noteKey(id);
  const raw = localStorage.getItem(key);
  if (raw === null) return "";

  const parsed = guideNoteSchema.safeParse(raw);
  if (parsed.success) return parsed.data;

  warnInvalidStorage(key, parsed.error);
  return "";
};

export const setGuideNote = (id: string, content: string) => {
  localStorage.setItem(noteKey(id), content);
};

export const removeGuideNote = (id: string) => {
  localStorage.removeItem(noteKey(id));
};

export const hasGuideNote = (id: string): boolean => getGuideNote(id).trim().length > 0;
