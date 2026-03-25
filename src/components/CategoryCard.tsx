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
    category.skills.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden"
    >
      <div className="p-6 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{category.icon}</span>
          <div>
            <h3 className="text-xl font-bold font-display text-card-foreground">
              {category.title}
            </h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold font-display text-primary">
            {avgScore.toFixed(1)}
          </div>
          <div className="text-xs text-muted-foreground">média</div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {category.skills.map((skill) => (
          <SkillRating
            key={skill.id}
            skillName={skill.name}
            description={skill.description}
            value={ratings[skill.id] || 0}
            onChange={(val) => onRate(skill.id, val)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryCard;
