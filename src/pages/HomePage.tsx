const HomePage = () => {
  return (
    <div className="space-y-12">
      <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          Home
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Salesforce Skill Shine
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          Um espaço para apresentar minha trajetória, minhas habilidades e minha
          evolução profissional dentro do ecossistema Salesforce.
        </p>
      </section>

      <section
        id="sobre"
        className="rounded-2xl border border-border bg-card p-8 shadow-sm"
      >
        <h3 className="text-2xl font-semibold">Sobre</h3>
        <p className="mt-4 leading-7 text-muted-foreground">
          Sou um profissional com experiência em Salesforce, focado em evolução
          constante, construção de soluções e desenvolvimento de carreira dentro
          do ecossistema. Este projeto foi criado para organizar minha
          apresentação profissional de forma mais moderna, visual e estratégica.
        </p>
      </section>

      <section
        id="skills"
        className="rounded-2xl border border-border bg-card p-8 shadow-sm"
      >
        <h3 className="text-2xl font-semibold">Skills</h3>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-border bg-background p-5">
            <h4 className="font-semibold">Salesforce</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Experiência com automações, flows, modelagem funcional e análise
              de processos dentro da plataforma.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5">
            <h4 className="font-semibold">Front-end</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Construção de interfaces com React, TypeScript, Vite e Tailwind
              CSS.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5">
            <h4 className="font-semibold">Análise e evolução</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Organização de trilhas, estruturação de conhecimento e visão de
              crescimento profissional.
            </p>
          </div>
        </div>
      </section>

      <section
        id="infos-pessoais"
        className="rounded-2xl border border-border bg-card p-8 shadow-sm"
      >
        <h3 className="text-2xl font-semibold">Informações pessoais</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-5">
            <span className="text-sm text-muted-foreground">Nome</span>
            <p className="mt-2 font-medium">Helsio Mattia</p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5">
            <span className="text-sm text-muted-foreground">Foco atual</span>
            <p className="mt-2 font-medium">
              Salesforce, carreira, posicionamento profissional e evolução
              técnica
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5">
            <span className="text-sm text-muted-foreground">Objetivo</span>
            <p className="mt-2 font-medium">
              Construir uma apresentação profissional forte e evoluir este
              projeto para algo cada vez mais estratégico.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5">
            <span className="text-sm text-muted-foreground">GitHub</span>
            <p className="mt-2 font-medium">github.com/helsiomattia</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
