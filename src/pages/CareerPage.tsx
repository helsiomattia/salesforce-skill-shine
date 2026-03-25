import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import ResultsPanel from "@/components/ResultsPanel";
import { competencyCategories, skillLevels } from "@/data/competencies";

interface CareerPageProps {
  categoryId: string;
}

const CareerPage = ({ categoryId }: CareerPageProps) => {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const category = competencyCategories.find((c) => c.id === categoryId);
  
  const currentIndex = competencyCategories.findIndex((c) => c.id === categoryId);
  const prevCategory = competencyCategories[currentIndex - 1];
  const nextCategory = competencyCategories[currentIndex + 1];

  const handleRate = (skillId: string, value: number) => {
    setRatings((prev) => ({ ...prev, [skillId]: value }));
  };

  if (!category) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar às carreiras
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-5xl mb-4 block">{category.icon}</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-primary-foreground mb-3">
              {category.title}
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Assessment */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {skillLevels.map((level) => (
            <span
              key={level.value}
              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
            >
              {level.value} = {level.label}
            </span>
          ))}
        </div>

        <CategoryCard category={category} ratings={ratings} onRate={handleRate} />

        <div className="mt-12">
          <ResultsPanel ratings={ratings} categories={[category]} />
        </div>

        {/* Navigation between careers */}
        <div className="flex justify-between mt-12">
          {prevCategory ? (
            <Link
              to={`/${prevCategory.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {prevCategory.icon} {prevCategory.title}
            </Link>
          ) : <div />}
          {nextCategory ? (
            <Link
              to={`/${nextCategory.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity font-medium text-sm"
            >
              {nextCategory.icon} {nextCategory.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity font-medium text-sm"
            >
              Ver todas as carreiras
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
