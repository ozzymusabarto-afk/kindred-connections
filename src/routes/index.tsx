import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { WorldMap } from "@/components/WorldMap";
import { CompassButton } from "@/components/CompassButton";
import { SiteHeader } from "@/components/SiteHeader";
import { StarStamp } from "@/components/StarStamp";
import { FichaExplorador } from "@/components/FichaExplorador";
import { Volume2, VolumeX } from "lucide-react";
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
  const [continenteAtivo, setContinenteAtivo] = useState<ContinenteId | "todos">("todos");
    if (typeof window !== "undefined") {
      return (window.localStorage.getItem("diario:continente-ativo") as ContinenteId | "todos") || "todos";
    }
    return "todos";
  });
  const [somAtivo, setSomAtivo] = useState(true);
  
  useEffect(() => {
    import('@/lib/sfx').then(m => setSomAtivo(m.somLigado()));
  }, []);

  const toggleSom = () => {
    const novoEstado = !somAtivo;
    setSomAtivo(novoEstado);
    import('@/lib/sfx').then(m => m.definirSom(novoEstado));
    if (!novoEstado) {
      import('@/lib/ambiente').then(m => m.pararAmbiente());
    }
  };

  const { carimbos } = usePassport();
  const mapaRef = useRef<HTMLDivElement>(null);
  
  // Filtrar países com base no continente selecionado
  const paisesVisiveis = continenteAtivo === "todos" 
    ? paises 
    : paises.filter(p => p.continente === continenteAtivo);

  const totalExplorados = carimbos.length;
  const totalPaises = paises.length; 
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
          {/* Botão de Som em Destaque */}
          <div className="absolute top-8 right-8 z-10">
            <button
              onClick={toggleSom}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-rounded font-bold text-xl shadow-lg transition-all hover:scale-105 active:scale-95 min-h-[56px] min-w-[56px] ${
                somAtivo 
                  ? "bg-sky-500 text-white" 
                  : "bg-white text-sky-500 border-2 border-sky-500"
              }`}
            >
              {somAtivo ? <Volume2 className="w-8 h-8" /> : <VolumeX className="w-8 h-8" />}
              <span>Som da Viagem: {somAtivo ? "LIGADO" : "DESLIGADO"}</span>
            </button>
          </div>

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
            
            <div className="mt-10 max-w-2xl mx-auto premium-card p-10 shadow-sky-900/5 hover:shadow-sky-900/10 transition-all duration-500">
              <p className="text-xl sm:text-2xl text-sky-800/90 leading-relaxed font-rounded italic">
                Cada país tem histórias, animais, pessoas, tradições, monumentos, comidas e curiosidades incríveis esperando para serem descobertos.
              </p>
              <p className="mt-6 text-lg sm:text-xl text-sky-700/80 leading-relaxed font-rounded font-medium">
                Escolha um destino no mapa e comece sua jornada pelo mundo.
                Cada lugar visitado se torna mais uma página no seu diário de explorador.
              </p>
              
              <div className="mt-10 flex flex-col items-center gap-6">
                <p className="text-2xl font-bold text-sky-900 font-rounded tracking-tight">
                  Você está pronto? A aventura espera por você!
                </p>
                
                <button
                  onClick={() => {
                    import('@/lib/sfx').then(m => m.tocar('decolagem'));
                    mapaRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4 group relative inline-flex items-center justify-center px-12 py-6 font-rounded text-2xl font-bold text-white transition-all duration-500 bg-sky-500 rounded-full hover:bg-sky-600 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.4)] active:scale-95 shadow-xl shadow-sky-500/20"
                >
                  Começar a Jornada
                  <span className="ml-3 group-hover:translate-x-2 transition-transform duration-500">→</span>
                </button>
              </div>
            </div>
            
            <div className="mt-12 max-w-xl mx-auto">
              <FichaExplorador />
            </div>
          </div>
        </section>

        <div 
          ref={mapaRef}
          className="mt-6 scroll-mt-24 focus-within:ring-4 focus-within:ring-brass/30 rounded-3xl transition-all relative"
          aria-label="Mapa do mundo para escolher um destino"
        >
          {/* Dica de Acessibilidade removida conforme solicitado */}

          {bloqueado ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border-4 border-dashed border-destructive/30 bg-destructive/5 p-12 text-center">
              <span className="text-5xl mb-4">🚧</span>
              <h3 className="text-xl font-display text-destructive">Sistemas de Navegação em Calibração...</h3>
              <p className="mt-2 text-muted-foreground max-w-md">
                Estamos preparando os detalhes de <strong>{erros.join(", ")}</strong> para que sua viagem seja perfeita. Por enquanto, escolha outro destino!
              </p>
            </div>
          ) : (
            <WorldMap />
          )}
        </div>

        <section className="mt-28 px-5 max-w-7xl mx-auto">
          <div className="premium-card p-12 shadow-sky-900/5 border-sky-100/50">
            <h2 className="text-3xl font-rounded font-bold text-sky-900 mb-8 text-center italic">
              Para onde vamos explorar hoje?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setContinenteAtivo("todos")}
                className={`rounded-full px-12 py-5 text-2xl font-rounded font-bold transition-all shadow-sm min-h-[60px] ${
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
                  className={`rounded-full px-12 py-5 text-2xl font-rounded font-bold transition-all shadow-sm min-h-[60px] ${
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

        <section className="mt-24 px-5 pb-32 max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {paisesVisiveis.map((pais: any) => {
            const countryImages: Record<string, string> = {
              "brasil": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
              "france": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
              "japao": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
              "egito": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=80",
              "italia": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
              "argentina": "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
              "estados-unidos": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
              "canada": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
              "mexico": "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80",
              "portugal": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
              "spain": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
              "united-kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
              "australia": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
              "china": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
              "india": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
              "marrocos": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
              "africa-do-sul": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
              "costa-rica": "https://images.unsplash.com/photo-1599026417551-78c66e2c342f?w=800&q=80",
              "peru": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80",
              "chile": "https://images.unsplash.com/photo-1490782300182-697b80ad4293?w=800&q=80",
              "greece": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
              "colombia": "https://images.unsplash.com/photo-1534051033608-726243b71569?w=800&q=80"
            };
            const bgImage = countryImages[pais.id] || pais.imagem_capa;
            
            return (
            <button
              key={pais.id}
              type="button"
              disabled={bloqueado}
              aria-label={`Ver diário de campo de ${pais.nome}${visitados.has(pais.id) ? " - já explorado" : ""}`}
              onClick={() =>
                navigate({ to: "/pais/$id", params: { id: pais.id }, search: { tela: undefined, dia: undefined } })
              }
              className="group relative overflow-hidden premium-card text-left transition-all hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-4 focus:ring-sky-200/50 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="h-56 w-full overflow-hidden bg-sky-50 relative">
                <img
                  src={bgImage}
                  alt={`Paisagem de ${pais.nome}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('sig=fallback')) {
                      target.src = `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80&sig=fallback-${pais.id}`;
                    }
                  }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative group/flag">
                    <img
                      src={`https://flagcdn.com/w160/${pais.codigo_mapa.toLowerCase()}.png`}
                      alt={`Bandeira de ${pais.nome}`}
                      className="h-20 w-32 object-cover shadow-2xl rounded-md border-2 border-white bg-white/40 backdrop-blur-[2px]"
                      style={{ minHeight: '80px', minWidth: '128px' }}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.flag-fallback')) {
                          const fallback = document.createElement('div');
                          fallback.className = "flag-fallback h-20 w-32 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-white/20 shadow-xl";
                          fallback.innerHTML = `<span class="text-6xl drop-shadow-2xl">${pais.bandeira || '🏳️'}</span>`;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </div>
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
          );
          })}
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
