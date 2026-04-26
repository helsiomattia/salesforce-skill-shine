import { adminCompetency } from "./admin";
import { developerCompetency } from "./developer";
import { consultantCompetency } from "./consultant";
import { architectCompetency } from "./architect";

export * from "./types";
export * from "./levels";

export const competencyCategories = [
  adminCompetency,
  developerCompetency,
  consultantCompetency,
  architectCompetency,
];
