# Modelo de Dados

## Tipos Principais de Competências

Arquivo: `src/data/competencies/types.ts`.

| Modelo | Campos | Onde é criado | Onde é consumido | Transformação/Persistência |
|---|---|---|---|---|
| `LocString` | `pt`, `en`, `es` | dados de competências e guias | `getLocalizedString`, componentes | fallback em `src/utils/i18nHelper.ts` |
| `LocStringArray` | `pt`, `en`, `es` arrays | dados de competências e guias | `getLocalizedStringArray`, painéis | fallback em `src/utils/i18nHelper.ts` |
| `Skill` | `id`, `name`, `description`, `type`, `requirements` | `admin.ts`, `developer.ts`, `consultant.ts`, `architect.ts` | `CategoryCard`, `SkillRating`, `ResultsPanel`, `FinishPanel` | ratings por `id` em estado local |
| `CompetencyCategory` | `id`, `title`, `icon`, `description`, `color`, `skills`, opcionais `knowledgeGroups`, `strategy`, `evolution`, `interviewQuestions` | arquivos de competência | `HomePage`, `AssessmentPage`, `CareerPage` | agregado em `competencyCategories` |
| `KnowledgeGroup` | `title`, `items` | arquivos de competência | `KnowledgePanel` | sem persistência |
| `StrategyContent` | `mission`, `roleConnection`, `pillars` | arquivos de competência | `StrategyPanel` | sem persistência |
| `EvolutionContent` | `intro`, `stages`, `maturityLevels` | arquivos de competência | `EvolutionPanel` | sem persistência |
| `InterviewQuestion` | `question`, `answer` | arquivos de competência | `InterviewPanel` | sem persistência |

## Níveis de Competência

- `skillLevels` define valores `0` a `5`, com label e descrição localizados. Evidência: `src/data/competencies/levels.ts`.
- Usado por `SkillRating`, `ResultsPanel` e `FinishPanel`. Evidência: imports nesses arquivos.

## Dados de Guias

Arquivo: `src/data/guideData.ts`.

| Modelo | Campos | Onde é criado | Onde é consumido | Persistência |
|---|---|---|---|---|
| `KeyConcept` | `title`, `description`, `codeSnippet`, `codeLanguage` | `baseGuides` e funções suplementares | `GuideDetailPage` | default sem persistência; custom em localStorage pode ter array vazio |
| `ResourceLink` | `title`, `url`, `type` | `baseGuides` e `supplementalResources` | `GuideDetailPage` | sem persistência para defaults |
| `GuideItem` | `id`, `category`, `title`, `subtitle`, `description`, `iconName`, `tags`, `keyConcepts`, `implementationGuide`, `bestPractices`, `realUseCases`, `resources` | `baseGuides`, criação custom em `GuidePage` | `GuidePage`, `GuideDetailPage` | guias customizados em `localStorage` |

## Dados Estáticos

- Competências por carreira: `src/data/competencies/admin.ts`, `developer.ts`, `consultant.ts`, `architect.ts`.
- Guias Salesforce: `src/data/guideData.ts`.
- Traduções de UI: `src/locales/pt/common.json`, `src/locales/en/common.json`, `src/locales/es/common.json`.
- Assets públicos: `public/astro.png`, favicons, `robots.txt`, `sitemap.xml`.

## Dados Mockados ou Legados

- `legacy-pages/*.html` contêm tabelas HTML antigas com selects 1-10 para perfis. Não estão integradas ao router React. Evidência: `legacy-pages/adm.html`, `developer.html`, `consult.html`, `architect.html`, `src/App.tsx`.
- Não há mocks de API encontrados. Evidência: ausência de `fetch`/`axios` e pasta `services`.

## Armazenamento Local

| Chave | Origem | Conteúdo | Consumidor | Evidência |
|---|---|---|---|---|
| `sfs_guide_last_tab` | `GuidePage` | aba ativa do guia | `GuidePage` | `src/pages/GuidePage.tsx` |
| `sfs_custom_guides` | `GuidePage` | array JSON de `GuideItem` customizados | `GuidePage`, `GuideDetailPage` | `src/pages/GuidePage.tsx`, `src/pages/GuideDetailPage.tsx` |
| `sfs_guide_notes_${id}` | `GuideDetailPage` | notas livres por guia | `GuidePage`, `GuideDetailPage` | `src/pages/GuideDetailPage.tsx`, `GuidePage.tsx` |
| idioma i18next | `i18next-browser-languagedetector` | idioma detectado/persistido pelo detector | `src/i18n.ts`, `LanguageSwitcher` | `src/i18n.ts` comentário e configuração |

## Formulário de PDF

- Schema `formSchema` com `fullName`, `email`, `role`, `phone`, `linkedin`, `experience`, `lgpd`. Evidência: `src/components/FinishPanel.tsx`.
- Dados são usados para gerar PDF local via jsPDF e não são persistidos no código analisado. Evidência: `src/components/FinishPanel.tsx`.

## Origem dos Dados Exibidos

- Home e Assessment: `competencyCategories` + traduções. Evidência: `src/pages/HomePage.tsx`, `AssessmentPage.tsx`.
- Career: categoria selecionada em rota + ratings locais. Evidência: `src/pages/CareerPage.tsx`.
- Guide: `defaultGuides` + `localStorage`. Evidência: `src/pages/GuidePage.tsx`.
- Legal: arrays de tradução em locales. Evidência: `src/pages/LegalPage.tsx`, `src/locales/*/common.json`.
