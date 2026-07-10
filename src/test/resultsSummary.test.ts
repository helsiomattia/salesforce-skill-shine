import { describe, expect, it } from "vitest";

import { calculateResultsSummary } from "@/lib/resultsSummary";
import type { CompetencyCategory } from "@/data/competencies";

const categories: CompetencyCategory[] = [
  {
    id: "sample",
    title: { pt: "Sample", en: "Sample", es: "Sample" },
    icon: "S",
    description: { pt: "Sample", en: "Sample", es: "Sample" },
    color: "primary",
    skills: [
      {
        id: "flow",
        name: { pt: "Flow", en: "Flow", es: "Flow" },
        description: { pt: "Flow", en: "Flow", es: "Flow" },
        type: "hard",
      },
      {
        id: "security",
        name: { pt: "Security", en: "Security", es: "Security" },
        description: { pt: "Security", en: "Security", es: "Security" },
        type: "hard",
      },
      {
        id: "communication",
        name: { pt: "Communication", en: "Communication", es: "Communication" },
        description: { pt: "Communication", en: "Communication", es: "Communication" },
        type: "soft",
      },
      {
        id: "documentation",
        name: { pt: "Documentation", en: "Documentation", es: "Documentation" },
        description: { pt: "Documentation", en: "Documentation", es: "Documentation" },
        type: "soft",
      },
    ],
  },
];

describe("calculateResultsSummary", () => {
  it("calculates average, strengths, gaps, evolving and not rated skills", () => {
    const summary = calculateResultsSummary(
      {
        flow: 5,
        security: 2,
        communication: 3,
      },
      categories,
    );

    expect(summary.totalSkills).toBe(4);
    expect(summary.ratedSkills).toBe(3);
    expect(summary.overallAvg).toBeCloseTo(10 / 3);
    expect(summary.strengths.map((skill) => skill.id)).toEqual(["flow"]);
    expect(summary.gaps.map((skill) => skill.id)).toEqual(["security"]);
    expect(summary.evolving.map((skill) => skill.id)).toEqual(["communication"]);
    expect(summary.notRated.map((skill) => skill.id)).toEqual(["documentation"]);
  });

  it("filters by hard and soft skill types", () => {
    const ratings = {
      flow: 5,
      security: 1,
      communication: 4,
      documentation: 0,
    };

    const hardSummary = calculateResultsSummary(ratings, categories, "hard");
    const softSummary = calculateResultsSummary(ratings, categories, "soft");

    expect(hardSummary.totalSkills).toBe(2);
    expect(hardSummary.ratedSkills).toBe(2);
    expect(hardSummary.overallAvg).toBe(3);
    expect(softSummary.totalSkills).toBe(2);
    expect(softSummary.ratedSkills).toBe(1);
    expect(softSummary.overallAvg).toBe(4);
  });
});
