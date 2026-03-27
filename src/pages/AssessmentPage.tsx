import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";
import { competencyCategories } from "@/data/competencies";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AssessmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-12">
        <motion.section {...fadeUp}>
          <SectionTitle icon={<Award className="h-5 w-5" />} title="Avaliação de Competências" />
          <p className="mb-6 text-muted-foreground">
            Escolha uma carreira para avaliar suas competências Salesforce:
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {competencyCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={`/${category.id}`}
                  className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-card transition-all hover:border-secondary/30 hover:shadow-card-hover"
                >
                  <span className="text-4xl">{category.icon}</span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-card-foreground transition-colors group-hover:text-secondary">
                      {category.title}
                    </h3>
                    <p className="truncate text-xs text-muted-foreground">
                      {category.skills.length} competências
                    </p>
                  </div>

                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-secondary" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="mb-5 flex items-center gap-2">
    <span className="text-secondary">{icon}</span>
    <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
    <div className="ml-2 h-px flex-1 bg-border" />
  </div>
);

export default AssessmentPage;
