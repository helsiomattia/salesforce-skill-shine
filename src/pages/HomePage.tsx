import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { getLocalizedString } from "@/utils/i18nHelper";
import { competencyCategories } from "@/data/competencies";
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
  ShieldCheck
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
  const careersContext = t('home.careersContext', { returnObjects: true }) as string[];
  const journeyContext = t('home.journeyContext', { returnObjects: true }) as string[];
  const pyramidContext = t('home.pyramidContext', { returnObjects: true }) as string[];
  const contextLabels = t('home.contextLabels', { returnObjects: true }) as string[];

  return (
    <div className="mx-auto min-h-screen max-w-7xl space-y-8 px-4 py-6 lg:px-6">

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-slate-200/50 md:px-12 md:py-16">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:items-center xl:gap-16">
          <div className="relative z-20 max-w-2xl min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Cloud className="h-4 w-4" />
                {t('home.badge')}
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:leading-[1.05]">
                <Trans i18nKey="home.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" /> }} />
              </h1>

              <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                {t('home.subtitle')}
              </p>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {heroParagraphs.map((paragraph, index) => (
                  <article key={paragraph} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm shadow-slate-200/40">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                      {heroContextLabels[index]}
                    </p>
                    <p className="text-sm leading-6 text-slate-600">
                      {paragraph}
                    </p>
                  </article>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <Link
                  to="/assessment"
                  viewTransition
                  className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <ClipboardCheck className="h-5 w-5" />
                  {t('home.startAssessment')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Abstract Hub Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 hidden h-[640px] w-full min-w-0 flex-col gap-8 lg:flex"
          >
            <div className="relative flex h-48 items-center justify-center rounded-[32px] bg-gradient-to-b from-sky-50/80 to-white/30 xl:h-52">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 6, -6, 0]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-10 flex h-full w-full items-center justify-center p-5 drop-shadow-2xl"
              >
                <img
                  src={`${import.meta.env.BASE_URL}astro.png`}
                  alt="Astro Mascot"
                  className="h-full max-h-40 w-auto max-w-full object-contain xl:max-h-44"
                />
              </motion.div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[32px]">
            {/* SVG Connecting Lines with Flowing Animation */}
            <svg className="absolute inset-0 h-full w-full z-0" strokeLinecap="round">
              <defs>
                <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#2dd4bf" />
                </linearGradient>
              </defs>

              {/* Main Career Lines */}
              <motion.line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#f97316" strokeWidth="6" strokeDasharray="12 12" animate={{ strokeDashoffset: [0, -100] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} />
              <motion.line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#14b8a6" strokeWidth="6" strokeDasharray="12 12" animate={{ strokeDashoffset: [0, -100] }} transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }} />
              <motion.line x1="50%" y1="50%" x2="85%" y2="60%" stroke="#3b82f6" strokeWidth="6" strokeDasharray="12 12" animate={{ strokeDashoffset: [0, -100] }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} />
              <motion.line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#a855f7" strokeWidth="6" strokeDasharray="12 12" animate={{ strokeDashoffset: [0, -100] }} transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }} />
              <motion.line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#ec4899" strokeWidth="6" strokeDasharray="12 12" animate={{ strokeDashoffset: [0, -100] }} transition={{ repeat: Infinity, duration: 3.8, ease: "linear" }} />

              {/* Decorative Lines */}
              <motion.line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#64748b" strokeWidth="4" strokeDasharray="8 8" animate={{ strokeDashoffset: [0, -100] }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} opacity="0.5" />
              <motion.line x1="50%" y1="50%" x2="40%" y2="10%" stroke="#eab308" strokeWidth="4" strokeDasharray="8 8" animate={{ strokeDashoffset: [0, -100] }} transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }} opacity="0.6" />
              <motion.line x1="50%" y1="50%" x2="70%" y2="90%" stroke="#06b6d4" strokeWidth="4" strokeDasharray="8 8" animate={{ strokeDashoffset: [0, -100] }} transition={{ repeat: Infinity, duration: 5.5, ease: "linear" }} opacity="0.6" />
            </svg>

            {/* Decorative End Nodes (Small Dots) */}
            <div className="absolute top-[10%] left-[40%] h-4 w-4 rounded-full bg-yellow-400 shadow-lg translate-x-[-50%] translate-y-[-50%]" />
            <div className="absolute top-[50%] left-[10%] h-4 w-4 rounded-full bg-slate-400 shadow-lg translate-x-[-50%] translate-y-[-50%]" />
            <div className="absolute top-[90%] left-[70%] h-4 w-4 rounded-full bg-cyan-400 shadow-lg translate-x-[-50%] translate-y-[-50%]" />

            {/* Floating Background Particles */}
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-[30%] left-[25%] h-2 w-2 rounded-full bg-orange-400" />
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-[70%] right-[30%] h-3 w-3 rounded-full bg-blue-400" />

            {/* Center Node (Salesforce Style) */}
            <motion.div 
              animate={{ 
                boxShadow: [
                  "0 0 40px -10px rgba(14, 165, 233, 0.5)",
                  "0 0 60px -5px rgba(14, 165, 233, 0.8)",
                  "0 0 40px -10px rgba(14, 165, 233, 0.5)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute z-20 flex flex-col items-center justify-center h-40 w-40 rounded-full bg-gradient-to-b from-sky-400 to-blue-700 border-4 border-blue-200/50 p-2 shadow-2xl text-white"
            >
              <Cloud className="h-14 w-14 mb-1 fill-white" />
              <span className="font-bold text-sm tracking-wide">Salesforce</span>
            </motion.div>

            {/* Main Nodes */}
            <div className="absolute z-10" style={{ top: "20%", left: "20%", transform: "translate(-50%, -50%)" }}>
              <motion.div 
                className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 border-4 border-orange-400 text-orange-600 shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <Settings className="h-7 w-7" />
              </motion.div>
            </div>
            
            <div className="absolute z-10" style={{ top: "20%", left: "80%", transform: "translate(-50%, -50%)" }}>
              <motion.div 
                className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 border-4 border-teal-400 text-teal-600 shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <Compass className="h-7 w-7" />
              </motion.div>
            </div>

            <div className="absolute z-10" style={{ top: "80%", left: "20%", transform: "translate(-50%, -50%)" }}>
              <motion.div 
                className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-50 border-4 border-purple-400 text-purple-600 shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <Users className="h-7 w-7" />
              </motion.div>
            </div>

            <div className="absolute z-10" style={{ top: "85%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <motion.div 
                className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 border-4 border-pink-400 text-pink-600 shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <Database className="h-7 w-7" />
              </motion.div>
            </div>

            <div className="absolute z-10" style={{ top: "60%", left: "85%", transform: "translate(-50%, -50%)" }}>
              <motion.div 
                className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 border-4 border-blue-400 text-blue-600 shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <Code2 className="h-7 w-7" />
              </motion.div>
            </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Hub and Spoke Career Paths Section */}
      <motion.section {...fadeUp} className="space-y-8 py-6">
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
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] border-2 bg-white p-6 transition-all duration-300 hover:-translate-y-1 ${career.shadow} border-slate-100 hover:border-opacity-50`}
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
      <motion.section {...fadeUp} className="relative overflow-hidden rounded-[40px] bg-slate-900 px-6 py-10 text-white md:px-12 md:py-12">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

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
      <motion.section {...fadeUp} className="grid gap-10 items-center rounded-[40px] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.05fr_0.95fr] md:p-12">
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

      <motion.section {...fadeUp} className="pb-2">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white/60 px-5 py-4 text-sm text-slate-500 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
            <div>
              <p className="font-semibold text-slate-700">{t('home.trust.badge')}</p>
              <p className="mt-1 leading-6">{t('home.trust.summary')}</p>
              <p className="mt-1 text-xs text-slate-400">{t('home.trust.meta')}</p>
            </div>
          </div>

          <Link
            to="/editorial-policy"
            viewTransition
            className="shrink-0 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            {t('home.trust.policyLink')}
          </Link>
        </div>
      </motion.section>

    </div>
  );
};

export default HomePage;
