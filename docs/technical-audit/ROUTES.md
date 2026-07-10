# Rotas e Navegação

## Definição de Rotas

Arquivo de definição: `src/App.tsx`.

| URL | Componente | Layout | Parâmetros | Proteção | Redirecionamento | Navegação relacionada | Evidência |
|---|---|---|---|---|---|---|---|
| `/` | `HomePage` | `AppLayout` | nenhum | nenhuma confirmada | nenhum | TopNav, NotFound, links internos | `src/App.tsx`, `TopNav.tsx` |
| `/assessment` | `AssessmentPage` | `AppLayout` | nenhum | nenhuma confirmada | nenhum | TopNav, Home CTA | `src/App.tsx`, `AssessmentPage.tsx`, `HomePage.tsx` |
| `/assessment/admin` | `CareerPage categoryId="admin"` | `AppLayout` | category hardcoded | nenhuma confirmada | nenhum | cards de Assessment | `src/App.tsx`, `AssessmentPage.tsx` |
| `/assessment/developer` | `CareerPage categoryId="developer"` | `AppLayout` | category hardcoded | nenhuma confirmada | nenhum | cards de Assessment | `src/App.tsx`, `AssessmentPage.tsx` |
| `/assessment/consultant` | `CareerPage categoryId="consultant"` | `AppLayout` | category hardcoded | nenhuma confirmada | nenhum | cards de Assessment | `src/App.tsx`, `AssessmentPage.tsx` |
| `/assessment/architect` | `CareerPage categoryId="architect"` | `AppLayout` | category hardcoded | nenhuma confirmada | nenhum | cards de Assessment | `src/App.tsx`, `AssessmentPage.tsx` |
| `/contact` | `ContactPage` | `AppLayout` | nenhum | nenhuma confirmada | nenhum | TopNav, Assessment support | `src/App.tsx`, `TopNav.tsx`, `AssessmentPage.tsx` |
| `/guide` | `GuidePage` | `AppLayout` | nenhum | nenhuma confirmada | nenhum | TopNav, Contact links | `src/App.tsx`, `GuidePage.tsx` |
| `/guide/:id` | `GuideDetailPage` | `AppLayout` | `id` | nenhuma confirmada | manual via `navigate('/guide')` em ações | cards de GuidePage | `src/App.tsx`, `GuideDetailPage.tsx`, `GuidePage.tsx` |
| `/privacy` | `PrivacyPolicyPage` | `AppLayout` | nenhum | nenhuma confirmada | nenhum | Footer | `src/App.tsx`, `Footer.tsx`, `LegalPage.tsx` |
| `/terms` | `TermsPage` | `AppLayout` | nenhum | nenhuma confirmada | nenhum | Footer | `src/App.tsx`, `Footer.tsx`, `LegalPage.tsx` |
| `/editorial-policy` | `EditorialPolicyPage` | `AppLayout` | nenhum | nenhuma confirmada | nenhum | Footer, Home trust | `src/App.tsx`, `Footer.tsx`, `HomePage.tsx` |
| `*` | `NotFound` | `AppLayout` | path desconhecido | nenhuma confirmada | link para `/` | router wildcard | `src/App.tsx`, `NotFound.tsx` |

## Error Element

- `errorElement: <NotFound />` está configurado no root router. Evidência: `src/App.tsx`.

## Links Internos Encontrados

- TopNav: `/`, `/assessment`, `/guide`, `/contact`. Evidência: `src/components/layout/TopNav.tsx`.
- Footer legal: `/privacy`, `/terms`, `/editorial-policy`. Evidência: `src/components/layout/Footer.tsx`.
- Home: `/assessment`, `#career-paths`, `/editorial-policy`. Evidência: `src/pages/HomePage.tsx`.
- Assessment: `/assessment/${category.id}`, `/contact`. Evidência: `src/pages/AssessmentPage.tsx`.
- CareerPage: `/assessment`. Evidência: `src/pages/CareerPage.tsx`.
- GuideDetail: `navigate('/guide')`. Evidência: `src/pages/GuideDetailPage.tsx`.
- Contact: `/guide`. Evidência: `src/pages/ContactPage.tsx`.

## Links Externos Encontrados

- GitHub, LinkedIn, Trailblazer e e-mail no Footer. Evidência: `src/components/layout/Footer.tsx`.
- Links externos legais/referências em `LegalPage`. Evidência: `src/pages/LegalPage.tsx`.
- Recursos dos guias são links externos derivados de `src/data/guideData.ts` e renderizados em `GuideDetailPage`. Evidência: `src/data/guideData.ts`, `src/pages/GuideDetailPage.tsx`.
- Bandeiras remotas via `https://hatscripts.github.io/circle-flags/...`. Evidência: `src/components/LanguageSwitcher.tsx`.

## Rotas Incompletas ou Links Inexistentes

- Os links de `AssessmentPage` usam `category.id` vindo de `competencyCategories`. Como `src/App.tsx` define explicitamente apenas `admin`, `developer`, `consultant`, `architect`, novos IDs adicionados em dados exigiriam rota correspondente. Evidência: `src/data/competencies/index.ts`, `src/App.tsx`, `src/pages/AssessmentPage.tsx`.
- `README.md` menciona GitHub Actions, mas não há rota; essa informação é de deploy e não de navegação.
- Não foram encontrados links internos para rotas inexistentes nas buscas realizadas, além do risco dinâmico descrito acima.
