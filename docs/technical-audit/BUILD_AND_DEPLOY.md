# Build, Deploy e CI/CD

## Scripts de Build

| Script | Comando | Evidência |
|---|---|---|
| `build` | `vite build` | `package.json` |
| `build:dev` | `vite build --mode development` | `package.json` |
| `preview` | `vite preview` | `package.json` |

## Configuração Vite

- Base path: `/salesforce-skill-shine/`. Evidência: `vite.config.ts`.
- Servidor local: host `::`, porta `8080`. Evidência: `vite.config.ts`.
- HMR overlay desativado. Evidência: `vite.config.ts`.
- Alias `@` para `./src`. Evidência: `vite.config.ts`, `tsconfig*.json`.
- Dedup de React configurado. Evidência: `vite.config.ts`.
- Plugin `lovable-tagger` só em development. Evidência: `vite.config.ts`.

## Diretório Gerado

- `dist/` é o diretório padrão do Vite; `README.md` também informa `dist/`.
- `vite.config.ts` não redefine `build.outDir`.

## Publicação

- GitHub Pages é inferido por URLs públicas e base path. Evidência: `index.html`, `public/robots.txt`, `public/sitemap.xml`, `vite.config.ts`.
- `public/404.html` implementa fallback para rotas SPA no subpath `/salesforce-skill-shine`. Evidência: `public/404.html`.
- `index.html` reescreve `?redirect=` e hash route para path SPA. Evidência: `index.html`.

## CI/CD

- `README.md` afirma deploy automático com GitHub Actions em push na branch `main`.
- Não há `.github/workflows/*` encontrado no workspace analisado.
- Pipeline, branch, gatilhos, cache e etapas de CI/CD não foram possíveis confirmar com os arquivos analisados.

## Variáveis de Ambiente

- `BASE_URL` do Vite é usado via `import.meta.env.BASE_URL`. Evidência: `src/App.tsx`, `HomePage.tsx`.
- Não há arquivos `.env*` encontrados.

## SEO e Public Assets

- `index.html` contém meta description, author, keywords, Open Graph, Twitter card, canonical e JSON-LD. Evidência: `index.html`.
- `robots.txt` permite crawlers e aponta sitemap. Evidência: `public/robots.txt`.
- `sitemap.xml` lista `/`, `/guide`, `/assessment`, `/privacy`, `/terms`, `/editorial-policy`. Evidência: `public/sitemap.xml`.

## Riscos de Deploy

| Severidade | Evidência | Impacto | Recomendação | Esforço |
|---|---|---|---|---|
| Alta | README cita Actions, mas `.github/workflows` não existe | deploy automatizado pode não existir | adicionar workflow ou ajustar README | Baixo |
| Média | sitemap não lista `/contact` nem rotas `/assessment/*` | SEO incompleto | atualizar sitemap | Baixo |
| Média | base fixa `/salesforce-skill-shine/` | build em outro domínio/subpath exige ajuste | parametrizar base por ambiente se necessário | Baixo |
| Baixa | fallback custom em `404.html` e script em `index.html` | lógica duplicada de roteamento | documentar e testar fallback | Médio |
