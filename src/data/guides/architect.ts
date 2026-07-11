import type { GuideItem } from "./types";

export const architectGuides: GuideItem[] = [
  {
    id: "enterprise-integration",
    category: "architect",
    title: {
      pt: "Padrões de Integração Enterprise",
      en: "Enterprise Integration Patterns",
      es: "Patrones de Integración Enterprise"
    },
    subtitle: {
      pt: "Conectando o Salesforce a Sistemas de Terceiros de Forma Eficiente",
      en: "Connecting Salesforce to Third-Party Systems Efficiently",
      es: "Conexión Eficiente de Salesforce con Sistemas Externos"
    },
    description: {
      pt: "Padrões arquitetônicos padrão recomendados para integrar o Salesforce com ERPs, barramentos de dados (ESB) ou microsserviços. Inclui padrões síncronos e assíncronos orientados a eventos.",
      en: "Architectural design patterns recommended for integrating Salesforce with external ERPs, ESBs, or microservices, supporting synchronous and event-driven patterns.",
      es: "Patrones de diseño de arquitectura recomendados para integrar Salesforce con ERPs externos, ESBs o microservicios."
    },
    iconName: "Compass",
    tags: {
      pt: ["Arquitetura", "Integração", "Enterprise"],
      en: ["Architecture", "Integration", "Enterprise"],
      es: ["Arquitectura", "Integración", "Enterprise"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Request & Reply (Síncrono)",
          en: "Request & Reply (Synchronous)",
          es: "Request & Reply (Síncrono)"
        },
        description: {
          pt: "O Salesforce chama uma API externa e aguarda a resposta imediata. Útil para verificar status de crédito ou estoques em tempo real. Implementado via Apex Callout.",
          en: "Salesforce makes an external API callout and blocks/waits for the response. Best for real-time validation or quick synchronous status checks.",
          es: "Salesforce llama a una API externa y espera una respuesta inmediata. Útil para consultas de inventario o crédito en tiempo real."
        }
      },
      {
        title: {
          pt: "Fire & Forget (Assíncrono / Event-Driven)",
          en: "Fire & Forget (Event-Driven)",
          es: "Fire & Forget (Event-Driven)"
        },
        description: {
          pt: "O Salesforce dispara uma ação ou evento e continua seu processamento sem esperar a finalização do receptor. Implementado nativamente usando Platform Events ou mensagens de saída (Outbound Messages).",
          en: "Salesforce triggers an action or publishes an event and continues execution without waiting for the response. Implemented via Platform Events or Outbound Messages.",
          es: "Salesforce emite un evento y continúa procesando sin esperar la respuesta del receptor. Implementado con Platform Events u Outbound Messages."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Prefira integrações assíncronas (Fire & Forget) para evitar travar a interface de usuário do Salesforce com tempos de resposta longos de APIs de terceiros.",
        "Implemente mecanismos adequados de repetição (Retry Mechanism) e filas de erro (Dead-letter Queue) para lidar com quedas de conectividade."
      ],
      en: [
        "Prefer asynchronous patterns (Fire & Forget) to prevent blocking the UI thread on slow external API responses.",
        "Design robust retry policies and error queues to handle API downtime gracefully."
      ],
      es: [
        "Prefiera integraciones asíncronas para evitar bloquear la interfaz de usuario con demoras de APIs externas.",
        "Implemente mecanismos de reintento y colas de errores para manejar caídas de red."
      ]
    },
    resources: [
      {
        title: {
          pt: "Guia Oficial de Padrões de Integração",
          en: "Official Integration Patterns and Practices Guide",
          es: "Guía oficial de patrones de integración"
        },
        url: "https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integration_patterns_intro.htm",
        type: "doc"
      }
    ]
  },
  {
    id: "large-data-volumes",
    category: "architect",
    title: {
      pt: "Grandes Volumes de Dados (LDV)",
      en: "Large Data Volumes (LDV)",
      es: "Grandes Volúmenes de Datos (LDV)"
    },
    subtitle: {
      pt: "Performance e Otimização com Milhões de Registros",
      en: "Performance and Query Optimization with Millions of Records",
      es: "Rendimiento y Optimización con Millones de Registros"
    },
    description: {
      pt: "Estratégias avançadas de arquitetura para projetar, importar, pesquisar e excluir dados quando o volume de objetos ultrapassa a casa de milhões de registros, de forma a manter o sistema ágil.",
      en: "Advanced architectural strategies to load, query, search, and delete records when single object volume exceeds millions of rows without causing performance degradation.",
      es: "Estratégias avanzadas de diseño de datos para consultar, buscar y cargar datos cuando las tablas superan millones de registros."
    },
    iconName: "Shield",
    tags: {
      pt: ["Arquitetura", "Performance", "LDV"],
      en: ["Architecture", "Performance", "LDV"],
      es: ["Arquitectura", "Rendimiento", "LDV"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Campos Indexados & Query Optimizer",
          en: "Indexed Fields & Query Optimizer",
          es: "Campos Indexados y Query Optimizer"
        },
        description: {
          pt: "O otimizador de consultas do Salesforce decide se vai varrer a tabela inteira ou usar um índice. Campos padrão (Id, Name, OwnerId) e campos marcados como External ID ou Unique são indexados por padrão.",
          en: "Salesforce Query Optimizer determines whether a query uses table scans or indexes. Primary keys, foreign keys, and unique/external ID fields are automatically indexed.",
          es: "El Query Optimizer de Salesforce decide si escanear la tabla entera o usar un índice. Campos como IDs, External IDs o únicos son indexados por defecto."
        },
        codeSnippet: `// Consulta OTIMIZADA usando índice de ID Externo
SELECT Id, Name FROM Account WHERE Legacy_Code__c = '12345'

// Consulta NÃO-OTIMIZADA (pode falhar com LDV se usar curinga no início)
SELECT Id, Name FROM Account WHERE Description LIKE '%Importante%'`,
        codeLanguage: "sql"
      },
      {
        title: {
          pt: "Compartilhamento com Grandes Volumes",
          en: "Sharing Calculation with LDV",
          es: "Cálculos de Compartido con LDV"
        },
        description: {
          pt: "Com volumes grandes, qualquer alteração na hierarquia de papéis ou regras de compartilhamento exige recálculo em massa, gerando travamentos (Row Locks). Deve-se evitar atribuir muitos registros a um único usuário 'hub'.",
          en: "Bulk changes in role hierarchies or sharing rules trigger massive background recalculations, causing row lock issues. Avoid ownership skew (one user owning >10k records).",
          es: "Cambios en reglas de uso compartido con grandes volúmenes exigen recálculos en masa. Evite la acumulación de propiedad (más de 10k registros del mismo dueño)."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Evite o uso de consultas que contenham condições negativas (diferente de, NOT EQUAL) ou caracteres coringa à esquerda, pois desabilitam o uso de índices.",
        "Implemente estratégias de arquivamento de dados históricos usando Big Objects ou soluções externas (como Data Lakes) para manter o banco de dados operacional limpo."
      ],
      en: [
        "Avoid using negative operators (e.g., !=, NOT LIKE) or leading wildcards as they disable index usage.",
        "Establish historical archiving strategies using Big Objects or external database lakes to keep core tables thin."
      ],
      es: [
        "Evite operadores negativos (!=, NOT IN) o comodines al inicio de búsquedas ya que inhabilitan los índices.",
        "Establezca estrategias de archivado histórico usando Big Objects para mantener la base de datos limpia."
      ]
    },
    resources: [
      {
        title: {
          pt: "Melhores Práticas de Query e Pesquisa com LDV",
          en: "Designing Query and Search for Performance with LDV",
          es: "Diseño de consultas de alto rendimiento con LDV"
        },
        url: "https://developer.salesforce.com/docs/atlas.en-us.ldv_architectural_guide.meta/ldv_architectural_guide/ldv_intro.htm",
        type: "doc"
      }
    ]
  },
  {
    id: "identity-access-management",
    category: "architect",
    title: {
      pt: "Gestão de Identidade e Acesso (IAM)",
      en: "Identity and Access Management (IAM)",
      es: "Gestión de Identidad y Acceso (IAM)"
    },
    subtitle: {
      pt: "SSO, OAuth e Segurança de Camada de Autenticação",
      en: "SSO, OAuth, and Authentication Layer Security",
      es: "SSO, OAuth y Seguridad en la Capa de Autenticación"
    },
    description: {
      pt: "Padrões de arquitetura de segurança para gerenciar quem pode acessar a plataforma, utilizando fluxos OAuth 2.0, SAML para Single Sign-On (SSO) e OpenID Connect.",
      en: "Security architecture patterns to manage access to the platform, utilizing OAuth 2.0 flows, SAML for Single Sign-On (SSO), and OpenID Connect.",
      es: "Patrones de arquitectura de seguridad para gestionar el acceso, utilizando flujos OAuth 2.0, SAML para Single Sign-On (SSO) y OpenID Connect."
    },
    iconName: "Key",
    tags: {
      pt: ["Segurança", "IAM", "SSO"],
      en: ["Security", "IAM", "SSO"],
      es: ["Seguridad", "IAM", "SSO"]
    },
    keyConcepts: [
      {
        title: {
          pt: "SAML e Single Sign-On (SSO)",
          en: "SAML and Single Sign-On (SSO)",
          es: "SAML y Single Sign-On (SSO)"
        },
        description: {
          pt: "O Salesforce pode atuar como Identity Provider (IdP) ou Service Provider (SP), permitindo que os usuários façam login usando as credenciais corporativas (ex: Active Directory).",
          en: "Salesforce can act as an Identity Provider (IdP) or Service Provider (SP), allowing users to log in using their corporate credentials (e.g., Active Directory).",
          es: "Salesforce puede actuar como Identity Provider (IdP) o Service Provider (SP), permitiendo a los usuarios iniciar sesión con credenciales corporativas."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Implemente My Domain para garantir que o processo de autenticação SSO funcione corretamente.",
        "Use fluxos OAuth 2.0 adequados (ex: JWT Bearer Flow para integrações de servidor para servidor) em vez de compartilhar senhas."
      ],
      en: [
        "Implement My Domain to ensure that the SSO authentication process functions correctly.",
        "Use appropriate OAuth 2.0 flows (e.g., JWT Bearer Flow for server-to-server integration) instead of sharing passwords."
      ],
      es: [
        "Implemente My Domain para garantizar que el proceso de autenticación SSO funcione correctamente.",
        "Utilice los flujos de OAuth 2.0 adecuados en lugar de compartir contraseñas."
      ]
    },
    resources: [
      {
        title: {
          pt: "Gestão de Identidade no Trailhead",
          en: "Identity Management on Trailhead",
          es: "Gestión de Identidad en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/identity_login",
        type: "trailhead"
      }
    ]
  },
  {
    id: "data-modeling-architecture",
    category: "architect",
    title: {
      pt: "Modelagem de Dados Avançada",
      en: "Advanced Data Modeling",
      es: "Modelado de Datos Avanzado"
    },
    subtitle: {
      pt: "Arquitetura Escalável de Banco de Dados",
      en: "Scalable Database Architecture",
      es: "Arquitectura de Base de Datos Escalable"
    },
    description: {
      pt: "Decisões de design para relacionamentos complexos, desnormalização de dados para performance, e uso de objetos de Big Data (Big Objects).",
      en: "Design decisions for complex relationships, data denormalization for performance, and the use of Big Objects.",
      es: "Decisiones de diseño para relaciones complejas, desnormalización de datos para rendimiento y uso de Big Objects."
    },
    iconName: "Database",
    tags: {
      pt: ["Modelagem", "Arquitetura", "Banco de Dados"],
      en: ["Modeling", "Architecture", "Database"],
      es: ["Modelado", "Arquitectura", "Base de Datos"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Polimorfismo em Relacionamentos",
          en: "Polymorphic Relationships",
          es: "Relaciones Polimórficas"
        },
        description: {
          pt: "Campos de relacionamento que podem apontar para múltiplos tipos de objetos. Exemplo: o campo 'WhatId' nas Tarefas pode apontar para uma Conta, Oportunidade ou Caso.",
          en: "Relationship fields that can point to multiple types of objects. Example: the 'WhatId' field on Tasks can point to an Account, Opportunity, or Case.",
          es: "Campos de relación que pueden apuntar a múltiples tipos de objetos. Ejemplo: el campo 'WhatId' en Tareas."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Evite hierarquias de objetos muito profundas para reduzir problemas com travamento de linha (Row Lock) e complexidade de consulta.",
        "Planeje a volumetria de dados com anos de antecedência antes de escolher entre Lookup e Master-Detail."
      ],
      en: [
        "Avoid overly deep object hierarchies to reduce row lock issues and query complexity.",
        "Plan for data volume years in advance before deciding between Lookup and Master-Detail relationships."
      ],
      es: [
        "Evite jerarquías de objetos muy profundas para reducir problemas de bloqueo de filas (Row Lock) y complejidad de consultas.",
        "Planifique el volumen de datos con anticipación antes de elegir entre Lookup y Master-Detail."
      ]
    },
    resources: [
      {
        title: {
          pt: "Arquitetura de Dados no Trailhead",
          en: "Data Architecture on Trailhead",
          es: "Arquitectura de Datos en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/data_architecture",
        type: "trailhead"
      }
    ]
  },
  {
    id: "alm-architecture",
    category: "architect",
    title: {
      pt: "Estratégia de ALM & DevOps",
      en: "ALM & DevOps Strategy",
      es: "Estrategia de ALM y DevOps"
    },
    subtitle: {
      pt: "Integração e Entrega Contínua (CI/CD) em Escala",
      en: "Continuous Integration and Continuous Delivery (CI/CD) at Scale",
      es: "Integración y Entrega Continua (CI/CD) a Escala"
    },
    description: {
      pt: "Como arquitetar o ciclo de vida da aplicação em organizações grandes, implementando estratégias de ramificação (branching), pacotes bloqueados (Unlocked Packages) e pipelines de CI/CD.",
      en: "How to architect the application lifecycle in large organizations, implementing branching strategies, Unlocked Packages, and CI/CD pipelines.",
      es: "Cómo diseñar el ciclo de vida de la aplicación en grandes organizaciones, implementando estrategias de ramas, Unlocked Packages y pipelines de CI/CD."
    },
    iconName: "GitBranch",
    tags: {
      pt: ["ALM", "DevOps", "CI/CD"],
      en: ["ALM", "DevOps", "CI/CD"],
      es: ["ALM", "DevOps", "CI/CD"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Desenvolvimento Baseado em Pacotes (Package-based)",
          en: "Package-based Development",
          es: "Desarrollo Basado en Paquetes"
        },
        description: {
          pt: "Organizar metadados não como uma única base de código monolítica (Org-based), mas como componentes independentes (Unlocked Packages) que têm seu próprio ciclo de vida e versionamento.",
          en: "Organizing metadata not as a single monolithic codebase (Org-based), but as independent components (Unlocked Packages) with their own lifecycles.",
          es: "Organizar metadatos como componentes independientes (Unlocked Packages) con su propio ciclo de vida, en lugar de una base monolítica."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Desacople lógicas dependentes antes de empacotar para evitar dependências circulares (Spaghetti Code).",
        "Automatize totalmente testes, linting de código e escaneamento de segurança na pipeline."
      ],
      en: [
        "Decouple dependent logic before packaging to avoid circular dependencies (Spaghetti Code).",
        "Fully automate testing, code linting, and security scanning within the CI/CD pipeline."
      ],
      es: [
        "Desacople las lógicas dependientes antes de empaquetar para evitar dependencias circulares.",
        "Automatice por completo las pruebas y el escaneo de seguridad en el pipeline."
      ]
    },
    resources: [
      {
        title: {
          pt: "Trilha de DevOps e ALM Avançado",
          en: "Advanced ALM and DevOps Trail",
          es: "Ruta avanzada de DevOps y ALM"
        },
        url: "https://trailhead.salesforce.com/content/learn/trails/sfdx_get_started",
        type: "trailhead"
      }
    ]
  },

  // --- TOOLS ---
];
