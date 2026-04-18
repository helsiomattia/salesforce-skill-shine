import { motion } from "framer-motion";
import { CompetencyCategory } from "@/data/competencies";
import SkillRating from "./SkillRating";

interface CategoryCardProps {
  category: CompetencyCategory;
  ratings: Record<string, number>;
  onRate: (skillId: string, value: number) => void;
}

const CategoryCard = ({ category, ratings, onRate }: CategoryCardProps) => {
  const avgScore =
    category.skills.reduce((sum, s) => sum + (ratings[s.id] || 0), 0) /
    (category.skills.length || 1);

  const hardSkills = category.skills.filter(s => s.type === "hard");
  const softSkills = category.skills.filter(s => s.type === "soft");
  const otherSkills = category.skills.filter(s => s.type !== "hard" && s.type !== "soft");

  const renderSkills = (skills: typeof category.skills) => (
    <div className="space-y-3">
      {skills.map((skill) => (
        <SkillRating
          key={skill.id}
          skillName={skill.name}
          description={skill.description}
          requirements={skill.requirements}
          value={ratings[skill.id] || 0}
          onChange={(val) => onRate(skill.id, val)}
        />
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden"
    >
      <div className="p-6 border-b border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{category.icon}</span>
          <div>
            <h3 className="text-xl font-bold font-display text-card-foreground">
              {category.title}
            </h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <div className="text-2xl font-bold font-display text-primary">
            {avgScore.toFixed(1)}
          </div>
          <div className="text-xs text-muted-foreground">média total</div>
        </div>
      </div>
      <div className="p-4 space-y-6">
        {hardSkills.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">Hard Skills</h4>
            {renderSkills(hardSkills)}
          </div>
        )}
        
        {softSkills.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">Soft Skills</h4>
            {renderSkills(softSkills)}
          </div>
        )}

        {otherSkills.length > 0 && (
          <div className={hardSkills.length > 0 || softSkills.length > 0 ? "pt-2" : ""}>
            {renderSkills(otherSkills)}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CategoryCard;
