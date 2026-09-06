import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, authorJsonLd, SITE_URL } from "@/lib/site";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Megaphone,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";

const linkedInUrl = "https://linkedin.com/in/helsiomattia";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

type JobsGroupCard = {
  title: string;
  description: string;
  status: string;
};

const JobsPage = () => {
  const { t } = useTranslation();
  const groupCards = t("jobsPage.groups.cards", { returnObjects: true }) as JobsGroupCard[];
  const companySteps = t("jobsPage.companies.steps", { returnObjects: true }) as string[];
  const highlights = t("jobsPage.hero.highlights", { returnObjects: true }) as string[];
  const groupIcons = [Send, MessageCircle];
  const jobsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      authorJsonLd,
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/jobs")}#webpage`,
        url: absoluteUrl("/jobs"),
        name: t("jobsPage.title"),
        description: t("jobsPage.subtitle"),
        isPartOf: { "@id": `${SITE_URL}#website` },
        author: { "@id": `${SITE_URL}/about#person` },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-6 lg:px-6 lg:py-8">
      <JsonLd data={jobsJsonLd} />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-panel border border-slate-200 bg-slate-950 px-6 py-12 text-white shadow-panel md:px-12 md:py-16"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-blob-sm" />
        <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-blob" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
              <Megaphone className="h-4 w-4" />
              {t("jobsPage.badge")}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl md:leading-[1.05]">
                {t("jobsPage.title")}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                {t("jobsPage.subtitle")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#job-groups"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-blue-glow-sm transition hover:bg-blue-500"
              >
                {t("jobsPage.hero.groupsButton")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#companies"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {t("jobsPage.hero.companiesButton")}
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm font-semibold leading-6 text-slate-200 backdrop-blur">
                <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-300" />
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="job-groups" className="scroll-mt-20 space-y-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="max-w-xl space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              {t("jobsPage.groups.eyebrow")}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              {t("jobsPage.groups.title")}
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              {t("jobsPage.groups.subtitle")}
            </p>
          </div>
          <div className="rounded-section border border-blue-100 bg-blue-50/60 p-6 text-sm leading-7 text-slate-700 md:p-8">
            <ShieldCheck className="mb-4 h-8 w-8 text-blue-600" />
            {t("jobsPage.groups.note")}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {groupCards.map((card, index) => {
            const Icon = groupIcons[index] || MessageCircle;

            return (
              <article key={card.title} className="rounded-section border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-200/60 md:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                  <p className="leading-7 text-slate-600">{card.description}</p>
                  <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    {card.status}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="companies"
        className="relative scroll-mt-20 overflow-hidden rounded-panel border border-slate-200 bg-white p-6 shadow-panel md:p-10"
      >
        <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/10 blur-blob" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-blue-glow-sm">
              <Building2 className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                {t("jobsPage.companies.eyebrow")}
              </p>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                {t("jobsPage.companies.title")}
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                {t("jobsPage.companies.subtitle")}
              </p>
            </div>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-600 hover:shadow-blue-glow-sm"
            >
              <Handshake className="h-5 w-5" />
              {t("jobsPage.companies.cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4">
            {companySteps.map((step, index) => (
              <div key={step} className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50/70 p-5 sm:grid-cols-[auto_1fr]">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-extrabold text-blue-600 shadow-sm">
                  {index + 1}
                </div>
                <p className="leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default JobsPage;
