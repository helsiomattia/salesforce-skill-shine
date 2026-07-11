import { cloudsGuides } from "./clouds";
import { foundationsGuides } from "./foundations";
import { adminGuides } from "./admin";
import { developerGuides } from "./developer";
import { architectGuides } from "./architect";
import { toolsGuides } from "./tools";
import { enrichGuide } from "./enrichment";
import type { GuideItem } from "./types";

export type { GuideItem, KeyConcept, ResourceLink } from "./types";

const baseGuides: GuideItem[] = [
  cloudsGuides,
  foundationsGuides,
  adminGuides,
  developerGuides,
  architectGuides,
  toolsGuides
].flat();

export const defaultGuides: GuideItem[] = baseGuides.map(enrichGuide);
