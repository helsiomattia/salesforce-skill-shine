# Roadmap Técnico Priorizado

## Prioridade 1 - Estabilização

1. Corrigir lint até `npm run lint` passar.
   - Evidência: falha atual em `ResultsPanel.tsx`, `TopNav.tsx`, `Sidebar.tsx`, `GuidePage.tsx`, `GuideDetailPage.tsx`, UI wrappers e `tailwind.config.ts`.
   - Resultado esperado: base apta para CI.
2. Adicionar workflow real de CI/deploy ou corrigir README.
   - Evidência: `README.md` menciona GitHub Actions, mas `.github/workflows` não existe.
3. Criar testes mínimos de smoke para rotas principais.
   - Evidência: `src/test/example.test.ts` não testa a aplicação.

## Prioridade 2 - Manutenibilidade

1. Dividir `FinishPanel.tsx`.
   - Separar schema, helpers de PDF, textos PDF e componente visual.
2. Dividir `src/data/guideData.ts` por categoria.
   - Reduzir arquivo grande e facilitar revisão de conteúdo.
3. Validar dados de `localStorage` com schema.
   - Aplicar em guias customizados e notas.
4. Revisar `Sidebar` e `legacy-pages`.
   - Decidir se são legado, documentação ou código ativo.

## Prioridade 3 - Performance

1. Implementar code splitting por rota em `src/App.tsx`.
2. Carregar `FinishPanel`/jsPDF sob demanda apenas na aba de finalização.
3. Considerar dividir dados de guia por categoria e lazy load por rota.
4. Otimizar imagens públicas, especialmente `public/astro.png`, se o tamanho real justificar.

## Prioridade 4 - Qualidade de Produto

1. Adicionar testes para i18n e paridade de chaves entre `pt/en/es`.
2. Testar fluxo de avaliação: rating, cálculo de média, geração de recomendações.
3. Testar fluxo de guias: busca, criação customizada, notas e fallback de detalhe.
4. Atualizar sitemap com `/contact` e rotas de avaliação específicas.

## Prioridade 5 - Acessibilidade e UX

1. Adicionar atributos ARIA ao menu mobile (`aria-expanded`, `aria-controls`, `aria-label`).
2. Remover `text-align: justify` global de parágrafos e aplicar somente quando desejado.
3. Adicionar testes ou checklist de navegação por teclado.
4. Considerar preferência por redução de movimento para animações Framer Motion.

## Prioridade 6 - Internacionalização

1. Mover mensagens Zod de `FinishPanel` para locales.
2. Revisar strings diretas como `Menu` em `TopNav`.
3. Automatizar verificação de chaves ausentes.

## Itens Não Confirmados

- Backend, banco, autenticação, analytics e pipeline real de deploy não foram confirmados com os arquivos analisados.
