"use client";
import { Lightbulb, Cog, Palette, Rocket } from "lucide-react";

const itens = [
  {
    icon: <Lightbulb className="size-6" />,
    color: "text-blue-600",
    title: "Estratégia",
    desc: "Planejamento orientado a dados e objetivos.",
  },
  {
    icon: <Cog className="size-6" />,
    color: "text-purple-600",
    title: "Tecnologia",
    desc: "Stack moderna e integrações inteligentes.",
  },
  {
    icon: <Palette className="size-6" />,
    color: "text-pink-600",
    title: "Criatividade",
    desc: "Criação que conecta e converte.",
  },
  {
    icon: <Rocket className="size-6" />,
    color: "text-green-600",
    title: "Execução",
    desc: "Entrega ágil com melhoria contínua.",
  },
];

export default function Pilares() {
  return (
    <section className="px-6 py-16 mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Nossos Pilares</h2>
        <p className="mt-2 text-gray-600">Metodologia própria da VORTEX360 para resultados consistentes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {itens.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl p-8 shadow-md bg-gradient-to-br from-slate-50 to-white border border-black/5 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`size-10 rounded-xl bg-white/80 flex items-center justify-center shadow-sm ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
