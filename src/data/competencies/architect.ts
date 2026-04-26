import { CompetencyCategory } from "./types";

export const architectCompetency: CompetencyCategory = {
  id: "architect",
  title: {
    pt: "Architect",
    en: "Architect",
    es: "Arquitecto"
  },
  icon: "📐",
  description: {
    pt: "Desenho de soluções, governança e escalabilidade enterprise",
    en: "Solution design, governance, and enterprise scalability",
    es: "Diseño de soluciones, gobernanza y escalabilidad empresarial"
  },
  color: "primary",
  skills: [
    { 
      id: "arch-1", 
      name: {
        pt: "Desenho de Soluções",
        en: "Solution Design",
        es: "Diseño de Soluciones"
      }, 
      description: {
        pt: "Data modeling, multi-cloud strategy, system landscapes",
        en: "Data modeling, multi-cloud strategy, system landscapes",
        es: "Modelado de datos, estrategia multinube, paisajes de sistemas (system landscapes)"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Compreende a arquitetura básica do Salesforce.",
          en: "Understands the basic Salesforce architecture.",
          es: "Comprende la arquitectura básica de Salesforce."
        },
        2: {
          pt: "Mapeia objetos padrão, propõe relacionamentos e identifica soluções OOTB.",
          en: "Maps standard objects, proposes relationships, and identifies OOTB solutions.",
          es: "Mapea objetos estándar, propone relaciones e identifica soluciones OOTB."
        },
        3: {
          pt: "Define modelos de dados completos e decide quando usar declarativo vs. customizado.",
          en: "Defines complete data models and decides when to use declarative vs. custom.",
          es: "Define modelos de datos completos y decide cuándo usar declarativo vs. personalizado."
        },
        4: {
          pt: "Desenha paisagens de sistema complexas, integrando nuvens da Salesforce (Sales, Service, Marketing).",
          en: "Designs complex system landscapes, integrating Salesforce clouds (Sales, Service, Marketing).",
          es: "Diseña paisajes de sistemas complejos, integrando las nubes de Salesforce (Ventas, Servicio, Marketing)."
        },
        5: {
          pt: "Arquitetura empresarial de ponta a ponta. Soluciona problemas de Big Data, particionamento e estratégia multiorg.",
          en: "End-to-end enterprise architecture. Solves Big Data problems, partitioning, and multi-org strategy.",
          es: "Arquitectura empresarial de extremo a extremo. Resuelve problemas de Big Data, particionamiento y estrategia multi-org."
        }
      }
    },
    { 
      id: "arch-2", 
      name: {
        pt: "Integração Enterprise",
        en: "Enterprise Integration",
        es: "Integración Empresarial"
      }, 
      description: {
        pt: "Event-driven architecture, APIs, ESB/Middleware, IdP",
        en: "Event-driven architecture, APIs, ESB/Middleware, IdP",
        es: "Arquitectura orientada a eventos, APIs, ESB/Middleware, IdP"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Conhece conceitos básicos de API e troca de mensagens.",
          en: "Knows basic concepts of API and message exchange.",
          es: "Conoce conceptos básicos de API y el intercambio de mensajes."
        },
        2: {
          pt: "Monitora e debuga integrações P2P simples em REST ou SOAP.",
          en: "Monitors and debugs simple P2P integrations in REST or SOAP.",
          es: "Supervisa y depura integraciones P2P simples en REST o SOAP."
        },
        3: {
          pt: "Especifica integrações, conhece padrões de integração (Request/Reply, Fire/Forget) e limites da plataforma.",
          en: "Specifies integrations, knows integration patterns (Request/Reply, Fire/Forget), and platform limits.",
          es: "Especifica integraciones, conoce patrones de integración (Request/Reply, Fire/Forget) y límites de la plataforma."
        },
        4: {
          pt: "Desenha estratégias sólidas com Middleware (MuleSoft, Boomi) e gerencia volumes assíncronos.",
          en: "Designs solid strategies with Middleware (MuleSoft, Boomi) and manages asynchronous volumes.",
          es: "Diseña estrategias sólidas con Middleware (MuleSoft, Boomi) y gestiona volúmenes asíncronos."
        },
        5: {
          pt: "Arquitetura orientada a eventos (EDA), soluções de streaming (Kafka, Platform Events), governança global de APIs.",
          en: "Event-driven architecture (EDA), streaming solutions (Kafka, Platform Events), global API governance.",
          es: "Arquitectura orientada a eventos (EDA), soluciones de streaming (Kafka, Eventos de Plataforma), gobernanza global de API."
        }
      }
    },
    { 
      id: "arch-3", 
      name: {
        pt: "Segurança de Acesso e Dados",
        en: "Access and Data Security",
        es: "Seguridad de Acceso y Datos"
      }, 
      description: {
        pt: "SSO, OAuth, Shield, governança corporativa",
        en: "SSO, OAuth, Shield, corporate governance",
        es: "SSO, OAuth, Shield, gobernanza corporativa"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Entende o modelo básico de compartilhamento (OWD, Perfis).",
          en: "Understands the basic sharing model (OWD, Profiles).",
          es: "Comprende el modelo de intercambio básico (OWD, Perfiles)."
        },
        2: {
          pt: "Verifica vulnerabilidades comuns de código ou configurações expostas.",
          en: "Checks common code vulnerabilities or exposed configurations.",
          es: "Verifica vulnerabilidades comunes en el código o configuraciones expuestas."
        },
        3: {
          pt: "Configura fluxos complexos de Role Hierarchy e Sharing Rules otimizados para evitar impacto na performance.",
          en: "Configures complex Role Hierarchy flows and Sharing Rules optimized to avoid performance impact.",
          es: "Configura flujos complejos de Jerarquía de Roles y Reglas de Compartición optimizados para evitar impactos en el rendimiento."
        },
        4: {
          pt: "Implementa SSO (SAML/OIDC), entende fluxos de OAuth 2.0. Elabora estratégia de login centralizado.",
          en: "Implements SSO (SAML/OIDC), understands OAuth 2.0 flows. Elaborates a centralized login strategy.",
          es: "Implementa SSO (SAML/OIDC), comprende los flujos OAuth 2.0. Elabora una estrategia de inicio de sesión centralizado."
        },
        5: {
          pt: "Gerencia criptografia (Salesforce Shield), auditoria em nível federal/corporativo rigoroso e políticas DLP.",
          en: "Manages encryption (Salesforce Shield), strict federal/corporate-level auditing, and DLP policies.",
          es: "Gestiona el cifrado (Salesforce Shield), auditoría estricta a nivel federal/corporativo y políticas DLP."
        }
      }
    },
    { 
      id: "arch-4", 
      name: {
        pt: "Performance e Large Data Volumes (LDV)",
        en: "Performance and Large Data Volumes (LDV)",
        es: "Rendimiento y Grandes Volúmenes de Datos (LDV)"
      }, 
      description: {
        pt: "Arquivamento, particionamento, indexação",
        en: "Archiving, partitioning, indexing",
        es: "Archivado, particionamiento, indexación"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Sabe que existem limites na plataforma (Governor Limits).",
          en: "Knows that there are platform limits (Governor Limits).",
          es: "Sabe que existen límites en la plataforma (Governor Limits)."
        },
        2: {
          pt: "Identifica lentidão em relatórios e otimiza filtros básicos.",
          en: "Identifies slowness in reports and optimizes basic filters.",
          es: "Identifica lentitud en informes y optimiza filtros básicos."
        },
        3: {
          pt: "Utiliza ferramentas de profiling, identifica locks e resolve contenções de banco de dados.",
          en: "Uses profiling tools, identifies locks, and resolves database contentions.",
          es: "Utiliza herramientas de perfiles (profiling), identifica bloqueos y resuelve contenciones de bases de datos."
        },
        4: {
          pt: "Implementa Skinny Tables, solicita índices customizados, define estratégias de arquivamento (Tiering).",
          en: "Implements Skinny Tables, requests custom indexes, defines archiving strategies (Tiering).",
          es: "Implementa Skinny Tables, solicita índices personalizados, define estrategias de archivado (Tiering)."
        },
        5: {
          pt: "Domina design de arquitetura resiliente sob cargas massivas (milhões de registros diários) em topologias complexas.",
          en: "Masters resilient architecture design under massive loads (millions of daily records) in complex topologies.",
          es: "Domina el diseño de arquitecturas resilientes bajo cargas masivas (millones de registros diarios) en topologías complejas."
        }
      }
    },
    {
      id: "arch-s1",
      name: {
        pt: "Visão Estratégica & Negócios",
        en: "Strategic & Business Vision",
        es: "Visión Estratégica y de Negocios"
      },
      description: {
        pt: "ROI, C-Level advisory, roadmapping corporativo",
        en: "ROI, C-Level advisory, corporate roadmapping",
        es: "ROI, asesoramiento C-Level, hojas de ruta (roadmapping) corporativas"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Tem interesse em entender os objetivos da empresa.",
          en: "Has an interest in understanding the company's objectives.",
          es: "Tiene interés en comprender los objetivos de la empresa."
        },
        2: {
          pt: "Consegue traduzir dores do usuário em soluções pontuais no Salesforce.",
          en: "Can translate user pain points into specific Salesforce solutions.",
          es: "Puede traducir los dolores de los usuarios en soluciones específicas en Salesforce."
        },
        3: {
          pt: "Alinha requisitos técnicos aos resultados de negócio. Foca na experiência do usuário final.",
          en: "Aligns technical requirements to business results. Focuses on the end-user experience.",
          es: "Alinea los requisitos técnicos con los resultados del negocio. Se enfoca en la experiencia del usuario final."
        },
        4: {
          pt: "Constrói business cases, planeja roteiros (roadmaps) de múltiplos anos e avalia custos/licenciamento.",
          en: "Builds business cases, plans multi-year roadmaps, and evaluates costs/licensing.",
          es: "Construye casos de negocio, planifica hojas de ruta de varios años y evalúa costos/licencias."
        },
        5: {
          pt: "Atua como braço direito do CIO/CTO (Trusted Advisor). Toma decisões buy-vs-build embasadas em ROI.",
          en: "Acts as the right hand to the CIO/CTO (Trusted Advisor). Makes buy-vs-build decisions based on ROI.",
          es: "Actúa como mano derecha del CIO/CTO (Asesor de Confianza). Toma decisiones de comprar vs. construir basadas en el ROI."
        }
      }
    },
    {
      id: "arch-s2",
      name: {
        pt: "Governança Corporativa e Padrões",
        en: "Corporate Governance and Standards",
        es: "Gobernanza Corporativa y Estándares"
      },
      description: {
        pt: "Center of Excellence (CoE), políticas de release, compliance",
        en: "Center of Excellence (CoE), release policies, compliance",
        es: "Centro de Excelencia (CoE), políticas de lanzamiento, cumplimiento (compliance)"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Compreende a necessidade de seguir processos.",
          en: "Understands the need to follow processes.",
          es: "Entiende la necesidad de seguir procesos."
        },
        2: {
          pt: "Segue os padrões de nomenclatura e regras estabelecidas pelo time.",
          en: "Follows naming conventions and rules established by the team.",
          es: "Sigue las convenciones de nomenclatura y las reglas establecidas por el equipo."
        },
        3: {
          pt: "Participa da revisão de código (Code Review) garantindo alinhamento às boas práticas da plataforma.",
          en: "Participates in Code Review ensuring alignment with platform best practices.",
          es: "Participa en la Revisión de Código garantizando la alineación con las mejores prácticas de la plataforma."
        },
        4: {
          pt: "Cria e aplica guias de arquitetura, gerencia o ciclo de vida de aplicações e define os quality gates.",
          en: "Creates and applies architecture guides, manages application lifecycle, and defines quality gates.",
          es: "Crea y aplica guías de arquitectura, gestiona el ciclo de vida de las aplicaciones y define los quality gates."
        },
        5: {
          pt: "Lidera ou estrutura o Center of Excellence (CoE). Estabelece e impõe visão de arquitetura globalmente.",
          en: "Leads or structures the Center of Excellence (CoE). Establishes and enforces architectural vision globally.",
          es: "Lidera o estructura el Centro de Excelencia (CoE). Establece e impone la visión arquitectónica a nivel mundial."
        }
      }
    },
    {
      id: "arch-s3",
      name: {
        pt: "Comunicação e Facilitação",
        en: "Communication and Facilitation",
        es: "Comunicación y Facilitación"
      },
      description: {
        pt: "Negociação, apresentação executiva, resolução de conflitos",
        en: "Negotiation, executive presentation, conflict resolution",
        es: "Negociación, presentación ejecutiva, resolución de conflictos"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Expressa dúvidas técnicas de modo claro.",
          en: "Expresses technical doubts clearly.",
          es: "Expresa dudas técnicas de forma clara."
        },
        2: {
          pt: "Explica conceitos de Salesforce para desenvolvedores e admins de nível básico.",
          en: "Explains Salesforce concepts to basic level developers and admins.",
          es: "Explica conceptos de Salesforce a desarrolladores y administradores de nivel básico."
        },
        3: {
          pt: "Documenta arquitetura (C4 model, diagramas UML) e conduz sessões técnicas com especialistas.",
          en: "Documents architecture (C4 model, UML diagrams) and leads technical sessions with experts.",
          es: "Documenta la arquitectura (modelo C4, diagramas UML) y lidera sesiones técnicas con expertos."
        },
        4: {
          pt: "Media conflitos entre as áreas técnica e de negócios. Facilita workshops de design.",
          en: "Mediates conflicts between technical and business areas. Facilitates design workshops.",
          es: "Media en conflictos entre las áreas técnica y de negocio. Facilita talleres de diseño."
        },
        5: {
          pt: "Apresenta visões complexas para conselhos (Board). Exímio em traduzir tecnologia profunda em jargão de negócio.",
          en: "Presents complex visions to boards. Excellent at translating deep tech into business jargon.",
          es: "Presenta visiones complejas a las juntas directivas. Excelente para traducir tecnología profunda a la jerga empresarial."
        }
      }
    },
    {
      id: "arch-s4",
      name: {
        pt: "Liderança Técnica e Mentoria",
        en: "Technical Leadership and Mentoring",
        es: "Liderazgo Técnico y Mentoría"
      },
      description: {
        pt: "Desenvolvimento de times, coaching técnico, influência",
        en: "Team development, technical coaching, influence",
        es: "Desarrollo de equipos, coaching técnico, influencia"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Interesse em ajudar novos colegas de equipe.",
          en: "Interest in helping new teammates.",
          es: "Interés en ayudar a los nuevos compañeros de equipo."
        },
        2: {
          pt: "Aponta soluções ou compartilha material de estudo com pares.",
          en: "Points out solutions or shares study materials with peers.",
          es: "Apunta soluciones o comparte material de estudio con sus compañeros."
        },
        3: {
          pt: "Atua como tutor informal, orienta desenvolvedores na solução de impedimentos e boas práticas.",
          en: "Acts as an informal tutor, guides developers in solving impediments and best practices.",
          es: "Actúa como tutor informal, guía a los desarrolladores en la resolución de impedimentos y buenas prácticas."
        },
        4: {
          pt: "Desenha planos de desenvolvimento para a equipe técnica. Age como avaliador de nível sênior.",
          en: "Designs development plans for the technical team. Acts as a senior level evaluator.",
          es: "Diseña planes de desarrollo para el equipo técnico. Actúa como evaluador de nivel senior."
        },
        5: {
          pt: "Inspira a organização inteira. Atrai talentos pela sua referência e atua globalmente elevando a barra técnica.",
          en: "Inspires the entire organization. Attracts talent as a reference and acts globally raising the technical bar.",
          es: "Inspira a toda la organización. Atrae talento por su referencia y actúa a nivel global elevando el nivel técnico."
        }
      }
    }
  ],
  knowledgeGroups: [
    {
      title: { pt: "📐 Design de Sistemas", en: "📐 System Design", es: "📐 Diseño de Sistemas" },
      items: {
        pt: [
          "Data Modeling (Modelagem relacional e Big Data)",
          "Estratégia de Integração e Padrões (Event-driven, REST, SOAP)",
          "Gerenciamento de Identidade (SSO, OAuth, SAML, OIDC)",
          "Large Data Volumes (LDV) e Estratégias de Arquivamento"
        ],
        en: [
          "Data Modeling (Relational modeling and Big Data)",
          "Integration Strategy and Patterns (Event-driven, REST, SOAP)",
          "Identity Management (SSO, OAuth, SAML, OIDC)",
          "Large Data Volumes (LDV) and Archiving Strategies"
        ],
        es: [
          "Modelado de Datos (Modelado relacional y Big Data)",
          "Estrategia de Integración y Patrones (Basada en eventos, REST, SOAP)",
          "Gestión de Identidad (SSO, OAuth, SAML, OIDC)",
          "Grandes Volúmenes de Datos (LDV) y Estrategias de Archivado"
        ]
      }
    },
    {
      title: { pt: "🔒 Segurança & Conformidade", en: "🔒 Security & Compliance", es: "🔒 Seguridad y Cumplimiento" },
      items: {
        pt: [
          "Modelo de Compartilhamento Complexo (OWD, Role Hierarchy, Territory)",
          "Salesforce Shield (Encryption, Event Monitoring, Audit Trail)",
          "Conformidade e Regulações (GDPR, LGPD, HIPAA)",
          "Segurança de APIs e Endpoints"
        ],
        en: [
          "Complex Sharing Model (OWD, Role Hierarchy, Territory)",
          "Salesforce Shield (Encryption, Event Monitoring, Audit Trail)",
          "Compliance and Regulations (GDPR, CCPA, HIPAA)",
          "API and Endpoint Security"
        ],
        es: [
          "Modelo de Intercambio Complejo (OWD, Jerarquía de Roles, Territorio)",
          "Salesforce Shield (Cifrado, Monitoreo de Eventos, Pista de Auditoría)",
          "Cumplimiento y Regulaciones (GDPR, LGPD, HIPAA)",
          "Seguridad de API y Endpoints"
        ]
      }
    },
    {
      title: { pt: "⚙️ Ciclo de Vida & Governança", en: "⚙️ Lifecycle & Governance", es: "⚙️ Ciclo de Vida y Gobernanza" },
      items: {
        pt: [
          "Estratégia de Ambientes (Environment Management)",
          "DevOps, CI/CD e Release Management",
          "Center of Excellence (CoE)",
          "Análise e Mitigação de Dívida Técnica"
        ],
        en: [
          "Environment Strategy (Environment Management)",
          "DevOps, CI/CD, and Release Management",
          "Center of Excellence (CoE)",
          "Technical Debt Analysis and Mitigation"
        ],
        es: [
          "Estrategia de Entornos (Gestión de Entornos)",
          "DevOps, CI/CD y Gestión de Lanzamientos",
          "Centro de Excelencia (CoE)",
          "Análisis y Mitigación de la Deuda Técnica"
        ]
      }
    },
    {
      title: { pt: "📊 Negócios & Liderança", en: "📊 Business & Leadership", es: "📊 Negocios y Liderazgo" },
      items: {
        pt: [
          "Alinhamento Estratégico de TI e Negócios",
          "Análise de Buy vs. Build",
          "Construção de Business Cases e ROI",
          "Comunicação Executiva (C-Level)"
        ],
        en: [
          "Strategic Alignment of IT and Business",
          "Buy vs. Build Analysis",
          "Business Cases Construction and ROI",
          "Executive Communication (C-Level)"
        ],
        es: [
          "Alineación Estratégica de TI y Negocios",
          "Análisis de Comprar vs. Construir",
          "Construcción de Casos de Negocio y ROI",
          "Comunicación Ejecutiva (Nivel C)"
        ]
      }
    },
    {
      title: { pt: "🛠️ Ferramentas & Documentação", en: "🛠️ Tools & Documentation", es: "🛠️ Herramientas y Documentación" },
      items: {
        pt: [
          "Diagramação de Arquitetura (Lucidchart, Draw.io)",
          "Notações Padrão (C4 Model, UML, ArchiMate)",
          "Ferramentas de Middleware (MuleSoft, Boomi)",
          "Soluções de DevOps (Copado, AutoRABIT, Jenkins)"
        ],
        en: [
          "Architecture Diagramming (Lucidchart, Draw.io)",
          "Standard Notations (C4 Model, UML, ArchiMate)",
          "Middleware Tools (MuleSoft, Boomi)",
          "DevOps Solutions (Copado, AutoRABIT, Jenkins)"
        ],
        es: [
          "Diagramación de Arquitectura (Lucidchart, Draw.io)",
          "Notaciones Estándar (Modelo C4, UML, ArchiMate)",
          "Herramientas Middleware (MuleSoft, Boomi)",
          "Soluciones DevOps (Copado, AutoRABIT, Jenkins)"
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
      pt: "Como Arquiteto, você é o visionário do Revenue Operating System. Você garante que a fundação tecnológica da empresa suporte não apenas a operação atual, mas o crescimento futuro. Cada decisão estrutural que você toma evita gargalos, protege dados e garante que o motor de receita escale sem limites.",
      en: "As an Architect, you are the visionary of the Revenue Operating System. You ensure the technological foundation of the company supports not only current operations but future growth. Every structural decision you make prevents bottlenecks, protects data, and ensures the revenue engine scales limitlessly.",
      es: "Como Arquitecto, eres el visionario del Revenue Operating System. Garantizas que la base tecnológica de la empresa respalde no solo la operación actual, sino el crecimiento futuro. Cada decisión estructural que tomas evita cuellos de botella, protege los datos y garantiza que el motor de ingresos escale sin límites."
    },
    pillars: [
      {
        title: { pt: "Fonte única da verdade", en: "Single source of truth", es: "Única fuente de verdad" },
        description: { pt: "Centralizar Contas, Contatos, Oportunidades e Pipeline.", en: "Centralize Accounts, Contacts, Opportunities, and Pipeline.", es: "Centralizar Cuentas, Contactos, Oportunidades y Pipeline." },
        icon: "🧩",
        roleImpact: { 
          pt: "Você define o Master Data Management (MDM). Ao arquitetar o fluxo de dados entre ERP, CRM e sistemas externos, você garante que a 'fonte da verdade' seja inviolável, consistente e livre de duplicidade sistêmica.", 
          en: "You define Master Data Management (MDM). By architecting the data flow between ERP, CRM, and external systems, you ensure the 'source of truth' is inviolable, consistent, and free of systemic duplication.", 
          es: "Defines la Gestión de Datos Maestros (MDM). Al diseñar el flujo de datos entre ERP, CRM y sistemas externos, garantizas que la 'fuente de verdad' sea inviolable, consistente y libre de duplicidad sistémica." 
        }
      },
      {
        title: { pt: "Segmentação como pilar central", en: "Segmentation as a core pillar", es: "Segmentación como pilar central" },
        description: { pt: "Segmentação única que governa carteira, campanhas e parcerias.", en: "Single segmentation governing portfolio, campaigns, and partnerships.", es: "Segmentación única que rige la cartera, las campañas y las asociaciones." },
        icon: "🎯",
        roleImpact: { 
          pt: "Você projeta a estrutura de Large Data Volumes (LDV). Para que a inteligência de segmentação funcione em bases com milhões de registros, você define arquivamento, indexação e estratégias de acesso de alta performance.", 
          en: "You design the Large Data Volumes (LDV) structure. So that segmentation intelligence works on bases with millions of records, you define archiving, indexing, and high-performance access strategies.", 
          es: "Diseñas la estructura de Grandes Volúmenes de Datos (LDV). Para que la inteligencia de segmentación funcione en bases con millones de registros, defines estrategias de archivado, indexación y acceso de alto rendimiento." 
        }
      },
      {
        title: { pt: "Mensuração ponta a ponta", en: "End-to-end measurement", es: "Medición de extremo a extremo" },
        description: { pt: "Rastrear toda a jornada: Lead → Opportunity → Closed Won.", en: "Track the entire journey: Lead → Opportunity → Closed Won.", es: "Rastrear todo el viaje: Lead → Oportunidad → Cerrado Ganado." },
        icon: "📊",
        roleImpact: { 
          pt: "Você orquestra a camada analítica (BI, Data Lakes). Garante que a integração entre Salesforce e os sistemas de Data Warehouse entreguem insights em tempo real e de forma segura, com governança.", 
          en: "You orchestrate the analytical layer (BI, Data Lakes). Ensure that the integration between Salesforce and Data Warehouse systems delivers insights in real-time and securely, with governance.", 
          es: "Orquestas la capa analítica (BI, Data Lakes). Aseguras que la integración entre Salesforce y los sistemas Data Warehouse entregue información en tiempo real y de forma segura, con gobernanza." 
        }
      },
      {
        title: { pt: "GTM Integrado", en: "Integrated GTM", es: "GTM Integrado" },
        description: { pt: "Integração contínua entre Produto, Marketing, Vendas e Parcerias.", en: "Continuous integration between Product, Marketing, Sales, and Partnerships.", es: "Integración continua entre Producto, Marketing, Ventas y Asociaciones." },
        icon: "🔄",
        roleImpact: { 
          pt: "Você lidera o desenho do ecossistema Multi-Cloud. Define o middleware (ex: MuleSoft), a arquitetura de eventos e a estratégia de identidade (SSO) para que as soluções operem como um organismo único e coeso.", 
          en: "You lead the design of the Multi-Cloud ecosystem. Define the middleware (e.g., MuleSoft), event architecture, and identity strategy (SSO) so the solutions operate as a single cohesive organism.", 
          es: "Lideras el diseño del ecosistema multinube. Defines el middleware (ej. MuleSoft), la arquitectura de eventos y la estrategia de identidad (SSO) para que las soluciones operen como un organismo único y cohesivo." 
        }
      },
      {
        title: { pt: "Escala com padronização", en: "Scale with standardization", es: "Escalar con estandarización" },
        description: { pt: "Processos consistentes através de playbooks, SLAs e automações.", en: "Consistent processes through playbooks, SLAs, and automations.", es: "Procesos consistentes a través de playbooks, SLAs y automatizaciones." },
        icon: "⚙️",
        roleImpact: { 
          pt: "Sua principal alavanca. Através do Center of Excellence (CoE), governança de release (CI/CD) e padrões arquiteturais, você mitiga riscos técnicos e cria a rodovia pavimentada para a empresa inovar rapidamente.", 
          en: "Your main lever. Through the Center of Excellence (CoE), release governance (CI/CD), and architectural standards, you mitigate technical risks and pave the highway for the company to innovate quickly.", 
          es: "Tu principal palanca. A través del Centro de Excelencia (CoE), la gobernanza de lanzamientos (CI/CD) y los estándares arquitectónicos, mitigas los riesgos técnicos y allanas el camino para que la empresa innove rápidamente." 
        }
      }
    ]
  },
  evolution: {
    intro: {
      pt: "A evolução do Arquiteto Salesforce é estruturada em cinco estágios de maturidade, refletindo o aprofundamento na capacidade de desenhar ecossistemas complexos, resilientes e alinhados estrategicamente:",
      en: "The evolution of the Salesforce Architect is structured in five stages of maturity, reflecting the deepening capacity to design complex, resilient, and strategically aligned ecosystems:",
      es: "La evolución del Arquitecto Salesforce está estructurada en cinco etapas de madurez, reflejando la capacidad de profundizar en el diseño de ecosistemas complejos, resilientes y estratégicamente alineados:"
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
        level: { pt: "Arquiteto Solution (Transição)", en: "Solution Architect (Transition)", es: "Arquitecto de Soluciones (Transición)" },
        mindset: { pt: "Projetar soluções seguras e viáveis para a plataforma.", en: "Design secure and viable solutions for the platform.", es: "Diseñar soluciones seguras y viables para la plataforma." },
        focus: {
          pt: [
            "Modelagem de dados complexos (Data Architecture)",
            "Decisões buy-vs-build e Declarativo vs. Customizado",
            "Estruturação básica de permissões e compartilhamento"
          ],
          en: [
            "Complex data modeling (Data Architecture)",
            "Buy-vs-build and Declarative vs. Custom decisions",
            "Basic structuring of permissions and sharing"
          ],
          es: [
            "Modelado de datos complejos (Arquitectura de Datos)",
            "Decisiones de compra vs. construcción y Declarativo vs. Personalizado",
            "Estructuración básica de permisos e intercambio"
          ]
        }
      },
      {
        level: { pt: "Arquiteto Pleno", en: "Mid-level Architect", es: "Arquitecto Pleno (Medio)" },
        mindset: { pt: "Integrar o CRM ao ecossistema corporativo.", en: "Integrate CRM to the corporate ecosystem.", es: "Integrar el CRM al ecosistema corporativo." },
        focus: {
          pt: [
            "Desenho de integrações P2P e uso de APIs",
            "Gerenciamento do ciclo de vida da aplicação (ALM, DevOps)",
            "Identificação e mitigação de dívida técnica"
          ],
          en: [
            "Design of P2P integrations and use of APIs",
            "Application Lifecycle Management (ALM, DevOps)",
            "Identification and mitigation of technical debt"
          ],
          es: [
            "Diseño de integraciones P2P y uso de API",
            "Gestión del ciclo de vida de la aplicación (ALM, DevOps)",
            "Identificación y mitigación de la deuda técnica"
          ]
        }
      },
      {
        level: { pt: "Arquiteto Sênior (Technical / Enterprise)", en: "Senior Architect (Technical / Enterprise)", es: "Arquitecto Senior (Técnico / Empresarial)" },
        mindset: { pt: "Projetar em grande escala (Enterprise Scale).", en: "Design at Enterprise Scale.", es: "Diseñar a gran escala (Enterprise Scale)." },
        focus: {
          pt: [
            "Arquitetura orientada a eventos e Middleware (ESB)",
            "Otimização para Large Data Volumes (LDV)",
            "Implementação de SSO, Identity Management (IdP) e conformidade global"
          ],
          en: [
            "Event-driven architecture and Middleware (ESB)",
            "Optimization for Large Data Volumes (LDV)",
            "Implementation of SSO, Identity Management (IdP), and global compliance"
          ],
          es: [
            "Arquitectura orientada a eventos y Middleware (ESB)",
            "Optimización para Grandes Volúmenes de Datos (LDV)",
            "Implementación de SSO, Gestión de Identidad (IdP) y cumplimiento global"
          ]
        }
      },
      {
        level: { pt: "CTA / Estratégico", en: "CTA / Strategic", es: "CTA / Estratégico" },
        mindset: { pt: "Liderar a visão tecnológica para impulsionar o negócio.", en: "Lead the technological vision to drive the business.", es: "Liderar la visión tecnológica para impulsar el negocio." },
        focus: {
          pt: [
            "Liderança do Center of Excellence (CoE)",
            "Alinhamento da arquitetura com o Business Plan e KPIs executivos",
            "Definição da visão corporativa de tecnologia e inovação"
          ],
          en: [
            "Leadership of the Center of Excellence (CoE)",
            "Alignment of architecture with the Business Plan and executive KPIs",
            "Definition of the corporate vision of technology and innovation"
          ],
          es: [
            "Liderazgo del Centro de Excelencia (CoE)",
            "Alineación de la arquitectura con el Plan de Negocios y KPIs ejecutivos",
            "Definición de la visión corporativa de tecnología e innovación"
          ]
        }
      }
    ]
  }
};
