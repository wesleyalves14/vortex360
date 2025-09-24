"use client";
import SolucoesServicos from "./SolucoesServicos";

export default function SectionSolucoes() {
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-transparent py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="relative z-10 flex flex-col space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8">
            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[12px] font-semibold tracking-widest text-white/80 backdrop-blur-md">
              NOSSAS SOLUÇÕES
            </span>

            {/* Título */}
            <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Marketing <span className="whitespace-nowrap">360º</span> para{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-sky-200 to-rose-200">
                acelerar
              </span>{" "}
              seu crescimento
            </h2>

            {/* Subtítulo */}
            <p className="text-base md:text-lg text-white/70">
              Oferecemos um arsenal completo de serviços para construir, otimizar e
              escalar sua presença online.
            </p>
          </div>
        </div>

        {/* >>> ADICIONE ESTA LINHA ABAIXO DO SUBTÍTULO <<< */}
        <SolucoesServicos />
      </div>
    </section>
  );
}
