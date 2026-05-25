import { cn } from "@/lib/utils";
import {
  Code2,
  Users,
  TrendingUp,
  Layers,
  Wrench,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

interface PathItem {
  id: string;
  label: string;
}

interface CareerPathProps {
  items: PathItem[];
  currentId: string;
  onSelect?: (id: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  hard: Code2,
  soft: Users,
  strategy: TrendingUp,
  evolution: Layers,
  knowledge: Wrench,
  finish: CheckCircle2,
};

const CareerPath = ({ items, currentId, onSelect }: CareerPathProps) => {
  return (
    <div className="flex justify-center border-b border-slate-200/80 pb-2">
      <div className="flex gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
        {items.map((item) => {
          const isActive = item.id === currentId;
          const Icon: LucideIcon = iconMap[item.id] ?? Code2;

          return (
            <button
              key={item.id}
              onClick={() => onSelect?.(item.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap outline-none",
                isActive
                  ? "bg-white text-blue-600 shadow-sm border border-slate-200/50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CareerPath;
