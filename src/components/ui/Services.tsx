import { Button } from "./Button";
import { ServiceGlowCard } from "@/components/ui/service-glow-card";
import {
  TrendingUp,
  Sparkles,
  Code2,
  FileText,
  Funnel,
  Compass,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: TrendingUp,
    title: "Gestão de Tráfego Pago",
    text: "Google Ads, Meta Ads, LinkedIn.",
  },
  {
    icon: Sparkles,
    title: "Branding & Posicionamento",
    text: "Identidade forte e estratégica.",
  },
  { icon: Code2, title: "Desenvolvimento Web", text: "Sites, e-commerces, integrações." },
  {
    icon: FileText,
    title: "Copywriting e Conteúdo",
    text: "Textos que convertem.",
  },
  { icon: Funnel, title: "Funis de Vendas", text: "Automação e otimização." },
  {
    icon: Compass,
    title: "Consultoria Estratégica",
    text: "Visão completa 360°.",
  },
];

export function Services() {
  return (
    <section className="relative bg-[#070A11] py-16 sm:py-20 lg:py-24" id="servicos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            Marketing 360° para acelerar seu crescimento
          </h2>
          <p className="mt-3 text-sm text-white/75 sm:text-base">
            Unimos estratégia, tecnologia e execução para levar sua marca mais longe
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <ServiceGlowCard key={title} className="group">
              <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:items-center sm:justify-start sm:text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B111A] ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-[#00E5FF]" />
                </div>
                <h3 className="text-base font-semibold text-white text-center sm:text-left">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 text-center sm:text-left">{text}</p>
              <div className="mt-5 text-center sm:text-left">
                <Link href="#" className="inline-block">
                  <Button variant="outlineGlow">Saiba Mais</Button>
                </Link>
              </div>
            </ServiceGlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
