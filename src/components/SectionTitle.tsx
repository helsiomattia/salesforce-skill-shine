import type { ReactNode } from "react";

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
}

const SectionTitle = ({ icon, title }: SectionTitleProps) => (
  <div className="mb-5 flex items-center gap-2">
    <span className="text-secondary">{icon}</span>
    <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
    <div className="ml-2 h-px flex-1 bg-border" />
  </div>
);

export default SectionTitle;
