import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { WorldMap } from "@/components/WorldMap";
import { CompassButton } from "@/components/CompassButton";
import { SiteHeader } from "@/components/SiteHeader";
import { StarStamp } from "@/components/StarStamp";
import { FichaExplorador } from "@/components/FichaExplorador";
import { continentes, paises } from "@/data/countries";
import { usePassport } from "@/hooks/usePassport";
import type { ContinenteId } from "@/data/types";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Diário de Bordo: Exploradores do Mundo | Mapa Interativo";
    const description = "Uma jornada educativa imersiva para crianças explorarem a geografia, fauna e cultura do mundo através de um atlas ilustrado interativo.";
    
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: MapaMundi,
});

function MapaMundi() {
  const navigate = useNavigate();
  const [continenteAtivo, setContinenteAtivo] = useState<ContinenteId | "todos">(() => {
    if (typeof window !== "undefined") {
      return (window.localStorage.getItem("diario:continente-ativo") as ContinenteId | "todos") || "todos";
    }
    return "todos";
  });
  const { carimbos } = usePassport();
  
  // Filtrar países com base no continente selecionado
  const paisesVisiveis = continenteAtivo === "todos" 
    ? paises 
    : paises.filter(p => p.continente === continenteAtivo);

  const totalExplorados = carimbos.length;
  const totalPaises = 21; 
  const visitados = new Set(carimbos.map((c) => c.paisId));

  // Validação rigorosa de integridade
  const [bloqueado, setBloqueado] = useState(false);
  const [erros, setErros] = useState<string[]>([]);

  useEffect(() => {
    // Validar apenas os países que seriam mostrados
    const invalidos = paisesVisiveis.filter((p: any) => {
      const temTexto = p.nome && p.resumo_geografico && p.resumo_geografico.length > 20;
      const temImagem = p.bandeira_url || p.bandeira;
      const temRoteiro = p.id.length > 2 && p.roteiro_viagem && p.roteiro_viagem.length > 0;
      return !temTexto || !temImagem || !temRoteiro;
    });

    if (invalidos.length > 0) {
      setErros(invalidos.map((p: any) => p.nome || p.id));
      setBloqueado(true);
      console.error(`[Erro de Integridade] Dados incompletos:`, invalidos);
    } else {
      setErros([]);
      setBloqueado(false);
    }
    
    if (typeof window !== "undefined") {
      window.localStorage.setItem("diario:continente-ativo", continenteAtivo);
    }
  }, [continenteAtivo, paisesVisiveis]);

  return (
    <div className="min-h-screen">
      <SiteHeader ativo="mapa" />

      <main>
        {/* Seção Hero - Introdução Mágica */}
        <section className="relative overflow-hidden pt-20 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-sky-50 to-white">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <div className="inline-block animate-bounce-slow mb-6">
              <span className="text-6xl sm:text-7xl drop-shadow-lg">🌍</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-rounded font-bold text-sky-900 leading-tight tracking-tight">
              Bem-vindo, Jovem Explorador!
            </h1>
            
            <p className="mt-6 text-xl sm:text-2xl font-rounded font-medium text-sky-700 max-w-3xl mx-auto leading-relaxed">
              Hoje seu passaporte abre as portas para uma aventura incrível.
            </p>
            
            <div className="mt-8 max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border-2 border-sky-100 shadow-xl shadow-sky-900/5">
              <p className="text-lg sm:text-xl text-sky-800 leading-relaxed font-rounded italic">
                Cada país tem histórias, animais, pessoas, tradições, monumentos, comidas e curiosidades incríveis esperando para serem descobertos.
              </p>
              <p className="mt-4 text-lg sm:text-xl text-sky-800 leading-relaxed font-rounded">
                Escolha um destino no mapa e comece sua jornada pelo mundo.
                Cada lugar visitado se torna mais uma página no seu diário de explorador.
              </p>
              
              <div className="mt-6 flex flex-col items-center gap-4">
                <p className="text-xl font-bold text-sky-900 font-rounded">
                  Você está pronto? A aventura espera por você!
                </p>
                
                <button
                  onClick={() => document.getElementById('mapa')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 group relative inline-flex items-center justify-center px-10 py-5 font-rounded text-2xl font-bold text-white transition-all duration-300 bg-sky-500 rounded-full hover:bg-sky-600 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 active:scale-95"
                >
                  Começar a Jornada
                  <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
            
            <div className="mt-12 max-w-xl mx-auto">
              <FichaExplorador />
            </div>
          </div>
        </section>

        <div 
          id="mapa" 
          className="mt-6 scroll-mt-24 focus-within:ring-4 focus-within:ring-brass/30 rounded-3xl transition-all"
          aria-label="Mapa do mundo para escolher um destino"
        >
          {bloqueado ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border-4 border-dashed border-destructive/30 bg-destructive/5 p-12 text-center">
              <span className="text-5xl mb-4">🚧</span>
              <h3 className="text-xl font-display text-destructive">Sistemas de Navegação em Calibração...</h3>
              <p className="mt-2 text-muted-foreground max-w-md">
                Estamos preparando os detalhes de <strong>{erros.join(", ")}</strong> para que sua viagem seja perfeita. Por enquanto, escolha outro destino!
              </p>
            </div>
          ) : (
            <WorldMap
              paises={paisesVisiveis}
              carimbados={carimbos.map((c) => c.paisId)}
              onSelecionar={(pais: any) =>
                navigate({ to: "/pais/$id", params: { id: pais.id }, search: { tela: undefined, dia: undefined } })
              }
            />
          )}
        </div>

        <section id="escolha" className="mt-20 px-5 max-w-6xl mx-auto">
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border-2 border-sky-100 shadow-xl shadow-sky-900/5">
            <h2 className="text-3xl font-rounded font-bold text-sky-900 mb-8 text-center italic">
              Para onde vamos explorar hoje?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setContinenteAtivo("todos")}
                className={`rounded-full px-10 py-4 text-xl font-rounded font-bold transition-all shadow-sm ${
                  continenteAtivo === "todos"
                    ? "bg-sky-500 text-white shadow-sky-200 scale-105"
                    : "bg-white border-2 border-sky-100 text-sky-700 hover:border-sky-300 hover:bg-sky-50"
                }`}
              >
                🌎 Todos
              </button>
              {continentes.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setContinenteAtivo(c.id)}
                  className={`rounded-full px-10 py-4 text-xl font-rounded font-bold transition-all shadow-sm ${
                    continenteAtivo === c.id
                      ? "bg-sky-500 text-white shadow-sky-200 scale-105"
                      : "bg-white border-2 border-sky-100 text-sky-700 hover:border-sky-300 hover:bg-sky-50"
                  }`}
                >
                  {c.nome}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="diarios" className="mt-20 px-5 pb-20 max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {paisesVisiveis.map((pais: any) => (
            <button
              key={pais.id}
              type="button"
              disabled={bloqueado}
              aria-label={`Ver diário de campo de ${pais.nome}${visitados.has(pais.id) ? " - já explorado" : ""}`}
              onClick={() =>
                navigate({ to: "/pais/$id", params: { id: pais.id }, search: { tela: undefined, dia: undefined } })
              }
              className="group relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white/80 text-left transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-sky-900/10 focus:outline-none focus:ring-4 focus:ring-sky-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {visitados.has(pais.id) && (
                <span className="absolute right-4 top-4 z-10 drop-shadow-lg">
                  <StarStamp
                    bandeira={pais.bandeira}
                    tamanho={54}
                    titulo={`${pais.nome} já explorado`}
                  />
                </span>
              )}
              <div className="h-56 w-full overflow-hidden bg-sky-50">
                {pais.bandeira_url ? (
                  <img
                    src={pais.bandeira_url}
                    alt={`Bandeira do ${pais.nome}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="flex h-full w-full items-center justify-center text-7xl"
                  >
                    {pais.bandeira}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-rounded text-3xl font-bold text-sky-900 group-hover:text-sky-500 transition-colors">
                    {pais.nome}
                  </p>
                  {visitados.has(pais.id) && <span className="text-3xl animate-bounce">⭐</span>}
                </div>
                {pais.capital && (
                  <p className="mb-4 text-base font-bold tracking-wide text-sky-400 uppercase">
                    📍 {pais.capital}
                  </p>
                )}
                <p className="line-clamp-2 text-lg leading-relaxed text-sky-700/80 font-rounded italic">
                  "{pais.resumo_geografico}"
                </p>
                <div className="mt-6 flex items-center text-sky-500 font-bold font-rounded">
                  <span>Ver Diário</span>
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </button>
          ))}
          {paisesVisiveis.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-2xl font-rounded text-sky-400 italic">
                Este continente ainda está sendo mapeado pelos nossos exploradores...
              </p>
            </div>
          )}
        </section>
      </main>

      <CompassButton />
    </div>
  );
}
