import { ExternalLink, Github, Globe, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import JsonLd from "@/components/JsonLd";
import { authorJsonLd } from "@/lib/site";

const channels = [
  { href: "https://github.com/helsiomattia", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/helsiomattia", label: "LinkedIn", icon: Linkedin },
  { href: "https://trailblazer.me/id/helsiomattia", label: "Trailblazer", icon: Globe },
  { href: "https://helsiomattia.github.io/crm-specialist", label: "Portfolio", icon: Globe },
  { href: "mailto:helsiomattia@gmail.com", label: "E-mail", icon: Mail },
];

const AboutPage = () => {
  const { t } = useTranslation();
  const paragraphs = t("about.body", { returnObjects: true }) as string[];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 lg:px-6">
      <JsonLd data={{ "@context": "https://schema.org", ...authorJsonLd }} />
      <section className="rounded-feature border border-slate-200 bg-white px-6 py-10 shadow-sm md:px-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <ShieldCheck className="h-4 w-4" />
            {t("about.badge")}
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">{t("about.title")}</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">{t("about.subtitle")}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 text-slate-600">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-7">{paragraph}</p>
              ))}
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-base font-bold text-slate-900">{t("about.channelsTitle")}</h2>
              <address className="mt-4 not-italic">
                <ul className="space-y-3">
                  {channels.map((channel) => {
                    const Icon = channel.icon;
                    const isMail = channel.href.startsWith("mailto:");

                    return (
                      <li key={channel.href}>
                        <a
                          href={channel.href}
                          target={isMail ? undefined : "_blank"}
                          rel={isMail ? undefined : "me noopener noreferrer"}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {channel.label}
                          {!isMail && <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </address>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
