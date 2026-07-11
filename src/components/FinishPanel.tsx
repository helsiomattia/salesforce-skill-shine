import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import type { CompetencyCategory } from "@/data/competencies";
import { 
  User, 
  Mail, 
  Briefcase, 
  Phone, 
  Linkedin, 
  History, 
  ShieldCheck, 
  FileDown, 
  CheckCircle2 
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFinishPanelSchema, type FinishPanelFormData } from "./finish/finishPanelSchema";
import { generatePdf } from "./finish/generatePdf";

interface FinishPanelProps {
  category: CompetencyCategory;
  ratings: Record<string, number>;
}

const FinishPanel = ({ category, ratings }: FinishPanelProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';
  const formSchema = createFinishPanelSchema(t);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FinishPanelFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lgpd: false,
    },
  });

  const generatePDF = async (data: FinishPanelFormData) => {
    setIsGenerating(true);
    setPdfError(null);

    try {
      await generatePdf({ data, category, ratings, language: lang });
    } catch (error) {
      console.error(t("careerPage.finish.pdf.errorLog"), error);
      setPdfError(t("careerPage.finish.pdf.error"));
    } finally {
      setIsGenerating(false);
    }
  };

  const onSubmit = (data: FinishPanelFormData) => {
    void generatePDF(data);
  };

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <p className="mx-auto max-w-2xl text-slate-600">
          {t('careerPage.finish.desc')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="mx-auto max-w-4xl rounded-panel border border-slate-200 bg-white p-8 shadow-panel"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {pdfError && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
              {pdfError}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Nome Completo */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <User className="h-4 w-4 text-blue-500" />
                {t('careerPage.finish.form.fullName')}
              </label>
              <input
                {...register("fullName")}
                className={`w-full rounded-2xl border ${errors.fullName ? 'border-red-500' : 'border-slate-200'} bg-slate-50 p-4 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                placeholder="Ex: Hélio Mattia"
              />
              {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName.message}</p>}
            </div>

            {/* E-mail */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Mail className="h-4 w-4 text-blue-500" />
                {t('careerPage.finish.form.email')}
              </label>
              <input
                {...register("email")}
                type="email"
                className={`w-full rounded-2xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} bg-slate-50 p-4 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                placeholder="seu@email.com"
              />
              {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
            </div>

            {/* Função Atual */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Briefcase className="h-4 w-4 text-blue-500" />
                {t('careerPage.finish.form.role')}
              </label>
              <input
                {...register("role")}
                className={`w-full rounded-2xl border ${errors.role ? 'border-red-500' : 'border-slate-200'} bg-slate-50 p-4 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                placeholder="Ex: Salesforce Consultant"
              />
              {errors.role && <p className="text-xs text-red-500 font-medium">{errors.role.message}</p>}
            </div>

            {/* Telefone */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Phone className="h-4 w-4 text-blue-500" />
                {t('careerPage.finish.form.phone')}
              </label>
              <input
                {...register("phone")}
                className={`w-full rounded-2xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'} bg-slate-50 p-4 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                placeholder="(00) 00000-0000"
              />
              {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone.message}</p>}
            </div>

            {/* LinkedIn */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Linkedin className="h-4 w-4 text-blue-500" />
                {t('careerPage.finish.form.linkedin')}
              </label>
              <input
                {...register("linkedin")}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="linkedin.com/in/perfil"
              />
            </div>

            {/* Experiência */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <History className="h-4 w-4 text-blue-500" />
                {t('careerPage.finish.form.experience')}
              </label>
              <select
                {...register("experience")}
                className={`w-full rounded-2xl border ${errors.experience ? 'border-red-500' : 'border-slate-200'} bg-slate-50 p-4 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              >
                <option value="">Selecione...</option>
                <option value="< 1 ano">{"< 1 ano"}</option>
                <option value="1-3 anos">1-3 anos</option>
                <option value="3-5 anos">3-5 anos</option>
                <option value="5-10 anos">5-10 anos</option>
                <option value="10+ anos">10+ anos</option>
              </select>
              {errors.experience && <p className="text-xs text-red-500 font-medium">{errors.experience.message}</p>}
            </div>
          </div>

          {/* LGPD Checkbox */}
          <div className="pt-4 border-t border-slate-100">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-1">
                <input
                  type="checkbox"
                  {...register("lgpd")}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-300 transition-all checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                />
                <CheckCircle2 className="absolute top-0 left-0 h-5 w-5 text-white opacity-0 transition-opacity peer-checked:opacity-100 p-0.5" />
              </div>
              <span className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                <ShieldCheck className="inline h-4 w-4 mr-1 text-slate-400" />
                {t('careerPage.finish.form.privacy')}
              </span>
            </label>
            {errors.lgpd && <p className="text-xs text-red-500 font-medium mt-1">{errors.lgpd.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isGenerating}
              className="group flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-blue-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <FileDown className="h-6 w-6" />
              )}
              {t('careerPage.finish.form.submit')}
              {!isGenerating && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Simple ArrowRight icon for the button
const ArrowRight = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default FinishPanel;
