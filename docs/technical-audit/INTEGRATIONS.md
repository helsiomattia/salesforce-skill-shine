# Integrações, APIs e Variáveis de Ambiente

## APIs Backend

- Não foram encontradas chamadas `fetch(` nem imports de `axios` em `src`. Evidência: busca em `src/**/*.{ts,tsx}`.
- Não há pasta `services` encontrada na estrutura de `src`. Evidência: glob de arquivos.
- Backend próprio não foi possível confirmar com os arquivos analisados.

## Serviços Externos Confirmados

| Serviço | Finalidade | Endpoint/URL | Autenticação | Arquivos | Tratamento de erro |
|---|---|---|---|---|---|
| GitHub Pages | publicação estática inferida por base path e URLs públicas | `https://helsiomattia.github.io/salesforce-skill-shine/` | não aplicável no cliente | `vite.config.ts`, `index.html`, `public/404.html`, `public/sitemap.xml` | fallback SPA em `404.html` e script em `index.html` |
| Google Fonts | carregamento de fontes | `https://fonts.googleapis.com/...` | nenhuma | `src/index.css` | não encontrado |
| Circle Flags | bandeiras do seletor de idioma | `https://hatscripts.github.io/circle-flags/...` | nenhuma | `src/components/LanguageSwitcher.tsx` | não encontrado |
| Links Salesforce/Trailhead/Docs | recursos externos dos guias | múltiplos URLs em `guideData.ts` | nenhuma no app | `src/data/guideData.ts`, `GuideDetailPage.tsx` | não encontrado |
| GitHub/LinkedIn/Trailblazer/mailto | canais do autor | URLs fixas | nenhuma no app | `Footer.tsx`, `Sidebar.tsx`, `ContactPage.tsx` | não encontrado |

## Variáveis de Ambiente

- `import.meta.env.BASE_URL` é usado para basename do router e caminho de asset `astro.png`. Evidência: `src/App.tsx`, `src/pages/HomePage.tsx`.
- Não há arquivos `.env*` encontrados no workspace analisado.
- Não foram encontrados nomes de variáveis secretas no código analisado.

## Timeouts e Retry

- Não há chamadas HTTP de aplicação para configurar timeout/retry.
- Não foi possível confirmar estratégia de retry com os arquivos analisados.

## Estados de Carregamento

- `GuideDetailPage` tem estado visual de loading enquanto `guide` não foi carregado do array/localStorage. Evidência: `src/pages/GuideDetailPage.tsx`.
- `FinishPanel` tem `isGenerating` para geração de PDF. Evidência: `src/components/FinishPanel.tsx`.

## Exposição de Informações Sensíveis

- E-mail público do autor aparece em JSON-LD e links. Evidência: `index.html`, `Footer.tsx`, `Sidebar.tsx`.
- Formulário coleta nome, e-mail, telefone, LinkedIn, função e experiência para PDF local. Evidência: `FinishPanel.tsx`.
- Não foi encontrado envio desses dados para backend. Evidência: ausência de `fetch`/`axios`; `FinishPanel` usa `doc.save`.
