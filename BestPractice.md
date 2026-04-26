# 🚀 Salesforce Skill Shine - Guia de Melhores Práticas

Este documento define os padrões de engenharia, arquitetura e estrutura para o projeto **Salesforce Skill Shine**. O objetivo é garantir que o código permaneça limpo, escalável, performático e fácil de manter.

---

## 🛠 Tech Stack

O projeto utiliza o que há de mais moderno no ecossistema de desenvolvimento web:

- **Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (Build Tool)
- **Linguagem**: [TypeScript](https://www.typescript.org/) (Tipagem estrita)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Internacionalização**: [react-i18next](https://react.i18next.com/)
- **Roteamento**: [React Router v6](https://reactrouter.com/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/) (Primitivos acessíveis)

---

## 🏗 Arquitetura e Estrutura de Pastas

Seguimos uma estrutura modular baseada em responsabilidades:

```text
src/
├── assets/         # Recursos estáticos (Imagens, SVGs)
├── components/     # Componentes reutilizáveis (UI)
│   ├── ui/         # Componentes base/atômicos (Botões, Inputs)
│   └── ...         # Componentes de negócio (EvolutionPanel, Sidebar)
├── data/           # Dados estáticos e definições de competências
│   └── competencies/ # Arquivos de configuração de cada carreira
├── hooks/          # Custom Hooks (Lógica compartilhada)
├── locales/        # Traduções (PT, EN, ES)
├── pages/          # Componentes de página (Views principais)
├── utils/          # Funções auxiliares e helpers
└── types/          # Definições de tipos globais
```

---

## 🎨 Melhores Práticas de UI/UX

1. **Aesthetics First**: Todo novo componente deve seguir a estética "Premium" do projeto (bordas arredondadas `rounded-[40px]`, sombras suaves, gradientes sutis).
2. **Micro-interações**: Use `Framer Motion` para entradas suaves (`initial`, `animate`) e hover effects.
3. **Responsividade**: Utilize o sistema mobile-first do Tailwind (`md:`, `lg:`).
4. **Design System**: Evite cores "hardcoded". Use a paleta de `slate`, `blue` e as cores de destaque definidas em `tailwind.config.js`.

---

## 💻 Padrões de Código (Clean Code)

### 1. TypeScript & Tipagem
- **Zero `any`**: Todo dado deve ser tipado.
- **Interfaces p/ Props**: Sempre defina interfaces claras para as props dos componentes.
- **Enums/Types**: Use tipos literais para estados ou categorias (ex: `color: "primary" | "secondary"`).

### 2. Componentização
- **Single Responsibility**: Se um componente crescer demais, divida-o.
- **Props de Dados**: Prefira passar objetos estruturados em vez de múltiplas strings (ex: passar o objeto `skill` completo).

### 3. Internacionalização (i18n)
- **Conteúdo Estático**: Use `t('chave.da.traducao')` no JSON de locales.
- **Dados Dinâmicos**: Use o helper `getLocalizedString(data, lang)` para renderizar objetos que possuem traduções embutidas (padrão `LocString`).

---

## 📊 Gestão de Dados (Competências)

Os dados das carreiras são o "coração" do projeto.
- **Padronização**: Todos os arquivos em `src/data/competencies/` devem implementar a interface `CompetencyCategory`.
- **IDs Únicos**: Garanta que cada competência e categoria tenha um ID único para evitar erros de renderização em listas.

---

## 🚀 Performance & Otimização

1. **Code Splitting**: Utilize `React.lazy` para rotas que não são essenciais no primeiro carregamento.
2. **Asset Optimization**: Imagens devem estar em formatos modernos (WebP) e comprimidas.
3. **Memoização**: Use `useMemo` e `useCallback` apenas quando houver processamento pesado ou para evitar re-renderizações desnecessárias em componentes complexos.

---

## ✅ Checklist de Implementação

- [ ] O componente é responsivo?
- [ ] Possui suporte a PT, EN e ES?
- [ ] O código está devidamente tipado com TypeScript?
- [ ] As animações de entrada e interação foram adicionadas?
- [ ] Segue o padrão de design "Salesforce Premium"?
