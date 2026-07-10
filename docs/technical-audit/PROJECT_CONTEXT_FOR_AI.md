# Contexto do Projeto para IA

## Propósito

Salesforce Skill Shine é uma SPA educacional para orientar trilhas profissionais em CRM/Salesforce, com avaliação de competências, guias/tutoriais, páginas legais e contato. Evidência: `README.md`, `src/pages/HomePage.tsx`, `src/pages/AssessmentPage.tsx`, `src/pages/GuidePage.tsx`.

## Stack

- React 18 + TypeScript + Vite. Evidência: `package.json`, `vite.config.ts`, `src/main.tsx`.
- React Router v6 Data Router. Evidência: `src/App.tsx`.
- Tailwind CSS + tokens CSS globais. Evidência: `tailwind.config.ts`, `src/index.css`.
- i18next/react-i18next com `pt`, `en`, `es`. Evidência: `src/i18n.ts`, `src/locales/*/common.json`.
- Framer Motion e Lucide React para animações/ícones. Evidência: `package.json`, imports em páginas.
- React Hook Form + Zod + jsPDF no relatório final. Evidência: `src/components/FinishPanel.tsx`.

## Arquitetura

- Entrada: `index.html` -> `src/main.tsx` -> `src/App.tsx`.
- Layout global: `AppLayout` com `TopNav`, `Outlet`, `Footer`.
- Rotas centralizadas em `src/App.tsx`.
- Dados de domínio ficam em `src/data/competencies/*` e `src/data/guideData.ts`.
- Traduções ficam em `src/locales/{pt,en,es}/common.json`.

## Estrutura

```text
src/pages        rotas principais
src/components   componentes de domínio, layout e UI
src/data         dados estáticos de competências e guias
src/locales      traduções
src/hooks        hooks compartilhados
src/utils        helpers de i18n
src/lib          utilitários gerais
public           assets, SEO e fallback 404
```

## Rotas

- `/` -> `HomePage`.
- `/assessment` -> `AssessmentPage`.
- `/assessment/admin`, `/assessment/developer`, `/assessment/consultant`, `/assessment/architect` -> `CareerPage` com `categoryId`.
- `/guide` -> `GuidePage`.
- `/guide/:id` -> `GuideDetailPage`.
- `/contact` -> `ContactPage`.
- `/privacy`, `/terms`, `/editorial-policy` -> páginas legais.
- `*` -> `NotFound`.

## Estado

- Ratings da avaliação ficam em `CareerPage` via `useState` e não são persistidos.
- Guias customizados, aba ativa e notas usam `localStorage` em `GuidePage`/`GuideDetailPage`.
- Formulário final usa React Hook Form e gera PDF local; não há envio para backend confirmado.
- React Query está configurado, mas não há uso de `useQuery`/`useMutation` confirmado.

## Estilos

- Preferir Tailwind e tokens existentes de `src/index.css`.
- Usar `cn` de `src/lib/utils.ts` para combinar classes quando necessário.
- Padrões visuais recorrentes: branco, slate, azul/cyan, bordas arredondadas grandes, sombras suaves.
- Cuidado com regra global `p { text-align: justify; }` em `src/index.css`.

## Internacionalização

- Textos de UI devem ir para `src/locales/*/common.json`.
- Dados localizados devem seguir `LocString`/`LocStringArray`.
- Usar `getLocalizedString` e `getLocalizedStringArray` para dados de domínio.
- Manter `pt`, `en`, `es` sincronizados.

## Comandos

- `npm run dev` - desenvolvimento em Vite, porta 8080.
- `npm run build` - build de produção.
- `npm test` - Vitest.
- `npm run lint` - ESLint, atualmente falha.

## Deploy

- Base path Vite: `/salesforce-skill-shine/`.
- Fallback SPA: `public/404.html` + script em `index.html`.
- GitHub Actions não foi confirmado; não existe `.github/workflows` no workspace analisado.

## Limitações

- Lint falha com `any`, interfaces vazias e `require` no Tailwind.
- Testes são mínimos e triviais.
- `FinishPanel.tsx` e `guideData.ts` são grandes e concentrados.
- Não há backend, banco, autenticação ou analytics confirmados.

## Regras para Alterações por IA

- Não inventar backend, autenticação, banco ou APIs.
- Não remover dados de domínio sem validar rotas e componentes consumidores.
- Preservar i18n em `pt/en/es` para qualquer texto novo.
- Não persistir dados pessoais além do comportamento atual sem pedido explícito.
- Validar com `npm run build`, `npm test` e, quando a tarefa envolver qualidade, `npm run lint`.
- Se mexer em rotas publicadas, revisar `public/sitemap.xml`, `public/404.html`, `index.html` e `vite.config.ts`.
