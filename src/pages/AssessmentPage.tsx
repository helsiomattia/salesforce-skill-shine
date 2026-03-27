const AssessmentPage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          Avaliação de Competências
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Diagnóstico e evolução profissional
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          Esta página foi separada da Home para concentrar a parte de avaliação
          de competências, análise de perfil e futuras evoluções relacionadas a
          roadmap, maturidade profissional e direcionamento de carreira.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Competências técnicas</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Espaço para avaliar conhecimentos técnicos, ferramentas, stack e
            domínio da plataforma.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Competências funcionais</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Área para analisar visão de negócio, entendimento de processo,
            levantamento de requisitos e capacidade consultiva.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Plano de evolução</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Espaço dedicado para roadmap, próximos passos, lacunas de
            conhecimento e metas de desenvolvimento.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-border bg-card p-8 shadow-sm">
        <h3 className="text-xl font-semibold">Próxima evolução desta página</h3>
        <p className="mt-4 leading-7 text-muted-foreground">
          Aqui você poderá adicionar formulário, score de competências, cards de
          avaliação, progresso por categoria e até recomendações personalizadas
          no futuro.
        </p>
      </section>
    </div>
  );
};

export default AssessmentPage;
