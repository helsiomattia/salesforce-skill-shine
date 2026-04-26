import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getLocalizedString } from "@/utils/i18nHelper";
import {
  Award,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Target,
  ArrowRight
} from "lucide-react";
import { competencyCategories } from "@/data/competencies";
import { Trans } from "react-i18next";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AssessmentPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 space-y-8">

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-slate-200/50 md:px-12 md:py-16 text-center">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
          >
            <Target className="h-4 w-4" />
            {t('careerPage.assessment.badge')}
          </motion.div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            <Trans i18nKey="careerPage.assessment.title">
              Mapeie seu <span className="text-blue-600" />
            </Trans>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            {t('careerPage.assessment.subtitle')}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3 pt-6 border-t border-slate-100">
            {[
              { icon: Target, title: t('careerPage.assessment.features.mapping.title'), desc: t('careerPage.assessment.features.mapping.desc') },
              { icon: TrendingUp, title: t('careerPage.assessment.features.growth.title'), desc: t('careerPage.assessment.features.growth.desc') },
              { icon: Sparkles, title: t('careerPage.assessment.features.highlight.title'), desc: t('careerPage.assessment.features.highlight.desc') }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="flex flex-col items-center text-center p-4 space-y-3 rounded-3xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Selection */}
      <section className="space-y-6 py-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">{t('careerPage.assessment.selection.title')}</h2>
            <p className="text-slate-600">{t('careerPage.assessment.selection.subtitle')}</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl">
            <CheckCircle2 className="h-4 w-4" />
            {t('careerPage.assessment.selection.tracks', { count: competencyCategories.length })}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {competencyCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/assessment/${category.id}`}
                className="group relative flex items-center gap-6 rounded-[32px] border-2 border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-slate-50 text-4xl transition-transform group-hover:scale-110">
                  {category.icon}
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {getLocalizedString(category.title, lang)}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <Award className="h-4 w-4 text-amber-500" />
                      {t('careerPage.assessment.card.skills', { count: category.skills.length })}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{t('careerPage.assessment.card.start')}</span>
                  </div>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info / Support Section */}
      <motion.section
        {...fadeUp}
        className="rounded-[40px] border border-slate-200 bg-slate-50 p-8 md:p-12"
      >
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t('careerPage.assessment.support.title')}</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('careerPage.assessment.support.desc')}
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800 shadow-lg"
              >
                {t('careerPage.assessment.support.contact')}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              t('careerPage.assessment.support.tags.soft'), 
              t('careerPage.assessment.support.tags.hard'),
              t('careerPage.assessment.support.tags.maturity'), 
              t('careerPage.assessment.support.tags.business')
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default AssessmentPage;
