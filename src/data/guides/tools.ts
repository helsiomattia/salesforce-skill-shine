import type { GuideItem } from "./types";

export const toolsGuides: GuideItem[] = [
  {
    id: "vscode-cli",
    category: "tools",
    title: {
      pt: "VS Code & Salesforce CLI",
      en: "VS Code & Salesforce CLI",
      es: "VS Code y Salesforce CLI"
    },
    subtitle: {
      pt: "O Ambiente de Desenvolvimento Moderno do Ecossistema",
      en: "The Modern Development Environment for Salesforce",
      es: "El Entorno de Desarrollo Moderno de Salesforce"
    },
    description: {
      pt: "A combinação oficial do Visual Studio Code com as extensões de integração e a ferramenta de terminal Salesforce CLI (SFDX), permitindo versionar códigos, criar Scratch Orgs e gerenciar deploy de metadados.",
      en: "The official combination of Visual Studio Code, Salesforce Extension Pack, and Salesforce Command Line Interface (CLI) to manage local source files, test runs, and deployments.",
      es: "La combinación oficial de Visual Studio Code con el Extension Pack y la CLI de Salesforce para gestionar código local, pruebas y despliegues."
    },
    iconName: "Layout",
    tags: {
      pt: ["VS Code", "CLI", "Ferramentas"],
      en: ["VS Code", "CLI", "Tools"],
      es: ["VS Code", "CLI", "Herramientas"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Desenvolvimento Baseado em Código Fonte (Source-Tracked)",
          en: "Source-Tracked Development",
          es: "Desarrollo Basado en Código Fuente"
        },
        description: {
          pt: "Sincronização automática entre o seu repositório local e a sua sandbox ou Scratch Org. O CLI rastreia quais arquivos foram alterados localmente ou na org de desenvolvimento.",
          en: "Automatic synchronization between local directories and a Sandbox/Scratch Org. The CLI tracks differences dynamically.",
          es: "Sincronización automática entre los directorios locales y una Sandbox/Scratch Org. La CLI rastrea diferencias dinámicamente."
        },
        codeSnippet: `# Comandos clássicos do Salesforce CLI modernos:
# 1. Autorizar uma org de desenvolvimento (Web Login)
sf org login web -a minha-org

# 2. Enviar alterações locais para a Org
sf project deploy start

# 3. Trazer alterações feitas na Org para o VS Code
sf project retrieve start`,
        codeLanguage: "bash"
      }
    ],
    bestPractices: {
      pt: [
        "Sempre configure o arquivo .gitignore para evitar commitar arquivos de configuração de usuário local (.sf/ ou .sfdx/).",
        "Utilize Org Aliases curtos e informativos (ex: dev, staging, prod) para evitar rodar comandos na Org errada."
      ],
      en: [
        "Configure .gitignore correctly to avoid pushing local configuration folders (.sf/ or .sfdx/) to Git repositories.",
        "Always use memorable Org Aliases (e.g., DevOrg, Staging, Prod) to prevent accidental deployments to production."
      ],
      es: [
        "Configure .gitignore para evitar subir carpetas de configuración locales (.sf/ o .sfdx/) a repositorios Git.",
        "Utilice alias cortos y descriptivos para sus organizaciones para evitar desplegar en el entorno incorrecto."
      ]
    },
    resources: [
      {
        title: {
          pt: "Guia de Instalação e Configuração do CLI",
          en: "Salesforce CLI Setup Guide on Trailhead",
          es: "Guía de configuración de la CLI de Salesforce"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/sfdx_app_dev",
        type: "trailhead"
      }
    ]
  },
  {
    id: "postman-apis",
    category: "tools",
    title: {
      pt: "Postman & APIs Salesforce",
      en: "Postman & Salesforce APIs",
      es: "Postman y APIs Salesforce"
    },
    subtitle: {
      pt: "Explorando e Testando Integrações de Web Services",
      en: "Exploring and Testing Salesforce Web Services",
      es: "Explorando y Probando Servicios Web de Salesforce"
    },
    description: {
      pt: "Uso do Postman com a coleção oficial de APIs do Salesforce para autenticar via OAuth 2.0 e disparar requisições REST, SOAP, Bulk ou consultar registros via query REST.",
      en: "Leveraging Postman along with the official Salesforce APIs Collection to perform OAuth authentication and test REST, SOAP, and Bulk API requests.",
      es: "Uso de Postman con la colección de APIs de Salesforce para autenticar vía OAuth y realizar peticiones REST, SOAP y Bulk."
    },
    iconName: "Zap",
    tags: {
      pt: ["Postman", "APIs", "Integração"],
      en: ["Postman", "APIs", "Integration"],
      es: ["Postman", "APIs", "Integración"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Autenticação OAuth 2.0 (User-Agent Flow)",
          en: "OAuth 2.0 User-Agent Flow",
          es: "Autenticación OAuth 2.0 (User-Agent Flow)"
        },
        description: {
          pt: "Fluxo de login onde você recebe um Access Token (Session ID) e uma Instance URL do Salesforce. Essas informações devem ser incluídas no cabeçalho (Header Authorization) de todas as chamadas subsequentes.",
          en: "Authorization flow resulting in an Access Token and an Instance URL. These tokens are embedded inside the Authorization Headers of subsequent API calls.",
          es: "Flujo de login por el cual se obtiene un token de acceso (Session ID) y una URL de instancia para incluir en el header de las peticiones."
        },
        codeSnippet: `// Requisição REST GET típica para SOQL no Postman:
// Method: GET
// URL: {{_endpoint}}/services/data/v60.0/query/?q=SELECT+Id,Name+FROM+Account+LIMIT+5
// Header:
//   Authorization: Bearer {{_accessToken}}
//   Content-Type: application/json`,
        codeLanguage: "json"
      }
    ],
    bestPractices: {
      pt: [
        "Importe a coleção oficial do Salesforce (Salesforce APIs Workspace) no Postman para economizar tempo configurando endpoints de login.",
        "Use variáveis de ambiente no Postman para alternar rapidamente entre Sandboxes, Developer Orgs e Produção."
      ],
      en: [
        "Import the official Salesforce Workspace in Postman to access predefined authentication and API templates instantly.",
        "Leverage Postman Environment Variables to easily switch credentials between Sandboxes and Production Orgs."
      ],
      es: [
        "Importe la colección oficial de Salesforce en Postman para evitar configurar manualmente cada endpoint.",
        "Utilice variables de entorno en Postman para cambiar rápidamente entre entornos Sandbox y de Producción."
      ]
    },
    resources: [
      {
        title: {
          pt: "Explorando APIs com Postman Workspace",
          en: "Explore Salesforce APIs with Postman Workspace on Trailhead",
          es: "Exploración de APIs con Postman en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/postman-api-client",
        type: "trailhead"
      }
    ]
  },
  {
    id: "salesforce-inspector",
    category: "tools",
    title: {
      pt: "Salesforce Inspector",
      en: "Salesforce Inspector",
      es: "Salesforce Inspector"
    },
    subtitle: {
      pt: "A Extensão de Navegador Essencial para Desenvolvedores e Admins",
      en: "The Essential Browser Extension for Devs and Admins",
      es: "La Extensión de Navegador Esencial para Devs y Admins"
    },
    description: {
      pt: "Uma extensão de navegador (Chrome/Firefox) extremamente popular que injeta uma camada de metadados e ferramentas de inspeção de dados diretamente na interface de usuário do Salesforce.",
      en: "A highly popular browser extension (Chrome/Firefox) that injects a metadata layer and data inspection tools directly into the Salesforce UI.",
      es: "Una extensión de navegador (Chrome/Firefox) muy popular que inyecta una capa de metadatos y herramientas de inspección directamente en la interfaz de usuario."
    },
    iconName: "Search",
    tags: {
      pt: ["Extensão", "Produtividade", "SOQL"],
      en: ["Extension", "Productivity", "SOQL"],
      es: ["Extensión", "Productividad", "SOQL"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Inspeção de Dados Rápidas (Data Export / Import)",
          en: "Quick Data Inspection (Data Export / Import)",
          es: "Inspección rápida de datos (Data Export / Import)"
        },
        description: {
          pt: "Permite executar consultas SOQL rápidas, ver todos os campos de um registro (mesmo os que não estão no layout da página) e importar/exportar dados copiando e colando no Excel.",
          en: "Enables quick SOQL queries, viewing all fields of a record (even those not on the page layout), and easy copy/paste data import/export with Excel.",
          es: "Permite ejecutar consultas SOQL rápidas, ver todos los campos de un registro (incluso los que no están en el layout) e importar/exportar datos con Excel."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Use o 'Show all data' no Salesforce Inspector para ver valores de campos ocultos sem precisar alterar os layouts ou permissões.",
        "Considere usar a versão moderna 'Salesforce Inspector Reloaded' que tem atualizações mais recentes e suporte ao Lightning."
      ],
      en: [
        "Use 'Show all data' to view hidden field values without needing to alter page layouts or FLS.",
        "Consider using the modern 'Salesforce Inspector Reloaded' fork for updated features and better Lightning support."
      ],
      es: [
        "Use 'Show all data' para ver valores de campos ocultos sin alterar diseños de página.",
        "Considere usar 'Salesforce Inspector Reloaded' para funciones más recientes y mejor soporte de Lightning."
      ]
    },
    resources: [
      {
        title: {
          pt: "Extensão Salesforce Inspector Reloaded",
          en: "Salesforce Inspector Reloaded Extension",
          es: "Extensión Salesforce Inspector Reloaded"
        },
        url: "https://chrome.google.com/webstore/detail/salesforce-inspector-relo/hpijlohoelnkfibhlfjfkocbniifcngf",
        type: "article"
      }
    ]
  },
  {
    id: "workbench",
    category: "tools",
    title: {
      pt: "Workbench",
      en: "Workbench",
      es: "Workbench"
    },
    subtitle: {
      pt: "Suíte Baseada em Web para Administração e APIs",
      en: "Web-based Suite for Admin and API Testing",
      es: "Suite Web para Administración y APIs"
    },
    description: {
      pt: "Uma ferramenta baseada na web suportada pela comunidade que permite administradores e desenvolvedores interagirem com as APIs do Salesforce (REST, Bulk, Metadata) para manipulação de dados e metadados.",
      en: "A community-supported web-based tool allowing admins and developers to interact with Salesforce APIs (REST, Bulk, Metadata) for data and metadata manipulation.",
      es: "Herramienta web respaldada por la comunidad que permite interactuar con APIs de Salesforce (REST, Bulk, Metadata)."
    },
    iconName: "Wrench",
    tags: {
      pt: ["Web Tool", "APIs", "Administração"],
      en: ["Web Tool", "APIs", "Admin"],
      es: ["Herramienta Web", "APIs", "Administración"]
    },
    keyConcepts: [
      {
        title: {
          pt: "REST Explorer & Data Manipulation",
          en: "REST Explorer & Data Manipulation",
          es: "REST Explorer y Manipulación de Datos"
        },
        description: {
          pt: "Oferece uma interface visual amigável para explorar endpoints REST, rodar scripts Apex anônimos, e fazer operações rápidas de CRUD via Bulk API.",
          en: "Offers a user-friendly UI to explore REST endpoints, execute anonymous Apex scripts, and perform quick CRUD operations via Bulk API.",
          es: "Ofrece una interfaz amigable para explorar endpoints REST, ejecutar Apex anónimo y hacer operaciones CRUD rápidas."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Não confie no Workbench para operações muito pesadas ou críticas, pois é uma ferramenta de código aberto não oficialmente mantida pela Salesforce hoje.",
        "É excelente para recuperar sessões de usuário esquecidas ou debugar retornos crus (raw payloads) de API."
      ],
      en: [
        "Do not rely on Workbench for mission-critical or massive data operations, as it is an open-source tool not officially supported by Salesforce.",
        "It's excellent for quick API payload debugging or running quick anonymous blocks."
      ],
      es: [
        "No confíe en Workbench para operaciones críticas, ya que es una herramienta de código abierto no soportada oficialmente por Salesforce.",
        "Es excelente para depurar cargas útiles de API o ejecutar Apex anónimo."
      ]
    },
    resources: [
      {
        title: {
          pt: "Acessar Workbench",
          en: "Access Workbench",
          es: "Acceder a Workbench"
        },
        url: "https://workbench.developerforce.com/",
        type: "article"
      }
    ]
  },
  {
    id: "data-loader",
    category: "tools",
    title: {
      pt: "Data Loader",
      en: "Data Loader",
      es: "Data Loader"
    },
    subtitle: {
      pt: "Ferramenta de Desktop para Grandes Volumes de Dados",
      en: "Desktop Tool for Large Data Volumes",
      es: "Herramienta de Escritorio para Grandes Volúmenes de Datos"
    },
    description: {
      pt: "Aplicativo cliente para importação, exportação e deleção de dados em massa no Salesforce. Usa as APIs REST e Bulk para processar até 5 milhões de registros.",
      en: "Client application for bulk import, export, and deletion of data in Salesforce. Uses REST and Bulk APIs to process up to 5 million records.",
      es: "Aplicación cliente para importación, exportación y eliminación masiva de datos. Usa APIs REST y Bulk para procesar hasta 5 millones de registros."
    },
    iconName: "DownloadCloud",
    tags: {
      pt: ["Desktop", "Importação", "Bulk API"],
      en: ["Desktop", "Import", "Bulk API"],
      es: ["Escritorio", "Importación", "Bulk API"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Modo CLI (Command Line Interface)",
          en: "CLI Mode (Command Line Interface)",
          es: "Modo CLI (Línea de Comandos)"
        },
        description: {
          pt: "Além da interface gráfica, o Data Loader pode ser usado por linha de comando em servidores Windows/Mac para automatizar rotinas noturnas de importação/exportação com scripts.",
          en: "Besides the GUI, Data Loader can run via command line on Windows/Mac to automate nightly data import/export routines through scripts.",
          es: "Además de la interfaz gráfica, Data Loader puede usarse por línea de comandos para automatizar rutinas nocturnas de carga de datos."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Para arquivos com mais de 50 mil linhas, certifique-se de habilitar a opção 'Use Bulk API' nas configurações (Settings) do Data Loader para melhor performance.",
        "Sempre use arquivos no formato CSV codificados em UTF-8 para evitar problemas com acentuação e caracteres especiais."
      ],
      en: [
        "For files over 50k rows, ensure 'Use Bulk API' is enabled in Settings to improve processing speeds.",
        "Always use UTF-8 encoded CSV files to avoid issues with special characters."
      ],
      es: [
        "Para archivos con más de 50k líneas, habilite la opción 'Use Bulk API' en la configuración para mejor rendimiento.",
        "Use siempre archivos CSV codificados en UTF-8 para evitar problemas de caracteres especiales."
      ]
    },
    resources: [
      {
        title: {
          pt: "Guia do Data Loader no Trailhead",
          en: "Data Loader Guide on Trailhead",
          es: "Guía de Data Loader en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/projects/import-and-export-with-data-management-tools/use-data-loader",
        type: "trailhead"
      }
    ]
  },
  {
    id: "devops-center",
    category: "tools",
    title: {
      pt: "Salesforce DevOps Center",
      en: "Salesforce DevOps Center",
      es: "Salesforce DevOps Center"
    },
    subtitle: {
      pt: "CI/CD e Gestão de Pipelines Nativo na Plataforma",
      en: "Native CI/CD and Pipeline Management on the Platform",
      es: "CI/CD y Gestión de Pipelines Nativo en la Plataforma"
    },
    description: {
      pt: "Ferramenta nativa da Salesforce para gerenciar pipelines de entrega de mudanças (change management) e CI/CD diretamente dentro da plataforma, integrando com repositórios Git.",
      en: "Salesforce's native tool for managing change delivery pipelines and CI/CD directly within the platform, integrating with Git repositories.",
      es: "Herramienta nativa de Salesforce para gestionar pipelines de entrega de cambios y CI/CD directamente dentro de la plataforma, integrándose con repositorios Git."
    },
    iconName: "GitMerge",
    tags: {
      pt: ["DevOps", "CI/CD", "Pipeline"],
      en: ["DevOps", "CI/CD", "Pipeline"],
      es: ["DevOps", "CI/CD", "Pipeline"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Work Items e Pipelines",
          en: "Work Items and Pipelines",
          es: "Work Items y Pipelines"
        },
        description: {
          pt: "Work Items representam unidades de trabalho (como user stories) que agrupam metadados e são promovidos por estágios do pipeline (Dev → UAT → Produção).",
          en: "Work Items represent units of work (like user stories) that group metadata changes and are promoted through pipeline stages (Dev → UAT → Production).",
          es: "Los Work Items representan unidades de trabajo (como user stories) que agrupan metadatos y son promovidos por etapas del pipeline (Dev → UAT → Producción)."
        }
      },
      {
        title: {
          pt: "Integração com Git",
          en: "Git Integration",
          es: "Integración con Git"
        },
        description: {
          pt: "O DevOps Center sincroniza automaticamente as mudanças de metadados com um repositório Git (GitHub, GitLab, Bitbucket), garantindo rastreabilidade e controle de versão.",
          en: "DevOps Center automatically synchronizes metadata changes with a Git repository (GitHub, GitLab, Bitbucket), ensuring traceability and version control.",
          es: "DevOps Center sincroniza automáticamente los cambios de metadatos con un repositorio Git (GitHub, GitLab, Bitbucket), garantizando trazabilidad y control de versiones."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Conecte o DevOps Center a um repositório Git antes de criar os pipelines para garantir rastreabilidade completa das mudanças.",
        "Use Work Items para agrupar mudanças relacionadas e evitar conflitos de metadados entre equipes."
      ],
      en: [
        "Connect DevOps Center to a Git repository before creating pipelines to ensure complete change traceability.",
        "Use Work Items to group related changes and avoid metadata conflicts between teams."
      ],
      es: [
        "Conecte DevOps Center a un repositorio Git antes de crear los pipelines para garantizar trazabilidad completa.",
        "Use Work Items para agrupar cambios relacionados y evitar conflictos de metadatos entre equipos."
      ]
    },
    resources: [
      {
        title: {
          pt: "Conceitos Básicos do DevOps Center",
          en: "DevOps Center Basics on Trailhead",
          es: "Conceptos Básicos del DevOps Center en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-devops-center-quick-look",
        type: "trailhead"
      }
    ]
  },
  {
    id: "git-github",
    category: "tools",
    title: {
      pt: "Git & GitHub",
      en: "Git & GitHub",
      es: "Git & GitHub"
    },
    subtitle: {
      pt: "Versionamento de Código e Colaboração em Equipe",
      en: "Code Versioning and Team Collaboration",
      es: "Control de Versiones y Colaboración en Equipo"
    },
    description: {
      pt: "Git é o sistema de controle de versão distribuído padrão do mercado. GitHub é a plataforma de hospedagem de repositórios mais popular, essencial para o ecossistema de desenvolvimento Salesforce moderno.",
      en: "Git is the industry-standard distributed version control system. GitHub is the most popular repository hosting platform, essential for modern Salesforce development.",
      es: "Git es el sistema de control de versiones distribuido estándar de la industria. GitHub es la plataforma de alojamiento más popular, esencial para el ecosistema Salesforce moderno."
    },
    iconName: "GitBranch",
    tags: {
      pt: ["Git", "Versionamento", "Colaboração"],
      en: ["Git", "Versioning", "Collaboration"],
      es: ["Git", "Versionado", "Colaboración"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Branching Strategy (GitFlow)",
          en: "Branching Strategy (GitFlow)",
          es: "Estrategia de Ramas (GitFlow)"
        },
        description: {
          pt: "Estratégia de ramificação para organizar features, hotfixes e releases em branches separados, evitando conflitos e garantindo estabilidade no branch principal.",
          en: "Branching strategy for organizing features, hotfixes, and releases in separate branches, avoiding conflicts and ensuring stability in the main branch.",
          es: "Estrategia para organizar features, hotfixes y releases en ramas separadas, evitando conflictos y garantizando estabilidad en la rama principal."
        },
        codeSnippet: `# Fluxo básico de trabalho com Git e Salesforce CLI:\n# 1. Criar um branch para nova funcionalidade\ngit checkout -b feature/novo-campo-conta\n\n# 2. Puxar mudanças da Org para o repositório local\nsf project retrieve start\n\n# 3. Commitar e subir para o GitHub\ngit add .\ngit commit -m "feat: adiciona campo Segmento em Conta"\ngit push origin feature/novo-campo-conta`,
        codeLanguage: "bash"
      }
    ],
    bestPractices: {
      pt: [
        "Escreva mensagens de commit descritivas seguindo o padrão Conventional Commits (feat:, fix:, chore:).",
        "Nunca faça commit de credenciais ou tokens de acesso. Use variáveis de ambiente ou arquivos .env fora do repositório."
      ],
      en: [
        "Write descriptive commit messages following Conventional Commits (feat:, fix:, chore:).",
        "Never commit credentials or access tokens. Use environment variables or .env files outside the repository."
      ],
      es: [
        "Escriba mensajes de commit descriptivos siguiendo Conventional Commits (feat:, fix:, chore:).",
        "Nunca haga commit de credenciales. Use variables de entorno o archivos .env fuera del repositorio."
      ]
    },
    resources: [
      {
        title: {
          pt: "Controle de Versão com Git e Salesforce",
          en: "Source Control with Git and Salesforce",
          es: "Control de Versiones con Git y Salesforce"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/git-and-git-hub-basics",
        type: "trailhead"
      }
    ]
  },
  {
    id: "developer-console",
    category: "tools",
    title: {
      pt: "Developer Console",
      en: "Developer Console",
      es: "Developer Console"
    },
    subtitle: {
      pt: "IDE Nativo e Executor de Apex Anônimo",
      en: "Native IDE and Anonymous Apex Executor",
      es: "IDE Nativo y Ejecutor de Apex Anónimo"
    },
    description: {
      pt: "O ambiente de desenvolvimento integrado nativo do Salesforce, acessível diretamente pelo navegador, para escrever e depurar Apex, visualizar logs de execução e rodar queries SOQL/SOSL.",
      en: "Salesforce's built-in browser-based IDE for writing and debugging Apex, viewing execution logs, and running SOQL/SOSL queries without installing any local tools.",
      es: "El entorno de desarrollo integrado nativo de Salesforce, accesible desde el navegador, para escribir y depurar Apex, ver logs de ejecución y ejecutar consultas SOQL/SOSL."
    },
    iconName: "Terminal",
    tags: {
      pt: ["Apex", "Debug", "SOQL"],
      en: ["Apex", "Debug", "SOQL"],
      es: ["Apex", "Debug", "SOQL"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Execute Anonymous (Apex Anônimo)",
          en: "Execute Anonymous (Anonymous Apex)",
          es: "Execute Anonymous (Apex Anónimo)"
        },
        description: {
          pt: "Permite executar blocos de código Apex diretamente na Org sem salvar como classe. Essencial para scripts de manutenção, correções rápidas de dados e testes exploratórios.",
          en: "Allows running Apex code blocks directly in the Org without saving them as a class. Essential for maintenance scripts, quick data fixes, and exploratory testing.",
          es: "Permite ejecutar bloques de código Apex directamente en la Org sin guardarlos. Esencial para scripts de mantenimiento, correcciones de datos y pruebas exploratorias."
        },
        codeSnippet: `// Exemplo de Apex Anônimo para atualizar registros em massa\nList<Account> contas = [SELECT Id, Rating FROM Account WHERE Rating = null LIMIT 200];\nfor (Account c : contas) {\n    c.Rating = 'Hot';\n}\nupdate contas;\nSystem.debug('Contas atualizadas: ' + contas.size());`,
        codeLanguage: "apex"
      },
      {
        title: {
          pt: "Log Inspector & Debug Levels",
          en: "Log Inspector & Debug Levels",
          es: "Log Inspector y Niveles de Debug"
        },
        description: {
          pt: "Ferramenta de análise visual de logs que filtra e exibe categorias de log (Apex Code, Database, Workflow) com diferentes níveis de detalhe (NONE, ERROR, WARN, INFO, DEBUG, FINE).",
          en: "Visual log analysis tool that filters and displays log categories (Apex Code, Database, Workflow) at various detail levels (NONE, ERROR, WARN, INFO, DEBUG, FINE).",
          es: "Herramienta de análisis visual de logs que filtra y muestra categorías (Apex Code, Database, Workflow) con distintos niveles de detalle."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Sempre remova ou reduza o nível de debug de usuários em Produção após finalizar a depuração para não degradar a performance da Org.",
        "Use o Query Editor integrado para testar e refinar queries SOQL/SOSL antes de incorporá-las ao código."
      ],
      en: [
        "Always remove or reduce user debug levels in Production after debugging to prevent performance degradation.",
        "Use the integrated Query Editor to test and refine SOQL/SOSL queries before embedding them in code."
      ],
      es: [
        "Siempre elimine o reduzca los niveles de debug en Producción para no degradar el rendimiento.",
        "Use el Query Editor integrado para probar y refinar consultas SOQL/SOSL antes de incluirlas en el código."
      ]
    },
    resources: [
      {
        title: {
          pt: "Depuração com o Developer Console",
          en: "Debugging with the Developer Console on Trailhead",
          es: "Depuración con la Developer Console en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/developer_console",
        type: "trailhead"
      }
    ]
  },
  {
    id: "soql-sosl",
    category: "tools",
    title: {
      pt: "SOQL & SOSL",
      en: "SOQL & SOSL",
      es: "SOQL & SOSL"
    },
    subtitle: {
      pt: "Linguagens de Consulta Nativas da Plataforma Salesforce",
      en: "Salesforce Platform Native Query Languages",
      es: "Lenguajes de Consulta Nativos de la Plataforma Salesforce"
    },
    description: {
      pt: "SOQL (Salesforce Object Query Language) e SOSL (Salesforce Object Search Language) são as linguagens nativas para consultar dados e pesquisar texto na plataforma, com sintaxe semelhante ao SQL mas adaptadas para o modelo de metadados.",
      en: "SOQL (Salesforce Object Query Language) and SOSL (Salesforce Object Search Language) are the native languages for querying data and searching text on the platform, with SQL-like syntax adapted to the metadata model.",
      es: "SOQL y SOSL son los lenguajes nativos para consultar datos y buscar texto en la plataforma, con sintaxis similar a SQL pero adaptada al modelo de metadatos."
    },
    iconName: "Search",
    tags: {
      pt: ["SOQL", "SOSL", "Consultas"],
      en: ["SOQL", "SOSL", "Queries"],
      es: ["SOQL", "SOSL", "Consultas"]
    },
    keyConcepts: [
      {
        title: {
          pt: "SOQL: Consultas Estruturadas por Objeto",
          en: "SOQL: Object-Based Structured Queries",
          es: "SOQL: Consultas Estructuradas por Objeto"
        },
        description: {
          pt: "Permite consultar registros de um único objeto por vez, suportando filtros WHERE, ordenação ORDER BY, limites LIMIT e subconsultas de relacionamento pai/filho.",
          en: "Queries a single object at a time, supporting WHERE filters, ORDER BY sorting, LIMIT clauses, and parent/child relationship subqueries.",
          es: "Consulta un solo objeto a la vez, soportando filtros WHERE, ordenación ORDER BY, límites LIMIT y subconsultas de relaciones padre/hijo."
        },
        codeSnippet: `// SOQL com subconsulta de registros filhos:\nSELECT Id, Name, \n       (SELECT Id, Subject, Status FROM Cases WHERE Status = 'Open')\nFROM Account\nWHERE Industry = 'Technology'\nAND CreatedDate = THIS_YEAR\nORDER BY Name ASC\nLIMIT 100`,
        codeLanguage: "sql"
      },
      {
        title: {
          pt: "SOSL: Pesquisa de Texto em Múltiplos Objetos",
          en: "SOSL: Full-Text Search Across Multiple Objects",
          es: "SOSL: Búsqueda de Texto en Múltiples Objetos"
        },
        description: {
          pt: "Realiza uma busca textual em múltiplos objetos simultaneamente usando o índice de pesquisa do Salesforce, ideal quando você não sabe em qual objeto o dado está.",
          en: "Performs a text search across multiple objects simultaneously using Salesforce's search index, ideal when you don't know which object holds the data.",
          es: "Realiza búsquedas de texto en múltiples objetos simultáneamente usando el índice de búsqueda, ideal cuando no sabes en qué objeto está el dato."
        },
        codeSnippet: `// SOSL buscando 'Acme' em Contas, Contatos e Leads:\nFIND {Acme*} IN ALL FIELDS\nRETURNING\n  Account(Id, Name),\n  Contact(Id, FirstName, LastName),\n  Lead(Id, Company)`,
        codeLanguage: "sql"
      }
    ],
    bestPractices: {
      pt: [
        "Prefira SOQL quando souber exatamente qual objeto e campos consultar. Use SOSL para buscas textuais amplas em múltiplos objetos.",
        "Nunca use SELECT * em SOQL — sempre liste explicitamente os campos necessários para evitar ultrapassar os limites de dados retornados."
      ],
      en: [
        "Prefer SOQL when you know exactly which object and fields to query. Use SOSL for broad text searches across multiple objects.",
        "Never use SELECT * in SOQL — always explicitly list required fields to avoid exceeding data return limits."
      ],
      es: [
        "Prefiera SOQL cuando sepa exactamente qué objeto consultar. Use SOSL para búsquedas textuales amplias en múltiples objetos.",
        "Nunca use SELECT * en SOQL — liste siempre los campos necesarios para no superar los límites de retorno de datos."
      ]
    },
    resources: [
      {
        title: {
          pt: "Módulo de SOQL e SOSL no Trailhead",
          en: "SOQL and SOSL Module on Trailhead",
          es: "Módulo de SOQL y SOSL en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/apex_database",
        type: "trailhead"
      }
    ]
  },
  {
    id: "setup-audit-trail",
    category: "tools",
    title: {
      pt: "Setup Audit Trail",
      en: "Setup Audit Trail",
      es: "Setup Audit Trail"
    },
    subtitle: {
      pt: "Rastreamento de Histórico de Mudanças de Configuração",
      en: "Configuration Change History Tracking",
      es: "Seguimiento del Historial de Cambios de Configuración"
    },
    description: {
      pt: "Ferramenta nativa do Salesforce que registra um histórico detalhado de todas as mudanças de configuração (Setup) realizadas na Org, incluindo quem fez a alteração, quando e o que foi modificado.",
      en: "A native Salesforce tool that logs a detailed history of all configuration (Setup) changes made in the Org, including who made the change, when, and what was modified.",
      es: "Herramienta nativa de Salesforce que registra un historial detallado de todos los cambios de configuración realizados en la Org, incluyendo quién, cuándo y qué fue modificado."
    },
    iconName: "FileText",
    tags: {
      pt: ["Auditoria", "Segurança", "Compliance"],
      en: ["Audit", "Security", "Compliance"],
      es: ["Auditoría", "Seguridad", "Compliance"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Retenção de 180 Dias",
          en: "180-Day Retention",
          es: "Retención de 180 Días"
        },
        description: {
          pt: "O Setup Audit Trail retém os últimos 180 dias de histórico de mudanças de configuração. Para retenção de longo prazo, é recomendável exportar os logs regularmente.",
          en: "The Setup Audit Trail retains the last 180 days of configuration change history. For long-term retention, it is recommended to export logs regularly.",
          es: "El Setup Audit Trail retiene los últimos 180 días del historial de cambios. Para retención a largo plazo, se recomienda exportar los logs regularmente."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Consulte o Audit Trail antes de qualquer investigação de incidente para identificar mudanças recentes que possam ter causado um problema.",
        "Exporte e arquive os logs periodicamente em sistemas externos para garantir conformidade com requisitos regulatórios de longo prazo."
      ],
      en: [
        "Check the Audit Trail before any incident investigation to identify recent configuration changes that may have caused the issue.",
        "Periodically export and archive logs in external systems to ensure compliance with long-term regulatory requirements."
      ],
      es: [
        "Consulte el Audit Trail antes de cualquier investigación de incidentes para identificar cambios recientes que puedan haber causado el problema.",
        "Exporte y archive los logs periódicamente en sistemas externos para cumplir requisitos regulatorios de largo plazo."
      ]
    },
    resources: [
      {
        title: {
          pt: "Monitoramento e Rastreamento de Mudanças no Trailhead",
          en: "Monitoring and Change Tracking on Trailhead",
          es: "Monitoreo y Seguimiento de Cambios en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/security_basics",
        type: "trailhead"
      }
    ]
  },
  {
    id: "apex-replay-debugger",
    category: "tools",
    title: {
      pt: "Apex Replay Debugger",
      en: "Apex Replay Debugger",
      es: "Apex Replay Debugger"
    },
    subtitle: {
      pt: "Depuração Visual de Apex com Logs de Execução no VS Code",
      en: "Visual Apex Debugging Using Execution Logs in VS Code",
      es: "Depuración Visual de Apex con Logs de Ejecución en VS Code"
    },
    description: {
      pt: "Extensão do VS Code que permite reproduzir (replay) logs de debug do Salesforce passo a passo, visualizando o estado das variáveis em cada linha do código Apex como se estivesse em um debugger local.",
      en: "A VS Code extension that allows you to replay Salesforce debug logs step by step, visualizing the state of variables at each line of Apex code as if using a local debugger.",
      es: "Extensión de VS Code que permite reproducir (replay) logs de debug de Salesforce paso a paso, visualizando el estado de variables en cada línea del código Apex."
    },
    iconName: "Play",
    tags: {
      pt: ["Debug", "Apex", "VS Code"],
      en: ["Debug", "Apex", "VS Code"],
      es: ["Debug", "Apex", "VS Code"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Checkpoints e Replay de Logs",
          en: "Checkpoints and Log Replay",
          es: "Checkpoints y Replay de Logs"
        },
        description: {
          pt: "Você define Checkpoints no código (até 5 por sessão) diretamente no VS Code. Ao executar o código na Org, o log captura o estado do heap de memória naquele ponto e permite o replay offline.",
          en: "You set Checkpoints in code (up to 5 per session) directly in VS Code. When the code executes in the Org, the log captures the memory heap state at that point for offline replay.",
          es: "Se definen Checkpoints en el código (hasta 5 por sesión) en VS Code. Al ejecutarse en la Org, el log captura el estado del heap de memoria en ese punto para reproducción offline."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Use o Replay Debugger para problemas complexos de lógica Apex. Para problemas simples, System.debug() ainda é mais rápido.",
        "Defina os checkpoints nos pontos de decisão do código (dentro de condicionais ou loops) para maximizar o valor do log capturado."
      ],
      en: [
        "Use the Replay Debugger for complex Apex logic issues. For simple problems, System.debug() is still faster.",
        "Set checkpoints at code decision points (inside conditionals or loops) to maximize the value of the captured log."
      ],
      es: [
        "Use el Replay Debugger para problemas complejos de lógica Apex. Para problemas simples, System.debug() sigue siendo más rápido.",
        "Defina checkpoints en los puntos de decisión del código (dentro de condicionales o bucles) para maximizar el valor del log."
      ]
    },
    resources: [
      {
        title: {
          pt: "Apex Replay Debugger no Trailhead",
          en: "Apex Replay Debugger on Trailhead",
          es: "Apex Replay Debugger en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/projects/find-and-fix-bugs-with-apex-replay-debugger",
        type: "trailhead"
      }
    ]
  },
  {
    id: "copado-gearset",
    category: "tools",
    title: {
      pt: "Copado & Gearset",
      en: "Copado & Gearset",
      es: "Copado & Gearset"
    },
    subtitle: {
      pt: "Plataformas Líderes de DevOps e Release Management",
      en: "Leading DevOps and Release Management Platforms",
      es: "Plataformas Líderes de DevOps y Release Management"
    },
    description: {
      pt: "Ferramentas de mercado especializadas em DevOps para Salesforce, oferecendo pipelines de CI/CD, comparação visual de metadados, gestão de conflitos e automação de deploy muito além do que as ferramentas nativas oferecem.",
      en: "Market-leading DevOps tools specialized for Salesforce, offering CI/CD pipelines, visual metadata comparison, conflict management, and deployment automation far beyond native tooling.",
      es: "Herramientas de mercado especializadas en DevOps para Salesforce, con pipelines de CI/CD, comparación visual de metadatos, gestión de conflictos y automatización de despliegues."
    },
    iconName: "Rocket",
    tags: {
      pt: ["DevOps", "Release Management", "Mercado"],
      en: ["DevOps", "Release Management", "Market"],
      es: ["DevOps", "Release Management", "Mercado"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Comparação Visual de Metadados (Gearset)",
          en: "Visual Metadata Comparison (Gearset)",
          es: "Comparación Visual de Metadatos (Gearset)"
        },
        description: {
          pt: "O Gearset permite comparar visualmente os metadados entre duas orgs (ex: Produção vs Sandbox), selecionando exatamente quais componentes deseja implantar com validação de dependências.",
          en: "Gearset allows you to visually compare metadata between two orgs (e.g., Production vs Sandbox), selecting exactly which components to deploy with dependency validation.",
          es: "Gearset permite comparar visualmente los metadatos entre dos orgs (ej: Producción vs Sandbox), seleccionando exactamente qué componentes desplegar con validación de dependencias."
        }
      },
      {
        title: {
          pt: "Pipeline de Release Baseado em User Stories (Copado)",
          en: "User-Story-Based Release Pipeline (Copado)",
          es: "Pipeline de Release Basado en User Stories (Copado)"
        },
        description: {
          pt: "O Copado conecta user stories de projetos ágeis diretamente ao pipeline de deploy, garantindo que apenas os metadados aprovados e testados sejam promovidos entre os ambientes.",
          en: "Copado connects agile project user stories directly to the deployment pipeline, ensuring only approved and tested metadata is promoted between environments.",
          es: "Copado conecta las user stories de proyectos ágiles directamente al pipeline de despliegue, garantizando que solo los metadatos aprobados sean promovidos entre entornos."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Avalie o Gearset para equipes menores que precisam de comparação e deploy rápido, e o Copado para organizações maiores com fluxos de release complexos.",
        "Ambas as ferramentas se integram com repositórios Git — sempre use um repositório como fonte da verdade, mesmo com essas plataformas."
      ],
      en: [
        "Evaluate Gearset for smaller teams needing fast comparison and deployment, and Copado for larger organizations with complex release flows.",
        "Both tools integrate with Git repositories — always use a repository as the source of truth, even with these platforms."
      ],
      es: [
        "Evalúe Gearset para equipos pequeños que necesitan comparación y despliegue rápido, y Copado para organizaciones con flujos de release complejos.",
        "Ambas herramientas se integran con repositorios Git — use siempre un repositorio como fuente de verdad."
      ]
    },
    resources: [
      {
        title: {
          pt: "Site Oficial do Copado",
          en: "Copado Official Website",
          es: "Sitio Oficial de Copado"
        },
        url: "https://www.copado.com/",
        type: "article"
      }
    ]
  },
  {
    id: "mulesoft-anypoint",
    category: "tools",
    title: {
      pt: "MuleSoft Anypoint Platform",
      en: "MuleSoft Anypoint Platform",
      es: "MuleSoft Anypoint Platform"
    },
    subtitle: {
      pt: "Integração de Sistemas e Gestão de APIs Empresariais",
      en: "Enterprise System Integration and API Management",
      es: "Integración de Sistemas y Gestión de APIs Empresariales"
    },
    description: {
      pt: "Plataforma de integração e gestão de APIs da Salesforce (adquirida em 2018) usada para conectar sistemas heterogêneos, criar camadas de API padronizadas e orquestrar fluxos de dados entre o Salesforce e sistemas legados.",
      en: "Salesforce's integration and API management platform (acquired in 2018) used to connect heterogeneous systems, create standardized API layers, and orchestrate data flows between Salesforce and legacy systems.",
      es: "Plataforma de integración y gestión de APIs de Salesforce (adquirida en 2018) para conectar sistemas heterogéneos, crear capas de API estandarizadas y orquestar flujos de datos entre Salesforce y sistemas heredados."
    },
    iconName: "Share2",
    tags: {
      pt: ["Integração", "APIs", "MuleSoft"],
      en: ["Integration", "APIs", "MuleSoft"],
      es: ["Integración", "APIs", "MuleSoft"]
    },
    keyConcepts: [
      {
        title: {
          pt: "API-Led Connectivity",
          en: "API-Led Connectivity",
          es: "Conectividad Liderada por APIs (API-Led)"
        },
        description: {
          pt: "Arquitetura de integração em três camadas: System APIs (conectam sistemas legados), Process APIs (orquestram lógica de negócio) e Experience APIs (entregam dados para canais de consumo como apps e portais).",
          en: "Three-layer integration architecture: System APIs (connect legacy systems), Process APIs (orchestrate business logic), and Experience APIs (deliver data to consumption channels like apps and portals).",
          es: "Arquitectura de integración en tres capas: System APIs (conectan sistemas heredados), Process APIs (orquestan lógica de negocio) y Experience APIs (entregan datos a canales de consumo)."
        }
      },
      {
        title: {
          pt: "Anypoint Exchange",
          en: "Anypoint Exchange",
          es: "Anypoint Exchange"
        },
        description: {
          pt: "Marketplace interno de ativos de integração (conectores, templates, APIs documentadas) da MuleSoft que permite reutilizar componentes prontos para acelerar o desenvolvimento de integrações.",
          en: "MuleSoft's internal marketplace of integration assets (connectors, templates, documented APIs) that enables reusing ready-made components to accelerate integration development.",
          es: "Marketplace interno de activos de integración (conectores, plantillas, APIs documentadas) de MuleSoft para reutilizar componentes listos y acelerar el desarrollo de integraciones."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Siga a arquitetura API-Led Connectivity para criar integrações reutilizáveis e desacopladas, evitando integrações ponto a ponto (spaghetti integrations).",
        "Documente e publique todas as APIs no Anypoint Exchange para promover reutilização e padronização entre times de integração."
      ],
      en: [
        "Follow API-Led Connectivity architecture to build reusable, decoupled integrations, avoiding point-to-point (spaghetti) integrations.",
        "Document and publish all APIs in Anypoint Exchange to promote reuse and standardization across integration teams."
      ],
      es: [
        "Siga la arquitectura API-Led para construir integraciones reutilizables y desacopladas, evitando integraciones punto a punto.",
        "Documente y publique todas las APIs en Anypoint Exchange para promover reutilización y estandarización entre equipos."
      ]
    },
    resources: [
      {
        title: {
          pt: "Fundamentos do MuleSoft no Trailhead",
          en: "MuleSoft Basics on Trailhead",
          es: "Fundamentos de MuleSoft en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/mulesoft-basics",
        type: "trailhead"
      }
    ]
  }
];

type Locale = keyof LocString;

const localeKeys: Locale[] = ["pt", "en", "es"];

const guideTitle = (guide: GuideItem, locale: Locale) => guide.title[locale] || guide.title.pt;

interface GuideContentProfile {
  scenario: string;
  problem: string;
  records: string;
  fields: string;
  automation: string;
  rule: string;
  implementation: string;
  example: string;
  errors: string;
  testing: string;
  done: string;
  avoid: string;
  metrics: string;
  security: string;
  integration: string;
}

const guideProfiles: Record<string, GuideContentProfile> = {
  "sales-cloud": {
    scenario: "Operacao comercial B2B em que SDRs qualificam Leads, executivos conduzem Opportunities e gestores cobram forecast por produto, margem e data de fechamento.",
    problem: "Evita que Leads avancem sem criterio, que Opportunities fiquem com Stage artificial e que previsao de receita dependa de planilhas fora do Salesforce.",
    records: "Lead, Account, Contact, Opportunity, OpportunityLineItem, Product2, Pricebook2, Campaign, ForecastingItem, Territory2 e OpportunityTeamMember.",
    fields: "Lead.Status, Lead.LeadSource, Lead.Rating, Opportunity.StageName, Amount, CloseDate, Probability, ForecastCategoryName, Margin__c e Decision_Maker__c.",
    automation: "Lead Assignment Rules, Duplicate Rules, Flow before-save para qualificar campos, Approval Process para desconto e Flow after-save para criar tarefas comerciais.",
    rule: "Opportunity nao deve ir para Proposal sem produto, decisor, valor estimado, data de fechamento realista e margem minima validada.",
    implementation: "Mapeie o funil real, crie Record Types quando houver processos distintos, configure Path por Stage, aplique validações comerciais e conecte Forecast ao comportamento esperado da equipe.",
    example: "StageName = Proposal exige Decision_Maker__c preenchido, HasOpportunityLineItem = true, Discount__c <= 15 ou aprovacao por gerente comercial.",
    errors: "Converter Lead duplicado, usar Amount sem produtos, automatizar CloseDate sem criterio, permitir Stage pulado e misturar pipeline novo com renovacao no mesmo processo.",
    testing: "Crie Lead de campanha, converta em Account/Contact/Opportunity, adicione produto com Price Book ativo, avance Stages e valide Forecast, aprovacao e relatorios.",
    done: "Win rate, aging por Stage, taxa de conversao, pipeline por vendedor e forecast batem com a operacao e nao exigem correcao manual recorrente.",
    avoid: "Nao use automacao pesada para substituir disciplina comercial; se o time nao tem criterio de qualificacao, resolva o processo antes da configuracao.",
    metrics: "Conversion Rate, Sales Cycle, Pipeline Aging, Win Rate, Average Deal Size, Forecast Accuracy e oportunidades sem proxima atividade.",
    security: "Use role hierarchy, territories, teams e sharing rules para separar carteiras sem abrir oportunidades estrategicas para toda a organizacao.",
    integration: "Integre marketing para origem do Lead, ERP para pedidos/faturamento e CPQ ou sistema comercial quando preco, margem ou contrato nao nascem no Salesforce."
  },
  "service-cloud": {
    scenario: "Central de atendimento que recebe Cases por Email-to-Case, Web-to-Case, WhatsApp, bot e telefone, com agentes trabalhando no Service Console.",
    problem: "Reduz perda de SLA, reabertura sem causa registrada, roteamento manual e falta de visibilidade entre Case, Contact, Account, Entitlement e canal de entrada.",
    records: "Case, Contact, Account, Entitlement, Milestone, Queue, AgentWork, MessagingSession, KnowledgeArticleVersion e ServiceChannel.",
    fields: "Case.Status, Origin, Priority, Reason, IsEscalated, OwnerId, EntitlementId, MilestoneStatus__c, First_Response_At__c e Reopen_Count__c.",
    automation: "Omni-Channel, Case Assignment Rules, Escalation Rules, Entitlement Process, Flow para classificacao e macros no Service Console.",
    rule: "Case critico deve ser roteado para fila especializada, iniciar SLA correto e escalar quando milestone de primeira resposta ou resolucao estiver em risco.",
    implementation: "Defina canais, filas, presenca, capacidade, skills, Record Types de caso, processo de entitlement e layouts do console antes de ativar roteamento automatico.",
    example: "Case.Origin = WhatsApp e Priority = High roteia para Queue N2, cria Milestone de 30 minutos e impede fechamento sem Resolution_Code__c.",
    errors: "Medir AgentWork como se fosse Case, esquecer presenca Omni, misturar bot e agente em relatorios, SLA sem Entitlement e fechar caso sem categorizacao.",
    testing: "Abra casos por email, web e mensageria, altere presenca do agente, simule estouro de milestone, transfira atendimento e valide relatorios de FCR e backlog.",
    done: "Backlog, tempo medio de resposta, abandono, reabertura, SLA violado e CSAT podem ser explicados por canal, fila, agente e motivo do caso.",
    avoid: "Nao implemente Omni-Channel sem acordo operacional sobre filas, capacidade, horarios, pausas e propriedade de casos reabertos.",
    metrics: "First Response Time, Average Handle Time, First Contact Resolution, Reopen Rate, SLA Compliance, CSAT, NPS e backlog por prioridade.",
    security: "Restrinja casos por fila, role, equipe e dados sensiveis do cliente; artigos internos de Knowledge nao devem aparecer em portal externo.",
    integration: "Integre telefonia, WhatsApp, bot, sistema de pedidos e base interna quando o agente precisa resolver sem alternar entre varias telas."
  },
  "experience-cloud": {
    scenario: "Portal de clientes ou parceiros onde usuarios externos abrem casos, consultam pedidos, atualizam dados e acessam Knowledge sem entrar na org interna.",
    problem: "Evita atendimento manual para solicitacoes simples e reduz risco de expor registros internos para usuarios convidados ou contatos externos.",
    records: "User externo, Account, Contact, Case, Knowledge, ContentDocumentLink, Network, ExperienceBundle, Sharing Set e External Account Hierarchy.",
    fields: "Contact.AccountId, User.ContactId, Case.ContactId, Case.AccountId, Account.External_Id__c, Visibility__c e Portal_Profile__c.",
    automation: "Sharing Sets, Sharing Rules, Flow de autoatendimento, Data Category Visibility, Login Flow e componentes LWR ou Aura.",
    rule: "Usuario externo so deve enxergar registros relacionados ao Contact/Account dele; Guest User nunca deve ter acesso amplo a objetos privados.",
    implementation: "Escolha template, modelo de licenca, dominio, perfis externos, regras de compartilhamento, paginas publicas e jornadas autenticadas antes de publicar.",
    example: "Sharing Set libera Case quando Case.ContactId = User.ContactId e Knowledge usa Data Category por produto contratado.",
    errors: "Permissao excessiva no Guest User, arquivo exposto via ContentDocumentLink, usuario externo sem ContactId e regra que abre todas as Accounts parceiras.",
    testing: "Teste como guest, cliente e parceiro; tente acessar URL direta de registro de outro cliente, artigo interno e arquivo anexado.",
    done: "Portal permite autosservico esperado, bloqueia acesso cruzado, gera casos com dados corretos e tem auditoria clara de usuarios externos.",
    avoid: "Nao use Experience Cloud para substituir um produto transacional complexo quando performance, checkout ou UX publica exigem plataforma dedicada.",
    metrics: "Deflection Rate, casos abertos por portal, logins ativos, artigos visualizados, tarefas concluidas e erros de autorizacao.",
    security: "Revise Guest User Profile, External Sharing Model, CSP, login policies, MFA e visibilidade de arquivos em cada release.",
    integration: "Conecte ERP, pedidos, base de contratos ou identidade externa quando o portal precisa mostrar dados fora do Salesforce."
  },
  "financial-services-cloud": {
    scenario: "Instituicao financeira gerenciando household, relacionamento entre pessoas, contas financeiras, objetivos e interacoes reguladas.",
    problem: "Evita modelar cliente financeiro com Account/Contact genericos sem hierarquia familiar, carteira, consentimento e visao consolidada de patrimonio.",
    records: "Person Account, FinancialAccount, FinancialHolding, AccountContactRelation, RelationshipGroup, InteractionSummary e ActionPlan.",
    fields: "Client_Segment__c, AUM__c, Risk_Profile__c, KYC_Status__c, Next_Review_Date__c e Primary_Group__c.",
    automation: "Action Plans, Interaction Summaries, Flow para revisao KYC, Relationship Map e regras de compartilhamento por carteira.",
    rule: "Cliente com KYC vencido nao deve receber nova recomendacao sem atualizacao cadastral, perfil de risco e registro de interacao.",
    implementation: "Defina modelo de pessoa, household, carteira, responsavel, consentimentos, objetos financeiros e integracao de saldos antes de layouts.",
    example: "KYC_Status__c = Expired bloqueia oportunidade de investimento e cria tarefa para revisao com vencimento em 5 dias uteis.",
    errors: "Duplicar pessoa como Account e Contact, abrir patrimonio para gerente errado, importar saldo sem data-base e tratar household como simples Account pai.",
    testing: "Crie grupo familiar, associe contas financeiras, altere gerente, simule KYC vencido e valide visibilidade por carteira.",
    done: "Gerente enxerga relacao, produtos, tarefas, historico e riscos sem acessar clientes fora da carteira.",
    avoid: "Nao use FSC se a necessidade e apenas cadastro simples; o modelo acrescenta complexidade que precisa de governanca.",
    metrics: "AUM por carteira, revisoes vencidas, interacoes por cliente, produtos por household e alertas regulatorios pendentes.",
    security: "Acesso deve considerar carteira, regulacao, consentimento, dados sensiveis e segregacao entre agencias ou segmentos.",
    integration: "Integre core bancario, cadastro, suitability, documentos e plataformas de investimento para evitar digitacao duplicada."
  },
  "marketing-cloud": {
    scenario: "Time de marketing executa jornadas segmentadas usando dados do CRM, consentimento e eventos de comportamento em email, SMS ou WhatsApp.",
    problem: "Evita disparos sem segmentacao, duplicidade de contatos, opt-out ignorado e campanhas sem retorno para Sales Cloud.",
    records: "Contact, Lead, Campaign, CampaignMember, Data Extension, Journey, Subscriber, Contact Key e Consent records.",
    fields: "Email, MobilePhone, HasOptedOutOfEmail, Consent_Status__c, Lifecycle_Stage__c, CampaignMember.Status e Source__c.",
    automation: "Journey Builder, Automation Studio, SQL Query Activity, synchronized data sources, suppression lists e entry events.",
    rule: "Contato so entra em jornada se tiver consentimento valido, chave consistente e nao estiver em lista de supressao ou bounce critico.",
    implementation: "Defina Contact Key, modelo de Data Extensions, sincronizacao CRM, regras de entrada/saida, frequencia e retorno de engajamento para CRM.",
    example: "Lead com Lifecycle_Stage__c = MQL entra na jornada, recebe 3 emails e atualiza CampaignMember.Status = Responded ao clicar.",
    errors: "Usar email como chave mutavel, nao tratar unsubscribe, enviar para duplicados, query sem filtro de data e jornada sem criterio de saida.",
    testing: "Teste com registros seed, valide Data Extension, consentimento, exclusao, logs de envio, atualizacao em CampaignMember e eventos de clique.",
    done: "A jornada respeita consentimento, mede entrega/engajamento e retroalimenta vendas com status acionavel.",
    avoid: "Nao use automacao de marketing para base sem governanca de consentimento, qualidade de email e criterio de segmentacao.",
    metrics: "Delivery Rate, Bounce Rate, Open/Click Rate, Conversion, unsubscribe, MQL gerados e receita atribuida.",
    security: "Controle acesso a dados pessoais, Business Units, chaves de API, listas de supressao e politicas de retencao.",
    integration: "Integre Sales Cloud, Data Cloud, formularios, ecommerce e plataformas de mensageria conforme origem e retorno dos eventos."
  },
  "data-cloud": {
    scenario: "Unificar dados de cliente de CRM, ecommerce, atendimento e marketing para segmentacao, identidade e ativacao em tempo quase real.",
    problem: "Resolve visao fragmentada do cliente, chaves inconsistentes e ativacoes que usam dados desatualizados ou conflitantes.",
    records: "Data Stream, Data Lake Object, Data Model Object, Unified Individual, Identity Resolution Ruleset, Calculated Insight e Activation Target.",
    fields: "Email, Phone, CRM_ID__c, Loyalty_ID__c, Last_Order_Date__c, Consent_Status__c e Segment_Membership__c.",
    automation: "Ingestion schedules, mapping para DMO, identity resolution, calculated insights, segments e activations.",
    rule: "Dados so devem ser ativados quando identidade, consentimento e freshness estiverem dentro do criterio definido pelo caso de uso.",
    implementation: "Defina fontes, chaves de identidade, mapeamento, regras de unificacao, calculos, segmentos e destino de ativacao antes de importar tudo.",
    example: "Unified Individual combina CRM_ID__c e email normalizado; segmento inclui clientes com compra nos ultimos 90 dias e opt-in ativo.",
    errors: "Ingerir sem chave confiavel, mapear campo no DMO errado, ativar sem consentimento, ignorar latencia e tratar unificacao como deduplicacao simples.",
    testing: "Carregue amostras com duplicidade, valide matching, reconciliacao, calculated insight, segmento e chegada no destino.",
    done: "Segmentos explicam origem dos dados, criterio de identidade, consentimento e tempo de atualizacao sem ajuste manual.",
    avoid: "Nao use Data Cloud como data warehouse generico; ele deve servir identidade, segmentacao e ativacao conectada a Customer 360.",
    metrics: "Match Rate, Unification Rate, volume ingerido, latencia, ativacoes, segmentos ativos e registros bloqueados por consentimento.",
    security: "Revise data spaces, permissoes, consentimento, politicas de retencao e campos sensiveis antes de ativar dados.",
    integration: "Conecte CRM, lakehouse, Marketing Cloud, Commerce, Service e destinos externos por conectores ou APIs."
  },
  "security-center": {
    scenario: "Time de seguranca monitora configuracoes de varias orgs para identificar permissoes excessivas, riscos e mudancas criticas.",
    problem: "Evita revisao manual de Profiles, Permission Sets e politicas de seguranca espalhadas por orgs diferentes.",
    records: "Security Health Check, org metrics, users, permissions, connected apps, session settings e eventos de seguranca.",
    fields: "Risk_Level__c, Policy_Status__c, Permission_Name__c, Last_Login__c e Critical_Setting__c.",
    automation: "Dashboards de postura, alertas, comparacao de baseline, revisoes periodicas e exportacao para GRC/SIEM.",
    rule: "Configuracao critica fora do baseline deve gerar revisao, owner e prazo, principalmente para MFA, session settings e permissoes administrativas.",
    implementation: "Conecte orgs, defina baseline, classifique riscos, crie processo de excecao e estabeleca cadencia de revisao.",
    example: "Usuario com Modify All Data e sem login recente entra em relatorio de remediacao com owner de seguranca.",
    errors: "Tratar alerta como falso positivo sem evidencias, nao envolver admins locais e manter excecoes sem data de expiracao.",
    testing: "Altere configuracao em sandbox conectada, valide captura do risco, dashboard, notificação e fluxo de remediacao.",
    done: "Riscos criticos possuem responsavel, prazo, evidencia de correcao e tendencia historica por org.",
    avoid: "Nao use como substituto de governanca; a ferramenta aponta risco, mas decisao e remediacao continuam sendo processo.",
    metrics: "Critical Findings, tempo de remediacao, usuarios privilegiados, orgs fora do baseline e excecoes vencidas.",
    security: "Restrinja acesso ao Security Center, pois ele revela postura de seguranca e configuracoes sensiveis.",
    integration: "Integre com SIEM, ITSM ou GRC quando alertas precisam virar incidentes ou controles auditaveis."
  },
  "privacy-center": {
    scenario: "Empresa precisa atender LGPD/GDPR, localizar dados pessoais e executar solicitacoes de titulares em ambientes Salesforce.",
    problem: "Evita respostas manuais incompletas a DSR, campos pessoais sem inventario e retencao sem politica definida.",
    records: "Data Subject Request, Individual, Contact, Lead, Person Account, consent records, field inventory e policies.",
    fields: "IndividualId, Email, Phone, Consent_Status__c, Retention_Category__c, Legal_Basis__c e Erasure_Status__c.",
    automation: "Discovery, classificacao de campos, politicas de retencao, DSR workflows e mascaramento/anonymization quando aplicavel.",
    rule: "Solicitacao de titular deve localizar registros relacionados por chave confiavel e respeitar base legal antes de apagar ou anonimizar.",
    implementation: "Classifique dados pessoais, relacione Individual aos registros, defina retencao, crie fluxo de aprovacao legal e evidencias de execucao.",
    example: "DSR por email encontra Contact, Lead e Case; campos sensiveis sao anonimizados apenas apos aprovacao juridica.",
    errors: "Apagar dado com obrigacao legal de retencao, esquecer backups/exportacoes, nao mapear objetos customizados e confundir opt-out com exclusao.",
    testing: "Execute DSR de acesso e exclusao em sandbox com dados ficticios, valide busca, aprovacao, logs e impacto em relatorios.",
    done: "Cada solicitacao possui trilha de auditoria, decisao legal, registros afetados e resultado verificavel.",
    avoid: "Nao automatize exclusao sem revisar dependencias legais, integracoes downstream e campos obrigatorios.",
    metrics: "DSR por status, tempo de resposta, campos classificados, politicas aplicadas e excecoes legais.",
    security: "Apenas times autorizados devem ver dados sensiveis, base legal, historico de solicitacoes e operacoes de anonimização.",
    integration: "Integre com consent management, data lake, marketing e sistemas que recebem dados pessoais do Salesforce."
  },
  "salesforce-shield": {
    scenario: "Org com dados sensiveis precisa criptografia, auditoria detalhada e monitoramento de eventos sem quebrar operacao.",
    problem: "Protege campos criticos e fornece rastreabilidade alem do Field History Tracking padrao.",
    records: "Platform Encryption keys, EventLogFile, FieldAuditTrail, Transaction Security Policy, LoginEvent e APIEvent.",
    fields: "Encrypted fields como CPF__c, SSN__c, Salary__c, Health_Info__c e campos de auditoria historica.",
    automation: "Politicas de Transaction Security, monitoramento de Event Monitoring, rotacao de chaves e retencao extendida de auditoria.",
    rule: "Campo criptografado deve ser escolhido considerando filtro, ordenacao, integracao, busca e relatorios antes de ativar em producao.",
    implementation: "Inventarie campos sensiveis, teste impacto de criptografia em sandbox, defina key management e monitore eventos de alto risco.",
    example: "Download massivo de relatório com CPF__c dispara Transaction Security Policy e notifica Security Operations.",
    errors: "Criptografar campo usado em filtro critico, nao testar integracao, esquecer BYOK/rotacao e achar que Shield substitui controle de acesso.",
    testing: "Ative criptografia em sandbox, rode relatorios, SOQL, integracoes e exportacoes para validar comportamento e performance.",
    done: "Campos sensiveis protegidos, eventos monitorados, auditoria retida e excecoes documentadas.",
    avoid: "Nao criptografe por padrao todos os campos; escolha por risco e impacto tecnico.",
    metrics: "Eventos suspeitos, downloads massivos, logins anomalos, campos auditados e incidentes por politica.",
    security: "Controle acesso a chaves, logs, politicas e dados descriptografados com segregacao clara.",
    integration: "Envie Event Monitoring para SIEM e alinhe chaves/retencao com politicas corporativas."
  },
  "sf-architecture": {
    scenario: "Desenhar solucao Salesforce que conecta vendas, atendimento, dados, seguranca, integracoes e ciclo de releases.",
    problem: "Evita construir features isoladas que depois falham em escala, governanca, manutencao ou experiencia do usuario.",
    records: "Capability map, application landscape, integration inventory, data model, security model e release plan.",
    fields: "Decision_Log__c, System_of_Record__c, Data_Owner__c, Integration_Pattern__c e Risk_Level__c.",
    automation: "Architecture Decision Records, design reviews, Well-Architected assessment e governanca de backlog tecnico.",
    rule: "Toda decisao relevante deve explicar trade-off, impacto em dados, seguranca, integracao, limites e operacao.",
    implementation: "Mapeie capacidades, fronteiras de sistema, dados mestres, padroes de integracao, modelo de acesso e estrategia de deploy.",
    example: "ERP permanece system of record de pedido; Salesforce recebe status por Platform Event e nao permite editar valor faturado.",
    errors: "Comecar por tela, ignorar ownership de dados, escolher integracao sincrona sem SLA e deixar seguranca para o final.",
    testing: "Valide arquitetura com cenarios ponta a ponta, volume, falha de integracao, acesso por perfil e rollback.",
    done: "Times entendem decisoes, limites, ownership, riscos e caminho de evolucao sem depender de conhecimento tribal.",
    avoid: "Nao produza arquitetura apenas documental; ela precisa orientar implementacao, sustentacao e mudancas futuras.",
    metrics: "Debt backlog, incidentes por integracao, retrabalho de release, performance e tempo de mudanca.",
    security: "Arquitetura deve explicitar identidade, autorizacao, dados sensiveis, auditoria e segregacao de ambientes.",
    integration: "Defina padroes como request-reply, fire-and-forget, batch, CDC ou eventos conforme SLA e ownership."
  },
  "sf-data-model": {
    scenario: "Modelar objetos, relacionamentos e campos para suportar processos reais sem criar duplicidade ou dependencia excessiva.",
    problem: "Evita objetos customizados desnecessarios, lookup sem ownership, master-detail errado e relatorios impossiveis.",
    records: "Standard Objects, Custom Objects, Lookup, Master-Detail, External Object, Record Type e Big Object quando aplicavel.",
    fields: "External_Id__c, Status__c, OwnerId, RecordTypeId, Parent__c, Effective_Date__c e campos de formula/rollup.",
    automation: "Schema Builder, validation rules, Flow, roll-up summaries, duplicate rules e data import strategy.",
    rule: "Objeto novo so deve existir quando Account, Contact, Case, Opportunity ou outro objeto padrao nao representar corretamente o conceito.",
    implementation: "Desenhe cardinalidade, ownership, historico, reporting, integracao e volume antes de criar campos.",
    example: "Contrato_Produto__c pode ser junction object entre Contract e Product2 quando um contrato possui varios produtos com vigencias.",
    errors: "Usar texto para status controlado, lookup quando precisa cascade delete, formula pesada em relatorio e campo obrigatorio sem plano de carga.",
    testing: "Crie registros com relacoes completas, importe massa, rode relatorios, teste sharing e delete/update em cascata.",
    done: "Modelo responde perguntas de negocio, suporta seguranca, integra dados e nao exige gambiarra em relatorio.",
    avoid: "Nao modele Salesforce como copia do banco legado; adapte ao comportamento da plataforma e objetos padrao.",
    metrics: "Campos sem uso, objetos sem registros, duplicidade, qualidade de dados e performance de relatorios.",
    security: "Defina OWD, ownership, FLS e criterios de compartilhamento junto com o modelo.",
    integration: "External IDs e chaves naturais devem ser definidos antes de cargas e sincronizacoes."
  },
  "sf-order-of-execution": {
    scenario: "Debug de automacoes que alteram o mesmo registro por Flow, Apex, validation rule, assignment rule e workflow legacy.",
    problem: "Evita efeitos colaterais como recursion, valores sobrescritos, validacao disparando fora de hora e DML duplicado.",
    records: "Record-triggered Flow, Apex Trigger, Validation Rule, Duplicate Rule, Assignment Rule, Process Builder legacy e Workflow Rule.",
    fields: "Prior_Value__c, Status__c, OwnerId, RecordTypeId, LastModifiedById e campos alterados por automacao.",
    automation: "Before-save Flow, after-save Flow, Apex before/after, async path, scheduled path e platform events.",
    rule: "Escolha before-save para alterar o proprio registro sem DML; use after-save quando precisar criar/atualizar registros relacionados.",
    implementation: "Mapeie todas as automacoes por objeto, defina ordem no Flow Trigger Explorer, remova duplicidade e use criterios de entrada estritos.",
    example: "Case.Status muda para Closed; before-save valida Resolution_Code__c e after-save cria pesquisa CSAT.",
    errors: "Atualizar o proprio registro em after-save, esquecer recursion guard em Apex, misturar Process Builder antigo e Flow novo.",
    testing: "Use debug logs e Flow Debug para uma transacao completa, validando valores antes/depois e quantidade de SOQL/DML.",
    done: "Uma mudanca de registro tem caminho previsivel, sem atualizacoes redundantes e com logs explicaveis.",
    avoid: "Nao adicione nova automacao antes de inventariar o que ja existe no objeto.",
    metrics: "Erros de automacao, CPU time, SOQL/DML por transacao e incidentes por recursion.",
    security: "Considere contexto de execucao de Flow e Apex, FLS e permissoes quando automacao roda para usuarios diferentes.",
    integration: "Integracoes devem saber quais automacoes disparam em insert/update para evitar loop entre sistemas."
  },
  "sf-governor-limits": {
    scenario: "Implementacao com automacoes, Apex e integracoes processando muitos registros em uma unica transacao.",
    problem: "Evita falhas por SOQL 101, DML 151, CPU time, heap size e limites de callout.",
    records: "Apex transactions, Flow interviews, Batch Apex, Queueable, Platform Event, API request e Bulk API job.",
    fields: "Batch_Size__c, Retry_Count__c, Processing_Status__c, External_Id__c e Error_Message__c.",
    automation: "Bulkified Apex, collection actions em Flow, async processing, chunking e retry controlado.",
    rule: "Toda logica deve funcionar com lote de registros, nao apenas com um registro salvo pela interface.",
    implementation: "Agrupe consultas fora de loops, use maps, processe colecoes, escolha async quando houver callout ou volume e monitore limites.",
    example: "Trigger de Opportunity coleta AccountIds, consulta Accounts uma vez e atualiza resumo sem SOQL dentro do loop.",
    errors: "Flow com Get Records dentro de loop, trigger nao bulkificada, callout sincrono em massa e batch com escopo inadequado.",
    testing: "Execute carga com 200 registros, simule Bulk API, monitore debug logs, CPU, SOQL, DML e falhas parciais.",
    done: "Processo suporta volume esperado, falha com mensagem util e permite reprocessamento seguro.",
    avoid: "Nao resolva limite aumentando complexidade async sem entender causa raiz e impacto operacional.",
    metrics: "CPU time, SOQL count, DML rows, heap, falhas por lote e tempo de processamento.",
    security: "Processamentos async devem respeitar sharing quando necessario e registrar usuario/origem da acao.",
    integration: "Use Bulk API, CDC ou eventos quando integracao precisa escalar sem travar transacoes de usuario."
  },
  "sf-alm-environments": {
    scenario: "Times entregam mudancas em sandbox, UAT e producao com rastreabilidade e baixo risco de sobrescrever configuracao.",
    problem: "Evita deploy manual sem versionamento, diferenca entre ambientes e release que quebra automacao existente.",
    records: "Scratch Org, Sandbox, Change Set, package, metadata, deployment artifact e user stories.",
    fields: "Work_Item__c, Deployment_Status__c, Source_Branch__c, Test_Result__c e Release_Version__c.",
    automation: "Salesforce CLI, Git, CI/CD, validation deployment, Apex tests, destructive changes e post-deploy steps.",
    rule: "Toda mudanca deve ter origem, ambiente de teste, validacao, plano de deploy e plano de rollback documentados.",
    implementation: "Defina estrategia de branches, tipos de sandbox, janela de release, ownership de metadados e checklist pos-deploy.",
    example: "Flow novo sai de dev sandbox para UAT via pull request, roda testes Apex e deploy validado antes da janela de producao.",
    errors: "Alterar direto em producao, esquecer profiles/permission sets, nao incluir dependencias e sobrescrever Flow version errado.",
    testing: "Valide deploy em sandbox semelhante, execute regressao dos processos afetados e confira permissoes apos deploy.",
    done: "Release e reproduzivel, auditavel, testado e reversivel sem depender de memoria do admin.",
    avoid: "Nao use Change Sets como unica governanca quando ha varios times e alta frequencia de entrega.",
    metrics: "Deployment success rate, rollback, lead time, defeitos pos-release e divergencia entre ambientes.",
    security: "Controle quem pode alterar metadata, autorizar deploy, acessar sandboxes com dados e executar scripts.",
    integration: "CI/CD deve conversar com Git, ferramenta de work item, orgs Salesforce e notificacoes de release."
  },
  "sharing-security": {
    scenario: "Definir quem pode ver, editar ou transferir registros em vendas, atendimento, parceiros e areas internas.",
    problem: "Evita dados expostos por perfil amplo ou registros invisiveis que bloqueiam operacao.",
    records: "Profile, Permission Set, Permission Set Group, Role, OWD, Sharing Rule, Manual Share, Team e Territory.",
    fields: "OwnerId, RecordTypeId, AccountId, Territory2Id, UserRoleId e campos usados em criteria-based sharing.",
    automation: "Sharing recalculation, restriction rules, scoping rules, criteria-based sharing e Flow para ownership.",
    rule: "Perfil define capacidade geral; compartilhamento define acesso ao registro; FLS define campo visivel/editavel.",
    implementation: "Comece por OWD restritivo, abra acesso por role, sharing, teams ou territory e valide com usuarios reais.",
    example: "Opportunity privada, gerente ve por role hierarchy, time de pre-vendas acessa via Opportunity Team com permissao de leitura.",
    errors: "Dar View All para resolver chamado, confundir FLS com sharing, esquecer Account/Contact implicit sharing e abrir tudo por public group.",
    testing: "Use Login As e User Access Policies, teste registro proprio, de colega, de subordinado e de outra unidade.",
    done: "Usuarios acessam exatamente registros e campos necessarios, com excecoes documentadas e auditaveis.",
    avoid: "Nao desenhe seguranca so pela hierarquia formal se a operacao real trabalha por carteira, territorio ou squad.",
    metrics: "Chamados de acesso, usuarios privilegiados, regras de sharing, excecoes e registros sem owner correto.",
    security: "Revise permissoes sistemicas como Modify All Data, View All Data, View All em objetos e Manage Users.",
    integration: "Usuarios de integracao devem ter permission sets minimos e ownership claro para registros criados por API."
  },
  "flows": {
    scenario: "Automatizar regras de negocio declarativas para salvar registros, criar tarefas, aprovar etapas ou guiar usuarios em telas.",
    problem: "Reduz codigo desnecessario, mas pode causar lentidao e efeitos colaterais se cada requisito virar Flow isolado.",
    records: "Record-triggered Flow, Screen Flow, Autolaunched Flow, Subflow, Flow Orchestration e Flow Interview.",
    fields: "Entry criteria fields, Status__c, OwnerId, Approval_Status__c, Error_Message__c e variaveis de colecao.",
    automation: "Before-save, after-save, scheduled path, async path, subflows, fault paths e invocable Apex quando necessario.",
    rule: "Use before-save para atualizar o proprio registro; use after-save para registros relacionados ou acoes que dependem do Id.",
    implementation: "Defina criterio de entrada, uma responsabilidade por Flow, tratamento de erro, ordem no Trigger Explorer e testes com volume.",
    example: "Flow before-save em Lead calcula Lead_Score__c; after-save cria Task apenas quando Status muda para Qualified.",
    errors: "Get Records dentro de loop, Flow sem fault path, criterio amplo demais, versoes antigas ativas e subflow com contrato instavel.",
    testing: "Debug com registro real, teste update em massa, caminho de erro, usuario sem permissao e alteracao de valores antigos.",
    done: "Flow tem nome claro, descricao, criterio estrito, versao controlada, fault path e nao duplica logica de outro lugar.",
    avoid: "Nao use Flow para logica altamente algoritmica, processamento massivo complexo ou transacao que exige controle fino de excecoes.",
    metrics: "Erros de Flow, entrevistas pausadas, tempo de execucao, automacoes por objeto e chamados apos release.",
    security: "Escolha contexto de execucao conscientemente e valide FLS/permissoes quando Flow manipula dados sensiveis.",
    integration: "Quando Flow chama API ou Apex, trate timeout, retry, idempotencia e mensagem de erro para o usuario."
  },
  "reports-dashboards": {
    scenario: "Gestores acompanham pipeline, backlog, SLA, campanhas ou adoção com dados confiaveis em relatorios e dashboards.",
    problem: "Evita decisao baseada em exportacao manual, metricas divergentes e dashboards bonitos que nao respondem a pergunta operacional.",
    records: "Report Type, Report, Dashboard, Joined Report, Bucket Field, Summary Formula e Subscription.",
    fields: "OwnerId, CreatedDate, CloseDate, StageName, Status, Priority, Amount, SLA_Status__c e campos de segmentacao.",
    automation: "Custom Report Types, dashboard filters, subscriptions, row-level formulas e reporting snapshots quando necessario.",
    rule: "Toda metrica deve ter definicao: filtro, periodo, objeto base, exclusoes e responsavel pela qualidade do dado.",
    implementation: "Comece pela pergunta de negocio, valide campos obrigatorios, crie report type correto e teste com usuarios de diferentes acessos.",
    example: "Pipeline Aging considera Opportunities abertas, CloseDate no trimestre e StageName diferente de Closed Won/Lost.",
    errors: "Usar report type errado, esquecer sharing, somar Amount sem moeda, dashboard sem filtro de periodo e campo vazio distorcendo taxa.",
    testing: "Compare relatorio com amostra manual, teste usuario restrito, altere registro e confirme atualizacao esperada.",
    done: "Stakeholders confiam na metrica, sabem interpretar filtro e conseguem agir a partir do resultado.",
    avoid: "Nao crie dashboard para compensar dados ruins; corrija entrada de dados e processo antes.",
    metrics: "Uso de dashboards, assinaturas ativas, relatorios duplicados, campos vazios e divergencias reportadas.",
    security: "Dashboard running user pode expor dados; escolha viewer credentials ou running user conforme necessidade.",
    integration: "Quando relatorio alimenta BI externo, alinhe definicao da metrica e origem oficial."
  },
  "data-management": {
    scenario: "Importar, limpar, deduplicar e manter dados de clientes, oportunidades, casos ou produtos sem quebrar automacoes.",
    problem: "Evita registros duplicados, campos obrigatorios vazios, integracoes rejeitadas e relatorios sem confiabilidade.",
    records: "Data Import Wizard, Data Loader, Duplicate Rule, Matching Rule, External ID, Bulk API e Data Export.",
    fields: "External_Id__c, Legacy_Id__c, Email, Phone, AccountId, RecordTypeId, OwnerId e campos obrigatorios por processo.",
    automation: "Upsert, dedupe, validation rules, before-save Flow, batch cleanup e jobs de monitoramento.",
    rule: "Carga deve ter chave de negocio, mapeamento aprovado, plano de rollback e amostra validada antes do volume completo.",
    implementation: "Perfilhe dados, normalize valores, defina External ID, teste em sandbox, execute carga incremental e salve arquivos de sucesso/erro.",
    example: "Upsert de Accounts por Legacy_Id__c atualiza Segment__c e OwnerId sem criar duplicidade por CNPJ__c.",
    errors: "Carregar sem RecordTypeId, ignorar picklists, desligar validacoes sem criterio, perder IDs de erro e atualizar owner indevido.",
    testing: "Rode amostra, valide contagem, duplicidade, ownership, automacoes disparadas e relatorios afetados.",
    done: "Carga reconciliada, erros tratados, usuarios avisados e regras de qualidade monitoradas.",
    avoid: "Nao use importacao manual recorrente para integracao operacional; automatize com API quando a rotina e frequente.",
    metrics: "Duplicate Rate, campos obrigatorios vazios, erros de carga, registros sem owner e dados desatualizados.",
    security: "Arquivos de carga podem conter dados sensiveis; controle armazenamento, acesso e descarte.",
    integration: "Defina External IDs consistentes para sincronizacao com ERP, marketing, suporte ou data lake."
  },
  "user-management": {
    scenario: "Administrar entrada, mudanca de funcao e desligamento de usuarios sem manter acessos indevidos.",
    problem: "Evita usuario com permissao acumulada, licenca desperdicada, MFA inconsistente e owner inativo em registros criticos.",
    records: "User, Profile, Permission Set, Permission Set Group, Role, Public Group, Queue, Login History e User Access Policy.",
    fields: "IsActive, ProfileId, UserRoleId, ManagerId, FederationIdentifier, Department, LastLoginDate e DelegatedApproverId.",
    automation: "User Access Policies, Permission Set Groups, Login Flow, SSO/MFA, delegated administration e fluxo de onboarding.",
    rule: "Acesso deve refletir funcao atual do usuario e ter owner de negocio para aprovacao e revisao periodica.",
    implementation: "Defina matriz de acesso, crie permission sets por capacidade, automatize atribuicoes e revise usuarios inativos.",
    example: "Novo vendedor recebe Sales_User permission set, role regional e entra no Public Group da carteira correspondente.",
    errors: "Clonar perfil para cada excecao, deixar usuario inativo como owner, permission sets acumulados e integracao usando usuario humano.",
    testing: "Login As, teste criacao/edicao de registros, acesso a campos sensiveis e remocao no desligamento.",
    done: "Usuarios tem acesso minimo necessario, licencas corretas, MFA/SSO funcionando e revisao documentada.",
    avoid: "Nao resolva excecoes permanentes com perfil novo; prefira permission set temporario com justificativa.",
    metrics: "Usuarios inativos, ultimo login, permission sets por usuario, licencas livres e acessos privilegiados.",
    security: "Controle admins, reset de senha, login policies, session settings e usuarios de integracao.",
    integration: "SCIM/SSO com IdP reduz erro manual e acelera provisionamento/desprovisionamento."
  },
  "apex-dev": {
    scenario: "Criar logica customizada quando Flow ou configuracao nao controlam transacao, volume, integrações ou regras complexas.",
    problem: "Resolve requisitos que precisam de bulk processing, transacao consistente, chamada externa, trigger framework ou servico reutilizavel.",
    records: "Apex Class, Trigger, Queueable, Batch, Future, Schedulable, Custom Metadata e Platform Event.",
    fields: "Status__c, External_Id__c, Retry_Count__c, Integration_Status__c, Error_Message__c e campos alterados por trigger.",
    automation: "Trigger handler, service layer, selector pattern, queueable chaining, batch processing e invocable methods.",
    rule: "Codigo deve ser bulkificado, testavel, sem SOQL/DML em loop e com tratamento claro de excecao.",
    implementation: "Separe trigger de regra, use services, Custom Metadata para parametros, mocks para callout e testes cobrindo volume e erro.",
    example: "Trigger de Case chama CaseSlaService para recalcular SLA em lote quando Priority ou EntitlementId mudam.",
    errors: "SOQL em loop, teste sem assert, dependencia de SeeAllData, hardcoded IDs e catch vazio escondendo falha.",
    testing: "Teste 1 e 200 registros, usuario sem permissao, dados invalidos, callout mockado e limites de governor.",
    done: "Codigo tem asserts reais, cobertura relevante, logs uteis, padrao de bulk e deploy previsivel.",
    avoid: "Nao escreva Apex para regra simples que Flow before-save resolve com menor custo de manutencao.",
    metrics: "Falhas de Apex, CPU, cobertura por classe, incidentes pos-deploy e tempo de processamento async.",
    security: "Use with sharing/inherited sharing conscientemente e valide CRUD/FLS quando expondo dados para UI/API.",
    integration: "Apex deve tratar timeout, retry, idempotencia, Named Credentials e logs para sistemas externos."
  },
  "lwc-dev": {
    scenario: "Construir componentes de interface quando tela padrao, Dynamic Forms ou Screen Flow nao entregam interacao necessaria.",
    problem: "Resolve UX especifica sem transformar toda regra de negocio em JavaScript dificil de testar.",
    records: "Lightning Web Component, Apex Controller, Lightning Data Service, UI API, wire adapters e Custom Events.",
    fields: "recordId, objectApiName, campos via getRecord, draftValues, permissions e propriedades @api.",
    automation: "LDS, imperative Apex, wire service, navigation, toast, message service e validacoes client/server.",
    rule: "LWC deve orquestrar experiencia; regra critica e seguranca devem ser validadas tambem no servidor.",
    implementation: "Defina contrato de dados, use LDS quando possivel, trate loading/error/empty state e escreva Apex apenas para operacao customizada.",
    example: "Componente mostra produtos elegiveis para Opportunity e chama Apex para validar margem antes de inserir OpportunityLineItem.",
    errors: "Buscar dados sem FLS, duplicar logica do servidor, nao tratar erro de Apex, componente acoplado a Record Type por label.",
    testing: "Teste usuario com/sem permissao, registro sem dados, erro de API, mobile/responsivo e evento de salvamento.",
    done: "Componente funciona em contexto real, respeita permissao, apresenta erro claro e nao quebra layout padrao.",
    avoid: "Nao crie LWC para substituir pagina padrao quando Dynamic Forms e actions resolvem com menor custo.",
    metrics: "Erros JS, tempo de carregamento, cliques por acao, abandono da tela e chamados de usabilidade.",
    security: "Apex chamado por LWC deve validar sharing, CRUD/FLS e evitar expor campos sensiveis no payload.",
    integration: "Para dados externos, prefira Apex com Named Credential ou UI integrada via endpoint seguro."
  },
  "soql-sosl": {
    scenario: "Consultar registros com criterio tecnico para Apex, debugging, relatorios operacionais ou investigacao de dados.",
    problem: "Evita consultas lentas, nao seletivas, retorno excessivo e busca textual usada como filtro transacional.",
    records: "SOQL, SOSL, Query Plan, relationship queries, aggregate queries e indexed fields.",
    fields: "Id, Name, CreatedDate, LastModifiedDate, OwnerId, RecordTypeId, External_Id__c e campos indexados.",
    automation: "Queries em Apex selectors, batch scopes, anonymous execution, Developer Console e ferramentas como Inspector/Workbench.",
    rule: "Use SOQL para consulta estruturada por objeto; use SOSL para busca textual em multiplos objetos.",
    implementation: "Selecione apenas campos necessarios, filtre por campos seletivos, pagine volume e valide Query Plan em objetos grandes.",
    example: "SELECT Id, StageName FROM Opportunity WHERE IsClosed = false AND CloseDate = THIS_QUARTER AND OwnerId = :userId.",
    errors: "SELECT muitos campos, filtro por formula nao seletiva, query dentro de loop, LIKE inicial com '%' e esquecer WITH SECURITY_ENFORCED quando aplicavel.",
    testing: "Rode com volume realista, analise Query Plan, teste usuario restrito e monitore limites de linhas/queries.",
    done: "Consulta retorna dados corretos, e seletiva, respeita seguranca e funciona no volume esperado.",
    avoid: "Nao use SOSL para regra que exige relacionamento e filtros precisos; ela e busca, nao modelo relacional.",
    metrics: "Tempo de query, rows scanned, cardinalidade, SOQL count e falhas por non-selective query.",
    security: "Considere sharing, CRUD/FLS, WITH SECURITY_ENFORCED e stripInaccessible em Apex.",
    integration: "APIs que consultam dados devem usar filtros por data/External ID e paginacao para nao varrer objeto inteiro."
  },
  "async-apex": {
    scenario: "Processar tarefas demoradas, callouts, grandes volumes ou retries sem bloquear a transacao do usuario.",
    problem: "Evita timeout, mixed DML, limite de callout e tela travada enquanto processamento externo acontece.",
    records: "Queueable, Batch Apex, Future, Scheduled Apex, Platform Event, AsyncApexJob e Apex Flex Queue.",
    fields: "Processing_Status__c, Retry_Count__c, Last_Error__c, Correlation_Id__c e External_Id__c.",
    automation: "Queueable chaining, batch scopes, scheduled retry, platform event subscriber e transaction finalizer.",
    rule: "Escolha Queueable para job encadeado/controlado, Batch para volume grande e Platform Event para desacoplamento.",
    implementation: "Defina idempotencia, tamanho de lote, retry maximo, logs, ownership do erro e estrategia de reprocessamento.",
    example: "Pedido aprovado publica Platform Event; Queueable envia ao ERP e atualiza Integration_Status__c conforme resposta.",
    errors: "Encadear jobs infinitamente, nao registrar erro, batch scope grande demais, callout sem Named Credential e retry duplicando registro externo.",
    testing: "Use Test.startTest/stopTest, mocks de callout, volume por lote e cenarios de falha parcial.",
    done: "Job processa volume esperado, registra falhas, permite reprocessar e nao duplica efeitos externos.",
    avoid: "Nao use async para esconder logica mal modelada; usuario ainda precisa saber status e erro do processo.",
    metrics: "Fila async, falhas por job, tempo medio, retries, registros pendentes e throughput por lote.",
    security: "Jobs rodam em contexto especifico; registre origem e valide acesso quando atualiza dados sensiveis.",
    integration: "Async e indicado para callouts, eventos e sincronizacao eventual com sistemas externos."
  },
  "salesforce-apis": {
    scenario: "Expor ou consumir dados Salesforce por REST, SOAP, Bulk, Composite, Metadata, Tooling ou GraphQL.",
    problem: "Evita integracao frágil com chamadas excessivas, autenticação insegura e falta de idempotencia.",
    records: "Connected App, OAuth, REST API, Bulk API, Composite API, Change Data Capture, Platform Event e Named Credential.",
    fields: "External_Id__c, SystemModstamp, LastModifiedDate, Integration_Status__c, Correlation_Id__c e Error_Message__c.",
    automation: "OAuth flows, API limits monitoring, composite requests, bulk jobs, CDC subscribers e retry com backoff.",
    rule: "Escolha API pelo padrao: REST para operacao pontual, Bulk para volume, Composite para reduzir round trips e CDC/eventos para mudanca.",
    implementation: "Defina contrato, autenticacao, limites, mapeamento, chaves externas, tratamento de erro e monitoramento antes do go-live.",
    example: "Sistema externo faz upsert de Account por External_Id__c via REST e grava Correlation_Id__c para rastrear resposta.",
    errors: "Usar usuario admin para API, nao tratar 429/limite, criar duplicidade por falta de External ID e ignorar falhas parciais do Bulk.",
    testing: "Teste token expirado, payload invalido, duplicidade, volume, timeout e reprocessamento sem duplicar dados.",
    done: "Integracao e segura, observavel, idempotente, documentada e respeita limites de API.",
    avoid: "Nao use chamada sincrona quando processo tolera consistencia eventual e pode operar por evento ou lote.",
    metrics: "API calls, erros por status code, latencia, jobs Bulk, falhas parciais e eventos pendentes.",
    security: "Use Connected App, escopos minimos, Named Credentials, IP policies e usuario de integracao dedicado.",
    integration: "Defina ownership de dado e system of record para evitar atualizacoes conflitantes."
  },
  "enterprise-integration": {
    scenario: "Conectar Salesforce a ERP, billing, ecommerce, data lake, atendimento ou middleware com padrao corporativo.",
    problem: "Evita ponto a ponto sem ownership, sincronizacao duplicada e falhas sem rastreabilidade.",
    records: "Integration pattern, middleware, Platform Event, CDC, External Object, Outbound Message, API gateway e message queue.",
    fields: "External_Id__c, Source_System__c, Sync_Status__c, Last_Sync_At__c, Payload_Hash__c e Correlation_Id__c.",
    automation: "Event-driven integration, batch sync, request-reply, retries, dead-letter queue e monitoring.",
    rule: "Cada dado deve ter system of record, frequencia, SLA, regra de conflito e comportamento em falha.",
    implementation: "Desenhe contrato, mapeamento, autenticacao, volumetria, sequenciamento, logs e plano de reprocessamento.",
    example: "ERP envia status de pedido por evento; Salesforce atualiza Order_Status__c e nao permite editar valor fiscal.",
    errors: "Loop de atualizacao, falta de idempotencia, payload sem versao, retry sem limite e integracao sincrona em processo instavel.",
    testing: "Simule sistema fora, mensagem duplicada, payload antigo, volume alto e divergencia de dados.",
    done: "Falhas sao visiveis, reprocessaveis e nao exigem acesso direto ao banco para entender causa.",
    avoid: "Nao conecte tudo diretamente ao Salesforce quando middleware/API-led reduz acoplamento e facilita governanca.",
    metrics: "Throughput, latencia, mensagens em erro, retries, divergencias e disponibilidade do endpoint.",
    security: "Use credenciais segregadas, criptografia em transito, escopos minimos e auditoria de payload sensivel.",
    integration: "Padroes MuleSoft, eventos, CDC e Bulk devem ser escolhidos conforme volume e consistencia exigida."
  },
  "large-data-volumes": {
    scenario: "Org com milhoes de registros em Account, Case, Task, objetos customizados ou historico transacional.",
    problem: "Evita relatorios lentos, queries nao seletivas, sharing recalculation demorado e telas que travam.",
    records: "Large Data Volume objects, skinny tables, indexes, Big Objects, Async SOQL, archiving e divisions quando aplicavel.",
    fields: "CreatedDate, SystemModstamp, IsClosed, Status__c, External_Id__c, Partition_Key__c e campos indexaveis.",
    automation: "Selective queries, archival jobs, batch processing, criteria-based sharing review e data lifecycle policies.",
    rule: "Toda consulta em objeto grande precisa filtro seletivo e estrategia de arquivamento antes de crescer.",
    implementation: "Analise volumetria, cardinalidade, indices, sharing, relatorios criticos e politicas de retencao.",
    example: "Case historico fechado ha mais de 3 anos vai para arquivo, mantendo resumo em Salesforce e detalhe em data lake.",
    errors: "Filtro por campo nao indexado, lookup skew, owner skew, relatorio sem filtro de data e Flow varrendo registros antigos.",
    testing: "Teste query plan, carga representativa, relatorio principal, recalculo de sharing e batch em volume realista.",
    done: "Consultas criticas sao seletivas, dados antigos tem ciclo de vida e usuarios nao dependem de exportacao manual.",
    avoid: "Nao mantenha todo historico operacional no objeto transacional se ele so serve auditoria ou BI.",
    metrics: "Query cost, tempo de relatorio, volume por objeto, registros arquivados e falhas por timeout.",
    security: "Arquivamento deve preservar retencao legal, acesso e mascaramento de dados sensiveis.",
    integration: "Data lake, backup e ferramentas de archiving ajudam a separar operacao ativa de historico."
  },
  "identity-access-management": {
    scenario: "Usuarios internos, parceiros e clientes acessam Salesforce e portais por SSO, MFA e politicas de identidade.",
    problem: "Evita contas duplicadas, login inseguro, provisionamento manual e acesso externo sem governanca.",
    records: "User, Federation ID, Connected App, Auth Provider, SAML SSO, OAuth, Login History, Session e Identity Provider.",
    fields: "FederationIdentifier, Username, Email, IsActive, UserType, ProfileId, ContactId e SSO_Profile__c.",
    automation: "SSO, MFA, SCIM, Just-in-Time provisioning, Login Flow, session policies e connected app policies.",
    rule: "Identidade deve ter chave unica, ciclo de vida, MFA e remocao automatica quando usuario sai da empresa ou portal.",
    implementation: "Defina IdP, atributo federado, mapeamento de usuario, politicas de sessao, provisionamento e rollback de login.",
    example: "SAML usa FederationIdentifier = employeeNumber; SCIM remove permission sets quando colaborador muda de area.",
    errors: "Federation ID duplicado, JIT criando usuario errado, usuario externo sem ContactId e connected app com escopo amplo.",
    testing: "Teste login, logout, troca de senha, usuario desativado no IdP, MFA, perfil externo e acesso mobile.",
    done: "Acesso segue ciclo de vida corporativo, eventos de login sao auditaveis e excecoes sao temporarias.",
    avoid: "Nao mantenha login local para usuarios corporativos se SSO/MFA e provisionamento central existem.",
    metrics: "Falhas de login, usuarios sem MFA, contas inativas, acessos externos e apps conectados.",
    security: "Revise politicas de sessao, IP, refresh tokens, connected apps e permissoes de admins.",
    integration: "Integre IdP, HRIS, SCIM e ferramentas de auditoria para automatizar acesso."
  },
  "data-modeling-architecture": {
    scenario: "Arquitetar modelo de dados multi-cloud com objetos padrao, dados externos, ownership e reporting corporativo.",
    problem: "Evita modelo local de um time que impede integracao, compartilhamento ou expansao para outras nuvens.",
    records: "Canonical model, standard/custom objects, external objects, master data, junction objects e data dictionary.",
    fields: "Global_Id__c, Source_System__c, Data_Owner__c, Record_Lifecycle__c e Retention_Category__c.",
    automation: "Data governance, MDM alignment, duplicate management, lifecycle jobs e architecture review.",
    rule: "Decisao de modelo deve considerar ownership, cardinalidade, ciclo de vida, seguranca, reporting e integracao.",
    implementation: "Defina entidades, system of record, chaves, relacoes, visibilidade, volumes e estrategia de historico.",
    example: "Customer global usa Account como entidade CRM, ERP mantem billing account e Data Cloud unifica identidade.",
    errors: "Criar objeto custom para conceito padrao, nao definir chave global, ignorar volume e misturar dado mestre com transacao.",
    testing: "Valide cenarios cross-cloud, integracao, compartilhamento, relatorio e carga historica.",
    done: "Modelo sustenta processos atuais e evolucao sem duplicar entidade ou quebrar ownership.",
    avoid: "Nao desenhe modelo apenas por tela; desenhe por entidade de negocio e ciclo de vida.",
    metrics: "Entidades duplicadas, campos redundantes, integracoes por entidade, qualidade de dados e alteracoes estruturais.",
    security: "Inclua classificacao de dados, FLS, OWD, consentimento e retencao desde o desenho.",
    integration: "MDM, Data Cloud, ERP e lakehouse precisam compartilhar chaves e responsabilidade de dado."
  },
  "alm-architecture": {
    scenario: "Definir arquitetura de entrega para multiplos times Salesforce, pacotes, dependencias e ambientes.",
    problem: "Evita conflito de metadata, release manual, regressao e falta de rastreabilidade entre requisito e deploy.",
    records: "Git repository, package, unlocked package, scratch org, sandbox, pipeline, pull request e release artifact.",
    fields: "Package_Version__c, Branch__c, Work_Item__c, Deployment_Id__c e Environment__c.",
    automation: "CI/CD, static analysis, Apex tests, validation deploy, package versioning e environment promotion.",
    rule: "Arquitetura ALM deve separar fonte da verdade, ambiente de validacao e permissao de deploy.",
    implementation: "Defina monorepo ou repos por dominio, estrategia de package, branching, gates de qualidade e dependencia entre times.",
    example: "Core model em unlocked package separado; time de Service depende de versao aprovada antes de publicar console changes.",
    errors: "Metadata editada fora do Git, profile gigante em conflito, pacote sem criterio de dominio e teste ignorado para acelerar release.",
    testing: "Execute pipeline completo em sandbox limpa, valide dependencias, destructive changes e rollback.",
    done: "Deploy e repetivel, versionado, auditavel e independente de maquina local.",
    avoid: "Nao complique com packaging se a org e pequena e nao ha necessidade real de modularizacao.",
    metrics: "Lead time, failed deployments, conflitos de merge, defeitos pos-release e cobertura por pacote.",
    security: "Controle segredos, tokens, permissoes de deploy e acesso a sandboxes com dados.",
    integration: "Pipeline deve integrar Git, Salesforce CLI, ferramenta de demanda e notificacoes."
  },
  "vscode-cli": {
    scenario: "Desenvolvedor ou admin avancado gerencia metadata, recupera configuracoes e executa deploys com Salesforce CLI e VS Code.",
    problem: "Evita mudancas invisiveis feitas so pela UI e facilita versionamento, diff e automacao de deploy.",
    records: "SFDX project, org alias, package.xml, source format, metadata API, scratch org e auth URL.",
    fields: "force-app, manifest/package.xml, sfdx-project.json, project-scratch-def.json e .forceignore.",
    automation: "sf project retrieve/deploy, org login, Apex tests, SOQL query, data commands e scripts npm.",
    rule: "Tudo que for metadata relevante deve ser recuperavel, versionavel e implantavel por comando.",
    implementation: "Configure projeto, autentique orgs, defina manifest, recupere metadata, valide diff e use deploy check-only antes de producao.",
    example: "sf project retrieve start -x manifest/package.xml recupera Flow, CustomObject e PermissionSet para revisao em Git.",
    errors: "Recuperar metadata demais, esquecer .forceignore, deploy sem teste, alias errado e sobrescrever alteracao feita por outro time.",
    testing: "Rode retrieve/deploy em sandbox, confira git diff, execute Apex tests e valide metadata pela UI.",
    done: "Projeto reproduz metadata critica e comandos principais sem depender de configuracao local obscura.",
    avoid: "Nao use CLI sem processo de Git; comando rapido sem versionamento pode aumentar risco.",
    metrics: "Deploys por CLI, falhas de validacao, metadata sem versionamento e tempo de setup de dev.",
    security: "Proteja auth URLs, tokens, connected apps e arquivos locais com credenciais.",
    integration: "CLI e base para pipelines CI/CD e automacoes de qualidade."
  },
  "postman-apis": {
    scenario: "Testar APIs Salesforce, OAuth, Composite, Bulk e endpoints customizados antes de integrar sistema externo.",
    problem: "Evita debug cego em integracao e separa erro de autenticacao, payload, permissao ou regra de negocio.",
    records: "Connected App, OAuth token, REST resource, Composite request, Bulk job e Apex REST.",
    fields: "access_token, instance_url, externalId, attributes.type, allOrNone e request body fields.",
    automation: "Collections, environments, pre-request scripts, tests, token refresh e Newman em pipeline.",
    rule: "Toda chamada deve ter ambiente, autenticacao, payload exemplo, resposta esperada e teste de erro.",
    implementation: "Crie collection por dominio, variaveis por org, autentique OAuth, salve exemplos e documente status codes.",
    example: "PATCH /services/data/vXX.X/sobjects/Account/External_Id__c/123 atualiza Account por chave externa.",
    errors: "Usar token de usuario errado, enviar campo sem FLS, esquecer Content-Type, testar so happy path e nao salvar correlation id.",
    testing: "Teste 200/201, 400, 401, 403, duplicidade, payload incompleto, limite e resposta parcial.",
    done: "Collection reproduz integracao, explica erro e pode ser compartilhada com devs sem expor segredo.",
    avoid: "Nao use Postman como integracao produtiva; ele e ferramenta de teste/documentacao.",
    metrics: "Falhas por endpoint, tempo de resposta, status codes e cobertura de cenarios de API.",
    security: "Nao versionar tokens, client secret ou dados reais sensiveis em collections.",
    integration: "Use collections como contrato inicial para middleware, ERP ou apps externos."
  },
  "salesforce-inspector": {
    scenario: "Admin ou dev investiga dados, campos e queries rapidamente no navegador durante suporte ou configuracao.",
    problem: "Acelera diagnostico sem criar relatorio temporario para cada verificacao.",
    records: "Records, fields, SOQL queries, data export/import e metadata visibility pela extensao.",
    fields: "Id, RecordTypeId, OwnerId, CreatedDate, LastModifiedDate e campos ocultos no layout.",
    automation: "Export query, data import pontual, field inspection e comparacao rapida de valores.",
    rule: "Use para diagnostico e pequenos ajustes controlados, nunca para carga produtiva sem governanca.",
    implementation: "Abra registro, inspecione campos, rode SOQL seletivo, exporte amostra e confirme comportamento com usuario afetado.",
    example: "Consultar Case com Status, OwnerId, EntitlementId e Milestone_Status__c para entender SLA incorreto.",
    errors: "Alterar dado em producao sem ticket, exportar dados sensiveis, query ampla e confundir API name parecido.",
    testing: "Valide antes/depois do registro, compare com layout e confirme se automacao reagiu ao ajuste.",
    done: "Investigacao gera causa clara e, se houver ajuste, fica registrada no processo de suporte.",
    avoid: "Nao use como substituto de ferramenta de migracao, auditoria ou rotina automatizada.",
    metrics: "Consultas de suporte, ajustes manuais, exportacoes e incidentes por alteracao manual.",
    security: "Permitir extensao apenas para perfis autorizados e com cuidado com dados pessoais exportados.",
    integration: "Pode ajudar a validar dados recebidos de integracoes, mas nao deve operar integracao."
  },
  "workbench": {
    scenario: "Executar consultas, testar REST, visualizar metadata e fazer operacoes administrativas controladas.",
    problem: "Ajuda a diagnosticar API, metadata e dados quando a UI padrao nao mostra detalhes suficientes.",
    records: "SOQL, SOSL, REST Explorer, Metadata API, Bulk API, objects describe e session info.",
    fields: "Id, attributes, field metadata, picklist values, relationshipName e API version.",
    automation: "REST Explorer, queries, deploy/retrieve metadata e data operations pontuais.",
    rule: "Use Workbench com usuario e ambiente corretos, entendendo que operacoes podem alterar dados reais.",
    implementation: "Selecione sandbox/producao conscientemente, rode query seletiva, valide API version e salve evidencias do resultado.",
    example: "GET /services/data/vXX.X/sobjects/Opportunity/describe para verificar campos, FLS e picklists esperados.",
    errors: "Entrar em producao por engano, executar delete/update sem backup, usar API version errada e nao considerar permissoes do usuario.",
    testing: "Repita chamada com usuario de integracao, compare resposta com Postman e valide mudanca na UI.",
    done: "Diagnostico ou operacao fica documentado com endpoint, usuario, ambiente e resultado.",
    avoid: "Nao use Workbench para rotina operacional frequente ou carga de alto volume sem ferramenta apropriada.",
    metrics: "Chamadas de diagnostico, erros de API, operacoes manuais e tempo de resolucao.",
    security: "Acesso deve ser restrito, pois a ferramenta permite operacoes poderosas com sessao do usuario.",
    integration: "Workbench e util para investigar contrato de API usado por sistemas externos."
  },
  "data-loader": {
    scenario: "Carregar, atualizar, excluir ou exportar milhares de registros com controle de sucesso e erro.",
    problem: "Evita edicao manual massiva e permite upsert por External ID com arquivos rastreaveis.",
    records: "CSV, Data Loader, Bulk API, External ID, success/error files e object mappings.",
    fields: "Id, External_Id__c, OwnerId, RecordTypeId, CreatedDate, required fields e lookup external ids.",
    automation: "Insert, update, upsert, delete, hard delete, export e command line Data Loader.",
    rule: "Toda carga deve ter backup, mapping salvo, amostra testada e plano de tratamento dos erros.",
    implementation: "Prepare CSV, normalize valores, valide obrigatorios, teste sandbox, execute lote e reconcilie resultados.",
    example: "Upsert de Contacts por Legacy_Contact_Id__c associando Account por Account.External_Id__c.",
    errors: "CSV com encoding errado, lookup nao encontrado, picklist invalida, owner inativo e automacao disparando emails indevidos.",
    testing: "Cargue 10 registros, valide campos, relacoes, automacoes e arquivos de erro antes do volume total.",
    done: "Quantidade inserida/atualizada confere, erros foram corrigidos e impacto em relatorios foi validado.",
    avoid: "Nao use Data Loader para integracao frequente em tempo real; prefira API/middleware.",
    metrics: "Registros processados, erro por tipo, tempo de carga, duplicidades e rollback necessario.",
    security: "Proteja CSVs com dados sensiveis e limite permissao de Bulk API/Delete.",
    integration: "External IDs devem alinhar Data Loader, integracoes e migracoes historicas."
  },
  "devops-center": {
    scenario: "Times administram mudancas declarativas com rastreabilidade entre work item, ambiente, GitHub e deploy.",
    problem: "Reduz dependencia de Change Sets e melhora visibilidade de metadata alterada por demanda.",
    records: "Work Item, Project, Pipeline Stage, GitHub branch, metadata changes e deployment.",
    fields: "Work_Item_Status__c, Source_Org__c, Target_Org__c, Commit_Id__c e Deployment_Result__c.",
    automation: "Change tracking, promotion pipeline, GitHub integration, validation e deploy por estagio.",
    rule: "Mudanca deve ser associada a work item e promovida por ambientes, nao copiada manualmente sem contexto.",
    implementation: "Configure projeto, conecte repositorio, defina ambientes, associe work items e promova mudancas com revisao.",
    example: "Novo Flow de Case e Permission Set entram no mesmo work item e sao promovidos de dev para UAT.",
    errors: "Misturar mudancas nao relacionadas, esquecer dependencia, editar diretamente no destino e nao revisar diff.",
    testing: "Valide em UAT, confira metadata capturada, execute testes e revise resultado do deploy.",
    done: "Demanda possui metadata, commit, ambiente, status e historico de deploy rastreaveis.",
    avoid: "Nao use sem disciplina de ambientes; DevOps Center nao corrige processo de release indefinido.",
    metrics: "Work items por release, falhas de deploy, tempo de promocao e mudancas fora do fluxo.",
    security: "Controle acesso a projetos, repositorio, ambientes e capacidade de promover para producao.",
    integration: "Integra com GitHub e pode coexistir com processos CI/CD mais avancados."
  },
  "git-github": {
    scenario: "Versionar metadata, Apex, LWC, scripts e documentacao para colaborar sem sobrescrever trabalho de outros.",
    problem: "Evita perda de historico, deploy sem revisao e configuracao alterada sem autoria.",
    records: "Repository, branch, commit, pull request, tag, release, CODEOWNERS e GitHub Actions.",
    fields: "commit hash, branch name, package.xml, metadata paths e work item id.",
    automation: "Pull requests, code review, branch protection, CI checks, static analysis e release tags.",
    rule: "Toda mudanca relevante deve passar por branch, diff revisado e vinculo com demanda.",
    implementation: "Defina estrategia de branches, padrao de commit, reviewers, checks obrigatorios e politicas de merge.",
    example: "feature/case-sla-flow altera Flow metadata e PermissionSet, revisado por admin e dev antes do merge.",
    errors: "Commitar segredo, resolver conflito sem entender metadata XML, branch longa demais e merge direto na main.",
    testing: "Abra PR, rode pipeline, confira diff de metadata e valide deploy em sandbox.",
    done: "Historico explica o que mudou, por que mudou, quem revisou e em qual release entrou.",
    avoid: "Nao use Git apenas como backup manual; sem PR e processo, o ganho e limitado.",
    metrics: "PRs, tempo de review, conflitos, checks falhos e hotfixes.",
    security: "Proteja branches, segredos, tokens e permissoes de administradores do repositorio.",
    integration: "Git conecta CLI, DevOps Center, CI/CD e ferramentas de demanda."
  },
  "developer-console": {
    scenario: "Debug rapido de Apex, SOQL, logs e execucao anonima diretamente na org.",
    problem: "Ajuda a investigar comportamento sem configurar ambiente local completo.",
    records: "Apex Log, Execute Anonymous, Query Editor, Apex Test, checkpoints e heap dump.",
    fields: "DebugLevel, LogUserId, Operation, Request, DurationMilliseconds e Status.",
    automation: "Trace flags, log levels, anonymous Apex, test runner e query editor.",
    rule: "Use para diagnostico controlado; alteracoes permanentes devem ir para fonte versionada.",
    implementation: "Crie trace flag, reproduza erro, filtre log, rode query e isole trecho de Apex ou Flow envolvido.",
    example: "Executar SOQL de Case e analisar log de trigger que recalcula SLA ao alterar Priority.",
    errors: "Executar anonymous Apex em producao sem criterio, log grande demais, debug level excessivo e alterar dado real por teste.",
    testing: "Reproduza com usuario afetado, compare antes/depois e confirme no log quais automacoes executaram.",
    done: "Causa raiz identificada e correcao planejada em Git/ALM, nao apenas ajuste manual.",
    avoid: "Nao use Developer Console como IDE principal para desenvolvimento colaborativo.",
    metrics: "Logs por incidente, tempo de diagnostico, erros Apex e testes executados.",
    security: "Restrinja acesso a quem pode executar Apex e visualizar logs com dados sensiveis.",
    integration: "Logs ajudam a correlacionar falhas de API, eventos e jobs async."
  },
  "setup-audit-trail": {
    scenario: "Auditar quem alterou configuracao, permissao, automacao ou metadata em uma org.",
    problem: "Ajuda a explicar incidentes apos mudanca e detectar alteracoes fora do processo de release.",
    records: "SetupAuditTrail, metadata changes, user changes, security settings e deployment history.",
    fields: "Action, CreatedBy, CreatedDate, Section, Display e DelegateUser.",
    automation: "Export periodico, revisao de mudancas, comparacao com release notes internas e alertas.",
    rule: "Mudanca de setup deve ter demanda correspondente; excecoes precisam de justificativa.",
    implementation: "Revise audit trail apos releases, filtre acoes criticas, exporte evidencias e relacione com incidentes.",
    example: "Alteracao em Validation Rule de Opportunity aparece antes de falha na conversao comercial.",
    errors: "Confiar apenas no audit trail para versionamento, nao exportar historico e ignorar mudancas feitas por usuarios admins.",
    testing: "Faça mudanca controlada em sandbox e confirme registro no audit trail com usuario e horario.",
    done: "Mudancas criticas sao rastreadas, explicadas e comparadas com processo oficial de release.",
    avoid: "Nao use como substituto de Git/ALM; ele mostra que mudou, nao guarda design completo.",
    metrics: "Mudancas fora da janela, admins ativos, alteracoes criticas e incidentes correlacionados.",
    security: "Restrinja quem pode ver e exportar trilha de auditoria.",
    integration: "Pode alimentar SIEM/GRC ou evidencias de auditoria corporativa."
  },
  "apex-replay-debugger": {
    scenario: "Depurar execucao Apex usando logs para entender variaveis, caminhos e excecoes sem repetir manualmente cada passo.",
    problem: "Acelera analise de bug complexo em trigger, batch ou chamada Apex com estado intermediario dificil de enxergar.",
    records: "Apex Debug Log, Replay Debugger, breakpoints, checkpoints, Apex classes e triggers.",
    fields: "Log levels, variable state, line number, exception stack e execution unit.",
    automation: "VS Code Salesforce Extensions, trace flags, replay session e log download.",
    rule: "Log deve ser gerado com nivel adequado e cenario reproduzivel; sem isso replay vira ruido.",
    implementation: "Configure trace flag, reproduza problema, baixe log, abra replay e acompanhe variaveis nos pontos criticos.",
    example: "Replay mostra que Discount__c vem null antes da validacao de margem em OpportunityTriggerHandler.",
    errors: "Log truncado, nivel fino demais, cenario nao reproduzido, classe diferente da versao local e variavel otimizada sem visibilidade.",
    testing: "Reproduza em sandbox, compare log com teste unitario e crie assert para a causa encontrada.",
    done: "Causa raiz vira teste automatizado e correcao versionada.",
    avoid: "Nao use replay para investigar problema de configuracao simples que Flow Debug ou audit trail mostram melhor.",
    metrics: "Bugs reproduzidos, logs truncados, tempo de debug e cobertura de testes corrigida.",
    security: "Logs podem conter dados sensiveis; controle download e compartilhamento.",
    integration: "Util para diagnosticar falhas em Apex chamado por APIs, eventos ou jobs async."
  },
  "copado-gearset": {
    scenario: "Gerenciar releases Salesforce com comparacao de metadata, pipeline, testes, qualidade e rollback assistido.",
    problem: "Reduz risco de deploy manual, dependencias esquecidas e falta de controle em orgs com muitas mudancas.",
    records: "Deployment, user story, metadata diff, org comparison, validation, back promotion e quality gate.",
    fields: "Deployment_Status__c, Source_Org__c, Target_Org__c, Test_Level__c e Story_Id__c.",
    automation: "Pipelines, static code analysis, org comparison, automated tests, promotion e backup.",
    rule: "Mudanca deve ser promovida por pipeline com diff revisado, testes e dependencias incluidas.",
    implementation: "Conecte orgs, defina pipeline, vincule historias, compare metadata, valide deploy e faça back promotion.",
    example: "Gearset identifica que Flow depende de Custom Field e Permission Set ausentes no pacote de deploy.",
    errors: "Promover mudanca sem back promotion, aceitar diff sem revisar, ignorar destructive changes e misturar historias sem relacao.",
    testing: "Valide deploy, rode testes Apex, faça comparacao pos-deploy e teste usuario final.",
    done: "Release tem pacote rastreavel, validado, promovido e alinhado entre ambientes.",
    avoid: "Nao compre ferramenta para compensar ausencia total de processo; primeiro defina governanca.",
    metrics: "Falhas de deploy, tempo de release, historias por pacote, conflitos e back promotions pendentes.",
    security: "Controle conexoes com orgs, permissoes de deploy e acesso a metadata sensivel.",
    integration: "Integra com Git, Jira/Azure DevOps e pipelines corporativos."
  },
  "mulesoft-anypoint": {
    scenario: "Criar camada de APIs reutilizaveis para conectar Salesforce, ERP, legado, bancos de dados e canais digitais.",
    problem: "Evita integracoes ponto a ponto, contratos inconsistentes e regras de orquestracao espalhadas por sistemas.",
    records: "System API, Process API, Experience API, RAML/OAS spec, connector, flow, policy e Anypoint Exchange asset.",
    fields: "correlationId, clientId, externalId, statusCode, payload version e errorCode.",
    automation: "API Manager, policies, Runtime Manager, Anypoint MQ, DataWeave transformations e monitoring.",
    rule: "System APIs encapsulam sistemas, Process APIs orquestram regras e Experience APIs adaptam consumo por canal.",
    implementation: "Modele contrato, publique no Exchange, configure policies, implemente transformacoes e monitore erros por correlationId.",
    example: "Experience API de portal chama Process API de pedido, que consulta Salesforce e ERP via System APIs separadas.",
    errors: "Colocar regra de canal na System API, nao versionar contrato, transformar payload sem testes e nao tratar retry/idempotencia.",
    testing: "Teste contrato, payload invalido, sistema legado fora, performance, policy de seguranca e tracing ponta a ponta.",
    done: "API e reutilizavel, documentada, monitorada, versionada e desacoplada do consumidor final.",
    avoid: "Nao use MuleSoft para automacao simples interna do Salesforce que Flow/Apex resolve sem integracao corporativa.",
    metrics: "Throughput, latencia, erros por API, reutilizacao de assets, disponibilidade e mensagens em fila.",
    security: "Use policies, client credentials, TLS, mascaramento de logs e controle de acesso ao Exchange.",
    integration: "Anypoint conecta Salesforce por conectores, APIs, eventos e padroes API-led."
  }
};

const profileFor = (guide: GuideItem): GuideContentProfile => guideProfiles[guide.id] ?? {
  scenario: `Uso real de ${guideTitle(guide, "pt")} em uma org Salesforce com usuarios, dados, automacoes e governanca envolvidos.`,
  problem: `Resolve um problema operacional especifico que nao deve ser tratado apenas como configuracao generica de plataforma.`,
  records: `Objetos, campos, permissoes, automacoes e relatorios relacionados a ${guideTitle(guide, "pt")}.`,
  fields: `Campos de status, owner, record type, identificadores externos, datas de controle e campos obrigatorios do processo.`,
  automation: `Flow, regras de validacao, permissoes, relatorios e integracoes conforme o comportamento esperado.`,
  rule: `A regra de negocio precisa ser explicita, testavel e documentada antes da configuracao.`,
  implementation: `Mapeie o processo, configure em sandbox, teste com usuarios reais e publique com plano de rollback.`,
  example: `Use API names, valores de exemplo e registros reais de teste para validar ${guideTitle(guide, "pt")}.`,
  errors: `Erros comuns incluem automacao duplicada, permissoes amplas, campos obrigatorios sem governanca e relatorios sem filtro correto.`,
  testing: `Teste perfil restrito, volume, erro, caminho feliz e impacto em relatorios ou integracoes.`,
  done: `A implementacao esta concluida quando usuario, suporte e lideranca conseguem operar e medir o processo sem ajuste manual recorrente.`,
  avoid: `Nao utilize quando o problema e apenas falta de processo, ownership ou qualidade minima de dados.`,
  metrics: `Acompanhe adocao, erros, registros incompletos, tempo de ciclo e uso real.`,
  security: `Valide CRUD, FLS, sharing, perfis, permission sets e dados sensiveis.`,
  integration: `Defina origem, destino, frequencia, chave externa e tratamento de erro quando houver sistemas externos.`
};

type GuideProfileField = keyof GuideContentProfile;

const localizedProfileField = (
  guide: GuideItem,
  profile: GuideContentProfile,
  field: GuideProfileField
): LocString => {
  const title = {
    pt: guideTitle(guide, "pt"),
    en: guideTitle(guide, "en"),
    es: guideTitle(guide, "es")
  };

  const translated: Record<GuideProfileField, { en: string; es: string }> = {
    scenario: {
      en: `Real use of ${title.en} in a Salesforce org involving users, data, automation, and governance.`,
      es: `Uso real de ${title.es} en una org Salesforce con usuarios, datos, automatizaciones y gobernanza.`
    },
    problem: {
      en: `Solves a specific operational problem that should not be treated as only a generic platform configuration.`,
      es: `Resuelve un problema operativo especifico que no debe tratarse solo como una configuracion generica de plataforma.`
    },
    records: {
      en: `Objects, fields, permissions, automations, and reports related to ${title.en}.`,
      es: `Objetos, campos, permisos, automatizaciones e informes relacionados con ${title.es}.`
    },
    fields: {
      en: `Status fields, owner, record type, external identifiers, control dates, and required process fields.`,
      es: `Campos de estado, owner, record type, identificadores externos, fechas de control y campos obligatorios del proceso.`
    },
    automation: {
      en: `Flow, validation rules, permissions, reports, and integrations according to the expected behavior.`,
      es: `Flow, reglas de validacion, permisos, informes e integraciones segun el comportamiento esperado.`
    },
    rule: {
      en: `The business rule must be explicit, testable, and documented before configuration.`,
      es: `La regla de negocio debe ser explicita, comprobable y documentada antes de la configuracion.`
    },
    implementation: {
      en: `Map the process, configure it in a sandbox, test with real users, and publish with a rollback plan.`,
      es: `Mapea el proceso, configuralo en sandbox, prueba con usuarios reales y publica con un plan de rollback.`
    },
    example: {
      en: `Use API names, sample values, and realistic test records to validate ${title.en}.`,
      es: `Usa API names, valores de ejemplo y registros de prueba realistas para validar ${title.es}.`
    },
    errors: {
      en: `Common mistakes include duplicated automation, broad permissions, required fields without governance, and reports without the correct filters.`,
      es: `Errores comunes incluyen automatizacion duplicada, permisos amplios, campos obligatorios sin gobernanza e informes sin filtros correctos.`
    },
    testing: {
      en: `Test restricted profiles, volume, error paths, the happy path, and impact on reports or integrations.`,
      es: `Prueba perfiles restringidos, volumen, rutas de error, camino feliz e impacto en informes o integraciones.`
    },
    done: {
      en: `The implementation is complete when users, support, and leadership can operate and measure the process without recurring manual fixes.`,
      es: `La implementacion esta completa cuando usuarios, soporte y liderazgo pueden operar y medir el proceso sin ajustes manuales recurrentes.`
    },
    avoid: {
      en: `Do not use it when the real problem is missing process, ownership, or minimum data quality.`,
      es: `No lo uses cuando el problema real sea falta de proceso, ownership o calidad minima de datos.`
    },
    metrics: {
      en: `Track adoption, errors, incomplete records, cycle time, and real usage.`,
      es: `Acompana adopcion, errores, registros incompletos, tiempo de ciclo y uso real.`
    },
    security: {
      en: `Validate CRUD, FLS, sharing, profiles, permission sets, and sensitive data.`,
      es: `Valida CRUD, FLS, sharing, perfiles, permission sets y datos sensibles.`
    },
    integration: {
      en: `Define source, target, frequency, external key, and error handling when external systems are involved.`,
      es: `Define origen, destino, frecuencia, clave externa y manejo de errores cuando haya sistemas externos.`
    }
  };

  return {
    pt: profile[field],
    en: translated[field].en,
    es: translated[field].es
  };
};

const profileText = (
  guide: GuideItem,
  profile: GuideContentProfile,
  field: GuideProfileField,
  locale: Locale
) => localizedProfileField(guide, profile, field)[locale
];
