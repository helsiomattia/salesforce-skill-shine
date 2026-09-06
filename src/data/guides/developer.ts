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
    id: "react",
    category: "dev",
    title: {
      pt: "React",
      en: "React",
      es: "React"
    },
    subtitle: {
      pt: "Biblioteca Front-end para Interfaces Modernas",
      en: "Front-end Library for Modern Interfaces",
      es: "Biblioteca Front-end para Interfaces Modernas"
    },
    description: {
      pt: "Biblioteca JavaScript usada para construir interfaces reativas, componentizadas e escaláveis. Ajuda desenvolvedores Salesforce a entender padrões modernos de UI, estado, props, eventos e integração com APIs.",
      en: "JavaScript library used to build reactive, component-based, and scalable interfaces. It helps Salesforce developers understand modern UI patterns, state, props, events, and API integration.",
      es: "Biblioteca JavaScript usada para crear interfaces reactivas, componentizadas y escalables. Ayuda a desarrolladores Salesforce a entender patrones modernos de UI, estado, props, eventos e integración con APIs."
    },
    iconName: "Layout",
    tags: {
      pt: ["React", "JavaScript", "Front-End"],
      en: ["React", "JavaScript", "Front-End"],
      es: ["React", "JavaScript", "Front-End"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Componentes e Props",
          en: "Components and Props",
          es: "Componentes y Props"
        },
        description: {
          pt: "React organiza a interface em componentes reutilizáveis. Props permitem enviar dados de um componente pai para um componente filho, criando telas mais previsíveis e fáceis de manter.",
          en: "React organizes the interface into reusable components. Props pass data from a parent component to a child component, making screens more predictable and easier to maintain.",
          es: "React organiza la interfaz en componentes reutilizables. Las props permiten enviar datos de un componente padre a un componente hijo, creando pantallas más previsibles y fáciles de mantener."
        },
        codeSnippet: `type ContactCardProps = {
  name: string;
  role: string;
};

const ContactCard = ({ name, role }: ContactCardProps) => (
  <article>
    <h3>{name}</h3>
    <p>{role}</p>
  </article>
);`,
        codeLanguage: "tsx"
      },
      {
        title: {
          pt: "Estado e Eventos",
          en: "State and Events",
          es: "Estado y Eventos"
        },
        description: {
          pt: "Com useState, a interface reage a interações do usuário. Esse conceito ajuda a entender formulários, filtros, abas, buscas e experiências dinâmicas em aplicações web.",
          en: "With useState, the interface reacts to user interactions. This concept helps explain forms, filters, tabs, searches, and dynamic experiences in web applications.",
          es: "Con useState, la interfaz reacciona a interacciones del usuario. Este concepto ayuda a entender formularios, filtros, pestañas, búsquedas y experiencias dinámicas en aplicaciones web."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Quebre a interface em componentes pequenos quando houver responsabilidade clara e reutilização real.",
        "Mantenha o estado o mais próximo possível de onde ele é usado para evitar complexidade desnecessária.",
        "Use TypeScript para deixar props, dados de API e eventos mais explícitos."
      ],
      en: [
        "Split the interface into small components when there is a clear responsibility and real reuse.",
        "Keep state as close as possible to where it is used to avoid unnecessary complexity.",
        "Use TypeScript to make props, API data, and events more explicit."
      ],
      es: [
        "Divide la interfaz en componentes pequeños cuando exista una responsabilidad clara y reutilización real.",
        "Mantén el estado lo más cerca posible de donde se usa para evitar complejidad innecesaria.",
        "Usa TypeScript para hacer más explícitos las props, datos de API y eventos."
      ]
    },
    realUseCases: {
      pt: [
        "Criar portais, dashboards e ferramentas internas conectadas a APIs do Salesforce.",
        "Entender conceitos de componentização que também ajudam no aprendizado de LWC.",
        "Construir protótipos de interfaces antes de levar a solução para a plataforma."
      ],
      en: [
        "Build portals, dashboards, and internal tools connected to Salesforce APIs.",
        "Understand componentization concepts that also support learning LWC.",
        "Create interface prototypes before bringing the solution into the platform."
      ],
      es: [
        "Crear portales, dashboards y herramientas internas conectadas a APIs de Salesforce.",
        "Entender conceptos de componentización que también ayudan al aprendizaje de LWC.",
        "Construir prototipos de interfaces antes de llevar la solución a la plataforma."
      ]
    },
    resources: [
      {
        title: {
          pt: "Documentação oficial do React",
          en: "Official React Documentation",
          es: "Documentación oficial de React"
        },
        url: "https://react.dev/learn",
        type: "doc"
      }
    ]
  },
  {
    id: "salesforce-mobile-sdk",
    category: "dev",
    title: {
      pt: "Salesforce Mobile SDK",
      en: "Salesforce Mobile SDK",
      es: "Salesforce Mobile SDK"
    },
    subtitle: {
      pt: "Apps Nativos e Multi-Framework conectados ao Salesforce",
      en: "Native and Multi-Framework Apps Connected to Salesforce",
      es: "Apps Nativas y Multi-Framework conectadas a Salesforce"
    },
    description: {
      pt: "Conjunto de ferramentas para criar aplicativos móveis conectados ao Salesforce usando abordagens nativas e multi-framework, como iOS, Android e React Native, com autenticação OAuth, acesso offline e integração com APIs da plataforma.",
      en: "Toolset for building Salesforce-connected mobile apps using native and multi-framework approaches such as iOS, Android, and React Native, with OAuth authentication, offline access, and platform API integration.",
      es: "Conjunto de herramientas para crear aplicaciones móviles conectadas a Salesforce usando enfoques nativos y multi-framework, como iOS, Android y React Native, con autenticación OAuth, acceso offline e integración con APIs de la plataforma."
    },
    iconName: "Smartphone",
    tags: {
      pt: ["Mobile SDK", "Apps Nativos", "APIs"],
      en: ["Mobile SDK", "Native Apps", "APIs"],
      es: ["Mobile SDK", "Apps Nativas", "APIs"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Abordagem multi-framework",
          en: "Multi-framework approach",
          es: "Enfoque multi-framework"
        },
        description: {
          pt: "O Mobile SDK permite escolher a tecnologia mais adequada para o contexto do produto: nativo iOS, nativo Android ou React Native. A decisão deve considerar experiência do time, necessidade de recursos do dispositivo, performance, manutenção e roadmap do app.",
          en: "Mobile SDK lets teams choose the most suitable technology for the product context: native iOS, native Android, or React Native. The decision should consider team experience, device feature needs, performance, maintenance, and app roadmap.",
          es: "Mobile SDK permite elegir la tecnología más adecuada para el contexto del producto: nativo iOS, nativo Android o React Native. La decisión debe considerar experiencia del equipo, recursos del dispositivo, rendimiento, mantenimiento y roadmap de la app."
        }
      },
      {
        title: {
          pt: "OAuth, Connected App e APIs",
          en: "OAuth, Connected App, and APIs",
          es: "OAuth, Connected App y APIs"
        },
        description: {
          pt: "Apps móveis geralmente autenticam usuários por uma Connected App e consomem dados via REST API, UI API ou endpoints customizados. A arquitetura precisa respeitar permissões, políticas de sessão, refresh token e escopo mínimo de acesso.",
          en: "Mobile apps usually authenticate users through a Connected App and consume data through REST API, UI API, or custom endpoints. The architecture must respect permissions, session policies, refresh tokens, and minimum access scope.",
          es: "Las apps móviles normalmente autentican usuarios mediante una Connected App y consumen datos por REST API, UI API o endpoints personalizados. La arquitectura debe respetar permisos, políticas de sesión, refresh token y alcance mínimo de acceso."
        },
        codeSnippet: `// Exemplo conceitual de chamada REST autenticada
fetch(instanceUrl + "/services/data/v60.0/sobjects/Account/" + accountId, {
  headers: {
    Authorization: "Bearer " + accessToken,
    "Content-Type": "application/json"
  }
});`,
        codeLanguage: "typescript"
      }
    ],
    bestPractices: {
      pt: [
        "Escolha nativo iOS/Android quando o app depender fortemente de recursos do dispositivo, performance específica ou experiência profundamente integrada ao sistema operacional.",
        "Considere React Native quando a prioridade for compartilhar código entre plataformas sem abrir mão de integração com APIs e recursos móveis.",
        "Planeje autenticação, segurança, refresh token e estratégia offline antes de começar a interface do app."
      ],
      en: [
        "Choose native iOS/Android when the app depends heavily on device features, specific performance needs, or a deeply integrated operating system experience.",
        "Consider React Native when the priority is sharing code across platforms while still integrating with APIs and mobile capabilities.",
        "Plan authentication, security, refresh tokens, and offline strategy before starting the app interface."
      ],
      es: [
        "Elige nativo iOS/Android cuando la app dependa fuertemente de recursos del dispositivo, rendimiento específico o una experiencia muy integrada al sistema operativo.",
        "Considera React Native cuando la prioridad sea compartir código entre plataformas sin perder integración con APIs y recursos móviles.",
        "Planifica autenticación, seguridad, refresh token y estrategia offline antes de empezar la interfaz de la app."
      ]
    },
    realUseCases: {
      pt: [
        "Aplicativo de campo para vendedores, técnicos ou equipes externas com acesso a contas, contatos, oportunidades, cases e checklists.",
        "Experiência móvel customizada quando o app Salesforce padrão não atende regras específicas de UX, offline ou dispositivo.",
        "App B2B ou portal mobile que consome dados do Salesforce por APIs mantendo governança de identidade e segurança."
      ],
      en: [
        "Field app for sales reps, technicians, or external teams accessing accounts, contacts, opportunities, cases, and checklists.",
        "Custom mobile experience when the standard Salesforce app does not meet specific UX, offline, or device requirements.",
        "B2B app or mobile portal that consumes Salesforce data through APIs while keeping identity and security governance."
      ],
      es: [
        "Aplicación de campo para vendedores, técnicos o equipos externos con acceso a cuentas, contactos, oportunidades, casos y checklists.",
        "Experiencia móvil personalizada cuando la app estándar de Salesforce no atiende requisitos específicos de UX, offline o dispositivo.",
        "App B2B o portal móvil que consume datos de Salesforce por APIs manteniendo gobernanza de identidad y seguridad."
      ]
    },
    resources: [
      {
        title: {
          pt: "Documentação oficial do Salesforce Mobile SDK",
          en: "Official Salesforce Mobile SDK Documentation",
          es: "Documentación oficial de Salesforce Mobile SDK"
        },
        url: "https://developer.salesforce.com/docs/platform/mobile-sdk/overview",
        type: "doc"
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
