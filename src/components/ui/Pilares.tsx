"use client";
import * as React from "react";
import { ServiceGlowCard } from "@/components/ui/service-glow-card";
import { Lightbulb, Cog, Palette, Rocket } from "lucide-react";

type Pillar = {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: "blue" | "purple" | "green" | "orange";
};

const pilares: Pillar[] = [
  {
    icon: <Lightbulb className="size-6 text-cyan-400" />,
    title: "Estratégia",
    text: "Planejamento orientado a dados e objetivos.",
    color: "blue",
  },
  {
    icon: <Cog className="size-6 text-cyan-400" />,
    title: "Tecnologia",
    text: "Stack moderna e integrações inteligentes.",
    color: "purple",
  },
  {
    icon: <Palette className="size-6 text-cyan-400" />,
    title: "Criatividade",
    text: "Criação que conecta e converte.",
    color: "green",
  },
  {
    icon: <Rocket className="size-6 text-cyan-400" />,
    title: "Execução",
    text: "Entrega ágil com melhoria contínua.",
    color: "orange",
  },
];

export default function Pilares() {
  return (
    <section className="py-16 px-6 mx-auto max-w-7xl text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Nossos Pilares</h2>
        <p className="text-white/60 mt-2">
          Metodologia própria da <span className="font-semibold">VORTEX360</span> para resultados consistentes
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {pilares.map((item) => (
          <ServiceGlowCard key={item.title} glowColor={item.color}>
            <div>
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-cyan-500/40 p-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.text}</p>
            </div>
          </ServiceGlowCard>
        ))}
      </div>
    </section>
  );
}

