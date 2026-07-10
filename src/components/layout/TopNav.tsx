import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import LanguageSwitcher from "../LanguageSwitcher";

type TopNavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const getNavItems = (t: TFunction): TopNavItem[] => [
  { to: "/", label: t('nav.home'), end: true },
  { to: "/assessment", label: t('nav.assessment') },
  { to: "/guide", label: t('nav.guide') },
  { to: "/contact", label: t('nav.contact') },
];

const TopNav = () => {
  const { t } = useTranslation();
  const navItems = getNavItems(t);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/60 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-6 text-sm text-slate-600">
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              viewTransition
              className={({ isActive }) =>
                `transition-colors hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : "text-slate-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side - Language Switcher */}
        <div className="hidden md:flex items-center">
          <LanguageSwitcher variant="light" showLabels={false} />
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center justify-between w-full">
          <div className="font-semibold text-slate-800">{t("nav.menu")}</div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 transition hover:text-blue-600"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="absolute left-0 top-14 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 md:hidden pb-4 shadow-md">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-4 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                viewTransition
                className={({ isActive }) =>
                  `block transition-colors hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : "text-slate-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-4 pt-4 border-t border-slate-100">
             <LanguageSwitcher variant="light" showLabels={true} />
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNav;
