import { Link } from "@tanstack/react-router";

interface SiteHeaderProps {
  ativo?: "mapa" | "passaporte" | "comparar";
}

export function SiteHeader({ ativo }: SiteHeaderProps) {
  const link = (chave: string) =>
    `text-sm tracking-wide transition-colors ${
      ativo === chave
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-lg text-foreground">
            Diário de Bordo
          </span>
          <span className="hidden text-xs uppercase tracking-[0.22em] text-muted-foreground sm:inline">
            Exploradores do Mundo
          </span>
        </Link>
        <nav className="flex items-center gap-5">
          <Link to="/" className={link("mapa")}>
            Mapa
          </Link>
          <Link to="/comparar" className={link("comparar")}>
            Comparar
          </Link>
          <Link to="/passaporte" className={link("passaporte")}>
            Passaporte
          </Link>
        </nav>
      </div>
    </header>
  );
}
