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
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8" />
        </div>

        {/* >>> ADICIONE ESTA LINHA ABAIXO DO SUBTÍTULO <<< */}
        <SolucoesServicos />
      </div>
    </section>
  );
}
