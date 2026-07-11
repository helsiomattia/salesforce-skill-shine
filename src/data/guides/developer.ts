import type { GuideItem } from "./types";

export const developerGuides: GuideItem[] = [
  {
    id: "apex-dev",
    category: "dev",
    title: {
      pt: "Apex (Código & Backend)",
      en: "Apex (Backend Code)",
      es: "Apex (Código y Backend)"
    },
    subtitle: {
      pt: "Desenvolvimento Back-end e Lógica de Negócio Customizada",
      en: "Back-end Development and Custom Business Logic",
      es: "Desarrollo Back-end and Lógica de Negocio Personalizada"
    },
    description: {
      pt: "Linguagem orientada a objetos executada em servidores Salesforce. Permite criar gatilhos (Triggers), APIs integradas e processos assíncronos.",
      en: "Object-oriented language executed on Salesforce servers. Used for building Triggers, Custom REST APIs, and asynchronous processing.",
      es: "Lenguaje orientado a objetos ejecutado en los servidores de Salesforce. Permite crear Triggers, APIs integradas y procesos asíncronos."
    },
    iconName: "Code2",
    tags: {
      pt: ["Apex", "Programação", "Avançado"],
      en: ["Apex", "Coding", "Advanced"],
      es: ["Apex", "Programación", "Avanzado"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Bulkificação de Triggers",
          en: "Trigger Bulkification",
          es: "Bulkificación de Triggers"
        },
        description: {
          pt: "Escrever código preparado para lidar com múltiplos registros simultaneamente (lotes de até 200 registros de uma vez), evitando SOQL e DML dentro de loops.",
          en: "Structuring Apex code to handle batches of up to 200 records at once, ensuring queries (SOQL) and DML are not inside loops.",
          es: "Escribir código preparado para procesar lotes de hasta 200 registros a la vez, evitando SOQL y DML dentro de bucles."
        },
        codeSnippet: `// GOOD PRACTICE (Bulkified query)
Set<Id> accountIds = new Set<Id>();
for (Account acc : Trigger.new) {
    accountIds.add(acc.Id);
}
List<Contact> contacts = [SELECT Id, AccountId FROM Contact WHERE AccountId IN :accountIds];`,
        codeLanguage: "apex"
      }
    ],
    bestPractices: {
      pt: [
        "Use um framework de Trigger Handler para manter a lógica de negócios fora do arquivo da Trigger.",
        "Nunca faça consultas SOQL ou comandos DML dentro de estruturas de repetição (Loops)."
      ],
      en: [
        "Implement a Trigger Handler pattern to keep Triggers logic-less and easy to maintain.",
        "Never perform SOQL queries or DML statements inside loops."
      ],
      es: [
        "Utilice un patrón de Trigger Handler para mantener los Triggers libres de lógica compleja.",
        "Nunca realice consultas SOQL ni declaraciones DML dentro de bucles."
      ]
    },
    resources: [
      {
        title: {
          pt: "Trilha Básica de Apex no Trailhead",
          en: "Apex Basics & Database Module on Trailhead",
          es: "Módulo básico de Apex y bases de datos en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/apex_database",
        type: "trailhead"
      }
    ]
  },
  {
    id: "lwc-dev",
    category: "dev",
    title: {
      pt: "LWC (Componentes Web)",
      en: "LWC (Web Components)",
      es: "LWC (Componentes Web)"
    },
    subtitle: {
      pt: "Desenvolvimento Front-end Moderno na Plataforma",
      en: "Modern Front-end Development on the Platform",
      es: "Desarrollo Front-end Moderno en la Plataforma"
    },
    description: {
      pt: "Framework leve construído sobre padrões modernos do W3C para criar interfaces de usuário dinâmicas e de altíssima performance no Salesforce.",
      en: "Lightweight UI framework built on modern Web Components standards for building performant custom interfaces in Salesforce.",
      es: "Framework ligero basado en estándares modernos de la W3C para crear interfaces de usuario dinámicas y de alto rendimiento."
    },
    iconName: "Layout",
    tags: {
      pt: ["LWC", "Web Components", "Front-End"],
      en: ["LWC", "Web Components", "Front-End"],
      es: ["LWC", "Web Components", "Front-End"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Serviço de Dados do Lightning (LDS)",
          en: "Lightning Data Service (LDS)",
          es: "Servicio de Datos de Lightning (LDS)"
        },
        description: {
          pt: "Permite carregar, criar, atualizar e excluir registros sem escrever código Apex backend. Utiliza cache compartilhado e respeita a segurança do usuário de forma nativa.",
          en: "Load, create, update, and delete records without writing Apex. Uses shared caching and automatically enforces sharing rules and field-level security.",
          es: "Permite cargar, crear, actualizar y eliminar registros sin escribir Apex. Utiliza caché compartida y respeta las reglas de seguridad nativas."
        },
        codeSnippet: `// Exemplo: wire para obter registro sem Apex
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = ['Account.Name', 'Account.Industry'];

export default class AccountCard extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    account;
}`,
        codeLanguage: "javascript"
      }
    ],
    bestPractices: {
      pt: [
        "Sempre tente usar componentes prontos (Lightning Base Components) e o LDS antes de escrever código Apex.",
        "Use o decorator @wire para leitura de dados e funções imperativas de Apex para mutação."
      ],
      en: [
        "Maximize use of Lightning Base Components and LDS before fallback options to Apex backend.",
        "Use @wire for read operations and call Apex imperatively for write actions."
      ],
      es: [
        "Priorice el uso de componentes base de Lightning y LDS antes de escribir código de Apex.",
        "Use @wire para lectura de datos y Apex de forma imperativa para operaciones de guardado."
      ]
    },
    resources: [
      {
        title: {
          pt: "Introdução aos Componentes Web do Lightning",
          en: "Lightning Web Components Basics on Trailhead",
          es: "Conceptos básicos de los componentes web Lightning en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/lightning_web_components_basics",
        type: "trailhead"
      }
    ]
  },
  {
    id: "soql-sosl",
    category: "dev",
    title: {
      pt: "Consultas de Banco (SOQL & SOSL)",
      en: "Database Queries (SOQL & SOSL)",
      es: "Consultas de Base de Datos (SOQL y SOSL)"
    },
    subtitle: {
      pt: "Linguagens de Consulta Nativas do Salesforce",
      en: "Salesforce Native Query Languages",
      es: "Lenguajes de Consulta Nativos de Salesforce"
    },
    description: {
      pt: "Linguagens usadas para pesquisar e recuperar dados da organização. SOQL é focado em relacionamentos estritos, enquanto SOSL é um mecanismo de busca por texto livre.",
      en: "Languages used to search and retrieve data from your organization. SOQL is focused on strict relationships, while SOSL is a free-text search engine.",
      es: "Lenguajes utilizados para buscar y recuperar datos. SOQL se centra en relaciones estrictas, mientras que SOSL es un motor de búsqueda de texto libre."
    },
    iconName: "Search",
    tags: {
      pt: ["Banco de Dados", "SOQL", "Busca"],
      en: ["Database", "SOQL", "Search"],
      es: ["Base de Datos", "SOQL", "Búsqueda"]
    },
    keyConcepts: [
      {
        title: {
          pt: "SOQL (Salesforce Object Query Language)",
          en: "SOQL",
          es: "SOQL"
        },
        description: {
          pt: "Semelhante ao SQL, permite fazer consultas em um único objeto ou objetos relacionados de forma estruturada.",
          en: "Similar to SQL, allows querying a single object or related objects in a structured way.",
          es: "Similar a SQL, permite consultar un solo objeto u objetos relacionados de forma estructurada."
        },
        codeSnippet: `// Exemplo SOQL
List<Account> accs = [SELECT Id, Name, (SELECT Id, LastName FROM Contacts) FROM Account WHERE Industry = 'Technology'];`,
        codeLanguage: "apex"
      }
    ],
    bestPractices: {
      pt: [
        "Sempre filtre as consultas (cláusula WHERE) para evitar atingir os limites de retorno e melhorar a performance.",
        "Não execute consultas dentro de loops."
      ],
      en: [
        "Always filter queries (WHERE clause) to avoid hitting return limits and to improve performance.",
        "Do not execute queries inside loops."
      ],
      es: [
        "Filtre siempre las consultas (cláusula WHERE) para evitar alcanzar límites y mejorar el rendimiento.",
        "No ejecute consultas dentro de bucles."
      ]
    },
    resources: [
      {
        title: {
          pt: "Módulo SOQL no Trailhead",
          en: "SOQL Module on Trailhead",
          es: "Módulo SOQL en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/apex_database/apex_database_soql",
        type: "trailhead"
      }
    ]
  },
  {
    id: "async-apex",
    category: "dev",
    title: {
      pt: "Apex Assíncrono",
      en: "Asynchronous Apex",
      es: "Apex Asíncrono"
    },
    subtitle: {
      pt: "Batch, Future, Queueable e Schedulable",
      en: "Batch, Future, Queueable, and Schedulable",
      es: "Batch, Future, Queueable y Schedulable"
    },
    description: {
      pt: "Processamento executado em segundo plano quando os recursos estão disponíveis, permitindo maiores limites de governança (Governor Limits) para operações pesadas.",
      en: "Background processing executed when resources are available, allowing higher governor limits for heavy operations.",
      es: "Procesamiento en segundo plano cuando hay recursos disponibles, permitiendo límites de gobierno más altos para operaciones pesadas."
    },
    iconName: "Clock",
    tags: {
      pt: ["Assíncrono", "Batch", "Queueable"],
      en: ["Asynchronous", "Batch", "Queueable"],
      es: ["Asíncrono", "Batch", "Queueable"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Batch Apex",
          en: "Batch Apex",
          es: "Batch Apex"
        },
        description: {
          pt: "Ideal para o processamento de grandes volumes de registros (até 50 milhões). A consulta é dividida em blocos processados separadamente.",
          en: "Ideal for processing large volumes of records (up to 50 million). The query is broken down into chunks that are processed separately.",
          es: "Ideal para procesar grandes volúmenes de registros (hasta 50 millones). La consulta se divide en bloques procesados de forma independiente."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Use Queueable em vez de métodos @future em novos desenvolvimentos, devido à facilidade de monitorar e encadear execuções.",
        "Evite encadear trabalhos assíncronos excessivamente para prevenir o uso não intencional dos limites da plataforma."
      ],
      en: [
        "Use Queueable instead of @future methods for new development, due to better monitoring and job chaining support.",
        "Avoid chaining asynchronous jobs excessively to prevent unintended consumption of platform limits."
      ],
      es: [
        "Utilice Queueable en lugar de métodos @future en nuevos desarrollos, por la facilidad de monitoreo y encadenamiento.",
        "Evite encadenar trabajos asíncronos en exceso para no agotar los límites de la plataforma."
      ]
    },
    resources: [
      {
        title: {
          pt: "Trilha de Apex Assíncrono",
          en: "Asynchronous Apex Module",
          es: "Módulo de Apex Asíncrono"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/asynchronous_apex",
        type: "trailhead"
      }
    ]
  },
  {
    id: "salesforce-apis",
    category: "dev",
    title: {
      pt: "APIs do Salesforce",
      en: "Salesforce APIs",
      es: "APIs de Salesforce"
    },
    subtitle: {
      pt: "REST, SOAP, Bulk e Ferramentas de Integração",
      en: "REST, SOAP, Bulk, and Integration APIs",
      es: "REST, SOAP, Bulk y APIs de Integración"
    },
    description: {
      pt: "O Salesforce expõe automaticamente todos os dados via APIs (REST e SOAP). Também fornece APIs de manipulação de lotes (Bulk) e streaming.",
      en: "Salesforce automatically exposes all data via REST and SOAP APIs. It also provides specialized APIs for data loading (Bulk) and streaming.",
      es: "Salesforce expone automáticamente todos los datos a través de APIs REST y SOAP. También proporciona APIs para lotes (Bulk) y streaming."
    },
    iconName: "ServerCrash",
    tags: {
      pt: ["APIs", "Integração", "REST"],
      en: ["APIs", "Integration", "REST"],
      es: ["APIs", "Integración", "REST"]
    },
    keyConcepts: [
      {
        title: {
          pt: "REST API vs Bulk API",
          en: "REST API vs Bulk API",
          es: "REST API vs Bulk API"
        },
        description: {
          pt: "REST é melhor para integrações síncronas em tempo real ou volumes pequenos. Bulk API é projetada especificamente para processar milhares ou milhões de registros assincronamente de forma paralela.",
          en: "REST is best for synchronous real-time integrations and small datasets. Bulk API is optimized for processing thousands or millions of records asynchronously.",
          es: "REST es mejor para integraciones síncronas o pequeños volúmenes. Bulk API está diseñada para procesar millones de registros de forma asíncrona."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Selecione a API certa para o trabalho (ex: não use REST API padrão para carregar 50.000 registros de uma vez).",
        "Respeite os limites de chamadas diárias (API Request Limits)."
      ],
      en: [
        "Select the right API for the job (e.g., do not use the standard REST API to load 50,000 records at once).",
        "Monitor and respect your daily API Request Limits."
      ],
      es: [
        "Seleccione la API adecuada para el trabajo (ej. no use REST API para cargar 50.000 registros a la vez).",
        "Supervise y respete los límites de llamadas API diarias."
      ]
    },
    resources: [
      {
        title: {
          pt: "Fundamentos de API",
          en: "API Basics on Trailhead",
          es: "Conceptos básicos de API en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/api_basics",
        type: "trailhead"
      }
    ]
  },

  // --- ARCHITECT ---
];
