import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import JsonLd from "@/components/JsonLd";
import { getLocalizedString } from "@/utils/i18nHelper";
import { competencyCategories } from "@/data/competencies";
import { absoluteUrl, authorJsonLd, SITE_URL } from "@/lib/site";
import {
  ArrowRight,
  ClipboardCheck,
  Code2,
  Settings,
  Compass,
  Users,
  MapPin,
  Target,
  Award,
  TrendingUp,
  Cloud,
  Layers,
  ChevronRight,
  Database,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

// Inspired by the "Salesforce as a Career" hub-and-spoke image
const careers = [
  {
    id: "admin",
    title: "Administrador",
    icon: Settings,
    color: "bg-purple-100 text-purple-600 border-purple-200",
    shadow: "hover:shadow-purple-500/20 hover:border-purple-300",
    description: "A base do ecossistema. Domine a plataforma, automatize processos e crie soluções sem código.",
    link: "/assessment/admin"
  },
  {
    id: "developer",
    title: "Desenvolvedor",
    icon: Code2,
    color: "bg-blue-100 text-blue-600 border-blue-200",
    shadow: "hover:shadow-blue-500/20 hover:border-blue-300",
    description: "Vá além do declarativo. Crie soluções complexas, integrações e componentes customizados LWC.",
    link: "/assessment/developer"
  },
  {
    id: "architect",
    title: "Arquiteto",
    icon: Compass,
    color: "bg-teal-100 text-teal-600 border-teal-200",
    shadow: "hover:shadow-teal-500/20 hover:border-teal-300",
    description: "Desenhe o futuro. Projete soluções escaláveis, seguras e de alta performance de nível enterprise.",
    link: "/assessment/architect"
  },
  {
    id: "consultant",
    title: "Consultor",
    icon: Users,
    color: "bg-orange-100 text-orange-600 border-orange-200",
    shadow: "hover:shadow-orange-500/20 hover:border-orange-300",
    description: "Entenda o negócio. Conecte as necessidades do cliente às melhores práticas da plataforma.",
    link: "/assessment/consultant"
  },
  {
    id: "data",
    title: { pt: "Analista de Dados", en: "Data Analyst", es: "Analista de Datos" },
    icon: Database,
    color: "bg-pink-100 text-pink-600 border-pink-200",
    shadow: "hover:shadow-pink-500/20 hover:border-pink-300",
    description: {
      pt: "Extraia valor. Transforme dados em insights acionáveis através de dashboards e relatórios CRM Analytics.",
      en: "Extract value. Turn data into actionable insights through CRM Analytics dashboards and reports.",
      es: "Extrae valor. Transforma datos en información procesable a través de paneles e informes de CRM Analytics."
    },
    link: "/assessment"
  }
];

const mappedCareers = [
  ...competencyCategories.map(c => {
    const careerSettings = careers.find(s => s.id === c.id);
    return {
      id: c.id,
      title: c.title,
      icon: careerSettings?.icon || Settings,
      color: careerSettings?.color || "bg-slate-100 text-slate-600 border-slate-200",
      shadow: careerSettings?.shadow || "hover:shadow-slate-500/20 hover:border-slate-300",
      description: c.description,
      link: `/assessment/${c.id}`
    };
  })
];

// Inspired by the Salesforce DX Development Flow and Release Timelines
const journeySteps = [
  {
    icon: MapPin,
    title: "1. Mapeamento",
    description: "Avalie suas habilidades atuais contra o padrão de mercado esperado para cada papel."
  },
  {
    icon: Target,
    title: "2. Identificação de Gaps",
    description: "Descubra exatamente quais conhecimentos faltam para você atingir o seu próximo nível."
  },
  {
    icon: TrendingUp,
    title: "3. Plano de Evolução",
    description: "Crie um roadmap direcionando seus estudos para as competências mais críticas e impactantes."
  },
  {
    icon: Award,
    title: "4. Conquista",
    description: "Alcance as certificações, execute projetos e consolide sua carreira no ecossistema."
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';
  const heroParagraphs = t('home.heroParagraphs', { returnObjects: true }) as string[];
  const heroContextLabels = t('home.heroContextLabels', { returnObjects: true }) as string[];
  const heroBenefits = t('home.heroBenefits', { returnObjects: true }) as string[];
  const careersContext = t('home.careersContext', { returnObjects: true }) as string[];
  const journeyContext = t('home.journeyContext', { returnObjects: true }) as string[];
  const pyramidContext = t('home.pyramidContext', { returnObjects: true }) as string[];
  const contextLabels = t('home.contextLabels', { returnObjects: true }) as string[];
  const benefitIcons = [Target, Layers, ShieldCheck];
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      authorJsonLd,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: "Skill Shine",
        url: SITE_URL,
        description: t("footer.description"),
        publisher: { "@id": `${SITE_URL}/about#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl()}#webpage`,
        url: absoluteUrl(),
        name: "Skill Shine",
        description: t("home.subtitle"),
        isPartOf: { "@id": `${SITE_URL}#website` },
        author: { "@id": `${SITE_URL}/about#person` },
      },
    ],
  };

  return (
    <div className="space-y-6 bg-slate-50 pb-6">
      <JsonLd data={homeJsonLd} />

      {/* Hero Section */}
      <section className="relative isolate px-[clamp(24px,5vw,72px)] py-[clamp(3.5rem,5vw,4.5rem)] text-left">
        <div className="pointer-events-none absolute -left-40 top-8 h-[min(34vw,420px)] w-[min(34vw,420px)] rounded-full bg-cyan-300/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-40 bottom-4 h-[min(38vw,460px)] w-[min(38vw,460px)] rounded-full bg-blue-500/15 blur-blob-lg" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)] lg:items-center xl:gap-16">
          <div className="relative z-20 max-w-[640px] min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm shadow-blue-100/60 backdrop-blur">
                <Cloud className="h-4 w-4" />
                {t('home.badge')}
              </div>

              <h1 className="max-w-[640px] text-[clamp(2.625rem,4.5vw,4.25rem)] font-extrabold leading-[1.04] tracking-tight text-slate-950">
                <Trans i18nKey="home.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" /> }} />
              </h1>

              <p className="max-w-[600px] text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.6] text-slate-600">
                {t('home.subtitle')}
              </p>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <Link
                  to="/assessment"
                  viewTransition
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-blue-glow-sm transition-all hover:bg-blue-700 hover:shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  <ClipboardCheck className="h-5 w-5" />
                  {t('home.startAssessment')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#career-paths"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  {t('home.explorePaths')}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid max-w-[640px] gap-3 pt-1 sm:grid-cols-3">
                {heroBenefits.map((benefit, index) => {
                  const BenefitIcon = benefitIcons[index] || CheckCircle2;
                  return (
                    <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/75 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm shadow-blue-100/40 backdrop-blur">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <BenefitIcon className="h-4 w-4" />
                      </span>
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Abstract Hub Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 mx-auto w-full max-w-[360px] min-w-0 sm:max-w-[420px] lg:max-w-[480px]"
          >
            <div className="rounded-feature border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 p-5 shadow-2xl shadow-blue-200/50 sm:p-6">
              <div className="rounded-card border border-white/80 bg-white/65 p-5 shadow-inner shadow-blue-100/60 backdrop-blur">
                <img
                  src={`${import.meta.env.BASE_URL}astro.png`}
                  alt={t('home.astroAlt')}
                  className="mx-auto h-auto w-full max-w-[360px] object-contain drop-shadow-xl lg:max-w-[420px]"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { icon: Settings, label: t('nav.admin'), className: "border-purple-100 bg-purple-50 text-purple-700" },
                  { icon: Code2, label: t('nav.developer'), className: "border-blue-100 bg-blue-50 text-blue-700" },
                  { icon: Compass, label: t('nav.architect'), className: "border-teal-100 bg-teal-50 text-teal-700" },
                  { icon: Users, label: t('nav.consultant'), className: "border-orange-100 bg-orange-50 text-orange-700" },
                ].map(({ icon: NodeIcon, label, className }) => (
                  <div key={label} className={`flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-bold ${className}`}>
                    <NodeIcon className="h-4 w-4" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <motion.section {...fadeUp} className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="rounded-section border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 max-w-2xl space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{t('home.assessmentHelpTitle')}</h2>
            <p className="text-base leading-7 text-slate-600 md:text-lg">{t('home.assessmentHelpDesc')}</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {heroParagraphs.map((paragraph, index) => (
              <article key={paragraph} className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  {heroContextLabels[index]}
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  {paragraph}
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Hub and Spoke Career Paths Section */}
      <motion.section {...fadeUp} id="career-paths" className="mx-auto max-w-7xl scroll-mt-16 space-y-8 px-4 py-6 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{t('home.careersTitle')}</h2>
            <p className="text-lg leading-8 text-slate-600">
              {t('home.careersDesc')}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {careersContext.map((paragraph, index) => (
              <article key={paragraph} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {contextLabels[index]}
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  {paragraph}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mappedCareers.map((career) => {
            const Icon = career.icon;
            return (
              <Link
                key={career.id}
                to={career.link}
                viewTransition
                className={`group relative flex flex-col justify-between overflow-hidden rounded-card border-2 bg-white p-6 transition-all duration-300 ${career.shadow} border-slate-100 hover:border-opacity-50`}
              >
                <div className="space-y-4">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${career.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{getLocalizedString(career.title, lang)}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {getLocalizedString(career.description, lang)}
                  </p>
                </div>

                <div className="mt-8 flex items-center text-sm font-semibold text-slate-400 group-hover:text-slate-900 transition-colors">
                  {t('home.evaluateSkills')} <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </motion.section>

      {/* The Journey / Timeline Section */}
      <motion.section {...fadeUp} className="relative mx-4 max-w-7xl overflow-hidden rounded-panel bg-slate-900 px-6 py-10 text-white md:px-12 md:py-12 lg:mx-auto">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-blob-lg pointer-events-none" />

        <div className="relative z-10 mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl font-bold md:text-4xl">{t('home.journeyTitle')}</h2>
            <p className="text-lg leading-8 text-slate-300">
              {t('home.journeyDesc')}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {journeyContext.map((paragraph, index) => (
              <article key={paragraph} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  {contextLabels[index]}
                </p>
                <p className="text-sm leading-6 text-slate-300">
                  {paragraph}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Connecting Line Desktop */}
          <div className="absolute top-12 left-[10%] right-[10%] hidden h-0.5 border-t-2 border-dashed border-slate-700 md:block" />

          <div className="grid gap-10 md:grid-cols-4">
            {journeySteps.map((step, idx) => {
              const keys = ['mapping', 'gaps', 'plan', 'achievement'];
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center space-y-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-800 border-4 border-slate-900 shadow-xl z-10">
                    <Icon className="h-10 w-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{t(`home.steps.${keys[idx]}.title`)}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
                    {t(`home.steps.${keys[idx]}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* The Pyramid Vision Section */}
      <motion.section {...fadeUp} className="mx-4 grid max-w-7xl gap-10 items-center rounded-panel border border-slate-200 bg-white p-6 shadow-sm md:p-12 lg:mx-auto lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            <Layers className="h-4 w-4" />
            {t('home.pyramidBadge')}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <Trans i18nKey="home.pyramidTitle" components={{ 1: <span className="text-amber-600" /> }} />
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            {t('home.pyramidDesc')}
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {pyramidContext.map((paragraph, index) => (
              <article key={paragraph} className="rounded-3xl border border-amber-100 bg-amber-50/40 p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                  {contextLabels[index]}
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  {paragraph}
                </p>
              </article>
            ))}
          </div>

          <ul className="grid gap-3 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                {t(`home.pyramidList.${i}`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="flex flex-col items-center gap-2 w-full max-w-sm">
            {/* Pyramid Peak */}
            <div className="w-1/3 rounded-t-xl rounded-b-sm border-2 border-amber-300 bg-gradient-to-b from-amber-100 to-amber-50 p-4 text-center font-bold text-amber-800 shadow-md">
              {t('home.pyramidLevels.cta')}
            </div>
            {/* Pyramid Top */}
            <div className="w-2/3 rounded-sm border-2 border-teal-300 bg-gradient-to-b from-teal-100 to-teal-50 p-4 text-center font-semibold text-teal-800 shadow-sm">
              {t('home.pyramidLevels.architect')}
            </div>
            {/* Pyramid Middle */}
            <div className="w-5/6 rounded-sm border-2 border-blue-300 bg-gradient-to-b from-blue-100 to-blue-50 p-4 text-center font-semibold text-blue-800 shadow-sm">
              {t('home.pyramidLevels.specialist')}
            </div>
            {/* Pyramid Base */}
            <div className="w-full rounded-b-xl rounded-t-sm border-2 border-slate-300 bg-gradient-to-b from-slate-100 to-slate-50 p-4 text-center font-semibold text-slate-700 shadow-sm">
              {t('home.pyramidLevels.core')}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
