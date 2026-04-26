import { skillLevels } from "@/data/competencies";
import { LocString } from "@/data/competencies/types";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { getLocalizedString } from "@/utils/i18nHelper";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillRatingProps {
  value: number;
  onChange: (value: number) => void;
  skillName: string;
  description: string;
  requirements?: Record<number, LocString>;
}

const levelColors: Record<number, string> = {
  0: "bg-muted text-muted-foreground",
  1: "bg-destructive text-destructive-foreground",
  2: "bg-warning text-warning-foreground",
  3: "bg-accent text-accent-foreground",
  4: "bg-secondary text-secondary-foreground",
  5: "bg-success text-success-foreground",
};

const SkillRating = ({ value, onChange, skillName, description, requirements }: SkillRatingProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';

  return (
    <div className="p-4 rounded-lg bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold font-display text-card-foreground text-sm">{skillName}</h4>
            {requirements && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                title={t('skillRating.viewCriteria')}
              >
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isExpanded && "rotate-180")} />
              </button>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
        <div className="flex gap-1.5 flex-shrink-0">
          {skillLevels.map((level) => (
            <button
              key={level.value}
              onClick={() => {
                onChange(level.value);
                if (requirements && level.value > 0) {
                  setIsExpanded(true);
                }
              }}
              title={getLocalizedString(level.label, lang)}
              className={cn(
                "w-8 h-8 rounded-md text-xs font-bold transition-all duration-200 border-2 flex items-center justify-center",
                value === level.value
                  ? cn(levelColors[level.value], "border-foreground/20 scale-110 shadow-sm")
                  : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
              )}
            >
              {level.value}
            </button>
          ))}
        </div>
      </div>
      
      {value > 0 && !isExpanded && (
        <div className="mt-2">
          <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium inline-block", levelColors[value])}>
            {getLocalizedString(skillLevels[value]?.label, lang)}
          </span>
        </div>
      )}

      <AnimatePresence>
        {isExpanded && requirements && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-muted/30 rounded-md p-3 space-y-2 text-xs border border-border/30">
              {skillLevels.filter(l => l.value > 0).map((level) => (
                <div 
                  key={level.value} 
                  className={cn(
                    "flex gap-2 p-1.5 rounded-md transition-colors",
                    value === level.value ? "bg-background shadow-sm border border-border/50" : "opacity-70 grayscale"
                  )}
                  onClick={() => onChange(level.value)}
                  style={{ cursor: "pointer" }}
                >
                  <div className={cn("px-1.5 py-0.5 rounded font-bold whitespace-nowrap self-start", levelColors[level.value])}>
                    {level.value} - {getLocalizedString(level.label, lang)}
                  </div>
                  <div className="flex-1 text-muted-foreground pt-0.5">
                    {requirements[level.value] ? getLocalizedString(requirements[level.value], lang) : t('skillRating.noCriteria')}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillRating;
