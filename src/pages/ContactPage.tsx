import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import {
  Mail,
  Linkedin,
  MessageSquare,
  Send,
  Calendar,
  Users,
  Target,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Compass
} from "lucide-react";

const ContactPage = () => {
  const { t } = useTranslation();
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const contactMethods = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: "helsiomattia@gmail.com",
      href: "mailto:helsiomattia@gmail.com",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: "in/helsiomattia",
      href: "https://linkedin.com/in/helsiomattia",
      color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: t('contactPage.strategic'),
      href: "#", // Add actual link if available
      color: "bg-green-50 text-green-600 border-green-100",
    },
  ];

  const services = [
    {
      title: t('contactPage.services.assessment.title'),
      description: t('contactPage.services.assessment.desc'),
      icon: Target,
      features: [
        t('contactPage.services.assessment.f1'),
        t('contactPage.services.assessment.f2'),
        t('contactPage.services.assessment.f3'),
        t('contactPage.services.assessment.f4')
      ]
    },
    {
      title: t('contactPage.services.mentoring.title'),
      description: t('contactPage.services.mentoring.desc'),
      icon: Compass,
      features: [
        t('contactPage.services.mentoring.f1'),
        t('contactPage.services.mentoring.f2'),
        t('contactPage.services.mentoring.f3'),
        t('contactPage.services.mentoring.f4'),
        t('contactPage.services.mentoring.f5')
      ],
      disclaimer: t('contactPage.services.mentoring.disclaimer')
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-8 space-y-10">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
        >
          <Sparkles className="h-4 w-4" />
          {t('contactPage.badge')}
        </motion.div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          <Trans i18nKey="contactPage.title" components={{ 1: <span className="text-blue-600" /> }} />
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
          {t('contactPage.subtitle')}
        </p>
      </section>
      {/* Services Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{t('contactPage.servicesTitle')}</h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            {t('contactPage.servicesSubtitle')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              className="rounded-[40px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white mb-6">
                <service.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Disclaimer específico do serviço, se existir */}
              {service.disclaimer && (
                <p className="mt-6 text-xs text-slate-400 border-t pt-4 border-slate-100">
                  {service.disclaimer}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>



      {/* CTA / Final Section with Contact Links */}
      <motion.section
        {...fadeUp}
        className="relative overflow-hidden rounded-[40px] bg-slate-900 px-6 py-12 text-white text-center md:px-12 md:py-16"
      >
        <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-5xl max-w-3xl mx-auto leading-tight">
              {t('contactPage.ctaTitle')}
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              {t('contactPage.ctaSubtitle')}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-800/50 p-6 transition-all hover:border-blue-500/50 hover:bg-slate-800"
              >
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl border ${method.color.replace('bg-blue-50', 'bg-blue-500/10').replace('bg-cyan-50', 'bg-cyan-500/10').replace('bg-green-50', 'bg-green-500/10')}`}>
                  <method.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{method.label}</span>
                <span className="mt-1 text-sm font-semibold text-slate-200">{method.value}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-700 shadow-xl shadow-blue-600/20">
              <Calendar className="h-5 w-5" />
              {t('contactPage.schedule')}
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-4 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-400" />
              {t('contactPage.response')}
            </span>
            <span className="flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-400" />
              {t('contactPage.strategic')}
            </span>
          </div>
        </div>
      </motion.section>

      {/* Nota de rodapé global (isenção adicional) */}
      <motion.p
        {...fadeUp}
        className="text-justify text-xs text-slate-400 max-w-3xl mx-auto border-t border-slate-100 pt-8"
      >
        {t('contactPage.disclaimer')}
      </motion.p>

    </div>
  );
};

export default ContactPage;