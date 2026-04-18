export interface Skill {
  id: string;
  name: string;
  description: string;
  type?: "hard" | "soft";
  requirements?: Record<number, string>;
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
      { 
        id: "admin-1", 
        name: "User Management & Security", 
        description: "Perfis, roles, permission sets, sharing rules",
        type: "hard",
        requirements: {
          1: "Conhecimentos em treinamento.",
          2: "Consegue criar e editar usuários, perfis simples e permissões básicas.",
          3: "Entende regras de compartilhamento, papéis e conjuntos de permissões. Mantém política de segurança alinhada às melhores práticas.",
          4: "Desenha estratégias de segurança organizacional com auditoria e monitoramento. Integra SSO quando necessário.",
          5: "Referência em segurança governamental (GDPR, LGPD). Coordena revisões de compliance em todo o Salesforce."
        }
      },
      { 
        id: "admin-2", 
        name: "Object & Field Configuration", 
        description: "Custom objects, fields, page layouts, record types",
        type: "hard",
        requirements: {
          1: "Noções sobre a estrutura de objetos e campos.",
          2: "Cria objetos e campos básicos e faz ajustes simples de layout.",
          3: "Domina objetos customizados intermediários, relacionamentos (master-detail, lookup) e layouts otimizados.",
          4: "Planeja estruturas complexas de dados com foco em performance e escalabilidade. Cria fórmulas avançadas.",
          5: "Lidera revisões de arquitetura e governança de dados. Orienta o uso padronizado de objetos e componentes."
        }
      },
      { 
        id: "admin-3", 
        name: "Automation (Flow, Process Builder)", 
        description: "Record-triggered flows, screen flows, scheduled flows",
        type: "hard",
        requirements: {
          1: "Noções sobre fluxos e lógica condicional.",
          2: "Cria fluxos de trabalho simples para automatizar tarefas básicas.",
          3: "Configura Flow Builder com múltiplas condições e ações. Conhece boas práticas de automação.",
          4: "Desenha processos complexos de aprovação e orquestra fluxos avançados (sub-flows). Entende impacto de governança.",
          5: "Governança completa de automações, versionamento, testes. Otimiza processos para alto volume de dados."
        }
      },
      { 
        id: "admin-4", 
        name: "Data Management", 
        description: "Import/export, data loader, deduplicação",
        type: "hard",
        requirements: {
          1: "Noções de inserção e atualização de registros via interface.",
          2: "Usa Data Import Wizard para cargas pequenas e faz limpeza básica de duplicados.",
          3: "Opera Data Loader em massa, define regras de duplicação e monitora qualidade de dados.",
          4: "Cria políticas de governança de dados e rotinas automáticas de limpeza. Gera relatórios de qualidade.",
          5: "Implementa soluções de MDM integradas ao Salesforce. Lida com big data e data lakes."
        }
      },
      { 
        id: "admin-5", 
        name: "Reports & Dashboards", 
        description: "Report types, filtros, dashboards dinâmicos",
        type: "hard",
        requirements: {
          1: "Sabe como visualizar relatórios existentes.",
          2: "Cria relatórios tabulares e sumários básicos para atender equipes.",
          3: "Utiliza relatórios avançados, fórmulas em relatórios e dashboards de uso geral.",
          4: "Desenvolve painéis estratégicos para gerência, usando recursos avançados (filtros, joined reports).",
          5: "Realiza análises preditivas. Integra dashboards a plataformas de BI para visão 360°."
        }
      },
      {
        id: "admin-s1",
        name: "Suporte a Usuários e Trabalho em Equipe",
        description: "Atendimento a chamados, resolução de problemas cotidianos e treinamentos",
        type: "soft",
        requirements: {
          1: "Presta ajuda em dúvidas muito básicas ou direciona o problema.",
          2: "Atende chamados ou tickets básicos e dá orientação simples ao usuário final.",
          3: "Resolve problemas comuns de forma sistemática. Desenvolve mini-treinamentos internos.",
          4: "Lidera suporte, cria base de conhecimento e backlog. Reduz incidentes repetitivos.",
          5: "Define SLAs, mede satisfação do usuário e coordena equipes multidisciplinares."
        }
      },
      {
        id: "admin-s2",
        name: "Comunicação e Documentação",
        description: "Registro de processos, manuais de melhores práticas e clareza na solução",
        type: "soft",
        requirements: {
          1: "Aponta problemas em documentações existentes, comunica-se em reuniões.",
          2: "Escreve manuais simples para usuários e reporta problemas de modo claro.",
          3: "Documenta processos de configuração e automação garantindo reuso. Apresentações internas.",
          4: "Comunica projetos/resultados para times diversos. Redige políticas oficiais complexas.",
          5: "Participa de governança global, apresentações executivas. Publica guias de boas práticas."
        }
      },
      {
        id: "admin-s3",
        name: "Entendimento de Processos de Negócio",
        description: "Alinhamento das ferramentas do CRM aos objetivos de negócios (CRM, Vendas, Atendimento)",
        type: "soft",
        requirements: {
          1: "Tem noções básicas de como o setor (vendas, marketing ou atendimento) opera.",
          2: "Conhece minimamente como funcionam vendas, marketing e suporte na empresa.",
          3: "Mapeia processos principais da empresa e sugere melhorias no Salesforce.",
          4: "Alinha as configurações aos objetivos estratégicos e articula as prioridades.",
          5: "Atua como consultor interno antecipando necessidades de CRM corporativo."
        }
      }
    ],
  },
  {
    id: "developer",
    title: "Developer",
    icon: "💻",
    description: "Apex, LWC, integrações e desenvolvimento customizado",
    color: "secondary",
    skills: [
      { id: "dev-1", name: "Apex Programming", description: "Classes, triggers, batch, queueable, scheduled", type: "hard" },
      { id: "dev-2", name: "Lightning Web Components", description: "Componentes reativos, events, wire service", type: "hard" },
      { id: "dev-3", name: "SOQL & SOSL", description: "Queries, subqueries, aggregate functions", type: "hard" },
      { id: "dev-4", name: "APIs & Integrations", description: "REST, SOAP, callouts, connected apps", type: "hard" },
      { id: "dev-5", name: "Testing & Deployment", description: "Test classes, CI/CD, change sets, scratch orgs", type: "hard" },
      { id: "dev-6", name: "Governor Limits", description: "Bulkification, limites de execução, otimização", type: "hard" },
    ],
  },
  {
    id: "consultant",
    title: "Consultant",
    icon: "📋",
    description: "Análise de negócio, implementação e melhores práticas",
    color: "accent",
    skills: [
      { id: "con-1", name: "Sales Cloud", description: "Leads, oportunidades, forecasting, territory management", type: "hard" },
      { id: "con-2", name: "Service Cloud", description: "Cases, knowledge, entitlements, omni-channel", type: "hard" },
      { id: "con-3", name: "Marketing Cloud", description: "Journeys, email studio, automation studio", type: "hard" },
      { id: "con-4", name: "CPQ", description: "Products, price books, quotes, approval processes", type: "hard" },
      { id: "con-5", name: "Data Modeling", description: "Relacionamentos, schema design, data migration", type: "hard" },
      { id: "con-6", name: "Business Analysis", description: "Levantamento de requisitos, user stories, GAP analysis", type: "soft" },
    ],
  },
  {
    id: "architect",
    title: "Architect",
    icon: "🏗️",
    description: "Arquitetura de soluções, design patterns e governança",
    color: "primary",
    skills: [
      { id: "arc-1", name: "Solution Design", description: "Arquitetura de soluções multi-cloud", type: "hard" },
      { id: "arc-2", name: "Integration Architecture", description: "Middleware, event-driven, platform events", type: "hard" },
      { id: "arc-3", name: "Data Architecture", description: "Large data volumes, archiving, data lifecycle", type: "hard" },
      { id: "arc-4", name: "Identity & Access", description: "SSO, OAuth, SAML, MFA, identity providers", type: "hard" },
      { id: "arc-5", name: "DevOps & Governance", description: "Release management, environments, CoE", type: "hard" },
      { id: "arc-6", name: "Performance & Scalability", description: "Caching, async processing, scalability patterns", type: "hard" },
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
