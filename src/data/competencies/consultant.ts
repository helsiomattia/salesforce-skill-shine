import { CompetencyCategory } from "./types";

export const consultantCompetency: CompetencyCategory = {
  id: "consultant",
  title: {
    pt: "Consultant",
    en: "Consultant",
    es: "Consultor"
  },
  icon: "📋",
  description: {
    pt: "Análise de negócio, implementação e melhores práticas",
    en: "Business analysis, implementation, and best practices",
    es: "Análisis de negocio, implementación y mejores prácticas"
  },
  color: "accent",
  skills: [
    { 
      id: "con-1", 
      name: {
        pt: "Configuração Intermediária de Salesforce",
        en: "Intermediate Salesforce Configuration",
        es: "Configuración Intermedia de Salesforce"
      }, 
      description: {
        pt: "Custom objects, complex automation, multi-cloud solutions",
        en: "Custom objects, complex automation, multi-cloud solutions",
        es: "Objetos personalizados, automatización compleja, soluciones multinube"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Conhece conceitos básicos de CRM e navegação na plataforma.",
          en: "Knows basic CRM concepts and platform navigation.",
          es: "Conoce los conceptos básicos de CRM y la navegación por la plataforma."
        },
        2: {
          pt: "Domina objetos padrão (Lead, Account, Contact, Opportunity) e faz automações simples declarativas.",
          en: "Masters standard objects (Lead, Account, Contact, Opportunity) and does simple declarative automations.",
          es: "Domina objetos estándar (Cliente potencial, Cuenta, Contacto, Oportunidad) y realiza automatizaciones declarativas simples."
        },
        3: {
          pt: "Configurações mais avançadas, integrando objetos customizados e automações intermediárias. Alinha processos de vendas ou suporte.",
          en: "More advanced configurations, integrating custom objects and intermediate automations. Aligns sales or support processes.",
          es: "Configuraciones más avanzadas, integrando objetos personalizados y automatizaciones intermedias. Alinea los procesos de ventas o soporte."
        },
        4: {
          pt: "Cria soluções complexas para vários departamentos e produz protótipos ou provas de conceito (POCs).",
          en: "Creates complex solutions for various departments and produces prototypes or proofs of concept (POCs).",
          es: "Crea soluciones complejas para varios departamentos y produce prototipos o pruebas de concepto (POCs)."
        },
        5: {
          pt: "Integra vários módulos avançados (Sales, Service, Experience, Marketing) em ecossistemas completos. Referência em arquitetura multi-cloud.",
          en: "Integrates several advanced modules (Sales, Service, Experience, Marketing) into complete ecosystems. Reference in multi-cloud architecture.",
          es: "Integra varios módulos avanzados (Ventas, Servicio, Experiencia, Marketing) en ecosistemas completos. Referencia en arquitectura multinube."
        }
      }
    },
    { 
      id: "con-2", 
      name: {
        pt: "Integrações e Ferramentas Complementares",
        en: "Integrations and Complementary Tools",
        es: "Integraciones y Herramientas Complementarias"
      }, 
      description: {
        pt: "APIs, conectores, middleware (MuleSoft, Boomi)",
        en: "APIs, connectors, middleware (MuleSoft, Boomi)",
        es: "API, conectores, middleware (MuleSoft, Boomi)"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Entende o que são APIs e a importância da troca de dados entre sistemas.",
          en: "Understands what APIs are and the importance of data exchange between systems.",
          es: "Entiende qué son las API y la importancia del intercambio de datos entre sistemas."
        },
        2: {
          pt: "Entende a visão geral de APIs e conectores, mas uso ainda limitado.",
          en: "Understands the overview of APIs and connectors, but use is still limited.",
          es: "Entiende la visión general de API y conectores, pero su uso aún es limitado."
        },
        3: {
          pt: "Utiliza conectores prontos (Zapier, MuleSoft básicos) e participa de pequenos projetos de integração.",
          en: "Uses ready-made connectors (Zapier, basic MuleSoft) and participates in small integration projects.",
          es: "Utiliza conectores listos para usar (Zapier, MuleSoft básico) y participa en pequeños proyectos de integración."
        },
        4: {
          pt: "Planeja integrações robustas com ERPs e sistemas de marketing. Trabalha com middleware avançados (MuleSoft, Dell Boomi etc.).",
          en: "Plans robust integrations with ERPs and marketing systems. Works with advanced middleware (MuleSoft, Dell Boomi, etc.).",
          es: "Planifica integraciones robustas con ERP y sistemas de marketing. Trabaja con middleware avanzado (MuleSoft, Dell Boomi, etc.)."
        },
        5: {
          pt: "Desenha arquiteturas de integração escaláveis para múltiplas nuvens e sistemas legados, com alta disponibilidade e segurança.",
          en: "Designs scalable integration architectures for multiple clouds and legacy systems, with high availability and security.",
          es: "Diseña arquitecturas de integración escalables para múltiples nubes y sistemas heredados, con alta disponibilidad y seguridad."
        }
      }
    },
    { 
      id: "con-3", 
      name: {
        pt: "Customizações Avançadas",
        en: "Advanced Customizations",
        es: "Personalizaciones Avanzadas"
      }, 
      description: {
        pt: "Advanced Flows, Apex logic, LWC strategy",
        en: "Advanced Flows, Apex logic, LWC strategy",
        es: "Flujos avanzados, lógica Apex, estrategia LWC"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Diferencia o que é declarativo (cliques) do que é programático (código).",
          en: "Differentiates declarative (clicks) from programmatic (code).",
          es: "Diferencia lo declarativo (clics) de lo programático (código)."
        },
        2: {
          pt: "Conhece a diferença entre configurações declarativas e programáveis, mas sem dominar Apex.",
          en: "Knows the difference between declarative and programmable configurations, but without mastering Apex.",
          es: "Conoce la diferencia entre configuraciones declarativas y programables, pero sin dominar Apex."
        },
        3: {
          pt: "Domina Flow Builder avançado, incluindo sub-flows e automações complexas. Cria triggers ou Apex simples quando necessário.",
          en: "Masters advanced Flow Builder, including sub-flows and complex automations. Creates simple triggers or Apex when necessary.",
          es: "Domina Flow Builder avanzado, incluyendo subflujos y automatizaciones complejas. Crea disparadores simples o Apex cuando es necesario."
        },
        4: {
          pt: "Projeta soluções que incluem triggers, classes Apex e LWC básicos, avaliando performance e governança.",
          en: "Designs solutions that include triggers, Apex classes, and basic LWC, evaluating performance and governance.",
          es: "Diseña soluciones que incluyen disparadores, clases Apex y LWC básicos, evaluando el rendimiento y la gobernanza."
        },
        5: {
          pt: "Trabalha com desenvolvedores para arquitetar soluções otimizadas. Integra Apex, LWC e Einstein/IA em estratégias de negócio.",
          en: "Works with developers to architect optimized solutions. Integrates Apex, LWC, and Einstein/AI into business strategies.",
          es: "Trabaja con desarrolladores para diseñar soluciones optimizadas. Integra Apex, LWC y Einstein/IA en estrategias de negocio."
        }
      }
    },
    {
      id: "con-s1",
      name: {
        pt: "Levantamento de Requisitos e Mapeamento de Processos",
        en: "Requirements Gathering and Process Mapping",
        es: "Levantamiento de Requisitos y Mapeo de Procesos"
      },
      description: {
        pt: "Discovery sessions, workshop facilitation, value mapping",
        en: "Discovery sessions, workshop facilitation, value mapping",
        es: "Sesiones de descubrimiento, facilitación de talleres, mapeo de valor"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Acompanha reuniões e faz anotações sobre as necessidades dos usuários.",
          en: "Attends meetings and takes notes on user needs.",
          es: "Asiste a reuniones y toma notas sobre las necesidades de los usuarios."
        },
        2: {
          pt: "Participa de reuniões de descoberta e entende fluxos simples de negócio como funil de vendas básico.",
          en: "Participates in discovery meetings and understands simple business flows like a basic sales funnel.",
          es: "Participa en reuniones de descubrimiento y comprende flujos comerciales simples, como un embudo de ventas básico."
        },
        3: {
          pt: "Conduz sessões de discovery, coleta requisitos e documenta processos de negócio e principais dores.",
          en: "Conducts discovery sessions, gathers requirements, and documents business processes and key pain points.",
          es: "Lleva a cabo sesiones de descubrimiento, recopila requisitos y documenta procesos comerciales y los principales puntos de dolor."
        },
        4: {
          pt: "Coordena workshops de mapeamento de processos, envolvendo várias áreas e propõe soluções de alto valor.",
          en: "Coordinates process mapping workshops involving multiple areas and proposes high-value solutions.",
          es: "Coordina talleres de mapeo de procesos, involucrando varias áreas y propone soluciones de alto valor."
        },
        5: {
          pt: "Orquestra grandes stakeholders em projetos de transformação digital e define metodologias e governança para processos complexos.",
          en: "Orchestrates key stakeholders in digital transformation projects and defines methodologies and governance for complex processes.",
          es: "Orquesta a los principales interesados en proyectos de transformación digital y define metodologías y gobernanza para procesos complejos."
        }
      }
    },
    {
      id: "con-s2",
      name: {
        pt: "Gerenciamento de Projetos e Metodologias Ágeis",
        en: "Project Management and Agile Methodologies",
        es: "Gestión de Proyectos y Metodologías Ágiles"
      },
      description: {
        pt: "SCRUM, Kanban, stakeholder management, risk mitigation",
        en: "SCRUM, Kanban, stakeholder management, risk mitigation",
        es: "SCRUM, Kanban, gestión de interesados, mitigación de riesgos"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Conhece o básico de tarefas, prazos e organização pessoal.",
          en: "Knows the basics of tasks, deadlines, and personal organization.",
          es: "Conoce los conceptos básicos de tareas, plazos y organización personal."
        },
        2: {
          pt: "Auxilia no planejamento simples e controla prazos curtos.",
          en: "Assists in simple planning and monitors short deadlines.",
          es: "Ayuda en la planificación simple y controla plazos cortos."
        },
        3: {
          pt: "Segue SCRUM ou Kanban, atribuindo tarefas e estimando prazos para backlog de pequeno ou médio porte.",
          en: "Follows SCRUM or Kanban, assigning tasks and estimating deadlines for small or medium backlogs.",
          es: "Sigue SCRUM o Kanban, asignando tareas y estimando plazos para backlogs pequeños o medianos."
        },
        4: {
          pt: "Gerencia projetos de maior porte com cronogramas, escopo e riscos. Alinha expectativas com stakeholders.",
          en: "Manages larger projects with schedules, scope, and risks. Aligns expectations with stakeholders.",
          es: "Gestiona proyectos más grandes con cronogramas, alcance y riesgos. Alinea expectativas con los interesados."
        },
        5: {
          pt: "Referência em projetos complexos multi-equipe. Define governança, KPIs executivos e padrões de qualidade.",
          en: "Reference in complex multi-team projects. Defines governance, executive KPIs, and quality standards.",
          es: "Referencia en proyectos complejos multiequipo. Define gobernanza, KPI ejecutivos y estándares de calidad."
        }
      }
    },
    {
      id: "con-s3",
      name: {
        pt: "Comunicação e Gestão de Stakeholders",
        en: "Communication and Stakeholder Management",
        es: "Comunicación y Gestión de Interesados"
      },
      description: {
        pt: "Conflict resolution, C-level influence, consulting approach",
        en: "Conflict resolution, C-level influence, consulting approach",
        es: "Resolución de conflictos, influencia a nivel C, enfoque de consultoría"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Comunica-se de forma clara com o time imediato.",
          en: "Communicates clearly with the immediate team.",
          es: "Se comunica claramente con el equipo inmediato."
        },
        2: {
          pt: "Comunica ideias básicas e escuta ativamente para entender problemas. Interage com colegas e supervisores.",
          en: "Communicates basic ideas and actively listens to understand problems. Interacts with peers and supervisors.",
          es: "Comunica ideas básicas y escucha activamente para entender los problemas. Interactúa con compañeros y supervisores."
        },
        3: {
          pt: "Apresenta soluções para áreas de negócio em reuniões de escopo. Negocia pequenas alterações de projeto.",
          en: "Presents solutions to business areas in scoping meetings. Negotiates minor project changes.",
          es: "Presenta soluciones a las áreas de negocio en reuniones de alcance. Negocia pequeños cambios en el proyecto."
        },
        4: {
          pt: "Conduz reuniões com gerentes e diretores, resolvendo conflitos e alinhando expectativas. Atua de forma consultiva.",
          en: "Leads meetings with managers and directors, resolving conflicts and aligning expectations. Acts in a consultative manner.",
          es: "Conduce reuniones con gerentes y directores, resolviendo conflictos y alineando expectativas. Actúa de manera consultiva."
        },
        5: {
          pt: "Influencia decisões em nível C-level e representa a empresa em grandes negociações e eventos do mercado.",
          en: "Influences decisions at the C-level and represents the company in major negotiations and industry events.",
          es: "Influye en las decisiones a nivel C y representa a la empresa en grandes negociaciones y eventos del mercado."
        }
      }
    },
    {
      id: "con-s4",
      name: {
        pt: "Conhecimento de Negócio (Vendas, Marketing, Suporte)",
        en: "Business Knowledge (Sales, Marketing, Support)",
        es: "Conocimiento del Negocio (Ventas, Marketing, Soporte)"
      },
      description: {
        pt: "Business processes, ROI metrics, customer journey mapping",
        en: "Business processes, ROI metrics, customer journey mapping",
        es: "Procesos comerciales, métricas de ROI, mapeo del viaje del cliente"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Entende que o CRM serve para apoiar as áreas da empresa.",
          en: "Understands that CRM serves to support company areas.",
          es: "Entiende que el CRM sirve para apoyar las áreas de la empresa."
        },
        2: {
          pt: "Sabe o básico de funil de vendas e atendimento inicial.",
          en: "Knows the basics of the sales funnel and initial customer service.",
          es: "Conoce los conceptos básicos del embudo de ventas y atención inicial."
        },
        3: {
          pt: "Reconhece diferenças e recursos-chave de Sales Cloud, Service Cloud e Marketing Cloud em nível geral.",
          en: "Recognizes differences and key features of Sales Cloud, Service Cloud, and Marketing Cloud at a general level.",
          es: "Reconoce diferencias y características clave de Sales Cloud, Service Cloud y Marketing Cloud a nivel general."
        },
        4: {
          pt: "Propõe melhorias significativas em processos de cross-sell, upsell, SLA de suporte e utiliza métricas de ROI.",
          en: "Proposes significant improvements in cross-sell, upsell, support SLAs, and utilizes ROI metrics.",
          es: "Propone mejoras significativas en procesos de cross-sell, upsell, SLA de soporte y utiliza métricas de ROI."
        },
        5: {
          pt: "Desenha estratégias unificadas de CRM multi-cloud para jornadas complexas do cliente. Cria frameworks de valor.",
          en: "Designs unified multi-cloud CRM strategies for complex customer journeys. Creates value frameworks.",
          es: "Diseña estrategias unificadas de CRM multinube para viajes complejos del cliente. Crea marcos de valor."
        }
      }
    },
    {
      id: "con-s5",
      name: {
        pt: "Liderança e Mentoria de Equipe",
        en: "Leadership and Team Mentoring",
        es: "Liderazgo y Mentoría de Equipo"
      },
      description: {
        pt: "Team coaching, technical leadership, internal governance",
        en: "Team coaching, technical leadership, internal governance",
        es: "Coaching de equipos, liderazgo técnico, gobernanza interna"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Compartilha o que aprendeu com novos membros do time.",
          en: "Shares what they have learned with new team members.",
          es: "Comparte lo aprendido con los nuevos miembros del equipo."
        },
        2: {
          pt: "Ainda não lidera pessoas, mas colabora e apoia colegas júnior.",
          en: "Does not yet lead people, but collaborates and supports junior colleagues.",
          es: "Aún no lidera personas, pero colabora y apoya a colegas junior."
        },
        3: {
          pt: "Orienta colegas em tarefas simples e repassa boas práticas.",
          en: "Guides colleagues in simple tasks and passes on best practices.",
          es: "Orienta a los colegas en tareas simples y transmite buenas prácticas."
        },
        4: {
          pt: "Atua como líder técnico ou de time, delegando tarefas e garantindo a qualidade das entregas.",
          en: "Acts as a technical or team lead, delegating tasks and ensuring delivery quality.",
          es: "Actúa como líder técnico o de equipo, delegando tareas y garantizando la calidad de las entregas."
        },
        5: {
          pt: "Exerce liderança estratégica, gerenciando vários times. Forma novos consultores e desenvolve lideranças internas.",
          en: "Exercises strategic leadership, managing multiple teams. Trains new consultants and develops internal leaders.",
          es: "Ejerce liderazgo estratégico, gestionando varios equipos. Capacita a nuevos consultores y desarrolla líderes internos."
        }
      }
    }
  ],
  knowledgeGroups: [
    {
      title: { pt: "💼 Business Analysis", en: "💼 Business Analysis", es: "💼 Análisis de Negocio" },
      items: {
        pt: [
          "Técnicas de Discovery",
          "Levantamento de Requisitos",
          "Mapeamento de Processos (BPMN)",
          "Análise de Gap e Proposta de Valor"
        ],
        en: [
          "Discovery Techniques",
          "Requirements Gathering",
          "Process Mapping (BPMN)",
          "Gap Analysis and Value Proposition"
        ],
        es: [
          "Técnicas de Descubrimiento",
          "Levantamiento de Requisitos",
          "Mapeo de Procesos (BPMN)",
          "Análisis de Brechas y Propuesta de Valor"
        ]
      }
    },
    {
      title: { pt: "📈 Processos de CRM", en: "📈 CRM Processes", es: "📈 Procesos de CRM" },
      items: {
        pt: [
          "Gestão de Leads e Conversão",
          "Pipeline e Forecasting de Vendas",
          "Processos de Atendimento (Case Management)",
          "Gestão de Sucesso do Cliente (Churn, CSAT)"
        ],
        en: [
          "Lead Management and Conversion",
          "Sales Pipeline and Forecasting",
          "Support Processes (Case Management)",
          "Customer Success Management (Churn, CSAT)"
        ],
        es: [
          "Gestión de Leads y Conversión",
          "Pipeline y Pronóstico de Ventas",
          "Procesos de Atención (Gestión de Casos)",
          "Gestión del Éxito del Cliente (Churn, CSAT)"
        ]
      }
    },
    {
      title: { pt: "🧩 Solution Design", en: "🧩 Solution Design", es: "🧩 Diseño de Soluciones" },
      items: {
        pt: [
          "Desenho de Modelo de Dados",
          "Decisão: Declarativo vs Programático",
          "Arquitetura de Segurança e Visibilidade",
          "User Experience (UX) em Salesforce"
        ],
        en: [
          "Data Model Design",
          "Decision: Declarative vs Programmatic",
          "Security and Visibility Architecture",
          "User Experience (UX) in Salesforce"
        ],
        es: [
          "Diseño de Modelo de Datos",
          "Decisión: Declarativo vs Programático",
          "Arquitectura de Seguridad y Visibilidad",
          "Experiencia de Usuario (UX) en Salesforce"
        ]
      }
    },
    {
      title: { pt: "🔄 Gestão de Projetos", en: "🔄 Project Management", es: "🔄 Gestión de Proyectos" },
      items: {
        pt: [
          "Metodologias Ágeis (Scrum/Kanban)",
          "Gestão de Mudanças (Change Management)",
          "Treinamento e Adoção de Usuários",
          "Métricas de Projeto e ROI"
        ],
        en: [
          "Agile Methodologies (Scrum/Kanban)",
          "Change Management",
          "Training and User Adoption",
          "Project Metrics and ROI"
        ],
        es: [
          "Metodologías Ágiles (Scrum/Kanban)",
          "Gestión del Cambio",
          "Capacitación y Adopción de Usuarios",
          "Métricas de Proyecto y ROI"
        ]
      }
    },
    {
      title: { pt: "🛠️ Ferramentas", en: "🛠️ Tools", es: "🛠️ Herramientas" },
      items: {
        pt: [
          "Miro / Lucidchart (Diagramas)",
          "Jira / Azure DevOps (Gestão de Backlog)",
          "Salesforce Setup (Configuração)",
          "Data Loader (Carga de dados básica)",
          "Excel / Google Sheets para análise"
        ],
        en: [
          "Miro / Lucidchart (Diagrams)",
          "Jira / Azure DevOps (Backlog Management)",
          "Salesforce Setup (Configuration)",
          "Data Loader (Basic data load)",
          "Excel / Google Sheets for analysis"
        ],
        es: [
          "Miro / Lucidchart (Diagramas)",
          "Jira / Azure DevOps (Gestión de Backlog)",
          "Salesforce Setup (Configuración)",
          "Data Loader (Carga básica de datos)",
          "Excel / Google Sheets para análisis"
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
      pt: "Como Consultor, você é a ponte entre o negócio e a tecnologia. Você traduz dores em soluções e garante que o Salesforce não seja apenas um software, mas uma ferramenta estratégica que impulsiona o crescimento e a eficiência operacional da empresa.",
      en: "As a Consultant, you are the bridge between business and technology. You translate pain points into solutions and ensure that Salesforce is not just software, but a strategic tool that drives the company's growth and operational efficiency.",
      es: "Como Consultor, eres el puente entre el negocio y la tecnología. Traduces los dolores en soluciones y garantizas que Salesforce no sea solo un software, sino una herramienta estratégica que impulsa el crecimiento y la eficiencia operativa de la empresa."
    },
    pillars: [
      {
        title: { pt: "Fonte única da verdade", en: "Single source of truth", es: "Única fuente de verdad" },
        description: { pt: "Centralizar Contas, Contatos, Oportunidades e Pipeline.", en: "Centralize Accounts, Contacts, Opportunities, and Pipeline.", es: "Centralizar Cuentas, Contactos, Oportunidades y Pipeline." },
        icon: "🧩",
        roleImpact: { 
          pt: "Você mapeia os processos de negócio para garantir que todos os dados críticos sejam capturados corretamente, eliminando silos e garantindo a integridade da visão única do cliente.", 
          en: "You map business processes to ensure that all critical data is captured correctly, eliminating silos and ensuring the integrity of the single customer view.", 
          es: "Mapeas los procesos de negocio para garantizar que todos los datos críticos se capturen correctamente, eliminando silos y garantizando la integridad de la visión única del cliente." 
        }
      },
      {
        title: { pt: "Segmentação como pilar central", en: "Segmentation as a core pillar", es: "Segmentación como pilar central" },
        description: { pt: "Segmentação única que governa carteira, campanhas e parcerias.", en: "Single segmentation governing portfolio, campaigns, and partnerships.", es: "Segmentación única que rige la cartera, las campañas y las asociaciones." },
        icon: "🎯",
        roleImpact: { 
          pt: "Você ajuda o negócio a definir critérios claros de segmentação (SMB, Mid, Enterprise, Vertical) e configura o CRM para que essa inteligência governe a priorização e as campanhas.", 
          en: "You help the business define clear segmentation criteria (SMB, Mid, Enterprise, Vertical) and configure the CRM so this intelligence governs prioritization and campaigns.", 
          es: "Ayudas al negocio a definir criterios claros de segmentación (PYMES, Mid, Enterprise, Vertical) y configuras el CRM para que esta inteligencia gobierne la priorización y las campañas." 
        }
      },
      {
        title: { pt: "Mensuração ponta a ponta", en: "End-to-end measurement", es: "Medición de extremo a extremo" },
        description: { pt: "Rastrear toda a jornada: Lead → Opportunity → Closed Won.", en: "Track the entire journey: Lead → Opportunity → Closed Won.", es: "Rastrear todo el viaje: Lead → Oportunidad → Cerrado Ganado." },
        icon: "📊",
        roleImpact: { 
          pt: "Você desenha a jornada de dados e define os estágios e métricas (KPIs) necessários para que a gestão tenha visibilidade total do pipeline, conversão e do ROI.", 
          en: "You design the data journey and define the stages and metrics (KPIs) needed for management to have full visibility of the pipeline, conversion, and ROI.", 
          es: "Diseñas el viaje de datos y defines las etapas y métricas (KPIs) necesarias para que la gestión tenga visibilidad total del pipeline, la conversión y el ROI." 
        }
      },
      {
        title: { pt: "GTM Integrado", en: "Integrated GTM", es: "GTM Integrado" },
        description: { pt: "Integração contínua entre Produto, Marketing, Vendas e Parcerias.", en: "Continuous integration between Product, Marketing, Sales, and Partnerships.", es: "Integración continua entre Producto, Marketing, Ventas y Asociaciones." },
        icon: "🔄",
        roleImpact: { 
          pt: "Você orquestra a colaboração entre áreas. Garante que os processos de Marketing, Vendas e Suporte estejam alinhados, permitindo uma passagem de bastão suave e uma experiência contínua.", 
          en: "You orchestrate collaboration between areas. Ensure that Marketing, Sales, and Support processes are aligned, allowing a smooth handoff and a seamless experience.", 
          es: "Orquestas la colaboración entre áreas. Garantizas que los procesos de Marketing, Ventas y Soporte estén alineados, permitiendo una transición suave y una experiencia continua." 
        }
      },
      {
        title: { pt: "Escala com padronização", en: "Scale with standardization", es: "Escalar con estandarización" },
        description: { pt: "Processos consistentes através de playbooks, SLAs e automações.", en: "Consistent processes through playbooks, SLAs, and automations.", es: "Procesos consistentes a través de playbooks, SLAs y automatizaciones." },
        icon: "⚙️",
        roleImpact: { 
          pt: "Você cria os playbooks e manuais de processo. Ao padronizar o uso da ferramenta e treinar os usuários, você garante que a operação possa escalar sem perder a disciplina e a qualidade.", 
          en: "You create playbooks and process manuals. By standardizing the use of the tool and training users, you ensure that the operation can scale without losing discipline and quality.", 
          es: "Creas los playbooks y manuales de proceso. Al estandarizar el uso de la herramienta y capacitar a los usuarios, garantizas que la operación pueda escalar sin perder la disciplina y la calidad." 
        }
      }
    ]
  },
  evolution: {
    intro: {
      pt: "A evolução do Consultor Salesforce é estruturada em cinco estágios de maturidade, refletindo o crescimento na condução de projetos, relacionamento com clientes e entrega de valor de negócio:",
      en: "The evolution of the Salesforce Consultant is structured in five stages of maturity, reflecting growth in project management, client relationships, and business value delivery:",
      es: "La evolución del Consultor Salesforce está estructurada en cinco etapas de madurez, reflejando el crecimiento en la conducción de proyectos, relación con clientes y entrega de valor comercial:"
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
        level: { pt: "Consultor Júnior", en: "Junior Consultant", es: "Consultor Junior" },
        mindset: { pt: "Executar tarefas e documentar processos básicos.", en: "Execute tasks and document basic processes.", es: "Ejecutar tareas y documentar procesos básicos." },
        focus: {
          pt: [
            "Entender processos padrão de CRM",
            "Executar configurações declarativas simples",
            "Apoiar em documentação e treinamentos"
          ],
          en: [
            "Understand standard CRM processes",
            "Execute simple declarative configurations",
            "Support in documentation and training"
          ],
          es: [
            "Entender procesos estándar de CRM",
            "Ejecutar configuraciones declarativas simples",
            "Apoyar en documentación y capacitaciones"
          ]
        }
      },
      {
        level: { pt: "Consultor Pleno", en: "Mid-level Consultant", es: "Consultor Pleno (Medio)" },
        mindset: { pt: "Mapear dores e propor soluções de valor.", en: "Map pain points and propose value solutions.", es: "Mapear dolores y proponer soluciones de valor." },
        focus: {
          pt: [
            "Conduzir sessões de discovery e workshops",
            "Desenhar soluções multi-cloud básicas",
            "Gerenciar backlog e expectativas de stakeholders"
          ],
          en: [
            "Conduct discovery sessions and workshops",
            "Design basic multi-cloud solutions",
            "Manage backlog and stakeholder expectations"
          ],
          es: [
            "Conducir sesiones de descubrimiento y talleres",
            "Diseñar soluciones multinube básicas",
            "Gestionar el backlog y las expectativas de los interesados"
          ]
        }
      },
      {
        level: { pt: "Consultor Sênior", en: "Senior Consultant", es: "Consultor Senior" },
        mindset: { pt: "Atuar como conselheiro estratégico de negócios.", en: "Act as a strategic business advisor.", es: "Actuar como asesor comercial estratégico." },
        focus: {
          pt: [
            "Influenciar decisões de diretoria baseadas em ROI",
            "Desenhar jornadas de cliente complexas e unificadas",
            "Liderar squads e garantir a qualidade da entrega"
          ],
          en: [
            "Influence board decisions based on ROI",
            "Design complex and unified customer journeys",
            "Lead squads and ensure delivery quality"
          ],
          es: [
            "Influir en decisiones de la junta basadas en el ROI",
            "Diseñar viajes de cliente complejos y unificados",
            "Liderar squads y garantizar la calidad de la entrega"
          ]
        }
      },
      {
        level: { pt: "Principal / Estratégico", en: "Principal / Strategic", es: "Principal / Estratégico" },
        mindset: { pt: "Liderar a transformação digital corporativa.", en: "Lead corporate digital transformation.", es: "Liderar la transformación digital corporativa." },
        focus: {
          pt: [
            "Definir a visão do Revenue Operating Model",
            "Alinhar tecnologia diretamente ao Business Plan",
            "Gerenciar grandes transformações e gestão de mudanças"
          ],
          en: [
            "Define the vision of the Revenue Operating Model",
            "Align technology directly to the Business Plan",
            "Manage major transformations and change management"
          ],
          es: [
            "Definir la visión del Modelo Operativo de Ingresos",
            "Alinear la tecnología directamente con el Plan de Negocios",
            "Gestionar grandes transformaciones y gestión del cambio"
          ]
        }
      }
    ]
  }
};
