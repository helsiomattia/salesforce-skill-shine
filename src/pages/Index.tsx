import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Linkedin, Award, Globe, Briefcase, GraduationCap, BookOpen, ChevronRight } from "lucide-react";
import { competencyCategories } from "@/data/competencies";

const skills = [
  "Salesforce", "CRM", "Sales Cloud", "Service Cloud", "Process Automation",
  "Flow Builder", "Data Modeling", "Omni-Channel", "Business Analysis", "User Adoption",
];

const languages = [
  { name: "Inglês", level: "Professional Working", percent: 75 },
  { name: "Português", level: "Nativo / Bilíngue", percent: 100 },
];

const experiences = [
  {
    company: "Efí Bank",
    period: "Ago 2024 - Atual",
    role: "Salesforce CRM Analyst",
    description: "Gestão e otimização da plataforma Salesforce, alinhando CRM aos processos e necessidades do negócio. Atua com customizações, resolução de problemas, documentação técnica, suporte aos usuários e iniciativas de performance, escalabilidade e automação.",
  },
  {
    company: "EQI Investimentos",
    period: "Mar 2022 - Jul 2024",
    role: "Salesforce CRM Analyst",
    description: "Trabalhou na evolução da plataforma Salesforce com foco em objetos, campos, layouts, automações, documentação, suporte e tradução de requisitos em soluções práticas.",
  },
  {
    company: "Cloud11",
    period: "Out 2021 - Fev 2022",
    role: "Salesforce CRM Analyst",
    description: "Durante experiência internacional no Egito, iniciou sua trajetória em Salesforce, colaborando com times de diferentes regiões para adaptar a plataforma às necessidades locais.",
  },
  {
    company: "ControlSoft Assessoria e Desenvolvimento LTDA",
    period: "Mar 2018 - Jul 2019",
    role: "Software Quality Assurance (QA) Analyst",
    description: "Atuação com planejamento, execução e reporte de testes em ERP do agronegócio, com foco em qualidade, confiabilidade e validação de dados críticos.",
  },
  {
    company: "PROXSIS Sistemas de Gestão Empresarial",
    period: "Mar 2016 - Jul 2017",
    role: "Software Consultant",
    description: "Implementação de sistemas ERP em indústrias, mapeamento de processos, configuração de soluções, documentação, treinamento e suporte contínuo a usuários.",
  },
];

const education = [
  { title: "MBA em Engenharia de Software", institution: "UTFPR", period: "2023 - 2024" },
  { title: "Bacharelado em Sistemas de Informação", institution: "UNIASSELVI", period: "Desde 2023" },
  { title: "MBA em Gestão de Projetos", institution: "UNIASSELVI", period: "2021" },
  { title: "MBA em Business Intelligence", institution: "UNIASSELVI", period: "2020 - 2021" },
  { title: "Pós-graduação em Gestão de Vendas", institution: "UNIASSELVI", period: "2021" },
];

const certifications = [
  "Salesforce Certified Administrator",
  "Salesforce AI Associate",
  "Git Training",
  "Bootcamp Cloud AWS",
  "Customer Success",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Profile Header */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-secondary/20 border-4 border-secondary/40 flex items-center justify-center mb-6">
              <span className="text-4xl font-bold font-display text-secondary">HM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold font-display text-primary-foreground mb-3">
              Helsio Mattia
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mb-6 font-body">
              Salesforce Consultant | CRM Specialist | Sales Cloud & Service Cloud | Process Automation | 4x Certified
            </p>

            {/* Contact links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/60">
              <a href="mailto:helsiomattia@gmail.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" /> helsiomattia@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" /> +55 49 9 8814 5714
              </span>
              <a href="https://linkedin.com/in/helsiomattia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                <Linkedin className="w-4 h-4" /> linkedin.com/in/helsiomattia
              </a>
              <a href="https://trailblazer.me/id/helsiomattia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                <Globe className="w-4 h-4" /> trailblazer.me/id/helsiomattia
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* About */}
        <motion.section {...fadeUp}>
          <SectionTitle icon={<BookOpen className="w-5 h-5" />} title="Sobre" />
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>Profissional Salesforce com mais de 4 anos de experiência em desenho e otimização de soluções de CRM, com foco em escalabilidade, automação e performance de negócio.</p>
            <p>Atualmente atua no Efí Bank, liderando iniciativas para melhorar operações de atendimento, fluxos de automação e eficiência do CRM com Sales Cloud e Service Cloud.</p>
            <p>Tem experiência forte em automação de processos, otimização de CRM, modelagem de dados, operações de atendimento com Messaging e Omni-Channel, análise de requisitos, treinamento e adoção de usuários.</p>
            <p>Combina visão técnica e de negócio, apoiada por histórico anterior em consultoria ERP e QA, o que fortalece a leitura ponta a ponta dos processos corporativos.</p>
          </div>
        </motion.section>

        {/* Skills & Languages row */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.section {...fadeUp}>
            <SectionTitle icon={<Award className="w-5 h-5" />} title="Skills" />
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary/15 text-secondary border border-secondary/20">
                  {s}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeUp}>
            <SectionTitle icon={<Globe className="w-5 h-5" />} title="Idiomas" />
            <div className="space-y-4">
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-foreground">{l.name}</span>
                    <span className="text-muted-foreground">{l.level}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Experience */}
        <motion.section {...fadeUp}>
          <SectionTitle icon={<Briefcase className="w-5 h-5" />} title="Experiência de Trabalho" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-6 border-l-2 border-secondary/30"
              >
                <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-secondary" />
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="text-lg font-bold font-display text-foreground">{exp.company}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm font-semibold text-secondary mb-1">{exp.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.section {...fadeUp}>
            <SectionTitle icon={<GraduationCap className="w-5 h-5" />} title="Formação Acadêmica" />
            <div className="space-y-4">
              {education.map((ed, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border/50">
                  <h4 className="font-semibold font-display text-foreground text-sm">{ed.title}</h4>
                  <p className="text-xs text-secondary font-medium">{ed.institution}</p>
                  <p className="text-xs text-muted-foreground">{ed.period}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeUp}>
            <SectionTitle icon={<Award className="w-5 h-5" />} title="Certificações" />
            <div className="space-y-2">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Career Assessment CTA */}
        <motion.section {...fadeUp}>
          <SectionTitle icon={<Award className="w-5 h-5" />} title="Avaliação de Competências" />
          <p className="text-muted-foreground mb-6">Escolha uma carreira para avaliar suas competências Salesforce:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competencyCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/${cat.id}`}
                  className="flex items-center gap-4 rounded-xl bg-card shadow-card border border-border/50 p-5 hover:shadow-card-hover hover:border-secondary/30 transition-all group"
                >
                  <span className="text-4xl">{cat.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold font-display text-card-foreground group-hover:text-secondary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">{cat.skills.length} competências</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-hero py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-primary-foreground/50 text-sm mb-4">Conecte-se comigo nas redes sociais:</p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://linkedin.com/in/helsiomattia" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:helsiomattia@gmail.com" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-primary-foreground/40 text-xs">© 2025 Helsio Mattia</p>
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-2 mb-5">
    <span className="text-secondary">{icon}</span>
    <h2 className="text-xl font-bold font-display text-foreground">{title}</h2>
    <div className="flex-1 h-px bg-border ml-2" />
  </div>
);

export default Index;
