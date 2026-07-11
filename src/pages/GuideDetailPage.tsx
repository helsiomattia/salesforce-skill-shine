import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import JsonLd from "@/components/JsonLd";
import { getLocalizedString, getLocalizedStringArray } from "@/utils/i18nHelper";
import { defaultGuides, GuideItem } from "@/data/guideData";
import { absoluteUrl, AUTHOR_NAME, authorJsonLd, DATE_MODIFIED, DATE_PUBLISHED } from "@/lib/site";
import { getCustomGuides, getGuideNote, setGuideNote } from "@/lib/guideStorage";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  Layout,
  Shield,
  LifeBuoy,
  TrendingUp,
  Globe,
  Check,
  ExternalLink,
  Copy,
  Compass,
  Wrench,
  Settings,
  Layers,
  Lock,
  Eye,
  ShieldCheck,
  FileText,
  Lightbulb,
  Link2,
  StickyNote,
  ChevronRight,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

// ──────────────────────────────────────────────
// Icon map
// ──────────────────────────────────────────────
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
};
const getIcon = (name: string) => iconMap[name] || BookOpen;


const categoryBg: Record<string, string> = {
  clouds: "bg-blue-50 text-blue-700 border-blue-200",
  foundations: "bg-violet-50 text-violet-700 border-violet-200",
  admin: "bg-emerald-50 text-emerald-700 border-emerald-200",
  dev: "bg-orange-50 text-orange-700 border-orange-200",
  architect: "bg-rose-50 text-rose-700 border-rose-200",
  tools: "bg-slate-50 text-slate-700 border-slate-200",
};

// ──────────────────────────────────────────────
// Code Block Component
// ──────────────────────────────────────────────
const CodeBlock = ({ code, language }: { code: string; language?: string }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative my-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 font-mono text-xs text-slate-200 shadow-inner">
      <div className="absolute right-3 top-3 flex gap-1 z-10">
        <button
          onClick={handleCopy}
          className="rounded-lg bg-slate-900 border border-slate-800 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          title={t("guide.copyCode")}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
      {language && (
        <span className="absolute left-4 top-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {language}
        </span>
      )}
      <pre className="mt-4 overflow-x-auto whitespace-pre-wrap leading-relaxed">
        {code}
      </pre>
    </div>
  );
};

// ──────────────────────────────────────────────
// Main Page
// ──────────────────────────────────────────────
const GuideDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || "pt";

  // ── Find guide ──────────────────────────────
  const [guide, setGuide] = useState<GuideItem | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Check default guides first
    const found = defaultGuides.find((g) => g.id === id);
    if (found) {
      setGuide(found);
      return;
    }
    const custom = getCustomGuides().find((g) => g.id === id);
    if (custom) {
      setGuide(custom);
      return;
    }

    setNotFound(true);
  }, [id]);

  // ── Notes (autosave) ────────────────────────
  const [notes, setNotes] = useState("");
  const [saveStatus, setSaveStatus] = useState<"" | "saving" | "saved">("");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!id) return;
    setNotes(getGuideNote(id));
  }, [id]);

  const handleNotesChange = (content: string) => {
    setNotes(content);
    setSaveStatus("saving");
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      setGuideNote(id, content);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(""), 1500);
    }, 600);
  };

  // ── Category label ──────────────────────────
  const getCategoryLabel = (cat: string) => {
    const map: Record<string, string> = {
      clouds: t("guide.tabClouds"),
      foundations: t("guide.tabFoundations"),
      admin: t("guide.tabAdmin"),
      dev: t("guide.tabDev"),
      architect: t("guide.tabArchitect"),
      tools: t("guide.tabTools"),
    };
    return map[cat] ?? cat;
  };

  // ── Not found state ─────────────────────────
  if (notFound) {
    return (
      <div className="mx-auto min-h-screen max-w-4xl px-4 py-16 flex flex-col items-center justify-center text-center space-y-6">
        <FileText className="h-16 w-16 text-slate-300" />
        <h1 className="text-3xl font-extrabold text-slate-900">
          {t("guide.notFound.title")}
        </h1>
        <p className="text-slate-500 max-w-sm">
          {t("guide.notFound.desc")}
        </p>
        <Button
          onClick={() => navigate("/guide")}
          className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("guide.notFound.back")}
        </Button>
      </div>
    );
  }

  // ── Loading ─────────────────────────────────
  if (!guide) {
    return (
      <div className="mx-auto min-h-screen max-w-4xl px-4 py-16 flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  const Icon = getIcon(guide.iconName);
  const catBadge = categoryBg[guide.category] || categoryBg.clouds;
  const isCustom = guide.id.startsWith("custom-");
  const keyConcepts = guide.keyConcepts ?? [];
  const implementationGuide = guide.implementationGuide ?? [];
  const bestPractices = getLocalizedStringArray(guide.bestPractices, lang);
  const realUseCases = guide.realUseCases ? getLocalizedStringArray(guide.realUseCases, lang) : [];
  const resources = guide.resources ?? [];
  const tags = getLocalizedStringArray(guide.tags, lang);
  const title = getLocalizedString(guide.title, lang);
  const subtitle = getLocalizedString(guide.subtitle, lang);
  const description = getLocalizedString(guide.description, lang);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    name: title,
    description,
    url: absoluteUrl(`/guide/${guide.id}`),
    mainEntityOfPage: absoluteUrl(`/guide/${guide.id}`),
    author: authorJsonLd,
    publisher: authorJsonLd,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    keywords: tags,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto min-h-screen max-w-4xl px-4 py-6 lg:px-6 space-y-8"
    >
      {!isCustom && <JsonLd data={articleJsonLd} />}
      {/* ── Back button ────────────────────────── */}
      <button
        onClick={() => navigate("/guide")}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        {t("guide.backToGuide")}
      </button>

      {/* ── Hero Banner ────────────────────────── */}
      <section className="relative overflow-hidden rounded-panel border border-slate-200 bg-white px-6 py-10 shadow-panel md:px-12 md:py-12">
        {/* Blur blobs */}
        <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-blob pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-blob pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-5">
          {/* Icon + badges */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
              <Icon className="h-6 w-6" />
            </div>
            <Badge
              className={`${catBadge} border font-bold px-3 py-1 text-xs rounded-full`}
            >
              {getCategoryLabel(guide.category)}
            </Badge>
            {isCustom && (
              <Badge className="bg-amber-50 text-amber-700 border-amber-200 border font-bold px-3 py-1 text-xs rounded-full">
                {t("guide.customLabel")}
              </Badge>
            )}
          </div>

          {/* Title & subtitle */}
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {title}
            </h1>
            <p className="mt-2 text-base md:text-lg text-slate-600 font-medium">
              {subtitle}
            </p>
            {!isCustom && (
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {t("legal.common.author")}: {AUTHOR_NAME} · {t("legal.common.published")} {t("legal.common.date")} · {t("legal.common.updated")}: {t("legal.common.date")}
              </p>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-lg bg-slate-50 border border-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Description ────────────────────────── */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
          {description}
        </p>
      </section>

      {/* ── Practical Implementation ───────────── */}
      {implementationGuide.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-slate-900" />
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t("guide.implementationGuide")}
            </h2>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="grid gap-3 md:grid-cols-2">
              {implementationGuide.map((item, idx) => (
                <article key={idx} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-bold text-slate-700 shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {getLocalizedString(item.title, lang)}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {getLocalizedString(item.description, lang)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Key Concepts ───────────────────────── */}
      {keyConcepts.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-blue-500" />
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t("guide.keyConcepts")}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {keyConcepts.map((concept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 leading-snug">
                    {getLocalizedString(concept.title, lang)}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-10">
                  {getLocalizedString(concept.description, lang)}
                </p>
                {concept.codeSnippet && (
                  <div className="pl-10">
                    <CodeBlock
                      code={concept.codeSnippet}
                      language={concept.codeLanguage}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── Best Practices ─────────────────────── */}
      {bestPractices.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-emerald-500" />
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t("guide.bestPractices")}
            </h2>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-3">
              {bestPractices.map((practice, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-slate-700 leading-relaxed"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-sm md:text-base">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Real Use Cases ─────────────────────── */}
      {realUseCases.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-amber-500" />
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t("guide.realUseCases")}
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {realUseCases.map((useCase, idx) => (
              <article
                key={idx}
                className="flex gap-4 rounded-2xl border border-amber-100 bg-amber-50/40 p-5 text-slate-700 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-amber-200 bg-white text-xs font-bold text-amber-700">
                  {idx + 1}
                </div>
                <p className="text-sm leading-6 md:text-base">{useCase}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── Resources ──────────────────────────── */}
      {resources.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-violet-500" />
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t("guide.resources")}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {resources.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                    <Link2 className="h-4 w-4" />
                  </div>
                  <span className="truncate text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {getLocalizedString(res.title, lang)}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-blue-500 transition-colors ml-3" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* ── Wiki Placeholder ───────────────────── */}
      <section className="rounded-3xl border-2 border-dashed border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12 text-center space-y-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-400 shadow-sm mx-auto">
          <FileText className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-700">
          {t("guide.wiki.title")}
        </h3>
        <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
          {t("guide.wiki.desc", { title: getLocalizedString(guide.title, lang) })}
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
          <ChevronRight className="h-3.5 w-3.5" />
          {t("guide.wiki.soon")}
        </div>
      </section>

      {/* ── Personal Notes ─────────────────────── */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <StickyNote className="h-5 w-5 text-amber-500" />
            {t("guide.personalNotes")}
          </h2>
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 min-h-[20px]">
            {saveStatus === "saving" && (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
                {t("guide.notesSaving")}
              </>
            )}
            {saveStatus === "saved" && (
              <>
                <Check className="h-3.5 w-3.5 text-green-500" />
                {t("guide.notesSaved")}
              </>
            )}
          </span>
        </div>
        <Textarea
          placeholder={t("guide.notesPlaceholder")}
          value={notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          rows={8}
          className="w-full rounded-2xl border-slate-200 p-4 text-slate-700 bg-slate-50 focus-visible:ring-blue-500 leading-relaxed font-sans shadow-inner resize-y"
        />
      </section>

      {/* Bottom spacer */}
      <div className="h-8" />
    </motion.div>
  );
};

export default GuideDetailPage;
