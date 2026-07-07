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
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-600 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-6">
        <div className="space-y-3">
          <p className="text-base font-bold text-slate-900">Skill Shine</p>
          <p className="max-w-xl leading-6">
            {t('footer.description')}
          </p>
          <p className="text-xs text-slate-500">
            {t('footer.updated')}
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-slate-900">{t('footer.transparency')}</p>
          <nav className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to} viewTransition className="transition hover:text-blue-600">
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-slate-900">{t('footer.authorChannels')}</p>
          <div className="flex flex-col gap-2">
            {externalLinks.map((link) => {
              const Icon = link.icon;
              const isMail = link.href.startsWith("mailto:");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noreferrer noopener"}
                  className="inline-flex items-center gap-2 transition hover:text-blue-600"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                  {!isMail && <ExternalLink className="h-3.5 w-3.5" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
