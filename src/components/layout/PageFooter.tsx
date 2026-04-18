import { Linkedin, Mail } from "lucide-react";

const PageFooter = () => (
  <footer className="mt-12 rounded-3xl bg-gradient-hero py-8">
    <div className="mx-auto max-w-5xl px-4 text-center">
      <p className="mb-4 text-sm text-primary-foreground/50">
        Conecte-se comigo nas redes sociais:
      </p>
      <div className="mb-4 flex justify-center gap-4">
        <a
          href="https://linkedin.com/in/helsiomattia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/60 transition-colors hover:text-secondary"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:helsiomattia@gmail.com"
          className="text-primary-foreground/60 transition-colors hover:text-secondary"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
      <p className="text-xs text-primary-foreground/40">© 2025 Helsio Mattia</p>
    </div>
  </footer>
);

export default PageFooter;
