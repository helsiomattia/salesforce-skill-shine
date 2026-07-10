# Inventário de Componentes e Páginas

## Páginas

| Nome | Caminho | Responsabilidade | Dependências principais | Props | Estado/Eventos | Rotas |
|---|---|---|---|---|---|---|
| `HomePage` | `src/pages/HomePage.tsx` | landing page, trilhas, jornada, pirâmide, confiança | React Router, Framer Motion, i18n, competencies, Lucide | nenhuma | renderiza dados estáticos; CTA para assessment e guide/career paths | `/` |
| `AssessmentPage` | `src/pages/AssessmentPage.tsx` | seleção de carreira para avaliação | React Router, Framer Motion, i18n, competencies | nenhuma | links para rotas `/assessment/:category` | `/assessment` |
| `CareerPage` | `src/pages/CareerPage.tsx` | avaliação por carreira, tabs, resultados e PDF | Tabs UI, CategoryCard, ResultsPanel, FinishPanel, data | `categoryId: string` | `ratings`, `activeTab`, `handleRate` | `/assessment/admin`, `/assessment/developer`, `/assessment/consultant`, `/assessment/architect` |
| `GuidePage` | `src/pages/GuidePage.tsx` | lista, busca e criação de guias | guideData, i18n, localStorage, Dialog, Input | nenhuma | `activeTab`, `searchQuery`, `customGuides`, form de guia | `/guide` |
| `GuideDetailPage` | `src/pages/GuideDetailPage.tsx` | detalhe de guia, notas e links | guideData, i18n, localStorage, clipboard | rota `id` via `useParams` | `guide`, `notFound`, `notes`, `saveStatus`, autosave | `/guide/:id` |
| `ContactPage` | `src/pages/ContactPage.tsx` | página de contato e CTA externo | React Router, Framer Motion, i18n, Lucide | nenhuma | links externos e internos | `/contact` |
| `LegalPage` | `src/pages/LegalPage.tsx` | páginas legais parametrizadas por conteúdo | i18n, React Router | `pageKey`, `fallbackTitleKey`, `fallbackDescKey`, `updated` | leitura de arrays de tradução | `/privacy`, `/terms`, `/editorial-policy` |
| `NotFound` | `src/pages/NotFound.tsx` | estado 404 | React Router, i18n | nenhuma | `useEffect` com `console.error` | `*`, `errorElement` |

## Layouts

| Nome | Caminho | Responsabilidade | Dependências | Estado | Observações |
|---|---|---|---|---|---|
| `AppLayout` | `src/components/layout/AppLayout.tsx` | compor `TopNav`, `Outlet`, `Footer` | React Router Outlet | nenhum | layout global confirmado |
| `TopNav` | `src/components/layout/TopNav.tsx` | navegação principal e menu mobile | React Router, i18n, LanguageSwitcher | `mobileMenuOpen` | usa `any` em `getNavItems`, lint falha |
| `Footer` | `src/components/layout/Footer.tsx` | links legais e externos | React Router, i18n, Lucide | nenhum | externos usam `rel="noreferrer noopener"` |
| `Sidebar` | `src/components/layout/Sidebar.tsx` | navegação lateral/links autor | React Router, i18n | possui props `open`, `onToggle` | não está integrado em `AppLayout` |

## Componentes de Domínio

| Nome | Caminho | Tipo | Responsabilidade | Props | Estado/Eventos | Reutilização |
|---|---|---|---|---|---|---|
| `CareerPath` | `src/components/CareerPath.tsx` | domínio/navegação | navegação visual de etapas | `items`, `currentId`, `onSelect` | chama `onSelect` | `CareerPage` |
| `CategoryCard` | `src/components/CategoryCard.tsx` | domínio | renderiza skills e ratings por categoria | `category`, `ratings`, `onRate`, `filterType` | delega rating para `SkillRating` | `CareerPage` |
| `SkillRating` | `src/components/SkillRating.tsx` | domínio/input | seleção 0-5 por competência | `value`, `onChange`, `skillName`, `description`, `requirements` | `isExpanded` | `CategoryCard` |
| `ResultsPanel` | `src/components/ResultsPanel.tsx` | domínio/analytics | média, radar chart e recomendações | `ratings`, `categories`, `type`, `title` | derivado de props | `CareerPage` |
| `FinishPanel` | `src/components/FinishPanel.tsx` | domínio/form/PDF | formulário final e geração de PDF | `category`, `ratings` | `isGenerating`, `pdfError`, RHF | `CareerPage` |
| `KnowledgePanel` | `src/components/KnowledgePanel.tsx` | domínio | grupos de conhecimento | `groups` | nenhum | `CareerPage` |
| `StrategyPanel` | `src/components/StrategyPanel.tsx` | domínio | pilares estratégicos | `strategy` | nenhum | `CareerPage` |
| `EvolutionPanel` | `src/components/EvolutionPanel.tsx` | domínio | estágios/evolução | `evolution` | nenhum | `CareerPage` |
| `InterviewPanel` | `src/components/InterviewPanel.tsx` | domínio | perguntas de entrevista | `questions` | estado interno do Accordion via UI | `CareerPage` |
| `LanguageSwitcher` | `src/components/LanguageSwitcher.tsx` | compartilhado | troca de idioma | `variant`, `showLabels` | chama `i18n.changeLanguage` | `TopNav`, `Sidebar` |
| `ScrollToTop` | `src/components/ScrollToTop.tsx` | compartilhado | scroll no início ao trocar rota | nenhuma | `useEffect` por location | `src/App.tsx` |
| `SectionTitle` | `src/components/SectionTitle.tsx` | compartilhado | título reutilizável | `children`, etc. | nenhum | uso não confirmado na auditoria |

## Componentes UI Base

- Pasta: `src/components/ui`.
- Responsabilidade: wrappers de componentes base como `button`, `dialog`, `tabs`, `accordion`, `toast`, `form`, `calendar`, `carousel`, `chart`, etc.
- Evidência: arquivos em `src/components/ui/*`, `components.json`.
- Observação: alguns wrappers são importados pela aplicação (`Dialog`, `Tabs`, `Button`, `Input`, `Textarea`, `Badge`, `Accordion`); outros podem estar disponíveis mas sem consumo direto confirmado.

## Hooks

| Nome | Caminho | Responsabilidade | Estado | Evidência |
|---|---|---|---|---|
| `useToast` | `src/hooks/use-toast.ts` | gerenciamento de toasts em memória | `memoryState`, listeners | arquivo do hook |
| `useIsMobile` | `src/hooks/use-mobile.tsx` | detectar viewport mobile via media query | `isMobile` | arquivo do hook |

## Utilitários

| Nome | Caminho | Responsabilidade | Evidência |
|---|---|---|---|
| `getLocalizedString` | `src/utils/i18nHelper.ts` | escolher `pt/en/es` com fallback para `pt` | arquivo utilitário |
| `getLocalizedStringArray` | `src/utils/i18nHelper.ts` | escolher arrays localizados | arquivo utilitário |
| `cn` | `src/lib/utils.ts` | combinar classes com `clsx` e `tailwind-merge` | arquivo utilitário |

## Serviços/APIs

- Não foi encontrada pasta `services` nem chamadas `fetch`/`axios` no `src`. Evidência: busca por `fetch(` e imports.
- Não foi possível confirmar serviços de backend com os arquivos analisados.
