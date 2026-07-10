# Segurança

## Segredos e Arquivos de Ambiente

- Não há arquivos `.env*` encontrados no workspace analisado.
- Não foram identificadas chaves privadas, tokens ou secrets em busca textual de integrações; há e-mail público do autor. Evidência: `index.html`, `Footer.tsx`.

## HTML Dinâmico

- Uso de `dangerouslySetInnerHTML` encontrado em `src/components/ui/chart.tsx` para injetar estilos CSS de gráfico. Evidência: `chart.tsx`.
- O conteúdo injetado é montado a partir de `config` de gráfico; não foi encontrado uso direto desse componente com entrada de usuário durante a auditoria. Ainda assim, o padrão exige cuidado se `config` passar a vir de input externo.

## Dados Sensíveis e Armazenamento

- `localStorage` guarda guias customizados e notas livres. Evidência: `GuidePage.tsx`, `GuideDetailPage.tsx`.
- Notas livres podem conter dados sensíveis se o usuário inserir; não há criptografia ou aviso específico no componente. Evidência: `GuideDetailPage.tsx`.
- Formulário de PDF coleta dados pessoais, mas não persiste nem envia no código analisado. Evidência: `FinishPanel.tsx`.

## Validação de Entrada

- Formulário final usa Zod para `fullName`, `email`, `role`, `phone`, `experience` e aceite LGPD. Evidência: `FinishPanel.tsx`.
- Guias customizados validam apenas título não vazio; tags são split por vírgula. Não há schema de validação para o objeto salvo. Evidência: `GuidePage.tsx`.

## Links Externos

- Footer usa `target="_blank"` com `rel="noreferrer noopener"` para links externos. Evidência: `Footer.tsx`.
- GuideDetailPage usa `target="_blank"` e `rel="noreferrer noopener"` em recursos. Evidência: `GuideDetailPage.tsx`.
- LegalPage usa links externos com `target="_blank"`; o `rel` deve ser confirmado no trecho completo ao revisar. Evidência: `LegalPage.tsx`.

## Autenticação e Autorização

- Não há autenticação ou autorização confirmada. Evidência: ausência de rotas protegidas em `src/App.tsx`, ausência de backend.

## Headers de Segurança

- Não há configuração de headers HTTP no repositório analisado. Evidência: ausência de configuração de plataforma; `vite.config.ts` não define headers de produção.

## Dependências Vulneráveis

- Não foi executado `npm audit` nesta auditoria. Vulnerabilidades de dependências não foram confirmadas.

## Exposição de Stack Trace

- `NotFound` faz `console.error` com pathname. Evidência: `src/pages/NotFound.tsx`.
- `FinishPanel` faz `console.error` em falha de PDF. Evidência: `src/components/FinishPanel.tsx`.
- Não há backend, portanto stack trace de servidor não foi aplicável.

## Recomendações de Segurança

| Severidade | Arquivo | Evidência | Impacto | Recomendação | Esforço |
|---|---|---|---|---|---|
| Média | `GuidePage.tsx`, `GuideDetailPage.tsx` | `localStorage` com conteúdo livre | usuário pode salvar dados sensíveis localmente sem aviso | adicionar aviso e opção de limpar dados | Baixo |
| Média | `GuidePage.tsx` | parse JSON sem validação estrutural | dados corrompidos podem quebrar fluxos futuros | validar com schema antes de usar | Médio |
| Baixa | `LanguageSwitcher.tsx` | imagens remotas de bandeiras | dependência externa e possível falha visual | hospedar flags localmente ou usar texto | Baixo |
| Baixa | `chart.tsx` | `dangerouslySetInnerHTML` | risco se config vier de entrada externa | manter config controlado e documentar | Baixo |
