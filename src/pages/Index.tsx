import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ResultsPanel from "@/components/ResultsPanel";
import { competencyCategories, skillLevels } from "@/data/competencies";

const Index = () => {
  const [ratings, setRatings] = useState<Record<string, number>>({});

  const handleRate = (skillId: string, value: number) => {
    setRatings((prev) => ({ ...prev, [skillId]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section id="assessment" className="max-w-5xl mx-auto px-4 py-16">
        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {skillLevels.map((level) => (
            <span
              key={level.value}
              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
            >
              {level.value} = {level.label}
            </span>
          ))}
        </div>

        <div className="space-y-8">
          {competencyCategories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              ratings={ratings}
              onRate={handleRate}
            />
          ))}
        </div>

        <div className="mt-16">
          <ResultsPanel ratings={ratings} />
        </div>
      </section>
    </div>
  );
};

export default Index;
