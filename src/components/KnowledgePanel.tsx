import { KnowledgeGroup } from "@/data/competencies/types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getLocalizedString, getLocalizedStringArray } from "@/utils/i18nHelper";

interface KnowledgePanelProps {
  groups: KnowledgeGroup[];
}

const KnowledgePanel = ({ groups }: KnowledgePanelProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((group, groupIdx) => (
        <motion.div
          key={groupIdx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: groupIdx * 0.05 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="mb-4 text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
            {getLocalizedString(group.title, lang)}
          </h3>
          <ul className="space-y-2">
            {getLocalizedStringArray(group.items, lang).map((item, itemIdx) => (
              <li key={itemIdx} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default KnowledgePanel;
