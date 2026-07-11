import type { LocString, LocStringArray } from "../competencies/types";

export interface KeyConcept {
  title: LocString;
  description: LocString;
  codeSnippet?: string;
  codeLanguage?: string;
}

export interface ResourceLink {
  title: LocString;
  url: string;
  type: "trailhead" | "doc" | "video" | "article";
}

export interface GuideItem {
  id: string;
  category: "clouds" | "foundations" | "admin" | "dev" | "architect" | "tools";
  title: LocString;
  subtitle: LocString;
  description: LocString;
  iconName: string;
  tags: LocStringArray;
  keyConcepts: KeyConcept[];
  implementationGuide?: KeyConcept[];
  bestPractices: LocStringArray;
  realUseCases?: LocStringArray;
  resources: ResourceLink[];
}

