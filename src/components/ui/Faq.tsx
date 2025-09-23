"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "Coletamos informações-chave sobre seu negócio, objetivos e canais atuais. Em seguida, apresentamos oportunidades prioritárias e um plano inicial sem custo.",
  },
  {
    q: "Quais serviços estão inclusos no Marketing 360°?",
    a: "Estratégia, mídia paga, branding, conteúdo, desenvolvimento web, funis e consultoria – tudo integrado para acelerar resultados.",
  },
  {
    q: "Vocês atendem empresas de todo o Brasil?",
    a: "Sim. Trabalhamos de forma remota com processos e ferramentas colaborativas para atender clientes em qualquer região.",
  },
  {
    q: "O que diferencia a VORTEX360 das demais agências?",
    a: "Foco em métricas, execução integrada e melhoria contínua. Unimos estratégia, tecnologia e criatividade com obsessão por resultado.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-[#070A11] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            Tudo o que você precisa saber
          </h2>
        </div>

        <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-5">
                <button
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="text-sm font-semibold text-white sm:text-base">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-white transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`overflow-hidden text-white/75 transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? "max-h-60 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-sm sm:text-base">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
