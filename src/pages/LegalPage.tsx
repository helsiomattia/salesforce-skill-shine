import { Link } from "react-router-dom";
import { ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  pageKey: "privacy" | "terms" | "editorial";
};

const salesforceReferences = [
  { label: "Salesforce Help", href: "https://help.salesforce.com/" },
  { label: "Trailhead", href: "https://trailhead.salesforce.com/" },
  { label: "Salesforce Architects", href: "https://architect.salesforce.com/" },
  { label: "Salesforce Trust", href: "https://trust.salesforce.com/" },
];

const LegalPage = ({ pageKey }: LegalPageProps) => {
  const { t } = useTranslation();
  const sections = t(`legal.pages.${pageKey}.sections`, { returnObjects: true }) as LegalSection[];

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6 lg:px-6">
      <section className="relative overflow-hidden rounded-panel border border-slate-200 bg-white px-6 py-10 shadow-panel md:px-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-blob-sm" />
        <div className="relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <ShieldCheck className="h-4 w-4" />
            {t('legal.common.badge')}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">{t(`legal.pages.${pageKey}.title`)}</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">{t(`legal.pages.${pageKey}.description`)}</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-500">
            <span>{t('legal.common.published')}: {t('legal.common.date')}</span>
            <span>{t('legal.common.updated')}: {t('legal.common.date')}</span>
            <span>{t('legal.common.author')}: Helsio Mattia</span>
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-panel border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        {sections.map((section) => (
          <article key={section.title} className="space-y-3 border-b border-slate-100 pb-5 last:border-0 last:pb-0">
            <div className="flex items-center gap-3 text-blue-600">
              <FileText className="h-5 w-5" />
              <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
            </div>
            <div className="space-y-3 text-base leading-7 text-slate-600">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-panel border border-slate-200 bg-slate-900 p-6 text-white md:p-10">
        <h2 className="text-2xl font-bold">{t('legal.references.title')}</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          {t('legal.references.desc')}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {salesforceReferences.map((reference) => (
            <a
              key={reference.href}
              href={reference.href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 font-semibold text-slate-100 transition hover:bg-white/10"
            >
              {reference.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </section>

      <div className="text-center text-sm text-slate-500">
        <Link to="/" viewTransition className="font-semibold text-blue-600 hover:text-blue-700">
          {t('legal.common.backHome')}
        </Link>
      </div>
    </div>
  );
};

export const PrivacyPolicyPage = () => (
  <LegalPage pageKey="privacy" />
);

export const TermsPage = () => (
  <LegalPage pageKey="terms" />
);

export const EditorialPolicyPage = () => (
  <LegalPage pageKey="editorial" />
);
