import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "block rounded-lg px-4 py-3 text-sm font-medium transition-all",
      isActive
        ? "bg-primary text-primary-foreground shadow"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
    ].join(" ");

  return (
    <aside className="w-full border-b border-border bg-card p-6 md:min-h-screen md:w-72 md:border-b-0 md:border-r">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Salesforce Skill Shine</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Carreira, posicionamento e evolução profissional
        </p>
      </div>

      <nav className="space-y-2">
        <NavLink to="/" end className={getLinkClass}>
          Home
        </NavLink>

        <NavLink to="/assessment" className={getLinkClass}>
          Avaliação de Competências
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
