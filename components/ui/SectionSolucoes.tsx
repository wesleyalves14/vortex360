"use client";
import SolucoesServicos from "./SolucoesServicos";

export default function SectionSolucoes() {
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-transparent py-20 md:py-28"
    >
      {/* Overlay ajustado para não escurecer o fundo global */}
      <div className="absolute inset-0 pointer-events-none bg-transparent -z-10" />

      <div className="relative z-10 container mx-auto px-6 md:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[12px] font-semibold tracking-widest text-white/80 backdrop-blur-md">
            NOSSAS SOLUÇÕES
          </span>
        </div>

        {/* Título */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          Marketing <span className="whitespace-nowrap">360º</span> para{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-sky-200 to-rose-200">
            acelerar
          </span>{" "}
          seu crescimento
        </h2>

        {/* Subtítulo */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-white/70 text-base md:text-lg">
          Oferecemos um arsenal completo de serviços para construir, otimizar e
          escalar sua presença online.
        </p>
      </div>

      {/* >>> ADICIONE ESTA LINHA ABAIXO DO SUBTÍTULO <<< */}
      <SolucoesServicos />
    </section>
  );
}
