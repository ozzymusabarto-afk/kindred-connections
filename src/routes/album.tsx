import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { CompassButton } from "@/components/CompassButton";
import { AlbumLivro, type FolhaAlbum } from "@/components/album/AlbumLivro";
import { PaginaCuriosidades } from "@/components/album/PaginaCuriosidades";
import { PaginaFotos } from "@/components/album/PaginaFotos";
import { paises } from "@/data/countries";
import { coletarFotos, emPaginas, porCategoria } from "@/lib/album";
import { lerProgressoTudo } from "@/hooks/useExpedicao";

export const Route = createFileRoute("/album")({
  head: () => ({
    meta: [
      { title: "Álbum do Explorador — Diário de Bordo" },
      {
        name: "description",
        content:
          "O álbum de figurinhas da expedição: curiosidades, bandeiras e todas as fotos dos países visitados, folha por folha.",
      },
      { property: "og:title", content: "Álbum do Explorador — Diário de Bordo" },
      {
        property: "og:description",
        content:
          "Colecione as fotos de cada país visitado e complete 100% do álbum viajando pelo mundo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AlbumPage,
});

const FOTOS_POR_FOLHA = 6;

function AlbumPage() {
  const [progresso, setProgresso] = useState<
    Record<string, Record<string, { concluidoEm?: string }>>
  >({});

  useEffect(() => {
    setProgresso(lerProgressoTudo());
  }, []);

  const paisesComConteudo = useMemo(
    () =>
      paises
        .filter((p) => p.roteiro_viagem.length > 0)
        .sort((a, b) => coletarFotos(b).length - coletarFotos(a).length),
    [],
  );


  const [paisId, setPaisId] = useState(
    () => paisesComConteudo[0]?.id ?? paises[0]?.id,
  );

  const pais =
    paisesComConteudo.find((p) => p.id === paisId) ?? paisesComConteudo[0];

  const diasConcluidos = useMemo(() => {
    const doPais = progresso[pais?.id ?? ""] ?? {};
    return Object.entries(doPais)
      .filter(([, v]) => Boolean(v?.concluidoEm))
      .map(([dia]) => Number(dia));
  }, [progresso, pais?.id]);

  const fotos = useMemo(() => (pais ? coletarFotos(pais) : []), [pais]);

  const colecionadas = useMemo(
    () =>
      fotos.filter((f) =>
        f.dia === 0
          ? diasConcluidos.length > 0
          : diasConcluidos.includes(f.dia),
      ).length,
    [fotos, diasConcluidos],
  );

  const totalGeral = useMemo(
    () =>
      paisesComConteudo.reduce((soma, p) => soma + coletarFotos(p).length, 0),
    [paisesComConteudo],
  );

  const colecionadasGeral = useMemo(
    () =>
      paisesComConteudo.reduce((soma, p) => {
        const dias = Object.entries(progresso[p.id] ?? {})
          .filter(([, v]) => Boolean(v?.concluidoEm))
          .map(([d]) => Number(d));
        return (
          soma +
          coletarFotos(p).filter((f) =>
            f.dia === 0 ? dias.length > 0 : dias.includes(f.dia),
          ).length
        );
      }, 0),
    [paisesComConteudo, progresso],
  );

  const pctGeral =
    totalGeral === 0 ? 0 : Math.round((colecionadasGeral / totalGeral) * 100);

  const folhas: FolhaAlbum[] = useMemo(() => {
    if (!pais) return [];
    const lista: FolhaAlbum[] = [
      {
        id: `${pais.id}-abertura`,
        rotulo: `${pais.nome} · abertura`,
        conteudo: (
          <PaginaCuriosidades
            pais={pais}
            colecionadas={colecionadas}
            total={fotos.length}
          />
        ),
      },
    ];

    for (const grupo of porCategoria(fotos)) {
      const paginas = emPaginas(grupo.fotos, FOTOS_POR_FOLHA);
      paginas.forEach((pagina, i) => {
        lista.push({
          id: `${pais.id}-${grupo.categoria}-${i}`,
          rotulo: `${pais.nome} · ${grupo.rotulo}`,
          conteudo: (
            <PaginaFotos
              categoria={grupo.categoria}
              fotos={pagina}
              paisNome={pais.nome}
              diasConcluidos={diasConcluidos}
              parte={{ atual: i + 1, total: paginas.length }}
            />
          ),
        });
      });
    }

    lista.push({
      id: `${pais.id}-fim`,
      rotulo: `${pais.nome} · fim da seção`,
      conteudo: (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
          <span aria-hidden className="text-5xl">
            {colecionadas === fotos.length ? "🏅" : "🧳"}
          </span>
          <h2 className="font-display text-2xl text-foreground">
            {colecionadas === fotos.length
              ? `Seção do ${pais.nome} completa!`
              : `Ainda faltam figurinhas do ${pais.nome}`}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {colecionadas === fotos.length
              ? "Todas as fotos desta viagem estão coladas no álbum. Escolha o próximo país no mapa e continue a coleção."
              : "Cada dia carimbado na expedição revela as figurinhas daquele dia. Volte à viagem e continue explorando."}
          </p>
          <Link
            to="/"
            className="rounded-full border-2 border-border bg-card px-5 py-2.5 text-sm text-foreground shadow-sm transition-colors hover:bg-accent"
          >
            Escolher país no mapa
          </Link>
        </div>
      ),
    });

    return lista;
  }, [pais, fotos, colecionadas, diasConcluidos]);

  return (
    <div className="min-h-screen">
      <SiteHeader ativo="album" />

      <main className="mx-auto max-w-5xl px-5 py-8">
        <header className="mb-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-brass">
            Coleção do explorador
          </p>
          <h1 className="mt-1 font-display text-3xl text-foreground sm:text-4xl">
            Álbum do Explorador
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Cada dia carimbado numa expedição cola novas figurinhas aqui.
            Complete o álbum visitando todos os países do mundo — uma folha de
            cada vez.
          </p>

          <div className="mt-4 rounded-2xl border-2 border-border bg-card p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Álbum completo</span>
              <span>
                {colecionadasGeral} de {totalGeral} figurinhas · {pctGeral}%
              </span>
            </div>
            <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-brass transition-all duration-700"
                style={{ width: `${pctGeral}%` }}
              />
            </div>
          </div>
        </header>

        <nav className="mb-5 flex flex-wrap gap-2">
          {paisesComConteudo.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPaisId(p.id)}
              className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm transition-colors ${
                p.id === pais?.id
                  ? "border-brass bg-secondary text-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              <span aria-hidden className="inline-flex items-center">
                <img 
                  src={`https://flagcdn.com/w160/${p.codigo_mapa.toLowerCase()}.png`} 
                  alt="" 
                  className="h-4 w-auto object-contain rounded-sm shadow-sm"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement && !target.parentElement.querySelector('.flag-fallback')) {
                      const span = document.createElement('span');
                      span.className = "flag-fallback";
                      span.textContent = p.bandeira || '🏳️';
                      target.parentElement.appendChild(span);
                    }
                  }}
                />
              </span>
              {p.nome}
            </button>
          ))}
        </nav>

        <AlbumLivro folhas={folhas} />

        <p className="mt-10 text-sm text-muted-foreground">
          <Link to="/passaporte" className="underline underline-offset-4">
            Ver passaporte
          </Link>{" "}
          ·{" "}
          <Link to="/" className="underline underline-offset-4">
            Voltar ao mapa
          </Link>
        </p>
      </main>

      <CompassButton />
    </div>
  );
}
