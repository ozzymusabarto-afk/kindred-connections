import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/cadastro")({
  component: Cadastro,
});

function Cadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("diario:explorador-dados");
    if (saved) {
      const parsed = JSON.parse(saved);
      setNome(parsed.nome || "");
      setIdade(parsed.idade || "");
    }
  }, []);

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("diario:explorador-dados", JSON.stringify({ nome, idade }));
    toast.success("Dados do explorador salvos com sucesso!");
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <SiteHeader ativo="cadastro" />
      <main className="mx-auto max-w-4xl px-5 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-rounded font-bold text-sky-900">Cadastro do Explorador</h1>
          <p className="text-sky-700 mt-2 font-medium">Prepare seus documentos para a grande viagem!</p>
        </div>

        <Card className="max-w-md mx-auto rounded-[2rem] border-4 border-white shadow-xl">
          <CardHeader className="text-center border-b border-sky-100 bg-sky-50/50">
            <div className="mx-auto bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-inner mb-4">
              <User className="w-8 h-8 text-sky-500" />
            </div>
            <CardTitle className="text-2xl font-display text-sky-900">Ficha de Identificação</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSalvar} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-sky-700 ml-1">NOME DO EXPLORADOR</label>
                <Input 
                  placeholder="Como você se chama?" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="rounded-xl border-2 border-sky-100 focus:border-sky-500 transition-all h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-sky-700 ml-1">IDADE</label>
                <Input 
                  type="number" 
                  placeholder="Quantos anos você tem?" 
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  className="rounded-xl border-2 border-sky-100 focus:border-sky-500 transition-all h-12"
                />
              </div>
              <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-xl h-12 font-bold text-lg shadow-lg transition-all hover:scale-[1.02]">
                <ShieldCheck className="mr-2 h-5 w-5" />
                Salvar Dados
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
