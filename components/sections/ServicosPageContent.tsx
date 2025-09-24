"use client";

import Image from "next/image";
import { useState, type ComponentType, type SVGProps, type ReactNode } from "react";
import {
  Briefcase,
  Megaphone,
  Palette,
  MonitorSmartphone,
  BarChart3,
  Share2,
  Handshake,
} from "lucide-react";

type TabId = "gestao" | "midia" | "criativos" | "paginas" | "dados" | "crm" | "vendas";

const tabs: Array<{
  id: TabId;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  { id: "gestao", label: "GESTÃO", icon: Briefcase },
  { id: "midia", label: "MÍDIA", icon: Megaphone },
  { id: "criativos", label: "CRIATIVOS", icon: Palette },
  { id: "paginas", label: "PÁGINAS", icon: MonitorSmartphone },
  { id: "dados", label: "DADOS", icon: BarChart3 },
  { id: "crm", label: "CRM", icon: Share2 },
  { id: "vendas", label: "VENDAS", icon: Handshake },
];

const ServicePanel = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>
    <div className="rounded-3xl border border-white/10 ring-1 ring-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
      <div className="p-6 sm:p-8 lg:p-10">{children}</div>
    </div>
  </div>
);

type TabContent = {
  title: string;
  description?: string;
  bullets: string[];
  mock: () => ReactNode;
};

const tabContent: Record<TabId, TabContent> = {
  gestao: {
    title: "Orquestração completa da estratégia",
    description:
      "Planejamos e conduzimos o marketing 360° com rituais de acompanhamento, metas claras e squads enxutos dedicados ao seu crescimento.",
    bullets: [
      "Roadmap trimestral com metas mensais e responsáveis definidos",
      "Gestão de budget por canal com otimizações contínuas",
      "Dashboard executivo com indicadores de performance e saúde do funil",
    ],
    mock: () => (
      <div className="grid grid-cols-2 grid-rows-3 gap-4">
        <div className="col-start-2 row-start-1">
          <Image
            src="/servicos/gestao-1.svg"
            alt="Mock gestão 1"
            width={480}
            height={320}
            className="w-full h-auto rounded-2xl object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
            priority
          />
        </div>
        <div className="col-start-1 row-start-2 row-span-2">
          <Image
            src="/servicos/gestao-2.svg"
            alt="Mock gestão 2"
            width={480}
            height={600}
            className="w-full h-auto rounded-2xl aspect-[4/5] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
          />
        </div>
        <div className="col-start-2 row-start-2 row-span-2">
          <Image
            src="/servicos/gestao-3.svg"
            alt="Mock gestão 3"
            width={480}
            height={600}
            className="w-full h-auto rounded-2xl aspect-[4/5] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
          />
        </div>
      </div>
    ),
  },
  midia: {
    title: "Performance em múltiplos canais",
    description:
      "Criamos campanhas de mídia paga multicanal com criativos testados A/B, automações e ajustes em tempo real para maximizar ROI.",
    bullets: [
      "Operação em Google, Meta, LinkedIn, TikTok e Programática",
      "Estruturação de remarketing e funis por estágio",
      "Relatórios semanais com insights acionáveis",
    ],
    mock: () => (
      <Image
        src="/servicos/midia-bubbles.svg"
        alt="Mock de rede de mídia"
        width={800}
        height={520}
        className="w-full h-auto rounded-3xl object-contain"
      />
    ),
  },
  criativos: {
    title: "Conteúdo que gera conexão",
    description:
      "Produzimos campanhas criativas, roteiros e peças modulares alinhadas à sua brand voice, com foco em conversão e consistência.",
    bullets: [
      "Pacotes de vídeos, motion e estáticos otimizados para mídia",
      "Copywriting orientado a testes e análise de padrões",
      "Brand book vivo para sustentar identidade omnichannel",
    ],
    mock: () => (
      <div className="relative mx-auto lg:mx-0 w-full max-w-[820px] overflow-visible">
        <div className="relative w-full rounded-3xl ring-1 ring-white/10 bg-white/5">
          <div className="pt-[56%]" />
          <Image
            src="/servicos/criativos-browser.svg"
            alt="Mockup de peça criativa no navegador"
            fill
            className="absolute inset-0 h-full w-full object-contain rounded-3xl pointer-events-none select-none"
          />
        </div>
      </div>
    ),
  },
  paginas: {
    title: "Web Design",
    bullets: [
      "Páginas para e-commerce criadas com as melhores práticas de web design",
      "Plataformas projetadas e otimizadas para conversão",
      "Projetadas com as melhores ferramentas do mercado",
    ],
    mock: () => (
      <div className="relative w-full rounded-3xl ring-1 ring-white/10 bg-white/5">
        <div className="pt-[56%]" />
        <Image
          src="/servicos/paginas-browser.svg"
          alt="Mockup de página em navegador"
          fill
          className="absolute inset-0 h-full w-full object-contain rounded-3xl pointer-events-none select-none"
        />
      </div>
    ),
  },
  dados: {
    title: "Inteligência para decisões rápidas",
    description:
      "Centralizamos dados de marketing, vendas e produto para gerar insights preditivos, projeções e alertas automáticos de performance.",
    bullets: [
      "Implementação de tagging e governança de dados cross-channel",
      "Dashboards customizados no Looker Studio e Power BI",
      "Modelos de atribuição e previsão sob medida",
    ],
    mock: () => (
      <Image
        src="/servicos/dados-dashboard.svg"
        alt="Mock de dashboard de dados"
        width={980}
        height={560}
        className="w-full h-auto rounded-3xl object-contain"
      />
    ),
  },
  crm: {
    title: "Relações que escalam",
    description:
      "Desenhamos jornadas pós-conversão com segmentação dinâmica, automações multicanal e nutrição personalizada para elevar LTV.",
    bullets: [
      "Mapeamento de fluxos de onboarding, retenção e reativação",
      "Campanhas em e-mail, WhatsApp e SMS integradas",
      "Higienização de base e monitoramento de engajamento",
    ],
    mock: () => (
      <Image
        src="/servicos/crm-kanban.svg"
        alt="Mock de kanban CRM"
        width={880}
        height={560}
        className="w-full h-auto rounded-3xl object-contain"
      />
    ),
  },
  vendas: {
    title: "Time comercial de alta performance",
    description:
      "Integramos marketing e vendas com playbooks, capacitação contínua e SDRs compartilhando a mesma régua de relacionamento.",
    bullets: [
      "Implementação de cadências e roteiros alinhados ao funil",
      "Ferramentas de sales engagement conectadas ao CRM",
      "Painéis com previsibilidade e acompanhamento de pipeline",
    ],
    mock: () => (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Image src="/servicos/vendas-1.svg" alt="Mock retrato comercial 1" width={360} height={560} className="w-full h-auto rounded-2xl object-cover" />
        <Image src="/servicos/vendas-2.svg" alt="Mock retrato comercial 2" width={360} height={560} className="w-full h-auto rounded-2xl object-cover" />
        <Image src="/servicos/vendas-3.svg" alt="Mock retrato comercial 3" width={360} height={560} className="w-full h-auto rounded-2xl object-cover" />
      </div>
    ),
  },
};

export default function ServicosPageContent() {
  const [activeTab, setActiveTab] = useState<TabId>("gestao");

  const active = tabContent[activeTab];

  return (
    <main className="relative isolate overflow-hidden bg-[#05070B]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.22)_0%,rgba(0,229,255,0.12)_25%,transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-150px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18)_0%,transparent_60%)] blur-3xl" />
      </div>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-white/80">
              Transforme o marketing da sua empresa em
              <span className="ml-2 text-hero-gradient">APENAS 3 PASSOS</span>
            </span>

            <div className="space-y-6 md:space-y-8">
              <h1 className="relative z-10 container mx-auto max-w-6xl px-4 text-center font-extrabold leading-[1.05] tracking-tight text-balance overflow-visible">
                <span className="block text-hero-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  vortex <span>É</span> MARKETING
                  <span aria-hidden="true" className="align-middle ml-3 inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-white/10 bg-white/5 text-hero-gradient text-base sm:text-lg md:text-xl">
                    360°
                  </span>
                  <span className="sr-only">360 graus</span>
                </span>

                <span className="mt-2 block text-hero-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  MARKETING É VENDA
                </span>
              </h1>
              <div className="mx-auto h-px w-24 bg-white/15" />
              <p className="mt-4 text-center text-zinc-300/90 text-sm sm:text-base md:text-lg">
                desde 2015 gerando receita com soluçoes de marketing digital
              </p>
            </div>

            <div className="w-full space-y-10 md:space-y-12">
              <div role="tablist" aria-label="Serviços VORTEX360" className="flex flex-wrap justify-center gap-3 md:gap-4">
                {tabs.map(({ id, label, icon: Icon }) => {
                  const isActive = id === activeTab;
                  return (
                    <button
                      key={id}
                      type="button"
                      role="tab"
                      id={`tab-${id}`}
                      aria-selected={isActive}
                      aria-controls={`panel-${id}`}
                      onClick={() => setActiveTab(id)}
                      className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                        isActive
                          ? "border-b-2 border-cyan-300 text-white"
                          : "border-b-2 border-transparent text-white/60 hover:text-white/80"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? "text-cyan-300" : "text-white/50 group-hover:text-white/70"}`} aria-hidden="true" />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>

              <ServicePanel className="py-12 sm:py-16 lg:py-20">
                <div
                  className={
                    activeTab === "criativos"
                      ? "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                      : "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
                  }
                >
                  <div className="max-w-xl">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">{active.title}</h3>
                    {active.description && (
                      <p className="mt-3 text-base md:text-lg text-zinc-300/90">{active.description}</p>
                    )}
                    <ul className="mt-6 space-y-3 text-sm md:text-base text-zinc-200">
                      {active.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden="true" className="mt-1 text-cyan-300">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {activeTab === "criativos" ? (
                    active.mock()
                  ) : (
                    <div className="relative mx-auto lg:mx-0 w-full max-w-[560px] overflow-visible isolate">
                      {active.mock()}
                    </div>
                  )}
                </div>
              </ServicePanel>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 space-y-12 md:space-y-16">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-gradient">Certificações VORTEX360</h2>
            <p className="mx-auto max-w-2xl text-base text-zinc-300/90">
              Parcerias oficiais que comprovam nossa capacidade técnica e acesso a soluções avançadas para gerar crescimento previsível.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {[{
              title: "Google Partner",
              description: "Equipes treinadas e certificadas para operar Search, Display, YouTube e Performance Max com excelência.",
              badge: "GOOGLE PARTNER",
            }, {
              title: "Meta Business Partner",
              description: "Operamos campanhas em Meta Ads com acesso antecipado a recursos, suporte dedicado e creative shop.",
              badge: "META PARTNER",
            }].map(({ title, description, badge }) => (
              <div key={title} className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-xs font-semibold text-white/70">
                    {badge}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="text-sm text-zinc-300/90">{description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 text-sm text-zinc-300/90">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <strong className="text-white">Benefícios</strong>
                    <p className="mt-2 text-white/70">Suporte direto, créditos promocionais e acesso a betas para acelerar suas campanhas.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <strong className="text-white">Impacto</strong>
                    <p className="mt-2 text-white/70">Integração profunda com seu time para potencializar cada real investido.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 space-y-10 md:space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-hero-gradient">Clientes VORTEX360</h2>
            <p className="mx-auto max-w-2xl text-base text-zinc-300/90">
              Mais de 300 marcas aceleradas com projetos de growth, produto e vendas integradas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {["Marca 1", "Marca 2", "Marca 3", "Marca 4", "Marca 5", "Marca 6", "Marca 7", "Marca 8", "Marca 9", "Marca 10", "Marca 11", "Marca 12"].map((logo) => (
              <div
                key={logo}
                className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-wide text-white/60"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
