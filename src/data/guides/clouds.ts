import type { GuideItem } from "./types";

export const cloudsGuides: GuideItem[] = [
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
    id: "marketing-cloud-next",
    category: "clouds",
    title: {
      pt: "Marketing Cloud Next",
      en: "Marketing Cloud Next",
      es: "Marketing Cloud Next"
    },
    subtitle: {
      pt: "Marketing moderno sobre dados, IA e Customer 360",
      en: "Modern marketing built on data, AI, and Customer 360",
      es: "Marketing moderno sobre datos, IA y Customer 360"
    },
    description: {
      pt: "Nova geração do Marketing Cloud com foco em unificar marketing, dados e inteligência artificial dentro do ecossistema Salesforce. A proposta é aproximar campanhas, segmentação, personalização e execução comercial usando Data Cloud, automação e experiências conectadas ao Customer 360.",
      en: "Next-generation Marketing Cloud focused on bringing marketing, data, and AI together inside the Salesforce ecosystem. The goal is to connect campaigns, segmentation, personalization, and sales execution through Data Cloud, automation, and Customer 360 experiences.",
      es: "Nueva generación de Marketing Cloud enfocada en unir marketing, datos e inteligencia artificial dentro del ecosistema Salesforce. La propuesta es acercar campañas, segmentación, personalización y ejecución comercial usando Data Cloud, automatización y experiencias conectadas a Customer 360."
    },
    iconName: "Megaphone",
    tags: {
      pt: ["Marketing Cloud Next", "Data Cloud", "IA", "Customer 360"],
      en: ["Marketing Cloud Next", "Data Cloud", "AI", "Customer 360"],
      es: ["Marketing Cloud Next", "Data Cloud", "IA", "Customer 360"]
    },
    keyConcepts: [
      {
        title: {
          pt: "Marketing conectado ao Data Cloud",
          en: "Marketing connected to Data Cloud",
          es: "Marketing conectado a Data Cloud"
        },
        description: {
          pt: "O ponto central é usar dados unificados de clientes para criar segmentos, personalizações e ativações mais consistentes entre canais. Em vez de depender apenas de bases isoladas, a estratégia passa por identidade, consentimento, eventos e perfis atualizados.",
          en: "The core idea is using unified customer data to create more consistent segments, personalization, and activations across channels. Instead of relying only on isolated databases, the strategy depends on identity, consent, events, and updated profiles.",
          es: "El punto central es usar datos unificados de clientes para crear segmentos, personalizaciones y activaciones más consistentes entre canales. En vez de depender solo de bases aisladas, la estrategia pasa por identidad, consentimiento, eventos y perfiles actualizados."
        }
      },
      {
        title: {
          pt: "Campanhas com IA e automação",
          en: "Campaigns with AI and automation",
          es: "Campañas con IA y automatización"
        },
        description: {
          pt: "O Marketing Cloud Next reforça a ideia de campanhas mais inteligentes, com apoio de IA para acelerar criação, segmentação, recomendações e análise de desempenho. A automação precisa continuar governada por objetivos claros, consentimento e métricas de negócio.",
          en: "Marketing Cloud Next reinforces the idea of smarter campaigns, with AI support to accelerate creation, segmentation, recommendations, and performance analysis. Automation must still be governed by clear goals, consent, and business metrics.",
          es: "Marketing Cloud Next refuerza la idea de campañas más inteligentes, con apoyo de IA para acelerar creación, segmentación, recomendaciones y análisis de desempeño. La automatización debe seguir gobernada por objetivos claros, consentimiento y métricas de negocio."
        }
      }
    ],
    bestPractices: {
      pt: [
        "Antes de pensar em IA, organize dados, identidade, consentimento e critérios de segmentação no Data Cloud.",
        "Diferencie o uso do Marketing Cloud tradicional e do Marketing Cloud Next no desenho da arquitetura para evitar sobreposição de canais e jornadas.",
        "Defina métricas de negócio desde o início: conversão, engajamento, receita atribuída, retenção e qualidade dos segmentos."
      ],
      en: [
        "Before thinking about AI, organize data, identity, consent, and segmentation criteria in Data Cloud.",
        "Differentiate the use of traditional Marketing Cloud and Marketing Cloud Next in the architecture design to avoid overlapping channels and journeys.",
        "Define business metrics from the start: conversion, engagement, attributed revenue, retention, and segment quality."
      ],
      es: [
        "Antes de pensar en IA, organiza datos, identidad, consentimiento y criterios de segmentación en Data Cloud.",
        "Diferencia el uso de Marketing Cloud tradicional y Marketing Cloud Next en el diseño de arquitectura para evitar superposición de canales y journeys.",
        "Define métricas de negocio desde el inicio: conversión, engagement, ingresos atribuidos, retención y calidad de segmentos."
      ]
    },
    realUseCases: {
      pt: [
        "Unificar dados de CRM, atendimento, e-commerce e marketing para campanhas mais precisas.",
        "Criar segmentos acionáveis com base em perfil, comportamento, consentimento e eventos recentes.",
        "Apoiar times de marketing e vendas com jornadas mais conectadas ao Customer 360."
      ],
      en: [
        "Unify CRM, service, e-commerce, and marketing data for more precise campaigns.",
        "Create actionable segments based on profile, behavior, consent, and recent events.",
        "Support marketing and sales teams with journeys more connected to Customer 360."
      ],
      es: [
        "Unificar datos de CRM, atención, e-commerce y marketing para campañas más precisas.",
        "Crear segmentos accionables con base en perfil, comportamiento, consentimiento y eventos recientes.",
        "Apoyar equipos de marketing y ventas con journeys más conectados a Customer 360."
      ]
    },
    resources: [
      {
        title: {
          pt: "Marketing Cloud no site oficial da Salesforce",
          en: "Marketing Cloud on the official Salesforce website",
          es: "Marketing Cloud en el sitio oficial de Salesforce"
        },
        url: "https://www.salesforce.com/products/marketing-cloud/",
        type: "article"
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
];
