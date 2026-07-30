import { Link } from "@tanstack/react-router";

import { BotaoSom } from "./BotaoSom";
import { FichaComparativa } from "./FichaComparativa";
import { StarStamp } from "@/components/StarStamp";
import { useExplorador, vocativo } from "@/hooks/useExplorador";
import type { Pais } from "@/data/types";

interface Props {
  pais: Pais;
  onVoltar: () => void;
}

/** Tela final do país: voo de volta, destaques observados e ficha comparativa com o Brasil. */
export function TelaDespedida({ pais, onVoltar }: Props) {
  const { nome } = useExplorador();
  const tratamento = vocativo(nome);

  const destaques = pais.roteiro_viagem.map((dia) => {
    const fauna = pais.fauna_flora.find((f) => f.id === dia.fauna_do_dia?.id);
    const sabor = pais.gastronomia.find((g) => g.id === dia.sabor_do_dia?.id);
    return {
      dia: dia.dia,
      lugar: dia.observacao?.titulo ?? dia.titulo,
      animal: fauna?.nome,
      comida: sabor?.nome,
    };
  });

  return (
    <section
      key={`despedida-${pais.id}`}
      className="slide-in mx-auto max-w-3xl space-y-6"
    >
      <div className="rounded-2xl border-2 border-dashed border-brass bg-card p-6 text-center shadow-lg sm:p-10">
        <div className="star-drop flex justify-center">
          <StarStamp
            bandeira={pais.bandeira}
            tamanho={112}
            titulo={`Expedição no ${pais.nome} concluída`}
          />
        </div>
        <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-brass">
          Voo de volta ao Brasil
        </p>
        <h2 className="mt-1 font-display text-2xl leading-tight text-foreground">
          Expedição no {pais.nome} concluída{nome ? `, ${nome}` : ""}!
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          O avião já ganhou altitude, {tratamento}. Enquanto as nuvens passam pela
          janela, vale reler o que você observou nesses{" "}
          {pais.roteiro_viagem.length} dias antes de escolher o próximo destino.
        </p>
        <div className="mt-5 flex justify-center">
          <BotaoSom som={pais.chegada?.som} rotulo="Ouça o som do avião" />
        </div>
      </div>

      <div className="rounded-2xl border-2 border-border bg-card p-5 text-left shadow-lg sm:p-6">
        <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
          O que você observou
        </p>
        <ul className="mt-3 space-y-3">
          {destaques.map((d) => (
            <li
              key={d.dia}
              className="rounded-xl border border-border bg-background p-3"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Dia {d.dia}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground">
                {d.lugar}
                {d.animal ? ` · 🐾 ${d.animal}` : ""}
                {d.comida ? ` · 🍽️ ${d.comida}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
          {pais.nome} e Brasil, lado a lado
        </p>
        <FichaComparativa pais={pais} />
      </div>

      <div className="flex flex-col gap-3">
        <Link
          to="/passaporte"
          className="w-full rounded-full border-2 border-brass bg-brass px-5 py-4 text-center font-display text-base tracking-wide text-card shadow-md transition-transform hover:scale-[1.02]"
        >
          Ver meu passaporte ➔
        </Link>
        <Link
          to="/"
          className="w-full rounded-full border-2 border-border bg-background px-5 py-3 text-center text-sm text-foreground transition-colors hover:bg-accent"
        >
          Escolher o próximo destino no mapa mundi
        </Link>
        <button
          type="button"
          onClick={onVoltar}
          className="text-xs text-muted-foreground underline underline-offset-4"
        >
          ← Rever o último dia
        </button>
      </div>
    </section>
  );
}
