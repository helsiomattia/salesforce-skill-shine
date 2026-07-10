# Auditoria Técnica

Documentação gerada a partir dos arquivos do repositório, conforme `audittech.txt`. A auditoria considera apenas evidências verificáveis no código, configurações e assets versionados.

## Índice

1. [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - visão geral do projeto.
2. [TECH_STACK.md](./TECH_STACK.md) - tecnologias, versões e dependências.
3. [ARCHITECTURE.md](./ARCHITECTURE.md) - arquitetura, fluxos e diagramas Mermaid.
4. [DIRECTORY_STRUCTURE.md](./DIRECTORY_STRUCTURE.md) - estrutura de diretórios.
5. [COMPONENT_INVENTORY.md](./COMPONENT_INVENTORY.md) - inventário de páginas, layouts, componentes, hooks e utilitários.
6. [ROUTES.md](./ROUTES.md) - rotas e navegação.
7. [DATA_MODEL.md](./DATA_MODEL.md) - tipos, modelos, dados estáticos e persistência.
8. [STATE_AND_DATA_FLOW.md](./STATE_AND_DATA_FLOW.md) - estado e fluxo de dados.
9. [UI_DESIGN_SYSTEM.md](./UI_DESIGN_SYSTEM.md) - estilos e padrões visuais.
10. [I18N.md](./I18N.md) - internacionalização.
11. [INTEGRATIONS.md](./INTEGRATIONS.md) - APIs, serviços externos e variáveis de ambiente.
12. [SECURITY.md](./SECURITY.md) - análise de segurança.
13. [TESTING.md](./TESTING.md) - estratégia e cobertura de testes.
14. [BUILD_AND_DEPLOY.md](./BUILD_AND_DEPLOY.md) - build, CI/CD e publicação.
15. [QUALITY_REPORT.md](./QUALITY_REPORT.md) - problemas, severidade e recomendações.
16. [ROADMAP.md](./ROADMAP.md) - plano priorizado de evolução técnica.
17. [PROJECT_CONTEXT_FOR_AI.md](./PROJECT_CONTEXT_FOR_AI.md) - contexto autocontido para outras IAs.

## Evidência Base

- Configuração e scripts: `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `eslint.config.js`, `tailwind.config.ts`, `postcss.config.js`, `vitest.config.ts`, `playwright.config.ts`, `components.json`.
- Entrada e rotas: `index.html`, `src/main.tsx`, `src/App.tsx`.
- UI e domínio: `src/pages/*`, `src/components/*`, `src/data/*`, `src/locales/*`.
- Deploy/static: `public/404.html`, `public/robots.txt`, `public/sitemap.xml`, `vite.config.ts`.

## Limites

- Não há `.github/workflows` no workspace analisado.
- Não há arquivos `.env*` no workspace analisado.
- `dist`, `node_modules`, caches e arquivos gerados foram ignorados conforme instrução.
