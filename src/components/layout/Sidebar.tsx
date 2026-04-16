import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  User,
  ClipboardCheck,
  X,
  PanelLeftClose,
  PanelLeftOpen,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  LayoutDashboard,
} from "lucide-react";

type SidebarProps = {
  open: boolean;
  collapsed: boolean;
  currentRouteLabel: string;
  onClose: () => void;
  onToggleCollapse: () => void;
};

const navItems = [
  {
    to: "/",
    label: "Home",
    description: "Landing e visão do projeto",
    icon: Home,
    end: true,
  },
  {
    to: "/about",
    label: "Sobre mim",
    description: "Trajetória e experiência",
    icon: User,
  },
  {
    to: "/assessment",
    label: "Avaliação",
    description: "Competências e evolução",
    icon: ClipboardCheck,
  },
];

const externalLinks = [
  {
    href: "https://github.com/helsiomattia",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/helsiomattia",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:helsiomattia@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

const Sidebar = ({
  open,
  collapsed,
  onClose,
  onToggleCollapse,
}: SidebarProps) => {
  const location = useLocation();

  const isItemActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <>
      {open && (
        <button
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen border-r border-slate-200 bg-white/95 backdrop-blur
          transition-all duration-300
          ${collapsed ? "w-[88px]" : "w-[320px]"}
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:sticky lg:translate-x-0
        `}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
            {!collapsed && (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <LayoutDashboard className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Salesforce Skill Shine
                  </p>
                  <p className="text-xs text-slate-500">
                    Dashboard de carreira
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <button
                onClick={onToggleCollapse}
                className="hidden rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 lg:inline-flex"
                type="button"
              >
                {collapsed ? (
                  <PanelLeftOpen className="h-4 w-4" />
                ) : (
                  <PanelLeftClose className="h-4 w-4" />
                )}
              </button>

              <button
                onClick={onClose}
                className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 lg:hidden"
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4">
            {!collapsed && (
              <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <LayoutDashboard className="h-4 w-4 text-slate-700" />
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Navegação
                  </span>
                </div>

                <h2 className="text-sm font-semibold text-slate-900">
                  Dashboard de carreira Salesforce
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Organizando posicionamento profissional, competências e
                  evolução em uma experiência mais limpa e objetiva.
                </p>
              </div>
            )}

            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isItemActive(item.to);

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={`
                      flex items-center gap-3 rounded-2xl border px-3 py-3 transition-all
                      ${
                        active
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50"
                      }
                    `}
                  >
                    <Icon className="h-5 w-5 shrink-0" />

                    {!collapsed && (
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{item.label}</p>
                        <p
                          className={`text-xs ${
                            active ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-slate-200 px-3 py-4">
            {!collapsed ? (
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Helsio Mattia
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Salesforce • CRM • Carreira • Evolução técnica
                </p>

                <div className="mt-4 space-y-2">
                  {externalLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={
                          link.href.startsWith("mailto:")
                            ? undefined
                            : "noreferrer noopener"
                        }
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </span>

                        {!link.href.startsWith("mailto:") && (
                          <ExternalLink className="h-4 w-4 text-slate-400" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <a href="https://github.com/helsiomattia" target="_blank" rel="noreferrer noopener">
                  <Github className="h-5 w-5 text-slate-600" />
                </a>
                <a href="https://linkedin.com/in/helsiomattia" target="_blank" rel="noreferrer noopener">
                  <Linkedin className="h-5 w-5 text-slate-600" />
                </a>
                <a href="mailto:helsiomattia@gmail.com">
                  <Mail className="h-5 w-5 text-slate-600" />
                </a>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
