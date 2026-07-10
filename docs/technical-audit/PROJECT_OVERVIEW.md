# Visão Geral do Projeto

## Identificação Geral

- Nome do projeto: `salesforce-skill-shine`. Evidência: `package.json`.
- Nome público exibido: Skill Shine / Salesforce Skill Shine. Evidência: `index.html`, `src/components/layout/Footer.tsx`, `README.md`.
- Tipo de aplicação: SPA web em React, renderizada no cliente. Evidência: `src/main.tsx`, `src/App.tsx`, `vite.config.ts`.
- Objetivo aparente: orientar trilhas profissionais em CRM/Salesforce, autoavaliação de competências, guias e referências práticas. Evidência: `README.md`, `index.html`, `src/pages/HomePage.tsx`, `src/pages/AssessmentPage.tsx`, `src/pages/GuidePage.tsx`.
- Nível de maturidade atual: aplicação funcional em desenvolvimento contínuo, com dados estáticos, i18n, avaliação local e geração de PDF; testes automatizados mínimos e lint falhando. Evidência: `README.md`, `src/test/example.test.ts`, resultado de `npm run lint`, `src/components/FinishPanel.tsx`.

## Comandos Disponíveis

| Comando | Finalidade | Evidência |
|---|---|---|
| `npm run dev` | inicia Vite em desenvolvimento | `package.json`, `vite.config.ts` |
| `npm run build` | gera build de produção | `package.json` |
| `npm run build:dev` | gera build em modo development | `package.json` |
| `npm run lint` | executa ESLint | `package.json`, `eslint.config.js` |
| `npm run preview` | pré-visualiza build Vite | `package.json` |
| `npm test` | executa Vitest uma vez | `package.json`, `vitest.config.ts` |
| `npm run test:watch` | executa Vitest em watch mode | `package.json` |

## Execução Local

- Instalação provável: `npm install`, pois há `package-lock.json`. Evidência: `package-lock.json`, `README.md`.
- Execução local: `npm run dev`. Evidência: `package.json`, `README.md`.
- Porta configurada: `8080`. Evidência: `vite.config.ts`.

## Build

- Build via Vite: `vite build`. Evidência: `package.json`.
- Diretório gerado padrão: `dist/`. Evidência: comportamento padrão do Vite e `README.md`; o `vite.config.ts` não redefine `build.outDir`.
- Base path: `/salesforce-skill-shine/`. Evidência: `vite.config.ts`.

## Publicação

- Há configuração de base path e fallback SPA para GitHub Pages. Evidência: `vite.config.ts`, `public/404.html`, `index.html`.
- O README afirma deploy automático por GitHub Actions, mas não há `.github/workflows` no workspace analisado. Evidência: `README.md`; busca por `.github/workflows/*` sem resultados.
- Forma de publicação automatizada não foi possível confirmar com os arquivos analisados.

## Pontos Confirmados

- A aplicação usa React Router Data Router com `createBrowserRouter`. Evidência: `src/App.tsx`.
- A aplicação usa i18next com idiomas `pt`, `en` e `es`. Evidência: `src/i18n.ts`, `src/locales/*/common.json`.
- A aplicação usa dados estáticos em TypeScript para competências e guias. Evidência: `src/data/competencies/*`, `src/data/guideData.ts`.
- A avaliação usa estado local em React e não persiste ratings em storage. Evidência: `src/pages/CareerPage.tsx`.
- Guias customizados e notas são persistidos em `localStorage`. Evidência: `src/pages/GuidePage.tsx`, `src/pages/GuideDetailPage.tsx`.
