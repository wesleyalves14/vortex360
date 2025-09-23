import { GlowCard } from "@/components/ui/spotlight-card";
import { Rocket, BarChart3, Sparkles } from "lucide-react";

export function DefaultGlowCardsDemo() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Card 1 */}
        <GlowCard className="flex flex-col justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-white/10 p-2">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Lançamento Ágil</h3>
              <p className="text-sm text-white/70">
                Tire seu produto do papel com um time focado em velocidade e qualidade.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-lg px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/10 text-sm transition"
            >
              Começar agora
            </a>
          </div>
        </GlowCard>

        {/* Card 2 */}
        <GlowCard glowColor="purple" className="flex flex-col justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-white/10 p-2">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Crescimento Orientado a Dados</h3>
              <p className="text-sm text-white/70">
                Otimize funil, mídia e conversões com análises em tempo real.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-lg px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/10 text-sm transition"
            >
              Ver planos
            </a>
          </div>
        </GlowCard>

        {/* Card 3 */}
        <GlowCard glowColor="green" className="flex flex-col justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-white/10 p-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Branding + Experiência</h3>
              <p className="text-sm text-white/70">
                Design consistente, copy afiada e UX que converte do primeiro clique.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-lg px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/10 text-sm transition"
            >
              Explorar cases
            </a>
          </div>
        </GlowCard>
      </div>
    </div>
  );
}

