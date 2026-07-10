# Relatório de Qualidade

## Estado do Lint

Comando executado: `npm run lint`.

Resultado: falhou com 18 problemas, sendo 11 erros e 7 warnings.

Principais ocorrências:

- `@typescript-eslint/no-explicit-any`: `ResultsPanel.tsx`, `Sidebar.tsx`, `TopNav.tsx`, `GuideDetailPage.tsx`, `GuidePage.tsx`.
- `@typescript-eslint/no-empty-object-type`: `src/components/ui/command.tsx`, `src/components/ui/textarea.tsx`.
- `@typescript-eslint/no-require-imports`: `tailwind.config.ts`.
- `react-refresh/only-export-components`: warnings em componentes UI.

## Problemas Encontrados

| Severidade | Arquivo | Evidência | Impacto | Recomendação | Esforço |
|---|---|---|---|---|---|
| Alta | vários | `npm run lint` falha | CI de qualidade bloquearia merge/deploy se lint for obrigatório | corrigir tipos `any`, interfaces vazias e require no Tailwind | Médio |
| Alta | `src/components/FinishPanel.tsx` | arquivo com schema, copy, cálculos, layout e PDF em um componente grande | baixa manutenibilidade e alto risco de regressão | separar schema, geração de PDF, textos e UI | Alto |
| Média | `src/data/guideData.ts` | arquivo com milhares de linhas, dados e funções de enriquecimento | bundle maior e manutenção difícil | dividir por categoria e mover geradores | Alto |
| Média | `src/pages/GuidePage.tsx` | custom guides salvos sem validação estrutural | dados corrompidos podem afetar tela | validar localStorage com schema | Médio |
| Média | `src/index.css` | `p { text-align: justify; }` global | legibilidade e controle visual inconsistentes | remover regra global e aplicar por contexto | Baixo |
| Média | `src/App.tsx` | imports diretos de todas as páginas | sem code splitting por rota | usar `React.lazy`/dynamic imports | Médio |
| Média | `src/components/LanguageSwitcher.tsx` | imagens remotas para bandeiras | dependência externa visual | servir assets localmente | Baixo |
| Média | `public/sitemap.xml` | sitemap não lista `/contact` e rotas de assessment específicas | SEO incompleto | atualizar sitemap | Baixo |
| Baixa | `README.md` | menciona GitHub Actions não encontrados | documentação pode induzir erro operacional | ajustar README ou adicionar workflow | Baixo |
| Baixa | `src/components/layout/Sidebar.tsx` | componente não integrado ao `AppLayout` atual | possível código morto/confusão | remover se legado ou integrar | Baixo |
| Baixa | `legacy-pages/*` | páginas HTML legadas fora do router | ruído de manutenção | arquivar em docs/legacy ou remover | Baixo |

## Tipagem

- `tsconfig.app.json` usa `strict: true` e `noImplicitAny: true`.
- `tsconfig.json` raiz tem `noImplicitAny: false` e `strictNullChecks: false`, mas referencia o app config. Evidência: `tsconfig.json`, `tsconfig.app.json`.
- Apesar de strict no app, lint encontrou `any` explícitos. Evidência: `npm run lint`.

## Performance

- Build anterior na sessão reportou chunk principal acima de 500 kB após minificação. Evidência: saída de `npm run build` em execuções da sessão.
- Possíveis causas comprovadas por imports: `jspdf`, `jspdf-autotable`, `recharts`, dados grandes em `guideData.ts`, todas as rotas importadas diretamente em `App.tsx`.
- Não foram medidas métricas Lighthouse/Core Web Vitals.

## Acessibilidade

- Pontos positivos: uso de links e botões semânticos, labels no formulário, `alt` em imagens principais, `rel` em links externos. Evidência: `FinishPanel.tsx`, `HomePage.tsx`, `Footer.tsx`.
- Riscos: menu mobile não declara `aria-expanded`; botões de ícone em algumas áreas dependem de título/ícone; não há testes a11y. Evidência: `TopNav.tsx`, `GuidePage.tsx`, `src/test/example.test.ts`.

## Código Morto ou Subutilizado

- `Sidebar` não está ligado ao layout atual. Evidência: `AppLayout.tsx` importa `TopNav`/`Footer`, não `Sidebar`.
- `date-fns` está instalado, mas não foi encontrado import em `src`. Evidência: `package.json`, busca de imports.
- Playwright está instalado/configurado, mas sem testes encontrados. Evidência: `playwright.config.ts`, glob.

## Pontos Positivos

- Organização clara por páginas, componentes, dados, locales e utilitários. Evidência: estrutura de `src/`.
- i18n em três idiomas com helpers para dados localizados. Evidência: `src/i18n.ts`, `i18nHelper.ts`, `src/locales/*`.
- Dados de domínio tipados em `src/data/competencies/types.ts`.
- Formulário final usa React Hook Form + Zod. Evidência: `FinishPanel.tsx`.
- Fallback para SPA em GitHub Pages implementado. Evidência: `public/404.html`, `index.html`.
