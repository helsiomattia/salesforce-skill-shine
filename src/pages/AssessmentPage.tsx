import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, ChevronRight, Mail, Linkedin } from "lucide-react";
import { competencyCategories } from "@/data/competencies";
import SectionTitle from "@/components/SectionTitle";
import PageFooter from "@/components/layout/PageFooter";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AssessmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-hero">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
              Avaliação de Competências
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">
              Mapeie seu nível técnico e trace caminhos estratégicos de evolução dentro do ecossistema Salesforce.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-12 px-4 py-12">
        <motion.section {...fadeUp}>
          <SectionTitle icon={<Award className="h-5 w-5" />} title="Escolha sua Carreira" />
          <p className="mb-8 text-muted-foreground">
            Selecione um dos perfis abaixo para iniciar o diagnóstico detalhado de competências:
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
                      {category.skills.length} competências mapeadas
                    </p>
                  </div>

                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-secondary" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <PageFooter />
    </div>
  );
};

export default AssessmentPage;
