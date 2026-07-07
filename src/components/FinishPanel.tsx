import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CompetencyCategory, Skill } from "@/data/competencies";
import { getLocalizedString } from "@/utils/i18nHelper";
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
import * as z from "zod";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Define form schema with LGPD validation
const formSchema = z.object({
  fullName: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "E-mail inválido." }),
  role: z.string().min(2, { message: "Informe sua função atual." }),
  phone: z.string().min(8, { message: "Informe um telefone válido." }),
  linkedin: z.string().optional(),
  experience: z.string().min(1, { message: "Informe sua experiência." }),
  lgpd: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos da LGPD para continuar.",
  }),
});

type FormData = z.infer<typeof formSchema>;

type SupportedLang = "pt" | "en" | "es";
type Rgb = [number, number, number];
type MetricCard = { label: string; value: string; hint: string };
type RatedSkill = Skill & { score: number };
type PdfDocWithAutoTable = jsPDF & { lastAutoTable?: { finalY: number } };

const pdfTheme = {
  marginX: 14,
  contentWidth: 182,
  footerY: 286,
  colors: {
    navy: [15, 23, 42] as Rgb,
    slate: [71, 85, 105] as Rgb,
    muted: [100, 116, 139] as Rgb,
    lightText: [148, 163, 184] as Rgb,
    blue: [37, 99, 235] as Rgb,
    cyan: [14, 165, 233] as Rgb,
    teal: [13, 148, 136] as Rgb,
    border: [226, 232, 240] as Rgb,
    softBlue: [239, 246, 255] as Rgb,
    softCyan: [236, 254, 255] as Rgb,
    softSlate: [248, 250, 252] as Rgb,
    white: [255, 255, 255] as Rgb,
  },
};

const pdfCopy = {
  pt: {
    reportTitle: "Relatório de Competências Salesforce",
    reportDescription: "Diagnóstico orientativo para mapear competências, lacunas e próximos passos de desenvolvimento profissional.",
    generatedAt: "Gerado em",
    diagnosticSummary: "Resumo do Diagnóstico",
    participantData: "Dados do participante",
    hardSkills: "Competências Técnicas",
    softSkills: "Competências Comportamentais",
    actionPlan: "Plano de ação sugerido",
    recommendations: "Recomendações de estudo",
    officialLinks: "Referências úteis",
    notProvided: "Não informado",
    trail: "Trilha avaliada",
    score: "Score geral",
    assessed: "Competências avaliadas",
    strong: "Competências fortes",
    develop: "A desenvolver",
    advanced: "Competências avançadas",
    notEvaluated: "Não avaliadas",
    estimatedLevel: "Nível estimado",
    mainStrength: "Principal ponto forte",
    mainGap: "Principal lacuna",
    name: "Nome",
    email: "E-mail",
    phone: "Telefone / WhatsApp",
    role: "Função atual",
    experience: "Anos de experiência",
    level: "Nível informado",
    status: "Status",
    interpretation: "Interpretação",
    footerNote: "Relatório orientativo. Não representa certificação oficial Salesforce.",
    page: "Página",
    statuses: ["Não avaliado", "Inicial", "Em desenvolvimento", "Intermediário", "Avançado", "Referência"],
    levels: ["Iniciante", "Em desenvolvimento", "Intermediário", "Avançado", "Referência"],
    categoryIntro: {
      hard: "As competências técnicas mostram domínio de configuração, segurança, automação, dados e execução prática na trilha escolhida.",
      soft: "As competências comportamentais indicam comunicação, colaboração, análise e maturidade para atuar em cenários reais.",
    },
    categoryScore: {
      low: "A base ainda está inicial. Priorize fundamentos e prática guiada antes de avançar para temas complexos.",
      mid: "Há evolução consistente, mas ainda existem lacunas importantes para consolidar a atuação profissional.",
      high: "O resultado indica boa maturidade nesta categoria. Mantenha prática contínua e busque cenários mais desafiadores.",
    },
    skillInterpretation: [
      "Ainda não avaliada.",
      "Requer estudo dos fundamentos.",
      "Precisa de prática consistente.",
      "Base funcional em evolução.",
      "Boa autonomia em cenários comuns.",
      "Pode servir como referência prática.",
    ],
    summary: (level: string, trail: string, strength: string, gap: string) =>
      `Seu diagnóstico indica um perfil ${level.toLowerCase()} para a trilha ${trail}. Os melhores resultados aparecem em ${strength}, enquanto ${gap} merece mais atenção para formar uma base mais completa.`,
    plan30: (focus: string) => [
      "Revisar os fundamentos da trilha escolhida.",
      `Estudar os temas com menor pontuação: ${focus}.`,
      "Praticar em uma Developer Org ou Trailhead Playground.",
    ],
    plan60: ["Criar um mini projeto prático.", "Documentar aprendizados e decisões.", "Revisar dúvidas recorrentes com base em casos reais."],
    plan90: ["Consolidar portfólio com evidências práticas.", "Simular cenários de projeto, entrevista ou certificação.", "Revisar a avaliação e comparar a evolução."],
  },
  en: {
    reportTitle: "Salesforce Competency Report",
    reportDescription: "Guidance report to map competencies, gaps, and next steps for professional development.",
    generatedAt: "Generated on",
    diagnosticSummary: "Diagnostic Summary",
    participantData: "Participant data",
    hardSkills: "Technical Competencies",
    softSkills: "Behavioral Competencies",
    actionPlan: "Suggested action plan",
    recommendations: "Study recommendations",
    officialLinks: "Useful references",
    notProvided: "Not provided",
    trail: "Selected path",
    score: "Overall score",
    assessed: "Assessed competencies",
    strong: "Strong competencies",
    develop: "To develop",
    advanced: "Advanced competencies",
    notEvaluated: "Not evaluated",
    estimatedLevel: "Estimated level",
    mainStrength: "Main strength",
    mainGap: "Main gap",
    name: "Name",
    email: "Email",
    phone: "Phone / WhatsApp",
    role: "Current role",
    experience: "Years of experience",
    level: "Reported level",
    status: "Status",
    interpretation: "Interpretation",
    footerNote: "Guidance report. It does not represent an official Salesforce certification.",
    page: "Page",
    statuses: ["Not evaluated", "Beginner", "Developing", "Intermediate", "Advanced", "Reference"],
    levels: ["Beginner", "Developing", "Intermediate", "Advanced", "Reference"],
    categoryIntro: {
      hard: "Technical competencies show mastery of configuration, security, automation, data, and practical execution in the selected path.",
      soft: "Behavioral competencies indicate communication, collaboration, analysis, and maturity to work in real scenarios.",
    },
    categoryScore: {
      low: "The foundation is still early. Prioritize fundamentals and guided practice before moving to complex topics.",
      mid: "There is consistent progress, but important gaps still need attention to consolidate professional performance.",
      high: "The result indicates solid maturity in this category. Keep practicing and seek more challenging scenarios.",
    },
    skillInterpretation: [
      "Not assessed yet.",
      "Requires study of fundamentals.",
      "Needs consistent practice.",
      "Functional foundation in progress.",
      "Good autonomy in common scenarios.",
      "Can serve as a practical reference.",
    ],
    summary: (level: string, trail: string, strength: string, gap: string) =>
      `Your diagnostic indicates a ${level.toLowerCase()} profile for the ${trail} path. The strongest results appear in ${strength}, while ${gap} deserves more attention to build a more complete foundation.`,
    plan30: (focus: string) => ["Review the fundamentals of the selected path.", `Study the lowest-scored topics: ${focus}.`, "Practice in a Developer Org or Trailhead Playground."],
    plan60: ["Create a small practical project.", "Document lessons learned and decisions.", "Review recurring questions based on real cases."],
    plan90: ["Consolidate a portfolio with practical evidence.", "Simulate project, interview, or certification scenarios.", "Retake the assessment and compare progress."],
  },
  es: {
    reportTitle: "Informe de Competencias Salesforce",
    reportDescription: "Diagnóstico orientativo para mapear competencias, brechas y próximos pasos de desarrollo profesional.",
    generatedAt: "Generado el",
    diagnosticSummary: "Resumen del Diagnóstico",
    participantData: "Datos del participante",
    hardSkills: "Competencias Técnicas",
    softSkills: "Competencias Comportamentales",
    actionPlan: "Plan de acción sugerido",
    recommendations: "Recomendaciones de estudio",
    officialLinks: "Referencias útiles",
    notProvided: "No informado",
    trail: "Ruta evaluada",
    score: "Score general",
    assessed: "Competencias evaluadas",
    strong: "Competencias fuertes",
    develop: "A desarrollar",
    advanced: "Competencias avanzadas",
    notEvaluated: "No evaluadas",
    estimatedLevel: "Nivel estimado",
    mainStrength: "Principal fortaleza",
    mainGap: "Principal brecha",
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono / WhatsApp",
    role: "Rol actual",
    experience: "Años de experiencia",
    level: "Nivel informado",
    status: "Estado",
    interpretation: "Interpretación",
    footerNote: "Informe orientativo. No representa una certificación oficial de Salesforce.",
    page: "Página",
    statuses: ["No evaluado", "Inicial", "En desarrollo", "Intermedio", "Avanzado", "Referencia"],
    levels: ["Principiante", "En desarrollo", "Intermedio", "Avanzado", "Referencia"],
    categoryIntro: {
      hard: "Las competencias técnicas muestran dominio de configuración, seguridad, automatización, datos y ejecución práctica en la ruta elegida.",
      soft: "Las competencias comportamentales indican comunicación, colaboración, análisis y madurez para actuar en escenarios reales.",
    },
    categoryScore: {
      low: "La base todavía es inicial. Prioriza fundamentos y práctica guiada antes de avanzar hacia temas complejos.",
      mid: "Hay evolución consistente, pero aún existen brechas importantes para consolidar la actuación profesional.",
      high: "El resultado indica buena madurez en esta categoría. Mantén práctica continua y busca escenarios más desafiantes.",
    },
    skillInterpretation: [
      "Aún no evaluada.",
      "Requiere estudio de fundamentos.",
      "Necesita práctica consistente.",
      "Base funcional en evolución.",
      "Buena autonomía en escenarios comunes.",
      "Puede servir como referencia práctica.",
    ],
    summary: (level: string, trail: string, strength: string, gap: string) =>
      `Tu diagnóstico indica un perfil ${level.toLowerCase()} para la ruta ${trail}. Los mejores resultados aparecen en ${strength}, mientras ${gap} merece más atención para formar una base más completa.`,
    plan30: (focus: string) => ["Revisar los fundamentos de la ruta elegida.", `Estudiar los temas con menor puntuación: ${focus}.`, "Practicar en una Developer Org o Trailhead Playground."],
    plan60: ["Crear un mini proyecto práctico.", "Documentar aprendizajes y decisiones.", "Revisar dudas recurrentes con base en casos reales."],
    plan90: ["Consolidar portafolio con evidencias prácticas.", "Simular escenarios de proyecto, entrevista o certificación.", "Repetir la evaluación y comparar la evolución."],
  },
};

const studyLinks = [
  { label: "Salesforce Trailhead", url: "https://trailhead.salesforce.com/" },
  { label: "Salesforce Admins", url: "https://admin.salesforce.com/" },
  { label: "Salesforce Developers", url: "https://developer.salesforce.com/" },
  { label: "Salesforce Architects", url: "https://architect.salesforce.com/" },
  { label: "GitHub - Skill Shine", url: "https://github.com/helsiomattia/salesforce-skill-shine" },
];

const pathTopics: Record<string, Record<SupportedLang, string[]>> = {
  admin: {
    pt: ["Segurança", "Object Manager", "Flow", "Relatórios", "Gestão de dados"],
    en: ["Security", "Object Manager", "Flow", "Reports", "Data management"],
    es: ["Seguridad", "Object Manager", "Flow", "Informes", "Gestión de datos"],
  },
  developer: {
    pt: ["Apex", "SOQL", "LWC", "APIs", "Testes"],
    en: ["Apex", "SOQL", "LWC", "APIs", "Tests"],
    es: ["Apex", "SOQL", "LWC", "APIs", "Pruebas"],
  },
  consultant: {
    pt: ["Discovery", "Requisitos", "User stories", "Mapeamento de processos", "UAT"],
    en: ["Discovery", "Requirements", "User stories", "Process mapping", "UAT"],
    es: ["Discovery", "Requisitos", "User stories", "Mapeo de procesos", "UAT"],
  },
  architect: {
    pt: ["Modelo de dados", "Integração", "Segurança", "Escalabilidade", "Governança"],
    en: ["Data model", "Integration", "Security", "Scalability", "Governance"],
    es: ["Modelo de datos", "Integración", "Seguridad", "Escalabilidad", "Gobernanza"],
  },
};

const premiumCopy = {
  pt: {
    reportTitle: "Diagnóstico Profissional de Carreira Salesforce",
    mentorNoteTitle: "Nota do Mentor",
    mentorNote: [
      "Este relatório não deve ser lido como uma nota final sobre sua carreira. Ele é um ponto de partida para entender onde você está hoje, quais fundamentos já estão sólidos e quais lacunas podem limitar sua evolução em projetos reais.",
      "A proposta da mentoria é transformar esse diagnóstico em plano prático, com foco em portfólio, posicionamento profissional, entrevistas e decisões técnicas mais maduras.",
    ],
    professionalReadingTitle: "Leitura profissional do seu momento atual",
    profileTitle: "Perfil identificado",
    maturityMapTitle: "Mapa de maturidade",
    revealsTitle: "O que esse diagnóstico revela",
    actionPlanTitle: "Plano de evolução recomendado",
    projectsTitle: "Projetos práticos para fortalecer seu portfólio",
    marketTitle: "Como esse resultado conversa com o mercado",
    mentorshipTitle: "Como a mentoria pode acelerar sua evolução",
    ready: "Pronto para usar",
    evolving: "Em evolução",
    priority: "Atenção prioritária",
    mentorReading: "Leitura do mentor",
    professionalImpact: "Impacto profissional",
    objective: "Objetivo",
    practicedSkills: "Competências praticadas",
    deliverable: "Entrega esperada",
    portfolioEvidence: "Evidência para portfólio",
    next30: "Próximos 30 dias — Fundamentos críticos",
    next60: "Próximos 60 dias — Projeto guiado",
    next90: "Próximos 90 dias — Posicionamento profissional",
    marketText: "Para uma posição inicial, este resultado ajuda a identificar onde já existe base aproveitável. Para uma posição pleno ou atuação consultiva, ainda é importante fortalecer lacunas com impacto em autonomia, documentação, troubleshooting, governança e comunicação com áreas de negócio. O relatório não promete vaga, certificação ou contratação; ele organiza sinais para orientar o próximo ciclo de desenvolvimento.",
    mentorshipText: "Este relatório mostra onde você está. A mentoria ajuda a transformar esse diagnóstico em direção, prática e posicionamento profissional.",
    mentorshipAreas: ["Plano individual de carreira Salesforce", "Revisão de competências técnicas", "Construção de portfólio prático", "Preparação para entrevistas", "Organização de estudos", "Posicionamento no LinkedIn", "Transição para Admin, Business Analyst, Developer, Consultant ou Architect"],
    mentorshipCtas: ["Conectar com Helsio Mattia no LinkedIn", "Conhecer o projeto Salesforce Skill Shine"],
    signatureRole: "Salesforce CRM Professional | Salesforce Administrator | Platform App Builder",
    signatureProject: "Projeto: Salesforce Skill Shine",
    trademarkDisclaimer: "Salesforce é marca registrada de sua respectiva proprietária. Este projeto é independente e educacional.",
    noItems: "Nenhuma competência neste grupo no momento.",
    maturityProfiles: [
      { name: "Explorer", desc: "Você está em fase de exploração. O foco agora é criar base, linguagem comum e prática guiada para ganhar segurança." },
      { name: "Builder em consolidação", desc: "Você já consegue construir soluções e entender fundamentos da plataforma, mas precisa fortalecer critérios de decisão, documentação, governança e repertório de projeto." },
      { name: "Problem Solver", desc: "Você demonstra capacidade de resolver problemas e conectar fundamentos com cenários reais. O próximo salto é aumentar autonomia e consistência." },
      { name: "Consultant Mindset", desc: "Você já apresenta leitura consultiva. O desenvolvimento deve focar influência, priorização, trade-offs e comunicação de impacto." },
      { name: "Strategic Architect", desc: "Você demonstra maturidade estratégica. O foco passa a ser governança, escalabilidade, visão sistêmica e mentoria de outras pessoas." },
    ],
  },
  en: {
    reportTitle: "Professional Salesforce Career Diagnostic",
    mentorNoteTitle: "Mentor Note",
    mentorNote: [
      "This report should not be read as a final grade for your career. It is a starting point to understand where you are today, which foundations are already solid, and which gaps may limit your growth in real projects.",
      "The purpose of mentoring is to turn this diagnostic into a practical plan focused on portfolio, professional positioning, interviews, and more mature technical decisions.",
    ],
    professionalReadingTitle: "Professional reading of your current moment",
    profileTitle: "Identified profile",
    maturityMapTitle: "Maturity map",
    revealsTitle: "What this diagnostic reveals",
    actionPlanTitle: "Recommended evolution plan",
    projectsTitle: "Practical projects to strengthen your portfolio",
    marketTitle: "How this result connects with the market",
    mentorshipTitle: "How mentoring can accelerate your evolution",
    ready: "Ready to use",
    evolving: "Evolving",
    priority: "Priority attention",
    mentorReading: "Mentor reading",
    professionalImpact: "Professional impact",
    objective: "Objective",
    practicedSkills: "Practiced skills",
    deliverable: "Expected deliverable",
    portfolioEvidence: "Portfolio evidence",
    next30: "Next 30 days — Critical foundations",
    next60: "Next 60 days — Guided project",
    next90: "Next 90 days — Professional positioning",
    marketText: "For an entry-level position, this result helps identify where there is already usable foundation. For a mid-level position or consulting work, it is still important to strengthen gaps that affect autonomy, documentation, troubleshooting, governance, and communication with business teams. This report does not promise a job, certification, or hiring; it organizes signals to guide the next development cycle.",
    mentorshipText: "This report shows where you are. Mentoring helps turn this diagnostic into direction, practice, and professional positioning.",
    mentorshipAreas: ["Individual Salesforce career plan", "Technical competency review", "Practical portfolio building", "Interview preparation", "Study organization", "LinkedIn positioning", "Transition to Admin, Business Analyst, Developer, Consultant, or Architect"],
    mentorshipCtas: ["Connect with Helsio Mattia on LinkedIn", "Explore the Salesforce Skill Shine project"],
    signatureRole: "Salesforce CRM Professional | Salesforce Administrator | Platform App Builder",
    signatureProject: "Project: Salesforce Skill Shine",
    trademarkDisclaimer: "Salesforce is a trademark of its respective owner. This project is independent and educational.",
    noItems: "No competency in this group at the moment.",
    maturityProfiles: [
      { name: "Explorer", desc: "You are in an exploration phase. The focus now is to build foundation, common language, and guided practice to gain confidence." },
      { name: "Consolidating Builder", desc: "You can already build solutions and understand platform fundamentals, but need to strengthen decision criteria, documentation, governance, and project repertoire." },
      { name: "Problem Solver", desc: "You show ability to solve problems and connect fundamentals to real scenarios. The next step is to increase autonomy and consistency." },
      { name: "Consultant Mindset", desc: "You already show consultative reading. Development should focus on influence, prioritization, trade-offs, and impact communication." },
      { name: "Strategic Architect", desc: "You show strategic maturity. The focus becomes governance, scalability, system thinking, and mentoring others." },
    ],
  },
  es: {
    reportTitle: "Diagnóstico Profesional de Carrera Salesforce",
    mentorNoteTitle: "Nota del Mentor",
    mentorNote: [
      "Este informe no debe leerse como una nota final sobre tu carrera. Es un punto de partida para entender dónde estás hoy, qué fundamentos ya están sólidos y qué brechas pueden limitar tu evolución en proyectos reales.",
      "La propuesta de la mentoría es transformar este diagnóstico en un plan práctico, con foco en portafolio, posicionamiento profesional, entrevistas y decisiones técnicas más maduras.",
    ],
    professionalReadingTitle: "Lectura profesional de tu momento actual",
    profileTitle: "Perfil identificado",
    maturityMapTitle: "Mapa de madurez",
    revealsTitle: "Lo que este diagnóstico revela",
    actionPlanTitle: "Plan de evolución recomendado",
    projectsTitle: "Proyectos prácticos para fortalecer tu portafolio",
    marketTitle: "Cómo este resultado conversa con el mercado",
    mentorshipTitle: "Cómo la mentoría puede acelerar tu evolución",
    ready: "Listo para usar",
    evolving: "En evolución",
    priority: "Atención prioritaria",
    mentorReading: "Lectura del mentor",
    professionalImpact: "Impacto profesional",
    objective: "Objetivo",
    practicedSkills: "Competencias practicadas",
    deliverable: "Entrega esperada",
    portfolioEvidence: "Evidencia para portafolio",
    next30: "Próximos 30 días — Fundamentos críticos",
    next60: "Próximos 60 días — Proyecto guiado",
    next90: "Próximos 90 días — Posicionamiento profesional",
    marketText: "Para una posición inicial, este resultado ayuda a identificar dónde ya existe una base aprovechable. Para una posición semi senior o actuación consultiva, todavía es importante fortalecer brechas con impacto en autonomía, documentación, troubleshooting, gobernanza y comunicación con áreas de negocio. Este informe no promete empleo, certificación o contratación; organiza señales para orientar el próximo ciclo de desarrollo.",
    mentorshipText: "Este informe muestra dónde estás. La mentoría ayuda a transformar este diagnóstico en dirección, práctica y posicionamiento profesional.",
    mentorshipAreas: ["Plan individual de carrera Salesforce", "Revisión de competencias técnicas", "Construcción de portafolio práctico", "Preparación para entrevistas", "Organización de estudios", "Posicionamiento en LinkedIn", "Transición a Admin, Business Analyst, Developer, Consultant o Architect"],
    mentorshipCtas: ["Conectar con Helsio Mattia en LinkedIn", "Conocer el proyecto Salesforce Skill Shine"],
    signatureRole: "Salesforce CRM Professional | Salesforce Administrator | Platform App Builder",
    signatureProject: "Proyecto: Salesforce Skill Shine",
    trademarkDisclaimer: "Salesforce es marca registrada de su respectiva propietaria. Este proyecto es independiente y educativo.",
    noItems: "No hay competencias en este grupo por ahora.",
    maturityProfiles: [
      { name: "Explorer", desc: "Estás en una fase de exploración. El foco ahora es crear base, lenguaje común y práctica guiada para ganar seguridad." },
      { name: "Builder en consolidación", desc: "Ya puedes construir soluciones y entender fundamentos de la plataforma, pero necesitas fortalecer criterios de decisión, documentación, gobernanza y repertorio de proyecto." },
      { name: "Problem Solver", desc: "Demuestras capacidad para resolver problemas y conectar fundamentos con escenarios reales. El próximo paso es aumentar autonomía y consistencia." },
      { name: "Consultant Mindset", desc: "Ya presentas lectura consultiva. El desarrollo debe enfocarse en influencia, priorización, trade-offs y comunicación de impacto." },
      { name: "Strategic Architect", desc: "Demuestras madurez estratégica. El foco pasa a ser gobernanza, escalabilidad, visión sistémica y mentoría de otras personas." },
    ],
  },
};

const practicalProjects: Record<string, Record<SupportedLang, Array<{ title: string; objective: string; skills: string; deliverable: string; evidence: string }>>> = {
  admin: {
    pt: [
      { title: "Gestão de atendimento no Service Cloud", objective: "Modelar um fluxo básico de atendimento com casos, filas e relatórios.", skills: "Service Cloud, filas, layouts, relatórios", deliverable: "Org demonstrável com processo documentado.", evidence: "Prints, diagrama do fluxo e README do projeto." },
      { title: "Modelo de segurança e permissões", objective: "Criar um desenho simples de perfis, permission sets e compartilhamento.", skills: "Segurança, OWD, permission sets", deliverable: "Matriz de acesso e configuração aplicada.", evidence: "Documento de decisão e exemplos de usuários." },
      { title: "Automação com Flow e relatórios", objective: "Automatizar uma rotina operacional e medir resultado em dashboard.", skills: "Flow, validações, relatórios", deliverable: "Flow testado e painel de acompanhamento.", evidence: "Vídeo curto ou sequência de telas." },
    ],
    en: [
      { title: "Service Cloud case management", objective: "Model a basic support flow with cases, queues, and reports.", skills: "Service Cloud, queues, layouts, reports", deliverable: "Demo org with documented process.", evidence: "Screenshots, flow diagram, and project README." },
      { title: "Security and permissions model", objective: "Create a simple design for profiles, permission sets, and sharing.", skills: "Security, OWD, permission sets", deliverable: "Access matrix and applied configuration.", evidence: "Decision document and user examples." },
      { title: "Flow automation and reports", objective: "Automate an operational routine and measure results in a dashboard.", skills: "Flow, validations, reports", deliverable: "Tested Flow and monitoring dashboard.", evidence: "Short video or screen sequence." },
    ],
    es: [
      { title: "Gestión de atención en Service Cloud", objective: "Modelar un flujo básico de atención con casos, colas e informes.", skills: "Service Cloud, colas, layouts, informes", deliverable: "Org demostrable con proceso documentado.", evidence: "Capturas, diagrama del flujo y README del proyecto." },
      { title: "Modelo de seguridad y permisos", objective: "Crear un diseño simple de perfiles, permission sets y compartición.", skills: "Seguridad, OWD, permission sets", deliverable: "Matriz de acceso y configuración aplicada.", evidence: "Documento de decisión y ejemplos de usuarios." },
      { title: "Automatización con Flow e informes", objective: "Automatizar una rutina operativa y medir resultados en un dashboard.", skills: "Flow, validaciones, informes", deliverable: "Flow probado y panel de seguimiento.", evidence: "Video corto o secuencia de pantallas." },
    ],
  },
  developer: {
    pt: [
      { title: "API REST com Apex", objective: "Expor e consumir dados com Apex REST usando tratamento de erros.", skills: "Apex, REST, SOQL, segurança", deliverable: "Endpoint funcional com testes.", evidence: "Coleção de chamadas e cobertura de testes." },
      { title: "LWC com dados reais", objective: "Criar componente para listar, filtrar e atualizar registros.", skills: "LWC, LDS, Apex, UX", deliverable: "Componente implantado em Lightning Page.", evidence: "Repositório com README e demo." },
      { title: "Testes e exceções", objective: "Cobrir cenários positivos, negativos e limites.", skills: "Apex tests, mocks, exceptions", deliverable: "Classe com testes robustos.", evidence: "Relatório de cobertura e explicação dos cenários." },
    ],
    en: [
      { title: "REST API with Apex", objective: "Expose and consume data with Apex REST using error handling.", skills: "Apex, REST, SOQL, security", deliverable: "Functional endpoint with tests.", evidence: "Request collection and test coverage." },
      { title: "LWC with real data", objective: "Create a component to list, filter, and update records.", skills: "LWC, LDS, Apex, UX", deliverable: "Component deployed on a Lightning Page.", evidence: "Repository with README and demo." },
      { title: "Tests and exceptions", objective: "Cover positive, negative, and edge scenarios.", skills: "Apex tests, mocks, exceptions", deliverable: "Class with robust tests.", evidence: "Coverage report and scenario explanation." },
    ],
    es: [
      { title: "API REST con Apex", objective: "Exponer y consumir datos con Apex REST usando manejo de errores.", skills: "Apex, REST, SOQL, seguridad", deliverable: "Endpoint funcional con pruebas.", evidence: "Colección de llamadas y cobertura de pruebas." },
      { title: "LWC con datos reales", objective: "Crear componente para listar, filtrar y actualizar registros.", skills: "LWC, LDS, Apex, UX", deliverable: "Componente desplegado en Lightning Page.", evidence: "Repositorio con README y demo." },
      { title: "Pruebas y excepciones", objective: "Cubrir escenarios positivos, negativos y límites.", skills: "Apex tests, mocks, exceptions", deliverable: "Clase con pruebas robustas.", evidence: "Informe de cobertura y explicación de escenarios." },
    ],
  },
  consultant: {
    pt: [
      { title: "Discovery e mapeamento de processo", objective: "Conduzir levantamento e transformar dores em fluxo priorizado.", skills: "Discovery, processos, facilitação", deliverable: "Mapa AS-IS/TO-BE e backlog inicial.", evidence: "Documento funcional e critérios de priorização." },
      { title: "User stories e critérios de aceite", objective: "Escrever histórias claras e testáveis para um cenário de CRM.", skills: "User stories, UAT, requisitos", deliverable: "Backlog com critérios de aceite.", evidence: "Planilha ou board documentado." },
      { title: "UAT e documentação funcional", objective: "Planejar validação com usuários e registrar evidências.", skills: "UAT, treinamento, documentação", deliverable: "Roteiro de testes e guia do usuário.", evidence: "Casos de teste e aceite assinado simulado." },
    ],
    en: [
      { title: "Discovery and process mapping", objective: "Run discovery and turn pain points into a prioritized flow.", skills: "Discovery, processes, facilitation", deliverable: "AS-IS/TO-BE map and initial backlog.", evidence: "Functional document and prioritization criteria." },
      { title: "User stories and acceptance criteria", objective: "Write clear and testable stories for a CRM scenario.", skills: "User stories, UAT, requirements", deliverable: "Backlog with acceptance criteria.", evidence: "Documented spreadsheet or board." },
      { title: "UAT and functional documentation", objective: "Plan user validation and record evidence.", skills: "UAT, training, documentation", deliverable: "Test script and user guide.", evidence: "Test cases and simulated sign-off." },
    ],
    es: [
      { title: "Discovery y mapeo de proceso", objective: "Conducir levantamiento y transformar dolores en flujo priorizado.", skills: "Discovery, procesos, facilitación", deliverable: "Mapa AS-IS/TO-BE y backlog inicial.", evidence: "Documento funcional y criterios de priorización." },
      { title: "User stories y criterios de aceptación", objective: "Escribir historias claras y testeables para un escenario de CRM.", skills: "User stories, UAT, requisitos", deliverable: "Backlog con criterios de aceptación.", evidence: "Planilla o board documentado." },
      { title: "UAT y documentación funcional", objective: "Planificar validación con usuarios y registrar evidencias.", skills: "UAT, entrenamiento, documentación", deliverable: "Guion de pruebas y guía de usuario.", evidence: "Casos de prueba y aceptación simulada." },
    ],
  },
  architect: {
    pt: [
      { title: "Modelo de dados e segurança", objective: "Desenhar objetos, relacionamentos e regras de acesso para um cenário corporativo.", skills: "Data model, segurança, governança", deliverable: "Diagrama e matriz de segurança.", evidence: "ADR com decisões e trade-offs." },
      { title: "Arquitetura de integração", objective: "Definir padrões de integração, eventos, limites e tratamento de falhas.", skills: "APIs, integração, resiliência", deliverable: "Desenho de integração e contratos.", evidence: "Diagrama, payloads e plano de monitoramento." },
      { title: "Governança e escalabilidade", objective: "Criar diretrizes para releases, qualidade e crescimento da solução.", skills: "DevOps, limites, governança", deliverable: "Plano de governança técnica.", evidence: "Checklist e roadmap técnico." },
    ],
    en: [
      { title: "Data model and security", objective: "Design objects, relationships, and access rules for an enterprise scenario.", skills: "Data model, security, governance", deliverable: "Diagram and security matrix.", evidence: "ADR with decisions and trade-offs." },
      { title: "Integration architecture", objective: "Define integration patterns, events, limits, and failure handling.", skills: "APIs, integration, resilience", deliverable: "Integration design and contracts.", evidence: "Diagram, payloads, and monitoring plan." },
      { title: "Governance and scalability", objective: "Create guidelines for releases, quality, and solution growth.", skills: "DevOps, limits, governance", deliverable: "Technical governance plan.", evidence: "Checklist and technical roadmap." },
    ],
    es: [
      { title: "Modelo de datos y seguridad", objective: "Diseñar objetos, relaciones y reglas de acceso para un escenario corporativo.", skills: "Data model, seguridad, gobernanza", deliverable: "Diagrama y matriz de seguridad.", evidence: "ADR con decisiones y trade-offs." },
      { title: "Arquitectura de integración", objective: "Definir patrones de integración, eventos, límites y manejo de fallas.", skills: "APIs, integración, resiliencia", deliverable: "Diseño de integración y contratos.", evidence: "Diagrama, payloads y plan de monitoreo." },
      { title: "Gobernanza y escalabilidad", objective: "Crear directrices para releases, calidad y crecimiento de la solución.", skills: "DevOps, límites, gobernanza", deliverable: "Plan de gobernanza técnica.", evidence: "Checklist y roadmap técnico." },
    ],
  },
};

const resolvePdfLang = (language: string): SupportedLang => {
  if (language.startsWith("en")) return "en";
  if (language.startsWith("es")) return "es";
  return "pt";
};

const setColor = (doc: jsPDF, color: Rgb) => doc.setTextColor(color[0], color[1], color[2]);
const setFill = (doc: jsPDF, color: Rgb) => doc.setFillColor(color[0], color[1], color[2]);
const getLastTableY = (doc: jsPDF) => (doc as PdfDocWithAutoTable).lastAutoTable?.finalY ?? 0;

const sanitizeFileName = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const formatDate = (lang: SupportedLang) => {
  const locale = lang === "en" ? "en-US" : lang === "es" ? "es-ES" : "pt-BR";
  return new Date().toLocaleDateString(locale, { year: "numeric", month: "short", day: "2-digit" });
};

const clampScore = (score: number) => Math.max(0, Math.min(5, Math.round(score || 0)));
const getStatus = (score: number, lang: SupportedLang) => pdfCopy[lang].statuses[clampScore(score)];

const getEstimatedLevel = (average: number, lang: SupportedLang) => {
  const levels = pdfCopy[lang].levels;
  if (average < 1.5) return levels[0];
  if (average < 2.5) return levels[1];
  if (average < 3.5) return levels[2];
  if (average < 4.5) return levels[3];
  return levels[4];
};

const getMaturityProfileIndex = (average: number) => {
  if (average < 1.5) return 0;
  if (average < 2.5) return 1;
  if (average < 3.5) return 2;
  if (average < 4.5) return 3;
  return 4;
};

const getScoreBand = (average: number): "low" | "mid" | "high" => {
  if (average < 2.3) return "low";
  if (average < 3.8) return "mid";
  return "high";
};

const getCategoryInterpretation = (average: number, type: "hard" | "soft", lang: SupportedLang) => {
  const copy = pdfCopy[lang];
  const scoreText = average < 2.3 ? copy.categoryScore.low : average < 3.8 ? copy.categoryScore.mid : copy.categoryScore.high;
  return `${copy.categoryIntro[type]} ${scoreText}`;
};

const getAssessmentStats = (category: CompetencyCategory, ratings: Record<string, number>, lang: SupportedLang) => {
  const skills = category.skills.map((skill) => ({ ...skill, score: clampScore(ratings[skill.id] || 0) }));
  const total = skills.length || 1;
  const scoreSum = skills.reduce((sum, skill) => sum + skill.score, 0);
  const average = scoreSum / total;
  const percentage = Math.round((scoreSum / (total * 5)) * 100);
  const assessed = skills.filter((skill) => skill.score > 0);
  const advanced = skills.filter((skill) => skill.score >= 4);
  const notEvaluated = skills.filter((skill) => skill.score === 0);
  const developing = skills.filter((skill) => skill.score > 0 && skill.score <= 2);
  const ready = skills.filter((skill) => skill.score >= 4);
  const evolving = skills.filter((skill) => skill.score >= 2 && skill.score <= 3);
  const priority = skills.filter((skill) => skill.score <= 1);
  const sortedRated = [...assessed].sort((a, b) => b.score - a.score);
  const sortedGaps = [...assessed].sort((a, b) => a.score - b.score);
  const mainStrength = sortedRated[0] ? getLocalizedString(sortedRated[0].name, lang) : pdfCopy[lang].notProvided;
  const mainGapSource = sortedGaps[0] || notEvaluated[0];
  const mainGap = mainGapSource ? getLocalizedString(mainGapSource.name, lang) : pdfCopy[lang].notProvided;

  return {
    skills,
    average,
    percentage,
    assessedCount: assessed.length,
    advancedCount: advanced.length,
    notEvaluatedCount: notEvaluated.length,
    developingCount: developing.length,
    ready,
    evolving,
    priority,
    estimatedLevel: getEstimatedLevel(average, lang),
    maturityProfile: premiumCopy[lang].maturityProfiles[getMaturityProfileIndex(average)],
    scoreBand: getScoreBand(average),
    mainStrength,
    mainGap,
  };
};

const ensureSpace = (doc: jsPDF, y: number, needed: number) => {
  const pageHeight = doc.internal.pageSize.getHeight();
  if (y + needed > pageHeight - 24) {
    doc.addPage();
    return 22;
  }
  return y;
};

const addWrappedText = (doc: jsPDF, text: string, x: number, y: number, width: number, fontSize = 10, lineHeight = 5) => {
  doc.setFontSize(fontSize);
  const lines = doc.splitTextToSize(text, width);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
};

const addSectionTitle = (doc: jsPDF, title: string, y: number) => {
  y = ensureSpace(doc, y, 22);
  setColor(doc, pdfTheme.colors.navy);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text(title, pdfTheme.marginX, y);
  setFill(doc, pdfTheme.colors.blue);
  doc.roundedRect(pdfTheme.marginX, y + 3, 22, 1.6, 0.8, 0.8, "F");
  doc.setFont("helvetica", "normal");
  return y + 12;
};

const addInsightBox = (doc: jsPDF, title: string, body: string[], y: number, color: Rgb = pdfTheme.colors.softBlue) => {
  const lines = body.flatMap((paragraph) => doc.splitTextToSize(paragraph, pdfTheme.contentWidth - 12));
  const boxHeight = 16 + lines.length * 4.6 + body.length * 2;
  y = ensureSpace(doc, y, boxHeight + 6);
  setFill(doc, color);
  doc.roundedRect(pdfTheme.marginX, y, pdfTheme.contentWidth, boxHeight, 5, 5, "F");
  setColor(doc, pdfTheme.colors.blue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text(title, pdfTheme.marginX + 6, y + 8);
  setColor(doc, pdfTheme.colors.slate);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  let textY = y + 16;
  body.forEach((paragraph) => {
    const paragraphLines = doc.splitTextToSize(paragraph, pdfTheme.contentWidth - 12);
    doc.text(paragraphLines, pdfTheme.marginX + 6, textY);
    textY += paragraphLines.length * 4.6 + 2;
  });
  return y + boxHeight + 8;
};

const getSkillList = (skills: RatedSkill[], lang: SupportedLang, fallback: string, limit = 5) => {
  const names = skills.slice(0, limit).map((skill) => getLocalizedString(skill.name, lang));
  return names.length ? names.join(", ") : fallback;
};

const getProfessionalReading = (
  trail: string,
  stats: ReturnType<typeof getAssessmentStats>,
  lang: SupportedLang
) => {
  const ready = getSkillList(stats.ready, lang, stats.mainStrength, 3);
  const priority = getSkillList(stats.priority, lang, stats.mainGap, 3);
  if (lang === "en") {
    return `Your result indicates a ${stats.maturityProfile.name} profile for the ${trail} path. You already show stronger signals in ${ready}, while ${priority} should be prioritized to increase autonomy, project confidence, and consistency in professional scenarios. ${stats.notEvaluatedCount > 0 ? `${stats.notEvaluatedCount} competencies were not assessed, so the reading should be refined as you complete the map.` : "The assessment coverage helps make this reading more consistent."}`;
  }
  if (lang === "es") {
    return `Tu resultado indica un perfil ${stats.maturityProfile.name} para la ruta ${trail}. Ya muestras señales más fuertes en ${ready}, mientras ${priority} debe priorizarse para aumentar autonomía, seguridad en proyectos y consistencia en escenarios profesionales. ${stats.notEvaluatedCount > 0 ? `${stats.notEvaluatedCount} competencias no fueron evaluadas, por lo que la lectura debe refinarse al completar el mapa.` : "La cobertura de la evaluación ayuda a que esta lectura sea más consistente."}`;
  }
  return `Seu resultado indica um perfil ${stats.maturityProfile.name} para a trilha ${trail}. Você já demonstra sinais mais fortes em ${ready}, enquanto ${priority} deve ser priorizado para aumentar autonomia, segurança em projetos e consistência em cenários profissionais. ${stats.notEvaluatedCount > 0 ? `${stats.notEvaluatedCount} competências não foram avaliadas, então a leitura deve ser refinada ao completar o mapa.` : "A cobertura da avaliação ajuda a tornar essa leitura mais consistente."}`;
};

const getRevealBullets = (stats: ReturnType<typeof getAssessmentStats>, lang: SupportedLang) => {
  const focus = stats.mainGap;
  if (lang === "en") {
    const base = stats.scoreBand === "low"
      ? ["You are not starting from zero, but the foundation still needs guided reinforcement.", "The next gain will come from reducing uncertainty in the most basic topics."]
      : stats.scoreBand === "mid"
        ? ["You already have a usable base for controlled demands.", "The next leap is not studying everything at once, but choosing the right priorities."]
        : ["You already show strong signals of autonomy in several topics.", "The next step is turning knowledge into influence, documentation, and repeatable decisions."];
    return [...base, `The area ${focus} deserves attention because it may affect confidence in real project scenarios.`, "Guided practice and project repertoire tend to generate more value than isolated content consumption."];
  }
  if (lang === "es") {
    const base = stats.scoreBand === "low"
      ? ["No estás empezando desde cero, pero la base todavía necesita refuerzo guiado.", "El próximo avance vendrá de reducir incertidumbre en los temas más básicos."]
      : stats.scoreBand === "mid"
        ? ["Ya tienes una base utilizable para demandas controladas.", "El próximo salto no es estudiar todo al mismo tiempo, sino elegir prioridades correctas."]
        : ["Ya muestras señales fuertes de autonomía en varios temas.", "El siguiente paso es transformar conocimiento en influencia, documentación y decisiones repetibles."];
    return [...base, `El área ${focus} merece atención porque puede afectar tu seguridad en escenarios reales de proyecto.`, "La práctica guiada y el repertorio de proyecto suelen generar más valor que consumir contenido aislado."];
  }
  const base = stats.scoreBand === "low"
    ? ["Você não está começando do zero, mas a base ainda precisa de reforço guiado.", "O próximo ganho virá de reduzir incerteza nos temas mais básicos."]
    : stats.scoreBand === "mid"
      ? ["Sua base já permite atuar em demandas controladas.", "O próximo salto não é estudar tudo ao mesmo tempo, mas escolher prioridades certas."]
      : ["Você já mostra sinais fortes de autonomia em vários temas.", "O próximo passo é transformar conhecimento em influência, documentação e decisões repetíveis."];
  return [...base, `A área ${focus} merece atenção porque pode afetar sua segurança em cenários reais de projeto.`, "Prática guiada e repertório de projeto tendem a gerar mais valor do que consumo isolado de conteúdo."];
};

const addCoverHeader = (
  doc: jsPDF,
  data: FormData,
  trail: string,
  generatedAt: string,
  lang: SupportedLang
) => {
  const copy = pdfCopy[lang];
  const premium = premiumCopy[lang];
  const width = doc.internal.pageSize.getWidth();
  setFill(doc, pdfTheme.colors.softBlue);
  doc.roundedRect(12, 12, width - 24, 52, 8, 8, "F");
  setFill(doc, pdfTheme.colors.cyan);
  doc.circle(width - 26, 24, 14, "F");
  setFill(doc, pdfTheme.colors.blue);
  doc.circle(width - 42, 52, 9, "F");

  setColor(doc, pdfTheme.colors.blue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Salesforce Skill Shine", 20, 24);

  setColor(doc, pdfTheme.colors.navy);
  doc.setFontSize(22);
  doc.text(premium.reportTitle, 20, 36);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  setColor(doc, pdfTheme.colors.slate);
  doc.text(`${copy.trail}: ${trail}`, 20, 47);
  doc.text(`${copy.name}: ${data.fullName}`, 20, 55);
  doc.text(`${copy.generatedAt}: ${generatedAt}`, width - 20, 55, { align: "right" });

  setColor(doc, pdfTheme.colors.slate);
  return addWrappedText(doc, copy.reportDescription, 20, 75, width - 40, 10, 5) + 8;
};

const addMetricCards = (doc: jsPDF, cards: MetricCard[], y: number) => {
  const gap = 4;
  const cardWidth = (pdfTheme.contentWidth - gap * 2) / 3;
  const cardHeight = 24;
  cards.forEach((card, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const x = pdfTheme.marginX + col * (cardWidth + gap);
    const cardY = y + row * (cardHeight + gap);

    setFill(doc, row === 0 ? pdfTheme.colors.softBlue : pdfTheme.colors.softSlate);
    doc.roundedRect(x, cardY, cardWidth, cardHeight, 4, 4, "F");
    setColor(doc, pdfTheme.colors.blue);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(card.value, x + 4, cardY + 10);
    setColor(doc, pdfTheme.colors.navy);
    doc.setFontSize(8.5);
    doc.text(card.label, x + 4, cardY + 16);
    setColor(doc, pdfTheme.colors.muted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(doc.splitTextToSize(card.hint, cardWidth - 8), x + 4, cardY + 21);
  });

  return y + Math.ceil(cards.length / 3) * (cardHeight + gap) + 4;
};

const addParticipantInfo = (doc: jsPDF, data: FormData, trail: string, lang: SupportedLang, y: number) => {
  const copy = pdfCopy[lang];
  y = addSectionTitle(doc, copy.participantData, y);
  const fields = [
    [copy.name, data.fullName],
    [copy.email, data.email],
    [copy.phone, data.phone],
    [copy.role, data.role],
    [copy.experience, data.experience],
    [copy.trail, trail],
    ["LinkedIn", data.linkedin?.trim() || copy.notProvided],
  ];
  const colWidth = 86;
  const rowHeight = 15;
  fields.forEach(([label, value], index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = pdfTheme.marginX + col * (colWidth + 10);
    const itemY = y + row * rowHeight;
    setColor(doc, pdfTheme.colors.muted);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(label, x, itemY);
    setColor(doc, pdfTheme.colors.navy);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.text(doc.splitTextToSize(value || copy.notProvided, colWidth), x, itemY + 5);
  });
  return y + Math.ceil(fields.length / 2) * rowHeight + 4;
};

const addExecutiveSummary = (
  doc: jsPDF,
  trail: string,
  stats: ReturnType<typeof getAssessmentStats>,
  lang: SupportedLang,
  y: number
) => {
  const copy = pdfCopy[lang];
  y = addSectionTitle(doc, copy.diagnosticSummary, y);
  const summaryText = copy.summary(stats.estimatedLevel, trail, stats.mainStrength, stats.mainGap);
  setColor(doc, pdfTheme.colors.slate);
  doc.setFont("helvetica", "normal");
  y = addWrappedText(doc, summaryText, pdfTheme.marginX, y, pdfTheme.contentWidth, 10, 5) + 4;

  const cards = [
    { label: copy.score, value: `${stats.percentage}%`, hint: `${stats.average.toFixed(1)}/5` },
    { label: copy.estimatedLevel, value: stats.estimatedLevel, hint: copy.trail },
    { label: copy.assessed, value: String(stats.assessedCount), hint: copy.notEvaluated },
    { label: copy.advanced, value: String(stats.advancedCount), hint: copy.strong },
    { label: copy.develop, value: String(stats.developingCount), hint: copy.mainGap },
    { label: copy.notEvaluated, value: String(stats.notEvaluatedCount), hint: copy.assessed },
  ];
  y = addMetricCards(doc, cards, y);

  setColor(doc, pdfTheme.colors.slate);
  doc.setFontSize(9.5);
  doc.text(`${copy.mainStrength}: ${stats.mainStrength}`, pdfTheme.marginX, y + 3);
  doc.text(`${copy.mainGap}: ${stats.mainGap}`, pdfTheme.marginX, y + 10);
  return y + 18;
};

const addMentorNote = (doc: jsPDF, lang: SupportedLang, y: number) => {
  const premium = premiumCopy[lang];
  return addInsightBox(doc, premium.mentorNoteTitle, premium.mentorNote, y, pdfTheme.colors.softCyan);
};

const addProfessionalReading = (
  doc: jsPDF,
  trail: string,
  stats: ReturnType<typeof getAssessmentStats>,
  lang: SupportedLang,
  y: number
) => {
  const premium = premiumCopy[lang];
  y = addSectionTitle(doc, premium.professionalReadingTitle, y);
  setColor(doc, pdfTheme.colors.slate);
  doc.setFont("helvetica", "normal");
  return addWrappedText(doc, getProfessionalReading(trail, stats, lang), pdfTheme.marginX, y, pdfTheme.contentWidth, 10, 5) + 8;
};

const addMaturityProfile = (
  doc: jsPDF,
  stats: ReturnType<typeof getAssessmentStats>,
  lang: SupportedLang,
  y: number
) => {
  const premium = premiumCopy[lang];
  y = ensureSpace(doc, y, 32);
  setFill(doc, pdfTheme.colors.softBlue);
  doc.roundedRect(pdfTheme.marginX, y, pdfTheme.contentWidth, 30, 5, 5, "F");
  setColor(doc, pdfTheme.colors.blue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(premium.profileTitle, pdfTheme.marginX + 6, y + 8);
  setColor(doc, pdfTheme.colors.navy);
  doc.setFontSize(14);
  doc.text(stats.maturityProfile.name, pdfTheme.marginX + 6, y + 16);
  setColor(doc, pdfTheme.colors.slate);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.8);
  doc.text(doc.splitTextToSize(stats.maturityProfile.desc, pdfTheme.contentWidth - 12), pdfTheme.marginX + 6, y + 23);
  return y + 40;
};

const addMaturityMap = (doc: jsPDF, stats: ReturnType<typeof getAssessmentStats>, lang: SupportedLang, y: number) => {
  const premium = premiumCopy[lang];
  y = addSectionTitle(doc, premium.maturityMapTitle, y);
  const columns = [
    {
      title: premium.ready,
      skills: stats.ready,
      color: pdfTheme.colors.softCyan,
      reading: lang === "en" ? "These topics can already support controlled professional use." : lang === "es" ? "Estos temas ya pueden apoyar uso profesional controlado." : "Esses temas já podem apoiar uso profissional controlado.",
      impact: lang === "en" ? "Use them as portfolio evidence and interview examples." : lang === "es" ? "Úsalos como evidencia de portafolio y ejemplos de entrevista." : "Use como evidência de portfólio e exemplos de entrevista.",
    },
    {
      title: premium.evolving,
      skills: stats.evolving,
      color: pdfTheme.colors.softBlue,
      reading: lang === "en" ? "These competencies are forming and need repetition in realistic scenarios." : lang === "es" ? "Estas competencias están formándose y necesitan repetición en escenarios realistas." : "Essas competências estão se formando e precisam de repetição em cenários realistas.",
      impact: lang === "en" ? "They define the next step toward autonomy." : lang === "es" ? "Definen el próximo paso hacia autonomía." : "Elas definem o próximo passo rumo à autonomia.",
    },
    {
      title: premium.priority,
      skills: stats.priority,
      color: pdfTheme.colors.softSlate,
      reading: lang === "en" ? "Topics in this group can limit autonomy in real projects." : lang === "es" ? "Los temas en este grupo pueden limitar autonomía en proyectos reales." : "Temas neste grupo podem limitar autonomia em projetos reais.",
      impact: lang === "en" ? "Prioritize them by business and project impact, not only by study preference." : lang === "es" ? "Priorízalos por impacto de negocio y proyecto, no solo por preferencia de estudio." : "Priorize por impacto de negócio e projeto, não só por preferência de estudo.",
    },
  ];

  const colWidth = (pdfTheme.contentWidth - 8) / 3;
  const cardHeight = 54;
  y = ensureSpace(doc, y, cardHeight + 8);
  columns.forEach((column, index) => {
    const x = pdfTheme.marginX + index * (colWidth + 4);
    setFill(doc, column.color);
    doc.roundedRect(x, y, colWidth, cardHeight, 4, 4, "F");
    setColor(doc, pdfTheme.colors.navy);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.2);
    doc.text(column.title, x + 4, y + 8);
    setColor(doc, pdfTheme.colors.slate);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(doc.splitTextToSize(getSkillList(column.skills, lang, premium.noItems, 5), colWidth - 8), x + 4, y + 16);
    doc.setFont("helvetica", "bold");
    doc.text(premium.mentorReading, x + 4, y + 31);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(column.reading, colWidth - 8), x + 4, y + 36);
    doc.setFont("helvetica", "bold");
    doc.text(premium.professionalImpact, x + 4, y + 47);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(column.impact, colWidth - 8), x + 4, y + 52);
  });
  return y + cardHeight + 12;
};

const addDiagnosisReveals = (doc: jsPDF, stats: ReturnType<typeof getAssessmentStats>, lang: SupportedLang, y: number) => {
  const premium = premiumCopy[lang];
  y = addSectionTitle(doc, premium.revealsTitle, y);
  setColor(doc, pdfTheme.colors.slate);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  getRevealBullets(stats, lang).forEach((bullet) => {
    y = ensureSpace(doc, y, 9);
    doc.text(doc.splitTextToSize(`• ${bullet}`, pdfTheme.contentWidth), pdfTheme.marginX, y);
    y += 8;
  });
  return y + 4;
};

const addCategoryTable = (
  doc: jsPDF,
  title: string,
  type: "hard" | "soft",
  skills: RatedSkill[],
  lang: SupportedLang,
  y: number
) => {
  if (skills.length === 0) return y;
  const copy = pdfCopy[lang];
  y = addSectionTitle(doc, title, y);
  const average = skills.reduce((sum, skill) => sum + skill.score, 0) / skills.length;
  setColor(doc, pdfTheme.colors.slate);
  doc.setFont("helvetica", "normal");
  y = addWrappedText(doc, getCategoryInterpretation(average, type, lang), pdfTheme.marginX, y, pdfTheme.contentWidth, 9.5, 5) + 3;

  autoTable(doc, {
    startY: y,
    margin: { left: pdfTheme.marginX, right: pdfTheme.marginX, bottom: 24 },
    head: [[title, copy.level, copy.status, copy.interpretation]],
    body: skills.map((skill) => [
      getLocalizedString(skill.name, lang),
      `${skill.score}/5`,
      getStatus(skill.score, lang),
      copy.skillInterpretation[skill.score],
    ]),
    theme: "plain",
    styles: {
      font: "helvetica",
      fontSize: 8.5,
      cellPadding: 3,
      textColor: pdfTheme.colors.slate,
      lineColor: pdfTheme.colors.border,
      lineWidth: 0.1,
      valign: "middle",
    },
    headStyles: {
      fillColor: type === "hard" ? pdfTheme.colors.blue : pdfTheme.colors.teal,
      textColor: pdfTheme.colors.white,
      fontStyle: "bold",
    },
    alternateRowStyles: { fillColor: pdfTheme.colors.softSlate },
    columnStyles: {
      0: { cellWidth: 62 },
      1: { cellWidth: 24, halign: "center" },
      2: { cellWidth: 34 },
      3: { cellWidth: 62 },
    },
  });

  return getLastTableY(doc) + 14;
};

const addActionPlan = (
  doc: jsPDF,
  categoryId: string,
  stats: ReturnType<typeof getAssessmentStats>,
  lang: SupportedLang,
  y: number
) => {
  const copy = pdfCopy[lang];
  const premium = premiumCopy[lang];
  y = addSectionTitle(doc, premium.actionPlanTitle || copy.actionPlan, y);
  const focusSkills = stats.skills
    .filter((skill) => skill.score > 0 && skill.score <= 2)
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((skill) => getLocalizedString(skill.name, lang));
  const fallbackTopics = pathTopics[categoryId]?.[lang] || pathTopics.admin[lang];
  const focus = (focusSkills.length ? focusSkills : fallbackTopics.slice(0, 3)).join(", ");
  const blocks = [
    [premium.next30, copy.plan30(focus)],
    [premium.next60, copy.plan60],
    [premium.next90, copy.plan90],
  ] as const;

  blocks.forEach(([title, items], index) => {
    y = ensureSpace(doc, y, 36);
    const x = pdfTheme.marginX;
    const cardWidth = pdfTheme.contentWidth;
    const bulletLines = items.map((item) => doc.splitTextToSize(`• ${item}`, cardWidth - 12));
    const cardHeight = 17 + bulletLines.reduce((sum, lines) => sum + lines.length * 4.2 + 1.5, 0);

    setFill(doc, index === 0 ? pdfTheme.colors.softBlue : index === 1 ? pdfTheme.colors.softCyan : pdfTheme.colors.softSlate);
    doc.roundedRect(x, y, cardWidth, cardHeight, 4, 4, "F");
    setColor(doc, pdfTheme.colors.blue);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(title, x + 4, y + 8);
    setColor(doc, pdfTheme.colors.slate);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    let bulletY = y + 17;
    bulletLines.forEach((lines) => {
      doc.text(lines, x + 4, bulletY);
      bulletY += lines.length * 4.2 + 1.5;
    });
    y += cardHeight + 4;
  });

  return y + 8;
};

const addRecommendations = (doc: jsPDF, lang: SupportedLang, y: number) => {
  const copy = pdfCopy[lang];
  y = addSectionTitle(doc, copy.recommendations, y);
  const recommendationText = lang === "en"
    ? "Combine official documentation, Trailhead modules, practical projects, mock scenarios, real case review, and community participation."
    : lang === "es"
      ? "Combina documentación oficial, módulos de Trailhead, proyectos prácticos, simulados, revisión de casos reales y participación en la comunidad."
      : "Combine documentação oficial, módulos do Trailhead, projetos práticos, simulados, revisão de casos reais e participação na comunidade.";
  setColor(doc, pdfTheme.colors.slate);
  y = addWrappedText(doc, recommendationText, pdfTheme.marginX, y, pdfTheme.contentWidth, 9.5, 5) + 4;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  setColor(doc, pdfTheme.colors.navy);
  doc.text(copy.officialLinks, pdfTheme.marginX, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  studyLinks.forEach((link) => {
    y = ensureSpace(doc, y, 8);
    setColor(doc, pdfTheme.colors.blue);
    doc.textWithLink(`• ${link.label}`, pdfTheme.marginX, y, { url: link.url });
    y += 6;
  });
  return y + 4;
};

const addPracticalProjects = (doc: jsPDF, categoryId: string, lang: SupportedLang, y: number) => {
  const premium = premiumCopy[lang];
  y = addSectionTitle(doc, premium.projectsTitle, y);
  const projects = practicalProjects[categoryId]?.[lang] || practicalProjects.admin[lang];

  projects.forEach((project) => {
    const lines = [
      `${premium.objective}: ${project.objective}`,
      `${premium.practicedSkills}: ${project.skills}`,
      `${premium.deliverable}: ${project.deliverable}`,
      `${premium.portfolioEvidence}: ${project.evidence}`,
    ].flatMap((text) => doc.splitTextToSize(text, pdfTheme.contentWidth - 12));
    const cardHeight = 16 + lines.length * 4.2;
    y = ensureSpace(doc, y, cardHeight + 6);
    setFill(doc, pdfTheme.colors.softSlate);
    doc.roundedRect(pdfTheme.marginX, y, pdfTheme.contentWidth, cardHeight, 4, 4, "F");
    setColor(doc, pdfTheme.colors.navy);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.text(project.title, pdfTheme.marginX + 5, y + 8);
    setColor(doc, pdfTheme.colors.slate);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.2);
    let textY = y + 15;
    [
      `${premium.objective}: ${project.objective}`,
      `${premium.practicedSkills}: ${project.skills}`,
      `${premium.deliverable}: ${project.deliverable}`,
      `${premium.portfolioEvidence}: ${project.evidence}`,
    ].forEach((text) => {
      const wrapped = doc.splitTextToSize(text, pdfTheme.contentWidth - 12);
      doc.text(wrapped, pdfTheme.marginX + 5, textY);
      textY += wrapped.length * 4.2;
    });
    y += cardHeight + 5;
  });

  return y + 2;
};

const addMarketBenchmark = (doc: jsPDF, lang: SupportedLang, y: number) => {
  const premium = premiumCopy[lang];
  y = addSectionTitle(doc, premium.marketTitle, y);
  setColor(doc, pdfTheme.colors.slate);
  doc.setFont("helvetica", "normal");
  return addWrappedText(doc, premium.marketText, pdfTheme.marginX, y, pdfTheme.contentWidth, 9.5, 5) + 8;
};

const addMentorshipSection = (doc: jsPDF, lang: SupportedLang, y: number) => {
  const premium = premiumCopy[lang];
  y = addSectionTitle(doc, premium.mentorshipTitle, y);
  y = addInsightBox(doc, premium.mentorReading, [premium.mentorshipText], y, pdfTheme.colors.softBlue);
  setColor(doc, pdfTheme.colors.slate);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  premium.mentorshipAreas.forEach((area) => {
    y = ensureSpace(doc, y, 7);
    doc.text(`• ${area}`, pdfTheme.marginX, y);
    y += 6;
  });
  y += 3;
  premium.mentorshipCtas.forEach((cta, index) => {
    y = ensureSpace(doc, y, 8);
    const url = index === 0 ? "https://linkedin.com/in/helsiomattia" : "https://helsiomattia.github.io/salesforce-skill-shine/";
    setColor(doc, pdfTheme.colors.blue);
    doc.textWithLink(`→ ${cta}`, pdfTheme.marginX, y, { url });
    y += 7;
  });
  return y + 4;
};

const addSignature = (doc: jsPDF, lang: SupportedLang, y: number) => {
  const premium = premiumCopy[lang];
  y = ensureSpace(doc, y, 38);
  setFill(doc, pdfTheme.colors.softSlate);
  doc.roundedRect(pdfTheme.marginX, y, pdfTheme.contentWidth, 34, 5, 5, "F");
  setColor(doc, pdfTheme.colors.navy);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Helsio Mattia", pdfTheme.marginX + 6, y + 10);
  setColor(doc, pdfTheme.colors.slate);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(premium.signatureRole, pdfTheme.marginX + 6, y + 17);
  doc.text(premium.signatureProject, pdfTheme.marginX + 6, y + 23);
  setColor(doc, pdfTheme.colors.muted);
  doc.setFontSize(7.8);
  doc.text(doc.splitTextToSize(premium.trademarkDisclaimer, pdfTheme.contentWidth - 12), pdfTheme.marginX + 6, y + 30);
  return y + 42;
};

const addFooterToAllPages = (doc: jsPDF, lang: SupportedLang, generatedAt: string) => {
  const copy = pdfCopy[lang];
  const pageCount = doc.getNumberOfPages();
  const width = doc.internal.pageSize.getWidth();
  for (let page = 1; page <= pageCount; page += 1) {
    doc.setPage(page);
    doc.setDrawColor(...pdfTheme.colors.border);
    doc.line(pdfTheme.marginX, pdfTheme.footerY - 6, width - pdfTheme.marginX, pdfTheme.footerY - 6);
    setColor(doc, pdfTheme.colors.muted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(`Salesforce Skill Shine • ${generatedAt}`, pdfTheme.marginX, pdfTheme.footerY);
    doc.text(copy.footerNote, width / 2, pdfTheme.footerY, { align: "center" });
    doc.text(`${copy.page} ${page}/${pageCount}`, width - pdfTheme.marginX, pdfTheme.footerY, { align: "right" });
  }
};

interface FinishPanelProps {
  category: CompetencyCategory;
  ratings: Record<string, number>;
}

const FinishPanel = ({ category, ratings }: FinishPanelProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'pt';
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lgpd: false,
    },
  });

  const generatePDF = (data: FormData) => {
    setIsGenerating(true);
    setPdfError(null);
    
    try {
      const pdfLang = resolvePdfLang(lang);
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const trail = getLocalizedString(category.title, pdfLang);
      const generatedAt = formatDate(pdfLang);
      const copy = pdfCopy[pdfLang];
      const stats = getAssessmentStats(category, ratings, pdfLang);

      let y = addCoverHeader(doc, data, trail, generatedAt, pdfLang);
      y = addMentorNote(doc, pdfLang, y);
      y = addExecutiveSummary(doc, trail, stats, pdfLang, y);
      y = addProfessionalReading(doc, trail, stats, pdfLang, y);
      y = addMaturityProfile(doc, stats, pdfLang, y);
      y = addMaturityMap(doc, stats, pdfLang, y);
      y = addParticipantInfo(doc, data, trail, pdfLang, y);
      y = addDiagnosisReveals(doc, stats, pdfLang, y);

      const hardSkills = stats.skills.filter((skill) => skill.type === "hard" || !skill.type);
      const softSkills = stats.skills.filter((skill) => skill.type === "soft");
      y = addCategoryTable(doc, copy.hardSkills, "hard", hardSkills, pdfLang, y);
      y = addCategoryTable(doc, copy.softSkills, "soft", softSkills, pdfLang, y);
      y = addActionPlan(doc, category.id, stats, pdfLang, y);
      y = addPracticalProjects(doc, category.id, pdfLang, y);
      y = addMarketBenchmark(doc, pdfLang, y);
      y = addRecommendations(doc, pdfLang, y);
      y = addMentorshipSection(doc, pdfLang, y);
      y = addSignature(doc, pdfLang, y);

      addFooterToAllPages(doc, pdfLang, generatedAt);

      const fileTrail = sanitizeFileName(trail);
      const fileName = sanitizeFileName(data.fullName);
      const suffix = fileName ? `${fileTrail}-${fileName}` : fileTrail;
      doc.save(`relatorio-salesforce-skill-shine-${suffix}.pdf`);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      setPdfError("Não foi possível gerar o PDF. Revise os dados e tente novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  const onSubmit = (data: FormData) => {
    generatePDF(data);
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
        className="mx-auto max-w-4xl rounded-[40px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50"
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
              className="group flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
