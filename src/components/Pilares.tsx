"use client";
import * as React from "react";
import { Lightbulb, Cog, Palette, Rocket } from "lucide-react";

const pilares = [
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    title: "Estratégia",
    text: "Planejamento orientado a dados e objetivos.",
    bg: "from-blue-50 to-white",
  },
  {
    icon: <Cog className="w-8 h-8 text-purple-600" />,
    title: "Tecnologia",
    text: "Stack moderna e integrações inteligentes.",
    bg: "from-purple-50 to-white",
  },
  {
    icon: <Palette className="w-8 h-8 text-pink-600" />,
    title: "Criatividade",
    text: "Criação que conecta e converte.",
    bg: "from-pink-50 to-white",
  },
  {
    icon: <Rocket className="w-8 h-8 text-green-600" />,
    title: "Execução",
    text: "Entrega ágil com melhoria contínua.",
    bg: "from-green-50 to-white",
  },
];

export default function Pilares() {
  return (
    <section className="py-16 px-6 mx-auto max-w-7xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Nossos Pilares</h2>
        <p className="text-gray-600 mt-2">
          Metodologia própria da <span className="font-semibold">VORTEX360</span> para resultados consistentes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pilares.map((item, i) => (
          <div
            key={i}
            className={`p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br ${item.bg}`}
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
