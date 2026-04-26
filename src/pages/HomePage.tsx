import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { getLocalizedString } from "@/utils/i18nHelper";
import { competencyCategories } from "@/data/competencies";
import {
  ArrowRight,
  User,
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
  CheckCircle2
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
  }),
  // And the data one
  ...careers.filter(c => c.id === 'data')
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

  return (
    <div className="mx-auto min-h-screen max-w-7xl space-y-8 bg-background px-4 py-6 lg:px-6">

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-slate-200/50 md:px-12 md:py-16">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Cloud className="h-4 w-4" />
                {t('home.badge')}
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:leading-[1.1]">
                <Trans i18nKey="home.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" /> }} />
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                {t('home.subtitle')}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/assessment"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <ClipboardCheck className="h-5 w-5" />
                  {t('home.startAssessment')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <User className="h-5 w-5 text-slate-400" />
                  {t('home.aboutMe')}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Abstract Hub Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex h-[450px] w-full items-center justify-center"
          >
            {/* Center Node */}
            <div className="absolute z-20 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] shadow-2xl shadow-blue-500/30">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <Cloud className="h-14 w-14 text-blue-500" />
              </div>
            </div>

            {/* Orbit Paths */}
            <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-slate-300/80" />

            {/* Surrounding Nodes */}
            <div className="absolute -top-4 right-16 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 shadow-lg rotate-12">
              <Compass className="h-8 w-8" />
            </div>
            <div className="absolute bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 shadow-lg -rotate-6">
              <Code2 className="h-8 w-8" />
            </div>
            <div className="absolute bottom-4 left-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 shadow-lg rotate-6">
              <Settings className="h-8 w-8" />
            </div>
            <div className="absolute top-12 left-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-lg -rotate-12">
              <Users className="h-8 w-8" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hub and Spoke Career Paths Section */}
      <motion.section {...fadeUp} className="space-y-6 py-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{t('home.careersTitle')}</h2>
          <p className="mx-auto max-w-2xl text-slate-600 text-lg">
            {t('home.careersDesc')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {mappedCareers.map((career) => {
            const Icon = career.icon;
            return (
              <Link
                key={career.id}
                to={career.link}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] border-2 bg-white p-6 transition-all duration-300 hover:-translate-y-1 ${career.shadow} border-slate-100 hover:border-opacity-50`}
              >
                <div className="space-y-4">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${career.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{getLocalizedString(career.title, lang)}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {getLocalizedString(career.description as any, lang)}
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
      <motion.section {...fadeUp} className="relative overflow-hidden rounded-[40px] bg-slate-900 px-6 py-12 text-white md:px-12">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

        <div className="text-center space-y-4 mb-16 relative z-10">
          <h2 className="text-3xl font-bold md:text-4xl">{t('home.journeyTitle')}</h2>
          <p className="mx-auto max-w-2xl text-slate-400 text-lg">
            {t('home.journeyDesc')}
          </p>
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
      <motion.section {...fadeUp} className="grid gap-10 md:grid-cols-2 items-center rounded-[40px] border border-slate-200 bg-white p-6 shadow-sm md:p-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            <Layers className="h-4 w-4" />
            {t('home.pyramidBadge')}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <Trans i18nKey="home.pyramidTitle" components={{ 1: <span className="text-amber-600" /> }} />
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            {t('home.pyramidDesc')}
          </p>

          <ul className="space-y-4">
            {[0, 1, 2].map((i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                {t(`home.pyramidList.${i}`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center">
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
