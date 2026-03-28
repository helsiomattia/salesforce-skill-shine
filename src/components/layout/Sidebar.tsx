import { NavLink, useLocation } from "react-router-dom";
import { Home, ClipboardCheck, X, Sparkles, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type SidebarProps = {
  open: boolean;
  collapsed: boolean;
  currentRouteLabel: string;
  onClose: () => void;
  onToggleCollapse: () => void;
};

const navItems = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/assessment", label: "Avaliação de Competências", icon: ClipboardCheck },
];

const Sidebar = ({
  open,
  collapsed,
  currentRouteLabel,
  onClose,
  onToggleCollapse,
}: SidebarProps) => {
  const location = useLocation();

  const linkClass = (isActive: boolean) =>
    [
      "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",
      isActive
        ? "bg-primary text-primary-foreground shadow-sm"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
      collapsed ? "justify-center px-3" : "",
    ].join(" ");

  const sidebarWidthClass = collapsed ? "md:w-24" : "md:w-80";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Fechar menu"
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <motion.aside
        layout
        initial={false}
        animate={{
          x: open ? 0 : -320,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className={[
          "fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 md:static md:z-auto md:translate-x-0",
          sidebarWidthClass,
        ].join(" ")}
      >
        <div className="flex h-full flex-col p-4 md:p-5">
          <div className="mb-6 flex items-start justify-between gap-3">
            <motion.div layout className={collapsed ? "w-full" : ""}>
              <div
                className={[
                  "mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary",
                  collapsed ? "mx-auto" : "",
                ].join(" ")}
              >
                <Sparkles className="h-5 w-5" />
              </div>

              <AnimatePresence mode="wait">
                {!collapsed && (
                  <motion.div
                    key="sidebar-title"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <h1 className="text-xl font-bold tracking-tight">Salesforce Skill Shine</h1>
                    <p className="mt-2 max-w-[220px] text-sm leading-6 text-muted-foreground">
                      Carreira, posicionamento e evolução profissional
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={collapsed ? "Expandir menu" : "Colapsar menu"}
                onClick={onToggleCollapse}
                className="hidden h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition hover:bg-muted hover:text-foreground md:inline-flex"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition hover:bg-muted hover:text-foreground md:hidden"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.to);

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  className={linkClass(isActive)}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0" />

                  <AnimatePresence mode="wait">
                    {!collapsed && (
                      <motion.span
                        key={`${item.label}-label`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.16 }}
                        className="truncate"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-2xl bg-primary"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.div
                key="sidebar-status"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18 }}
                className="mt-8 rounded-2xl border border-border bg-background/70 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Status do projeto
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  Em evolução contínua, com foco em UX, avaliação de competências e
                  posicionamento profissional.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto pt-6">
            <AnimatePresence mode="wait">
              {!collapsed ? (
                <motion.div
                  key="sidebar-footer-expanded"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent p-4"
                >
                  <p className="text-sm font-medium text-foreground">Helsio Mattia</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Salesforce • CRM • Carreira • Evolução técnica
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="sidebar-footer-collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-center"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent text-sm font-semibold text-foreground"
                    title={currentRouteLabel}
                  >
                    HM
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
