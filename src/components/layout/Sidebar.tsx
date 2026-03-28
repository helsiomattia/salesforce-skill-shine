import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  User,
  ClipboardCheck,
  X,
  Sparkles,
  PanelLeftClose,
  PanelLeftOpen,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  currentRouteLabel,
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
          type="button"
          aria-label="Fechar menu"
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 border-r border-white/10 bg-slate-950 text-slate-100 transition-all duration-300",
          "w-72 md:static md:z-auto",
          collapsed ? "md:w-24" : "md:w-80",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        <div className="flex h-full flex-col p-4 md:p-5">
          <div className="mb-6 flex items-start justify-between gap-3">
            <div className={collapsed ? "w-full" : ""}>
              <div
                className={[
                  "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]",
                  collapsed ? "mx-auto" : "",
                ].join(" ")}
              >
                <Sparkles className="h-5 w-5" />
              </div>

              <AnimatePresence mode="wait">
                {!collapsed && (
                  <motion.div
                    key="sidebar-brand"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="flex items-center gap-2">
                      <h1 className="text-xl font-bold tracking-tight text-white">
                        Skill Shine
                      </h1>
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-300">
                        Beta
                      </span>
                    </div>

                    <p className="mt-2 max-w-[220px] text-sm leading-6 text-slate-400">
                      Plataforma pessoal com visual de produto para carreira,
                      avaliação de competências e evolução profissional.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={collapsed ? "Expandir menu" : "Colapsar menu"}
                onClick={onToggleCollapse}
                className="hidden h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white md:inline-flex"
              >
                {collapsed ? (
                  <PanelLeftOpen className="h-5 w-5" />
                ) : (
                  <PanelLeftClose className="h-5 w-5" />
                )}
              </button>

              <button
                type="button"
                aria-label="Fechar menu"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white md:hidden"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.div
                key="sidebar-highlight"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="mb-6 rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-900 p-4"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  Produto em evolução
                </div>

                <h2 className="text-sm font-semibold text-white">
                  Dashboard de carreira Salesforce
                </h2>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Organizando posicionamento profissional, competências e
                  evolução em uma experiência com cara de SaaS.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isItemActive(item.to);

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  title={collapsed ? item.label : undefined}
                  className={[
                    "group relative flex items-center gap-3 overflow-hidden rounded-2xl transition-all duration-200",
                    collapsed ? "justify-center px-3 py-3.5" : "px-4 py-3.5",
                    active
                      ? "bg-cyan-400 text-slate-950 shadow-[0_10px_30px_rgba(34,211,238,0.18)]"
                      : "text-slate-400 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4 shrink-0" />

                  <AnimatePresence mode="wait">
                    {!collapsed && (
                      <motion.div
                        key={`${item.label}-content`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.16 }}
                        className="min-w-0"
                      >
                        <p className="truncate text-sm font-medium">{item.label}</p>
                        <p
                          className={[
                            "truncate text-xs",
                            active ? "text-slate-900/70" : "text-slate-500 group-hover:text-slate-300",
                          ].join(" ")}
                        >
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-6">
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.div
                  key="sidebar-status"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Rota atual
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">{currentRouteLabel}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Navegação entre landing, trajetória profissional e avaliação.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-auto pt-6">
            <AnimatePresence mode="wait">
              {!collapsed ? (
                <motion.div
                  key="sidebar-footer-expanded"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-4"
                >
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
                    <p className="text-sm font-medium text-white">Helsio Mattia</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Salesforce • CRM • Carreira • Evolução técnica
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Links externos
                    </p>

                    <div className="space-y-2">
                      {externalLinks.map((link) => {
                        const Icon = link.icon;

                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="h-4 w-4" />
                              <span>{link.label}</span>
                            </div>

                            {!link.href.startsWith("mailto:") && (
                              <ExternalLink className="h-3.5 w-3.5 text-slate-500 transition group-hover:text-slate-300" />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="sidebar-footer-collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white"
                    title={currentRouteLabel}
                  >
                    HM
                  </div>

                  <a
                    href="https://github.com/helsiomattia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>

                  <a
                    href="https://linkedin.com/in/helsiomattia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                  <a
                    href="mailto:helsiomattia@gmail.com"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white"
                    title="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
