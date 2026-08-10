import { Pais, DiaRoteiro } from "@/data/types";
import { BotaoSom } from "./BotaoSom";

interface Props {
  pais: Pais;
  dia: DiaRoteiro;
}

export function BoxPedagogico({ pais, dia }: Props) {
  return (
    <div className="mt-8 space-y-6 rounded-2xl border-2 border-sky-100 bg-sky-50/30 p-6 md:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm border border-sky-100">
          🎓
        </div>
        <div>
          <h3 className="font-display text-xl text-sky-900">Roteiro Pedagógico</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600/70">Explorando {pais.nome}</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Idioma */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sky-800">
            <span className="text-lg">🗣️</span>
            <span className="text-sm font-bold uppercase tracking-wider">Como se diz Olá</span>
          </div>
          <p className="text-sm text-sky-900/80 leading-relaxed">
            Neste país, as pessoas falam <span className="font-bold text-sky-700">{pais.chegada.idioma}</span>. 
            Uma forma divertida de cumprimentar é dizendo "{pais.chegada.fala_piloto_original ? pais.chegada.fala_piloto_original.split('!')[0] : 'Olá'}!".
          </p>
        </div>

        {/* Prato Típico */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sky-800">
            <span className="text-lg">🍛</span>
            <span className="text-sm font-bold uppercase tracking-wider">Prato Típico</span>
          </div>
          <p className="text-sm text-sky-900/80 leading-relaxed">
            A comida mais famosa por aqui é o <span className="font-bold text-sky-700">{dia.sabor_do_dia?.id ? (pais.gastronomia.find(g => g.id === dia.sabor_do_dia?.id)?.nome || "prato local") : "prato local"}</span>. 
            Dizem que é uma delícia!
          </p>
        </div>

        {/* Curiosidade */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sky-800">
            <span className="text-lg">✨</span>
            <span className="text-sm font-bold uppercase tracking-wider">Curiosidade</span>
          </div>
          <p className="text-sm text-sky-900/80 leading-relaxed">
            {pais.resumo_geografico.split('.')[0]}. Você sabia que o fuso horário aqui é {pais.chegada.fuso_horario}?
          </p>
        </div>

        {/* Som do País */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sky-800">
            <span className="text-lg">🎵</span>
            <span className="text-sm font-bold uppercase tracking-wider">Som do País</span>
          </div>
          <div className="pt-1">
            <BotaoSom 
              som={pais.chegada.som} 
              rotulo="O Som do País" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
