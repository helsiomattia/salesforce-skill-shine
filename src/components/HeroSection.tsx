import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary/20 text-secondary border border-secondary/30">
            Avaliação de Competências
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-primary-foreground mb-6 leading-tight">
            Mapeie suas skills em{" "}
            <span className="text-secondary">Salesforce</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-body">
            Avalie suas competências em Admin, Developer, Consultant e Architect.
            Identifique gaps e trace seu plano de evolução.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#assessment"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-hero"
          >
            Começar Avaliação
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
