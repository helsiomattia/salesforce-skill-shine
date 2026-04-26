import { EvolutionContent } from "@/data/competencies/types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getLocalizedString, getLocalizedStringArray } from "@/utils/i18nHelper";
import { Layers, Activity, TrendingUp, Compass, Award } from "lucide-react";

interface EvolutionPanelProps {
  evolution: EvolutionContent;
}

const EvolutionPanel = ({ evolution }: EvolutionPanelProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stageIcons = [Layers, Activity, TrendingUp, Compass, Award];


  return (
    <div className="space-y-12 pb-8">
      {/* Intro Section */}
      <motion.div {...fadeUp} className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">{t('careerPage.evolution.title')}</h2>
        <p className="mx-auto max-w-3xl text-slate-600 leading-relaxed text-lg">
          {getLocalizedString(evolution.intro, lang)}
        </p>
      </motion.div>

      {/* Stages Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-[40px] border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-8">{t('careerPage.evolution.maturityStages')}</h3>
        <div className="space-y-6 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
          {evolution.stages.map((stage, idx) => {
            const Icon = stageIcons[idx % stageIcons.length];
            return (
              <div key={idx} className="relative flex gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 z-10 border-4 border-white">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="pt-3 pb-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{getLocalizedString(stage.title, lang)}</h4>
                  <p className="text-slate-600 leading-relaxed">{getLocalizedString(stage.description, lang)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>



      {/* Maturity Levels */}
      {evolution.maturityLevels && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 pt-4"
        >
          <div className="flex items-center gap-2 px-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900">{t('careerPage.evolution.strategicJourney')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {evolution.maturityLevels.map((level, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="flex gap-4 rounded-[24px] border border-slate-200 bg-white p-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold">
                    {idx + 1}
                  </div>
                  {idx !== evolution.maturityLevels!.length - 1 && (
                    <div className="w-px h-full bg-slate-200 mt-2" />
                  )}
                </div>
                
                <div className="space-y-3 flex-1 pb-2">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{getLocalizedString(level.level, lang)}</h4>
                    <p className="text-sm font-medium text-blue-600 flex items-center gap-1">
                      <Compass className="h-3 w-3" />
                      {getLocalizedString(level.mindset, lang)}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {getLocalizedStringArray(level.focus, lang).map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EvolutionPanel;
