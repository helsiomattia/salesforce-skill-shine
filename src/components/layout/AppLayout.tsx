import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, Home, ClipboardCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

const routeMeta = [
  { match: "/", label: "Home", icon: Home },
  { match: "/about", label: "Sobre mim", icon: Home },
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
  <div className="min-h-screen bg-slate-50">
    <Sidebar
      open={open}
      collapsed={collapsed}
      currentRouteLabel={currentRoute.label}
      onClose={() => setOpen(false)}
      onToggleCollapse={() => setCollapsed((prev) => !prev)}
    />

    <div
      className={`transition-all duration-300 ${
        collapsed ? "lg:pl-[88px]" : "lg:pl-[320px]"
      }`}
    >
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="flex items-center gap-3 px-4 py-4 lg:px-6">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div>
            <p className="text-sm text-slate-500">Salesforce Skill Shine</p>
            <h1 className="text-base font-semibold text-slate-900">
              {currentRoute.label}
            </h1>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 lg:px-6">
        <Outlet />
      </main>
    </div>
  </div>
);

export default AppLayout;
