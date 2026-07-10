# UI e Design System

## Estratégia de CSS

- Tailwind CSS com classes utilitárias no JSX. Evidência: `tailwind.config.ts`, `src/pages/*`, `src/components/*`.
- CSS global em `src/index.css` com tokens HSL, fontes, sombras e view transitions.
- PostCSS com Tailwind e Autoprefixer. Evidência: `postcss.config.js`.
- Configuração shadcn/ui em `components.json`, com aliases para `@/components`, `@/components/ui`, `@/lib/utils`.

## Tokens Confirmados

Arquivo: `src/index.css`.

- Cores base: `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--success`, `--warning`.
- Gradientes: `--gradient-primary`, `--gradient-hero`, `--gradient-card`.
- Sombras: `--shadow-card`, `--shadow-card-hover`, `--shadow-hero`.
- Tipografia: `--font-primary: 'Inter', sans-serif`.
- Radius base: `--radius: 0.75rem`.
- Tema escuro: `.dark` redefine tokens. Evidência: `src/index.css`.

## Tailwind

- `darkMode: ["class"]`. Evidência: `tailwind.config.ts`.
- Fontes estendidas `display` e `body` apontando para Inter. Evidência: `tailwind.config.ts`.
- Cores Tailwind mapeadas para variáveis CSS. Evidência: `tailwind.config.ts`.
- Plugin `tailwindcss-animate`. Evidência: `tailwind.config.ts`, `package.json`.

## Componentes Visuais Reutilizáveis

- `src/components/ui/*`: Button, Dialog, Tabs, Accordion, Form, Toast, Tooltip, Sheet, Popover, Calendar, Carousel, Chart e outros.
- `src/components/CategoryCard.tsx`, `SkillRating.tsx`, `ResultsPanel.tsx` compõem o sistema de avaliação.
- `src/components/layout/TopNav.tsx` e `Footer.tsx` compõem navegação e rodapé.

## Padrões Visuais Repetidos

- Bordas grandes como `rounded-[40px]`, `rounded-[32px]`, `rounded-[28px]` aparecem em várias páginas.
- Sombras como `shadow-xl shadow-slate-200/50` aparecem em heros/cards.
- Paleta recorrente: `slate`, `blue`, `cyan`, `teal`, `amber`.
- Gradientes e blobs decorativos com `absolute` e `blur` aparecem em várias páginas.

## Responsividade

- Breakpoints Tailwind (`sm`, `md`, `lg`, `xl`) em páginas e componentes.
- `TopNav` alterna entre nav desktop e menu mobile. Evidência: `TopNav.tsx`.
- Grids responsivos em Home, Assessment, Career, Guide e painéis. Evidência: `src/pages/*`, `src/components/*`.

## Tema Escuro

- Tokens `.dark` existem, e Tailwind está configurado para classe. Evidência: `src/index.css`, `tailwind.config.ts`.
- Não foi encontrado controle de tema exposto ao usuário na navegação atual. Evidência: `TopNav.tsx`, `AppLayout.tsx`.

## Acessibilidade Visual

- Muitos botões têm foco via classes `focus-visible` em componentes UI base e em CTAs recentes. Evidência: `src/components/ui/button.tsx`, `HomePage.tsx`.
- Imagens principais têm `alt` em `HomePage` e bandeiras têm `alt` em `LanguageSwitcher`. Evidência: `HomePage.tsx`, `LanguageSwitcher.tsx`.
- Risco: `src/index.css` aplica `p { text-align: justify; }`, o que pode reduzir legibilidade e conflitar com layouts. Evidência: `src/index.css`.

## Valores que Poderiam Virar Tokens

- `rounded-[40px]`, `rounded-[32px]`, `rounded-[28px]`.
- Sombras `shadow-xl shadow-slate-200/50`, `shadow-blue-600/20`.
- Blobs decorativos com tamanhos `400px`, `500px`, `600px` e `blur-[100px]`/`blur-[120px]`.
- Espaçamentos de containers `px-4 py-6 lg:px-6`, `md:px-12 md:py-12`.
