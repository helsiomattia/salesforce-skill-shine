import type { GuideItem } from "./types";

export const foundationsGuides: GuideItem[] = [
  {
    id: "sf-architecture",
    category: "foundations",
    title: {
      pt: "Arquitetura Multi-Tenant & Metadados",
      en: "Multi-Tenant & Metadata Architecture",
      es: "Arquitectura Multi-Tenant y Metadatos"
    },
    subtitle: {
      pt: "Entendendo os Fundamentos da Plataforma Salesforce",
      en: "Understanding the Core Foundations of the Salesforce Platform",
      es: "Comprensión de los Fundamentos de la Plataforma Salesforce"
    },
    description: {
      pt: "A infraestrutura básica do Salesforce assenta sobre multi-tenancy (recursos compartilhados com segurança lógica) e uma arquitetura orientada a metadados (onde definições de tabelas, layouts e fluxos são armazenados como dados de configuração).",
      en: "Salesforce's base infrastructure rests on multi-tenancy (shared hardware resources with secure logical isolation) and a metadata-driven architecture (definitions of tables, pages, and workflows are stored as database configurations).",
      es: "La infraestructura base de Salesforce se basa en multi-tenancy (recursos compartidos con aislamiento lógico seguro) y metadados (definiciones de tablas, páginas y flujos almacenados como configuraciones)."
    },
    iconName: "BookOpen",
    tags: {
      pt: ["Arquitetura", "Conceito Core", "Nuvem"],
      en: ["Architecture", "Core Concept", "Cloud"],
      es: ["Arquitectura", "Concepto Core", "Nube"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Multi-Tenancy",
          en: "Multi-Tenancy",
          es: "Multi-Tenancy"
        },
        description: {
          pt: "Múltiplas organizações de clientes compartilham o mesmo banco de dados físico e servidores de aplicação. O isolamento lógico garante a segurança de que nenhuma organização veja os dados de outra.",
          en: "Multiple customer organizations share the same physical database instances and application servers, using secure logical partitioning to guarantee data privacy.",
          es: "Múltiples organizaciones comparten la misma base de datos física. El aislamiento lógico garantiza la seguridad de que nadie vea los datos de otros."
        }
      },
      {
        title: {
          pt: "Modelo Baseado em Metadados",
          en: "Metadata-Driven Model",
          es: "Modelo Basado en Metadatos"
        },
        description: {
          pt: "Quando você cria um campo personalizado, ele não cria uma coluna física numa tabela. Em vez disso, gera uma linha em uma tabela de metadados padrão do Salesforce. O motor do Salesforce compila essas definições dinamicamente.",
          en: "When you create a custom field, it generates a row in Salesforce's standard metadata tables instead of adding a physical column to a database, allowing dynamic rendering of layouts and code compilation.",
          es: "Crear un campo personalizado no añade una columna física a la base de datos, sino un registro en una tabla de metadados del sistema que el compilador lee dinámicamente."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Compreenda que a plataforma é limitada por Governor Limits exatamente por causa da arquitetura compartilhada.",
        "Configure customizações de forma declarativa (metadados) antes de apelar para programação customizada."
      ],
      en: [
        "Understand that shared infrastructure is the reason behind strict Governor Limits.",
        "Maximize declarative customizations (metadata) before writing custom code."
      ],
      es: [
        "Comprenda que la plataforma está limitada por Governor Limits debido a la arquitectura compartida.",
        "Prefiera configuraciones declarativas (metadatos) antes de escribir código personalizado."
      ]
    },
    resources: [
      {
        title: {
          pt: "Visão Geral da Arquitetura do Salesforce",
          en: "Salesforce Architecture Overview on Trailhead",
          es: "Descripción general de la arquitectura en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/starting_force_com",
        type: "trailhead"
      }
    ]
  },
  {
    id: "sf-data-model",
    category: "foundations",
    title: {
      pt: "Modelo de Dados: Objetos e Relacionamentos",
      en: "Data Model: Objects and Relationships",
      es: "Modelo de Datos: Objetos y Relaciones"
    },
    subtitle: {
      pt: "Standard vs Custom & Lookup vs Master-Detail",
      en: "Standard vs Custom & Lookup vs Master-Detail",
      es: "Standard vs Custom y Lookup vs Master-Detail"
    },
    description: {
      pt: "Entenda a base de dados relacional do Salesforce. Objetos padrão e personalizados são estruturados através de campos e conectados por relacionamentos Lookup, Master-Detail ou Muitos-para-Muitos (Junction Object).",
      en: "Understand the core relational database in Salesforce. Standard and custom objects are structured through fields and connected via Lookup, Master-Detail, or Many-to-Many (Junction Object) relationships.",
      es: "Comprenda la base de datos relacional de Salesforce. Los objetos estándar y personalizados se estructuran mediante campos y se conectan mediante relaciones de Lookup, Master-Detail o de muchos a muchos (Junction Object)."
    },
    iconName: "Layers",
    tags: {
      pt: ["Modelo de Dados", "Objetos", "Relacionamentos"],
      en: ["Data Model", "Objects", "Relationships"],
      es: ["Modelo de Datos", "Objetos", "Relaciones"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Lookup vs Master-Detail",
          en: "Lookup vs Master-Detail",
          es: "Lookup vs Master-Detail"
        },
        description: {
          pt: "Master-Detail cria um vínculo forte de pai e filho (excluir o pai exclui o filho, segurança herdada). Lookup é um vínculo fraco e opcional (segurança independente).",
          en: "Master-Detail establishes strong parent-child coupling (parent deletion cascades, child inherits parent sharing). Lookup is a loose, optional link (independent sharing).",
          es: "Master-Detail crea un vínculo fuerte de padre e hijo (eliminar el padre elimina el hijo, seguridad heredada). Lookup es un vínculo débil y opcional (seguridad independiente)."
        }
      },
      {
        title: {
          pt: "Junction Object (Muitos-para-Muitos)",
          en: "Junction Object (Many-to-Many)",
          es: "Junction Object (Muchos a Muchos)"
        },
        description: {
          pt: "Um objeto personalizado com dois campos de relacionamento Master-Detail, conectando duas tabelas diferentes de forma bidirecional.",
          en: "A custom object featuring two Master-Detail relationship fields, connecting two different parent tables in a many-to-many model.",
          es: "Un objeto personalizado con dos campos de relación Master-Detail, que conecta dos tablas principales de forma muchos a muchos."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Use Master-Detail apenas se o registro filho não puder existir sem o pai e se o compartilhamento (Sharing) deve ser idêntico.",
        "Evite criar mais do que duas relações Master-Detail em um único objeto (limite da plataforma)."
      ],
      en: [
        "Use Master-Detail only if the detail record cannot exist independently and must inherit sharing permissions.",
        "Do not exceed the platform limit of two Master-Detail relationships per custom object."
      ],
      es: [
        "Use Master-Detail solo si el registro secundario no puede existir sin el principal y debe heredar su seguridad.",
        "No supere el límite de la plataforma de dos relaciones Master-Detail por objeto personalizado."
      ]
    },
    resources: [
      {
        title: {
          pt: "Modelagem de Dados no Trailhead",
          en: "Data Modeling Module on Trailhead",
          es: "Módulo de modelado de datos en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/data_modeling",
        type: "trailhead"
      }
    ]
  },
  {
    id: "sf-order-of-execution",
    category: "foundations",
    title: {
      pt: "Ciclo de Vida do Registro & Ordem de Execução",
      en: "Record Lifecycle & Order of Execution",
      es: "Ciclo de Vida del Registro y Orden de Ejecución"
    },
    subtitle: {
      pt: "O que acontece passo a passo quando você salva um registro?",
      en: "What happens step-by-step when you save a record?",
      es: "¿Qué sucede paso a paso cuando guarda un registro?"
    },
    description: {
      pt: "O fluxo de processamento executado pelo Salesforce no momento em que um registro é criado ou editado, determinando a sequência exata de triggers, validações, fluxos e commits.",
      en: "The precise sequence of steps executed by Salesforce when a record is created or updated, detailing when validation rules, triggers, flows, and duplicate rules execute.",
      es: "La secuencia precisa de pasos ejecutados por Salesforce cuando se crea o actualiza un registro, detallando cuándo se ejecutan triggers, flujos y validaciones."
    },
    iconName: "Zap",
    tags: {
      pt: ["Ciclo de Vida", "Ordem de Execução", "Transação"],
      en: ["Lifecycle", "Order of Execution", "Transaction"],
      es: ["Ciclo de Vida", "Orden de Ejecución", "Transacción"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Before vs After-Save",
          en: "Before vs After-Save",
          es: "Before vs After-Save"
        },
        description: {
          pt: "Before Triggers e Before Flows (Fast Field Updates) rodam antes do registro tocar o banco de dados. After Triggers, Workflows e After-Save Flows rodam depois e são ideais para manipular outros registros.",
          en: "Before Triggers and Before-Save Flows run before database write. After Triggers, Workflows, and After-Save Flows run after write and are ideal for mutating other records.",
          es: "Before Triggers y flujos de guardado previo se ejecutan antes del guardado en BD. After Triggers y flujos posteriores se ejecutan después, ideales para otros registros."
        }
      },
      {
        title: {
          pt: "Commit de Transação",
          en: "Transaction Commit",
          es: "Commit de Transacción"
        },
        description: {
          pt: "Toda a ordem de execução ocorre sob uma única transação de banco de dados. Qualquer falha (ex: erro de validação ou exceção Apex) reverte tudo (Rollback) por completo.",
          en: "The entire sequence runs under a single database transaction. Any unhandled exception or validation error rolls back the entire batch.",
          es: "Toda la secuencia se ejecuta bajo una transacción de base de datos. Cualquier error revierte todo (Rollback) por completo."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Compreenda a ordem de execução para evitar loops infinitos ou atualizações redundantes de registros.",
        "Lembre-se que processos executados em After-Save disparam uma nova rodada de Before/After Triggers se atualizarem o próprio registro."
      ],
      en: [
        "Understand the execution order to prevent recursion, infinite loops, or redundant record updates.",
        "Remember that updates in After-Save trigger a new round of Before/After Triggers on the same object if they update the original record."
      ],
      es: [
        "Comprenda el orden de ejecución para evitar bucles infinitos, recursividad o actualizaciones redundantes.",
        "Recuerde que las actualizaciones en After-Save vuelven a disparar Triggers si actualizan el registro original."
      ]
    },
    resources: [
      {
        title: {
          pt: "Documentação Oficial de Ordem de Execução",
          en: "Official Order of Execution Developer Guide",
          es: "Guía oficial del orden de ejecución para desarrolladores"
        },
        url: "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm",
        type: "doc"
      }
    ]
  },
  {
    id: "sf-governor-limits",
    category: "foundations",
    title: {
      pt: "Governor Limits & Recursos Compartilhados",
      en: "Governor Limits & Shared Resources",
      es: "Governor Limits y Recursos Compartidos"
    },
    subtitle: {
      pt: "Desenvolvimento Defensivo no Ambiente Multi-Tenant",
      en: "Defensive Coding in a Multi-Tenant Environment",
      es: "Desarrollo Defensivo en un Entorno Multi-Tenant"
    },
    description: {
      pt: "Entenda os limites rígidos impostos pelo motor de execução do Salesforce para garantir que uma única organização de cliente não monopolize os recursos compartilhados dos servidores.",
      en: "Understand the strict limits enforced by the Salesforce runtime engine to ensure that a single customer organization does not monopolize shared resources in the multi-tenant cloud.",
      es: "Comprenda los límites estrictos impuestos por el motor de Salesforce para garantizar que una sola organización no monopolice los recursos del servidor."
    },
    iconName: "Shield",
    tags: {
      pt: ["Limites", "Performance", "Multi-Tenant"],
      en: ["Limits", "Performance", "Multi-Tenant"],
      es: ["Límites", "Rendimiento", "Multi-Tenant"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Limites de SOQL e DML por Transação",
          en: "SOQL and DML Limits per Transaction",
          es: "Límites de SOQL y DML por Transacción"
        },
        description: {
          pt: "Em uma transação síncrona comum, você só pode fazer até 100 consultas SOQL e 150 operações DML (como Insert, Update, Delete).",
          en: "A single synchronous transaction can execute a maximum of 100 SOQL queries and 150 DML statements (Insert, Update, Delete).",
          es: "Una transacción síncrona puede ejecutar un máximo de 100 consultas SOQL y 150 operaciones DML (Insert, Update, Delete)."
        }
      },
      {
        title: {
          pt: "CPU Time Limit",
          en: "CPU Time Limit",
          es: "CPU Time Limit"
        },
        description: {
          pt: "O limite de tempo máximo que o processador dos servidores Salesforce pode gastar processando seus códigos Apex em uma única transação síncrona é 10 segundos.",
          en: "The maximum execution time that the Salesforce servers can spend executing Apex logic in a single synchronous transaction is 10 seconds.",
          es: "El tiempo máximo de ejecución de CPU que Salesforce puede dedicar a su código en una transacción síncrona es de 10 segundos."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Nunca coloque consultas SOQL, loops de inserção DML ou chamadas de API externas dentro de loops FOR.",
        "Use consultas de relacionamento (Subqueries) para buscar dados relacionados de uma só vez."
      ],
      en: [
        "Never place SOQL queries, DML operations, or external HTTP callouts inside FOR loops.",
        "Use relationship queries (subqueries) to retrieve parent/child records instead of firing separate queries."
      ],
      es: [
        "Nunca coloque consultas SOQL, operaciones DML o llamadas API dentro de bucles FOR.",
        "Utilice consultas de relaciones (subqueries) para obtener registros relacionados de una vez."
      ]
    },
    resources: [
      {
        title: {
          pt: "Guia Oficial de Governor Limits",
          en: "Official Salesforce Governor Limits Cheat Sheet",
          es: "Guía oficial de límites de Salesforce"
        },
        url: "https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apex.htm",
        type: "doc"
      }
    ]
  },
  {
    id: "sf-alm-environments",
    category: "foundations",
    title: {
      pt: "Ambientes & Ciclo de Vida ALM",
      en: "Environments & ALM Lifecycle",
      es: "Entornos y Ciclo de Vida ALM"
    },
    subtitle: {
      pt: "Sandboxes, Scratch Orgs e Gestão de Deployments",
      en: "Sandboxes, Scratch Orgs, and Deployments Management",
      es: "Sandboxes, Scratch Orgs y Gestión de Despliegues"
    },
    description: {
      pt: "Os tipos de ambientes disponíveis na plataforma Salesforce para desenvolver, testar, validar e implantar alterações de metadados de forma segura até a Produção.",
      en: "The various environment types available in Salesforce for developing, testing, staging, and deploying metadata changes securely to Production.",
      es: "Los diferentes tipos de entornos disponibles en Salesforce para desarrollar, probar, validar e implementar cambios de forma segura a Producción."
    },
    iconName: "Layers",
    tags: {
      pt: ["Ambientes", "Deploy", "Ciclo de Vida"],
      en: ["Environments", "Deploy", "ALM"],
      es: ["Entornos", "Despliegues", "ALM"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Developer vs Full Sandbox",
          en: "Developer vs Full Sandbox",
          es: "Developer vs Full Sandbox"
        },
        description: {
          pt: "Sandboxes Developer copiam apenas metadados. Sandboxes Full copiam toda a estrutura de metadados e todos os dados reais (registros) da Produção, ideais para testes integrados.",
          en: "Developer sandboxes copy metadata only. Full Sandboxes copy the entire production environment including all data records, ideal for staging.",
          es: "Las sandboxes Developer solo copian metadatos. Las sandboxes Full copian toda la producción incluyendo registros de datos, ideales para pruebas."
        }
      },
      {
        title: {
          pt: "Scratch Orgs",
          en: "Scratch Orgs",
          es: "Scratch Orgs"
        },
        description: {
          pt: "Ambientes vazios, descartáveis e temporários configurados via código fonte. São o coração do desenvolvimento baseado em código fonte e esteiras de CI/CD.",
          en: "Empty, disposable, and temporary environments configured from source code, representing the core of source-driven development and CI/CD pipelines.",
          es: "Entornos vacíos, temporales y descartables configurados desde el código fuente, ideales para desarrollo moderno y CI/CD."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Sempre teste suas configurações em uma Partial Copy ou Full Sandbox antes de mandar para a Produção.",
        "Nunca faça desenvolvimento ou modificações de lógica diretamente na Org de Produção."
      ],
      en: [
        "Always perform integration and user acceptance testing in a Partial Copy or Full Sandbox before pushing to Production.",
        "Never develop or configure business logic directly in the Production environment."
      ],
      es: [
        "Realice siempre pruebas de integración en una Sandbox Partial o Full antes de desplegar a Producción.",
        "Nunca desarrolle ni configure lógica de negocio directamente en el entorno de Producción."
      ]
    },
    resources: [
      {
        title: {
          pt: "Módulo ALM e Ciclo de Vida de Desenvolvimento",
          en: "ALM and Development Lifecycle Module on Trailhead",
          es: "Módulo de ciclo de vida de desarrollo y ALM en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/sfdx_dev_model",
        type: "trailhead"
      }
    ]
  },

  // --- ADMIN ---
];
