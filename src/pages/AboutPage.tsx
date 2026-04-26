import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import {
  Mail,
  Linkedin,
  Award,
  Globe,
  Briefcase,
  GraduationCap,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Phone,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const AboutPage = () => {
  const { t } = useTranslation();

  const skills = [
    "Salesforce Ecosystem",
    "CRM Strategy",
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
    { name: t('about.languages.english'), level: t('about.languages.englishLevel'), percent: 75, color: "bg-blue-600" },
    { name: t('about.languages.portuguese'), level: t('about.languages.portugueseLevel'), percent: 100, color: "bg-cyan-500" },
  ];

  const experiences = [
    {
      company: t('about.experiences.efi.company'),
      period: t('about.experiences.efi.period'),
      role: t('about.experiences.efi.role'),
      description: t('about.experiences.efi.desc'),
    },
    {
      company: t('about.experiences.eqi.company'),
      period: t('about.experiences.eqi.period'),
      role: t('about.experiences.eqi.role'),
      description: t('about.experiences.eqi.desc'),
    },
    {
      company: t('about.experiences.cloud11.company'),
      period: t('about.experiences.cloud11.period'),
      role: t('about.experiences.cloud11.role'),
      description: t('about.experiences.cloud11.desc'),
    },
    {
      company: t('about.experiences.controlsoft.company'),
      period: t('about.experiences.controlsoft.period'),
      role: t('about.experiences.controlsoft.role'),
      description: t('about.experiences.controlsoft.desc'),
    },
    {
      company: t('about.experiences.proxsis.company'),
      period: t('about.experiences.proxsis.period'),
      role: t('about.experiences.proxsis.role'),
      description: t('about.experiences.proxsis.desc'),
    },
  ];

  const education = [
    { title: t('about.education.mbaEng.title'), institution: t('about.education.mbaEng.inst'), period: t('about.education.mbaEng.period') },
    { title: t('about.education.sysInfo.title'), institution: t('about.education.sysInfo.inst'), period: t('about.education.sysInfo.period') },
    { title: t('about.education.mbaProj.title'), institution: t('about.education.mbaProj.inst'), period: t('about.education.mbaProj.period') },
    { title: t('about.education.mbaBI.title'), institution: t('about.education.mbaBI.inst'), period: t('about.education.mbaBI.period') },
    { title: t('about.education.admin.title'), institution: t('about.education.admin.inst'), period: t('about.education.admin.period') },
  ];

  const certifications = [
    "Salesforce Certified Administrator",
    "Salesforce Certified App Builder",
    "Salesforce AI Associate",
    "Agile Scrum Master",
    "Bootcamp Banco PAN Java Developer",
    "Bootcamp Cloud AWS",
    "Microsoft AI for Tech Bootcamp",
    "Business Analysis (CCBA)",
    "Programming Logic",
    "Programming Logic & Algorithms",
    "Git Training & Version Control",
    "Emotional Intelligence 2.0",
    "Leadership Development",
    "Customer Success Management",
    "User Experience (UX) Design",
    "Scrum Fundamentals"
  ];
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 space-y-8">

      {/* Hero / Profile Section */}
      <section className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-slate-200/50 md:px-12 md:py-16">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 flex h-32 w-32 items-center justify-center rounded-[32px] bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl"
          >
            <span className="text-4xl font-bold">HM</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" />
              {t('about.badge')}
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              {t('about.title')}
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed">
              {t('about.role')}
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-medium text-slate-500">
              <a href={`mailto:${t('about.email')}`} className="flex items-center gap-2 transition hover:text-blue-600">
                <Mail className="h-4 w-4" /> {t('about.email')}
              </a>
              <a href={`https://${t('about.linkedin')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-blue-600">
                <Linkedin className="h-4 w-4" /> {t('about.linkedin')}
              </a>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {t('about.phone')}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Skills Grid */}
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        {/* Bio */}
        <motion.section {...fadeUp} className="rounded-[40px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-blue-600">
            <BookOpen className="h-6 w-6" />
            <h2 className="text-2xl font-bold text-slate-900">{t('about.bioTitle')}</h2>
          </div>

          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              {t('about.bio1')}
            </p>
            <p>
              <Trans i18nKey="about.bio2" components={{ 1: <strong /> }} />
            </p>
            <p>
              {t('about.bio3')}
            </p>
          </div>

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-2 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-900">{lang.name}</span>
                  <span className="text-slate-500">{lang.level}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    className={`h-full ${lang.color}`}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section {...fadeUp} className="rounded-[40px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-blue-600">
            <Award className="h-6 w-6" />
            <h2 className="text-2xl font-bold text-slate-900">{t('about.expertiseTitle')}</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">{t('about.certificationsTitle')}</h3>
            <div className="space-y-3">
              {certifications.slice(0, 3).map((cert) => (
                <div key={cert} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      {/* Experience Timeline - Versão Vertical Clássica */}
      <motion.section {...fadeUp} className="space-y-10">
        <div className="flex items-center justify-center gap-3">
          <Briefcase className="h-6 w-6 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900">{t('about.experienceTitle')}</h2>
        </div>

        <div className="relative space-y-8 before:absolute before:left-8 before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-slate-200 md:before:left-1/2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              {...fadeUp}
              className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Dot / Marcador Central */}
              <div className="absolute left-8 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-600 shadow-md md:left-1/2" />

              <div className="ml-16 md:ml-0 md:w-1/2 md:px-12">
                <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-blue-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{exp.period}</span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">{exp.role}</h3>
                  <p className="font-semibold text-slate-500">{exp.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education & Other Certs */}
      <div className="grid gap-8 md:grid-cols-2">
        <motion.section {...fadeUp} className="rounded-[40px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm space-y-8">
          <div className="flex items-center gap-3 text-blue-600">
            <GraduationCap className="h-6 w-6" />
            <h2 className="text-2xl font-bold text-slate-900">{t('about.educationTitle')}</h2>
          </div>

          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.title} className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:bg-white hover:shadow-md">
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm font-medium text-slate-500">{item.institution}</p>
                <p className="mt-2 text-xs font-bold text-blue-600 uppercase tracking-widest">{item.period}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="rounded-[40px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm space-y-8">
          <div className="flex items-center gap-3 text-blue-600">
            <Globe className="h-6 w-6" />
            <h2 className="text-2xl font-bold text-slate-900">{t('about.achievementsTitle')}</h2>
          </div>

          <div className="space-y-3">
            {certifications.slice(3).map((cert) => (
              <div key={cert} className="flex items-center gap-3 rounded-xl border border-slate-100 p-4 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-blue-500" />
                {cert}
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="https://trailblazer.me/id/helsiomattia"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl bg-slate-900 p-4 text-white transition hover:bg-blue-600"
            >
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5" />
                <span className="font-bold">{t('about.trailblazer')}</span>
              </div>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.section>
      </div>

    </div>
  );
};

export default AboutPage;
