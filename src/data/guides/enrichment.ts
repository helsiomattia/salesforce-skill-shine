import type { GuideItem, KeyConcept, ResourceLink } from "./types";
import type { LocString, LocStringArray } from "../competencies/types";

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
) => localizedProfileField(guide, profile, field)[locale];

const localizedConcept = (title: LocString, description: LocString): KeyConcept => ({
  title,
  description
});


const implementationGuide = (guide: GuideItem): KeyConcept[] => {
  const profile = profileFor(guide);

  return [
    localizedConcept(
      { pt: "Título orientado ao problema", en: "Problem-oriented title", es: "Título orientado al problema" },
      {
        pt: `${guideTitle(guide, "pt")}: como aplicar em uma org real sem tratar o tema como configuração genérica.`,
        en: `${guideTitle(guide, "en")}: how to apply it in a real org without treating the topic as generic configuration.`,
        es: `${guideTitle(guide, "es")}: como aplicarlo en una org real sin tratar el tema como configuracion generica.`
      }
    ),
    localizedConcept({ pt: "Contexto de negócio", en: "Business context", es: "Contexto de negocio" }, localizedProfileField(guide, profile, "scenario")),
    localizedConcept({ pt: "Cenário prático", en: "Practical scenario", es: "Escenario práctico" }, localizedProfileField(guide, profile, "problem")),
    localizedConcept({ pt: "Objetos e recursos envolvidos", en: "Objects and features involved", es: "Objetos y recursos involucrados" }, localizedProfileField(guide, profile, "records")),
    localizedConcept({ pt: "Campos e valores de exemplo", en: "Example fields and values", es: "Campos y valores de ejemplo" }, localizedProfileField(guide, profile, "fields")),
    localizedConcept({ pt: "Regra de negócio", en: "Business rule", es: "Regla de negocio" }, localizedProfileField(guide, profile, "rule")),
    localizedConcept({ pt: "Passo a passo de implementação", en: "Implementation walkthrough", es: "Paso a paso de implementación" }, localizedProfileField(guide, profile, "implementation")),
    localizedConcept({ pt: "Exemplo aplicável", en: "Applicable example", es: "Ejemplo aplicable" }, localizedProfileField(guide, profile, "example")),
    localizedConcept({ pt: "Erros comuns", en: "Common mistakes", es: "Errores comunes" }, localizedProfileField(guide, profile, "errors")),
    localizedConcept({ pt: "Como testar", en: "How to test", es: "Cómo probar" }, localizedProfileField(guide, profile, "testing")),
    localizedConcept({ pt: "Critério de conclusão", en: "Completion criteria", es: "Criterio de conclusión" }, localizedProfileField(guide, profile, "done")),
    localizedConcept({ pt: "Quando não utilizar", en: "When not to use", es: "Cuándo no utilizar" }, localizedProfileField(guide, profile, "avoid"))
  ];
};

const supplementalKeyConcepts = (guide: GuideItem): KeyConcept[] => {
  const profile = profileFor(guide);

  return [
    localizedConcept({ pt: "Cenário real de uso", en: "Real usage scenario", es: "Escenario real de uso" }, localizedProfileField(guide, profile, "scenario")),
    localizedConcept({ pt: "Problema que resolve", en: "Problem it solves", es: "Problema que resuelve" }, localizedProfileField(guide, profile, "problem")),
    localizedConcept({ pt: "Objetos Salesforce envolvidos", en: "Salesforce objects involved", es: "Objetos Salesforce involucrados" }, localizedProfileField(guide, profile, "records")),
    localizedConcept({ pt: "Campos e API Names relevantes", en: "Relevant fields and API names", es: "Campos y API Names relevantes" }, localizedProfileField(guide, profile, "fields")),
    localizedConcept({ pt: "Automações e configurações", en: "Automations and settings", es: "Automatizaciones y configuraciones" }, localizedProfileField(guide, profile, "automation")),
    localizedConcept({ pt: "Regra operacional", en: "Operational rule", es: "Regla operativa" }, localizedProfileField(guide, profile, "rule")),
    localizedConcept({ pt: "Validação em projeto real", en: "Validation in a real project", es: "Validación en proyecto real" }, localizedProfileField(guide, profile, "testing")),
    localizedConcept({ pt: "Erros e limitações comuns", en: "Common errors and limitations", es: "Errores y limitaciones comunes" }, localizedProfileField(guide, profile, "errors")),
    localizedConcept({ pt: "Indicadores de acompanhamento", en: "Tracking metrics", es: "Indicadores de seguimiento" }, localizedProfileField(guide, profile, "metrics")),
    localizedConcept({ pt: "Segurança e compartilhamento", en: "Security and sharing", es: "Seguridad y compartición" }, localizedProfileField(guide, profile, "security")),
    localizedConcept({ pt: "Integrações e dependências", en: "Integrations and dependencies", es: "Integraciones y dependencias" }, localizedProfileField(guide, profile, "integration")),
    localizedConcept({ pt: "Critério de pronto", en: "Definition of done", es: "Criterio de listo" }, localizedProfileField(guide, profile, "done"))
  ];
};

const supplementalBestPractices = (guide: GuideItem): LocStringArray => {
  const profile = profileFor(guide);

  return {
    pt: [
      `Comece pelo cenário real: ${profileText(guide, profile, "scenario", "pt")}`,
      `Documente o problema antes da solução: ${profileText(guide, profile, "problem", "pt")}`,
      `Liste objetos e recursos antes de configurar: ${profileText(guide, profile, "records", "pt")}`,
      `Use API Names e valores de exemplo na especificação: ${profileText(guide, profile, "fields", "pt")}`,
      `Escolha automação pelo comportamento esperado, não por preferência de ferramenta: ${profileText(guide, profile, "automation", "pt")}`,
      `Transforme a regra de negócio em validação testável: ${profileText(guide, profile, "rule", "pt")}`,
      `Implemente em sandbox seguindo um caminho reproduzível: ${profileText(guide, profile, "implementation", "pt")}`,
      `Inclua exemplo concreto no handover: ${profileText(guide, profile, "example", "pt")}`,
      `Teste os erros comuns antes do go-live: ${profileText(guide, profile, "errors", "pt")}`,
      `Defina evidências de teste claras: ${profileText(guide, profile, "testing", "pt")}`,
      `Considere pronto apenas quando o critério for verificável: ${profileText(guide, profile, "done", "pt")}`,
      `Registre quando não usar essa abordagem: ${profileText(guide, profile, "avoid", "pt")}`
    ],
    en: [
      `Start from the real scenario: ${profileText(guide, profile, "scenario", "en")}`,
      `Document the problem before the solution: ${profileText(guide, profile, "problem", "en")}`,
      `List objects and features before configuring: ${profileText(guide, profile, "records", "en")}`,
      `Use API names and sample values in the specification: ${profileText(guide, profile, "fields", "en")}`,
      `Choose automation based on expected behavior, not tool preference: ${profileText(guide, profile, "automation", "en")}`,
      `Turn the business rule into a testable validation: ${profileText(guide, profile, "rule", "en")}`,
      `Implement in a sandbox following a reproducible path: ${profileText(guide, profile, "implementation", "en")}`,
      `Include a concrete example in the handover: ${profileText(guide, profile, "example", "en")}`,
      `Test common mistakes before go-live: ${profileText(guide, profile, "errors", "en")}`,
      `Define clear test evidence: ${profileText(guide, profile, "testing", "en")}`,
      `Consider it done only when the criterion is verifiable: ${profileText(guide, profile, "done", "en")}`,
      `Record when not to use this approach: ${profileText(guide, profile, "avoid", "en")}`
    ],
    es: [
      `Comienza por el escenario real: ${profileText(guide, profile, "scenario", "es")}`,
      `Documenta el problema antes de la solucion: ${profileText(guide, profile, "problem", "es")}`,
      `Lista objetos y recursos antes de configurar: ${profileText(guide, profile, "records", "es")}`,
      `Usa API Names y valores de ejemplo en la especificacion: ${profileText(guide, profile, "fields", "es")}`,
      `Elige automatizacion por el comportamiento esperado, no por preferencia de herramienta: ${profileText(guide, profile, "automation", "es")}`,
      `Convierte la regla de negocio en una validacion comprobable: ${profileText(guide, profile, "rule", "es")}`,
      `Implementa en sandbox siguiendo un camino reproducible: ${profileText(guide, profile, "implementation", "es")}`,
      `Incluye un ejemplo concreto en el handover: ${profileText(guide, profile, "example", "es")}`,
      `Prueba errores comunes antes del go-live: ${profileText(guide, profile, "errors", "es")}`,
      `Define evidencias de prueba claras: ${profileText(guide, profile, "testing", "es")}`,
      `Consideralo listo solo cuando el criterio sea verificable: ${profileText(guide, profile, "done", "es")}`,
      `Registra cuando no usar este enfoque: ${profileText(guide, profile, "avoid", "es")}`
    ]
  };
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

  return {
    pt: [
      `Usar em operação real quando o cenário se parece com: ${profileText(guide, profile, "scenario", "pt")}`,
      `Resolver o problema de negócio descrito por: ${profileText(guide, profile, "problem", "pt")}`,
      `Mapear registros e relacionamentos antes da entrega usando: ${profileText(guide, profile, "records", "pt")}`,
      `Validar campos, API Names e valores que sustentam a rotina: ${profileText(guide, profile, "fields", "pt")}`,
      `Configurar automações e recursos envolvidos sem sobrepor lógica: ${profileText(guide, profile, "automation", "pt")}`,
      `Aplicar regra operacional que o usuário consegue reconhecer no dia a dia: ${profileText(guide, profile, "rule", "pt")}`,
      `Executar a implementação com passos reproduzíveis: ${profileText(guide, profile, "implementation", "pt")}`,
      `Demonstrar o funcionamento com exemplo concreto: ${profileText(guide, profile, "example", "pt")}`,
      `Investigar chamados e incidentes a partir dos erros comuns: ${profileText(guide, profile, "errors", "pt")}`,
      `Encerrar a demanda somente depois de testar e provar: ${profileText(guide, profile, "testing", "pt")} Critério final: ${profileText(guide, profile, "done", "pt")}`
    ],
    en: [
      `Use it in a real operation when the scenario looks like: ${profileText(guide, profile, "scenario", "en")}`,
      `Solve the business problem described by: ${profileText(guide, profile, "problem", "en")}`,
      `Map records and relationships before delivery using: ${profileText(guide, profile, "records", "en")}`,
      `Validate fields, API names, and values that support the routine: ${profileText(guide, profile, "fields", "en")}`,
      `Configure automations and involved features without overlapping logic: ${profileText(guide, profile, "automation", "en")}`,
      `Apply an operational rule users can recognize day to day: ${profileText(guide, profile, "rule", "en")}`,
      `Run the implementation with reproducible steps: ${profileText(guide, profile, "implementation", "en")}`,
      `Demonstrate how it works with a concrete example: ${profileText(guide, profile, "example", "en")}`,
      `Investigate tickets and incidents from common mistakes: ${profileText(guide, profile, "errors", "en")}`,
      `Close the request only after testing and proving: ${profileText(guide, profile, "testing", "en")} Final criterion: ${profileText(guide, profile, "done", "en")}`
    ],
    es: [
      `Usalo en una operacion real cuando el escenario se parezca a: ${profileText(guide, profile, "scenario", "es")}`,
      `Resuelve el problema de negocio descrito por: ${profileText(guide, profile, "problem", "es")}`,
      `Mapea registros y relaciones antes de la entrega usando: ${profileText(guide, profile, "records", "es")}`,
      `Valida campos, API Names y valores que sostienen la rutina: ${profileText(guide, profile, "fields", "es")}`,
      `Configura automatizaciones y recursos involucrados sin superponer logica: ${profileText(guide, profile, "automation", "es")}`,
      `Aplica una regla operativa que el usuario pueda reconocer en el dia a dia: ${profileText(guide, profile, "rule", "es")}`,
      `Ejecuta la implementacion con pasos reproducibles: ${profileText(guide, profile, "implementation", "es")}`,
      `Demuestra el funcionamiento con un ejemplo concreto: ${profileText(guide, profile, "example", "es")}`,
      `Investiga tickets e incidentes a partir de errores comunes: ${profileText(guide, profile, "errors", "es")}`,
      `Cierra la demanda solo despues de probar y demostrar: ${profileText(guide, profile, "testing", "es")} Criterio final: ${profileText(guide, profile, "done", "es")}`
    ]
  };
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


export const enrichGuide = (guide: GuideItem): GuideItem => ({
  ...guide,
  keyConcepts: completeConcepts(guide),
  implementationGuide: implementationGuide(guide),
  bestPractices: completeBestPractices(guide),
  realUseCases: completeRealUseCases(guide),
  resources: completeResources(guide),
});
