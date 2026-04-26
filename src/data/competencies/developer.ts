import { CompetencyCategory } from "./types";

export const developerCompetency: CompetencyCategory = {
  id: "developer",
  title: {
    pt: "Developer",
    en: "Developer",
    es: "Desarrollador"
  },
  icon: "💻",
  description: {
    pt: "Apex, LWC, integrações e desenvolvimento customizado",
    en: "Apex, LWC, integrations, and custom development",
    es: "Apex, LWC, integraciones y desarrollo personalizado"
  },
  color: "secondary",
  skills: [
    { 
      id: "dev-1", 
      name: {
        pt: "Apex & Triggers",
        en: "Apex & Triggers",
        es: "Apex y Disparadores"
      }, 
      description: {
        pt: "Classes, logic, design patterns, asynchronous processing",
        en: "Classes, logic, design patterns, asynchronous processing",
        es: "Clases, lógica, patrones de diseño, procesamiento asíncrono"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Conhece a sintaxe básica de Java ou C# e lógica de programação.",
          en: "Knows basic Java or C# syntax and programming logic.",
          es: "Conoce la sintaxis básica de Java o C# y la lógica de programación."
        },
        2: {
          pt: "Escreve classes e triggers simples; domina sintaxe básica Apex.",
          en: "Writes simple classes and triggers; masters basic Apex syntax.",
          es: "Escribe clases y disparadores simples; domina la sintaxis básica de Apex."
        },
        3: {
          pt: "Implementa lógica de negócios intermediária, usa métodos assíncronos simples.",
          en: "Implements intermediate business logic, uses simple asynchronous methods.",
          es: "Implementa lógica empresarial intermedia, utiliza métodos asíncronos simples."
        },
        4: {
          pt: "Estrutura camadas de serviço, aplica padrões de design, governa limites.",
          en: "Structures service layers, applies design patterns, governs limits.",
          es: "Estructura capas de servicio, aplica patrones de diseño, gobierna límites."
        },
        5: {
          pt: "Define frameworks reutilizáveis, técnicas de bulkification avançadas e arquitetura de domínio.",
          en: "Defines reusable frameworks, advanced bulkification techniques, and domain architecture.",
          es: "Define marcos reutilizables, técnicas avanzadas de bulkification y arquitectura de dominio."
        }
      }
    },
    { 
      id: "dev-2", 
      name: {
        pt: "Interface UI (LWC & Visualforce)",
        en: "UI Interface (LWC & Visualforce)",
        es: "Interfaz de Usuario (LWC y Visualforce)"
      }, 
      description: {
        pt: "Reactive components, events, wire service, design system",
        en: "Reactive components, events, wire service, design system",
        es: "Componentes reactivos, eventos, servicio wire, sistema de diseño"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Conhece o básico de HTML, CSS e JavaScript.",
          en: "Knows the basics of HTML, CSS, and JavaScript.",
          es: "Conoce los conceptos básicos de HTML, CSS y JavaScript."
        },
        2: {
          pt: "Cria páginas Visualforce simples ou modifica LWCs existentes.",
          en: "Creates simple Visualforce pages or modifies existing LWCs.",
          es: "Crea páginas Visualforce simples o modifica LWCs existentes."
        },
        3: {
          pt: "Desenvolve LWCs completos, usa data-binding e eventos, mantém código Aura legado.",
          en: "Develops complete LWCs, uses data-binding and events, maintains legacy Aura code.",
          es: "Desarrolla LWCs completos, usa enlace de datos y eventos, mantiene código Aura heredado."
        },
        4: {
          pt: "Lidera design de UI componível, otimiza performance e acessibilidade.",
          en: "Leads composable UI design, optimizes performance and accessibility.",
          es: "Lidera el diseño de UI componible, optimiza el rendimiento y la accesibilidad."
        },
        5: {
          pt: "Define design-system Lightning corporativo e componentes reutilizáveis multi-cloud.",
          en: "Defines corporate Lightning design-system and reusable multi-cloud components.",
          es: "Define el sistema de diseño corporativo Lightning y componentes reutilizables multinube."
        }
      }
    },
    { 
      id: "dev-3", 
      name: {
        pt: "Integrações & APIs",
        en: "Integrations & APIs",
        es: "Integraciones y API"
      }, 
      description: {
        pt: "REST, SOAP, OAuth, callouts, event-driven architecture",
        en: "REST, SOAP, OAuth, callouts, event-driven architecture",
        es: "REST, SOAP, OAuth, callouts, arquitectura orientada a eventos"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Entende o conceito básico de cliente-servidor e requisições HTTP.",
          en: "Understands the basic concept of client-server and HTTP requests.",
          es: "Comprende el concepto básico de cliente-servidor y las solicitudes HTTP."
        },
        2: {
          pt: "Consome REST API básica; entende conceito de endpoints.",
          en: "Consumes basic REST API; understands the concept of endpoints.",
          es: "Consume API REST básica; entiende el concepto de puntos finales (endpoints)."
        },
        3: {
          pt: "Configura integrações REST/SOAP, usa OAuth, cria callouts em Apex.",
          en: "Configures REST/SOAP integrations, uses OAuth, creates callouts in Apex.",
          es: "Configura integraciones REST/SOAP, usa OAuth, crea callouts en Apex."
        },
        4: {
          pt: "Desenha integrações robustas com middleware, lida com erros e retry lógicos.",
          en: "Designs robust integrations with middleware, handles errors and logic retries.",
          es: "Diseña integraciones robustas con middleware, maneja errores y reintentos lógicos."
        },
        5: {
          pt: "Arquitetura de integrações event-driven, alta disponibilidade, governança de API.",
          en: "Event-driven integration architecture, high availability, API governance.",
          es: "Arquitectura de integraciones orientadas a eventos, alta disponibilidad, gobernanza de API."
        }
      }
    },
    { 
      id: "dev-4", 
      name: {
        pt: "Dados & SOQL / SOSL / DML",
        en: "Data & SOQL / SOSL / DML",
        es: "Datos y SOQL / SOSL / DML"
      }, 
      description: {
        pt: "Queries, bulk DML, data modeling, performance optimization",
        en: "Queries, bulk DML, data modeling, performance optimization",
        es: "Consultas, DML masivo, modelado de datos, optimización del rendimiento"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Entende o que são tabelas, campos e relacionamentos em bancos de dados.",
          en: "Understands what tables, fields, and relationships are in databases.",
          es: "Entiende qué son las tablas, campos y relaciones en bases de datos."
        },
        2: {
          pt: "Executa consultas SOQL simples; manipula dados via DML.",
          en: "Executes simple SOQL queries; manipulates data via DML.",
          es: "Ejecuta consultas SOQL simples; manipula datos a través de DML."
        },
        3: {
          pt: "Otimiza SOQL com filtros, usa SOSL; manipula transações, upsert e merge.",
          en: "Optimizes SOQL with filters, uses SOSL; manipulates transactions, upsert, and merge.",
          es: "Optimiza SOQL con filtros, usa SOSL; manipula transacciones, upsert y fusión (merge)."
        },
        4: {
          pt: "Garante governança de dados, índices, práticas de bulk DML e locks.",
          en: "Ensures data governance, indexes, bulk DML practices, and locks.",
          es: "Garantiza la gobernanza de datos, índices, prácticas de DML masivo y bloqueos."
        },
        5: {
          pt: "Estratégias MDM, particionamento, Big Object e otimização massiva de queries.",
          en: "MDM strategies, partitioning, Big Object, and massive query optimization.",
          es: "Estrategias de MDM, particionamiento, Big Object y optimización masiva de consultas."
        }
      }
    },
    { 
      id: "dev-5", 
      name: {
        pt: "Dev Env & DevOps",
        en: "Dev Env & DevOps",
        es: "Entorno de Desarrollo y DevOps"
      }, 
      description: {
        pt: "DX, CI/CD, unit testing, Git, release management",
        en: "DX, CI/CD, unit testing, Git, release management",
        es: "DX, CI/CD, pruebas unitarias, Git, gestión de lanzamientos"
      },
      type: "hard",
      requirements: {
        1: {
          pt: "Conhece o uso básico de terminal e editores de código.",
          en: "Knows the basic use of terminals and code editors.",
          es: "Conoce el uso básico de la terminal y editores de código."
        },
        2: {
          pt: "Usa VS Code + SFDX; escreve testes unitários básicos.",
          en: "Uses VS Code + SFDX; writes basic unit tests.",
          es: "Usa VS Code + SFDX; escribe pruebas unitarias básicas."
        },
        3: {
          pt: "Trabalha com Scratch Orgs, pipelines CI/CD simples; cobertura >= 75%.",
          en: "Works with Scratch Orgs, simple CI/CD pipelines; coverage >= 75%.",
          es: "Trabaja con Scratch Orgs, canales CI/CD simples; cobertura >= 75%."
        },
        4: {
          pt: "Mantém estratégia completa de branch, automação de testes e monitoramento.",
          en: "Maintains a complete branch strategy, test automation, and monitoring.",
          es: "Mantiene una estrategia completa de ramas, automatización de pruebas y monitoreo."
        },
        5: {
          pt: "Define plataforma DevOps enterprise, com quality-gates, automação e políticas de liberação.",
          en: "Defines corporate DevOps platform, with quality-gates, automation, and release policies.",
          es: "Define una plataforma DevOps empresarial, con puertas de calidad (quality-gates), automatización y políticas de liberación."
        }
      }
    },
    {
      id: "dev-s1",
      name: {
        pt: "Resolução de Problemas & Depuração",
        en: "Problem Solving & Debugging",
        es: "Resolución de Problemas y Depuración"
      },
      description: {
        pt: "Log analysis, root-cause investigation, profiling",
        en: "Log analysis, root-cause investigation, profiling",
        es: "Análisis de registros, investigación de causas raíz, creación de perfiles (profiling)"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Identifica erros básicos de sintaxe no código.",
          en: "Identifies basic syntax errors in the code.",
          es: "Identifica errores básicos de sintaxis en el código."
        },
        2: {
          pt: "Usa logs e System.debug; resolve bugs simples.",
          en: "Uses logs and System.debug; solves simple bugs.",
          es: "Usa registros (logs) y System.debug; resuelve errores simples."
        },
        3: {
          pt: "Utiliza Developer Console, depurador e logs detalhados; analisa governor limits.",
          en: "Uses Developer Console, debugger, and detailed logs; analyzes governor limits.",
          es: "Utiliza Developer Console, depurador y registros detallados; analiza los límites del gobernador (governor limits)."
        },
        4: {
          pt: "Conduz root-cause analysis complexo; aplica profiling e tuning.",
          en: "Conducts complex root-cause analysis; applies profiling and tuning.",
          es: "Conduce análisis complejos de causas raíz; aplica profiling y ajustes (tuning)."
        },
        5: {
          pt: "Estabelece cultura de qualidade, ferramentas de observabilidade e prevenção de falhas.",
          en: "Establishes a quality culture, observability tools, and failure prevention.",
          es: "Establece una cultura de calidad, herramientas de observabilidad y prevención de fallas."
        }
      }
    },
    {
      id: "dev-s2",
      name: {
        pt: "Colaboração & Trabalho em Equipe",
        en: "Collaboration & Teamwork",
        es: "Colaboración y Trabajo en Equipo"
      },
      description: {
        pt: "Code review, pair programming, tech leadership",
        en: "Code review, pair programming, tech leadership",
        es: "Revisión de código, programación en pareja, liderazgo técnico"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Trabalha bem em equipe e aceita feedbacks técnicos.",
          en: "Works well in a team and accepts technical feedback.",
          es: "Trabaja bien en equipo y acepta retroalimentación técnica."
        },
        2: {
          pt: "Participa de dailies, compartilha código e colabora com o time.",
          en: "Participates in dailies, shares code, and collaborates with the team.",
          es: "Participa en dailies, comparte código y colabora con el equipo."
        },
        3: {
          pt: "Faz code-review, pair-programming e documentação clara para o time.",
          en: "Performs code-review, pair-programming, and writes clear documentation for the team.",
          es: "Realiza revisiones de código, programación en pareja y escribe documentación clara para el equipo."
        },
        4: {
          pt: "Lidera squads, padroniza práticas de desenvolvimento de software.",
          en: "Leads squads, standardizes software development practices.",
          es: "Lidera escuadrones (squads), estandariza prácticas de desarrollo de software."
        },
        5: {
          pt: "Atua como tech lead cross-equipes, promove comunidades técnicas internas.",
          en: "Acts as cross-team tech lead, promotes internal technical communities.",
          es: "Actúa como líder técnico entre equipos, promueve comunidades técnicas internas."
        }
      }
    },
    {
      id: "dev-s3",
      name: {
        pt: "Comunicação & Documentação",
        en: "Communication & Documentation",
        es: "Comunicación y Documentación"
      },
      description: {
        pt: "Technical writing, cross-team communication, presentations",
        en: "Technical writing, cross-team communication, presentations",
        es: "Redacción técnica, comunicación entre equipos, presentaciones"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Consegue explicar o que seu código faz de forma simples.",
          en: "Can explain what their code does in a simple way.",
          es: "Puede explicar lo que hace su código de manera sencilla."
        },
        2: {
          pt: "Redige comentários claros e atualiza documentação técnica interna.",
          en: "Writes clear comments and updates internal technical documentation.",
          es: "Redacta comentarios claros y actualiza la documentación técnica interna."
        },
        3: {
          pt: "Mantém diagramas de solução e runbooks atualizados e detalhados.",
          en: "Keeps solution diagrams and runbooks updated and detailed.",
          es: "Mantiene actualizados y detallados los diagramas de solución y los runbooks."
        },
        4: {
          pt: "Apresenta soluções técnicas a stakeholders não técnicos de forma clara.",
          en: "Presents technical solutions to non-technical stakeholders clearly.",
          es: "Presenta soluciones técnicas a partes interesadas no técnicas de manera clara."
        },
        5: {
          pt: "Comunica estratégias a executivos, publica white-papers e fala em eventos.",
          en: "Communicates strategies to executives, publishes white-papers, and speaks at events.",
          es: "Comunica estrategias a ejecutivos, publica documentos técnicos (white-papers) y habla en eventos."
        }
      }
    },
    {
      id: "dev-s4",
      name: {
        pt: "Metodologias Ágeis & Gestão de Versão",
        en: "Agile Methodologies & Version Management",
        es: "Metodologías Ágiles y Gestión de Versiones"
      },
      description: {
        pt: "Git flow, sprint planning, release orchestration",
        en: "Git flow, sprint planning, release orchestration",
        es: "Flujo de Git (Git flow), planificación de sprints, orquestación de lanzamientos"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Entende a importância de salvar o código e trabalhar em sprints.",
          en: "Understands the importance of saving code and working in sprints.",
          es: "Comprende la importancia de guardar el código y trabajar en sprints."
        },
        2: {
          pt: "Usa tarefas Kanban/Scrum básicas; domina comandos simples de Git.",
          en: "Uses basic Kanban/Scrum tasks; masters simple Git commands.",
          es: "Usa tareas básicas de Kanban/Scrum; domina comandos simples de Git."
        },
        3: {
          pt: "Planeja sprints, histórias de usuário e versiona via Git flow rigoroso.",
          en: "Plans sprints, user stories, and versions via rigorous Git flow.",
          es: "Planifica sprints, historias de usuario y gestiona versiones a través de un riguroso flujo de Git."
        },
        4: {
          pt: "Gerencia backlog técnico, métricas ágeis e coordena janelas de release.",
          en: "Manages technical backlog, agile metrics, and coordinates release windows.",
          es: "Gestiona el backlog técnico, las métricas ágiles y coordina las ventanas de lanzamiento."
        },
        5: {
          pt: "Define governança ágil enterprise e integração contínua multi-equipe.",
          en: "Defines enterprise agile governance and multi-team continuous integration.",
          es: "Define la gobernanza ágil empresarial y la integración continua en múltiples equipos."
        }
      }
    },
    {
      id: "dev-s5",
      name: {
        pt: "Aprendizado Contínuo & Comunidade",
        en: "Continuous Learning & Community",
        es: "Aprendizaje Continuo y Comunidad"
      },
      description: {
        pt: "Certifications, meetups, open-source, mentoring",
        en: "Certifications, meetups, open-source, mentoring",
        es: "Certificaciones, meetups, código abierto (open-source), mentoría"
      },
      type: "soft",
      requirements: {
        1: {
          pt: "Possui conta no Trailhead e interesse em aprender tecnologias novas.",
          en: "Has a Trailhead account and interest in learning new technologies.",
          es: "Tiene una cuenta en Trailhead e interés en aprender nuevas tecnologías."
        },
        2: {
          pt: "Completa trilhas Trailhead iniciais e estuda documentação oficial.",
          en: "Completes initial Trailhead trails and studies official documentation.",
          es: "Completa rutas iniciales en Trailhead y estudia la documentación oficial."
        },
        3: {
          pt: "Obtém cert. Platform Dev I e participa ativamente de grupos locais.",
          en: "Obtains Platform Dev I certification and actively participates in local groups.",
          es: "Obtiene la certificación Platform Dev I y participa activamente en grupos locales."
        },
        4: {
          pt: "Conquista cert. Dev II / Integration, palestra em meetups e eventos.",
          en: "Achieves Dev II / Integration certifications, speaks at meetups and events.",
          es: "Logra las certificaciones Dev II / Integración, da charlas en meetups y eventos."
        },
        5: {
          pt: "Atua como MVP/mentor, contribui para open-source e eventos globais.",
          en: "Acts as MVP/mentor, contributes to open-source and global events.",
          es: "Actúa como MVP/mentor, contribuye a código abierto y eventos globales."
        }
      }
    }
  ],
  knowledgeGroups: [
    {
      title: { pt: "💻 Apex", en: "💻 Apex", es: "💻 Apex" },
      items: {
        pt: [
          "Classes e triggers",
          "Bulkification (ESSENCIAL)",
          "Governor Limits",
          "Test classes (>=75%)",
          "Async (Future, Queueable, Batch, Schedulable)"
        ],
        en: [
          "Classes and triggers",
          "Bulkification (ESSENTIAL)",
          "Governor Limits",
          "Test classes (>=75%)",
          "Async (Future, Queueable, Batch, Schedulable)"
        ],
        es: [
          "Clases y disparadores",
          "Bulkification (ESENCIAL)",
          "Límites del gobernador (Governor Limits)",
          "Clases de prueba (>=75%)",
          "Asíncrono (Futuro, Queueable, Batch, Schedulable)"
        ]
      }
    },
    {
      title: { pt: "🌐 APIs & Integração", en: "🌐 APIs & Integration", es: "🌐 APIs e Integración" },
      items: {
        pt: [
          "REST API, SOAP API",
          "Callouts (HTTP)",
          "Named Credentials",
          "Auth (OAuth 2.0, JWT)"
        ],
        en: [
          "REST API, SOAP API",
          "Callouts (HTTP)",
          "Named Credentials",
          "Auth (OAuth 2.0, JWT)"
        ],
        es: [
          "API REST, API SOAP",
          "Llamadas (Callouts - HTTP)",
          "Credenciales con nombre",
          "Autenticación (OAuth 2.0, JWT)"
        ]
      }
    },
    {
      title: { pt: "⚡ Frontend Salesforce", en: "⚡ Salesforce Frontend", es: "⚡ Frontend de Salesforce" },
      items: {
        pt: [
          "LWC (Lightning Web Components)",
          "Aura (legado)",
          "SLDS (design system)"
        ],
        en: [
          "LWC (Lightning Web Components)",
          "Aura (legacy)",
          "SLDS (design system)"
        ],
        es: [
          "LWC (Lightning Web Components)",
          "Aura (heredado)",
          "SLDS (sistema de diseño)"
        ]
      }
    },
    {
      title: { pt: "🔄 Dados", en: "🔄 Data", es: "🔄 Datos" },
      items: {
        pt: [
          "SOQL (muito importante)",
          "SOSL",
          "Manipulação de grandes volumes"
        ],
        en: [
          "SOQL (very important)",
          "SOSL",
          "Large data volume handling"
        ],
        es: [
          "SOQL (muy importante)",
          "SOSL",
          "Manejo de grandes volúmenes de datos"
        ]
      }
    },
    {
      title: { pt: "🧠 Service Cloud (técnico)", en: "🧠 Service Cloud (technical)", es: "🧠 Service Cloud (técnico)" },
      items: {
        pt: [
          "Messaging (WhatsApp, Chat)",
          "Conversation API",
          "Omni-Channel internals",
          "Platform Events"
        ],
        en: [
          "Messaging (WhatsApp, Chat)",
          "Conversation API",
          "Omni-Channel internals",
          "Platform Events"
        ],
        es: [
          "Mensajería (WhatsApp, Chat)",
          "API de Conversación",
          "Internos de Omni-Channel",
          "Eventos de la Plataforma (Platform Events)"
        ]
      }
    },
    {
      title: { pt: "🧱 Arquitetura básica", en: "🧱 Basic Architecture", es: "🧱 Arquitectura Básica" },
      items: {
        pt: [
          "Trigger frameworks",
          "Separation of concerns",
          "Design patterns (Factory, Service Layer)"
        ],
        en: [
          "Trigger frameworks",
          "Separation of concerns",
          "Design patterns (Factory, Service Layer)"
        ],
        es: [
          "Marcos de disparadores (Trigger frameworks)",
          "Separación de preocupaciones",
          "Patrones de diseño (Fábrica, Capa de servicio)"
        ]
      }
    },
    {
      title: { pt: "🛠️ Ferramentas", en: "🛠️ Tools", es: "🛠️ Herramientas" },
      items: {
        pt: [
          "VS Code + Salesforce Extension Pack",
          "SFDX CLI, sf CLI novo",
          "Postman (avançado)",
          "Workbench, Salesforce Inspector",
          "Git (GitHub/GitLab/Bitbucket)",
          "Jira / Azure DevOps",
          "Debug Logs"
        ],
        en: [
          "VS Code + Salesforce Extension Pack",
          "SFDX CLI, new sf CLI",
          "Postman (advanced)",
          "Workbench, Salesforce Inspector",
          "Git (GitHub/GitLab/Bitbucket)",
          "Jira / Azure DevOps",
          "Debug Logs"
        ],
        es: [
          "VS Code + Paquete de Extensiones de Salesforce",
          "CLI de SFDX, nueva CLI sf",
          "Postman (avanzado)",
          "Workbench, Inspector de Salesforce",
          "Git (GitHub/GitLab/Bitbucket)",
          "Jira / Azure DevOps",
          "Registros de depuración (Debug Logs)"
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
      pt: "Como Desenvolvedor, você não é apenas um 'codificador'. Você é o engenheiro que escala o Revenue Operating System. Onde as ferramentas padrão terminam, seu código Apex, LWC e integrações garantem que fluxos complexos de negócios e dados em larga escala operem sem atrito para gerar receita.",
      en: "As a Developer, you are not just a 'coder'. You are the engineer who scales the Revenue Operating System. Where standard tools end, your Apex code, LWC, and integrations ensure that complex business flows and large-scale data operate frictionlessly to generate revenue.",
      es: "Como Desarrollador, no eres solo un 'codificador'. Eres el ingeniero que escala el Revenue Operating System. Donde terminan las herramientas estándar, tu código Apex, LWC e integraciones aseguran que los flujos de negocio complejos y los datos a gran escala operen sin fricción para generar ingresos."
    },
    pillars: [
      {
        title: { pt: "Fonte única da verdade", en: "Single source of truth", es: "Única fuente de verdad" },
        description: { pt: "Centralizar Contas, Contatos, Oportunidades e Pipeline.", en: "Centralize Accounts, Contacts, Opportunities, and Pipeline.", es: "Centralizar Cuentas, Contactos, Oportunidades y Pipeline." },
        icon: "🧩",
        roleImpact: { 
          pt: "Você constrói as integrações robustas (APIs REST/SOAP, Middleware) e processos assíncronos que sincronizam sistemas externos, garantindo que o Salesforce seja o coração pulsante e verdadeiro dos dados da empresa.", 
          en: "You build the robust integrations (REST/SOAP APIs, Middleware) and asynchronous processes that synchronize external systems, ensuring Salesforce is the true beating heart of company data.", 
          es: "Construyes las integraciones sólidas (API REST/SOAP, Middleware) y los procesos asíncronos que sincronizan sistemas externos, garantizando que Salesforce sea el verdadero corazón latiente de los datos de la empresa." 
        }
      },
      {
        title: { pt: "Segmentação como pilar central", en: "Segmentation as a core pillar", es: "Segmentación como pilar central" },
        description: { pt: "Segmentação única que governa carteira, campanhas e parcerias.", en: "Single segmentation governing portfolio, campaigns, and partnerships.", es: "Segmentación única que rige la cartera, las campañas y las asociaciones." },
        icon: "🎯",
        roleImpact: { 
          pt: "Você viabiliza o processamento em massa de dados. Suas otimizações em SOQL, SOSL e Bulk DML permitem que a empresa analise e segmente milhões de registros sem esbarrar em Governor Limits.", 
          en: "You enable mass data processing. Your optimizations in SOQL, SOSL, and Bulk DML allow the company to analyze and segment millions of records without hitting Governor Limits.", 
          es: "Habilitas el procesamiento masivo de datos. Tus optimizaciones en SOQL, SOSL y Bulk DML permiten que la empresa analice y segmente millones de registros sin chocar con los Governor Limits." 
        }
      },
      {
        title: { pt: "Mensuração ponta a ponta", en: "End-to-end measurement", es: "Medición de extremo a extremo" },
        description: { pt: "Rastrear toda a jornada: Lead → Opportunity → Closed Won.", en: "Track the entire journey: Lead → Opportunity → Closed Won.", es: "Rastrear todo el viaje: Lead → Oportunidad → Cerrado Ganado." },
        icon: "📊",
        roleImpact: { 
          pt: "Você preenche as lacunas analíticas. Quando relatórios padrão não dão conta, seus componentes LWC customizados e cálculos via Apex entregam a inteligência de negócios (CAC, margem, atribuição) diretamente para a diretoria.", 
          en: "You fill the analytical gaps. When standard reports fall short, your custom LWC components and calculations via Apex deliver business intelligence (CAC, margin, attribution) directly to the board.", 
          es: "Llenas las brechas analíticas. Cuando los informes estándar no son suficientes, tus componentes LWC personalizados y los cálculos a través de Apex entregan la inteligencia comercial (CAC, margen, atribución) directamente a la junta directiva." 
        }
      },
      {
        title: { pt: "GTM Integrado", en: "Integrated GTM", es: "GTM Integrado" },
        description: { pt: "Integração contínua entre Produto, Marketing, Vendas e Parcerias.", en: "Continuous integration between Product, Marketing, Sales, and Partnerships.", es: "Integración continua entre Producto, Marketing, Ventas y Asociaciones." },
        icon: "🔄",
        roleImpact: { 
          pt: "Você cria orquestrações avançadas. Utilizando Platform Events e arquiteturas event-driven, você garante que Marketing Cloud, Sales e sistemas de produto 'conversem' em tempo real, unificando a jornada do cliente.", 
          en: "You create advanced orchestrations. Using Platform Events and event-driven architectures, you ensure that Marketing Cloud, Sales, and product systems 'talk' in real-time, unifying the customer journey.", 
          es: "Creas orquestaciones avanzadas. Utilizando Eventos de Plataforma y arquitecturas orientadas a eventos, aseguras que Marketing Cloud, Ventas y sistemas de producto 'hablen' en tiempo real, unificando el viaje del cliente." 
        }
      },
      {
        title: { pt: "Escala com padronização", en: "Scale with standardization", es: "Escalar con estandarización" },
        description: { pt: "Processos consistentes através de playbooks, SLAs e automações.", en: "Consistent processes through playbooks, SLAs, and automations.", es: "Procesos consistentes a través de playbooks, SLAs y automatizaciones." },
        icon: "⚙️",
        roleImpact: { 
          pt: "Você garante que o sistema não quebre ao crescer. Ao implantar Trigger Frameworks, padrões de design (Service Layer) e pipelines robustos de CI/CD, você previne dívida técnica e permite escalar.", 
          en: "You ensure the system doesn't break as it grows. By implementing Trigger Frameworks, design patterns (Service Layer), and robust CI/CD pipelines, you prevent technical debt and allow scaling.", 
          es: "Garantizas que el sistema no se rompa a medida que crece. Al implementar Marcos de Disparadores, patrones de diseño (Capa de Servicio) y canales CI/CD robustos, previenes la deuda técnica y permites escalar." 
        }
      }
    ]
  },
  evolution: {
    intro: {
      pt: "A evolução do Desenvolvedor Salesforce é estruturada em cinco estágios de maturidade, guiando o profissional desde seus primeiros códigos até se tornar uma referência técnica na engenharia da plataforma:",
      en: "The evolution of the Salesforce Developer is structured in five stages of maturity, guiding the professional from their first codes to becoming a technical reference in platform engineering:",
      es: "La evolución del Desarrollador Salesforce está estructurada en cinco etapas de madurez, guiando al profesional desde sus primeros códigos hasta convertirse en una referencia técnica en la ingeniería de la plataforma:"
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
        mindset: { pt: "Executar tarefas e entregar código no CRM.", en: "Execute tasks and deliver code in CRM.", es: "Ejecutar tareas y entregar código en CRM." },
        focus: {
          pt: [
            "Dominar sintaxe Apex básica e SOQL",
            "Aprender a escrever testes unitários (>=75%)",
            "Modificar componentes LWC simples"
          ],
          en: [
            "Master basic Apex syntax and SOQL",
            "Learn to write unit tests (>=75%)",
            "Modify simple LWC components"
          ],
          es: [
            "Dominar la sintaxis básica de Apex y SOQL",
            "Aprender a escribir pruebas unitarias (>=75%)",
            "Modificar componentes LWC simples"
          ]
        }
      },
      {
        level: { pt: "Nível Pleno", en: "Mid-level", es: "Nivel Pleno (Medio)" },
        mindset: { pt: "Estruturar código e conectar sistemas com eficiência.", en: "Structure code and connect systems efficiently.", es: "Estructurar código y conectar sistemas de manera eficiente." },
        focus: {
          pt: [
            "Desenvolver integrações (Callouts/APIs) consistentes",
            "Otimizar processamento e respeitar Governor Limits",
            "Aplicar design-system com componentes LWC reativos"
          ],
          en: [
            "Develop consistent integrations (Callouts/APIs)",
            "Optimize processing and respect Governor Limits",
            "Apply design-system with reactive LWC components"
          ],
          es: [
            "Desarrollar integraciones consistentes (Callouts/API)",
            "Optimizar el procesamiento y respetar los Límites del Gobernador",
            "Aplicar sistema de diseño con componentes LWC reactivos"
          ]
        }
      },
      {
        level: { pt: "Nível Sênior", en: "Senior Level", es: "Nivel Senior" },
        mindset: { pt: "Usar a tecnologia como viabilizador da estratégia do negócio.", en: "Use technology as an enabler of business strategy.", es: "Utilizar la tecnología como facilitador de la estrategia de negocio." },
        focus: {
          pt: [
            "Arquitetar soluções complexas (Event-driven, Async processing)",
            "Padronizar desenvolvimento (Frameworks, Code review, CI/CD)",
            "Garantir alta performance e escalabilidade de UI/Backend"
          ],
          en: [
            "Architect complex solutions (Event-driven, Async processing)",
            "Standardize development (Frameworks, Code review, CI/CD)",
            "Ensure high performance and scalability of UI/Backend"
          ],
          es: [
            "Diseñar soluciones complejas (Event-driven, Procesamiento Asíncrono)",
            "Estandarizar el desarrollo (Frameworks, Code review, CI/CD)",
            "Asegurar alto rendimiento y escalabilidad de la UI/Backend"
          ]
        }
      },
      {
        level: { pt: "Nível Arquiteto / Estratégico", en: "Architect / Strategic Level", es: "Nivel Arquitecto / Estratégico" },
        mindset: { pt: "A engenharia como motor de escala corporativa.", en: "Engineering as an engine of corporate scale.", es: "La ingeniería como motor de escala corporativa." },
        focus: {
          pt: [
            "Definir plataformas DevOps enterprise e padrões arquiteturais globais",
            "Integração end-to-end com alta disponibilidade em ecossistema complexo",
            "Alinhar capacidades técnicas diretamente com metas de crescimento de receita"
          ],
          en: [
            "Define enterprise DevOps platforms and global architectural standards",
            "End-to-end integration with high availability in a complex ecosystem",
            "Align technical capabilities directly with revenue growth goals"
          ],
          es: [
            "Definir plataformas DevOps empresariales y estándares arquitectónicos globales",
            "Integración integral con alta disponibilidad en un ecosistema complejo",
            "Alinear las capacidades técnicas directamente con los objetivos de crecimiento de ingresos"
          ]
        }
      }
    ]
  }
};
