import { NavLink } from "react-router-dom";
import { Home, ClipboardCheck, X, Sparkles } from "lucide-react";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
      isActive
        ? "bg-primary text-primary-foreground shadow-sm"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
    ].join(" ");

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Fechar menu"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 transition-transform duration-300 md:static md:z-auto md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-full flex-col p-5">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>

              <h1 className="text-xl font-bold tracking-tight">Salesforce Skill Shine</h1>
              <p className="mt-2 max-w-[210px] text-sm leading-6 text-muted-foreground">
                Carreira, posicionamento e evolução profissional
              </p>
            </div>

            <button
              type="button"
              aria-label="Fechar menu"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground md:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-2">
            <NavLink to="/" end className={linkClass} onClick={onClose}>
              <Home className="h-4 w-4 shrink-0" />
              <span>Home</span>
            </NavLink>

            <NavLink to="/assessment" className={linkClass} onClick={onClose}>
              <ClipboardCheck className="h-4 w-4 shrink-0" />
              <span>Avaliação de Competências</span>
            </NavLink>
          </nav>

          <div className="mt-8 rounded-2xl border border-border bg-background/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Status do projeto
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground">
              Em evolução contínua, com foco em UX, avaliação de competências e
              posicionamento profissional.
            </p>
          </div>

          <div className="mt-auto pt-6">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent p-4">
              <p className="text-sm font-medium text-foreground">Helsio Mattia</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Salesforce • CRM • Carreira • Evolução técnica
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
