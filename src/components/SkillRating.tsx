import { skillLevels } from "@/data/competencies";
import { cn } from "@/lib/utils";

interface SkillRatingProps {
  value: number;
  onChange: (value: number) => void;
  skillName: string;
  description: string;
}

const levelColors: Record<number, string> = {
  0: "bg-muted text-muted-foreground",
  1: "bg-destructive text-destructive-foreground",
  2: "bg-warning text-warning-foreground",
  3: "bg-accent text-accent-foreground",
  4: "bg-secondary text-secondary-foreground",
  5: "bg-success text-success-foreground",
};

const SkillRating = ({ value, onChange, skillName, description }: SkillRatingProps) => {
  return (
    <div className="p-4 rounded-lg bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold font-display text-card-foreground text-sm">{skillName}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
        <div className="flex gap-1.5 flex-shrink-0">
          {skillLevels.map((level) => (
            <button
              key={level.value}
              onClick={() => onChange(level.value)}
              title={level.label}
              className={cn(
                "w-8 h-8 rounded-md text-xs font-bold transition-all duration-200 border-2",
                value === level.value
                  ? cn(levelColors[level.value], "border-foreground/20 scale-110")
                  : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
              )}
            >
              {level.value}
            </button>
          ))}
        </div>
      </div>
      {value > 0 && (
        <div className="mt-2">
          <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", levelColors[value])}>
            {skillLevels[value]?.label}
          </span>
        </div>
      )}
    </div>
  );
};

export default SkillRating;
