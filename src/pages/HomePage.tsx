import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  User,
  ClipboardCheck,
  Layers3,
  TrendingUp,
  CheckCircle2,
  Gauge,
} from "lucide-react";

const pillars = [
  {
    icon: Layers3,
    title: "Posicionamento profissional",
    description:
      "Uma estrutura clara para apresentar trajetória, visão e diferenciais dentro do ecossistema Salesforce.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação de competências",
    description:
      "Diagnóstico por carreira para visualizar pontos fortes, lacunas e caminhos de evolução.",
  },
  {
    icon: TrendingUp,
    title: "Evolução contínua",
    description:
      "Uma base para crescer o projeto como produto, com roadmap, níveis e recomendações futuras.",
  },
];

const highlights = [
  "Visual com abordagem de produto digital",
  "Trilhas separadas por perfil profissional",
  "Base para evolução em dashboard de carreira",
  "Projeto publicado e acessível em produção",
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const HomePage = () => {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-6 py-14 shadow-[0_20px_80px_rgba(15,23,42,0.06)] md:px-10 md:py-20">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-700">
                <Sparkles className="h-4 w-4" />
                Career Intelligence for Salesforce
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                Uma experiência mais estratégica para carreira, evolução e
                competências no universo Salesforce.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                O Salesforce Skill Shine foi estruturado para unir apresentação
                profissional, avaliação de competências e visão de produto em um
                único projeto com proposta clara e evolução contínua.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/assessment"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Explorar avaliação
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Conhecer minha trajetória
                  <User className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Experience overview</p>
                <h2 className="mt-1 text-xl font-semibold">Career Dashboard</h2>
              </div>

              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <Gauge className="h-5 w-5" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Projeto
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Estrutura orientada a produto, combinando posicionamento,
                  leitura de carreira e avaliação por trilhas.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="mt-1 text-xs text-slate-400">Módulos principais</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">4</p>
                  <p className="mt-1 text-xs text-slate-400">Carreiras mapeadas</p>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-4">
                <p className="text-sm font-medium text-cyan-200">
                  Próxima evolução
                </p>
                <p className="mt-2 text-sm leading-6 text-cyan-50/85">
                  Transformar a avaliação em uma experiência ainda mais visual,
                  com score, níveis e visão consolidada de maturidade.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        {...fadeUp}
        className="grid gap-5 md:grid-cols-3"
      >
        {pillars.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <div
              key={pillar.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-700">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </motion.section>

      <motion.section
        {...fadeUp}
        className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Visão do projeto
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Mais do que um portfólio pessoal: uma base para um produto de
              carreira com identidade própria.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              A proposta desta nova home é apresentar o projeto primeiro como uma
              experiência digital estratégica. A trajetória profissional continua
              forte, mas agora em uma área dedicada, para que a página inicial
              comunique valor, visão e direção de evolução.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Ver Sobre mim
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/assessment"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-200 bg-cyan-50 px-5 py-3 text-sm font-medium text-cyan-700 transition hover:bg-cyan-100"
              >
                Ir para avaliação
                <ClipboardCheck className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">Landing premium</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Home focada em proposta de valor e identidade de produto.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">Sobre mim</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Toda a sua trajetória preservada, mas em um espaço mais adequado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">Assessment</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Trilha prática para avaliar competências por carreira.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">Escalabilidade</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Estrutura pronta para evoluir com score, métricas e roadmap.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
