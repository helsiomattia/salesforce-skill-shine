import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getLocalizedString, getLocalizedStringArray } from "@/utils/i18nHelper";
import { defaultGuides, GuideItem } from "@/data/guideData";
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
  Check,
  ExternalLink,
  X,
  Copy,
  ChevronRight,
  FileText,
  Compass,
  Wrench,
  Settings,
  Layers
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
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

const iconMap: Record<string, any> = {
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
  Layers
};

const getIcon = (name: string) => iconMap[name] || BookOpen;

const CodeBlock = ({ code, language }: { code: string; language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-200 shadow-inner">
      <div className="absolute right-3 top-3 flex gap-1 z-10">
        <button
          onClick={handleCopy}
          className="rounded-lg bg-slate-900 border border-slate-800 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          title="Copy Code"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>
      {language && (
        <span className="absolute left-4 top-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {language}
        </span>
      )}
      <pre className="mt-4 overflow-x-auto whitespace-pre-wrap leading-relaxed">{code}</pre>
    </div>
  );
};

const GuidePage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || "pt";

  const [activeTab, setActiveTab] = useState<"clouds" | "foundations" | "admin" | "dev" | "architect" | "tools">("clouds");

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
  const [activeGuide, setActiveGuide] = useState<GuideItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form State for custom guides
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newCategory, setNewCategory] = useState<"clouds" | "foundations" | "admin" | "dev" | "architect" | "tools">("clouds");
  const [newTags, setNewTags] = useState("");

  // Notes state
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [saveStatus, setSaveStatus] = useState<"" | "saving" | "saved">("");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load custom guides & notes from localStorage on mount
  useEffect(() => {
    // Customs
    const customs = localStorage.getItem("sfs_custom_guides");
    let parsedCustoms: GuideItem[] = [];
    if (customs) {
      try {
        parsedCustoms = JSON.parse(customs);
        setCustomGuides(parsedCustoms);
      } catch (e) {
        console.error("Error parsing custom guides", e);
      }
    }

    // Notes
    const loadedNotes: Record<string, string> = {};
    defaultGuides.forEach((g) => {
      const val = localStorage.getItem(`sfs_guide_notes_${g.id}`);
      if (val) loadedNotes[g.id] = val;
    });
    parsedCustoms.forEach((g) => {
      const val = localStorage.getItem(`sfs_guide_notes_${g.id}`);
      if (val) loadedNotes[g.id] = val;
    });
    setNotes(loadedNotes);
  }, []);

  const handleNotesChange = (itemId: string, content: string) => {
    setNotes((prev) => ({
      ...prev,
      [itemId]: content,
    }));
    setSaveStatus("saving");

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      localStorage.setItem(`sfs_guide_notes_${itemId}`, content);
      setSaveStatus("saved");

      setTimeout(() => {
        setSaveStatus("");
      }, 1500);
    }, 600); // debounce 600ms
  };

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
    localStorage.setItem("sfs_custom_guides", JSON.stringify(updated));

    // Reset Form
    setNewTitle("");
    setNewDesc("");
    setNewCategory("clouds");
    setNewTags("");
    setIsDialogOpen(false);
  };

  const handleDeleteCustomGuide = (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // prevent opening sheet
    if (window.confirm(t("guide.deleteConfirm"))) {
      const updated = customGuides.filter((g) => g.id !== id);
      setCustomGuides(updated);
      localStorage.setItem("sfs_custom_guides", JSON.stringify(updated));

      // Clean up note
      localStorage.removeItem(`sfs_guide_notes_${id}`);
      setNotes((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });

      if (activeGuide?.id === id) {
        setActiveGuide(null);
      }
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
      <section className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-slate-200/50 md:px-12 md:py-12">
        <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

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

            <Button
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-6 font-semibold hover:bg-blue-700 text-white shadow-lg shadow-blue-600/15"
            >
              <Plus className="h-5 w-5" />
              {t("guide.addGuideBtn")}
            </Button>
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
                const hasNotes = !!notes[guide.id]?.trim();
                const isCustom = guide.id.startsWith("custom-");

                return (
                  <div
                    key={guide.id}
                    onClick={() => setActiveGuide(guide)}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 cursor-pointer"
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

      {/* Slide-over Detail Sheet */}
      <Sheet open={!!activeGuide} onOpenChange={(open) => !open && setActiveGuide(null)}>
        <SheetContent className="sm:max-w-2xl w-full h-full overflow-y-auto bg-white border-l border-slate-200 p-0">
          {activeGuide && (
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-slate-100 bg-slate-50/50 relative">
                <SheetHeader className="pr-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-blue-600 shadow-sm">
                      {(() => {
                        const Icon = getIcon(activeGuide.iconName);
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {activeGuide.category === "clouds" ? t("guide.tabClouds") :
                       activeGuide.category === "foundations" ? t("guide.tabFoundations") :
                       activeGuide.category === "admin" ? t("guide.tabAdmin") :
                       activeGuide.category === "dev" ? t("guide.tabDev") :
                       activeGuide.category === "architect" ? t("guide.tabArchitect") :
                       t("guide.tabTools")}
                    </span>
                    {activeGuide.id.startsWith("custom-") && (
                      <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-50 rounded-lg">
                        {t("guide.customLabel")}
                      </Badge>
                    )}
                  </div>
                  <SheetTitle className="text-2xl font-extrabold text-slate-900 leading-tight">
                    {getLocalizedString(activeGuide.title, lang)}
                  </SheetTitle>
                  <SheetDescription className="text-sm font-semibold text-slate-500 pt-1">
                    {getLocalizedString(activeGuide.subtitle, lang)}
                  </SheetDescription>
                </SheetHeader>
              </div>

              {/* Body */}
              <div className="flex-1 p-6 space-y-8 pb-20">
                {/* Description */}
                <div className="space-y-2">
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-inner">
                    {getLocalizedString(activeGuide.description, lang)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {getLocalizedStringArray(activeGuide.tags, lang).map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-lg bg-slate-50 border border-slate-100 px-2 py-0.5 text-xs text-slate-500 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* If default guide, show structured technical templates */}
                {!activeGuide.id.startsWith("custom-") && (
                  <>
                    {/* Key Concepts */}
                    {activeGuide.keyConcepts && activeGuide.keyConcepts.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
                          {t("guide.keyConcepts")}
                        </h4>
                        <div className="space-y-4">
                          {activeGuide.keyConcepts.map((concept, idx) => (
                            <div key={idx} className="space-y-2 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:border-slate-200 transition">
                              <h5 className="font-bold text-slate-800 text-sm md:text-base">
                                {getLocalizedString(concept.title, lang)}
                              </h5>
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {getLocalizedString(concept.description, lang)}
                              </p>
                              {concept.codeSnippet && (
                                <CodeBlock
                                  code={concept.codeSnippet}
                                  language={concept.codeLanguage}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Best Practices */}
                    {getLocalizedStringArray(activeGuide.bestPractices, lang).length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
                          {t("guide.bestPractices")}
                        </h4>
                        <ul className="space-y-2.5 bg-slate-50/50 border border-slate-100 rounded-2xl p-5 shadow-sm">
                          {getLocalizedStringArray(activeGuide.bestPractices, lang).map((practice, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold border border-blue-100 mt-0.5">
                                {idx + 1}
                              </div>
                              <span>{practice}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Resources */}
                    {activeGuide.resources && activeGuide.resources.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
                          {t("guide.resources")}
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {activeGuide.resources.map((res, idx) => (
                            <a
                              key={idx}
                              href={res.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="flex items-center justify-between p-3.5 border border-slate-200 rounded-xl bg-white text-sm font-semibold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition"
                            >
                              <span className="truncate pr-2">
                                {getLocalizedString(res.title, lang)}
                              </span>
                              <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Personal Notes (Autosaving Notepad) */}
                <div className="space-y-4 border-t border-slate-100 pt-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span>📝</span>
                      {t("guide.personalNotes")}
                    </h4>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 min-h-[16px]">
                      {saveStatus === "saving" && (
                        <>
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
                          Salvando...
                        </>
                      )}
                      {saveStatus === "saved" && (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-500 font-bold" />
                          {t("guide.notesSaved")}
                        </>
                      )}
                    </span>
                  </div>

                  <Textarea
                    placeholder={t("guide.notesPlaceholder")}
                    value={notes[activeGuide.id] || ""}
                    onChange={(e) => handleNotesChange(activeGuide.id, e.target.value)}
                    rows={8}
                    className="w-full rounded-2xl border-slate-200 p-4 text-slate-700 bg-slate-50 focus-visible:ring-blue-500 leading-relaxed font-sans shadow-inner resize-y"
                  />
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

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
                placeholder="Ex: Marketing Cloud, Apex Classes de Integração"
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
                placeholder="Uma breve descrição sobre do que se trata..."
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
                placeholder="Ex: Marketing, Automation, Apex, Admin"
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
