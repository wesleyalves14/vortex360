import GlassHeader from "@/components/ui/GlassHeader";
import SectionSolucoes from "@/components/ui/SectionSolucoes";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Demo from "@/components/ui/demo";
import TestimonialsSection from "@/components/sections/testimonials";
import Processo360Section from "@/components/sections/Processo360Section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <GlassHeader />
      <HeroGeometric badge="VORTEX360" title1="Elevando sua" title2="Visão Digital" />
      <SectionSolucoes />
      <Demo />
      <Processo360Section />
      <TestimonialsSection />
    </main>
  );
}
