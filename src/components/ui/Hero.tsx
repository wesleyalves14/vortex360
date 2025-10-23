import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#05070B]"
      aria-labelledby="hero-title"
    >
      {/* Spotlight / glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.22)_0%,rgba(0,229,255,0.12)_25%,transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-150px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18)_0%,transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 sm:px-6 lg:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
              Crescimento orientado a dados. Execução 360°.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Transformamos insights em resultados reais. Marketing, tecnologia e execução integrados para acelerar o crescimento do seu negócio.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#comecar"
              className="rounded-full bg-[#00E5FF] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(0,229,255,0.45)] transition-transform hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(0,229,255,0.6)]"
            >
              Começar Agora
            </Link>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3">
          <MetricCard value="+349" label="clientes atendidos" />
          <MetricCard value="97%" label="de satisfação" />
          <MetricCard value="65%" label="de crescimento médio" />
        </div>
      </div>
    </section>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-white/70">{label}</div>
    </div>
  );
}
