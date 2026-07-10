import { Link } from "react-router-dom";
import { ExternalLink, Github, Globe, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const legalLinks = [
  { to: "/privacy", labelKey: "footer.legal.privacy" },
  { to: "/terms", labelKey: "footer.legal.terms" },
  { to: "/editorial-policy", labelKey: "footer.legal.editorial" },
];

const externalLinks = [
  { href: "https://github.com/helsiomattia", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/helsiomattia", label: "LinkedIn", icon: Linkedin },
  { href: "https://trailblazer.me/id/helsiomattia", label: "Trailblazer", icon: Globe },
  { href: "mailto:helsiomattia@gmail.com", label: "E-mail", icon: Mail },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto max-w-[1200px] px-4 py-10 text-sm text-slate-600 lg:px-6">
        <div className="grid gap-8 md:grid-cols-[1.35fr_0.85fr_0.9fr]">
          <section className="space-y-3" aria-labelledby="footer-project-title">
            <div>
              <p id="footer-project-title" className="text-base font-bold text-slate-900">Skill Shine</p>
              <p className="mt-2 max-w-xl leading-6">{t("footer.description")}</p>
            </div>
            <p className="max-w-xl text-xs leading-5 text-slate-500">{t("footer.independent")}</p>
            <Link to="/about" viewTransition className="inline-flex text-xs font-semibold text-blue-600 transition hover:text-blue-700">
              {t("footer.aboutAuthor")}
            </Link>
          </section>

          <nav className="space-y-3" aria-labelledby="footer-transparency-title">
            <p id="footer-transparency-title" className="font-semibold text-slate-900">{t("footer.transparency")}</p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} viewTransition className="transition hover:text-blue-600">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <nav className="space-y-3" aria-labelledby="footer-author-title">
              <p id="footer-author-title" className="font-semibold text-slate-900">{t("footer.authorChannels")}</p>
              <ul className="space-y-2">
                {externalLinks.map((link) => {
                  const Icon = link.icon;
                  const isMail = link.href.startsWith("mailto:");

                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={isMail ? undefined : "_blank"}
                        rel={isMail ? undefined : "me noopener noreferrer"}
                        className="inline-flex items-center gap-2 transition hover:text-blue-600"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span>{link.label}</span>
                        {!isMail && <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </address>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>{t("footer.rights")}</p>
          <p>{t("footer.published")}</p>
          <p>{t("footer.lastUpdated")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
