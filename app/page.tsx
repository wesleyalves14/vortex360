import { HeroGeometric } from "../components/ui/shape-landing-hero";
import Pilares from "../components/Pilares";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroGeometric badge="VORTEX360" title1="Elevando sua" title2="Visão Digital" />

      <section className="flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">VORTEX360</h1>
          <p className="text-gray-600">Estrutura inicial limpa e estável</p>
        </div>
      </section>

      <Pilares />
    </main>
  );
}
