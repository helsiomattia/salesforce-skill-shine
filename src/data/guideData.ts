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
  bestPractices: LocStringArray;
  resources: ResourceLink[];
}

export const defaultGuides: GuideItem[] = [
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
