# Stack Tecnológica

## Tecnologias Principais

| Categoria | Tecnologia | Versão | Finalidade | Evidência |
|---|---:|---:|---|---|
| Linguagem | TypeScript | `^5.8.3` | tipagem da aplicação | `package.json`, `tsconfig.app.json` |
| Runtime/pacote | Node/npm | Não foi possível confirmar versão | execução de scripts npm | `package.json`, `package-lock.json` |
| Framework UI | React | `^18.3.1` | UI declarativa | `package.json`, `src/main.tsx` |
| DOM renderer | react-dom | `^18.3.1` | montagem em `#root` | `package.json`, `src/main.tsx` |
| Bundler/dev server | Vite | `^5.4.19` | desenvolvimento e build | `package.json`, `vite.config.ts` |
| Plugin React | `@vitejs/plugin-react-swc` | `^3.11.0` | JSX/React via SWC | `package.json`, `vite.config.ts` |
| Roteamento | react-router-dom | `^6.30.1` | rotas SPA | `package.json`, `src/App.tsx` |
| Estado remoto/cache | @tanstack/react-query | `^5.83.0` | provider configurado; não há queries encontradas | `package.json`, `src/App.tsx` |
| CSS utilitário | Tailwind CSS | `^3.4.17` | estilização utilitária | `package.json`, `tailwind.config.ts`, `src/index.css` |
| PostCSS | postcss/autoprefixer | `^8.5.6` / `^10.4.21` | processamento CSS | `package.json`, `postcss.config.js` |
| UI primitives | Radix UI | múltiplas versões | componentes base em `src/components/ui` | `package.json`, `src/components/ui/*` |
| Formulários | react-hook-form | `^7.61.1` | formulário de finalização | `package.json`, `src/components/FinishPanel.tsx` |
| Validação | zod | `^3.25.76` | schema do formulário | `package.json`, `src/components/FinishPanel.tsx` |
| Resolver | @hookform/resolvers | `^3.10.0` | integração RHF/Zod | `package.json`, `src/components/FinishPanel.tsx` |
| Internacionalização | i18next | `^26.0.7` | core i18n | `package.json`, `src/i18n.ts` |
| Internacionalização React | react-i18next | `^17.0.4` | hooks e Trans | `package.json`, `src/i18n.ts`, páginas |
| Detecção de idioma | i18next-browser-languagedetector | `^8.2.1` | detecção browser/localStorage | `package.json`, `src/i18n.ts` |
| Ícones | lucide-react | `^0.462.0` | ícones UI | `package.json`, páginas e componentes |
| Animações | framer-motion | `^12.38.0` | animações de entrada/interação | `package.json`, páginas e componentes |
| Gráficos | recharts | `^2.15.4` | radar chart de resultados | `package.json`, `src/components/ResultsPanel.tsx` |
| PDF | jspdf | `^4.2.1` | geração de relatório PDF | `package.json`, `src/components/FinishPanel.tsx` |
| Tabelas PDF | jspdf-autotable | `^5.0.7` | tabelas no PDF | `package.json`, `src/components/FinishPanel.tsx` |
| Toast | sonner | `^1.7.4` | toaster global | `package.json`, `src/App.tsx`, `src/components/ui/sonner.tsx` |
| Tema | next-themes | `^0.3.0` | usado pelo toaster Sonner | `package.json`, `src/components/ui/sonner.tsx` |
| Testes unitários | Vitest | `^3.2.4` | testes | `package.json`, `vitest.config.ts` |
| Ambiente de teste | jsdom | `^20.0.3` | DOM em testes | `package.json`, `vitest.config.ts` |
| Testing Library | @testing-library/jest-dom | `^6.6.0` | matchers DOM | `package.json`, `src/test/setup.ts` |
| E2E | Playwright | `^1.57.0` | configurado, sem testes encontrados | `package.json`, `playwright.config.ts` |
| Lint | ESLint | `^9.32.0` | análise estática | `package.json`, `eslint.config.js` |

## Dependências de Produção

- Produção declarada em `dependencies`: React, React Router, i18n, Framer Motion, Lucide, Radix UI, Tailwind helpers, Recharts, React Hook Form, Zod, jsPDF, Sonner e bibliotecas de UI. Evidência: `package.json`.
- Uso direto confirmado para: React, React Router, i18n, Framer Motion, Lucide, Recharts, React Hook Form, Zod, jsPDF, jsPDF AutoTable, Sonner, next-themes, cmdk, vaul, embla-carousel-react, react-day-picker, input-otp, react-resizable-panels. Evidência: busca de imports em `src/**/*.{ts,tsx}`.

## Dependências de Desenvolvimento

- Desenvolvimento declarado em `devDependencies`: TypeScript, Vite, plugin React SWC, ESLint, Vitest, jsdom, Testing Library, Tailwind/PostCSS, Playwright. Evidência: `package.json`.

## Dependências Instaladas com Uso Não Confirmado na Aplicação Principal

- `date-fns`: não foi encontrado import em `src/**/*.{ts,tsx}` durante a auditoria. Evidência: `package.json` e busca por imports.
- `@playwright/test`: configuração existe, mas não foram encontrados arquivos de teste E2E. Evidência: `package.json`, `playwright.config.ts`, glob de arquivos.
- Algumas primitivas Radix podem existir apenas como wrappers em `src/components/ui` e não necessariamente ser consumidas por páginas. Evidência: `src/components/ui/*`, busca de imports.

## Ausências Confirmadas

- Backend próprio: não foi possível confirmar com os arquivos analisados.
- Banco de dados: não foi possível confirmar com os arquivos analisados.
- Autenticação: não foi possível confirmar com os arquivos analisados.
- Analytics: não foi possível confirmar com os arquivos analisados.
- Variáveis de ambiente: não há `.env*` encontrado no workspace analisado.
