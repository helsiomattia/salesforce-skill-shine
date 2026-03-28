import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground md:flex">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:bg-muted"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="text-right">
              <p className="text-sm font-semibold">Salesforce Skill Shine</p>
              <p className="text-xs text-muted-foreground">Menu e navegação</p>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
