# Testes

## Ferramentas

- Vitest com ambiente `jsdom`. Evidência: `vitest.config.ts`.
- `@testing-library/jest-dom` no setup. Evidência: `src/test/setup.ts`.
- Playwright instalado e configurado via `createLovableConfig`. Evidência: `package.json`, `playwright.config.ts`.

## Comandos

- `npm test`: executa `vitest run`. Evidência: `package.json`.
- `npm run test:watch`: executa `vitest`. Evidência: `package.json`.

## Testes Encontrados

- `src/test/example.test.ts` contém apenas um teste trivial `expect(true).toBe(true)`. Evidência: arquivo de teste.
- Não foram encontrados testes específicos para páginas, componentes, rotas, i18n, localStorage, PDF ou acessibilidade.

## Cobertura Aparente

- Cobertura funcional aparente é muito baixa, pois o único teste não exercita a aplicação. Evidência: `src/test/example.test.ts`.
- Não foi encontrado relatório de cobertura. Evidência: ausência de pasta `coverage` considerada e sem script de coverage em `package.json`.

## Mocks

- `matchMedia` é mockado em `src/test/setup.ts`. Evidência: arquivo de setup.
- Não foram encontrados mocks de API, porque não há chamadas de API confirmadas.

## Testes End-to-End

- Playwright está configurado, mas não foram encontrados specs E2E no workspace analisado. Evidência: `playwright.config.ts`, glob de arquivos.

## Testes de Acessibilidade

- Não foi possível confirmar testes automatizados de acessibilidade com os arquivos analisados.

## Estado dos Comandos Executados Durante Auditoria

- `npm run lint` falhou com 11 erros e 7 warnings. Evidência: saída do comando executado durante auditoria.
- Erros principais: `no-explicit-any`, `no-empty-object-type`, `no-require-imports` em `tailwind.config.ts`.
- `npm test` havia passado em execuções anteriores da sessão com 1 teste trivial; para esta auditoria, a existência e conteúdo do teste são a evidência principal.

## Funcionalidades Sem Teste Confirmado

- Roteamento e fallback 404.
- Troca de idioma.
- Avaliação de competências e cálculo de resultados.
- Geração de PDF.
- Persistência de guias customizados e notas.
- Formulário de contato/links externos.
- Renderização de páginas legais.
- Responsividade e navegação mobile.
