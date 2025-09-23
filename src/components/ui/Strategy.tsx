import { Cpu, Lightbulb, Palette, Rocket } from "lucide-react";
import { ServiceGlowCard } from "@/components/ui/service-glow-card";

const items = [
  { icon: Lightbulb, title: "Estratégia", text: "Planejamento orientado a dados e objetivos." },
  { icon: Cpu, title: "Tecnologia", text: "Stack moderna e integrações inteligentes." },
  { icon: Palette, title: "Criatividade", text: "Criação que conecta e converte." },
  { icon: Rocket, title: "Execução", text: "Entrega ágil com melhoria contínua." },
];

export function Strategy() {
  return (
    <section className="relative bg-[#05070B] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.18)_0%,transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            Onde a estratégia encontra a execução
          </h2>
          <p className="mt-3 text-sm text-white/75 sm:text-base">
            Metodologia própria da VORTEX360 para resultados consistentes
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 md:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <ServiceGlowCard key={title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B111A] ring-1 ring-[#00E5FF]/40">
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
