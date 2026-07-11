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
  const baseUrl = import.meta.env.BASE_URL;
  
  const baseColor = isDark ? 'text-slate-300' : 'text-slate-600';
  const activeColor = isDark ? 'bg-white/20' : 'bg-slate-200 shadow-sm';
  const hoverColor = isDark ? 'hover:bg-white/10' : 'hover:bg-slate-100';

  return (
    <div className={`flex items-center gap-1.5 text-sm ${baseColor} font-medium`}>
      {showLabels && <Globe className="h-4 w-4 mr-1" />}
      {!showLabels && <Globe className="h-4 w-4 mr-1 opacity-70" />}
      <button 
        onClick={() => changeLanguage('pt')} 
        title="Português"
        className={`flex items-center justify-center h-7 w-7 rounded-full transition-all text-base ${hoverColor} ${i18n.resolvedLanguage === 'pt' ? activeColor : ''}`}
      >
        <img src={`${baseUrl}flags/br.svg`} alt="PT" className="h-4 w-4" />
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        title="English"
        className={`flex items-center justify-center h-7 w-7 rounded-full transition-all text-base ${hoverColor} ${i18n.resolvedLanguage === 'en' ? activeColor : ''}`}
      >
        <img src={`${baseUrl}flags/us.svg`} alt="EN" className="h-4 w-4" />
      </button>
      <button 
        onClick={() => changeLanguage('es')} 
        title="Español"
        className={`flex items-center justify-center h-7 w-7 rounded-full transition-all text-base ${hoverColor} ${i18n.resolvedLanguage === 'es' ? activeColor : ''}`}
      >
        <img src={`${baseUrl}flags/es.svg`} alt="ES" className="h-4 w-4" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
