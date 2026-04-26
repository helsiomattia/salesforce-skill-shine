export type LocString = {
  pt: string;
  en: string;
  es: string;
};

export type LocStringArray = {
  pt: string[];
  en: string[];
  es: string[];
};

export interface Skill {
  id: string;
  name: LocString;
  description: LocString;
  type?: "hard" | "soft";
  requirements?: Record<number, LocString>;
}

export interface StrategyPillar {
  title: LocString;
  description: LocString;
  icon: string;
  roleImpact: LocString;
}

export interface StrategyMaturity {
  level: LocString;
  mindset: LocString;
  focus: LocStringArray;
}

export interface StrategyContent {
  mission: LocString;
  roleConnection: LocString;
  pillars: StrategyPillar[];
}

export interface CompetencyCategory {
  id: string;
  title: LocString;
  icon: string;
  description: LocString;
  color: "primary" | "secondary" | "accent";
  skills: Skill[];
  knowledgeGroups?: KnowledgeGroup[];
  strategy?: StrategyContent;
  evolution?: EvolutionContent;
}

export interface KnowledgeGroup {
  title: LocString;
  items: LocStringArray;
}

export interface EvolutionStage {
  title: LocString;
  description: LocString;
}

export interface EvolutionContent {
  intro: LocString;
  stages: EvolutionStage[];
  maturityLevels?: StrategyMaturity[];
}
