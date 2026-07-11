import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getLocalizedString } from "@/utils/i18nHelper";
import { MessageCircleQuestion, ChevronDown } from "lucide-react";
import { InterviewQuestion } from "@/data/competencies/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface InterviewPanelProps {
  questions: InterviewQuestion[];
}

const InterviewPanel = ({ questions }: InterviewPanelProps) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.resolvedLanguage || "pt";

  if (!questions || questions.length === 0) {
    return (
      <div className="rounded-panel border-2 border-dashed border-slate-200 bg-white p-16 text-center">
        <MessageCircleQuestion className="mx-auto h-12 w-12 text-slate-300 mb-4" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">{t('careerPage.comingSoon.title')}</h3>
        <p className="text-slate-500 max-w-sm mx-auto">
          {t('careerPage.comingSoon.desc')}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 shadow-sm border border-amber-100">
          <MessageCircleQuestion className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">
          {t('careerPage.tabs.interviews')}
        </h2>
        <p className="mx-auto max-w-3xl text-slate-600 leading-relaxed text-lg">
          {t('careerPage.tabs.interviewsDesc')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto max-w-4xl"
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          {questions.map((q, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm data-[state=open]:border-amber-200 data-[state=open]:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left font-bold text-slate-800 hover:text-amber-600 data-[state=open]:text-amber-600 transition-colors group">
                <div className="flex gap-4 items-start w-full pr-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 text-xs font-black group-data-[state=open]:bg-amber-100 group-data-[state=open]:text-amber-700 transition-colors">
                    {idx + 1}
                  </span>
                  <span className="leading-snug pt-0.5">
                    {getLocalizedString(q.question, lang)}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pt-2">
                <div className="ml-11 rounded-xl bg-slate-50 p-5 border border-slate-100">
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {getLocalizedString(q.answer, lang)}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default InterviewPanel;
