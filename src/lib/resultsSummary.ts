import { competencyCategories, type CompetencyCategory } from "@/data/competencies";
import type { Skill } from "@/data/competencies/types";

export type ResultsSummary = {
  totalSkills: number;
  ratedSkills: number;
  overallAvg: number;
  strengths: Skill[];
  gaps: Skill[];
  evolving: Skill[];
  notRated: Skill[];
};

export const calculateResultsSummary = (
  ratings: Record<string, number>,
  categories: CompetencyCategory[] = competencyCategories,
  type: "all" | "hard" | "soft" = "all",
): ResultsSummary => {
  const allSkillsRaw = categories.flatMap((category) => category.skills);
  const filteredSkills = type === "all"
    ? allSkillsRaw
    : allSkillsRaw.filter((skill) => type === "hard" ? skill.type !== "soft" : skill.type === "soft");

  const totalSkills = filteredSkills.length;
  const ratedSkills = filteredSkills.filter((skill) => (ratings[skill.id] || 0) > 0).length;
  const overallAvg = ratedSkills > 0
    ? filteredSkills.reduce((sum, skill) => sum + (ratings[skill.id] || 0), 0) / ratedSkills
    : 0;

  return {
    totalSkills,
    ratedSkills,
    overallAvg,
    strengths: filteredSkills.filter((skill) => (ratings[skill.id] || 0) >= 4),
    gaps: filteredSkills.filter((skill) => {
      const rating = ratings[skill.id] || 0;
      return rating > 0 && rating <= 2;
    }),
    evolving: filteredSkills.filter((skill) => (ratings[skill.id] || 0) === 3),
    notRated: filteredSkills.filter((skill) => (ratings[skill.id] || 0) === 0),
  };
};
