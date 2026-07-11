import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Linkedin,
  Sparkles,
  ArrowRight,
  Compass,
  Target,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

const linkedInUrl = "https://linkedin.com/in/helsiomattia";

const ContactPage = () => {
  const { t } = useTranslation();
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const helpTopics = [
    {
      title: t("contactPage.help.current.title"),
      description: t("contactPage.help.current.desc"),
      icon: Target,
      features: [
        t("contactPage.help.current.f1"),
        t("contactPage.help.current.f2"),
        t("contactPage.help.current.f3"),
        t("contactPage.help.current.f4"),
      ],
    },
    {
      title: t("contactPage.help.next.title"),
      description: t("contactPage.help.next.desc"),
      icon: Compass,
      features: [
        t("contactPage.help.next.f1"),
        t("contactPage.help.next.f2"),
        t("contactPage.help.next.f3"),
        t("contactPage.help.next.f4"),
      ],
    },
  ];

  const credibilityNotes = [
    t("contactPage.meta.createdBy"),
    t("contactPage.meta.experience"),
    t("contactPage.meta.independent"),
    t("contactPage.meta.updated"),
    t("contactPage.meta.location"),
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-6 lg:px-6 lg:py-8">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-panel border border-slate-200 bg-white px-6 py-12 shadow-panel md:px-12 md:py-16"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-blob-sm" />
        <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-blob" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-7 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Sparkles className="h-4 w-4" />
            {t("contactPage.badge")}
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]">
            {t("contactPage.title")}
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {t("contactPage.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-600 hover:shadow-blue-glow-sm"
            >
              <Linkedin className="h-5 w-5" />
              {t("contactPage.linkedinButton")}
            </a>
            <Link
              to="/guide"
              viewTransition
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <BookOpen className="h-5 w-5 text-slate-400" />
              {t("contactPage.guideButton")}
            </Link>
          </div>
        </div>
      </motion.section>

      <section className="space-y-8">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {t("contactPage.helpTitle")}
          </h2>
          <p className="text-slate-600">
            {t("contactPage.helpSubtitle")}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {helpTopics.map((topic) => {
            const Icon = topic.icon;

            return (
              <motion.article
                key={topic.title}
                {...fadeUp}
                className="rounded-section border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-200/60 md:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{topic.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{topic.description}</p>

                <ul className="mt-7 space-y-3">
                  {topic.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                      <span className="font-medium text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </section>

      <motion.section
        {...fadeUp}
        className="grid gap-6 rounded-section border border-slate-200 bg-slate-50 p-6 md:grid-cols-[auto_1fr] md:p-8"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">{t("contactPage.limitsTitle")}</h2>
          <p className="max-w-3xl leading-7 text-slate-600">{t("contactPage.limitsText")}</p>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="relative overflow-hidden rounded-panel bg-slate-950 px-6 py-12 text-white md:px-12 md:py-16"
      >
        <div className="absolute right-0 top-0 h-[520px] w-[520px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-blob-lg" />
        <div className="absolute bottom-0 left-0 h-[520px] w-[520px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/10 blur-blob-lg" />

        <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              {t("contactPage.primaryChannel")}
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              {t("contactPage.ctaTitle")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
              {t("contactPage.ctaSubtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-blue-glow transition hover:bg-blue-500"
            >
              <Linkedin className="h-5 w-5" />
              {t("contactPage.linkedinButton")}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/guide"
              viewTransition
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              {t("contactPage.guideButton")}
            </Link>
          </div>

          <div className="grid gap-3 pt-4 text-left sm:grid-cols-2">
            {credibilityNotes.map((note) => (
              <div key={note} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
                {note}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.p
        {...fadeUp}
        className="mx-auto max-w-3xl border-t border-slate-100 pt-8 text-center text-xs leading-6 text-slate-400"
      >
        {t("contactPage.disclaimer")}
      </motion.p>
    </div>
  );
};

export default ContactPage;
