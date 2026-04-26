import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLocalizedString } from "@/utils/i18nHelper";
interface PathItem {
  id: string;
  label: string;
}

interface CareerPathProps {
  items: PathItem[];
  currentId: string;
  onSelect?: (id: string) => void;
}

const CareerPath = ({ items, currentId, onSelect }: CareerPathProps) => {
  return (
    <div className="w-full overflow-x-auto pb-1 scrollbar-hide">
      <div className="flex items-center min-w-max px-1 h-12">
        {items.map((item, index) => {
          const isCurrent = item.id === currentId;

          return (
            <button
              key={item.id}
              onClick={() => onSelect?.(item.id)}
              className={cn(
                "relative flex h-full items-center pl-8 pr-4 transition-all duration-300 group outline-none",
                index === 0 && "pl-5 rounded-l-full",
                index === items.length - 1 && "pr-6 rounded-r-full",
                index !== 0 && "-ml-4", // Overlap
                isCurrent 
                  ? "bg-blue-600 text-white z-[20] shadow-[0_0_20px_rgba(37,99,235,0.3)]" 
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 z-[5]"
              )}
              style={{
                clipPath: index === 0 
                  ? "polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)"
                  : index === items.length - 1
                  ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 16px 50%)"
                  : "polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%, 16px 50%)",
              }}
            >
              <div className={cn(
                "flex items-center gap-2 font-bold text-sm tracking-wide whitespace-nowrap transition-transform duration-300",
                isCurrent ? "scale-105" : "group-hover:translate-x-1"
              )}>
                <span>{item.label}</span>
              </div>
              
              {isCurrent && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CareerPath;
