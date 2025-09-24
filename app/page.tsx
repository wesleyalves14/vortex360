import GlassHeader from "../components/ui/GlassHeader";
import SectionSolucoes from "../components/ui/SectionSolucoes";
import { HeroGeometric } from "../components/ui/shape-landing-hero";
import Demo from "@/components/ui/demo";
import TestimonialsSection from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GlassHeader />
      <HeroGeometric badge="VORTEX360" title1="Elevando sua" title2="Visão Digital" />
      {/* mantenha aqui o que já vem logo abaixo (ex.: cards/Stats dentro do Hero) */}
      <SectionSolucoes />
      {/* Nova seção Demo abaixo da seção atual (herda o fundo global) */}
      <Demo />
      <TestimonialsSection />
    </main>
  );
}
