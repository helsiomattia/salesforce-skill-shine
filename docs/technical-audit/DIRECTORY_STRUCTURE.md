# Estrutura de Diretórios

## Árvore Simplificada

```text
.
├── docs/technical-audit/
├── legacy-pages/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   │   └── competencies/
│   ├── hooks/
│   ├── lib/
│   ├── locales/
│   │   ├── en/
│   │   ├── es/
│   │   └── pt/
│   ├── pages/
│   ├── test/
│   └── utils/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tailwind.config.ts
├── eslint.config.js
├── tsconfig*.json
├── vitest.config.ts
└── playwright.config.ts
```

## Pastas Relevantes

| Pasta | Responsabilidade | Principais arquivos | Relações | Riscos | Oportunidades |
|---|---|---|---|---|---|
| `src/pages` | componentes de rota | `HomePage.tsx`, `AssessmentPage.tsx`, `CareerPage.tsx`, `GuidePage.tsx`, `GuideDetailPage.tsx`, `ContactPage.tsx`, `LegalPage.tsx`, `NotFound.tsx` | consumidas por `src/App.tsx` | páginas concentram bastante lógica e markup | dividir blocos maiores em componentes menores |
| `src/components` | componentes compartilhados e de domínio | `CategoryCard`, `SkillRating`, `ResultsPanel`, `FinishPanel`, painéis de carreira | usados por páginas | `FinishPanel` é muito grande | separar PDF, schema e UI |
| `src/components/layout` | layout global e navegação | `AppLayout`, `TopNav`, `Footer`, `Sidebar` | `AppLayout` envolve rotas | `Sidebar` existe mas não é usado no layout atual confirmado | remover ou integrar conscientemente |
| `src/components/ui` | wrappers de UI base, majoritariamente estilo shadcn/Radix | `button`, `dialog`, `tabs`, `toast`, etc. | usados por páginas e domínio | muitos wrappers podem estar sem uso direto | auditar componentes não usados |
| `src/data/competencies` | dados estáticos de carreiras e tipos | `types.ts`, `levels.ts`, `admin.ts`, `developer.ts`, `consultant.ts`, `architect.ts`, `index.ts` | consumidos por Assessment/Career/Home | dados grandes no bundle | considerar carregamento sob demanda |
| `src/data` | dados de guia | `guideData.ts` | consumido por GuidePage/GuideDetailPage | arquivo único muito grande | dividir por categoria |
| `src/locales` | traduções | `pt/common.json`, `en/common.json`, `es/common.json` | importadas em `src/i18n.ts` | risco de chaves divergentes entre idiomas | validação automática de chaves |
| `src/hooks` | hooks compartilhados | `use-toast.ts`, `use-mobile.tsx` | UI e hooks auxiliares | hooks de toast duplicam padrão UI | revisar se ambos são necessários |
| `src/utils` | helpers de i18n | `i18nHelper.ts` | usado por páginas/componentes | fallback simples por idioma | tipar idioma aceito |
| `src/lib` | utilidades gerais | `utils.ts` | `cn` usado por UI | escopo pequeno | manter simples |
| `src/test` | setup e testes | `setup.ts`, `example.test.ts` | Vitest | cobertura real quase inexistente | criar testes de rotas, i18n, formulário e storage |
| `public` | assets e SEO estático | `astro.png`, `404.html`, `robots.txt`, `sitemap.xml`, favicons | copiado no build | sitemap não lista todas as rotas de assessment/contact | atualizar sitemap |
| `legacy-pages` | páginas HTML legadas | `adm.html`, `developer.html`, `consult.html`, `architect.html` | não integradas às rotas React | código legado pode confundir manutenção | mover para arquivo histórico ou remover se obsoleto |

## Arquivos de Configuração

- `package.json`: scripts e dependências.
- `vite.config.ts`: Vite, base path, servidor e alias.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript.
- `tailwind.config.ts`, `postcss.config.js`: estilos.
- `eslint.config.js`: lint.
- `vitest.config.ts`, `src/test/setup.ts`: testes unitários.
- `playwright.config.ts`: configuração Playwright via `lovable-agent-playwright-config`.
- `components.json`: configuração shadcn/ui.

## Observações

- `README.md` menciona `.github/workflows`, mas a pasta não foi encontrada. Evidência: `README.md`, busca `.github/workflows/*`.
- `legacy-pages` referencia CSS como `adm.css`, `header.css`, `developer.css`, mas esses arquivos não apareceram na listagem de arquivos globais. Evidência: `legacy-pages/*.html`.
