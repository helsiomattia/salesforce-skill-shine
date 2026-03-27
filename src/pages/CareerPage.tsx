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
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-12">
          <Link
            to="/assessment"
            className="mb-6 inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar às carreiras
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 block text-5xl">{category.icon}</span>
            <h1 className="mb-3 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
              {category.title}
            </h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {skillLevels.map((level) => (
            <span
              key={level.value}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {level.value} = {level.label}
            </span>
          ))}
        </div>

        <CategoryCard category={category} ratings={ratings} onRate={handleRate} />

        <div className="mt-12">
          <ResultsPanel ratings={ratings} categories={[category]} />
        </div>

        <div className="mt-12 flex justify-between">
          {prevCategory ? (
            <Link
              to={`/${prevCategory.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
            >
              <ArrowLeft className="h-4 w-4" />
              {prevCategory.icon} {prevCategory.title}
            </Link>
          ) : (
            <div />
          )}

          {nextCategory ? (
            <Link
              to={`/${nextCategory.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-opacity hover:opacity-90"
            >
              {nextCategory.icon} {nextCategory.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-opacity hover:opacity-90"
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
