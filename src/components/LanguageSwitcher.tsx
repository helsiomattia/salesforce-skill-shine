import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
  showLabels?: boolean;
}

const LanguageSwitcher = ({ variant = 'dark', showLabels = true }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isDark = variant === 'dark';
  
  const baseColor = isDark ? 'text-primary-foreground/60' : 'text-slate-500';
  const activeColor = isDark ? 'text-white font-bold' : 'text-slate-900 font-bold';
  const hoverColor = isDark ? 'hover:text-white' : 'hover:text-slate-900';
  const dividerColor = isDark ? 'text-primary-foreground/20' : 'text-slate-200';

  return (
    <div className={`flex items-center ${showLabels ? 'gap-3' : 'gap-1'} text-sm ${baseColor} font-medium`}>
      {showLabels && <Globe className="h-4 w-4" />}
      <button 
        onClick={() => changeLanguage('pt')} 
        className={`transition-colors ${hoverColor} ${i18n.resolvedLanguage === 'pt' ? activeColor : ''}`}
      >
        PT
      </button>
      <span className={dividerColor}>|</span>
      <button 
        onClick={() => changeLanguage('en')} 
        className={`transition-colors ${hoverColor} ${i18n.resolvedLanguage === 'en' ? activeColor : ''}`}
      >
        EN
      </button>
      <span className={dividerColor}>|</span>
      <button 
        onClick={() => changeLanguage('es')} 
        className={`transition-colors ${hoverColor} ${i18n.resolvedLanguage === 'es' ? activeColor : ''}`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
