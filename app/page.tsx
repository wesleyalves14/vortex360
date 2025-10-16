import SectionSolucoes from "@/components/ui/SectionSolucoes";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Demo from "@/components/ui/demo";
import TestimonialsSection from "@/components/sections/testimonials";
import Processo360Section from "@/components/sections/Processo360Section";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroGeometric
        badge={null}
        title1="Eleve sua"
        title2="Visão Digital"
        subtitle="Criando experiências digitais excepcionais por meio de design inovador e tecnologia de ponta."
      />
      <SectionSolucoes />
      <Demo />
      <Processo360Section />
      <TestimonialsSection />
      <LeadCaptureSection />
    </main>
  );
}
