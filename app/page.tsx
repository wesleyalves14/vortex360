import GlassHeader from "../components/ui/GlassHeader";
import SectionSolucoes from "../components/ui/SectionSolucoes";
import { HeroGeometric } from "../components/ui/shape-landing-hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GlassHeader />
      <HeroGeometric badge="VORTEX360" title1="Elevando sua" title2="Visão Digital" />
      {/* mantenha aqui o que já vem logo abaixo (ex.: cards/Stats dentro do Hero) */}
      <SectionSolucoes />
    </main>
  );
}
