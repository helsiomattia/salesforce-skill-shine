import type { TFunction } from "i18next";
import * as z from "zod";

export const createFinishPanelSchema = (t: TFunction) => z.object({
  fullName: z.string().min(3, { message: t("careerPage.finish.validation.fullName") }),
  email: z.string().email({ message: t("careerPage.finish.validation.email") }),
  role: z.string().min(2, { message: t("careerPage.finish.validation.role") }),
  phone: z.string().min(8, { message: t("careerPage.finish.validation.phone") }),
  linkedin: z.string().optional(),
  experience: z.string().min(1, { message: t("careerPage.finish.validation.experience") }),
  lgpd: z.boolean().refine((val) => val === true, {
    message: t("careerPage.finish.validation.lgpd"),
  }),
});

export type FinishPanelFormData = z.infer<ReturnType<typeof createFinishPanelSchema>>;
