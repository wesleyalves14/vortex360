import {
  Search,
  FlaskConical,
  Target,
  PlayCircle,
  TrendingUp,
  Gem,
} from "lucide-react";

const etapas = [
  {
    icon: Search,
    titulo: "Descoberta",
    descricao: "Mergulhamos no seu negócio, mercado e objetivos para entender o cenário completo.",
  },
  {
    icon: FlaskConical,
    titulo: "Diagnóstico",
    descricao: "Analisamos seus dados e ativos digitais para identificar pontos fortes e oportunidades.",
  },
  {
    icon: Target,
    titulo: "Planejamento",
    descricao: "Traçamos um plano de ação estratégico, com metas claras e KPIs definidos.",
  },
  {
    icon: PlayCircle,
    titulo: "Execução",
    descricao: "Colocamos o plano em prática com agilidade e excelência em todas as frentes.",
  },
  {
    icon: TrendingUp,
    titulo: "Otimização",
    descricao: "Monitoramos resultados em tempo real e otimizamos as campanhas continuamente.",
  },
  {
    icon: Gem,
    titulo: "Escala",
    descricao: "Com a base sólida, aceleramos o investimento para escalar resultados de forma sustentável.",
  },
];

export default function Processo360Section() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="flex flex-col space-y-12 md:space-y-16 lg:space-y-20">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-hero-gradient">
              NOSSO MÉTODO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-hero-gradient">
              O Processo 360° para o Sucesso
            </h2>
            <p className="max-w-3xl text-sm sm:text-base md:text-lg text-hero-gradient">
              Uma jornada integrada que conecta estratégia, execução e melhoria contínua para gerar crescimento consistente em cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 gap-y-8 sm:gap-y-10 md:gap-y-12">
            {etapas.map(({ icon: Icon, titulo, descricao }) => (
              <div
                key={titulo}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-cyan-500/30">
                    <Icon className="h-6 w-6 text-[#009739]" aria-hidden="true" />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-white">{titulo}</h3>
                    <p className="text-sm text-zinc-300/90">{descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
