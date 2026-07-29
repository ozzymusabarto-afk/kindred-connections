import { Link } from "@tanstack/react-router";

export function CompassButton() {
  return (
    <Link
      to="/comparar"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm tracking-wide text-foreground shadow-sm transition-colors hover:bg-accent"
    >
      <span aria-hidden className="text-brass">◉</span>
      Comparar países
    </Link>
  );
}
