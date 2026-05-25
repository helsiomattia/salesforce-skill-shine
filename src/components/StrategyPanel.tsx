import { motion } from "framer-motion";
import { Target, TrendingUp, Compass, Key } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalizedString } from "@/utils/i18nHelper";
import { StrategyContent } from "@/data/competencies/types";

interface StrategyPanelProps {
  strategy: StrategyContent;
}

const StrategyPanel = ({ strategy }: StrategyPanelProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';

  return (
    <div className="space-y-8">
      {/* Intro Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <p className="mx-auto max-w-3xl text-slate-600 leading-relaxed text-lg">
          {getLocalizedString(strategy.roleConnection, lang)}
        </p>
      </motion.div>

      {/* Pillars Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 px-2">
          <Key className="h-5 w-5 text-blue-600" />
          <h3 className="text-xl font-bold text-slate-900">{t('careerPage.strategy.title')}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategy.pillars.map((pillar, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md hover:shadow-blue-900/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl group-hover:bg-blue-100 transition-colors">
                {pillar.icon}
              </div>
              <h4 className="mb-2 text-lg font-bold text-slate-900">{getLocalizedString(pillar.title, lang)}</h4>
              <p className="mb-4 text-sm text-slate-500">{getLocalizedString(pillar.description, lang)}</p>
              
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{t('careerPage.strategy.impact')}</p>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {getLocalizedString(pillar.roleImpact, lang)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default StrategyPanel;
