import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getLocalizedString } from "@/utils/i18nHelper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, LayoutDashboard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryCard from "@/components/CategoryCard";
import ResultsPanel from "@/components/ResultsPanel";
import { competencyCategories } from "@/data/competencies";
import KnowledgePanel from "@/components/KnowledgePanel";
import StrategyPanel from "@/components/StrategyPanel";
import EvolutionPanel from "@/components/EvolutionPanel";
import CareerPath from "@/components/CareerPath";
import FinishPanel from "@/components/FinishPanel";


interface CareerPageProps {
  categoryId: string;
}

const CareerPage = ({ categoryId }: CareerPageProps) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState("hard");
  const category = competencyCategories.find((c) => c.id === categoryId);

  const handleRate = (skillId: string, value: number) => {
    setRatings((prev) => ({ ...prev, [skillId]: value }));
  };

  if (!category) return null;

  const pathItems = [
    { id: "hard", label: t('careerPage.tabs.hard') },
    { id: "soft", label: t('careerPage.tabs.soft') },
    ...(category.strategy ? [{ id: "strategy", label: t('careerPage.tabs.strategy') }] : []),
    ...(category.evolution ? [{ id: "evolution", label: t('careerPage.tabs.evolution') }] : []),
    { id: "knowledge", label: t('careerPage.tabs.knowledge') },
    { id: "finish", label: t('careerPage.tabs.finish') },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 space-y-8">

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-slate-200/50 md:px-12 md:py-12">
        <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative z-10 space-y-6">
          <Link
            to="/assessment"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-blue-600"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
              <ArrowLeft className="h-4 w-4" />
            </div>
            {t('careerPage.back')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center gap-8"
          >
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[32px] bg-slate-50 text-5xl shadow-inner">
              {category.icon}
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-widest">
                <Sparkles className="h-3 w-3" />
                {t('careerPage.badge')}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                {getLocalizedString(category.title, lang)}
              </h1>
              <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
                {getLocalizedString(category.description, lang)}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Path Navigation */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-2 mb-2 text-slate-400">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-widest">{t('careerPage.journey')}</span>
        </div>
        <CareerPath 
          items={pathItems} 
          currentId={activeTab} 
          onSelect={setActiveTab} 
        />
      </section>

      {/* Assessment Tabs Section */}
      <section className="space-y-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">


          <div className="mt-8">
            <TabsContent value="hard" className="mt-0 outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-12 xl:col-span-8">
                  <CategoryCard category={category} ratings={ratings} onRate={handleRate} filterType="hard" />
                </div>
                <div className="lg:col-span-12 xl:col-span-4">
                  <ResultsPanel
                    ratings={ratings}
                    categories={[category]}
                    type="hard"
                    title={`📊 ${t('careerPage.tabs.hard')}`}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="soft" className="mt-0 outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-12 xl:col-span-8">
                  <CategoryCard category={category} ratings={ratings} onRate={handleRate} filterType="soft" />
                </div>
                <div className="lg:col-span-12 xl:col-span-4">
                  <ResultsPanel
                    ratings={ratings}
                    categories={[category]}
                    type="soft"
                    title={`🗣️ ${t('careerPage.tabs.soft')}`}
                  />
                </div>
              </div>
            </TabsContent>

            {category.strategy && (
              <TabsContent value="strategy" className="mt-0 outline-none focus-visible:ring-0">
                <StrategyPanel strategy={category.strategy} />
              </TabsContent>
            )}

            {category.evolution && (
              <TabsContent value="evolution" className="mt-0 outline-none focus-visible:ring-0">
                <EvolutionPanel evolution={category.evolution} />
              </TabsContent>
            )}

            <TabsContent value="knowledge" className="mt-0 outline-none focus-visible:ring-0">
              {category.knowledgeGroups ? (
                <KnowledgePanel groups={category.knowledgeGroups} />
              ) : (
                <div className="rounded-[40px] border-2 border-dashed border-slate-200 bg-white p-16 text-center">
                  <LayoutDashboard className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t('careerPage.comingSoon.title')}</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    {t('careerPage.comingSoon.desc')}
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="finish" className="mt-0 outline-none focus-visible:ring-0">
              <FinishPanel category={category} ratings={ratings} />
            </TabsContent>
          </div>
        </Tabs>


      </section>

    </div>
  );
};

export default CareerPage;
