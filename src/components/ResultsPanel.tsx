import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { CompetencyCategory, competencyCategories, skillLevels } from "@/data/competencies";
import { CheckCircle, AlertTriangle, XCircle, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultsPanelProps {
  ratings: Record<string, number>;
  categories?: CompetencyCategory[];
}

const getSkillStatus = (rating: number) => {
  if (rating === 0) return { label: "Não avaliado", icon: XCircle, color: "text-muted-foreground", bg: "bg-muted/50" };
  if (rating <= 2) return { label: "Precisa desenvolver", icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10" };
  if (rating <= 3) return { label: "Em evolução", icon: TrendingUp, color: "text-warning", bg: "bg-warning/10" };
  if (rating <= 4) return { label: "Competente", icon: CheckCircle, color: "text-secondary", bg: "bg-secondary/10" };
  return { label: "Domina", icon: Star, color: "text-success", bg: "bg-success/10" };
};

const getRecommendation = (rating: number, skillName: string) => {
  if (rating === 0) return `Avalie sua competência em ${skillName} para receber orientações.`;
  if (rating === 1) return `Comece pelos fundamentos de ${skillName}. Busque Trailheads introdutórios e documentação oficial.`;
  if (rating === 2) return `Pratique ${skillName} em projetos reais. Explore cenários mais complexos e hands-on labs.`;
  if (rating === 3) return `Aprofunde em ${skillName} com casos avançados. Considere certificações e projetos desafiadores.`;
  if (rating === 4) return `Você está quase lá em ${skillName}! Mentore outros e busque cenários edge-case para consolidar.`;
  return `Excelente domínio de ${skillName}! Compartilhe conhecimento e mantenha-se atualizado com releases.`;
};

const ResultsPanel = ({ ratings, categories }: ResultsPanelProps) => {
  const cats = categories || competencyCategories;

  const chartData = cats.flatMap((cat) =>
    cat.skills.map((s) => ({
      category: s.name.length > 20 ? s.name.slice(0, 18) + "…" : s.name,
      score: ratings[s.id] || 0,
      fullMark: 5,
    }))
  );

  const allSkills = cats.flatMap((c) => c.skills);
  const totalSkills = allSkills.length;
  const ratedSkills = allSkills.filter((s) => (ratings[s.id] || 0) > 0).length;
  const overallAvg =
    ratedSkills > 0
      ? allSkills.reduce((sum, s) => sum + (ratings[s.id] || 0), 0) / ratedSkills
      : 0;

  const strengths = allSkills.filter((s) => (ratings[s.id] || 0) >= 4);
  const gaps = allSkills.filter((s) => {
    const r = ratings[s.id] || 0;
    return r > 0 && r <= 2;
  });
  const evolving = allSkills.filter((s) => (ratings[s.id] || 0) === 3);
  const notRated = allSkills.filter((s) => (ratings[s.id] || 0) === 0);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-card shadow-card border border-border/50 p-6"
      >
        <h3 className="text-2xl font-bold font-display text-card-foreground mb-6">
          📊 Seu Perfil de Competências
        </h3>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold font-display text-primary">{overallAvg.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground mt-1">Média Geral</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold font-display text-secondary">{ratedSkills}</div>
            <div className="text-xs text-muted-foreground mt-1">Avaliadas</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/50">
            <div className="text-3xl font-bold font-display text-accent">{totalSkills - ratedSkills}</div>
            <div className="text-xs text-muted-foreground mt-1">Pendentes</div>
          </div>
        </div>

        <div className="w-full h-80">
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
          className="rounded-2xl bg-card shadow-card border border-border/50 p-6"
        >
          <h3 className="text-2xl font-bold font-display text-card-foreground mb-6">
            🧭 Orientação de Desenvolvimento
          </h3>

          {/* Strengths */}
          {strengths.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-success" />
                <h4 className="text-lg font-semibold font-display text-card-foreground">
                  Pontos Fortes ({strengths.length})
                </h4>
              </div>
              <div className="space-y-2">
                {strengths.map((skill) => {
                  const status = getSkillStatus(ratings[skill.id]);
                  const Icon = status.icon;
                  return (
                    <div key={skill.id} className={cn("p-3 rounded-lg border border-border/30", status.bg)}>
                      <div className="flex items-start gap-3">
                        <Icon className={cn("w-4 h-4 mt-0.5 flex-shrink-0", status.color)} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-sm text-card-foreground">{skill.name}</span>
                            <span className="text-xs font-bold text-success">
                              {skillLevels[ratings[skill.id]]?.label}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {getRecommendation(ratings[skill.id], skill.name)}
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
                  Em Evolução ({evolving.length})
                </h4>
              </div>
              <div className="space-y-2">
                {evolving.map((skill) => {
                  const status = getSkillStatus(ratings[skill.id]);
                  const Icon = status.icon;
                  return (
                    <div key={skill.id} className={cn("p-3 rounded-lg border border-border/30", status.bg)}>
                      <div className="flex items-start gap-3">
                        <Icon className={cn("w-4 h-4 mt-0.5 flex-shrink-0", status.color)} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-sm text-card-foreground">{skill.name}</span>
                            <span className="text-xs font-bold text-warning">Intermediário</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {getRecommendation(3, skill.name)}
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
                  Gaps a Desenvolver ({gaps.length})
                </h4>
              </div>
              <div className="space-y-2">
                {gaps.map((skill) => {
                  const status = getSkillStatus(ratings[skill.id]);
                  const Icon = status.icon;
                  return (
                    <div key={skill.id} className={cn("p-3 rounded-lg border border-border/30", status.bg)}>
                      <div className="flex items-start gap-3">
                        <Icon className={cn("w-4 h-4 mt-0.5 flex-shrink-0", status.color)} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-sm text-card-foreground">{skill.name}</span>
                            <span className="text-xs font-bold text-destructive">
                              {skillLevels[ratings[skill.id]]?.label}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {getRecommendation(ratings[skill.id], skill.name)}
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
                  Ainda não avaliadas ({notRated.length})
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {notRated.map((skill) => (
                  <span
                    key={skill.id}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium"
                  >
                    {skill.name}
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
