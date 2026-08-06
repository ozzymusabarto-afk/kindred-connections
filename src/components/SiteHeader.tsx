import { Link } from "@tanstack/react-router";

interface SiteHeaderProps {
  ativo?: "mapa" | "passaporte" | "comparar" | "album" | "cadastro";
}


export function SiteHeader({ ativo }: SiteHeaderProps) {
  const link = (chave: string) =>
    `text-sm tracking-wide transition-colors ${
      ativo === chave
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-lg text-foreground">
            Diário de Bordo
          </span>
          <span className="hidden text-xs uppercase tracking-[0.22em] text-muted-foreground sm:inline">
            Exploradores do Mundo
          </span>
        </Link>
        <nav className="flex items-center gap-5">
          <Link to="/" className={link("mapa")} aria-current={ativo === "mapa" ? "page" : undefined}>
            Mapa
          </Link>
          <Link to="/comparar" className={link("comparar")} aria-current={ativo === "comparar" ? "page" : undefined}>
            Comparar
          </Link>
          <Link to="/album" className={link("album")} aria-current={ativo === "album" ? "page" : undefined}>
            Álbum
          </Link>
          <Link to="/passaporte" className={link("passaporte")} aria-current={ativo === "passaporte" ? "page" : undefined}>
            Passaporte
          </Link>
          <Link to="/cadastro" className={link("cadastro")} aria-current={ativo === "cadastro" ? "page" : undefined}>
            Cadastro
          </Link>
        </nav>
      </div>
    </header>
  );
}
