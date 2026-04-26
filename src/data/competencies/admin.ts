import { CompetencyCategory } from "./types";

export const adminCompetency: CompetencyCategory = {
  id: "admin",
  title: {
    pt: "Administrator",
    en: "Administrator",
    es: "Administrador"
  },
  icon: "⚙️",
  description: {
    pt: "Configuração, segurança, automação e gestão da plataforma",
    en: "Configuration, security, automation, and platform management",
    es: "Configuración, seguridad, automatización y gestión de la plataforma"
  },
  color: "primary",
  skills: [
    { 
      id: "admin-1", 
      name: {
        pt: "User Management & Security",
        en: "User Management & Security",
        es: "Gestión de Usuarios y Seguridad"
      }, 
      description: {
        pt: "Perfis, roles, permission sets, sharing rules",
        en: "Profiles, roles, permission sets, sharing rules",
        es: "Perfiles, roles, conjuntos de permisos, reglas de intercambio"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Conhecimentos em treinamento.",
          en: "Knowledge in training.",
          es: "Conocimientos en entrenamiento."
        },
        2: {
          pt: "Consegue criar e editar usuários, perfis simples e permissões básicas.",
          en: "Can create and edit users, simple profiles, and basic permissions.",
          es: "Puede crear y editar usuarios, perfiles simples y permisos básicos."
        },
        3: {
          pt: "Entende regras de compartilhamento, papéis e conjuntos de permissões. Mantém política de segurança alinhada às melhores práticas.",
          en: "Understands sharing rules, roles, and permission sets. Maintains security policy aligned with best practices.",
          es: "Entiende reglas de intercambio, roles y conjuntos de permisos. Mantiene la política de seguridad alineada con las mejores prácticas."
        },
        4: {
          pt: "Desenha estratégias de segurança organizacional com auditoria e monitoramento. Integra SSO quando necessário.",
          en: "Designs organizational security strategies with auditing and monitoring. Integrates SSO when necessary.",
          es: "Diseña estrategias de seguridad organizacional con auditoría y monitoreo. Integra SSO cuando es necesario."
        },
        5: {
          pt: "Referência em segurança governamental (GDPR, LGPD). Coordena revisões de compliance em todo o Salesforce.",
          en: "Reference in governmental security (GDPR, CCPA). Coordinates compliance reviews across Salesforce.",
          es: "Referencia en seguridad gubernamental (GDPR, LGPD). Coordina revisiones de cumplimiento en todo Salesforce."
        }
      }
    },
    { 
      id: "admin-2", 
      name: {
        pt: "Object & Field Configuration",
        en: "Object & Field Configuration",
        es: "Configuración de Objetos y Campos"
      }, 
      description: {
        pt: "Custom objects, fields, page layouts, record types",
        en: "Custom objects, fields, page layouts, record types",
        es: "Objetos personalizados, campos, diseños de página, tipos de registro"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Noções sobre a estrutura de objetos e campos.",
          en: "Notions about the structure of objects and fields.",
          es: "Nociones sobre la estructura de objetos y campos."
        },
        2: {
          pt: "Cria objetos e campos básicos e faz ajustes simples de layout.",
          en: "Creates basic objects and fields and makes simple layout adjustments.",
          es: "Crea objetos y campos básicos y hace ajustes simples de diseño."
        },
        3: {
          pt: "Domina objetos customizados intermediários, relacionamentos (master-detail, lookup) e layouts otimizados.",
          en: "Masters intermediate custom objects, relationships (master-detail, lookup), and optimized layouts.",
          es: "Domina objetos personalizados intermedios, relaciones (master-detail, lookup) y diseños optimizados."
        },
        4: {
          pt: "Planeja estruturas complexas de dados com foco em performance e escalabilidade. Cria fórmulas avançadas.",
          en: "Plans complex data structures focusing on performance and scalability. Creates advanced formulas.",
          es: "Planifica estructuras de datos complejas centradas en el rendimiento y la escalabilidad. Crea fórmulas avanzadas."
        },
        5: {
          pt: "Lidera revisões de arquitetura e governança de dados. Orienta o uso padronizado de objetos e componentes.",
          en: "Leads architecture reviews and data governance. Guides the standardized use of objects and components.",
          es: "Lidera revisiones de arquitectura y gobernanza de datos. Guía el uso estandarizado de objetos y componentes."
        }
      }
    },
    { 
      id: "admin-3", 
      name: {
        pt: "Automation (Flow, Process Builder)",
        en: "Automation (Flow, Process Builder)",
        es: "Automatización (Flow, Process Builder)"
      }, 
      description: {
        pt: "Record-triggered flows, screen flows, scheduled flows",
        en: "Record-triggered flows, screen flows, scheduled flows",
        es: "Flujos desencadenados por registro, flujos de pantalla, flujos programados"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Noções sobre fluxos e lógica condicional.",
          en: "Notions about flows and conditional logic.",
          es: "Nociones sobre flujos y lógica condicional."
        },
        2: {
          pt: "Cria fluxos de trabalho simples para automatizar tarefas básicas.",
          en: "Creates simple workflows to automate basic tasks.",
          es: "Crea flujos de trabajo simples para automatizar tareas básicas."
        },
        3: {
          pt: "Configura Flow Builder com múltiplas condições e ações. Conhece boas práticas de automação.",
          en: "Configures Flow Builder with multiple conditions and actions. Knows automation best practices.",
          es: "Configura Flow Builder con múltiples condiciones y acciones. Conoce las mejores prácticas de automatización."
        },
        4: {
          pt: "Desenha processos complexos de aprovação e orquestra fluxos avançados (sub-flows). Entende impacto de governança.",
          en: "Designs complex approval processes and orchestrates advanced flows (sub-flows). Understands governance impact.",
          es: "Diseña procesos de aprobación complejos y orquesta flujos avanzados (subflujos). Entiende el impacto de la gobernanza."
        },
        5: {
          pt: "Governança completa de automações, versionamento, testes. Otimiza processos para alto volume de dados.",
          en: "Complete governance of automations, versioning, testing. Optimizes processes for high data volume.",
          es: "Gobernanza completa de automatizaciones, control de versiones, pruebas. Optimiza procesos para alto volumen de datos."
        }
      }
    },
    { 
      id: "admin-4", 
      name: {
        pt: "Data Management",
        en: "Data Management",
        es: "Gestión de Datos"
      }, 
      description: {
        pt: "Import/export, data loader, deduplicação",
        en: "Import/export, data loader, deduplication",
        es: "Importación/exportación, cargador de datos, deduplicación"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Noções de inserção e atualização de registros via interface.",
          en: "Notions of inserting and updating records via interface.",
          es: "Nociones de inserción y actualización de registros vía interfaz."
        },
        2: {
          pt: "Usa Data Import Wizard para cargas pequenas e faz limpeza básica de duplicados.",
          en: "Uses Data Import Wizard for small loads and does basic duplicate cleaning.",
          es: "Usa Data Import Wizard para cargas pequeñas y hace limpieza básica de duplicados."
        },
        3: {
          pt: "Opera Data Loader em massa, define regras de duplicação e monitora qualidade de dados.",
          en: "Operates Data Loader in mass, defines duplication rules, and monitors data quality.",
          es: "Opera Data Loader en masa, define reglas de duplicación y monitorea la calidad de los datos."
        },
        4: {
          pt: "Cria políticas de governança de dados e rotinas automáticas de limpeza. Gera relatórios de qualidade.",
          en: "Creates data governance policies and automatic cleaning routines. Generates quality reports.",
          es: "Crea políticas de gobernanza de datos y rutinas automáticas de limpieza. Genera informes de calidad."
        },
        5: {
          pt: "Implementa soluções de MDM integradas ao Salesforce. Lida com big data e data lakes.",
          en: "Implements MDM solutions integrated with Salesforce. Handles big data and data lakes.",
          es: "Implementa soluciones de MDM integradas a Salesforce. Maneja big data y lagos de datos."
        }
      }
    },
    { 
      id: "admin-5", 
      name: {
        pt: "Reports & Dashboards",
        en: "Reports & Dashboards",
        es: "Informes y Paneles"
      }, 
      description: {
        pt: "Report types, filtros, dashboards dinâmicos",
        en: "Report types, filters, dynamic dashboards",
        es: "Tipos de informe, filtros, paneles dinámicos"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Sabe como visualizar relatórios existentes.",
          en: "Knows how to view existing reports.",
          es: "Sabe cómo visualizar informes existentes."
        },
        2: {
          pt: "Cria relatórios tabulares e sumários básicos para atender equipes.",
          en: "Creates basic tabular and summary reports to serve teams.",
          es: "Crea informes tabulares y resumidos básicos para atender a los equipos."
        },
        3: {
          pt: "Utiliza relatórios avançados, fórmulas em relatórios e dashboards de uso geral.",
          en: "Uses advanced reports, formulas in reports, and general-purpose dashboards.",
          es: "Utiliza informes avanzados, fórmulas en informes y paneles de uso general."
        },
        4: {
          pt: "Desenvolve painéis estratégicos para gerência, usando recursos avançados (filtros, joined reports).",
          en: "Develops strategic dashboards for management, using advanced features (filters, joined reports).",
          es: "Desarrolla paneles estratégicos para la gerencia, utilizando características avanzadas (filtros, informes unidos)."
        },
        5: {
          pt: "Realiza análises preditivas. Integra dashboards a plataformas de BI para visão 360°.",
          en: "Performs predictive analytics. Integrates dashboards into BI platforms for a 360° view.",
          es: "Realiza análisis predictivos. Integra paneles a plataformas de BI para una visión 360°."
        }
      }
    },
    {
      id: "admin-s1",
      name: {
        pt: "Suporte a Usuários e Trabalho em Equipe",
        en: "User Support & Teamwork",
        es: "Soporte al Usuario y Trabajo en Equipo"
      },
      description: {
        pt: "Atendimento a chamados, resolução de problemas cotidianos e treinamentos",
        en: "Ticket handling, daily problem solving, and training",
        es: "Atención de tickets, resolución de problemas diarios y capacitaciones"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Presta ajuda em dúvidas muito básicas ou direciona o problema.",
          en: "Provides help with very basic questions or routes the problem.",
          es: "Brinda ayuda con dudas muy básicas o dirige el problema."
        },
        2: {
          pt: "Atende chamados ou tickets básicos e dá orientação simples ao usuário final.",
          en: "Handles basic tickets or calls and gives simple guidance to the end user.",
          es: "Atiende llamadas o tickets básicos y da orientación simple al usuario final."
        },
        3: {
          pt: "Resolve problemas comuns de forma sistemática. Desenvolve mini-treinamentos internos.",
          en: "Solves common problems systematically. Develops internal mini-trainings.",
          es: "Resuelve problemas comunes de forma sistemática. Desarrolla mini-capacitaciones internas."
        },
        4: {
          pt: "Lidera suporte, cria base de conhecimento e backlog. Reduz incidentes repetitivos.",
          en: "Leads support, creates knowledge base and backlog. Reduces repetitive incidents.",
          es: "Lidera el soporte, crea base de conocimientos y backlog. Reduce incidentes repetitivos."
        },
        5: {
          pt: "Define SLAs, mede satisfação do usuário e coordena equipes multidisciplinares.",
          en: "Defines SLAs, measures user satisfaction, and coordinates multidisciplinary teams.",
          es: "Define SLAs, mide la satisfacción del usuario y coordina equipos multidisciplinarios."
        }
      }
    },
    {
      id: "admin-s2",
      name: {
        pt: "Comunicação e Documentação",
        en: "Communication and Documentation",
        es: "Comunicación y Documentación"
      },
      description: {
        pt: "Registro de processos, manuais de melhores práticas e clareza na solução",
        en: "Process recording, best practice manuals, and solution clarity",
        es: "Registro de procesos, manuales de mejores prácticas y claridad en la solución"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Aponta problemas em documentações existentes, comunica-se em reuniões.",
          en: "Points out problems in existing documentation, communicates in meetings.",
          es: "Señala problemas en la documentación existente, se comunica en reuniones."
        },
        2: {
          pt: "Escreve manuais simples para usuários e reporta problemas de modo claro.",
          en: "Writes simple manuals for users and reports problems clearly.",
          es: "Escribe manuales simples para usuarios y reporta problemas claramente."
        },
        3: {
          pt: "Documenta processos de configuração e automação garantindo reuso. Apresentações internas.",
          en: "Documents configuration and automation processes ensuring reuse. Internal presentations.",
          es: "Documenta procesos de configuración y automatización garantizando su reutilización. Presentaciones internas."
        },
        4: {
          pt: "Comunica projetos/resultados para times diversos. Redige políticas oficiais complexas.",
          en: "Communicates projects/results to diverse teams. Drafts complex official policies.",
          es: "Comunica proyectos/resultados a diversos equipos. Redacta políticas oficiales complejas."
        },
        5: {
          pt: "Participa de governança global, apresentações executivas. Publica guias de boas práticas.",
          en: "Participates in global governance, executive presentations. Publishes best practice guides.",
          es: "Participa en gobernanza global, presentaciones ejecutivas. Publica guías de buenas prácticas."
        }
      }
    },
    {
      id: "admin-s3",
      name: {
        pt: "Entendimento de Processos de Negócio",
        en: "Understanding of Business Processes",
        es: "Comprensión de los Procesos de Negocio"
      },
      description: {
        pt: "Alinhamento das ferramentas do CRM aos objetivos de negócios (CRM, Vendas, Atendimento)",
        en: "Alignment of CRM tools with business goals (CRM, Sales, Support)",
        es: "Alineación de las herramientas de CRM a los objetivos comerciales (CRM, Ventas, Atención)"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Tem noções básicas de como o setor (vendas, marketing ou atendimento) opera.",
          en: "Has basic notions of how the sector (sales, marketing, or support) operates.",
          es: "Tiene nociones básicas de cómo opera el sector (ventas, marketing o atención)."
        },
        2: {
          pt: "Conhece minimamente como funcionam vendas, marketing e suporte na empresa.",
          en: "Minimally knows how sales, marketing, and support work in the company.",
          es: "Conoce mínimamente cómo funcionan las ventas, el marketing y el soporte en la empresa."
        },
        3: {
          pt: "Mapeia processos principais da empresa e sugere melhorias no Salesforce.",
          en: "Maps core company processes and suggests improvements in Salesforce.",
          es: "Mapea los principales procesos de la empresa y sugiere mejoras en Salesforce."
        },
        4: {
          pt: "Alinha as configurações aos objetivos estratégicos e articula as prioridades.",
          en: "Aligns configurations to strategic goals and articulates priorities.",
          es: "Alinea las configuraciones con los objetivos estratégicos y articula las prioridades."
        },
        5: {
          pt: "Atua como consultor interno antecipando necessidades de CRM corporativo.",
          en: "Acts as an internal consultant anticipating corporate CRM needs.",
          es: "Actúa como consultor interno anticipando las necesidades corporativas de CRM."
        }
      }
    }
  ],
  knowledgeGroups: [
    {
      title: { pt: "🧩 Core Salesforce", en: "🧩 Core Salesforce", es: "🧩 Core Salesforce" },
      items: {
        pt: [
          "Modelo de dados (Account, Contact, Lead, Opportunity, Case)",
          "Relacionamentos (Lookup, Master-Detail)",
          "Record Types + Page Layouts",
          "Perfis, Permission Sets, Sharing Rules"
        ],
        en: [
          "Data Model (Account, Contact, Lead, Opportunity, Case)",
          "Relationships (Lookup, Master-Detail)",
          "Record Types + Page Layouts",
          "Profiles, Permission Sets, Sharing Rules"
        ],
        es: [
          "Modelo de datos (Cuenta, Contacto, Cliente potencial, Oportunidad, Caso)",
          "Relaciones (Búsqueda, Maestro-Detalle)",
          "Tipos de registro + Diseños de página",
          "Perfiles, Conjuntos de permisos, Reglas de intercambio"
        ]
      }
    },
    {
      title: { pt: "💼 Sales Cloud", en: "💼 Sales Cloud", es: "💼 Sales Cloud" },
      items: {
        pt: [
          "Lead lifecycle (Lead → Opportunity)",
          "Pipeline de vendas",
          "Forecast",
          "Activity management (Tasks, Events)",
          "Campanhas"
        ],
        en: [
          "Lead lifecycle (Lead → Opportunity)",
          "Sales pipeline",
          "Forecast",
          "Activity management (Tasks, Events)",
          "Campaigns"
        ],
        es: [
          "Ciclo de vida del lead (Lead → Oportunidad)",
          "Pipeline de ventas",
          "Pronóstico (Forecast)",
          "Gestión de actividades (Tareas, Eventos)",
          "Campañas"
        ]
      }
    },
    {
      title: { pt: "🎧 Service Cloud", en: "🎧 Service Cloud", es: "🎧 Service Cloud" },
      items: {
        pt: [
          "Case lifecycle",
          "Filas (Queues)",
          "Assignment Rules",
          "Escalation Rules",
          "SLA (Entitlements, Milestones)",
          "Omni-Channel (roteamento)",
          "Knowledge Base"
        ],
        en: [
          "Case lifecycle",
          "Queues",
          "Assignment Rules",
          "Escalation Rules",
          "SLA (Entitlements, Milestones)",
          "Omni-Channel (routing)",
          "Knowledge Base"
        ],
        es: [
          "Ciclo de vida del caso",
          "Colas (Queues)",
          "Reglas de asignación",
          "Reglas de escalamiento",
          "SLA (Derechos, Hitos)",
          "Omni-Channel (enrutamiento)",
          "Base de conocimientos (Knowledge Base)"
        ]
      }
    },
    {
      title: { pt: "⚙️ Automação (sem código)", en: "⚙️ Automation (no-code)", es: "⚙️ Automatización (sin código)" },
      items: {
        pt: [
          "Flow (ESSENCIAL hoje)",
          "Record-triggered, Screen flow, Scheduled flow",
          "Validation Rules",
          "Approval Processes"
        ],
        en: [
          "Flow (ESSENTIAL today)",
          "Record-triggered, Screen flow, Scheduled flow",
          "Validation Rules",
          "Approval Processes"
        ],
        es: [
          "Flow (ESENCIAL hoy)",
          "Desencadenados por registro, Flujos de pantalla, Programados",
          "Reglas de validación",
          "Procesos de aprobación"
        ]
      }
    },
    {
      title: { pt: "📊 Dados & Relatórios", en: "📊 Data & Reports", es: "📊 Datos e Informes" },
      items: {
        pt: [
          "Reports & Dashboards",
          "Tipos de relatório",
          "Filtros e fórmulas"
        ],
        en: [
          "Reports & Dashboards",
          "Report types",
          "Filters and formulas"
        ],
        es: [
          "Informes y Paneles",
          "Tipos de informe",
          "Filtros y fórmulas"
        ]
      }
    },
    {
      title: { pt: "🤝 Integrações (nível funcional)", en: "🤝 Integrations (functional level)", es: "🤝 Integraciones (nivel funcional)" },
      items: {
        pt: [
          "API, Webhook, Middleware",
          "Noções de REST"
        ],
        en: [
          "API, Webhook, Middleware",
          "REST notions"
        ],
        es: [
          "API, Webhook, Middleware",
          "Nociones de REST"
        ]
      }
    },
    {
      title: { pt: "🛠️ Ferramentas", en: "🛠️ Tools", es: "🛠️ Herramientas" },
      items: {
        pt: [
          "Salesforce Setup",
          "Data Loader (import/export)",
          "Data Import Wizard",
          "Workbench",
          "Postman (básico) → testar APIs",
          "Excel / Google Sheets",
          "Miro / Lucidchart (desenho de processos)"
        ],
        en: [
          "Salesforce Setup",
          "Data Loader (import/export)",
          "Data Import Wizard",
          "Workbench",
          "Postman (basic) → test APIs",
          "Excel / Google Sheets",
          "Miro / Lucidchart (process mapping)"
        ],
        es: [
          "Salesforce Setup",
          "Data Loader (import/export)",
          "Data Import Wizard",
          "Workbench",
          "Postman (básico) → probar APIs",
          "Excel / Google Sheets",
          "Miro / Lucidchart (mapeo de procesos)"
        ]
      }
    }
  ],
  strategy: {
    mission: {
      pt: "Construir receita previsível com visão única de cliente e pipeline",
      en: "Build predictable revenue with a single customer view and pipeline",
      es: "Construir ingresos predecibles con una visión única del cliente y el pipeline"
    },
    roleConnection: {
      pt: "Como Admin, você não é apenas um 'configurador de sistema'. Você é o arquiteto do Revenue Operating System. Cada objeto, automação e validação que você constrói garante que os dados virem decisões e os processos se transformem em receita.",
      en: "As an Admin, you are not just a 'system configurator'. You are the architect of the Revenue Operating System. Every object, automation, and validation you build ensures that data turns into decisions and processes turn into revenue.",
      es: "Como Administrador, no eres solo un 'configurador de sistemas'. Eres el arquitecto del Revenue Operating System. Cada objeto, automatización y validación que construyes garantiza que los datos se conviertan en decisiones y los procesos en ingresos."
    },
    pillars: [
      {
        title: { pt: "Fonte única da verdade", en: "Single source of truth", es: "Única fuente de verdad" },
        description: { pt: "Centralizar Contas, Contatos, Oportunidades e Pipeline.", en: "Centralize Accounts, Contacts, Opportunities, and Pipeline.", es: "Centralizar Cuentas, Contactos, Oportunidades y Pipeline." },
        icon: "🧩",
        roleImpact: { 
          pt: "Você garante a governança de dados (Data Quality), configurações de deduplicação e a clara definição de ownership através de perfis e regras de compartilhamento.", 
          en: "You ensure data governance (Data Quality), deduplication settings, and clear definition of ownership through profiles and sharing rules.", 
          es: "Garantizas la gobernanza de datos (Data Quality), las configuraciones de deduplicación y la clara definición de la propiedad a través de perfiles y reglas de intercambio." 
        }
      },
      {
        title: { pt: "Segmentação como pilar central", en: "Segmentation as a core pillar", es: "Segmentación como pilar central" },
        description: { pt: "Segmentação única que governa carteira, campanhas e parcerias.", en: "Single segmentation governing portfolio, campaigns, and partnerships.", es: "Segmentación única que rige la cartera, las campañas y las asociaciones." },
        icon: "🎯",
        roleImpact: { 
          pt: "Você estrutura os objetos e campos que permitem classificar contas (SMB, Mid, Enterprise, Indústria), permitindo que Marketing e Vendas foquem no alvo certo.", 
          en: "You structure the objects and fields that allow classifying accounts (SMB, Mid, Enterprise, Industry), enabling Marketing and Sales to focus on the right target.", 
          es: "Estructuras los objetos y campos que permiten clasificar cuentas (PYMES, Mid, Enterprise, Industria), permitiendo que Marketing y Ventas se enfoquen en el objetivo correcto." 
        }
      },
      {
        title: { pt: "Mensuração ponta a ponta", en: "End-to-end measurement", es: "Medición de extremo a extremo" },
        description: { pt: "Rastrear toda a jornada: Lead → Opportunity → Closed Won.", en: "Track the entire journey: Lead → Opportunity → Closed Won.", es: "Rastrear todo el viaje: Lead → Oportunidad → Cerrado Ganado." },
        icon: "📊",
        roleImpact: { 
          pt: "Você configura Reports, Dashboards e Campaign Influence, garantindo que métricas como conversão, CAC e receita por canal sejam visíveis e confiáveis.", 
          en: "You configure Reports, Dashboards, and Campaign Influence, ensuring metrics like conversion, CAC, and revenue per channel are visible and reliable.", 
          es: "Configuras Informes, Paneles e Influencia de Campañas, asegurando que métricas como la conversión, el CAC y los ingresos por canal sean visibles y confiables." 
        }
      },
      {
        title: { pt: "GTM Integrado", en: "Integrated GTM", es: "GTM Integrado" },
        description: { pt: "Integração contínua entre Produto, Marketing, Vendas e Parcerias.", en: "Continuous integration between Product, Marketing, Sales, and Partnerships.", es: "Integración continua entre Producto, Marketing, Ventas y Asociaciones." },
        icon: "🔄",
        roleImpact: { 
          pt: "Você constrói a ponte técnica. Mantém a sanidade na integração entre Sales Cloud e ferramentas de Marketing/PRM, unificando a visão do cliente.", 
          en: "You build the technical bridge. Maintain sanity in the integration between Sales Cloud and Marketing/PRM tools, unifying the customer view.", 
          es: "Construyes el puente técnico. Mantienes la cordura en la integración entre Sales Cloud y herramientas de Marketing/PRM, unificando la visión del cliente." 
        }
      },
      {
        title: { pt: "Escala com padronização", en: "Scale with standardization", es: "Escalar con estandarización" },
        description: { pt: "Processos consistentes através de playbooks, SLAs e automações.", en: "Consistent processes through playbooks, SLAs, and automations.", es: "Procesos consistentes a través de playbooks, SLAs y automatizaciones." },
        icon: "⚙️",
        roleImpact: { 
          pt: "Sua principal alavanca. Através de Flows e processos de aprovação, você elimina gargalos operacionais e permite que a empresa cresça sem perder o controle.", 
          en: "Your main lever. Through Flows and approval processes, you eliminate operational bottlenecks and allow the company to grow without losing control.", 
          es: "Tu principal palanca. A través de Flujos y procesos de aprobación, eliminas cuellos de botella operativos y permites que la empresa crezca sin perder el control." 
        }
      }
    ]
  },
  evolution: {
    intro: {
      pt: "A evolução do Administrador Salesforce é estruturada em cinco estágios de maturidade, focando desde o domínio básico da plataforma até a excelência estratégica na gestão do CRM:",
      en: "The evolution of the Salesforce Administrator is structured in five stages of maturity, focusing from basic platform mastery to strategic excellence in CRM management:",
      es: "La evolución del Administrador Salesforce está estructurada en cinco etapas de madurez, enfocándose desde el dominio básico de la plataforma hasta la excelencia estratégica en la gestión de CRM:"
    },
    stages: [
      {
        title: { pt: "Adaptação e Desenvolvimento", en: "Adaptation and Development", es: "Adaptación y Desarrollo" },
        description: { 
          pt: "Fase inicial, com foco em aprendizado, assimilação de responsabilidades, processos e relacionamentos. Requer acompanhamento próximo e ainda busca consistência nas entregas.", 
          en: "Initial phase, focusing on learning, assimilation of responsibilities, processes, and relationships. Requires close monitoring and still seeks consistency in deliveries.", 
          es: "Fase inicial, centrada en el aprendizaje, asimilación de responsabilidades, procesos y relaciones. Requiere un seguimiento cercano y todavía busca consistencia en las entregas." 
        }
      },
      {
        title: { pt: "Consolidação Técnica", en: "Technical Consolidation", es: "Consolidación Técnica" },
        description: { 
          pt: "O profissional já compreende suas atribuições e entrega com regularidade, embora ainda esteja evoluindo tecnicamente e aprofundando o entendimento do negócio. Atua com autonomia proporcional à complexidade das demandas.", 
          en: "The professional already understands their duties and delivers regularly, although still evolving technically and deepening business understanding. Acts with autonomy proportional to the complexity of the demands.", 
          es: "El profesional ya comprende sus funciones y entrega con regularidad, aunque todavía está evolucionando técnicamente y profundizando en la comprensión del negocio. Actúa con una autonomía proporcional a la complejidad de las demandas." 
        }
      },
      {
        title: { pt: "Consistência", en: "Consistency", es: "Consistencia" },
        description: { 
          pt: "Domínio das responsabilidades, com entregas previsíveis e de qualidade. Atua de forma autônoma e confiável, com pouca necessidade de direcionamento.", 
          en: "Mastery of responsibilities, with predictable and quality deliveries. Acts autonomously and reliably, with little need for direction.", 
          es: "Dominio de responsabilidades, con entregas predecibles y de calidad. Actúa de forma autónoma y fiable, con poca necesidad de dirección." 
        }
      },
      {
        title: { pt: "Alta Performance", en: "High Performance", es: "Alto Rendimiento" },
        description: { 
          pt: "Supera expectativas, contribui com evolução de processos, pessoas e resultados, demonstrando visão ampliada e proatividade.", 
          en: "Exceeds expectations, contributes to the evolution of processes, people, and results, demonstrating an expanded vision and proactivity.", 
          es: "Supera las expectativas, contribuye a la evolución de procesos, personas y resultados, demostrando una visión ampliada y proactividad." 
        }
      },
      {
        title: { pt: "Referência", en: "Reference", es: "Referencia" },
        description: { 
          pt: "Reconhecido pela excelência e maturidade, atua como referência técnica, comportamental ou estratégica, influenciando positivamente o time e o negócio.", 
          en: "Recognized for excellence and maturity, acts as a technical, behavioral, or strategic reference, positively influencing the team and the business.", 
          es: "Reconocido por la excelencia y la madurez, actúa como una referencia técnica, conductual o estratégica, influyendo positivamente en el equipo y el negocio." 
        }
      }
    ],

    maturityLevels: [
      {
        level: { pt: "Nível Júnior", en: "Junior Level", es: "Nivel Junior" },
        mindset: { pt: "Executar processos dentro do CRM.", en: "Execute processes within the CRM.", es: "Ejecutar procesos dentro del CRM." },
        focus: {
          pt: [
            "Entender objetos padrão (Account, Contact, Opportunity)",
            "Criar relatórios básicos e visões de lista",
            "Trabalhar com automações simples"
          ],
          en: [
            "Understand standard objects (Account, Contact, Opportunity)",
            "Create basic reports and list views",
            "Work with simple automations"
          ],
          es: [
            "Comprender los objetos estándar (Cuenta, Contacto, Oportunidad)",
            "Crear informes básicos y vistas de lista",
            "Trabajar con automatizaciones simples"
          ]
        }
      },
      {
        level: { pt: "Nível Pleno", en: "Mid-level", es: "Nivel Pleno (Medio)" },
        mindset: { pt: "Melhorar e estruturar processos dentro do CRM.", en: "Improve and structure processes within the CRM.", es: "Mejorar y estructurar procesos dentro del CRM." },
        focus: {
          pt: [
            "Modelagem de dados e governança de CRM",
            "Integração funcional entre áreas (Marketing, Vendas)",
            "Construção de dashboards estratégicos"
          ],
          en: [
            "Data modeling and CRM governance",
            "Functional integration between areas (Marketing, Sales)",
            "Construction of strategic dashboards"
          ],
          es: [
            "Modelado de datos y gobernanza de CRM",
            "Integración funcional entre áreas (Marketing, Ventas)",
            "Construcción de paneles estratégicos"
          ]
        }
      },
      {
        level: { pt: "Nível Sênior", en: "Senior Level", es: "Nivel Senior" },
        mindset: { pt: "Usar o CRM como ferramenta de decisão.", en: "Use CRM as a decision-making tool.", es: "Utilizar el CRM como herramienta de decisión." },
        focus: {
          pt: [
            "Arquitetura de soluções e definição de segmentação",
            "Habilitação da estratégia de GTM via sistema",
            "Revenue Analytics avançado e automação complexa"
          ],
          en: [
            "Solution architecture and segmentation definition",
            "Enablement of GTM strategy via system",
            "Advanced Revenue Analytics and complex automation"
          ],
          es: [
            "Arquitectura de soluciones y definición de segmentación",
            "Habilitación de la estrategia GTM vía sistema",
            "Revenue Analytics avanzado y automatización compleja"
          ]
        }
      },
      {
        level: { pt: "Nível Arquiteto / Estratégico", en: "Architect / Strategic Level", es: "Nivel Arquitecto / Estratégico" },
        mindset: { pt: "O CRM como motor de crescimento da empresa.", en: "CRM as the company's growth engine.", es: "El CRM como motor de crecimiento de la empresa." },
        focus: {
          pt: [
            "Construção de Revenue Operating Model",
            "Integração end-to-end e escalabilidade sistêmica",
            "Definição de KPIs de receita junto à diretoria"
          ],
          en: [
            "Construction of Revenue Operating Model",
            "End-to-end integration and systemic scalability",
            "Definition of revenue KPIs with the board"
          ],
          es: [
            "Construcción del Modelo Operativo de Ingresos",
            "Integración de extremo a extremo y escalabilidad sistémica",
            "Definición de KPIs de ingresos con la junta directiva"
          ]
        }
      }
    ]
  }
};
