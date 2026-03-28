import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, Home, ClipboardCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

const routeMeta = [
  { match: "/", label: "Home", icon: Home },
  { match: "/assessment", label: "Avaliação de Competências", icon: ClipboardCheck },
  { match: "/admin", label: "Administrator", icon: ClipboardCheck },
  { match: "/developer", label: "Developer", icon: ClipboardCheck },
  { match: "/consultant", label: "Consultant", icon: ClipboardCheck },
  { match: "/architect", label: "Architect", icon: ClipboardCheck },
];

const AppLayout = () => {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const currentRoute = useMemo(() => {
    if (location.pathname === "/") return routeMeta[0];

    return (
      routeMeta.find(
        (route) => route.match !== "/" && location.pathname.startsWith(route.match)
      ) || routeMeta[0]
    );
  }, [location.pathname]);

  const CurrentIcon = currentRoute.icon;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:flex">
      <Sidebar
        open={open}
        collapsed={collapsed}
        currentRouteLabel={currentRoute.label}
        onClose={() => setOpen(false)}
        onToggleCollapse={() => setCollapsed((prev) => !prev)}
      />

      <motion.div
        layout
        className="flex min-h-screen flex-1 flex-col"
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      >
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50"
            >
              <Menu className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoute.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-2 text-right"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700">
                  <CurrentIcon className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">{currentRoute.label}</p>
                  <p className="text-xs text-slate-500">Salesforce Skill Shine</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </header>

        <main className="flex-1 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.8),rgba(248,250,252,1))] p-4 md:p-8 lg:p-10">
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
};

export default AppLayout;
