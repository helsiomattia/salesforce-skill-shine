import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { CompetencyCategory, competencyCategories, skillLevels } from "@/data/competencies";
import { CheckCircle, AlertTriangle, XCircle, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { getLocalizedString } from "@/utils/i18nHelper";

interface ResultsPanelProps {
  ratings: Record<string, number>;
  categories?: CompetencyCategory[];
  type?: "all" | "hard" | "soft";
  title?: string;
}

const getSkillStatus = (rating: number, t: any) => {
  if (rating === 0) return { label: t('results.status.notRated'), icon: XCircle, color: "text-muted-foreground", bg: "bg-muted/50" };
  if (rating <= 2) return { label: t('results.status.developing'), icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10" };
  if (rating <= 3) return { label: t('results.status.evolving'), icon: TrendingUp, color: "text-warning", bg: "bg-warning/10" };
  if (rating <= 4) return { label: t('results.status.competent'), icon: CheckCircle, color: "text-secondary", bg: "bg-secondary/10" };
  return { label: t('results.status.master'), icon: Star, color: "text-success", bg: "bg-success/10" };
};

const getRecommendation = (rating: number, skillName: string, t: any) => {
  if (rating === 0) return t('results.recommendations.none', { skill: skillName });
  if (rating === 1) return t('results.recommendations.level1', { skill: skillName });
  if (rating === 2) return t('results.recommendations.level2', { skill: skillName });
  if (rating === 3) return t('results.recommendations.level3', { skill: skillName });
  if (rating === 4) return t('results.recommendations.level4', { skill: skillName });
  return t('results.recommendations.level5', { skill: skillName });
};

const ResultsPanel = ({ ratings, categories, type = "all", title }: ResultsPanelProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';
  const cats = categories || competencyCategories;

  const allSkillsRaw = cats.flatMap((c) => c.skills);
  const filteredSkills = type === "all" 
    ? allSkillsRaw 
    : allSkillsRaw.filter(s => type === "hard" ? s.type !== "soft" : s.type === "soft");

  const chartData = filteredSkills.map((s) => {
    const name = getLocalizedString(s.name, lang);
    return {
      category: name.length > 20 ? name.slice(0, 18) + "…" : name,
      score: ratings[s.id] || 0,
      fullMark: 5,
    };
  });

  const totalSkills = filteredSkills.length;
  const ratedSkills = filteredSkills.filter((s) => (ratings[s.id] || 0) > 0).length;
  const overallAvg =
    ratedSkills > 0
      ? filteredSkills.reduce((sum, s) => sum + (ratings[s.id] || 0), 0) / ratedSkills
      : 0;

  const strengths = filteredSkills.filter((s) => (ratings[s.id] || 0) >= 4);
  const gaps = filteredSkills.filter((s) => {
    const r = ratings[s.id] || 0;
    return r > 0 && r <= 2;
  });
  const evolving = filteredSkills.filter((s) => (ratings[s.id] || 0) === 3);
  const notRated = filteredSkills.filter((s) => (ratings[s.id] || 0) === 0);

  if (totalSkills === 0) return null;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-card shadow-card border border-border/50 p-4 md:p-5"
      >
        <h3 className="text-xl sm:text-2xl font-bold font-display text-card-foreground mb-6">
          {title || t('results.title')}
        </h3>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center p-3 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold font-display text-primary">{overallAvg.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground mt-1">{t('results.avg')}</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold font-display text-secondary">{ratedSkills}</div>
            <div className="text-xs text-muted-foreground mt-1">{t('results.rated')}</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold font-display text-accent">{totalSkills - ratedSkills}</div>
            <div className="text-xs text-muted-foreground mt-1">{t('results.pending')}</div>
          </div>
        </div>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fontSize: 10 }} />
              <Radar
                name="Score"
                dataKey="score"
                stroke="hsl(var(--secondary))"
                fill="hsl(var(--secondary))"
                fillOpacity={0.25}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Guidance Section */}
      {ratedSkills > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card shadow-card border border-border/50 p-4 md:p-5"
        >
          <h3 className="text-2xl font-bold font-display text-card-foreground mb-6">
            {t('results.guidance')}
          </h3>

          {/* Strengths */}
          {strengths.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-success" />
                <h4 className="text-lg font-semibold font-display text-card-foreground">
                  {t('results.strengths')} ({strengths.length})
                </h4>
              </div>
              <div className="space-y-2">
                {strengths.map((skill) => {
                  const status = getSkillStatus(ratings[skill.id], t);
                  const Icon = status.icon;
                  return (
                    <div key={skill.id} className={cn("p-3 rounded-lg border border-border/30", status.bg)}>
                      <div className="flex items-start gap-3">
                        <Icon className={cn("w-4 h-4 mt-0.5 flex-shrink-0", status.color)} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-sm text-card-foreground">{getLocalizedString(skill.name, lang)}</span>
                            <span className="text-xs font-bold text-success">
                              {getLocalizedString(skillLevels[ratings[skill.id]]?.label, lang)}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {getRecommendation(ratings[skill.id], getLocalizedString(skill.name, lang), t)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Evolving */}
          {evolving.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-warning" />
                <h4 className="text-lg font-semibold font-display text-card-foreground">
                  {t('results.evolving')} ({evolving.length})
                </h4>
              </div>
              <div className="space-y-2">
                {evolving.map((skill) => {
                  const status = getSkillStatus(ratings[skill.id], t);
                  const Icon = status.icon;
                  return (
                    <div key={skill.id} className={cn("p-3 rounded-lg border border-border/30", status.bg)}>
                      <div className="flex items-start gap-3">
                        <Icon className={cn("w-4 h-4 mt-0.5 flex-shrink-0", status.color)} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-sm text-card-foreground">{getLocalizedString(skill.name, lang)}</span>
                            <span className="text-xs font-bold text-warning">{getLocalizedString(skillLevels[3]?.label, lang)}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {getRecommendation(3, getLocalizedString(skill.name, lang), t)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Gaps */}
          {gaps.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <h4 className="text-lg font-semibold font-display text-card-foreground">
                  {t('results.gaps')} ({gaps.length})
                </h4>
              </div>
              <div className="space-y-2">
                {gaps.map((skill) => {
                  const status = getSkillStatus(ratings[skill.id], t);
                  const Icon = status.icon;
                  return (
                    <div key={skill.id} className={cn("p-3 rounded-lg border border-border/30", status.bg)}>
                      <div className="flex items-start gap-3">
                        <Icon className={cn("w-4 h-4 mt-0.5 flex-shrink-0", status.color)} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-sm text-card-foreground">{getLocalizedString(skill.name, lang)}</span>
                            <span className="text-xs font-bold text-destructive">
                              {getLocalizedString(skillLevels[ratings[skill.id]]?.label, lang)}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {getRecommendation(ratings[skill.id], getLocalizedString(skill.name, lang), t)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Not rated */}
          {notRated.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-muted-foreground" />
                <h4 className="text-lg font-semibold font-display text-card-foreground">
                  {t('results.notRated')} ({notRated.length})
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {notRated.map((skill) => (
                  <span
                    key={skill.id}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium"
                  >
                    {getLocalizedString(skill.name, lang)}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ResultsPanel;

