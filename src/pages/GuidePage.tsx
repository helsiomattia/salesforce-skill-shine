import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getLocalizedString, getLocalizedStringArray } from "@/utils/i18nHelper";
import { defaultGuides, GuideItem } from "@/data/guideData";
import {
  getCustomGuides,
  getGuideLastTab,
  hasGuideNote,
  removeGuideNote,
  setCustomGuides as saveCustomGuides,
  setGuideLastTab,
  type GuideCategory,
} from "@/lib/guideStorage";
import {
  Search,
  Plus,
  Trash2,
  BookOpen,
  Zap,
  Code2,
  Layout,
  Shield,
  LifeBuoy,
  TrendingUp,
  Globe,
  X,
  ChevronRight,
  FileText,
  Compass,
  Wrench,
  Settings,
  Layers,
  Lock,
  Eye,
  ShieldCheck,
  Smartphone,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  LifeBuoy,
  Globe,
  Zap,
  Code2,
  Layout,
  Shield,
  BookOpen,
  Compass,
  Wrench,
  Settings,
  Layers,
  Lock,
  Eye,
  ShieldCheck,
  Smartphone,
  Megaphone
};

const getIcon = (name: string) => iconMap[name] || BookOpen;


const GuidePage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || "pt";
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<GuideCategory>(() => getGuideLastTab());

  useEffect(() => {
    setGuideLastTab(activeTab);
  }, [activeTab]);

  const tabs = [
    { id: "clouds", label: t("guide.tabClouds"), icon: Globe },
    { id: "foundations", label: t("guide.tabFoundations"), icon: BookOpen },
    { id: "admin", label: t("guide.tabAdmin"), icon: Shield },
    { id: "dev", label: t("guide.tabDev"), icon: Code2 },
    { id: "architect", label: t("guide.tabArchitect"), icon: Compass },
    { id: "tools", label: t("guide.tabTools"), icon: Wrench },
  ] as const;
  const [searchQuery, setSearchQuery] = useState("");
  const [customGuides, setCustomGuides] = useState<GuideItem[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form State for custom guides
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newCategory, setNewCategory] = useState<GuideCategory>("clouds");
  const [newTags, setNewTags] = useState("");

  // Load custom guides from localStorage on mount
  useEffect(() => {
    setCustomGuides(getCustomGuides());
  }, []);

  const handleCreateCustomGuide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const tagsArr = newTags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    const categoryIconMap: Record<string, string> = {
      clouds: "Globe",
      foundations: "BookOpen",
      admin: "Shield",
      dev: "Code2",
      architect: "Compass",
      tools: "Wrench"
    };

    const item: GuideItem = {
      id: `custom-${Date.now()}`,
      category: newCategory,
      title: { pt: newTitle, en: newTitle, es: newTitle },
      subtitle: { pt: "", en: "", es: "" },
      description: { pt: newDesc, en: newDesc, es: newDesc },
      iconName: categoryIconMap[newCategory] || "BookOpen",
      tags: {
        pt: tagsArr,
        en: tagsArr,
        es: tagsArr,
      },
      keyConcepts: [],
      bestPractices: { pt: [], en: [], es: [] },
      resources: [],
    };

    const updated = [...customGuides, item];
    setCustomGuides(updated);
    saveCustomGuides(updated);

    // Reset Form
    setNewTitle("");
    setNewDesc("");
    setNewCategory("clouds");
    setNewTags("");
    setIsDialogOpen(false);
  };

  const handleDeleteCustomGuide = (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // prevent navigating
    if (window.confirm(t("guide.deleteConfirm"))) {
      const updated = customGuides.filter((g) => g.id !== id);
      setCustomGuides(updated);
      saveCustomGuides(updated);
      removeGuideNote(id);
    }
  };

  // Combine default guides with custom guides
  const allGuides = [...defaultGuides, ...customGuides];

  // Filter guides
  const filteredGuides = allGuides.filter((guide) => {
    if (guide.category !== activeTab) return false;

    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();
    const title = getLocalizedString(guide.title, lang).toLowerCase();
    const subtitle = getLocalizedString(guide.subtitle, lang).toLowerCase();
    const desc = getLocalizedString(guide.description, lang).toLowerCase();
    const tags = getLocalizedStringArray(guide.tags, lang).some((t) =>
      t.toLowerCase().includes(query)
    );

    return (
      title.includes(query) ||
      subtitle.includes(query) ||
      desc.includes(query) ||
      tags
    );
  });

  return (
    <div className="mx-auto min-h-screen max-w-7xl space-y-8 bg-background px-4 py-6 lg:px-6">
      {/* Hero section */}
      <section className="relative overflow-hidden rounded-panel border border-slate-200 bg-white px-6 py-10 shadow-panel md:px-12 md:py-12">
        <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-blob" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-blob" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <BookOpen className="h-4 w-4" />
            {t("nav.guide")}
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            {t("guide.title")}
          </h1>

          <p className="max-w-2xl text-lg text-slate-600">
            {t("guide.subtitle")}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between pt-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="text"
                placeholder={t("guide.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-12 w-full rounded-2xl border-slate-200 bg-slate-50 focus-visible:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Tabs Menu */}
      <div className="flex justify-center border-b border-slate-200/80 pb-2">
        <div className="flex gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-slate-200 overflow-x-auto max-w-full no-scrollbar">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap
                  ${
                    isActive
                      ? "bg-white text-blue-600 shadow-sm border border-slate-200/50"
                      : "text-slate-600 hover:text-slate-900"
                  }
                `}
              >
                <TabIcon className="h-4 w-4 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {filteredGuides.length > 0 ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredGuides.map((guide) => {
                const Icon = getIcon(guide.iconName);
                const isCustom = guide.id.startsWith("custom-");
                const hasNotes = hasGuideNote(guide.id);

                return (
                  <div
                    key={guide.id}
                    onClick={() => navigate(`/guide/${guide.id}`)}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-card border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>

                        {/* Top corner actions */}
                        <div className="flex items-center gap-1.5">
                          {isCustom && (
                            <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-50 rounded-lg">
                              {t("guide.customLabel")}
                            </Badge>
                          )}
                          {hasNotes && (
                            <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50 rounded-lg flex items-center gap-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                              {t("guide.notesBadge")}
                            </Badge>
                          )}
                          {isCustom && (
                            <button
                              onClick={(e) => handleDeleteCustomGuide(e, guide.id)}
                              className="rounded-lg p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 transition"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {getLocalizedString(guide.title, lang)}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium">
                          {getLocalizedString(guide.subtitle, lang)}
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 pt-2">
                          {getLocalizedString(guide.description, lang)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-50 flex flex-wrap gap-1.5 items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {getLocalizedStringArray(guide.tags, lang).slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-lg bg-slate-50 border border-slate-100 px-2 py-0.5 text-xs text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 rounded-3xl border border-dashed border-slate-200 bg-slate-50/50">
              <FileText className="h-12 w-12 text-slate-300" />
              <p className="text-slate-500 font-medium">{t("guide.emptyState")}</p>
            </div>
          )}
        </AnimatePresence>
      </div>



      {/* Add Custom Guide Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md rounded-2xl border-slate-200 bg-white p-6 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-extrabold text-slate-900">
              {t("guide.dialog.title")}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateCustomGuide} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">
                {t("guide.dialog.titleLabel")} *
              </label>
              <Input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder={t("guide.dialog.titlePlaceholder")}
                className="rounded-xl border-slate-200 focus-visible:ring-blue-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">
                {t("guide.dialog.categoryLabel")}
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-50 border border-slate-100 rounded-xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setNewCategory(tab.id)}
                    className={`
                      py-2 px-1 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5
                      ${
                        newCategory === tab.id
                          ? "bg-white text-blue-600 shadow-sm border border-slate-200/50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }
                    `}
                  >
                    {(() => {
                      const TabIcon = tab.icon;
                      return <TabIcon className="h-3.5 w-3.5 shrink-0" />;
                    })()}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">
                {t("guide.dialog.descLabel")}
              </label>
              <Textarea
                rows={3}
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                placeholder={t("guide.dialog.descPlaceholder")}
                className="rounded-xl border-slate-200 focus-visible:ring-blue-500 resize-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">
                {t("guide.dialog.tagsLabel")}
              </label>
              <Input
                type="text"
                value={newTags}
                onChange={(e) => setNewTags(e.target.value)}
                placeholder={t("guide.dialog.tagsPlaceholder")}
                className="rounded-xl border-slate-200 focus-visible:ring-blue-500"
              />
            </div>

            <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-4 border-t border-slate-50">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="rounded-xl border-slate-200 hover:bg-slate-50 font-semibold"
              >
                {t("guide.dialog.cancel")}
              </Button>
              <Button
                type="submit"
                className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                {t("guide.dialog.save")}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GuidePage;
