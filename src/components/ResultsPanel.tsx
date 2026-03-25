import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { CompetencyCategory, competencyCategories } from "@/data/competencies";

interface ResultsPanelProps {
  ratings: Record<string, number>;
  categories?: CompetencyCategory[];
}

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

  return (
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
  );
};

export default ResultsPanel;
