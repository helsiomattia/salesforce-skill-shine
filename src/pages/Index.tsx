import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { competencyCategories } from "@/data/competencies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section id="assessment" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold font-display text-foreground text-center mb-10">
          Escolha uma carreira para avaliar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {competencyCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/${cat.id}`}
                className="block rounded-2xl bg-card shadow-card border border-border/50 p-8 hover:shadow-card-hover hover:border-secondary/30 transition-all group"
              >
                <span className="text-5xl block mb-4">{cat.icon}</span>
                <h3 className="text-2xl font-bold font-display text-card-foreground mb-2 group-hover:text-secondary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-secondary">
                  {cat.skills.length} competências
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
