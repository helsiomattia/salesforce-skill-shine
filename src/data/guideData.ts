import { LocString, LocStringArray } from "./competencies/types";

export interface KeyConcept {
  title: LocString;
  description: LocString;
  codeSnippet?: string;
  codeLanguage?: string;
}

export interface ResourceLink {
  title: LocString;
  url: string;
  type: "trailhead" | "doc" | "video" | "article";
}

export interface GuideItem {
  id: string;
  category: "clouds" | "foundations" | "admin" | "dev" | "architect" | "tools";
  title: LocString;
  subtitle: LocString;
  description: LocString;
  iconName: string;
  tags: LocStringArray;
  keyConcepts: KeyConcept[];
  implementationGuide?: KeyConcept[];
  bestPractices: LocStringArray;
  realUseCases?: LocStringArray;
  resources: ResourceLink[];
}

const baseGuides: GuideItem[] = [
  // --- CLOUDS ---
  {
    id: "sales-cloud",
    category: "clouds",
    title: {
      pt: "Sales Cloud",
      en: "Sales Cloud",
      es: "Sales Cloud"
    },
    subtitle: {
      pt: "Gestão do Funil de Vendas e Lead-to-Cash",
      en: "Sales Pipeline and Lead-to-Cash Management",
      es: "Gestión del Embudo de Ventas y Lead-to-Cash"
    },
    description: {
      pt: "O núcleo do CRM focado em impulsionar o ciclo de vendas, gerenciar leads, oportunidades e previsões de receita.",
      en: "The core CRM cloud focused on driving the sales lifecycle, managing leads, opportunities, and forecasting revenue.",
      es: "El núcleo de CRM enfocado en impulsar el ciclo de ventas, gestionar leads, oportunidades y pronósticos de ingresos."
    },
    iconName: "TrendingUp",
    tags: {
      pt: ["Vendas", "Core CRM", "B2B"],
      en: ["Sales", "Core CRM", "B2B"],
      es: ["Ventas", "Core CRM", "B2B"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Conversão de Leads",
          en: "Lead Conversion",
          es: "Conversión de Leads"
        },
        description: {
          pt: "Processo de qualificar um Lead e transformá-lo em uma Conta (Account), um Contato (Contact) e, opcionalmente, uma Oportunidade (Opportunity).",
          en: "The process of qualifying a Lead and converting it into an Account, a Contact, and optionally, an Opportunity.",
          es: "El proceso de calificar un Lead y convertirlo en una Cuenta (Account), un Contacto (Contact) y, opcionalmente, una Oportunidad (Opportunity)."
        }
      },
      {
        title: {
          pt: "Caminho de Vendas (Sales Path)",
          en: "Sales Path",
          es: "Ruta de Ventas (Sales Path)"
        },
        description: {
          pt: "Componente visual que guia os representantes de vendas pelas etapas do funil de vendas, oferecendo orientações para o sucesso em cada fase.",
          en: "A visual guide that helps sales reps navigate the sales pipeline, providing guidance for success at each stage.",
          es: "Guía visual que ayuda a los representantes a navegar por las etapas de la oportunidad, ofreciendo consejos para el éxito en cada etapa."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Mantenha as fases da Oportunidade simples e focadas no comportamento do comprador.",
        "Use o Collaborative Forecasting em vez de planilhas externas para previsão de vendas."
      ],
      en: [
        "Keep Opportunity stages simple and aligned with buying behaviors.",
        "Use Collaborative Forecasting instead of external spreadsheets for sales projections."
      ],
      es: [
        "Mantenga las etapas de la Oportunidad simples y alineadas con el comportamiento del comprador.",
        "Utilice Collaborative Forecasting en lugar de hojas de cálculo externas para pronósticos."
      ]
    },
    resources: [
      {
        title: {
          pt: "Trilha Inicial do Sales Cloud no Trailhead",
          en: "Sales Cloud Quick Look on Trailhead",
          es: "Vistazo rápido de Sales Cloud en Trailhead"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/sales_integration_service_cloud",
        type: "trailhead"
      }
    ]
  },
  {
    id: "service-cloud",
    category: "clouds",
    title: {
      pt: "Service Cloud",
      en: "Service Cloud",
      es: "Service Cloud"
    },
    subtitle: {
      pt: "Atendimento ao Cliente, Omnicanalidade e Base de Conhecimento",
      en: "Customer Service, Omni-Channel, and Knowledge Base",
      es: "Atención al Cliente, Omnicanalidad y Base de Conocimiento"
    },
    description: {
      pt: "A plataforma completa de atendimento ao cliente, permitindo gerenciar casos (tickets), SLAs, autoatendimento e canais digitais de suporte.",
      en: "The complete customer support platform, enabling case (ticket) management, SLAs, self-service portals, and digital support channels.",
      es: "La plataforma completa de atención al cliente, que permite gestionar casos (tickets), SLAs, autoservicio y canales digitales de soporte."
    },
    iconName: "LifeBuoy",
    tags: {
      pt: ["Atendimento", "Core CRM", "Suporte"],
      en: ["Service", "Core CRM", "Support"],
      es: ["Servicio", "Core CRM", "Soporte"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Gestão de Casos (Case Management)",
          en: "Case Management",
          es: "Gestión de Casos (Case Management)"
        },
        description: {
          pt: "O registro central de um problema de cliente, gerenciado por filas (Queues), regras de escalabilidade e Email-to-Case.",
          en: "The central record representing a customer issue, managed via Queues, Assignment Rules, and Email-to-Case.",
          es: "El registro central que representa el problema de un cliente, gestionado mediante colas, reglas de asignación y Email-to-Case."
        }
      },
      {
        title: {
          pt: "Omni-Channel",
          en: "Omni-Channel",
          es: "Omnicanalidad (Omni-Channel)"
        },
        description: {
          pt: "Mecanismo de roteamento inteligente que distribui casos, chats ou leads para os agentes de atendimento com base em capacidade e habilidades.",
          en: "A smart routing tool that automatically pushes cases, chats, or leads to the right support agent based on capacity and skills.",
          es: "Herramienta de enrutamiento inteligente que asigna casos, chats o leads al agente de soporte adecuado según su capacidad y habilidades."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Use o Email-to-Case padrão para evitar desenvolvimentos complexos de integração de e-mails.",
        "Utilize a Salesforce Knowledge de forma integrada com a tela do agente para acelerar a resolução de casos."
      ],
      en: [
        "Use out-of-the-box Email-to-Case instead of building custom email handlers where possible.",
        "Integrate Salesforce Knowledge with the Agent Console to speed up case resolution times."
      ],
      es: [
        "Use Email-to-Case nativo para evitar integraciones complejas de correo electrónico.",
        "Integre Salesforce Knowledge con la consola del agente para acelerar la resolución de casos."
      ]
    },
    resources: [
      {
        title: {
          pt: "Módulo Inicial do Service Cloud",
          en: "Service Cloud Agent Productivity Module",
          es: "Módulo de productividad del agente en Service Cloud"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/service_lex",
        type: "trailhead"
      }
    ]
  },
  {
    id: "experience-cloud",
    category: "clouds",
    title: {
      pt: "Experience Cloud",
      en: "Experience Cloud",
      es: "Experience Cloud"
    },
    subtitle: {
      pt: "Portais de Clientes, Parceiros e Sites Digitais",
      en: "Customer Portals, Partner Hubs, and Digital Sites",
      es: "Portales de Clientes, Socios y Sitios Digitales"
    },
    description: {
      pt: "Permite criar sites corporativos, portais de parceiros e fóruns de autoatendimento integrados diretamente com os dados do Salesforce.",
      en: "Build branded customer portals, partner communities, and help centers directly integrated with Salesforce data.",
      es: "Permite crear sitios web corporativos, portales de socios y foros de autoservicio integrados con sus datos de Salesforce."
    },
    iconName: "Globe",
    tags: {
      pt: ["Portais", "Comunidades", "LWR"],
      en: ["Portals", "Communities", "LWR"],
      es: ["Portales", "Comunidades", "LWR"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Sharing Sets e Sharing Groups",
          en: "Sharing Sets and Sharing Groups",
          es: "Sharing Sets y Sharing Groups"
        },
        description: {
          pt: "Mecanismos de segurança específicos para usuários de portais externos compartilharem registros de Contas, Contatos ou Casos.",
          en: "Special security models that grant external portal users access to Accounts, Contacts, or Cases based on contact matching.",
          es: "Mecanismos de seguridad específicos de portales para compartir registros de cuentas, contactos o casos con usuarios externos."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Sempre audite e restrinja as permissões do Perfil de Usuário Convidado (Guest User Profile) para evitar vazamento de dados."
      ],
      en: [
        "Always audit and restrict Guest User Profile permissions to prevent public data exposure."
      ],
      es: [
        "Audite siempre el Perfil de Usuario Invitado para evitar la exposición pública de datos."
      ]
    },
    resources: [
      {
        title: {
          pt: "Expansão de Negócios com Experience Cloud",
          en: "Expand Your Reach with Experience Cloud",
          es: "Expandir el alcance con Experience Cloud"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/lex_community_basics",
        type: "trailhead"
      }
    ]
  },

  {
    id: "financial-services-cloud",
    category: "clouds",
    title: {
      pt: "Financial Services Cloud",
      en: "Financial Services Cloud",
      es: "Financial Services Cloud"
    },
    subtitle: {
      pt: "Gestão de Patrimônio, Seguros e Bancos",
      en: "Wealth Management, Insurance, and Banking",
      es: "Gestión Patrimonial, Seguros y Banca"
    },
    description: {
      pt: "Solução voltada para o setor financeiro, oferecendo modelos de dados específicos para gerenciar contas financeiras, apólices, relacionamentos complexos familiares e empresariais, além de metas de vida.",
      en: "A solution tailored for the financial sector, offering specific data models to manage financial accounts, policies, complex family and business relationships, and life goals.",
      es: "Solución adaptada al sector financiero, que ofrece modelos de datos específicos para gestionar cuentas financieras, pólizas, relaciones familiares y empresariales complejas, y objetivos de vida."
    },
    iconName: "Landmark",
    tags: {
      pt: ["Finanças", "Indústria", "Bancos", "Seguros"],
      en: ["Finance", "Industry", "Banking", "Insurance"],
      es: ["Finanzas", "Industria", "Banca", "Seguros"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Modelo de Dados B2C (Person Accounts)",
          en: "B2C Data Model (Person Accounts)",
          es: "Modelo de Datos B2C (Person Accounts)"
        },
        description: {
          pt: "Uso intensivo de Contas Pessoais (Person Accounts) e modelos de relacionamento família/grupo de famílias para mapear o núcleo de relacionamentos de clientes finais (B2C).",
          en: "Heavy use of Person Accounts and household/family relationship models to map out the core relationships of end customers (B2C).",
          es: "Uso intensivo de Person Accounts y modelos de relación familiar/hogar para mapear las relaciones centrales de los clientes finales (B2C)."
        }
      },
      {
        title: {
          pt: "Financial Accounts (Contas Financeiras)",
          en: "Financial Accounts",
          es: "Cuentas Financieras (Financial Accounts)"
        },
        description: {
          pt: "Objeto central que representa contas bancárias, apólices de seguro, investimentos e cartões de crédito associados a um cliente.",
          en: "A central object representing bank accounts, insurance policies, investments, and credit cards associated with a client.",
          es: "Objeto central que representa cuentas bancarias, pólizas de seguro, inversiones y tarjetas de crédito asociadas a un cliente."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Compreenda profundamente o modelo de Person Accounts, pois é fundamental para implementações de FSC (Financial Services Cloud).",
        "Utilize os componentes de Rollup by Lookup (RBL) para agregar saldos e métricas financeiras."
      ],
      en: [
        "Deeply understand the Person Accounts model, as it is foundational for FSC (Financial Services Cloud) implementations.",
        "Utilize Rollup by Lookup (RBL) rules to aggregate balances and financial metrics."
      ],
      es: [
        "Comprenda a fondo el modelo de Person Accounts, ya que es fundamental para las implementaciones de FSC (Financial Services Cloud).",
        "Utilice las reglas Rollup by Lookup (RBL) para agregar saldos y métricas financieras."
      ]
    },
    resources: [
      {
        title: {
          pt: "Conceitos Básicos do Financial Services Cloud",
          en: "Financial Services Cloud Basics",
          es: "Conceptos básicos de Financial Services Cloud"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/financial_services_cloud_basics",
        type: "trailhead"
      }
    ]
  },
  {
    id: "marketing-cloud",
    category: "clouds",
    title: {
      pt: "Marketing Cloud",
      en: "Marketing Cloud",
      es: "Marketing Cloud"
    },
    subtitle: {
      pt: "Jornadas, Campanhas e Engajamento Multicanal",
      en: "Journeys, Campaigns, and Omnichannel Engagement",
      es: "Viajes, Campañas y Compromiso Omnicanal"
    },
    description: {
      pt: "Plataforma avançada de marketing digital para automação B2C, permitindo criar jornadas de clientes personalizadas via email, SMS, push notifications e redes sociais.",
      en: "Advanced digital marketing platform for B2C automation, enabling the creation of personalized customer journeys via email, SMS, push notifications, and social media.",
      es: "Plataforma avanzada de marketing digital para la automatización B2C, que permite crear viajes de clientes personalizados a través de correo electrónico, SMS, notificaciones push y redes sociales."
    },
    iconName: "Megaphone",
    tags: {
      pt: ["Marketing", "B2C", "Automação", "Jornadas"],
      en: ["Marketing", "B2C", "Automation", "Journeys"],
      es: ["Marketing", "B2C", "Automatización", "Viajes"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Journey Builder",
          en: "Journey Builder",
          es: "Journey Builder"
        },
        description: {
          pt: "Ferramenta visual para projetar interações e jornadas automatizadas de 1-para-1 com o cliente em múltiplos canais, baseadas no comportamento do usuário e eventos em tempo real.",
          en: "A visual tool for designing automated, 1-to-1 customer interactions and journeys across multiple channels, driven by user behavior and real-time events.",
          es: "Herramienta visual para diseñar interacciones y viajes automatizados 1 a 1 con el cliente en múltiples canales, basados en el comportamiento del usuario y eventos en tiempo real."
        }
      },
      {
        title: {
          pt: "Data Extensions",
          en: "Data Extensions",
          es: "Extensiones de Datos (Data Extensions)"
        },
        description: {
          pt: "Tabelas no Marketing Cloud usadas para armazenar dados de assinantes (subscribers) ou informações relacionais, similares a tabelas de um banco de dados tradicional.",
          en: "Tables in Marketing Cloud used to store subscriber data or relational information, similar to tables in a traditional database.",
          es: "Tablas en Marketing Cloud que se utilizan para almacenar datos de suscriptores (subscribers) o información relacional, similar a las tablas en una base de datos tradicional."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Mantenha um modelo de dados limpo usando Data Extensions ao invés de listas tradicionais para ganhar flexibilidade nas segmentações.",
        "Utilize o Marketing Cloud Connect para integrar os dados do Core (Sales/Service) diretamente para o Marketing Cloud."
      ],
      en: [
        "Maintain a clean data model by relying on Data Extensions rather than traditional lists for maximum segmentation flexibility.",
        "Use Marketing Cloud Connect to bring core Salesforce (Sales/Service) data directly into Marketing Cloud."
      ],
      es: [
        "Mantenga un modelo de datos limpio mediante el uso de Extensiones de Datos en lugar de listas tradicionales para obtener flexibilidad en las segmentaciones.",
        "Utilice Marketing Cloud Connect para integrar los datos principales (Sales/Service) directamente en Marketing Cloud."
      ]
    },
    resources: [
      {
        title: {
          pt: "Fundamentos do Marketing Cloud",
          en: "Marketing Cloud Basics",
          es: "Conceptos básicos de Marketing Cloud"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/marketing_cloud_basics",
        type: "trailhead"
      }
    ]
  },
  {
    id: "data-cloud",
    category: "clouds",
    title: {
      pt: "Data Cloud",
      en: "Data Cloud",
      es: "Data Cloud"
    },
    subtitle: {
      pt: "Plataforma de Dados de Clientes (CDP) em Tempo Real",
      en: "Real-Time Customer Data Platform (CDP)",
      es: "Plataforma de Datos de Clientes (CDP) en Tiempo Real"
    },
    description: {
      pt: "Unifique todos os dados dos seus clientes em uma única plataforma para criar experiências conectadas e personalizadas em tempo real.",
      en: "Unify all your customer data in a single platform to create connected and personalized experiences in real-time.",
      es: "Unifique todos los datos de sus clientes en una sola plataforma para crear experiencias conectadas y personalizadas en tiempo real."
    },
    iconName: "Database",
    tags: {
      pt: ["Dados", "CDP", "Integração"],
      en: ["Data", "CDP", "Integration"],
      es: ["Datos", "CDP", "Integración"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Unificação de Perfil",
          en: "Profile Unification",
          es: "Unificación de Perfil"
        },
        description: {
          pt: "Resolução de identidade combinando dados de múltiplos sistemas para criar um perfil de cliente único.",
          en: "Identity resolution combining data from multiple systems to create a single customer profile.",
          es: "Resolución de identidad combinando datos de múltiples sistemas para crear un perfil de cliente único."
        }
      },
      {
        title: {
          pt: "Segmentação em Tempo Real",
          en: "Real-Time Segmentation",
          es: "Segmentación en Tiempo Real"
        },
        description: {
          pt: "Criação de segmentos de audiência dinâmicos ativados através de canais de marketing e engajamento.",
          en: "Creation of dynamic audience segments activated across marketing and engagement channels.",
          es: "Creación de segmentos de audiencia dinámicos activados a través de canales de marketing y compromiso."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Mapeie cuidadosamente os modelos de dados de origem (DMO) para garantir a qualidade na resolução de identidades."
      ],
      en: [
        "Carefully map source data models (DMO) to ensure quality in identity resolution."
      ],
      es: [
        "Mapee cuidadosamente los modelos de datos de origen (DMO) para garantizar la calidad en la resolución de identidades."
      ]
    },
    resources: [
      {
        title: {
          pt: "Fundamentos do Data Cloud",
          en: "Data Cloud Basics",
          es: "Fundamentos de Data Cloud"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/customer-data-platform-basics",
        type: "trailhead"
      }
    ]
  },

  {
    id: "security-center",
    category: "clouds",
    title: {
      pt: "Security Center",
      en: "Security Center",
      es: "Security Center"
    },
    subtitle: {
      pt: "Monitoramento e Postura de Segurança Multi-Org",
      en: "Multi-Org Security Monitoring and Posture Management",
      es: "Monitoreo de Seguridad y Postura Multi-Org"
    },
    description: {
      pt: "Ferramenta centralizada para monitorar e gerenciar a postura de segurança de múltiplas organizações Salesforce em um único painel, identificando riscos e garantindo conformidade com políticas de segurança.",
      en: "A centralized tool for monitoring and managing the security posture of multiple Salesforce orgs from a single dashboard, identifying risks and ensuring compliance with security policies.",
      es: "Herramienta centralizada para monitorear y gestionar la postura de seguridad de múltiples organizaciones Salesforce desde un único panel, identificando riesgos y garantizando el cumplimiento de las políticas de seguridad."
    },
    iconName: "Lock",
    tags: {
      pt: ["Segurança", "Multi-Org", "Conformidade"],
      en: ["Security", "Multi-Org", "Compliance"],
      es: ["Seguridad", "Multi-Org", "Cumplimiento"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Métricas de Segurança",
          en: "Security Metrics",
          es: "Métricas de Seguridad"
        },
        description: {
          pt: "O Security Center coleta e exibe métricas de segurança em tempo real, como configurações de autenticação, permissões de perfis e políticas de sessão em todas as orgs conectadas.",
          en: "Security Center collects and displays real-time security metrics, such as authentication configurations, profile permissions, and session policies across all connected orgs.",
          es: "Security Center recopila y muestra métricas de seguridad en tiempo real, como configuraciones de autenticación, permisos de perfiles y políticas de sesión en todas las organizaciones conectadas."
        }
      },
      {
        title: {
          pt: "Alertas e Remediação",
          en: "Alerts and Remediation",
          es: "Alertas y Remediación"
        },
        description: {
          pt: "Identifica configurações fora do padrão de segurança recomendado e permite que administradores tomem ações corretivas diretamente pelo painel centralizado.",
          en: "Identifies configurations that deviate from recommended security standards and enables admins to take corrective actions directly from the centralized dashboard.",
          es: "Identifica configuraciones que se desvían de los estándares de seguridad recomendados y permite a los administradores tomar acciones correctivas directamente desde el panel centralizado."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Conecte todas as suas orgs de produção ao Security Center para ter uma visão consolidada da postura de segurança.",
        "Revise regularmente as métricas de políticas de senha e autenticação multifator (MFA) para garantir conformidade."
      ],
      en: [
        "Connect all your production orgs to Security Center for a consolidated view of your security posture.",
        "Regularly review password policy and multi-factor authentication (MFA) metrics to ensure compliance."
      ],
      es: [
        "Conecte todas sus organizaciones de producción a Security Center para obtener una vista consolidada de su postura de seguridad.",
        "Revise regularmente las métricas de políticas de contraseña y autenticación multifactor (MFA) para garantizar el cumplimiento."
      ]
    },
    resources: [
      {
        title: {
          pt: "Introdução ao Security Center",
          en: "Get Started with Security Center",
          es: "Introducción a Security Center"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-security-center",
        type: "trailhead"
      }
    ]
  },
  {
    id: "privacy-center",
    category: "clouds",
    title: {
      pt: "Privacy Center",
      en: "Privacy Center",
      es: "Privacy Center"
    },
    subtitle: {
      pt: "Gestão de Privacidade de Dados e Conformidade com LGPD/GDPR",
      en: "Data Privacy Management and LGPD/GDPR Compliance",
      es: "Gestión de Privacidad de Datos y Cumplimiento LGPD/GDPR"
    },
    description: {
      pt: "Solução nativa do Salesforce para gerenciar políticas de privacidade de dados, automatizar o direito ao esquecimento (Right to Be Forgotten), anonimizar dados sensíveis e atender às regulamentações de proteção de dados como LGPD e GDPR.",
      en: "A native Salesforce solution to manage data privacy policies, automate Right to Be Forgotten requests, anonymize sensitive data, and comply with data protection regulations such as LGPD and GDPR.",
      es: "Una solución nativa de Salesforce para gestionar políticas de privacidad de datos, automatizar solicitudes de derecho al olvido, anonimizar datos sensibles y cumplir con regulaciones de protección de datos como LGPD y GDPR."
    },
    iconName: "Eye",
    tags: {
      pt: ["Privacidade", "LGPD", "GDPR", "Conformidade"],
      en: ["Privacy", "LGPD", "GDPR", "Compliance"],
      es: ["Privacidad", "LGPD", "GDPR", "Cumplimiento"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Políticas de Retenção de Dados",
          en: "Data Retention Policies",
          es: "Políticas de Retención de Datos"
        },
        description: {
          pt: "Defina por quanto tempo os dados pessoais dos clientes são mantidos na plataforma, automatizando a exclusão ou anonimização após o período configurado para cumprir regulações de privacidade.",
          en: "Define how long personal customer data is retained on the platform, automating deletion or anonymization after the configured period to comply with privacy regulations.",
          es: "Defina cuánto tiempo se conservan los datos personales de los clientes en la plataforma, automatizando la eliminación o anonimización tras el período configurado para cumplir con las normativas de privacidad."
        }
      },
      {
        title: {
          pt: "Direito ao Esquecimento (Right to Be Forgotten)",
          en: "Right to Be Forgotten",
          es: "Derecho al Olvido (Right to Be Forgotten)"
        },
        description: {
          pt: "Permite que indivíduos solicitem a exclusão permanente de seus dados pessoais da plataforma. O Privacy Center automatiza esse processo de forma segura e auditável.",
          en: "Allows individuals to request permanent deletion of their personal data from the platform. Privacy Center automates this process in a secure and auditable way.",
          es: "Permite a las personas solicitar la eliminación permanente de sus datos personales de la plataforma. Privacy Center automatiza este proceso de forma segura y auditable."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Mapeie todos os objetos que armazenam dados pessoais identificáveis (PII) antes de configurar as políticas de retenção.",
        "Utilize a funcionalidade de Anonimização ao invés de exclusão completa para preservar relatórios históricos sem expor dados pessoais."
      ],
      en: [
        "Map all objects storing personally identifiable information (PII) before configuring retention policies.",
        "Use the Anonymization feature instead of full deletion to preserve historical reports without exposing personal data."
      ],
      es: [
        "Mapee todos los objetos que almacenan información de identificación personal (PII) antes de configurar las políticas de retención.",
        "Utilice la función de Anonimización en lugar de la eliminación completa para conservar informes históricos sin exponer datos personales."
      ]
    },
    resources: [
      {
        title: {
          pt: "Fundamentos do Privacy Center",
          en: "Privacy Center Basics",
          es: "Conceptos básicos de Privacy Center"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-privacy-center",
        type: "trailhead"
      }
    ]
  },
  {
    id: "salesforce-shield",
    category: "clouds",
    title: {
      pt: "Salesforce Shield",
      en: "Salesforce Shield",
      es: "Salesforce Shield"
    },
    subtitle: {
      pt: "Criptografia, Monitoramento de Eventos e Trilha de Auditoria",
      en: "Encryption, Event Monitoring, and Audit Trail",
      es: "Cifrado, Monitoreo de Eventos y Registro de Auditoría"
    },
    description: {
      pt: "Conjunto de recursos avançados de segurança para organizações que precisam de maior controle e visibilidade sobre seus dados. Inclui Platform Encryption para dados em repouso, Event Monitoring para rastrear atividades de usuários e Field Audit Trail para histórico estendido de alterações.",
      en: "A suite of advanced security features for organizations requiring greater control and visibility over their data. Includes Platform Encryption for data at rest, Event Monitoring for tracking user activity, and Field Audit Trail for extended change history.",
      es: "Un conjunto de características de seguridad avanzadas para organizaciones que necesitan mayor control y visibilidad sobre sus datos. Incluye Platform Encryption para datos en reposo, Event Monitoring para rastrear la actividad de usuarios y Field Audit Trail para el historial extendido de cambios."
    },
    iconName: "ShieldCheck",
    tags: {
      pt: ["Criptografia", "Segurança Avançada", "Auditoria", "Monitoramento"],
      en: ["Encryption", "Advanced Security", "Audit", "Monitoring"],
      es: ["Cifrado", "Seguridad Avanzada", "Auditoría", "Monitoreo"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Platform Encryption",
          en: "Platform Encryption",
          es: "Platform Encryption"
        },
        description: {
          pt: "Criptografa dados sensíveis em repouso no banco de dados do Salesforce (campos de objetos padrão e personalizados, arquivos e anexos) usando chaves de criptografia gerenciadas pelo cliente (Bring Your Own Key - BYOK).",
          en: "Encrypts sensitive data at rest in the Salesforce database (standard and custom object fields, files, and attachments) using customer-managed encryption keys (Bring Your Own Key - BYOK).",
          es: "Cifra datos sensibles en reposo en la base de datos de Salesforce (campos de objetos estándar y personalizados, archivos y adjuntos) utilizando claves de cifrado administradas por el cliente (Bring Your Own Key - BYOK)."
        }
      },
      {
        title: {
          pt: "Event Monitoring",
          en: "Event Monitoring",
          es: "Event Monitoring"
        },
        description: {
          pt: "Registra logs detalhados de eventos de uso da plataforma (logins, execuções de relatórios, chamadas de API, acessos a registros) permitindo análise de comportamento, detecção de anomalias e investigações forenses.",
          en: "Records detailed logs of platform usage events (logins, report runs, API calls, record accesses) enabling behavioral analysis, anomaly detection, and forensic investigations.",
          es: "Registra logs detallados de eventos de uso de la plataforma (inicios de sesión, ejecuciones de informes, llamadas a API, accesos a registros) permitiendo análisis de comportamiento, detección de anomalías e investigaciones forenses."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Avalie cuidadosamente quais campos precisam de criptografia, pois campos criptografados têm limitações em filtros SOQL e pesquisa global.",
        "Use o Event Monitoring integrado ao Einstein Analytics (CRM Analytics) para criar dashboards de segurança e monitoramento de ameaças em tempo real."
      ],
      en: [
        "Carefully evaluate which fields require encryption, as encrypted fields have limitations with SOQL filters and global search.",
        "Integrate Event Monitoring with Einstein Analytics (CRM Analytics) to build real-time security monitoring and threat detection dashboards."
      ],
      es: [
        "Evalúe cuidadosamente qué campos requieren cifrado, ya que los campos cifrados tienen limitaciones con los filtros SOQL y la búsqueda global.",
        "Integre Event Monitoring con Einstein Analytics (CRM Analytics) para crear paneles de monitoreo de seguridad y detección de amenazas en tiempo real."
      ]
    },
    resources: [
      {
        title: {
          pt: "Conceitos Básicos do Salesforce Shield",
          en: "Salesforce Shield Basics",
          es: "Conceptos básicos de Salesforce Shield"
        },
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce_shield",
        type: "trailhead"
      }
    ]
  },

  // --- FOUNDATIONS ---
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

const localizedConcept = (title: LocString, description: string): KeyConcept => ({
  title,
  description: {
    pt: description,
    en: description,
    es: description
  }
});

const implementationGuide = (guide: GuideItem): KeyConcept[] => {
  const profile = profileFor(guide);

  return [
    localizedConcept({ pt: "Título orientado ao problema", en: "Problem-oriented title", es: "Título orientado al problema" }, `${guideTitle(guide, "pt")}: como aplicar em uma org real sem tratar o tema como configuração genérica.`),
    localizedConcept({ pt: "Contexto de negócio", en: "Business context", es: "Contexto de negocio" }, profile.scenario),
    localizedConcept({ pt: "Cenário prático", en: "Practical scenario", es: "Escenario práctico" }, profile.problem),
    localizedConcept({ pt: "Objetos e recursos envolvidos", en: "Objects and features involved", es: "Objetos y recursos involucrados" }, profile.records),
    localizedConcept({ pt: "Campos e valores de exemplo", en: "Example fields and values", es: "Campos y valores de ejemplo" }, profile.fields),
    localizedConcept({ pt: "Regra de negócio", en: "Business rule", es: "Regla de negocio" }, profile.rule),
    localizedConcept({ pt: "Passo a passo de implementação", en: "Implementation walkthrough", es: "Paso a paso de implementación" }, profile.implementation),
    localizedConcept({ pt: "Exemplo aplicável", en: "Applicable example", es: "Ejemplo aplicable" }, profile.example),
    localizedConcept({ pt: "Erros comuns", en: "Common mistakes", es: "Errores comunes" }, profile.errors),
    localizedConcept({ pt: "Como testar", en: "How to test", es: "Cómo probar" }, profile.testing),
    localizedConcept({ pt: "Critério de conclusão", en: "Completion criteria", es: "Criterio de conclusión" }, profile.done),
    localizedConcept({ pt: "Quando não utilizar", en: "When not to use", es: "Cuándo no utilizar" }, profile.avoid)
  ];
};

const supplementalKeyConcepts = (guide: GuideItem): KeyConcept[] => {
  const profile = profileFor(guide);

  return [
    localizedConcept({ pt: "Cenário real de uso", en: "Real usage scenario", es: "Escenario real de uso" }, profile.scenario),
    localizedConcept({ pt: "Problema que resolve", en: "Problem it solves", es: "Problema que resuelve" }, profile.problem),
    localizedConcept({ pt: "Objetos Salesforce envolvidos", en: "Salesforce objects involved", es: "Objetos Salesforce involucrados" }, profile.records),
    localizedConcept({ pt: "Campos e API Names relevantes", en: "Relevant fields and API names", es: "Campos y API Names relevantes" }, profile.fields),
    localizedConcept({ pt: "Automações e configurações", en: "Automations and settings", es: "Automatizaciones y configuraciones" }, profile.automation),
    localizedConcept({ pt: "Regra operacional", en: "Operational rule", es: "Regla operativa" }, profile.rule),
    localizedConcept({ pt: "Validação em projeto real", en: "Validation in a real project", es: "Validación en proyecto real" }, profile.testing),
    localizedConcept({ pt: "Erros e limitações comuns", en: "Common errors and limitations", es: "Errores y limitaciones comunes" }, profile.errors),
    localizedConcept({ pt: "Indicadores de acompanhamento", en: "Tracking metrics", es: "Indicadores de seguimiento" }, profile.metrics),
    localizedConcept({ pt: "Segurança e compartilhamento", en: "Security and sharing", es: "Seguridad y compartición" }, profile.security),
    localizedConcept({ pt: "Integrações e dependências", en: "Integrations and dependencies", es: "Integraciones y dependencias" }, profile.integration),
    localizedConcept({ pt: "Critério de pronto", en: "Definition of done", es: "Criterio de listo" }, profile.done)
  ];
};

const supplementalBestPractices = (guide: GuideItem): LocStringArray => {
  const profile = profileFor(guide);
  const practices = [
    `Comece pelo cenário real: ${profile.scenario}`,
    `Documente o problema antes da solução: ${profile.problem}`,
    `Liste objetos e recursos antes de configurar: ${profile.records}`,
    `Use API Names e valores de exemplo na especificação: ${profile.fields}`,
    `Escolha automação pelo comportamento esperado, não por preferência de ferramenta: ${profile.automation}`,
    `Transforme a regra de negócio em validação testável: ${profile.rule}`,
    `Implemente em sandbox seguindo um caminho reproduzível: ${profile.implementation}`,
    `Inclua exemplo concreto no handover: ${profile.example}`,
    `Teste os erros comuns antes do go-live: ${profile.errors}`,
    `Defina evidências de teste claras: ${profile.testing}`,
    `Considere pronto apenas quando o critério for verificável: ${profile.done}`,
    `Registre quando não usar essa abordagem: ${profile.avoid}`
  ];

  return { pt: practices, en: practices, es: practices };
};

const withoutDuplicateConceptTitles = (guide: GuideItem, concepts: KeyConcept[]) => {
  const existingTitles = new Set(
    guide.keyConcepts.map((concept) => concept.title.pt.trim().toLowerCase())
  );

  return concepts.filter((concept) => !existingTitles.has(concept.title.pt.trim().toLowerCase()));
};

const completeConcepts = (guide: GuideItem) => {
  if (guide.keyConcepts.length >= 10) return guide.keyConcepts;

  const additions = withoutDuplicateConceptTitles(guide, supplementalKeyConcepts(guide));
  return [...guide.keyConcepts, ...additions].slice(0, 10);
};

const completeBestPractices = (guide: GuideItem): LocStringArray => {
  const additions = supplementalBestPractices(guide);

  return localeKeys.reduce((practices, locale) => {
    const current = guide.bestPractices[locale] ?? [];
    practices[locale] = current.length >= 10
      ? current
      : [...current, ...additions[locale]].slice(0, 10);

    return practices;
  }, {} as LocStringArray);
};

const realUseCases = (guide: GuideItem): LocStringArray => {
  const profile = profileFor(guide);
  const useCases = [
    `Usar em operação real quando o cenário se parece com: ${profile.scenario}`,
    `Resolver o problema de negócio descrito por: ${profile.problem}`,
    `Mapear registros e relacionamentos antes da entrega usando: ${profile.records}`,
    `Validar campos, API Names e valores que sustentam a rotina: ${profile.fields}`,
    `Configurar automações e recursos envolvidos sem sobrepor lógica: ${profile.automation}`,
    `Aplicar regra operacional que o usuário consegue reconhecer no dia a dia: ${profile.rule}`,
    `Executar a implementação com passos reproduzíveis: ${profile.implementation}`,
    `Demonstrar o funcionamento com exemplo concreto: ${profile.example}`,
    `Investigar chamados e incidentes a partir dos erros comuns: ${profile.errors}`,
    `Encerrar a demanda somente depois de testar e provar: ${profile.testing} Critério final: ${profile.done}`
  ];

  return { pt: useCases, en: useCases, es: useCases };
};

const completeRealUseCases = (guide: GuideItem): LocStringArray => {
  const additions = realUseCases(guide);

  return localeKeys.reduce((useCases, locale) => {
    const current = guide.realUseCases?.[locale] ?? [];
    useCases[locale] = current.length >= 10
      ? current
      : [...current, ...additions[locale]].slice(0, 10);

    return useCases;
  }, {} as LocStringArray);
};

const supplementalResources = (guide: GuideItem): ResourceLink[] => {
  const query = encodeURIComponent(guide.title.en || guide.title.pt);
  const title = {
    pt: guideTitle(guide, "pt"),
    en: guideTitle(guide, "en"),
    es: guideTitle(guide, "es")
  };

  return [
    {
      title: {
        pt: `Trailhead: módulos sobre ${title.pt}`,
        en: `Trailhead: modules about ${title.en}`,
        es: `Trailhead: módulos sobre ${title.es}`
      },
      url: `https://trailhead.salesforce.com/search?keywords=${query}`,
      type: "trailhead"
    },
    {
      title: {
        pt: `Salesforce Help: documentação de ${title.pt}`,
        en: `Salesforce Help: documentation for ${title.en}`,
        es: `Salesforce Help: documentación de ${title.es}`
      },
      url: `https://help.salesforce.com/s/global-search/${query}`,
      type: "doc"
    },
    {
      title: {
        pt: `Developer Docs: busca por ${title.pt}`,
        en: `Developer Docs: search for ${title.en}`,
        es: `Developer Docs: búsqueda de ${title.es}`
      },
      url: `https://developer.salesforce.com/search?q=${query}`,
      type: "doc"
    },
    {
      title: {
        pt: `Salesforce Architects: padrões aplicáveis a ${title.pt}`,
        en: `Salesforce Architects: patterns for ${title.en}`,
        es: `Salesforce Architects: patrones para ${title.es}`
      },
      url: "https://architect.salesforce.com/",
      type: "doc"
    },
    {
      title: {
        pt: `Salesforce Well-Architected: referência para ${title.pt}`,
        en: `Salesforce Well-Architected: reference for ${title.en}`,
        es: `Salesforce Well-Architected: referencia para ${title.es}`
      },
      url: "https://architect.salesforce.com/well-architected/overview",
      type: "doc"
    },
    {
      title: {
        pt: `Release Notes: mudanças relacionadas a ${title.pt}`,
        en: `Release Notes: changes related to ${title.en}`,
        es: `Release Notes: cambios relacionados con ${title.es}`
      },
      url: "https://help.salesforce.com/s/articleView?id=release-notes.salesforce_release_notes.htm&type=5",
      type: "doc"
    },
    {
      title: {
        pt: `Admin Blog: práticas e exemplos sobre ${title.pt}`,
        en: `Admin Blog: practices and examples about ${title.en}`,
        es: `Admin Blog: prácticas y ejemplos sobre ${title.es}`
      },
      url: `https://admin.salesforce.com/?s=${query}`,
      type: "article"
    },
    {
      title: {
        pt: `Developer Blog: artigos técnicos sobre ${title.pt}`,
        en: `Developer Blog: technical articles about ${title.en}`,
        es: `Developer Blog: artículos técnicos sobre ${title.es}`
      },
      url: `https://developer.salesforce.com/blogs?search=${query}`,
      type: "article"
    },
    {
      title: {
        pt: `Salesforce YouTube: vídeos sobre ${title.pt}`,
        en: `Salesforce YouTube: videos about ${title.en}`,
        es: `Salesforce YouTube: videos sobre ${title.es}`
      },
      url: `https://www.youtube.com/@salesforce/search?query=${query}`,
      type: "video"
    },
    {
      title: {
        pt: `Salesforce Trust: status e segurança para ${title.pt}`,
        en: `Salesforce Trust: status and security for ${title.en}`,
        es: `Salesforce Trust: estado y seguridad para ${title.es}`
      },
      url: "https://trust.salesforce.com/",
      type: "doc"
    },
    {
      title: {
        pt: `Salesforce Blog: conteúdos sobre ${title.pt}`,
        en: `Salesforce Blog: content about ${title.en}`,
        es: `Salesforce Blog: contenidos sobre ${title.es}`
      },
      url: `https://www.salesforce.com/blog/?s=${query}`,
      type: "article"
    },
    {
      title: {
        pt: `Salesforce Ben: artigos práticos sobre ${title.pt}`,
        en: `Salesforce Ben: practical articles about ${title.en}`,
        es: `Salesforce Ben: artículos prácticos sobre ${title.es}`
      },
      url: `https://www.salesforceben.com/?s=${query}`,
      type: "article"
    }
  ];
};

const completeResources = (guide: GuideItem) => {
  if (guide.resources.length >= 10) return guide.resources;

  const resources = [...guide.resources];
  const existingUrls = new Set(resources.map((resource) => resource.url));

  for (const resource of supplementalResources(guide)) {
    if (resources.length >= 10) break;
    if (existingUrls.has(resource.url)) continue;

    resources.push(resource);
    existingUrls.add(resource.url);
  }

  return resources;
};

export const defaultGuides: GuideItem[] = baseGuides.map((guide) => ({
  ...guide,
  keyConcepts: completeConcepts(guide),
  implementationGuide: implementationGuide(guide),
  bestPractices: completeBestPractices(guide),
  realUseCases: completeRealUseCases(guide),
  resources: completeResources(guide)
}));
