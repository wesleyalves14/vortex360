"use client";

import { Header } from "@/components/ui/Header";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Services } from "@/components/ui/Services";
import { Strategy } from "@/components/ui/Strategy";
import { Process } from "@/components/ui/Process";
import { Testimonials } from "@/components/ui/Testimonials";
import { Faq } from "@/components/ui/Faq";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-white">
      {/* Header fixo */}
      <Header />

      {/* HeroGeometric */}
      <section id="hero">
        <HeroGeometric
          noBg
          noVignette
          badge="VORTEX360"
          title1="Crescimento orientado a"
          title2="dados. Execução 360°."
          subtitle="Transformamos insights em resultados reais. Marketing, tecnologia e execução integrados."
        />
      </section>

      {/* Seção CTA curta */}
      <section className="relative z-20 py-16 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Pronto para acelerar seu crescimento?
        </h2>
        <p className="text-white/70 max-w-2xl mb-6">
          Solicite um diagnóstico gratuito e receba um plano inicial com prioridades claras.
        </p>
        <a
          href="#contato"
          className="px-6 py-3 rounded-full bg-[#00E5FF] text-black font-semibold shadow-[0_0_20px_rgba(0,229,255,0.45)] hover:shadow-[0_0_32px_rgba(0,229,255,0.6)] transition"
        >
          Solicitar Diagnóstico
        </a>
      </section>

      {/* Demais seções com âncoras */}
      <section id="servicos">
        <Services />
      </section>

      <section id="estrategia">
        <Strategy />
      </section>

      <section id="processo">
        <Process />
      </section>

      <section id="depoimentos">
        <Testimonials />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="contato">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
