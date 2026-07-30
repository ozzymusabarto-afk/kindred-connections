import { useEffect, useState } from "react";
import { useExplorador } from "@/hooks/useExplorador";

/**
 * Pequena ficha na capa: a criança escreve o nome e passa a ser tratada
 * pelo nome nas falas do comandante e da guia local.
 */
export function FichaExplorador() {
  const { nome, salvar, pronto } = useExplorador();
  const [rascunho, setRascunho] = useState("");
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    if (pronto) setRascunho(nome);
  }, [pronto, nome]);

  if (!pronto) return null;

  const mostrarFormulario = editando || !nome;

  return (
    <div className="rounded-2xl border-2 border-dashed border-brass bg-card px-5 py-4 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
        Ficha do explorador
      </p>

      {mostrarFormulario ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!rascunho.trim()) return;
            salvar(rascunho);
            setEditando(false);
          }}
          className="mt-3 flex flex-wrap items-end gap-3"
        >
          <label className="min-w-[12rem] flex-1">
            <span className="block text-sm leading-relaxed text-muted-foreground">
              Como devemos te chamar durante a viagem?
            </span>
            <input
              value={rascunho}
              onChange={(e) => setRascunho(e.target.value)}
              maxLength={24}
              placeholder="Escreva seu nome"
              className="mt-2 w-full rounded-full border-2 border-input bg-background px-4 py-2.5 text-base text-foreground outline-none transition-colors focus:border-brass"
            />
          </label>
          <button
            type="submit"
            className="rounded-full border-2 border-brass bg-brass px-5 py-2.5 font-display text-sm tracking-wide text-card shadow-sm transition-transform hover:scale-[1.03]"
          >
            Assinar meu diário
          </button>
        </form>
      ) : (
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-base leading-relaxed text-foreground">
            <span aria-hidden className="mr-2 text-xl">
              🧭
            </span>
            Diário de bordo de{" "}
            <strong className="font-normal text-brass">{nome}</strong> — a
            tripulação já sabe seu nome!
          </p>
          <button
            type="button"
            onClick={() => setEditando(true)}
            className="rounded-full border border-border bg-background px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent"
          >
            Trocar nome
          </button>
        </div>
      )}
    </div>
  );
}
