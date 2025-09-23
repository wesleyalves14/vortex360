import { Activity, Target, Rocket, BarChart3, Sliders, Trophy } from "lucide-react";
import { ServiceGlowCard } from "@/components/ui/service-glow-card";

const steps = [
  { icon: Activity, title: "Diagnóstico", text: "Levantamento de contexto e oportunidades." },
  { icon: Target, title: "Estratégia", text: "Plano tático alinhado a metas." },
  { icon: Rocket, title: "Execução", text: "Implementação ágil e integrada." },
  { icon: BarChart3, title: "Monitoramento", text: "Acompanhamento de KPIs essenciais." },
  { icon: Sliders, title: "Otimização", text: "Testes e ajustes constantes." },
  { icon: Trophy, title: "Resultados", text: "Crescimento sustentável e mensurável." },
];

export function Process() {
  return (
    <section className="relative bg-[#05070B] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            O Processo 360° para o Sucesso
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <ServiceGlowCard key={title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B111A] ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-[#00E5FF]" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{text}</p>
            </ServiceGlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
