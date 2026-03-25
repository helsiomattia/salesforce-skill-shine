export interface Skill {
  id: string;
  name: string;
  description: string;
}

export interface CompetencyCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  skills: Skill[];
}

export const competencyCategories: CompetencyCategory[] = [
  {
    id: "admin",
    title: "Administrator",
    icon: "⚙️",
    description: "Configuração, segurança, automação e gestão da plataforma",
    color: "primary",
    skills: [
      { id: "admin-1", name: "User Management & Security", description: "Perfis, roles, permission sets, sharing rules" },
      { id: "admin-2", name: "Data Management", description: "Import/export, data loader, deduplicação" },
      { id: "admin-3", name: "Automation (Flow)", description: "Record-triggered flows, screen flows, scheduled flows" },
      { id: "admin-4", name: "Reports & Dashboards", description: "Report types, filtros, dashboards dinâmicos" },
      { id: "admin-5", name: "AppExchange & Packages", description: "Instalação, gestão de pacotes e integrações" },
      { id: "admin-6", name: "Object & Field Configuration", description: "Custom objects, fields, page layouts, record types" },
    ],
  },
  {
    id: "developer",
    title: "Developer",
    icon: "💻",
    description: "Apex, LWC, integrações e desenvolvimento customizado",
    color: "secondary",
    skills: [
      { id: "dev-1", name: "Apex Programming", description: "Classes, triggers, batch, queueable, scheduled" },
      { id: "dev-2", name: "Lightning Web Components", description: "Componentes reativos, events, wire service" },
      { id: "dev-3", name: "SOQL & SOSL", description: "Queries, subqueries, aggregate functions" },
      { id: "dev-4", name: "APIs & Integrations", description: "REST, SOAP, callouts, connected apps" },
      { id: "dev-5", name: "Testing & Deployment", description: "Test classes, CI/CD, change sets, scratch orgs" },
      { id: "dev-6", name: "Governor Limits", description: "Bulkification, limites de execução, otimização" },
    ],
  },
  {
    id: "consultant",
    title: "Consultant",
    icon: "📋",
    description: "Análise de negócio, implementação e melhores práticas",
    color: "accent",
    skills: [
      { id: "con-1", name: "Sales Cloud", description: "Leads, oportunidades, forecasting, territory management" },
      { id: "con-2", name: "Service Cloud", description: "Cases, knowledge, entitlements, omni-channel" },
      { id: "con-3", name: "Marketing Cloud", description: "Journeys, email studio, automation studio" },
      { id: "con-4", name: "CPQ", description: "Products, price books, quotes, approval processes" },
      { id: "con-5", name: "Data Modeling", description: "Relacionamentos, schema design, data migration" },
      { id: "con-6", name: "Business Analysis", description: "Levantamento de requisitos, user stories, GAP analysis" },
    ],
  },
  {
    id: "architect",
    title: "Architect",
    icon: "🏗️",
    description: "Arquitetura de soluções, design patterns e governança",
    color: "primary",
    skills: [
      { id: "arc-1", name: "Solution Design", description: "Arquitetura de soluções multi-cloud" },
      { id: "arc-2", name: "Integration Architecture", description: "Middleware, event-driven, platform events" },
      { id: "arc-3", name: "Data Architecture", description: "Large data volumes, archiving, data lifecycle" },
      { id: "arc-4", name: "Identity & Access", description: "SSO, OAuth, SAML, MFA, identity providers" },
      { id: "arc-5", name: "DevOps & Governance", description: "Release management, environments, CoE" },
      { id: "arc-6", name: "Performance & Scalability", description: "Caching, async processing, scalability patterns" },
    ],
  },
];

export const skillLevels = [
  { value: 0, label: "Não avaliado", color: "muted" },
  { value: 1, label: "Iniciante", color: "destructive" },
  { value: 2, label: "Básico", color: "warning" },
  { value: 3, label: "Intermediário", color: "accent" },
  { value: 4, label: "Avançado", color: "secondary" },
  { value: 5, label: "Especialista", color: "success" },
];
