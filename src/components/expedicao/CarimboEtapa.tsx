import { StarStamp } from "@/components/StarStamp";

interface Props {
  bandeira: string;
  dia: number;
  nomePais: string;
}

export function CarimboEtapa({ bandeira, dia, nomePais }: Props) {
  return (
    <div className="star-drop flex items-center gap-4 rounded-md border-2 border-dashed border-brass bg-accent/40 p-4">
      <StarStamp bandeira={bandeira} tamanho={48} titulo={`Etapa do dia ${dia} concluída`} />
      <div className="min-w-0">
        <p className="font-display text-base text-foreground">Carimbo da etapa conquistado</p>
        <p className="text-sm text-muted-foreground">
          Dia {dia} de {nomePais} concluído com suas observações registradas.
        </p>
      </div>
    </div>
  );
}
