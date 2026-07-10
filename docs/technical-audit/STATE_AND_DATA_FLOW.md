# Estado e Fluxo de Dados

## Estado Global

- `QueryClientProvider` é configurado globalmente. Evidência: `src/App.tsx`.
- Não foram encontradas chamadas `useQuery` ou `useMutation`; portanto, não foi possível confirmar uso real de cache remoto. Evidência: busca por `useQuery|useMutation`.
- i18n é global via `initReactI18next`. Evidência: `src/i18n.ts`, import em `src/main.tsx`.

## Estado Local por Área

| Área | Estado | Origem | Alteração | Repasse | Evidência |
|---|---|---|---|---|---|
| Navegação mobile | `mobileMenuOpen` | `TopNav` | botão menu, `useEffect` por rota | render condicional menu | `src/components/layout/TopNav.tsx` |
| Avaliação | `ratings`, `activeTab` | `CareerPage` | `handleRate`, `setActiveTab` | `CategoryCard`, `ResultsPanel`, `FinishPanel` | `src/pages/CareerPage.tsx` |
| SkillRating | `isExpanded` | `SkillRating` | botão critérios, seleção de nível | não repassa | `src/components/SkillRating.tsx` |
| Guia lista | `activeTab`, `searchQuery`, `customGuides`, form modal | `GuidePage` | inputs, tabs, criação/deleção | render de cards | `src/pages/GuidePage.tsx` |
| Guia detalhe | `guide`, `notFound`, `notes`, `saveStatus` | `GuideDetailPage` | `useEffect`, textarea, autosave | render detalhe | `src/pages/GuideDetailPage.tsx` |
| PDF | `isGenerating`, `pdfError` | `FinishPanel` | submit e try/catch | render form/erro | `src/components/FinishPanel.tsx` |
| Toast hook | `memoryState` | `use-toast.ts` | reducer/dispatch | listeners | `src/hooks/use-toast.ts` |

## Fluxo de Avaliação

1. `AssessmentPage` lista `competencyCategories` e cria links para `/assessment/${category.id}`. Evidência: `src/pages/AssessmentPage.tsx`.
2. `src/App.tsx` passa `categoryId` fixo para `CareerPage`.
3. `CareerPage` encontra a categoria em `competencyCategories`. Evidência: `src/pages/CareerPage.tsx`.
4. `CategoryCard` recebe `ratings` e `onRate`; `SkillRating` chama `onChange`. Evidência: `CategoryCard.tsx`, `SkillRating.tsx`.
5. `ResultsPanel` calcula média, forças, gaps e radar a partir de `ratings`. Evidência: `src/components/ResultsPanel.tsx`.
6. `FinishPanel` usa `ratings` e dados do formulário para gerar PDF. Evidência: `src/components/FinishPanel.tsx`.

## Fluxo de Guias

1. `GuidePage` combina `defaultGuides` com `customGuides`. Evidência: `src/pages/GuidePage.tsx`.
2. Filtros usam categoria ativa, busca e helpers de localização. Evidência: `src/pages/GuidePage.tsx`.
3. Clique no card navega para `/guide/${guide.id}`. Evidência: `src/pages/GuidePage.tsx`.
4. `GuideDetailPage` procura primeiro em `defaultGuides`, depois em `localStorage`. Evidência: `src/pages/GuideDetailPage.tsx`.
5. Notas são salvas em `localStorage` com debounce via `setTimeout`. Evidência: `src/pages/GuideDetailPage.tsx`.

## Persistência

- Persistência confirmada apenas em browser `localStorage` para guia/idioma. Evidência: `GuidePage.tsx`, `GuideDetailPage.tsx`, `src/i18n.ts`.
- Ratings da avaliação não são persistidos. Evidência: `CareerPage.tsx` usa `useState` sem storage.
- Dados do formulário do PDF não são persistidos. Evidência: `FinishPanel.tsx` usa `react-hook-form` e `doc.save`.

## Efeitos Colaterais

- `ScrollToTop` executa `window.scrollTo` em mudança de pathname. Evidência: `src/components/ScrollToTop.tsx`.
- `TopNav` fecha menu mobile ao trocar rota. Evidência: `src/components/layout/TopNav.tsx`.
- `GuideDetailPage` usa `navigator.clipboard.writeText`. Evidência: `src/pages/GuideDetailPage.tsx`.
- `FinishPanel` chama `doc.save(...)` para baixar PDF. Evidência: `src/components/FinishPanel.tsx`.

## Possíveis Problemas de Sincronização

- `localStorage` de guias customizados pode ficar inconsistente se JSON for alterado manualmente; há `try/catch`, mas não há validação Zod do shape. Evidência: `GuidePage.tsx`, `GuideDetailPage.tsx`.
- `GuidePage` consulta `localStorage` para detectar notas dentro do render de cada card; mudanças feitas em outra aba podem não atualizar a UI sem novo render. Evidência: `src/pages/GuidePage.tsx`.
- Ratings somem ao trocar rota/recarregar, pois são estado local. Evidência: `src/pages/CareerPage.tsx`.
