import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Award,
  Globe,
  Briefcase,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const skills = [
  "Salesforce",
  "CRM",
  "Sales Cloud",
  "Service Cloud",
  "Process Automation",
  "Flow Builder",
  "Data Modeling",
  "Omni-Channel",
  "Business Analysis",
  "User Adoption",
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
    description:
      "Gestão e otimização da plataforma Salesforce, alinhando CRM aos processos e necessidades do negócio. Atua com customizações, resolução de problemas, documentação técnica, suporte aos usuários e iniciativas de performance, escalabilidade e automação.",
  },
  {
    company: "EQI Investimentos",
    period: "Mar 2022 - Jul 2024",
    role: "Salesforce CRM Analyst",
    description:
      "Trabalhou na evolução da plataforma Salesforce com foco em objetos, campos, layouts, automações, documentação, suporte e tradução de requisitos em soluções práticas.",
  },
  {
    company: "Cloud11",
    period: "Out 2021 - Fev 2022",
    role: "Salesforce CRM Analyst",
    description:
      "Durante experiência internacional no Egito, iniciou sua trajetória em Salesforce, colaborando com times de diferentes regiões para adaptar a plataforma às necessidades locais.",
  },
  {
    company: "ControlSoft Assessoria e Desenvolvimento LTDA",
    period: "Mar 2018 - Jul 2019",
    role: "Software Quality Assurance (QA) Analyst",
    description:
      "Atuação com planejamento, execução e reporte de testes em ERP do agronegócio, com foco em qualidade, confiabilidade e validação de dados críticos.",
  },
  {
    company: "PROXSIS Sistemas de Gestão Empresarial",
    period: "Mar 2016 - Jul 2017",
    role: "Software Consultant",
    description:
      "Implementação de sistemas ERP em indústrias, mapeamento de processos, configuração de soluções, documentação, treinamento e suporte contínuo a usuários.",
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

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-hero">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-secondary/40 bg-secondary/20">
              <span className="font-display text-4xl font-bold text-secondary">HM</span>
            </div>

            <h1 className="mb-3 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
              Helsio Mattia
            </h1>

            <p className="mb-6 max-w-2xl font-body text-lg text-primary-foreground/70">
              Salesforce Consultant | CRM Specialist | Sales Cloud & Service Cloud | Process
              Automation | 4x Certified
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/60">
              <a
                href="mailto:helsiomattia@gmail.com"
                className="flex items-center gap-1.5 transition-colors hover:text-secondary"
              >
                <Mail className="h-4 w-4" /> helsiomattia@gmail.com
              </a>

              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4" /> +55 49 9 8814 5714
              </span>

              <a
                href="https://linkedin.com/in/helsiomattia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-secondary"
              >
                <Linkedin className="h-4 w-4" /> linkedin.com/in/helsiomattia
              </a>

              <a
                href="https://trailblazer.me/id/helsiomattia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-secondary"
              >
                <Globe className="h-4 w-4" /> trailblazer.me/id/helsiomattia
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-16 px-4 py-12">
        <motion.section {...fadeUp}>
          <SectionTitle icon={<BookOpen className="h-5 w-5" />} title="Sobre mim" />
          <div className="space-y-3 leading-relaxed text-muted-foreground">
            <p>
              Profissional Salesforce com mais de 4 anos de experiência em desenho e
              otimização de soluções de CRM, com foco em escalabilidade, automação e
              performance de negócio.
            </p>
            <p>
              Atualmente atua no Efí Bank, liderando iniciativas para melhorar operações
              de atendimento, fluxos de automação e eficiência do CRM com Sales Cloud e
              Service Cloud.
            </p>
            <p>
              Tem experiência forte em automação de processos, otimização de CRM,
              modelagem de dados, operações de atendimento com Messaging e Omni-Channel,
              análise de requisitos, treinamento e adoção de usuários.
            </p>
            <p>
              Combina visão técnica e de negócio, apoiada por histórico anterior em
              consultoria ERP e QA, o que fortalece a leitura ponta a ponta dos processos
              corporativos.
            </p>
          </div>
        </motion.section>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.section {...fadeUp}>
            <SectionTitle icon={<Award className="h-5 w-5" />} title="Skills" />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-secondary/20 bg-secondary/15 px-3 py-1.5 text-sm font-medium text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeUp}>
            <SectionTitle icon={<Globe className="h-5 w-5" />} title="Idiomas" />
            <div className="space-y-4">
              {languages.map((language) => (
                <div key={language.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-foreground">{language.name}</span>
                    <span className="text-muted-foreground">{language.level}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        <motion.section {...fadeUp}>
          <SectionTitle icon={<Briefcase className="h-5 w-5" />} title="Experiência de Trabalho" />
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative border-l-2 border-secondary/30 pl-6"
              >
                <div className="absolute left-[-7px] top-1 h-3 w-3 rounded-full bg-secondary" />
                <div className="mb-1 flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {experience.company}
                  </h3>
                  <span className="text-xs text-muted-foreground">{experience.period}</span>
                </div>
                <p className="mb-1 text-sm font-semibold text-secondary">{experience.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.section {...fadeUp}>
            <SectionTitle icon={<GraduationCap className="h-5 w-5" />} title="Formação Acadêmica" />
            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={`${item.title}-${item.period}`}
                  className="rounded-xl border border-border/50 bg-card p-4"
                >
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-secondary">{item.institution}</p>
                  <p className="text-xs text-muted-foreground">{item.period}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeUp}>
            <SectionTitle icon={<Award className="h-5 w-5" />} title="Certificações" />
            <div className="space-y-2">
              {certifications.map((certification) => (
                <div
                  key={certification}
                  className="flex items-center gap-2 rounded-xl border border-border/50 bg-card p-3"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  <span className="text-sm font-medium text-foreground">{certification}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      <footer className="mt-12 rounded-3xl bg-gradient-hero py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="mb-4 text-sm text-primary-foreground/50">
            Conecte-se comigo nas redes sociais:
          </p>
          <div className="mb-4 flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/helsiomattia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 transition-colors hover:text-secondary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:helsiomattia@gmail.com"
              className="text-primary-foreground/60 transition-colors hover:text-secondary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-primary-foreground/40">© 2025 Helsio Mattia</p>
        </div>
      </footer>
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

export default AboutPage;
