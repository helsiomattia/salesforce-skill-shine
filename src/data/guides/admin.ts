import type { GuideItem } from "./types";

export const adminGuides: GuideItem[] = [
  {
    id: "sharing-security",
    category: "admin",
    title: {
      pt: "Segurança & Compartilhamento",
      en: "Security & Sharing Model",
      es: "Seguridad y Uso Compartido"
    },
    subtitle: {
      pt: "Arquitetura de Segurança de Dados e Acesso",
      en: "Data Access and Security Architecture",
      es: "Arquitectura de Seguridad de Datos y Acceso"
    },
    description: {
      pt: "O modelo de segurança em camadas do Salesforce, controlando acesso do nível da organização até campos e registros individuais.",
      en: "Salesforce's layered security model, controlling data access from the Org-level down to fields and specific rows.",
      es: "El modelo de seguridad por capas de Salesforce, controlando el acceso desde la organización hasta campos y registros individuales."
    },
    iconName: "Shield",
    tags: {
      pt: ["Segurança", "Governança", "Administração"],
      en: ["Security", "Governance", "Admin"],
      es: ["Seguridad", "Gobernanza", "Administración"]
    },
    keyConcepts: [
      {
        title: {
          pt: "OWD (Organization-Wide Defaults)",
          en: "Organization-Wide Defaults (OWD)",
          es: "Valores predeterminados de la organización (OWD)"
        },
        description: {
          pt: "Configuração base que determina o nível de acesso padrão que o usuário mais restrito possui sobre os registros que ele não é o dono.",
          en: "The baseline level of access that users have to records they do not own (e.g., Private, Public Read-Only, Public Read/Write).",
          es: "Configuración básica que define el acceso por defecto a los registros que un usuario no posee (Privado, Público Solo Lectura, Público Lectura/Escritura)."
        }
      },
      {
        title: {
          pt: "Hierarquia de Papéis vs Perfis/Permissões",
          en: "Role Hierarchy vs Profiles/Permissions",
          es: "Jerarquía de Roles vs Perfiles/Permisos"
        },
        description: {
          pt: "Perfis e Permission Sets controlam o QUE um usuário pode fazer (ver objeto, editar campos). A Hierarquia de Papéis e Regras de Compartilhamento controlam QUAIS registros ele pode visualizar ou editar.",
          en: "Profiles and Permission Sets control WHAT actions a user can perform (object/field access). Role Hierarchy and Sharing Rules control WHICH records they can see.",
          es: "Los perfiles y conjuntos de permisos definen QUÉ puede hacer un usuario. La jerarquía de roles y las reglas de uso compartido definen QUÉ registros puede ver."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Sempre configure o OWD para a opção mais restritiva possível (geralmente Private) e abra acessos de forma incremental.",
        "Migre acessos de perfis para Permission Sets e Permission Set Groups (a prática moderna recomendada pela Salesforce)."
      ],
      en: [
        "Always set OWDs to the most restrictive level (usually Private) and open up access gradually.",
        "Leverage Permission Sets and Permission Set Groups instead of cloning profiles (Salesforce best practice)."
      ],
      es: [
        "Configure siempre el OWD lo más restrictivo posible (generalmente Privado) y abra acceso gradualmente.",
        "Utilice conjuntos de permisos y grupos en lugar de perfiles para otorgar accesos funcionales."
      ]
    },
    resources: [
      {
        title: {
          pt: "Segurança de Dados no Trailhead",
          en: "Data Security Module on Trailhead",
          es: "Módulo de seguridad de datos en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/data_security",
        type: "trailhead"
      }
    ]
  },
  {
    id: "flows",
    category: "admin",
    title: {
      pt: "Salesforce Flows",
      en: "Salesforce Flows",
      es: "Salesforce Flows"
    },
    subtitle: {
      pt: "Automação Declarativa Avançada",
      en: "Advanced Declarative Automation",
      es: "Automatización Declarativa Avanzada"
    },
    description: {
      pt: "A principal ferramenta declarativa do Salesforce para construir telas e automações guiadas por eventos ou registros.",
      en: "Salesforce's primary declarative tool for building screen-based forms and event/record-driven automation.",
      es: "La principal herramienta declarativa de Salesforce para crear pantallas y automatizaciones guiadas por eventos o registros."
    },
    iconName: "Zap",
    tags: {
      pt: ["Automação", "Low-Code", "Administração"],
      en: ["Automation", "Low-Code", "Admin"],
      es: ["Automatización", "Low-Code", "Administración"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Fast Field Updates (Before-Save)",
          en: "Fast Field Updates (Before-Save)",
          es: "Fast Field Updates (Before-Save)"
        },
        description: {
          pt: "Fluxos executados antes do registro ser salvo no banco de dados. São até 10x mais rápidos e ideais para atualizar campos do próprio registro.",
          en: "Flows that execute before the record is saved to the database. They run up to 10x faster and are ideal for updating fields on the same record.",
          es: "Flujos ejecutados antes de guardar el registro. Son hasta 10 veces más rápidos e ideales para actualizar campos del mismo registro."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Use o padrão 'Fast Field Updates' para validações e preenchimentos rápidos de campos no mesmo registro.",
        "Mantenha uma estratégia clara de orquestração de fluxos por objeto."
      ],
      en: [
        "Use 'Fast Field Updates' for simple same-record field updates to improve performance.",
        "Implement a clear flow trigger design pattern (orchestration) per object to prevent conflicting logic."
      ],
      es: [
        "Utilice 'Fast Field Updates' para actualizaciones simples del mismo registro para mejorar el rendimiento.",
        "Implemente un patrón claro de orquestación por objeto para evitar lógica de automatización conflictiva."
      ]
    },
    resources: [
      {
        title: {
          pt: "Fundamentos de Construtor de Fluxos",
          en: "Flow Builder Basics on Trailhead",
          es: "Conceptos básicos de Flow Builder en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/business_process_automation",
        type: "trailhead"
      }
    ]
  },
  {
    id: "reports-dashboards",
    category: "admin",
    title: {
      pt: "Relatórios & Painéis (Analytics)",
      en: "Reports & Dashboards (Analytics)",
      es: "Informes y Paneles (Analytics)"
    },
    subtitle: {
      pt: "Geração de Insights de Negócio de Forma Declarativa",
      en: "Generating Business Insights Declaratively",
      es: "Generación de Insights de Negocios de Forma Declarativa"
    },
    description: {
      pt: "Ferramenta integrada de análise no Salesforce, permitindo extrair dados em formato de lista (Tabular), agrupados (Summary) ou bidimensional (Matrix), para depois representá-los graficamente em Dashboards.",
      en: "Salesforce's built-in reporting engine allowing data extraction in list format (Tabular), grouped (Summary), or multi-dimensional grid (Matrix), visualized dynamically inside shared Dashboards.",
      es: "Motor de análisis incorporado de Salesforce para extraer datos en formato tabular, agrupado (Summary) o bidimensional (Matrix), representándolos visualmente en paneles dinámicos."
    },
    iconName: "TrendingUp",
    tags: {
      pt: ["Relatórios", "Analytics", "Admin"],
      en: ["Reports", "Analytics", "Admin"],
      es: ["Informes", "Analytics", "Administración"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Tipos de Relatório Personalizados (CRT)",
          en: "Custom Report Types (CRT)",
          es: "Tipos de Informes Personalizados (CRT)"
        },
        description: {
          pt: "Modelos que definem quais objetos e campos estarão disponíveis no assistente de relatório. Determinam relações do tipo 'A com B' (Inner Join) ou 'A com ou sem B' (Left Outer Join).",
          en: "Templates defining which objects and fields are available during report creation, establishing relationships like 'A with B' or 'A with or without B'.",
          es: "Plantillas que definen qué objetos y campos están disponibles al crear un informe, permitiendo relaciones como 'A con B' o 'A con o sin B'."
        }
      },
      {
        title: {
          pt: "Filtros de Segurança & Pastas",
          en: "Security Filters & Folders",
          es: "Filtros de Seguridad y Carpetas"
        },
        description: {
          pt: "O acesso de dados nos relatórios respeita estritamente o modelo de compartilhamento do usuário. A visibilidade do relatório em si é gerenciada em pastas compartilhadas com usuários, papéis ou grupos públicos.",
          en: "Data visibility within reports strictly respects the user sharing model. Visibility to the report files themselves is managed at the folder level.",
          es: "La visibilidad de los datos en los informes respeta el modelo de seguridad. El acceso al informe en sí se controla mediante permisos en carpetas compartidas."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Prefira usar Tipos de Relatórios Padrão a menos que precise cruzar dados com regras específicas de junção externa.",
        "Use campos de fórmula resumida nos relatórios (Summary Formulas) para fazer cálculos matemáticos dinâmicos sem alterar o banco de dados."
      ],
      en: [
        "Prefer Standard Report Types unless custom outer join relationships are required.",
        "Leverage Summary Formulas in reports to perform dynamic calculations on grouped data without creating fields."
      ],
      es: [
        "Prefiera Tipos de Informes Estándar a menos que necesite relaciones de combinación externa personalizadas.",
        "Utilice fórmulas de resumen en los informes para cálculos dinámicos de datos agrupados."
      ]
    },
    resources: [
      {
        title: {
          pt: "Quick Look de Relatórios & Dashboards",
          en: "Reports & Dashboards Quick Look on Trailhead",
          es: "Vistazo rápido de Informes y Paneles en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_reports_dashboards",
        type: "trailhead"
      }
    ]
  },
  {
    id: "data-management",
    category: "admin",
    title: {
      pt: "Gestão de Dados",
      en: "Data Management",
      es: "Gestión de Datos"
    },
    subtitle: {
      pt: "Importação, Exportação e Qualidade de Dados",
      en: "Import, Export, and Data Quality",
      es: "Importación, Exportación y Calidad de Datos"
    },
    description: {
      pt: "Ferramentas e práticas para manter os dados limpos, precisos e atualizados usando Data Import Wizard, Data Loader e regras de validação.",
      en: "Tools and practices to keep data clean, accurate, and up-to-date using Data Import Wizard, Data Loader, and validation rules.",
      es: "Herramientas y prácticas para mantener los datos limpios, precisos y actualizados mediante Data Import Wizard, Data Loader y reglas de validación."
    },
    iconName: "Database",
    tags: {
      pt: ["Dados", "Admin", "Qualidade"],
      en: ["Data", "Admin", "Quality"],
      es: ["Datos", "Admin", "Calidad"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Data Import Wizard vs Data Loader",
          en: "Data Import Wizard vs Data Loader",
          es: "Data Import Wizard vs Data Loader"
        },
        description: {
          pt: "O Data Import Wizard suporta até 50 mil registros e é embutido na plataforma. O Data Loader é um aplicativo cliente para grandes volumes (até 5 milhões) e suporta todos os objetos.",
          en: "Data Import Wizard handles up to 50k records and is built-in. Data Loader is a client application for large volumes (up to 5M) and supports all objects.",
          es: "Data Import Wizard admite hasta 50.000 registros y está integrado. Data Loader es un cliente para grandes volúmenes (hasta 5M) y admite todos los objetos."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Sempre faça backup de dados antes de executar atualizações ou exclusões em massa.",
        "Utilize regras de validação (Validation Rules) na entrada de dados para evitar lixo no banco de dados."
      ],
      en: [
        "Always back up data before performing mass updates or deletions.",
        "Use Validation Rules at data entry points to prevent garbage data from entering the system."
      ],
      es: [
        "Siempre haga una copia de seguridad de los datos antes de actualizaciones o eliminaciones masivas.",
        "Utilice reglas de validación en la entrada de datos para evitar datos basura en la base de datos."
      ]
    },
    resources: [
      {
        title: {
          pt: "Módulo de Gestão de Dados",
          en: "Data Management Module",
          es: "Módulo de Gestión de Datos"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_data_management",
        type: "trailhead"
      }
    ]
  },
  {
    id: "user-management",
    category: "admin",
    title: {
      pt: "Gestão de Usuários",
      en: "User Management",
      es: "Gestión de Usuarios"
    },
    subtitle: {
      pt: "Criação, Manutenção e Licenciamento de Usuários",
      en: "User Creation, Maintenance, and Licensing",
      es: "Creación, Mantenimiento y Licencias de Usuarios"
    },
    description: {
      pt: "Gerencie o acesso ao Salesforce controlando contas de usuários, licenças, políticas de senha e delegação de administração.",
      en: "Manage Salesforce access by controlling user accounts, licenses, password policies, and delegated administration.",
      es: "Administre el acceso a Salesforce controlando cuentas de usuario, licencias, políticas de contraseña y administración delegada."
    },
    iconName: "Users",
    tags: {
      pt: ["Usuários", "Licenças", "Acesso"],
      en: ["Users", "Licenses", "Access"],
      es: ["Usuarios", "Licencias", "Acceso"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Desativar vs Excluir",
          en: "Deactivate vs Delete",
          es: "Desactivar vs Eliminar"
        },
        description: {
          pt: "Usuários não podem ser excluídos no Salesforce porque podem estar vinculados a registros históricos. Em vez disso, eles são desativados para liberar a licença.",
          en: "Users cannot be deleted in Salesforce because they may be tied to historical records. Instead, they are deactivated to free up the license.",
          es: "Los usuarios no se pueden eliminar en Salesforce porque pueden estar vinculados a registros históricos. En su lugar, se desactivan para liberar la licencia."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Use a Delegação Administrativa para permitir que usuários de negócio gerenciem a criação de usuários sem acesso total de sistema.",
        "Desative imediatamente usuários que saírem da empresa para manter a segurança e recuperar a licença."
      ],
      en: [
        "Use Delegated Administration to allow business users to manage user creation without full system access.",
        "Immediately deactivate users who leave the company to maintain security and reclaim the license."
      ],
      es: [
        "Utilice la Administración Delegada para permitir a usuarios de negocios gestionar la creación de usuarios sin acceso total al sistema.",
        "Desactive inmediatamente a los usuarios que dejan la empresa para mantener la seguridad y recuperar la licencia."
      ]
    },
    resources: [
      {
        title: {
          pt: "Fundamentos de Gestão de Usuários",
          en: "User Management Basics",
          es: "Conceptos básicos de gestión de usuarios"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/lex_implementation_user_setup_manage",
        type: "trailhead"
      }
    ]
  },

  // --- DEV ---
];
